// routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your pages
import Home from "../Pages/Home/Home";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import About from "../Pages/About/About";
import ScrollToTop from "../Component/ScrollToTop";
import ScrollToTopButton from "../Component/SttButton";

const AppRoutes = () => {
  return (
    <div>
      <ScrollToTop/>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About/>} />
      </Routes>
      <Footer/>
        <ScrollToTopButton/>
    </div>
  );
};

export default AppRoutes;
