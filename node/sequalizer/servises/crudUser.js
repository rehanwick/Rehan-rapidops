const connection = require("../db/sqlDatabase");

const delUser = async (id) => {
  providerID = "SOMIRING";
  try {
    await connection.execute(`DELETE FROM users WHERE id = ?;`, [id]);
  } catch (err) {
    throw err;
  }
};

const searchUser = async (id) => {
  let user;
  try {
    user = await connection.execute(`select * FROM users WHERE id = ?;`, [id]);
  } catch (err) {
    throw err;
  }
  return user[0][0];
};

const updateUser = async (id, name) => {
  try {
    await connection.execute(`UPDATE users SET name = ? WHERE id = ?;`, [
      name,
      id,
    ]);
  } catch (err) {
    throw err;
  }
};
const updatedPass = async (id, password) => {
  try {
    await connection.execute(`UPDATE users SET password = ? WHERE id = ?;`, [
      password,
      id,
    ]);
  } catch (err) {
    resizeBy.status(500).json({
      status: "error",
      message: err,
    });
  }
};
module.exports = {
  delUser,
  searchUser,
  updateUser,
};
