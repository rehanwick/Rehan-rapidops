const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hurairah",
  database: "email_client",
});

module.exports = connection.promise()    ; 

