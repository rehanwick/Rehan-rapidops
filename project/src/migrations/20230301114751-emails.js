"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("emails", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      body_html: {
        type: Sequelize.JSON,
      },
      body_text: {
        type: Sequelize.STRING,
      },
      subject: {
        type: Sequelize.STRING,
      },
      thread_id: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      is_read: {
        type: Sequelize.BOOLEAN,
      },
      message_id: {
        type: Sequelize.STRING,
      },
      in_reply_to: {
        type: Sequelize.INTEGER,
      },
      schedule_at: {
        type: Sequelize.DATE,
      },
      snippet: {
        type: Sequelize.STRING,
      },
      is_archive: {
        type: Sequelize.BOOLEAN,
      },
      is_trash: {
        type: Sequelize.BOOLEAN,
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
