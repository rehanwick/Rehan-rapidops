"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("email_folder_mapping", {
      email_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "emails",
          key: "id",
        },
        primaryKey: true,
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      folder_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "email_folders",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        primaryKey: true,
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
