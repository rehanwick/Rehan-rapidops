const { Pool } = require("pg");
const cockroach = new Pool({
  host: "localhost",
  user: "root",
  database: "email_client",
  password: "Rapid@456789",
  port: "26257",
  ssl: {
    rejectUnauthorized: false,
  },
});
cockroach.connect().then(() => console.log("COCKROACH databse connected"));


const makeUsersDb = require("./users.db");
const usersDb = makeUsersDb({ cockroach });

const makeFoldersDb = require("./folders.db");
const foldersDb = makeFoldersDb({ cockroach });


const cockroachdb = {
  usersDb,
  foldersDb,
};

module.exports = cockroachdb;
