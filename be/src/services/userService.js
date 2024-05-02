import db from "../models";

const init = async (data) => {
  try {
  } catch {}
};
const get = async () => {
  try {
    let data = await db.User.findAll({ include: db.Group });
    if (data) {
      return {
        mes: "get all user",
        err: 0,
        data: data,
      };
    } else {
      return {
        mes: "user is exit",
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
