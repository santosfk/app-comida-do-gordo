import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import { useState } from "react/cjs/react.development";
import { DataContext } from "../../contexts/DataContext";


function Signin() {
  const {setDataUser} = useContext(DataContext)
  

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
   const dataReceive = [data]
    console.log(dataReceive)
    setDataUser(dataReceive);
  };



  return (
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
  );
}

export default Signin;
