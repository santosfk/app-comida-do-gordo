import React from "react";
import "./style/global.css";
import Prato from "./components/prato/Prato";

export default function App() {
  const pratos = [
    {
      id: 1,
      nome: "Arroz",
      preco: 10.0,
      imagem:
        "https://revistamenu.com.br/wp-content/uploads/2020/11/arrozpesquisa.jpg",
      descricao: "Arroz com feijão e carne",
    },
    {
      id: 2,
      nome: "Feijão",
      preco: 5.0,
      imagem:
        "https://caldobom.com.br/uploads/tipos-de-feijao-145356ebf423fe9d1e77a101d9dbf3f01615572352.jpg",
      descricao: "Feijão com carne",
    },
    {
      id: 3,
      nome: "Carne",
      preco: 15.0,
      imagem:
        "https://marettimo.com.br/blog/wp-content/uploads/2020/12/tudo-o-que-vocc3aa-sempre-quis-saber-sobre-carne-vermelha.png",
      descricao: "Carne com feijão",
    },
  ];

  return (
    <div className="App">
      <h1 className="main-title">App de comida do gordo</h1>
      <h2 className="main-subtitle"> coma hoje pague ontem </h2>

      <div className="pratos">
        <div className="pratosContainer">
          {pratos.map((item) => {
            console.log(item);
            return (
              <Prato
                titulo={item.descricao}
                imagem={item.imagem}
                preco={item.preco}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
