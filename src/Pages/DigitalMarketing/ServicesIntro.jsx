import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Typing animation hook
const useTypewriter = (text, speed = 60, active = false) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayedText(""); // Reset when out of view
      return;
    }

    let index = 0;
    setDisplayedText(""); // Reset immediately before starting

    const interval = setInterval(() => {
      if (index <= text.length - 1) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, active]);

  return displayedText;
};

const ServiceIntro = () => {
  const { ref, inView } = useInView({ triggerOnce: false });
  const fullHeading = "Types Of Services We Offer";
  const typedText = useTypewriter(fullHeading, 60, inView);

  return (
    <section
      ref={ref}
      className="min-h-[20vh] flex flex-col items-center justify-center px-2 text-center"
    >
      <h2
        className="text-2xl md:text-4xl font-semibold  text-[#1C1A1F]"
        style={{ fontFamily: "'Archivo', sans-serif" }}
      >
        {typedText}
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="md:mt-6 mt-4 text-gray-600 text-md md:text-base max-w-4xl"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        End-To-End Digital Solutions For Modern Businesses, Focused On Reach, Engagement, And Conversions.
      </motion.p>
    </section>
  );
};

export default ServiceIntro;
