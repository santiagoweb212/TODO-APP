// controlador de inicio de sesion

const {usuario}=require("../models/usuarios")
const {validatorLogin}=require("../utils/validator_user")
const postLogin=async(req,res)=>{
try {
    // validar login
    validatorLogin(req.body.email)
    const respuesta= await usuario.findAll({
        where:{
            correo:req.body.email,
            password:req.body.password
        }
    })
    // valido de usuario existente
    console.log("la respuesta-->",respuesta)
    if( respuesta.length === 0 ){
        throw Error('Usuario y contraseña Incorrectos')
    }
    res.status(201).send("Acceso Permitido") 
 } catch (error) {
    res.status(500).json({error:error.message})
 }
} 
module.exports={postLogin}