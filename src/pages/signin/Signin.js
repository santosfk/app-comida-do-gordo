import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../../contexts/DataContext";
import * as style from "./style";

function Signin() {
  const { dataUser, setDataUser } = useContext(DataContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newDataUser = [...dataUser, data];
    const mapNewDataUser = newDataUser.map((item, index) => {
      const newUser = {
        id: index,
        nome: item.nome,
        senha: item.senha,
      };
      return newUser;
    });

    setDataUser(mapNewDataUser);
  };

  return (
    <style.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          nome :<input type="text" {...register("nome")}></input>
        </label>
        <label>
          email:
          <input type="email" {...register("email")}></input>
        </label>
        <label>
          senha :<input type="password" {...register("senha")}></input>
        </label>
        <label>
          <input type="submit"></input>
        </label>
      </form>
    </style.Container>
  );
}

export default Signin;
