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
        <h1>Cadastre-se</h1>
        <label>
          Nome <input type="text" {...register("nome")}></input>
        </label>
        <label>
          Email
          <input type="email" {...register("email")}></input>
        </label>
        <label>
          Senha <input type="password" {...register("senha")}></input>
        </label>
        <label>
          <style.Button type="submit">Enviar</style.Button>
        </label>
      </form>
    </style.Container>
  );
}

export default Signin;
