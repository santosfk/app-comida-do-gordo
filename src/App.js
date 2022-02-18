import React, { useEffect } from "react";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import Foods from "./pages/foods/Foods";
import Signin from "./pages/signin/Signin";
import Login from "./pages/login/Login";
import Checkin from "./pages/Checkin/Checkin";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about-us/AboutUs";
import Card from "./pages/card/Card";
import DataContextProvider from "./contexts/DataContext";
import "./style/global.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [loading, setLoading] = React.useState(false);

  const handleLoadingTimeOut = () => {
    setTimeout(() => {
      setLoading(true);
    }, 6000);
  };

  useEffect(() => {
    handleLoadingTimeOut();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <DataContextProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Checkin />} />
                <Route path="login" element={<Login />} />
                <Route path="signin" element={<Signin />} />
                <Route path="home" element={<Home />} />
                <Route path="home/card" element={<Card />} />
                <Route path="home/foods" element={<Foods />} />
                <Route path="home/about-us" element={<AboutUs />} />
              </Routes>
            </Router>
          </DataContextProvider>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
