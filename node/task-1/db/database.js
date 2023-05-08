const mysql = require("mysql2");
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hurairah",
  database: "nodetask1",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL server");
});

// connection.query('SELECT * FROM users', (err, results, fields) => {
//     if (err) throw err;
//     console.log(results);
// });

module.exports = {
  connection,
};
