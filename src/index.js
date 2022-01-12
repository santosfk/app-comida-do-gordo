import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Foods from "./pages/foods/Foods"
import Login  from  "./pages/login/Login"
import Signin from "./pages/signin/Signin";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={  <App />}/>
          <Route path="foods" element={<Foods/>}/>
          <Route path="login"  element={<Login/>}/>
          <Route path="signin"  element={<Signin/>}/>
        </Routes>
        </Router>
  
  </StrictMode>,
  rootElement
);
