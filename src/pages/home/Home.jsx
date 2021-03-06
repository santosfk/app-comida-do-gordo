import React, { useState, useEffect } from "react";
import * as style from "./style";
import data from "../../data/pratos";
import Prato from "../../components/prato/Prato";
import Header from "../../components/header/Header";

function Home() {
  const [pratoState, setPratoState] = useState([]);

  useEffect(() => {
    // oqq acontece
    setPratoState(data);
  }, []); // Array de dependĂȘncias

  const handleCompra = (id) => {
    const prato = pratoState.find((item) => item.id === id);
    prato.comprou = !prato.comprou || false;
    setPratoState([...pratoState]);
  };

  return (
    <>
      <style.Container>
        <Header />
        <style.Pratos>
          <style.PratosContainer>
            {pratoState.map((item) => {
              return (
                <Prato
                  key={item.id}
                  id={item.id}
                  comprar={handleCompra}
                  titulo={item.descricao}
                  imagem={item.imagem}
                  preco={item.preco}
                  comprou={item.comprou}
                />
              );
            })}
          </style.PratosContainer>
        </style.Pratos>
      </style.Container>
    </>
  );
}

export default Home;
