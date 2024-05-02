"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let groupList = [
      {
        name: `user`,
        description: "user group",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `admin`,
        description: "admin group",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `guess`,
        description: "guess group",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("Groups", groupList);
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
