import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Typing animation hook
const useTypewriter = (text, speed = 60, active = false) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!active) {
      setDisplayedText("");
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index >= text.length) clearInterval(interval);
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
      className="min-h-[30vh] flex flex-col items-center justify-center px-4 text-center"
    >
      <h2
        className="text-2xl md:text-4xl font-semibold"
        style={{ fontFamily: "'Archivo', sans-serif" }}
      >
        {typedText}
      </h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 text-gray-600 text-md md:text-base max-w-4xl"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        End-To-End Digital Solutions For Modern Businesses, Focused On Reach, Engagement, And Conversions.
      </motion.p>
    </section>
  );
};

export default ServiceIntro;
