import db from "../models";

const init = async (data) => {
  try {
    let Role = await db.Role.findOne({
      where: { url: data.url },
    });

    if (!Role) {
      data = await db.Role.create({
        url: data.url,
        description: data.description,
      });

      return {
        mes: "Create new Role success",
        err: 0,
        data: data,
      };
    } else {
      return {
        mes: "Role create is exit",
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
    let data = await db.Role.findAll({ include: db.Group });
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
const getOne = async (id) => {
  try {
    let data = await db.Role.findOne(
      { where: { id: id } },
      { include: db.Group }
    );
    if (data) {
      return {
        mes: "get one Role",
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
const set = async (data) => {
  try {
    let Role = await db.Role.update(
      {
        url: data.url,
        description: data.description,
      },
      { where: { url: data.url } }
    );
    if (Role) {
      return {
        mes: "update Role success",
        err: 0,
        data: Role,
      };
    } else {
      return {
        mes: "update Role error",
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
    // console.log("des Role ok", id);
    await db.Role.destroy({
      where: { id: id },
    });

    return {
      mes: "Role is delete",
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
