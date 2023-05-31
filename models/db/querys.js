const connection = require("./conf/db/database.js");
const sql = "SELECT * FROM tb_cliente";

connection.query(sql, function (err, result) {
  if (err) throw err;
  res.send(result);
});

function addCliente(cpf, telefone, email, name, servico, callback) {
  const query =
    "INSERT INTO  tb_cliente ( cpf,telefone,email,nome,cod_servico_cliente) VALUES (?,?,?,?,?)";
  connection.query(
    query,
    [cpf, telefone, email, name, servico],
    (err, result) => {
      if (err) {
        console.error("Error ao cadastrar o cliente ", err);
        callback(err, null);
      } else {
        console.log("regristo realizado ");
        callback(null, result);
      }
    }
  );
}
