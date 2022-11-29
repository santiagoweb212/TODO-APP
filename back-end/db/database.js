// conexion de la base de datos en postgres

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("app_todo", "postgres", "123456789", {
  host: "localhost",          // nombre app,-- dialect -- password
  dialect: "postgres",
});

module.exports = { sequelize };
