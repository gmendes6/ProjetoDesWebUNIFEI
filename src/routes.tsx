import { HashRouter, Route, Navigate, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Home2 } from "./pages/Home2"; 
import React from "react";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </HashRouter>
  );
};
