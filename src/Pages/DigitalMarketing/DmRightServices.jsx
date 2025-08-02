import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const RightServiceSection = ({
  image,
  heading,
  subheading,
  points,
  buttonText = "READ MORE",
  buttonColor = "#DBD2FF",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="w-full lg:py-10 md:py-6 py-6 px-4 lg:px-10 md:px-4"
    >
      <motion.div
        className="flex flex-col-reverse lg:flex-row md:flex-row sm:flex-col items-center lg:gap-0 md:gap-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left Content (moved above) */}
        <motion.div
          className="w-full lg:w-1/2 md:w-[50%] text-left"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-2xl lg:text-5xl font-[Archivo] font-semibold text-[#0F0F3A] mb-4 md:mb-1 lg:mb-6">
            {heading}
          </h2>
          <p className="text-xs lg:text-base text-gray-600 font-[Inter] mb-3 md:mb-2  lg:mb-4 leading-relaxed">
            {subheading}
          </p>

          <ul className="space-y-3 lg:space-y-4 md:space-y-1 md:mb-2 mb-4  lg:mb-6">
            {points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-[Inter] text-sm md:text-xs lg:text-lg  font-normal text-gray-800 "
              >
                <CheckCircle2 className="text-[#8D8DFF]" size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <motion.button
            style={{ backgroundColor: buttonColor }}
            className="px-5  md:px-4  lg:px-6 py-2 rounded-full font-normal font-[Inter] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-md transition-transform  hover:cursor-pointer mt-4 md:mt-2 lg:mt-4 md:text-xs sm:text-sm lg:text-base  hover:-translate-x-1 hover:-translate-y-1  duration-300"
          >
            {buttonText}
          </motion.button>
        </motion.div>

        {/* Right Image (moved below) */}
        <motion.div
          className="w-full lg:w-1/2 md:w-[50%]"
          variants={itemVariants}
        >
          <img
            src={image}
            alt="illustration"
            className="lg:max-w-[100%] md:max-w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default RightServiceSection;
