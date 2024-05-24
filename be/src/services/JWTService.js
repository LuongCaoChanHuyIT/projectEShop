import db from "../models/index";
const getGroupWithRoles = async (user) => {
  let data = await db.Group.findOne({
    where: { id: user.groupId },
    attributes: ["id", "name"],
    include: { model: db.Role, attributes: ["id", "url"] },
  });
  // let data = await db.Group.findOne({
  //   where: { id: user.groupId },
  //   include: [{ model: db.Role }],
  // });

  return data;
};
module.exports = {
  getGroupWithRoles,
};
