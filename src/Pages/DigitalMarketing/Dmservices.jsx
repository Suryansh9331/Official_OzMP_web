import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const ServiceSection = ({
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
    <section ref={ref} className="w-full py-10 px-4 md:px-10">
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center gap-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left Image */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={itemVariants}
        >
          <img src={image} alt="seo-illustration" className="w-full max-w-lg mx-auto" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full lg:w-1/2 text-left"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-[Archivo] font-semibold text-[#0F0F3A] mb-4">
            {heading}
          </h2>
          <p className="text-base text-gray-600 font-[Inter] mb-4 leading-relaxed">
            {subheading}
          </p>

          <ul className="space-y-3 mb-6">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[Inter] text-sm text-gray-700">
                <CheckCircle2 className="text-[#8D8DFF]" size={18} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Read More Button */}
          <motion.button
            style={{ backgroundColor: buttonColor }}
            className="px-6 py-2 rounded-full font-semibold font-[Inter] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-md transition"
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
