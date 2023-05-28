var express = require("express");
var connection = require("./conf/db/database.js");
var app = express();

app.get("/", function (req, res) {
  console.log("pagina do index");
});

app.listen(3000, function () {
  console.log("Servido rodando na porta 3000");
});
