import React from "react";
import * as style from "./style";
import Header from "../../components/header/Header";

function AboutUs() {
  return (
    <>
      <Header />
      <style.Title>Quem somos</style.Title>
      <style.Content>
        a verdade é que esse aplicativo foi criado por dois devs que no momento,
        estavam sem nada pra fazer,segue abaixo o nome dos meliantes.
        <a href="https://github.com/santosfk"> SantosFK</a>
        <a href="https://github.com/4lysson-a">4lysson-a</a>
      </style.Content>
    </>
  );
}

export default AboutUs;
