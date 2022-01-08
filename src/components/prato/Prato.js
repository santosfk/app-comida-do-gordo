import React from "react";
import "./prato.css";

function Prato({ imagem, titulo, preco }) {
  return (
    <>
      <div className="card-container">
        <div className="image-container">
          <img src={`${imagem}`} alt={`imagem de ${titulo}`} />
        </div>
        <div className="title-container">
          <h1 className="title">{titulo}</h1>
        </div>
        <div className="price-container">
          <h2 className="price">R$: {preco}</h2>
        </div>
        <div>
          <button className="botao">Encomendar</button>
        </div>
      </div>
    </>
  );
}
export default Prato;
