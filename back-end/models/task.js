// creacion de tabla de tareas = task

const {usuario} = require('./usuarios');

const {sequelize} = require('../db/database'); // para usar metodos de sequelize

const {DataTypes} = require('sequelize');  
// datatypes nos permite usar los tipos de datos que soporta sequelize

const task = sequelize.define('task', { 
        
    id_tarea: { type: DataTypes.INTEGER, allowNull: false},
    estado_tarea: { type: DataTypes.TEXT, allowNull: false},
    descripcion :{ type: DataTypes.TEXT, allowNull: false},
    estado: { type: DataTypes.TEXT, allowNull: false}
});

// Foo.hasOne(Bar, {
//     foreignKey: 'myFooId'
//   });


usuario.hasOne(task, { foreignKey: 'id_tarea' });
module.exports = {task};