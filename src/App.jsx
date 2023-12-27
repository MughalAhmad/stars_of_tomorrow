import { useState } from "react";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import MainRegister from "./components/auth/register/main";
import MainLogin from "./components/auth/login/main";
import MainForgot from "./components/auth/forgot/main";
import MainHome from "./components/homeScreen/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLogin/>} />
      <Route path="/Register" element={<MainRegister/>} />
      <Route path="/Forgot" element={<MainForgot/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
