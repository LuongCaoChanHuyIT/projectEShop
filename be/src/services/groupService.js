import db from "../models";

const init = async (data) => {
  try {
    let Group = await db.Group.findOne({
      where: { name: data.name },
    });

    if (!Group) {
      data = await db.Group.create({
        name: data.name,
        description: data.description,
      });

      return {
        mes: "Create new Group success",
        err: 0,
        data: data,
      };
    } else {
      return {
        mes: "Group create is exit",
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
    let data = await db.Group.findAll({ include: db.Role });
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
const getOne = async (id) => {
  try {
    let data = await db.Group.findOne(
      { where: { id: id } },
      { include: db.Role }
    );
    if (data) {
      return {
        mes: "get one Group",
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
const set = async (data) => {
  try {
    let Group = await db.Group.update(
      {
        name: data.name,
        description: data.description,
      },
      { where: { name: data.name } }
    );
    if (Group) {
      return {
        mes: "update Group success",
        err: 0,
        data: Group,
      };
    } else {
      return {
        mes: "update Group error",
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
    // console.log("des Group ok", id);
    await db.Group.destroy({
      where: { id: id },
    });

    return {
      mes: "Group is delete",
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
