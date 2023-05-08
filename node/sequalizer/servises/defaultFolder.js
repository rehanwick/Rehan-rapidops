const connection = require("../db/sqlDatabase");

const addingDefaultFolder = async (userId) => {
  console.log(userId);
  const arr = ["inbox", "sent", "Archived", "Outbox", "Trash"];
  try {
    for (let name of arr) {
      try {
        await connection.execute(
          `INSERT INTO email_folders (name, user_id ,provider_id ) VALUES ( ? , ? , null);`,
          [name, userId]
        );
      } catch (err) {
        throw err;
      }
    }
  } catch (err) {
    throw err;
  }
};

const registrationFolder = async (name, password, email) => {
  try {
    await connection.execute(
      `INSERT INTO users (name, password ,email , access_token , refresh_token ) VALUES ( ? , ? , ? , null ,null);`,
      [name, password, email]
    );
  } catch (err) {
    throw err;
  }
};

const serchingUserId = async (email) => {
  let userId;
  try {
    userId = await connection.execute(`SELECT id FROM users WHERE email = ? `, [
      email,
    ]);
  } catch (err) {
    console.log("hii", err);
  }
  return userId[0][0];
};

module.exports = {
  addingDefaultFolder,
  registrationFolder,
  serchingUserId,
};
