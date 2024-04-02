import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Experience from "./routes/experience";
import Home from "./routes/home";
import Skills from "./routes/skills";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
