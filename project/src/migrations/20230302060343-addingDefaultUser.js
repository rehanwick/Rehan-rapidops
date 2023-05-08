"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "root",
        email: "root@gmail.com",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {},
};
