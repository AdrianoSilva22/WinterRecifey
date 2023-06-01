const express = require("express");
const { Cliente, Servico } = require("./models/Cliente.js");
const app = express();
app.use(express.json());
app.post("/cadastrar", async (req, res) => {
  console.log(req.body);
  await Cliente.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: "Usuario cadastrado com sucesso!",
      });
    })
    .catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro:Usuario não cadastrado",
      });
    });
});
app.get("/servico", async (req, res) => {
  const allSerach = await Servico.findAll();
  res.send(allSerach);
});
app.listen(3000, function () {
  console.log("Servido rodando na porta 3000");
});

