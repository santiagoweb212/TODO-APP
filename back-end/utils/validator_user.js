//validacion de usuario
const validatorUser = (email, name, lastName, password) => {
  const regexEmail = /^[\w.-]+@[\w-]+(\.[a-zA-z]{2,4}){1,2}$/g;
  if (!email || !name || !lastName || !password) {
    throw Error("campo requerido vacio");
  }
  if (!regexEmail.test(email)) {
    throw Error("correo electronico invalido");
  }

};

//validar existencia de correo en DB
const validatorLogin = (email) => {
  const regexEmail = /^[\w.-]+@[\w-]+(\.[a-zA-z]{2,4}){1,2}$/g;

  if (!regexEmail.test(email)) {
    throw Error("Correo invalido");
  }
};

module.exports = { validatorUser,validatorLogin };

