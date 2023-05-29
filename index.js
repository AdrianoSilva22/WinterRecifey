const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.json.urlencoded({ extended: false }));
app.user(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/view/index.html");
});

app.get("/servicos", function () {
  req.body.conteudo;
  res.send(req.body.name);
});

app.listen(3000, function () {
  console.log("Servido rodando na porta 3000");
  connection.connect(function (err) {
    if (err) throw err;
    console.log("dataBase connected");
  });
});
