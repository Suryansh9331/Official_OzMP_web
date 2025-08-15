import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const HeroSection = ({
  heading = "Default Heading",
  subheading = "Default Subheading",
  description = "Default description goes here.",
  buttonText = "Click Here",
  buttonLink = "/",
  videoSrc,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="bg-white h-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:py-14 lg:py-0 lg:px-16 md:px-4 pb-14"
    >
      {/* LEFT TEXT SIDE */}
      <div className="md:w-[50%] md:space-y-6 space-y-2">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-3xl lg:text-6xl md:text-3xl font-bold text-[#1E1C21] leading-tight font-[Archivo]"
        >
          {heading}
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
          className="text-lg font-medium text-gray-800 font-[Inter]"
        >
          {subheading}
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2}
          className="text-sm font-medium text-gray-600 font-[Inter] max-w-md"
        >
          {description}
        </motion.p>

        {buttonText && (
          <Link to={buttonLink}>
            <motion.button
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={3}
              className="mt-6 bg-black text-white px-6 py-3 cursor-pointer rounded-full shadow-lg hover:bg-gray-800 font-[Inter] text-sm"
            >
              {buttonText}
            </motion.button>
          </Link>
        )}
      </div>

      {/* RIGHT VIDEO FRAME */}
      {videoSrc && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ delay: 1, duration: 1 }}
          className="md:w-1/2 md:mt-0 flex justify-center items-center"
        >
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            className="w-full h-full rounded-[40px] object-contain"
          />
        </motion.div>
      )}
    </div>
  );
};

export default HeroSection;
