const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hurairah",
  database: "nodetask1",
});

const addUser = async (name, date) => {
  try {
    await connection.execute(
      `INSERT INTO users (name, dob) VALUES (?,?);`,
      [name, date],
      (err, results, fields) => {
        if (err) throw err;
        //   console.log(results);
      }
    );
  } catch (err) {
    return err;
  }
};

const getUser = () => {
  return connection
    .promise()
    .query(`select * from users`)
    .then(([rows, fields]) => {
      return rows;
    });
};

module.exports = {
  addUser,
  getUser,
};
