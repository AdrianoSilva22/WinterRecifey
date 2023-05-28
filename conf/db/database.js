var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  database: "winterrecifey_database",
  user: "root",
  password: "",
});

module.exports = connection;
