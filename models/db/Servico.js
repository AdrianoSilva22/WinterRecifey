const connection = require("./conf/db/database.js");
let sql = "SELECT * FROM tb_servico";
connection.query(sql, function (err, result) {
  if (err) throw err;
  res.send(result);
});
