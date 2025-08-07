// import React from "react";
// import { motion } from "framer-motion";
// import video from "../../assets/Video/About.mp4";
// import v1 from "../../assets/Video/v1.mp4";
// import v2 from "../../assets/Video/v2.mp4";

// const Hero = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}      // Start hidden and slightly down
//       animate={{ opacity: 1, y: 0 }}       // Animate to visible and original position
//       transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
//       className="bg-white h-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:py-14 lg:py-0 lg:px-16 md:px-4  pb-6"
//     >
//       {/* LEFT TEXT SIDE */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.3, duration: 1 }}
//         className="md:w-[50%] md:space-y-6 space-y-2"
//       >
//         <h1 className="text-3xl lg:text-6xl md:text-3xl font-bold text-[#1E1C21] leading-tight font-[Archivo]">
//           INNOVATE <span className="text-[#1E1C21]">INSPIRE</span> <br /> IMPACT
//         </h1>

//         <p className="text-lg font-medium text-gray-800 font-[Inter]">
//           Marketing That Moves, Technology That Builds, All Under One Roof.
//         </p>

//         <p className="text-sm font-medium text-gray-600 font-[Inter] max-w-md">
//           We are OZ Media — a hybrid digital force blending high-impact marketing
//           with high-performance development.
//         </p>

//         <button className="mt-6 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 font-[Inter] text-sm">
//           LET’S CONNECT
//         </button>
//       </motion.div>

//       {/* RIGHT VIDEO FRAME */}
//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         className="md:w-1/2 md:mt-0 flex justify-center items-center"
//       >
//         <video
//           src={v2}
//           autoPlay
//           loop
//           muted
//           className="w-full h-full rounded-[40px] object-contain"
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Hero;

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import v2 from "../../assets/Video/v2.mp4";
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

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="bg-white h-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:py-14 lg:py-0 lg:px-16 md:px-4 pb-10"
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
          INNOVATE <span className="text-[#1E1C21]">INSPIRE</span> <br /> IMPACT
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1}
          className="text-lg font-medium text-gray-800 font-[Inter]"
        >
          Marketing That Moves, Technology That Builds, All Under One Roof.
        </motion.p>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2}
          className="text-sm font-medium text-gray-600 font-[Inter] max-w-md"
        >
          We are OZ Media — a hybrid digital force blending high-impact
          marketing with high-performance development.
        </motion.p>
        <Link  to = "/contact-us">
          {" "}
          <motion.button
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
            className="mt-6 bg-black text-white px-6 py-3   cursor-pointer rounded-full shadow-lg hover:bg-gray-800 font-[Inter] text-sm"
          >
            LET’S CONNECT
          </motion.button>
          \
        </Link>
      </div>

      {/* RIGHT VIDEO FRAME */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ delay: 1, duration: 1 }}
        className="md:w-1/2 md:mt-0 flex justify-center items-center"
      >
        <video
          src={v2}
          autoPlay
          loop
          muted
          className="w-full h-full rounded-[40px] object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
