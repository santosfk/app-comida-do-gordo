import React from "react";

import Home from "./pages/Home";
import Header from "./components/header/Header";
import FoodLoading from "./animations/components/FoodLoading.jsx";

import "./style/global.css";
import "./app.css";

export default function App() {
  const [loading, setLoading] = React.useState(false);

  const handleLoadingTimeOut = () => {
    setTimeout(() => {
      setLoading(true);
    }, 6000);
  };

  React.useEffect(() => {
    handleLoadingTimeOut();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Header />
          <Home />
        </>
      ) : (
        <div className="loadingContainer">
          <FoodLoading />
          <h1 className="loading-title">Calma carai</h1>
          <h2 className="loading-subtitle">
            To carregando as comida do gordo ...
          </h2>
        </div>
      )}
    </>
  );
}
