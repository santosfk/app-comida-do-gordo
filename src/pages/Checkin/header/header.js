import React from "react";
import * as Styled from "./style";
import vector from "./Vector.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Styled.Container>
        <Styled.Title>
          <h1>app de comida do gordo</h1>
          <h2>coma hoje, pague ontem!</h2>
        </Styled.Title>
        <Styled.TopButtons>
          <button className="accountTop">
            {" "}
            <Link to="signin" className="linkAccount">
              Criar Conta
            </Link>
          </button>
          <button className="loginTop">
            <Link to="login" className="linkLogin">
              Fazer Login
            </Link>
          </button>
        </Styled.TopButtons>
        <Styled.ImageContainer>
          <img src={vector} alt="background" />
        </Styled.ImageContainer>
      </Styled.Container>
    </>
  );
};

export default Header;
