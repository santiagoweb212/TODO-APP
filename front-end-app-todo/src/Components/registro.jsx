import { Link } from "react-router-dom";
import { useValidatorForm } from "../hooks/useValidatorForm";
import { postRegisterUser } from "../services/peticiones";
import imagenInicio from "../assets/img/img_inicio_task.png";
import styles from "../css/registro.module.css";
export const RegistroUser = () => {
  const dataUser = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validatorForm = (valueInput) => {
    const regexEmail = /^[\w.-]+@[\w-]+(\.[a-zA-z]{2,4}){1,2}$/g;
    let error = {};
    if (!valueInput.name.trim()) {
      error.name = "el campo name es requerido";
    }
    if (!valueInput.lastName.trim()) {
      error.lastName = "el campo last Name es requerido";
    }
    if (!valueInput.email.trim()) {
      error.email = "el campo email es requerido";
    } else if (!regexEmail.test(valueInput.email.trim())) {
      error.email = " email no valido";
    }
    if (!valueInput.password.trim()) {
      error.password = "el campo password es requerido";
    }
    if (!valueInput.confirmPassword.trim()) {
      error.confirmPassword =
        "el campo confirm password es requerido";
    } else if (valueInput.password !== valueInput.confirmPassword) {
      error.confirmPassword = "password no es identico";
    }
    return error;
  };
  const [
    valueInput,
    errors,
    response,
    loading,
    handleOnChange,
    handleOnBlur,
    handleOnSubmit,
  ] = useValidatorForm(dataUser, validatorForm);

  return (
    <div className={styles.containerInicio}>
      <div className={styles.containerImg}>
        <img
          src={imagenInicio}
          alt="imagen inicio"
          className={styles.imagenInicio}
        />
      </div>
      <div className={styles.containerForm}>
        <form
          action=""
          onSubmit={handleOnSubmit}
          className={styles.boxForm}
        >
          <div>
            <label htmlFor="">name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">last name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">email</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">confirm password</label>
            <input type="text" />
          </div>
          <div>
            <button type="submit" className={styles.button}>enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
