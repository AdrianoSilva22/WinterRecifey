var express = require("express");
var connection = require("./conf/db/database.js");
var app = express();

app.get("/", function (req, res) {
  console.log("pagina do index");
  // teste - Chamando os dados da tabela serviço
  let sql = "SELECT * FROM tb_servico";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000, function () {
  console.log("Servido rodando na porta 3000");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("dataBase connected");
  });
});
