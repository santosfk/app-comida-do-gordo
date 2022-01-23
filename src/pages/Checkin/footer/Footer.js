import React from "react";
import { useNavigate } from "react-router-dom";

import * as Styled from "./style";

function Footer() {
  const navigation = useNavigate();

  function handleChangeRoute(route) {
    navigation(`/${route}`);
  }

  return (
    <>
      <Styled.Container>
        <Styled.AccountContainer>
          <h1>Comece agora mesmo</h1>
          <button onClick={() => handleChangeRoute("signin")}>
            Criar Conta
          </button>
        </Styled.AccountContainer>
        <Styled.LoginContainer>
          <h1>Ja tem uma Conta?</h1>
          <button onClick={() => handleChangeRoute("login")}>Login</button>
        </Styled.LoginContainer>
      </Styled.Container>
    </>
  );
}

export default Footer;
