const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db/database.js");

//Table cliente
const Cliente = db.define(
  "cliente",
  {
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true,
    },
    telefone: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cod_servico_cliente: {
      type: DataTypes.INTEGER,
      allowNull: false,
      key: "cod_servico",
    },
  },
  {
    tableName: "tb_cliente",
    timestamps: false,
  }
);
//tabela servico
const Servico = db.define(
  "servico",
  {
    cod_servico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    ocupacao: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "tb_servico",
    timestamps: false,
  }
);
Cliente.belongsTo(Servico, { foreignKey: "cod_servico_cliente" });
module.exports = { Cliente, Servico };
