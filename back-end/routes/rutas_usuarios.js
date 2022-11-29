
// registro y login sus rutas
const Router = require('express');
const { postUsuario} = require('../controllers/usuario_controller')
const {postLogin}=require("../controllers/login_controller")
const router = Router();

router.post('/registro', postUsuario )
.post("/login",postLogin)

module.exports = {router};