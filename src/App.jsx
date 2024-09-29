import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";  // Certifique-se de que o caminho está correto
import HomePage from "./pages/HomePage";
import SegundaPagina from "./pages/SegundaPagina";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/segunda" element={<SegundaPagina />} />
      </Routes>
    </Router>
  );
};

export default App;
