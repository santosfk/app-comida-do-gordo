import React from "react";
import * as Styled from "./style";
import vector from "./Vector.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();

  function handleChangeRoute(route) {
    navigation(`/${route}`);
  }
  return (
    <>
      <Styled.Container>
        <Styled.Title>
          <h1>app de comida do gordo</h1>
          <h2>coma hoje, pague ontem!</h2>
        </Styled.Title>
        <Styled.TopButtons>
          <button
            className="accountTop"
            onClick={() => handleChangeRoute("signin")}
          >
            {" "}
            Criar Conta
          </button>
          <button
            className="loginTop"
            onClick={() => handleChangeRoute("login")}
          >
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
