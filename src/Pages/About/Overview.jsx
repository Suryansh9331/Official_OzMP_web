// import React from "react";
// import illustration from "../../assets/images/overview2.png"; // Replace with your actual image path

// const OverviewSection = () => {
//   return (
//     <section className="bg-[#DBD2FF] py-12 lg:py-16 px-4 lg:px-16 md:px-6  flex flex-col md:flex-row items-center justify-between gap-10">
//       {/* Left Image */}
//       <div className="w-full md:w-[45%]">
//         <img
//           src={illustration}
//           alt="Overview Illustration"
//           className="w-full h-auto object-cover rounded-xl "
//         />
//       </div>

//       {/* Right Content */}
//       <div className="w-full md:w-[55%] space-y-6">
//         {/* Icon + Heading */}
//         <div className="flex items-center gap-3">
//           <img src="/images/StarIcon.png" alt="Start Icon" className="w-16 h-16 " />
//           <h2 className="text-5xl font-bold text-gray-900" style={{ fontFamily: "Archivo, sans-serif" }}>
//             Overview
//           </h2>
//         </div>

//         {/* Description */}
//         <p className="text-gray-800 text-md leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
//           Oz Media Planet is a powerhouse where cutting-edge technology meets high-impact digital marketing. 
//           We are not just a service provider—we are creators, disruptors, and growth accelerators.
//         </p>
//         <p className="text-black lg:text-lg md:text-md   leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
//           With expertise in digital marketing and IT development, we engineer brands that dominate and build 
//           technology that scales. From crafting powerful marketing campaigns to developing next-gen software 
//           solutions, our goal is simple—to transform businesses into industry leaders.
//         </p>

//         {/* Button */}
//         <button
//           className="text-sm lg:mt-8 px-6 py-2 rounded-full text-black font-medium  hover:cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5  transition-transform duration-300 shadow-[4px_4px_0px_#000]"
//           style={{ backgroundColor: "white", fontFamily: "Inter, sans-serif" }}
//         >
//           VIEW MORE
//         </button>
//       </div>
//     </section>
//   );
// };

// export default OverviewSection;


import { Link } from "react-router-dom";

import React from "react";
import { motion } from "framer-motion";
import illustration from "../../assets/images/overview2.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const OverviewSection = () => {
  return (
    <section className="bg-[#DBD2FF] py-12 lg:py-16 px-4 lg:px-16 md:px-6 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Image */}
      <motion.div
        className="w-full md:w-[45%]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={0}
      >
        <img
          src={illustration}
          alt="Overview Illustration"
          className="w-full h-auto object-cover rounded-xl"
        />
      </motion.div>

      {/* Right Content */}
      <div className="w-full md:w-[55%] space-y-6">
        {/* Icon + Heading */}
        <motion.div
          className="flex items-center gap-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={1}
        >
          <img src="/images/StarIcon.png" alt="Start Icon" className="w-16 h-16" />
          <h2
            className="text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            Overview
          </h2>
        </motion.div>

        {/* Description 1 */}
        <motion.p
          className="text-gray-800 text-md leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={2}
        >
          Oz Media Planet is a powerhouse where cutting-edge technology meets
          high-impact digital marketing. We are not just a service provider—we
          are creators, disruptors, and growth accelerators.
        </motion.p>

        {/* Description 2 */}
        <motion.p
          className="text-black lg:text-lg md:text-md leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={3}
        >
          With expertise in digital marketing and IT development, we engineer
          brands that dominate and build technology that scales. From crafting
          powerful marketing campaigns to developing next-gen software
          solutions, our goal is simple—to transform businesses into industry
          leaders.
        </motion.p>

        {/* Button */}
        <Link to ="/our-team">
                <motion.button
          className="text-sm lg:mt-8 px-6 py-2 rounded-full text-black font-medium hover:cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-300 shadow-[4px_4px_0px_#000]"
          style={{ backgroundColor: "white", fontFamily: "Inter, sans-serif" }}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={4}
        >
          VIEW MORE
        </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default OverviewSection;
