var mysql = require("mysql");
//Criando conexão com banco de dados
const connection = mysql.createConnection({
  host: "localhost",
  database: "winterrecifey_database",
  user: "root",
  password: "root",
});

module.exports = connection;
