import React, {useContext} from "react";
import { useState } from "react/cjs/react.development";
import * as styled from "./style";

import Home from "../home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

function Login() {
  const {dataUser} = useContext(DataContext)
  const [logar, setLogar] = useState(false);
  const [receiveUser, setReceiveUser] = useState("");
  const [passwordReceive, setPasswordReceive] = useState("");
  
  


console.log(dataUser)
  function validate() {
    Object.keys(dataUser).forEach((key,value) => {

      const users = [(dataUser[key])]; 
      const usersName = users[0].nome;
      const usersPassword = users[0].senha
      if (usersName === receiveUser && usersPassword === passwordReceive){
        setLogar(true)

      } else{
        alert('dados incorretos')
      }
     
    });
  
  
   
  }
  
  <Router>
    <Routes>
      <Route path="home" element={<Home />} />
    </Routes>
  </Router>;

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
