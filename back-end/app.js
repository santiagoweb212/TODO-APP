// se requiere express y los middlewares

const express = require('express');
const cors = require('cors');
const { router } = require('./routes/rutas_usuarios');

const app = express();
app.use(express.json());
app.use(cors());   
// es un middleware. da permisos para hacer peticiones desde el front
app.use(router);
module.exports = { app };
