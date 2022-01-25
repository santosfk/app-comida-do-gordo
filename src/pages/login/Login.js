import React from "react";
import { useState } from "react/cjs/react.development";
import * as styled from "./style";
import users from "../../data/users";
import Home from "../home/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Login() {
  const [logar, setLogar] = useState(false);
  const [receiveUser, setReceiveUser] = useState("");
  const [passwordReceive, setPasswordReceive] = useState("");

  function validate () {
    users.map((item) => {
      if (item.nome === receiveUser && item.senha === passwordReceive) {
       setLogar(true)
        const validate = true;
        return validate;
      } else {
        alert("dados incorretos");
      }
    });
  
  }
  <Router>
      <Routes>
        <Route path="home" element={<Home/>}/>
      </Routes>
  </Router>
  
  return (
    
    <>
    {logar ?
    <Home/>
     :
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
        
      </styled.Container>}
    </>
  );
}

export default Login;
