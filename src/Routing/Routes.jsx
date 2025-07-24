// routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    
    </Routes>
  );
};

export default AppRoutes;
