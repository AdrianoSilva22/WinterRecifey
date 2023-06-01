const Sequelize = require("sequelize");
//Criando conexão com banco de dados
const connection = new Sequelize("winterrecifey_database", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
connection
  .authenticate()
  .then(function () {
    console.log("Conexão com banco de dados realizada com sucesso!");
  })
  .catch(function () {
    console.log("Erro:Conexão com banco de dados realizada com sucesso!");
  });
module.exports = connection;
