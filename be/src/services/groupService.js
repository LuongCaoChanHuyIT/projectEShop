import db from "../models";

const init = async () => {};
const get = async () => {
  try {
    let data = await db.Group.findAll();
    if (data) {
      return {
        mes: "get all Group",
        err: 0,
        data: data,
      };
    } else {
      return {
        mes: "Group is exit",
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
