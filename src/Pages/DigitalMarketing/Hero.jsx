import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/images/bg.png";
import { Link } from "react-router-dom";
const HeroBanner = () => {
  return (
    <>
      {/* Large Screen Version with BG */}
      <section
        className="hidden lg:flex h-auto items-start bg-no-repeat bg-cover lg:py-20 md:py-16 py-12"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255, 255, 255, 0.5 )",
          backgroundBlendMode: "overlay",
        }}
      >
        <HeroContent />
      </section>

      {/* Mobile/Tablet Version without BG */}
      <section className="flex lg:hidden h-auto items-center px-4 justify-center bg-[#DBD2FF]/40">
        <HeroContent />
      </section>
    </>
  );
};

const HeroContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    className={`
      lg:max-w-5xl
      lg:px-12
      mt-10
      md:py-20
      py-10
      text-center 
      lg:text-left
    `}
  >
    <h1
      className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
      style={{ fontFamily: "Archivo, sans-serif" }}
    >
      Transforming Digital Marketing <br />
      with <span className="relative">Strategy & Creativity</span>
    </h1>

    <p
      className="text-sm lg:text-lg md:text-lg mt-4 text-gray-800"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      Digital success isn’t just about being seen—it’s about making an impact. OZ Media
      Planet crafts powerful marketing strategies that drive engagement, growth, and results.
    </p>
<Link to = "/contact-us">
    <button
      className="md:mt-10 mt-8 px-6  cursor-pointer py-2 rounded-full font-medium shadow-md text-sm"
      style={{
        backgroundColor: "#DBD2FF",
        fontFamily: "Inter, sans-serif",
        boxShadow: "4px 4px 0px #000",
      }}
    >
      LET’S CONNECT
    </button>
    </Link>
  </motion.div>
);

export default HeroBanner;
