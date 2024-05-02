"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let userGroup = [];
    for (let i = 1; i < 5; i++) {
      userGroup.push({
        userName: `Admin${i}`,
        password: "admin",
        email: `admin${i}@gmail.com`,
        groupId: i,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert("Users", userGroup);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
