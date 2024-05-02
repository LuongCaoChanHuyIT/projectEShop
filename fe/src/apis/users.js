import axios from "./axios";
const initUser = (data) => {
  console.log(data);
  return axios.post("/user/init", { ...data });
  // {
  //   email: data.email,
  //   password: data.password,
  //   userName: data.userName,
  //   group: data.group,
  // }
};
const getUser = () => {
  return axios.get("/user/get");
};
const setUser = (data) => {
  return axios.put("/user/des", data);
};
const desUser = (user) => {
  return axios.delete("/user/des", data);
};

export { initUser, getUser, setUser, desUser };
