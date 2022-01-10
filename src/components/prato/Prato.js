import React from "react";

import CheckAnimation from "../../animations/components/CheckAnimation";

import "./prato.css";

function Prato({ imagem, titulo, preco, id, comprar, comprou }) {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          {comprou ? (
            <div
              className={
                comprou ? "checkAnimationContainer" : "checkoutAnimationFadeOut"
              }
            >
              <CheckAnimation />
            </div>
          ) : (
            <div className="checkoutAnimationFadeOut" />
          )}
          <img src={`${imagem}`} alt={`imagem de ${titulo}`} />
        </div>
        <div className="title-container">
          <h1 className="title">{titulo}</h1>
        </div>
        <div className="price-container">
          <h2 className={comprou ? "price-buy" : "price"}>R$: {preco}</h2>
        </div>
        <div>
          <button
            onClick={() => comprar(id)}
            className={comprou ? "botao-buy" : "botao"}
          >
            {comprou ? "Encomendado" : "Encomendar"}
          </button>
        </div>
      </div>
    </>
  );
}
export default Prato;
