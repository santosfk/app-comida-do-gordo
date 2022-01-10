import React from "react";

import Home from "./pages/Home";
import Header from "./components/header/Header";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";

import "./style/global.css";


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
        <LoadingScreen />
      )}
    </>
  );
}
