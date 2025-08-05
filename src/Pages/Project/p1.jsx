// import React from "react";
// import { motion } from "framer-motion";
// import { FaCogs, FaRocket, FaPuzzlePiece, FaBrain, FaUserShield, FaGlobe, FaHeartbeat } from "react-icons/fa";

// const Inspirewall = () => {
//   return (
//     <div className="font-poppins text-black bg-white">
//       {/* Hero Section */}
//       <section className="relative w-full h-[60vh] overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=80"
//           alt="InspireWell Hero"
//           className="w-full h-full object-cover brightness-75 "
//         />
//         <div className="absolute inset-0 flex items-center justify-center text-center px-4">
//           <motion.div
          
//           >
//             <h1 className="text-4xl md:text-5xl font-[Archivo] text-white font-bold mb-4 drop-shadow-lg">
//               InspireWell – Mental Health SaaS Platform
//             </h1>
//             <p className="text-lg font-[Outfit] text-gray-100 max-w-3xl mx-auto">
//               Empowering therapists and individuals with a digital-first approach to mental wellness,
//               backed by powerful tools and a calming experience.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Content Section */}
//       <section className="py-20 px-4 md:px-20 bg-white">
//         <motion.div
         
//         >
//           <motion.h2 className="text-3xl font-[Archivo] mb-4" whileInView={{ scale: 1.05 }}>
//             Project Overview
//           </motion.h2>
//           <p className="text-gray-700 text-lg font-[Poppins] mb-8">
//             InspireWell is a robust mental wellness SaaS platform tailored for therapists and
//             individuals navigating personal growth, mental health improvement, and habit building.
//             The platform allows users to track their moods, engage in guided journaling powered by
//             AI, schedule therapy sessions, and access insights through smart analytics — all from a
//             clean, secure dashboard.
//           </p>

//           <div className="grid md:grid-cols-2 gap-10 mb-16">
//             <motion.div whileHover={{ scale: 1.02 }}>
//               <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
//                 <FaPuzzlePiece className="text-[#DBD2FF]" /> Key Features
//               </h3>
//               <ul className="list-disc pl-5 text-gray-700 font-[Poppins] space-y-2">
//                 <li>AI-assisted daily journaling prompts</li>
//                 <li>Interactive mood tracking and trends visualization</li>
//                 <li>One-click therapist booking system with calendar sync</li>
//                 <li>Secure client-therapist chat & document sharing</li>
//                 <li>Progress dashboard with exportable insights</li>
//               </ul>
//             </motion.div>

//             <motion.div whileHover={{ scale: 1.02 }}>
//               <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
//                 <FaCogs className="text-[#DBD2FF]" /> Tech Stack
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {["React", "Laravel", "MongoDB", "Tailwind CSS", "Framer Motion"].map((tech, i) => (
//                   <span
//                     key={i}
//                     className="bg-[#DBD2FF] text-black px-4 py-2 rounded-full font-[Outfit] text-sm shadow-md"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <p className="mt-4 text-gray-600 font-[Poppins] text-sm">
//                 <strong>React</strong> for responsive SPA, <strong>Laravel</strong> for secure
//                 back-end API, <strong>MongoDB</strong> for flexible document storage, and
//                 <strong> Tailwind CSS</strong> for rapid UI design.
//               </p>
//             </motion.div>
//           </div>

//           <motion.div className="mb-16" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.2 }}>
//             <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
//               <FaBrain className="text-[#DBD2FF]" /> Problem It Solves
//             </h3>
//             <p className="text-gray-700 font-[Poppins]">
//               Traditional therapy tools lacked personalization and digital accessibility. InspireWell
//               bridges this gap by providing a holistic mental wellness platform, enabling users to
//               actively participate in their mental growth and therapists to monitor progress
//               remotely with clarity and care.
//             </p>
//           </motion.div>

//           <motion.div className="mb-16" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.3 }}>
//             <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
//               <FaUserShield className="text-[#DBD2FF]" /> Challenges & Solutions
//             </h3>
//             <p className="text-gray-700 font-[Poppins] mb-4">
//               Ensuring trust and safety for users was the top priority. We incorporated calming UI
//               elements, rigorous data validation, and encryption strategies to safeguard sensitive
//               mental health records.
//             </p>
//             <p className="text-gray-700 font-[Poppins]">
//               Laravel’s validation layer, paired with MongoDB’s encryption and an intuitive UI
//               powered by React, helped us deliver a scalable and secure experience across all
//               devices.
//             </p>
//           </motion.div>

//           <motion.div className="mb-16" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.4 }}>
//             <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
//               <FaRocket className="text-[#DBD2FF]" /> Final Outcome
//             </h3>
//             <p className="text-gray-700 font-[Poppins]">
//               InspireWell is now utilized by over 150+ wellness professionals across the globe.
//               Feedback highlights its engaging AI journaling, ease of use, and the client insights it
//               offers. With a responsive and intuitive interface, InspireWell elevates how digital
//               therapy works.
//             </p>
//           </motion.div>

//           <motion.div className="mb-20" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5 }}>
//             <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
//               <FaGlobe className="text-[#DBD2FF]" /> Future Improvements
//             </h3>
//             <ul className="list-disc pl-5 text-gray-700 font-[Poppins] space-y-2">
//               <li>Integration with wearables for biofeedback data</li>
//               <li>Multilingual support for global accessibility</li>
//               <li>Gamification modules for user engagement</li>
//               <li>AI-based therapist matching engine</li>
//               <li>HIPAA-compliant video consultations</li>
//             </ul>
//           </motion.div>

//           <motion.div className="text-center" whileHover={{ scale: 1.05 }}>
//             <a
//               href="mailto:contact@ozmediaplanet.com"
//               className="inline-block bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-[Outfit] transition shadow-lg"
//             >
//               Work With Us →
//             </a>
//           </motion.div>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Inspirewall;

import React from "react";
import { FaCogs, FaRocket, FaPuzzlePiece, FaBrain, FaUserShield, FaGlobe, FaHeartbeat, FaJournalWhills, FaCalendarAlt, FaComments, FaChartLine, FaLock, FaMobile } from "react-icons/fa";

const Inspirewall = () => {
  return (
    <div className="font-poppins text-black bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh]  overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&q=80"
          alt="InspireWell Hero"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="transform transition-all duration-700 ease-out opacity-0 translate-y-4 animate-[fadeInUp_0.8s_0.2s_ease-out_forwards]">
            <h1 className="text-4xl md:text-5xl font-[Archivo] text-white font-bold mb-4 drop-shadow-lg">
              InspireWell – Mental Health SaaS Platform
            </h1>
            <p className="text-lg font-[Outfit] text-gray-100 max-w-3xl mx-auto">
              Empowering therapists and individuals with a digital-first approach to mental wellness,
              backed by powerful tools and a calming experience.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="transform transition-all duration-500 ease-out opacity-0 translate-y-4 animate-[fadeInUp_0.6s_0.4s_ease-out_forwards]">
          <h2 className="text-3xl font-[Archivo] mb-4 flex items-center gap-3">
            <FaHeartbeat className="text-[#DBD2FF] animate-pulse" />
            Project Overview
          </h2>
          <p className="text-gray-700 text-lg font-[Poppins] mb-8">
            InspireWell is a robust mental wellness SaaS platform tailored for therapists and
            individuals navigating personal growth, mental health improvement, and habit building.
            The platform allows users to track their moods, engage in guided journaling powered by
            AI, schedule therapy sessions, and access insights through smart analytics — all from a
            clean, secure dashboard.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg rounded-lg p-1">
              <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
                <FaPuzzlePiece className="text-[#DBD2FF]" /> Key Features
              </h3>
              <ul className="list-none pl-0 text-gray-700 font-[Poppins] space-y-3">
                <li className="flex items-start gap-3">
                  <FaJournalWhills className="text-[#DBD2FF] mt-1 flex-shrink-0" />
                  AI-assisted daily journaling prompts
                </li>
                <li className="flex items-start gap-3">
                  <FaChartLine className="text-[#DBD2FF] mt-1 flex-shrink-0" />
                  Interactive mood tracking and trends visualization
                </li>
                <li className="flex items-start gap-3">
                  <FaCalendarAlt className="text-[#DBD2FF] mt-1 flex-shrink-0" />
                  One-click therapist booking system with calendar sync
                </li>
                <li className="flex items-start gap-3">
                  <FaComments className="text-[#DBD2FF] mt-1 flex-shrink-0" />
                  Secure client-therapist chat & document sharing
                </li>
                <li className="flex items-start gap-3">
                  <FaChartLine className="text-[#DBD2FF] mt-1 flex-shrink-0" />
                  Progress dashboard with exportable insights
                </li>
              </ul>
            </div>

            <div className=" bg-[#DBD2FF] border-2 border-black rounded-tl-4xl rounded-br-4xl rounded-tr-none rounded-bl-none p-6  transform transition-all duration-300 hover:translate-y-[-2px] shadow-[8px_8px_0px_rgb(0,0,0,0.8)] ">
              <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
                <FaCogs className="text-[#DBD2FF]" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3 mb-4">
                {["React", "Laravel", "MongoDB", "Tailwind CSS", "Framer Motion"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white border-black border text-black px-4 py-2 rounded-full font-[Outfit] text-sm shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 font-[Poppins] text-sm">
                <strong>React</strong> for responsive SPA, <strong>Laravel</strong> for secure
                back-end API, <strong>MongoDB</strong> for flexible document storage, and
                <strong> Tailwind CSS</strong> for rapid UI design.
              </p>
            </div>
          </div>

          <div className="mb-16 transform transition-all duration-300 hover:translate-y-[-1px]">
            <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
              <FaBrain className="text-[#DBD2FF]" /> Problem It Solves
            </h3>
            <p className="text-gray-700 font-[Poppins]">
              Traditional therapy tools lacked personalization and digital accessibility. InspireWell
              bridges this gap by providing a holistic mental wellness platform, enabling users to
              actively participate in their mental growth and therapists to monitor progress
              remotely with clarity and care.
            </p>
          </div>

          <div className="mb-16 transform transition-all duration-300 hover:translate-y-[-1px]">
            <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
              <FaUserShield className="text-[#DBD2FF]" /> Challenges & Solutions
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaLock className="text-[#DBD2FF] mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-[Poppins]">
                  Ensuring trust and safety for users was the top priority. We incorporated calming UI
                  elements, rigorous data validation, and encryption strategies to safeguard sensitive
                  mental health records.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FaMobile className="text-[#DBD2FF] mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-[Poppins]">
                  Laravel's validation layer, paired with MongoDB's encryption and an intuitive UI
                  powered by React, helped us deliver a scalable and secure experience across all
                  devices.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 transform transition-all duration-300 hover:translate-y-[-1px]">
            <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
              <FaRocket className="text-[#DBD2FF]" /> Final Outcome
            </h3>
            <p className="text-gray-700 font-[Poppins]">
              InspireWell is now utilized by over 150+ wellness professionals across the globe.
              Feedback highlights its engaging AI journaling, ease of use, and the client insights it
              offers. With a responsive and intuitive interface, InspireWell elevates how digital
              therapy works.
            </p>
          </div>

          <div className="mb-20 transform transition-all duration-300 hover:translate-y-[-1px]">
            <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
              <FaGlobe className="text-[#DBD2FF]" /> Future Improvements
            </h3>
            <ul className="list-none pl-0 text-gray-700 font-[Poppins] space-y-2">
              <li className="flex items-center gap-3">
                <FaHeartbeat className="text-[#DBD2FF] flex-shrink-0" />
                Integration with wearables for biofeedback data
              </li>
              <li className="flex items-center gap-3">
                <FaGlobe className="text-[#DBD2FF] flex-shrink-0" />
                Multilingual support for global accessibility
              </li>
              <li className="flex items-center gap-3">
                <FaRocket className="text-[#DBD2FF] flex-shrink-0" />
                Gamification modules for user engagement
              </li>
              <li className="flex items-center gap-3">
                <FaBrain className="text-[#DBD2FF] flex-shrink-0" />
                AI-based therapist matching engine
              </li>
              <li className="flex items-center gap-3">
                <FaUserShield className="text-[#DBD2FF] flex-shrink-0" />
                HIPAA-compliant video consultations
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="mailto:contact@ozmediaplanet.com"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-[Outfit] transition-all duration-200 shadow-md hover:shadow-lg transform hover:translate-y-[-1px]"
            >
              Work With Us
              <FaRocket className="text-sm" />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Inspirewall;