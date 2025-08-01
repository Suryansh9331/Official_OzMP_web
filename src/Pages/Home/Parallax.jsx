// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// // import bgImage1 from "../../assets/images/parallax1.jpg"; 
// // import bgImage2 from "../../assets/images/parallax2.png"; 
// import bgImage4 from "../../assets/images/parallax4.png"; 
// //  import bgImage5 from "../../assets/images/parallax5.png"; 
// // import bgImage3 from "../../assets/images/parallax3.jpg"; 

// export default function ParallaxSection() {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 100]);

//   return (
//     <div className="relative h-[100vh] w-full overflow-hidden">
//       {/* Background Image with Parallax */}
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0 z-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${bgImage4})`,
//           y,
//         }}
//       >
//         <div className="absolute inset-0 " />
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-black">
//         <h1
//           className="text-3xl md:text-5xl font-bold mb-4"
//           style={{ fontFamily: "Archivo, sans-serif" }}
//         >
//           Ready to Take Your Business to the Next Level?
//         </h1>

//         <p
//           className="text-base md:text-lg max-w-2xl mx-auto mb-8"
//           style={{ fontFamily: "Poppins, sans-serif" }}
//         >
//           Book a free consultation to discover how we can help you grow your
//           business through performance-driven marketing and cutting-edge
//           technology.
//         </p>

//         <button
//           className="px-6 py-3 rounded-full text-sm font-medium"
//           style={{
//             backgroundColor: "#DBD2FE",
//             color: "#000",
//             fontFamily: "Outfit, sans-serif",
//           }}
//         >
//           BOOK YOUR FREE STRATEGY SESSION
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import bgImage4 from "../../assets/images/parallax4.png"; 

export default function ParallaxSection() {
  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover text-black"
      style={{
        backgroundImage: `url(${bgImage4})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center lg:items-start  text-center px-2 md:px-0  py-18 md:py-38">
        <h1
          className="text-2xl md:text-5xl font-extrabold mb-4 lg:ml-8"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          Ready to Take Your Business to the Next Level?
        </h1>
        <p
          className="text-md  md:text-lg  max-w-3xl mb-6 "
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Book a free consultation to discover how we can help you grow your
          business through performance-driven marketing and cutting-edge
          technology.
        </p>
        <button
          className="px-6 ml-8 mt-4  py-3 rounded-full text-sm font-medium shadow-[4px_4px_0px_#000]"
          style={{
            backgroundColor: "#DBD2FE",
            color: "#000",
            fontFamily: "Outfit, sans-serif",
          }}
        >
          BOOK YOUR FREE STRATEGY SESSION
        </button>
      </div>
    </section>
  );
}
