const connection = require("../db/sqlDatabase");

const addingFolder = async (name, userId, providerId) => {
  providerId = "null";
  try {
    await connection.execute(
      `INSERT INTO email_folders (name, user_id ,provider_id ) VALUES ( ? , ? , ?);`,
      [name, userId, providerId]
    );
  } catch (err) {
    throw err;
  }
};

const deletingFolder = async (id) => {
  try {
    await connection.execute(`DELETE FROM email_folders WHERE id = ?;`, [id]);
  } catch (err) {
    throw err;
  }
};

const updatingFolder = async (id, name) => {
  try {
    await connection.execute(
      `UPDATE email_folders SET name = ? WHERE id = ?;`,
      [name, id]
    );
  } catch (err) {
    throw err;
  }
};

const searchingFolder = async (name) => {
  let folderExist;
  try {
    folderExist = await connection.execute(
      `SELECT * FROM email_folders WHERE name = ?`,
      [name]
    );
  } catch (err) {
    throw err;
  }
  return folderExist;
};
module.exports = {
  addingFolder,
  deletingFolder,
  updatingFolder,
  searchingFolder,
};
