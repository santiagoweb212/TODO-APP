// valida usuario con todos los datos

const { usuario } = require("../models/usuarios");
const { validatorUser } = require("../utils/validator_user");
async function postUsuario(req, res) {
  const { correo: email, name, lastName, password } = req.body;
  try {
    validatorUser(email, name, lastName, password);
    //valida el usuario si los datos son correctos
    // ususrio.create es como la query insert into

    const buscaUser = await usuario.findOne({
      where: { correo: email },
    });
    if (buscaUser) {
      throw Error("Usuario Existente");
      // validacion por correo
    }

    const newUser = await usuario.create({
      correo: email,
      first_name: name,
      last_name: lastName,
      password,
    });
    res
      .status(200)
      .json({ message: "Usuario correcto", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { postUsuario };
