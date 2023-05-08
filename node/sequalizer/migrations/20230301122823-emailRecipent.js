"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("email_recipent", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.INTEGER,
        references: {
          model: "emails",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      file_name: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.ENUM("form", "to", "cc", "bcc"),
        allowNull: false,
        defaultValue: "form",
      },
      path: {
        type: Sequelize.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
