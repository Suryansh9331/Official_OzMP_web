// routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your pages
import Home from "../Pages/Home/Home";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default AppRoutes;
