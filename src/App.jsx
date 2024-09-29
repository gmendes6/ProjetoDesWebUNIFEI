import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SegundaPagina from "./pages/segundaPagina";
import NotFoundPage from "./pages/NotFoundPage";  // Página 404 personalizada

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/segunda" element={<SegundaPagina />} />
        <Route path="*" element={<NotFoundPage />} />  {/* Rota de fallback */}
      </Routes>
    </Router>
  );
};

export default App;
