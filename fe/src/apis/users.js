import axios from "./axios";
const initUser = (data) => {
  // console.log(data);
  return axios.post("/user/init", { ...data });
};
const getUser = () => {
  return axios.get("/user/get");
};
const setUser = (data) => {
  return axios.put("/user/set", { ...data });
};
const desUser = (id) => {
  const requestData = { id: id, reason: "No longer needed" };
  // console.log(id);
  return axios.delete("/user/des", { data: requestData });
};
const getUserOne = (id) => {
  return axios.post("/user/get/one", { id: id });
};

export { initUser, getUser, setUser, desUser, getUserOne };
