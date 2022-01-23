import React from "react";
import Header from "./header/header";
import Content from "./content/Content";

import * as Styled from "./style";

import Footer from "./footer/Footer";

function Checkin() {
  return (
    <>
      <Styled.Container>
        <Header />
        <Content />
        <Footer />
      </Styled.Container>
    </>
  );
}

export default Checkin;
