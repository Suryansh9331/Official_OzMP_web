// import React, { useState } from "react";
// import { FaCheckCircle, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import bgImage from "../../assets/images/bg.png";

// // Animation variants
// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.25 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     countryCode: "+91",
//     mobile: "",
//     address: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     const sheetDbUrl = "https://sheetdb.io/api/v1/pkow4yw5gcvjh";

//     const payload = {
//       data: {
//         ...formData,
//         mobile: `${formData.countryCode}${formData.mobile}`,
//       },
//     };

//     try {
//       const response = await fetch(sheetDbUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         // Simulate processing delay for UX
//         setTimeout(() => {
//           setIsLoading(false);
//           setSubmitted(true);
//           setFormData({
//             name: "",
//             email: "",
//             countryCode: "+91",
//             mobile: "",
//             address: "",
//             message: "",
//           });
//         }, 2000);
//       } else {
//         setIsLoading(false);
//         console.error("Form submission failed.");
//       }
//     } catch (err) {
//       setIsLoading(false);
//       console.error("Error submitting to SheetDB:", err);
//     }
//   };

//   return (
//     <section
//       className="lg:min-h-screen h-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 px-4 lg:px-16 md:py-20 py-12 bg-no-repeat bg-cover"
//       style={{
//         backgroundColor: "#DBD2FF",
//         backgroundImage: `url(${bgImage})`,
//       }}
//     >
//       {/* Left Content */}
//       <motion.div
//         className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1
//           variants={itemVariants}
//           className="text-2xl md:text-5xl font-bold font-['Archivo'] text-black"
//         >
//           Join 100+ Businesses And Grow With Oz Media
//         </motion.h1>

//         <motion.p
//           variants={itemVariants}
//           className="text-base sm:text-lg font-['Inter'] text-gray-800"
//         >
//           Keep Your Business Account And All Your Finance Needs Safely Organized Under One Roof.
//         </motion.p>

//         {/* Contact Info */}
//         <motion.div
//           variants={itemVariants}
//           className="mt-8 space-y-4 font-['Archivo'] text-gray-800"
//         >
//           <div className="flex items-center gap-3">
//             <FaEnvelope className="text-purple-600" />
//             <span>info@ozmediaplanet.com.com</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <FaPhoneAlt className="text-purple-600" />
//             <span>+91 9876543210</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <FaMapMarkerAlt className="text-purple-600" />
//             <span>PU54 VijayNagar,Indore,M.P.,India </span>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Right Contact Form */}
//       <motion.div
//         className="w-full lg:max-w-xl md:max-w-2xl bg-white rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.85)] px-6 md:px-10 py-10"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
//       >
//         <h2 className="text-lg md:text-2xl font-semibold font-['Archivo'] text-black mb-10 text-center">
//           Ready To Elevate Your Business? Let’s Connect Today!
//         </h2>

//         <AnimatePresence>
//           {submitted ? (
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="text-green-700 text-center font-semibold font-['Archivo']"
//             >
//               Thank you for your response, our team will analyze your request and connect soon.
//             </motion.p>
//           ) : (
//             <form className="space-y-7 font-['Archivo']" onSubmit={handleSubmit}>
//               <input
//                 name="name"
//                 type="text"
//                 placeholder="Client's Full name / Company Name"
//                 className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Email Address*"
//                 className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />

//               {/* Mobile Number with Country Code */}
//               <div className="flex items-center gap-3">
//                 <select
//                   name="countryCode"
//                   className="border-b-2 pb-2 outline-none bg-transparent"
//                   value={formData.countryCode}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="+91">🇮🇳 +91</option>
//                   <option value="+1">🇺🇸 +1</option>
//                   <option value="+44">🇬🇧 +44</option>
//                   <option value="+61">🇦🇺 +61</option>
//                   <option value="+971">🇦🇪 +971</option>
//                   <option value="+880">🇧🇩 +880</option>
//                 </select>
//                 <input
//                   name="mobile"
//                   type="tel"
//                   placeholder="Mobile Number*"
//                   className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <input
//                 name="address"
//                 type="text"
//                 placeholder="Business/Office Address*"
//                 className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//               <textarea
//                 name="message"
//                 rows={3}
//                 placeholder="Your Message*"
//                 className="w-full border-b-2 outline-none pb-2 resize-none placeholder-gray-500"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//               ></textarea>

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`${
//                     isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#DBD2FF] hover:cursor-pointer"
//                   } shadow-[4px_4px_0px_0px_black] text-black px-8 py-2 rounded-full mt-2 transition-transform duration-300`}
//                 >
//                   {isLoading ? "Processing..." : "SUBMIT"}
//                 </button>
//               </div>
//             </form>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
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
    countryCode: "+91",
    mobile: "",
    address: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const sheetDbUrl = "https://sheetdb.io/api/v1/pkow4yw5gcvjh";

    const payload = {
      data: {
        ...formData,
        mobile: `${formData.countryCode}${formData.mobile}`,
      },
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
        setTimeout(() => {
          setIsLoading(false);
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            countryCode: "+91",
            mobile: "",
            address: "",
            message: "",
          });
        }, 2000);
      } else {
        setIsLoading(false);
        console.error("Form submission failed.");
      }
    } catch (err) {
      setIsLoading(false);
      console.error("Error submitting to SheetDB:", err);
    }
  };

  return (
    <section
      className="relative lg:min-h-screen h-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 px-4 lg:px-16 md:py-20 py-12 bg-no-repeat bg-cover"
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
          Keep Your Business Account And All Your Finance Needs Safely Organized
          Under One Roof.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="mt-8 space-y-4 font-['Archivo'] text-gray-800"
        >
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-purple-600" />
            <a
              href="mailto:info@ozmediaplanet.com.com"
              className="hover:text-purple-800"
            >
              info@ozmediaplanet.com.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-purple-600" />
            <a href="tel:+919876543210" className="hover:text-purple-800">
              +91 9876543210
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-purple-600" />
            <span>PU54 VijayNagar, Indore, M.P., India</span>
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

        <AnimatePresence>
          {submitted ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-green-700 text-center font-semibold font-['Archivo']"
            >
              Thank you for your response, our team will analyze your request
              and connect soon.
            </motion.p>
          ) : (
            <form
              className="space-y-7 font-['Archivo']"
              onSubmit={handleSubmit}
            >
              <input
                name="name"
                type="text"
                placeholder="Client's Full name / Company Name"
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

              {/* Mobile Number with Country Code */}
              <div className="flex items-center gap-3">
                <select
                  name="countryCode"
                  className="border-b-2 pb-2 outline-none bg-transparent"
                  value={formData.countryCode}
                  onChange={handleChange}
                  required
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+880">🇧🇩 +880</option>
                </select>
                <input
                  name="mobile"
                  type="tel"
                  placeholder="Mobile Number*"
                  className="w-full border-b-2 outline-none pb-2 placeholder-gray-500"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

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

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#DBD2FF] hover:cursor-pointer"
                  } shadow-[4px_4px_0px_0px_black] text-black px-8 py-2 rounded-full mt-2 transition-transform duration-300`}
                >
                  {isLoading ? "Processing..." : "SUBMIT"}
                </button>
              </div>
            </form>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating WhatsApp / Call Popup */}
      {/* Floating Email Popup - Visible only on Contact Page */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="fixed bottom-6 left-6 z-50 hidden md:block "
      >
        <a
          href="mailto:info@ozmediaplanet.com.com"
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow-lg md:animate-bounce  "
        >
          <FaEnvelope />
          Mail Us
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
