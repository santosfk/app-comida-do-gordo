import React from "react";
import Header from "./components/header/Header";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import Home from "./pages/home/Home";
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
   
           <Home/>
           <Header />
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
