// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const bgImages = [
//   'https://plus.unsplash.com/premium_photo-1681400054984-c20bf5879c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
//   'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   'https://plus.unsplash.com/premium_photo-1661964187664-e26f70e1a224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D'
// ];

// const slideVariants = {
//   enter: (direction) => ({
//     x: direction > 0 ? '100%' : '-100%',
//     opacity: 1,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//   },
//   exit: (direction) => ({
//     x: direction < 0 ? '100%' : '-100%',
//     opacity: 1,
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//   }),
// };

// const HeroBanner = () => {
//   const [[currentBg, direction], setCurrentBg] = useState([0, 1]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBg(([prevIndex]) => [
//         (prevIndex + 1) % bgImages.length,
//         1,
//       ]);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-[90vh] lg:h-[95vh] overflow-hidden text-white text-center flex justify-center items-center font-poppins">
//       {/* Background Slide Transition */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <AnimatePresence custom={direction} mode="wait">
//           <motion.div
//             key={currentBg}
//             variants={slideVariants}
//             custom={direction}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ x: { type: 'tween', ease: 'easeInOut', duration: 1.2 } }}
//             className="bg-cover bg-center"
//             style={{
//               backgroundImage: `url(${bgImages[currentBg]})`,
//             }}
//           >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Content on top */}
//       <motion.div
//         className="z-10 relative"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-5xl md:text-6xl font-[Archivo] font-bold mb-4 text-white">
//           Our Work Speaks for Itself
//         </h1>
//         <p className="text-xl font-[Outfit] max-w-3xl mx-auto text-white">
          // Explore real-world projects in Web, Mobile, Software, and SaaS that define performance, innovation, and excellence.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroBanner;

import React from "react";
import { motion } from "framer-motion";
import bg from "../../assets/images/bg.png";
import { Link } from "react-router-dom";
const HeroBanner = () => {
  return (
    <>
      {/* Large Screen Version with BG */}
      <section
        className="hidden lg:flex lg:h-[95vh]  md:flex md:h-[60vh] items-center justify-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backgroundBlendMode: "overlay",
        }}
      >
        <HeroContent />
      </section>

      {/* Mobile/Tablet Version without BG */}
      <section className="flex lg:hidden md:hidden h-auto items-center px-4 justify-center py-20 bg-[#DBD2FF]/40">
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
    className="max-w-4xl px-6 text-center"
  >
    <h1
      className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
      style={{ fontFamily: "Archivo, sans-serif" }}
    >
      Our Work Speaks for Itself{" "}
    </h1>

    <p
      className="text-base lg:text-lg md:text-lg mt-4 text-gray-800"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
              Explore real-world projects in Web, Mobile, Software, and SaaS that define performance, innovation, and excellence.

    </p>

    <Link to="/contact-us">
      {" "}
      <button
        className="md:mt-10 mt-8 px-6 py-2   cursor-pointer rounded-full font-medium shadow-md text-sm"
        style={{
          backgroundColor: "#DBD2FF",
          fontFamily: "Inter, sans-serif",
          boxShadow: "4px 4px 0px #000",
        }}
      >
        LET’S CONNECT
      </button>
      \
    </Link>
  </motion.div>
);

export default HeroBanner;
