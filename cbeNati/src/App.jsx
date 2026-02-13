import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Bank from "./bank";
import About from "./about";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Bank />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
