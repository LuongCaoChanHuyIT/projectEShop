"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let roleList = [
      {
        url: `/user/get`,
        description: "user url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/user/init`,
        description: "admin url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/user/get/one`,
        description: "guess url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/user/des`,
        description: "guess url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/user/des`,
        description: "guess url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/group/init`,
        description: "guess url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/group/get`,
        description: "guess url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/group/get/one`,
        description: "guess url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/group/set`,
        description: "guess url",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: `/group/des`,
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
