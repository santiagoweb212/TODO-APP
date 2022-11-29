import { useState } from "react";
import { postRegisterUser } from "../services/peticiones";

export const RegistroUser = () => {
  const dataUser = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [valueInput, SetvalueInput] = useState(dataUser);
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetvalueInput({ ...valueInput, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    postRegisterUser(valueInput);
  };
  return (
    <form action="" onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="">Name</label>
      </div>
      <div>
        <input type="text" name="name" onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor="">Last Name</label>
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="">correo</label>
      </div>
      <div>
        <input type="text" name="correo" onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor="">Password</label>
      </div>
      <div>
        <input
          type="text"
          name="password"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label htmlFor="">Confirm Password</label>
      </div>
      <div>
        <input
          type="text"
          name="confirmPassword"
          onChange={handleOnChange}
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};
