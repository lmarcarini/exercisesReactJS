import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Exercise1 from "./components/exercicio1";
import Exercise2 from "./components/exercicio2";
import Exercise3 from "./components/exercicio3";
import Exercise4 from "./components/exercicio4";
import Exercise5 from "./components/exercicio5";
import Exercise6 from "./components/exercicio6";
import Exercise7 from "./components/exercicio7";
import Exercise8 from "./components/exercicio8";
import Exercise9 from "./components/exercicio9";
import Home from "./components/home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/exercicio1" element={<Exercise1 />} />
        <Route path="/exercicio2" element={<Exercise2 />} />
        <Route path="/exercicio3" element={<Exercise3 />} />
        <Route path="/exercicio4" element={<Exercise4 />} />
        <Route path="/exercicio5" element={<Exercise5 />} />
        <Route path="/exercicio6" element={<Exercise6 />} />
        <Route path="/exercicio7" element={<Exercise7 />} />
        <Route path="/exercicio8" element={<Exercise8 />} />
        <Route path="/exercicio9" element={<Exercise9 />} />
      </Routes>
    </>
  );
}

export default App;
