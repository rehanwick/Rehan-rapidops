const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hurairah",
  database: "nodetask1",
});

const deleuser = async (id) => {
  try {
    await connection.execute(
      `DELETE FROM users WHERE ID = ? ;`,
      [id],
      (err, results, fields) => {
        if (err) throw err;
        //   console.log(results);
      }
    );
  } catch (err) {
    return err;
  }
};

module.exports = {
  deleuser,
};
