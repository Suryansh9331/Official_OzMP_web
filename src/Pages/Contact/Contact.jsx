

// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { motion } from "framer-motion";
// import bgImage from "../../assets/images/bg.png";

// // Animation variants for stagger effect
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.25,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const Contact = () => {
//   return (
//     <section
//       className="lg:min-h-screen h-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 px-4 lg:px-16 md:py-20 py-12 bg-no-repeat bg-cover"
//       style={{
//         backgroundColor: "#DBD2FF",
//         backgroundImage: `url(${bgImage})`,
//       }}
//     >
//       {/* Left Content with staggered animation */}
//       <motion.div
//         className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1
//           variants={itemVariants}
//           className="text-2xl md:text-5xl lg:text-5xl font-bold font-['Archivo'] text-black leading-tight"
//         >
//           Join 100+ Businesses And Grow With Oz Media
//         </motion.h1>

//         <motion.p
//           variants={itemVariants}
//           className="text-base sm:text-lg font-['Inter'] text-gray-800"
//         >
//           Keep Your Business Account And All Your Finance Needs Safely Organized
//           Under One Roof.
//         </motion.p>

//         <motion.ul variants={containerVariants} className="space-y-2 mt-4">
//           {["Analytics Options", "Analytics Options", "Analytics Options"].map(
//             (item, idx) => (
//               <motion.li
//                 key={idx}
//                 variants={itemVariants}
//                 className="flex items-center justify-center lg:justify-start gap-2 font-['Inter']"
//               >
//                 <FaCheckCircle className="text-purple-500" />
//                 <span>{item}</span>
//               </motion.li>
//             )
//           )}
//         </motion.ul>
//       </motion.div>

//       {/* Right Contact Form with slide-in */}
//       <motion.div
//         className="w-full lg:max-w-xl md:max-w-2xl bg-white rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.85)] px-6 md:px-10 py-10"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
//       >
//         <h2 className="text-lg md:text-2xl font-semibold font-['Archivo'] text-black mb-10 text-center">
//           Ready To Elevate Your Business? Let’s Connect Today!
//         </h2>

//         <form className="space-y-7 font-['Archivo']">
//           <input
//             type="text"
//             placeholder="Clients Full name/Company Name "
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



import React, { useState } from "react";
import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/bg.png";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sheetDbUrl = "https://sheetdb.io/api/v1/7gehgnkp02z7z"; // replace with your SheetDB API

    const payload = {
      data: { ...formData },
    };

    try {
      const response = await fetch(sheetDbUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          address: "",
          message: "",
        });
      } else {
        console.error("Form submission failed.");
      }
    } catch (err) {
      console.error("Error submitting to SheetDB:", err);
    }
  };

  return (
    <section
      className="lg:min-h-screen h-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 px-4 lg:px-16 md:py-20 py-12 bg-no-repeat bg-cover"
      style={{
        backgroundColor: "#DBD2FF",
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Left Content */}
      <motion.div
        className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl md:text-5xl font-bold font-['Archivo'] text-black"
        >
          Join 100+ Businesses And Grow With Oz Media
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg font-['Inter'] text-gray-800"
        >
          Keep Your Business Account And All Your Finance Needs Safely Organized Under One Roof.
        </motion.p>

       

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="mt-8 space-y-4 font-['Archivo'] text-gray-800"
        >
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-purple-600" />
            <span>contact@ozmediaplanet.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-purple-600" />
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-600" />
            <span>New Delhi, India</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Contact Form */}
      <motion.div
        className="w-full lg:max-w-xl md:max-w-2xl bg-white rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.85)] px-6 md:px-10 py-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="text-lg md:text-2xl font-semibold font-['Archivo'] text-black mb-10 text-center">
          Ready To Elevate Your Business? Let’s Connect Today!
        </h2>

        {submitted ? (
          <p className="text-green-700 text-center font-semibold font-['Archivo']">
            Thank you for your response, our team will analyze your request and connect soon.
          </p>
        ) : (
          <form className="space-y-7 font-['Archivo']" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Clients Full name/Company Name"
              className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address*"
              className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              name="mobile"
              type="text"
              placeholder="Mobile Number*"
              className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              name="address"
              type="text"
              placeholder="Business/Office Address*"
              className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows={3}
              placeholder="Your Message*"
              className="w-full border-b-2 outline-none pb-2 resize-none placeholder-gray-500"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="text-center animate-bounce">
              <button
                type="submit"
                className="bg-[#DBD2FF] shadow-[4px_4px_0px_0px_black] text-black px-8 py-2 rounded-full mt-2 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
