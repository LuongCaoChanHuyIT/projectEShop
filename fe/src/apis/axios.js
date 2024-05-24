import axios from "axios"; // Set config defaults when creating the instance

import { toast } from "react-toastify";
const instance = axios.create({
  baseURL: "http://localhost:8080/api",
});

instance.defaults.withCredentials = true;
// // Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("jwt")}`;
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = (error.response && error.response.status) || 500;
    switch (status) {
      case 401: {
        toast.error("not authenticated the user");
        window.location.href = "/";
        return Promise.reject(error);
      }
      // forbidden (permission related issues)
      case 403: {
        toast.error("you don't permission to access this resource");
        return Promise.reject(error);
      }
      // bad request
      case 400: {
        toast.error("bad request");
        return Promise.reject(error);
      }
      // not found
      case 404: {
        toast.error("not found");
        return Promise.reject(error);
      }
      // conflict
      case 409: {
        toast.error("conflict");
        return Promise.reject(error);
      }
      // unprocessable
      case 422: {
        toast.error("unprocessable");
        return Promise.reject(error);
      }
      // generic api error (server related) unexpected
      default: {
        toast.error("generic api error");
        return Promise.reject(error);
      }
    }
  }
);
export default instance;
