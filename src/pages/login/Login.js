import React, { useContext, useState } from "react";
import * as styled from "./style";
import { DataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { dataUser } = useContext(DataContext);
  const [logar, setLogar] = useState(false);
  const [receiveUser, setReceiveUser] = useState("");
  const [passwordReceive, setPasswordReceive] = useState("");
  const navigation = useNavigate();

  function handleChangeRoute(route) {
    navigation(`/${route}`);
  }

  function validate() {
    dataUser.map((item) => {
      const isReady = item.id === dataUser.length - 1;

      if (
        item.nome === receiveUser &&
        item.senha === passwordReceive &&
        isReady
      ) {
        return setLogar(true);
      } else {
        return console.log("niguem ta vendo");
      }
    });
  }
  if (logar) {
    handleChangeRoute("home");
  }
  return (
    <>
      <styled.Container>
        <h1>login aqui</h1>

        <div>
          <label>usuário</label>
          <input
            type="text"
            onChange={(e) => setReceiveUser(e.target.value)}
          ></input>
        </div>
        <div>
          <label>senha</label>
          <input
            type="password"
            onChange={(e) => setPasswordReceive(e.target.value)}
          ></input>
        </div>
        <div>
          <button onClick={validate}>logar</button>
        </div>
      </styled.Container>
    </>
  );
}

export default Login;
