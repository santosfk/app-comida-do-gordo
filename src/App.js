import React from "react";

import Home from "./pages/Home";
import Header from "./components/header/Header";

import "./style/global.css";

export default function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
