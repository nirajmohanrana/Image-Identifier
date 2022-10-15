import React from "react";
import Home from "./pages/Home.js";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
