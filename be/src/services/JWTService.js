import db from "../models/index";
const getGroupWithRoles = async (user) => {
  let data = await db.Group.findOne({
    where: { id: user.groupId },
    include: db.Role,
  });

  return data;
};
module.exports = {
  getGroupWithRoles,
};
