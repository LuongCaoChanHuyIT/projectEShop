import axios from "./axios";
const signIn = (data) => {
  // console.log(data);
  return axios.post("/signIn", { ...data });
};
const signUp = (data) => {
  return axios.post("/signUp", { ...data });
};

export { signIn, signUp };
