import React from "react";

import * as Styled from "./style";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Styled.Container>
        <Styled.AccountContainer>
          <h1>Comece agora mesmo</h1>
          <button>
            <Link to="login" className="link">
              Criar Conta
            </Link>
          </button>
        </Styled.AccountContainer>
        <Styled.LoginContainer>
          <h1>Ja tem uma Conta?</h1>
          <button>
            <Link to="login" className="link">
              Login
            </Link>
          </button>
        </Styled.LoginContainer>
      </Styled.Container>
    </>
  );
}

export default Footer;
