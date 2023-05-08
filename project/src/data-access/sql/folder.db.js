const folder_table = "email_folders";
const mysql = require("./sql-connection");

async function creatFolder({ name, id }) {
  try {
    await mysql.query(
      `INSERT INTO ${folder_table} (name, user_id ,provider_id ) VALUES ( ? , ? , null);`,
      [name, id]
    );
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getFolderById({ id }) {
  let folder;
  try {
    [folder] = await mysql.query(
      `SELECT * from ${folder_table} WHERE id = ?;`,
      [id]
    );
    return folder;
  } catch (err) {
    throw err;
  }
}

async function deleteFolderById({ id }) {
  try {
    await mysql.query(`DELETE FROM ${folder_table} WHERE id = ?`, [id]);
  } catch (err) {
    throw err;
  }
}

async function getFolderByUserId({ userId }) {
  try {
    return await mysql.query(
      `SELECT * FROM ${folder_table} WHERE user_id = ?  `,
      [userId]
    );
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getFolderById,
  creatFolder,
  deleteFolderById,
  getFolderByUserId,
};
