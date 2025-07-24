// routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your pages
import Home from "../Pages/Home/Home";
import Navbar from "../Component/Navbar";

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
