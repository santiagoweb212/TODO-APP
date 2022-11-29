import axios from "axios";
import { Await } from "react-router-dom";
export const postRegisterUser = async (dataUser) => {
  const url = `http://localhost:8000/registro`;
  await axios
    .post(url, dataUser)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
export const postLoginUser = async (datauser) => {
  const url = `http://localhost:8000/login`;
  await axios
    .post(url, datauser)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
