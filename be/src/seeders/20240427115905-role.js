"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let roleList = [
      {
        url: `/user/login`,
        description: "user url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/admin/login`,
        description: "admin url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/guess/login`,
        description: "guess url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert("Roles", roleList);
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
