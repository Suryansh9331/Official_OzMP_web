// import React from "react";
// import video from "../../assets/Video/About.mp4"
// const Hero = () => {
//   return (
//     <div className="bg-white h-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pb-6">
//       {/* LEFT TEXT SIDE */}
//       <div className="md:w-[50%]   md:space-y-6 space-y-2">
//         <h1 className="text-3xl md:text-6xl font-bold text-black leading-tight font-[Archivo]">
//           INNOVATE <span className="text-[#818BFF]">INSPIRE</span>  <br /> IMPACT
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
//       </div>

//       {/* RIGHT VIDEO FRAME */}
//       <div className="md:w-1/2  md:mt-0 flex justify-center items-center">
//         {/* Replace this div with <video /> or <iframe /> for actual content */}
//         <video
//   src={video}
//   autoPlay
//   loop
//   muted
//   className="w-full h-full rounded-[40px] object-contain"
// />

//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from "react";
import { motion } from "framer-motion";
import video from "../../assets/Video/About.mp4";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}      // Start hidden and slightly down
      animate={{ opacity: 1, y: 0 }}       // Animate to visible and original position
      transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      className="bg-white h-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 pb-6"
    >
      {/* LEFT TEXT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="md:w-[50%] md:space-y-6 space-y-2"
      >
        <h1 className="text-3xl md:text-6xl font-bold text-black leading-tight font-[Archivo]">
          INNOVATE <span className="text-[#818BFF]">INSPIRE</span> <br /> IMPACT
        </h1>

        <p className="text-lg font-medium text-gray-800 font-[Inter]">
          Marketing That Moves, Technology That Builds, All Under One Roof.
        </p>

        <p className="text-sm font-medium text-gray-600 font-[Inter] max-w-md">
          We are OZ Media — a hybrid digital force blending high-impact marketing
          with high-performance development.
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 font-[Inter] text-sm">
          LET’S CONNECT
        </button>
      </motion.div>

      {/* RIGHT VIDEO FRAME */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="md:w-1/2 md:mt-0 flex justify-center items-center"
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full h-full rounded-[40px] object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;