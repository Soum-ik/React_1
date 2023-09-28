import React from "react";

import SingUp from "./components/SingUp";

import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import HomePage from "./components/pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        
        <Route path="/login" element={<Login/> }/>
        <Route path="/SingUp" element={<SingUp/> }/>
      </Routes>
    </>
  );
}

export default App;
