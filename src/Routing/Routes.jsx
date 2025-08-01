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
import DigitalMarketing from "../Pages/DigitalMarketing/DigitalMarketing"
import Contact from "../Pages/Contact/Contact"
const AppRoutes = () => {
  return (
    <div>
      <ScrollToTop/>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/services-digital-marketing" element={<DigitalMarketing/>} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
      <Footer/>
        <ScrollToTopButton/>
    </div>
  );
};

export default AppRoutes;
