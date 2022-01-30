import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import * as styled from "./style";
import Home from "../home/Home";
import { DataContext } from "../../contexts/DataContext";

function Login() {
  const { dataUser } = useContext(DataContext);
  const [logar, setLogar] = useState(false);
  const [receiveUser, setReceiveUser] = useState("");
  const [passwordReceive, setPasswordReceive] = useState("");

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

  return (
    <>
      {logar ? (
        <Home />
      ) : (
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
      )}
    </>
  );
}

export default Login;
