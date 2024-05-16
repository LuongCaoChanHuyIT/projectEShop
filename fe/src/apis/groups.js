import axios from "./axios";
const initGroup = (data) => {
  return axios.post("/group/init", { ...data });
};
const getGroup = () => {
  return axios.get("/group/get");
};
const setGroup = (data) => {
  return axios.put("/group/set", { ...data });
};
const desGroup = (id) => {
  const requestData = { id: id, reason: "No longer needed" };
  return axios.delete("/group/des", { data: requestData });
};
const getGroupOne = (id) => {
  return axios.post("/group/get/one", { id: id });
};

export { initGroup, getGroup, setGroup, desGroup, getGroupOne };
