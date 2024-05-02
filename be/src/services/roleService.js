import db from "../models";

const init = async () => {};
const get = async () => {
  try {
    let data = await db.Role.findAll();
    if (data) {
      return {
        mes: "get all Role",
        err: 0,
        data: data,
      };
    } else {
      return {
        mes: "Role is exit",
        err: 1,
        data: {},
      };
    }
  } catch (error) {
    console.log(error);
  }
};
const set = async (data) => {};
const des = async (id) => {};

module.exports = {
  init,
  get,
  set,
  des,
};
