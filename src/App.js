import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Contact, Error, Home, Login, Navbar, Register } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route  path="*" element={<Error/>} />
      </Routes>
    </>
  );
};

export default App;
