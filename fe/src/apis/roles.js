import axios from "./axios";
const initRole = (data) => {
  return axios.post("/role/init", { ...data });
};
const getRole = () => {
  return axios.get("/role/get");
};
const setRole = (data) => {
  return axios.put("/role/set", { ...data });
};
const desRole = (id) => {
  const requestData = { id: id, reason: "No longer needed" };
  return axios.delete("/role/des", { data: requestData });
};
const getRoleOne = (id) => {
  return axios.post("/role/get/one", { id: id });
};

export { initRole, getRole, setRole, desRole, getRoleOne };
