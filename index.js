const express = require("express");
//const bodyParser = require("body-parser");
const connection = require(__dirname + "/models/db/database.js");
/*
const value = [
  "56776589787",
  998877034,
  "teste@gmail.com",
  "washington candido dos santos da silva",
  102,
];*/

function addCliente(cpf, telefone, email, name, servico) {
  const query =
    "INSERT INTO  tb_cliente ( cpf,telefone,email,nome,cod_servico_cliente) VALUES (?,?,?,?,?)";
  connection.query(
    query,
    [cpf, telefone, email, name, servico],
    (err, result) => {
      if (err) throw err;
      console.log("regristo realizado dentro do banco ");
    }
  );
}
const app = express();
app.get("/clientes", function (req, res) {
  res.sendFile(__dirname + "/view/index.html");
  addCliente(
    req.body.cpf,
    value[1],
    value[2],
    value[3],
    value[4],
    (error, results) => {
      if (error) {
        res.status(500).send("Erro ao inserir dados no banco de dados");
      } else {
        res.send("Dados inseridos com sucesso!");
      }
    }
  );
});

//bodyParser.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

//pegando dados do footer e jogando na tela
//res.send(req.body.name, req.body.telefone, req.body.servico, req.body.cpf);
app.get("/servico", function (req, res) {
  const sql = "SELECT * FROM tb_servico";
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
