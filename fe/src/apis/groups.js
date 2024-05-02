import axios from "./axios";
const initGroup = (data) => {
  return axios.post("/group/init", data);
};
const getGroup = () => {
  return axios.get("/group/get");
};
const setGroup = (data) => {
  return axios.put("/group/des", data);
};
const desGroup = (group) => {
  return axios.delete("/group/des", data);
};

export { initGroup, getGroup, setGroup, desGroup };
