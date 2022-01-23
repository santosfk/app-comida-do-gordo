import React, { useEffect } from "react";

import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import Foods from "./pages/foods/Foods";
import Signin from "./pages/signin/Signin";
import Login from "./pages/login/Login";
import Checkin from "./pages/Checkin/Checkin";

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
          <Router>
            <Routes>
              <Route path="/" element={<Checkin />} />
              <Route path="foods" element={<Foods />} />
              <Route path="login" element={<Login />} />
              <Route path="signin" element={<Signin />} />
            </Routes>
          </Router>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
