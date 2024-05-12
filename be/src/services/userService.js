import { where } from "sequelize";
import db from "../models";
import { hashPassword } from "./bcryptFunc";
const init = async (data) => {
  try {
    if (data) {
      let group = await db.Group.findOne({
        where: { name: data.group },
      });

      data = await db.User.create({
        userName: data.userName,
        password: data.password,
        email: data.email,
        groupId: group.dataValues.id,
      });

      return {
        mes: "Create new user success",
        err: 0,
        data: data,
      };
    } else {
      return {
        mes: "data create is exit",
        err: 1,
        data: {},
      };
    }
  } catch (error) {
    console.log(error);
  }
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
const getOne = async (id) => {
  try {
    let data = await db.User.findOne({ where: { id: id } });
    if (data) {
      return {
        mes: "get one user",
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
const set = async (data) => {
  try {
    let group = await db.Group.findOne({
      where: { name: data.group },
    });

    let user = await db.User.update(
      {
        userName: data.userName,
        password: data.password,
        email: data.email,
        groupId: group.dataValues.id,
      },
      { where: { email: data.email } }
    );
    if (user) {
      return {
        mes: "update user success",
        err: 0,
        data: user,
      };
    } else {
      return {
        mes: "update user error",
        err: 1,
        data: {},
      };
    }
  } catch (error) {
    console.log(error);
  }
};
const des = async (id) => {
  try {
    // console.log("des user ok", id);
    await db.User.destroy({
      where: { id: id },
    });

    return {
      mes: "user is delete",
      err: 0,
      data: {},
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  init,
  get,
  set,
  des,
  getOne,
};
