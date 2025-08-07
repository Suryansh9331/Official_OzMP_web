import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bgImages = [
  'https://plus.unsplash.com/premium_photo-1681400054984-c20bf5879c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1661964187664-e26f70e1a224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D'
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }),
};

const HeroBanner = () => {
  const [[currentBg, direction], setCurrentBg] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg(([prevIndex]) => [
        (prevIndex + 1) % bgImages.length,
        1,
      ]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] lg:h-[95vh] overflow-hidden text-white text-center flex justify-center items-center font-poppins">
      {/* Background Slide Transition */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentBg}
            variants={slideVariants}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'tween', ease: 'easeInOut', duration: 1.2 } }}
            className="bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImages[currentBg]})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content on top */}
      <motion.div
        className="z-10 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-[Archivo] font-bold mb-4 text-white">
          Our Work Speaks for Itself
        </h1>
        <p className="text-xl font-[Outfit] max-w-3xl mx-auto text-white">
          Explore real-world projects in Web, Mobile, Software, and SaaS that define performance, innovation, and excellence.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroBanner;
