// Levanta un servidor

const { app } = require("./app");
const { sequelize } = require("./db/database"); 
// me trae la instancia de sequelize


//------------------------------------------
// hay solamente 2 tablas = usuarios y task. Acá creamos la base de datos en postgres, y despues levantamos el server,
// y podemos ver por consola, los datos cargados, o cargar otros...!!!

//------------------------------------------
//require('./models/usuarios');  // descomentar por errores. Vuelve a cargar las tablas = models

//require('./models/task');   // descomentar por errores. Vuelve a cargar las tablas = models

//------------------------------------------

const main = async () => {
  try {
    await sequelize.sync(/*force: true*/); // me sincroniza las tablas con la BD.
    app.listen(8000, () => {
      console.log("Server en 8000");
    });
  } catch (error) {
    console.log("No se pudo conectar", error.message);
  }
};

main();
