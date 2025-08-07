import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const useTypewriter = (text, speed = 60, active = false) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplayedText(""); // Reset when out of view
      setHasTyped(false);   // Allow typing again when back in view
      return;
    }

    if (hasTyped) return; // Prevent retrigger

    let index = 0;
    setDisplayedText(""); // Clear text before starting

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const nextChar = text.charAt(index);
        index++;

        if (index > text.length) {
          clearInterval(interval);
          setHasTyped(true);
        }

        return prev + nextChar;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, active, hasTyped]);

  return displayedText;
};

const ServiceIntro = () => {
  const { ref, inView } = useInView({ triggerOnce: false });
  const fullHeading = "Types Of Services We Offer";
  const typedText = useTypewriter(fullHeading, 60, inView);

  return (
    <section
      ref={ref}
      className="lg:min-h-[35vh] min-h-[30vh] flex flex-col items-center justify-center px-2 text-center"
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
