const mysql = require("./sql-connection");
const {
  creatFolder,
  getFolderById,
  deleteFolderById,
  getFolderByUserId,
} = require("./folder.db");
const {
  creatUser,
  getUserByEmail,
  deleteUser,
  createDemoEntry,
  updateUserName,
} = require("./user.db");

const showUsers = createDemoEntry;

module.exports = {
  creatFolder,
  deleteUser,
  showUsers,
  creatUser,
  getUserByEmail,
  getFolderById,
  deleteFolderById,
  updateUserName,
  getFolderByUserId,
};
