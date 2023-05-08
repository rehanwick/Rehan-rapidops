const user_table = "users";

const mysql = require("./sql-connection");

async function deleteUser({ id }) {
  try {
    await mysql.execute(`DELETE FROM ${user_table} WHERE id = ?;`, [id]);
  } catch (err) {
    throw err;
  }
}

async function getUserByEmail(obj) {
  const { email } = obj;
  let user;
  try {
    [user] = await mysql.execute(
      `select * FROM ${user_table} WHERE email = ?`,
      [email]
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
  return user;
}

async function creatUser(obj) {
  const { name, email } = obj;
  try {
    await mysql.query(
      `INSERT INTO ${user_table} (name , email ) VALUES ( ? , ? , ? );`,
      [name, password, email]
    );
  } catch (err) {
    throw err;
  }
}

async function createDemoEntry() {
  let result;

  try {
    [result] = await mysql.query(`select * from ${user_table} `);
  } catch (err) {
    console.log(err);
    throw err;
  }
  return result;
}

async function updateUserName({ id, name }) {
  try {
    await mysql.execute(`UPDATE ${user_table} SET name = ? WHERE id = ?;`, [
      name,
      id,
    ]);
  } catch (err) {
    throw err;
  }
}
module.exports = {
  deleteUser,
  creatUser,
  createDemoEntry,
  getUserByEmail,
  updateUserName,
};
