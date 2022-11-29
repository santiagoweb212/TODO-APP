import { useState } from "react";
import { postLoginUser } from "../services/peticiones";

export const LoginUser = () => {
  const dataUser = { email: "", password: "" };
  const [valueInput, SetvalueInput] = useState(dataUser);
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetvalueInput({ ...valueInput, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    postLoginUser(valueInput)
  };
  return (
    <form action="" onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="">Correo</label>
      </div>
      <div>
        <input type="text" name="email" onChange={handleOnChange} />
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
      <button type="submit">iniciar session</button>
    </form>
  );
};
