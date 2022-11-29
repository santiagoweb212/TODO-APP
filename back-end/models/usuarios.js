// creacion tabla usuarios

const { sequelize } = require("../db/database"); // para usar metodos de sequelize

const { DataTypes } = require("sequelize");

// datatypes nos permite usar los tipos de datos que soporta sequelize

const usuario = sequelize.define("usuario", {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  correo: { type: DataTypes.TEXT, allowNull: false, unique: true },
  first_name: { type: DataTypes.TEXT, allowNull: false },
  last_name: { type: DataTypes.TEXT, allowNull: false },
  password: { type: DataTypes.TEXT, allowNull: false },
  estado: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue:"activo"
  },
});

module.exports = { usuario };
