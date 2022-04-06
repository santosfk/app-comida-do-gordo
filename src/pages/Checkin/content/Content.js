import React from "react";
import * as Styled from "./style";
import HamburguerAnimation from "../../../animations/components/HamburguerAnimation";
import TruckAnimation from "../../../animations/components/TruckAnimation";
import Vector from "./Vector.svg";

function Content() {
  return (
    <>
      <Styled.Container>
        <Styled.FirstPhrase>
          <h1>Os Melhores piores</h1>
          <h2>
            <span>hamburgues</span> do bairro!!
          </h2>
        </Styled.FirstPhrase>
        <Styled.HamburguerContent>
          <HamburguerAnimation className="hamburguer" />
        </Styled.HamburguerContent>
        <Styled.TruckContent>
          <TruckAnimation />
          <img src={Vector} alt="vetor" />
        </Styled.TruckContent>
        <Styled.SecondPhrase>
          <h1>Entregas tão rápidas </h1>
          <h2>
            Quanto você <span>piscando!!</span>
          </h2>
        </Styled.SecondPhrase>
      </Styled.Container>
    </>
  );
}

export default Content;
