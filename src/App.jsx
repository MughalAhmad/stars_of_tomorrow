import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/login";
import Register from "./views/register";
import Forgot from "./views/forgot"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgot" element={<Forgot/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
