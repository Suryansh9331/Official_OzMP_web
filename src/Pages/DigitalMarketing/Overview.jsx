// components/DigitalMarketingSection.jsx
import marketingImg from "../../assets/images/DMOverview1.png"
import React from "react";
import { motion } from "framer-motion";

const DigitalMarketingSection = () => {
  return (
    <section className="h-auto flex flex-col lg:flex-row items-center justify-between px-4  md:px-16  overflow-hidden">
      {/* Left Section */}
      <motion.div
        className="lg:w-[45%] text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="text-2xl md:text-5xl font-bold text-[#1E1C21] font-archivo mb-6">
          Digital Marketing Services Overview
        </h2>
        <p className="text-gray-700 text-base md:text-lg font-poppins mb-8">
          A Complete Suite Of Growth-Driven Marketing Solutions Designed To Build Your Brand, Attract Customers, And Boost ROI Across Digital Platforms.
        </p>
        <button className="bg-[#D9D0FF] text-black px-6 border border-black font-['inter'] py-2 rounded-full shadow-xl hover:scale-105 transition">
          READ MORE
        </button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="lg:w-[50%] mt-12 lg:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <img
          src={marketingImg}
          alt="Digital Marketing"
          className="w-full max-w-md object-contain"
        />
      </motion.div>
    </section>
  );
};

export default DigitalMarketingSection;
