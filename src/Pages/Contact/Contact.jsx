


// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";
// import bgImage from "../../assets/images/bg.png"; // Replace with actual path

// const Contact = () => {
//   return (
//     <section
//       className="lg:min-h-screen h-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 px-4 lg:px-16 md:py-20 py-12 bg-no-repeat bg-cover"
//       style={{
//         backgroundColor: "#DBD2FF",
//         backgroundImage: `url(${bgImage})`,
//       }}
//     >
//       {/* Left Content with Animation */}
//       <motion.div
//         className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold font-['Archivo'] text-black leading-tight">
//           Join 100+ Businesses And Grow With Oz Media
//         </h1>
//         <p className="text-base sm:text-lg font-['Inter'] text-gray-800">
//           Keep Your Business Account And All Your Finance 
//           Needs Safely Organized Under One Roof.
//         </p>

//         <ul className="space-y-2 mt-4">
//           {["Analytics Options", "Analytics Options", "Analytics Options"].map(
//             (item, idx) => (
//               <li
//                 key={idx}
//                 className="flex items-center justify-center lg:justify-start gap-2 font-['Inter']"
//               >
//                 <FaCheckCircle className="text-purple-500" />
//                 <span>{item}</span>
//               </li>
//             )
//           )}
//         </ul>
//       </motion.div>

//       {/* Right Contact Form with Animation */}
//       <motion.div
//         className="w-full lg:max-w-xl md:max-w-2xl bg-white rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.85)] px-6 md:px-10 py-10"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
//       >
//         <h2 className="text-lg md:text-2xl font-semibold font-['Archivo'] text-black mb-10 text-center">
//           Ready To Elevate Your Business? Let’s Connect Today!
//         </h2>

//         <form className="space-y-7 font-['Archivo']">
//           <input
//             type="text"
//             placeholder="Full Name*"
//             className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
//           />
//           <input
//             type="email"
//             placeholder="Email Address*"
//             className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
//           />
//           <input
//             type="text"
//             placeholder="Mobile Number*"
//             className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
//           />
//           <input
//             type="text"
//             placeholder="Business/Office Address*"
//             className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
//           />
//           <textarea
//             rows={3}
//             placeholder="Your Message*"
//             className="w-full border-b-2 outline-none pb-2 resize-none placeholder-gray-500"
//           ></textarea>

//           <div className="text-center animate-bounce">
//             <button
//               type="submit"
//               className="bg-[#DBD2FF] hover:cursor-pointer shadow-[4px_4px_0px_0px_black] text-black px-8 py-2 rounded-full mt-2 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-300"
//             >
//               SUBMIT
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;



import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/bg.png";

// Animation variants for stagger effect
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <section
      className="lg:min-h-screen h-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 px-4 lg:px-16 md:py-20 py-12 bg-no-repeat bg-cover"
      style={{
        backgroundColor: "#DBD2FF",
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Left Content with staggered animation */}
      <motion.div
        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-5xl lg:text-5xl font-bold font-['Archivo'] text-black leading-tight"
        >
          Join 100+ Businesses And Grow With Oz Media
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg font-['Inter'] text-gray-800"
        >
          Keep Your Business Account And All Your Finance Needs Safely Organized
          Under One Roof.
        </motion.p>

        <motion.ul variants={containerVariants} className="space-y-2 mt-4">
          {["Analytics Options", "Analytics Options", "Analytics Options"].map(
            (item, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-center justify-center lg:justify-start gap-2 font-['Inter']"
              >
                <FaCheckCircle className="text-purple-500" />
                <span>{item}</span>
              </motion.li>
            )
          )}
        </motion.ul>
      </motion.div>

      {/* Right Contact Form with slide-in */}
      <motion.div
        className="w-full lg:max-w-xl md:max-w-2xl bg-white rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.85)] px-6 md:px-10 py-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="text-lg md:text-2xl font-semibold font-['Archivo'] text-black mb-10 text-center">
          Ready To Elevate Your Business? Let’s Connect Today!
        </h2>

        <form className="space-y-7 font-['Archivo']">
          <input
            type="text"
            placeholder="Full Name*"
            className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Mobile Number*"
            className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Business/Office Address*"
            className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
          />
          <textarea
            rows={3}
            placeholder="Your Message*"
            className="w-full border-b-2 outline-none pb-2 resize-none placeholder-gray-500"
          ></textarea>

          <div className="text-center animate-bounce">
            <button
              type="submit"
              className="bg-[#DBD2FF] hover:cursor-pointer shadow-[4px_4px_0px_0px_black] text-black px-8 py-2 rounded-full mt-2 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-300"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
