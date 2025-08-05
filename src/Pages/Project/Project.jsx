

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import HeroBanner from "./Hero";

// const bgImages = [
//   "https://plus.unsplash.com/premium_photo-1681400054984-c20bf5879c3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
//   "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1661964187664-e26f70e1a224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
// ];

// const projects = [
//   {
//     id: 1,
//     title: "InspireWell – Mental Health SaaS Platform",
//     description:
//       "InspireWell is a comprehensive mental wellness SaaS solution built for therapists and individuals. It includes online booking, mood tracking, AI-guided journaling, and analytics for self-growth. Built using React, Laravel, and MongoDB.",
//     image:
//       "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
//     tech: ["React", "Laravel", "MongoDB", "Tailwind CSS", "Framer Motion"],
//   },
//   {
//     id: 2,
//     title: "ShopEase – E-commerce Web App",
//     description:
//       "A fast, scalable e-commerce web app that supports multiple vendors, real-time inventory, and AI-driven recommendations. Designed for startups and small businesses.",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
//     tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
//   },
//   {
//     id: 3,
//     title: "LeadBoost – Digital Marketing Dashboard",
//     description:
//       "A custom-built marketing analytics dashboard tailored for agencies and digital teams to track campaigns, leads, CTR, and performance using integrated APIs like Google Ads, Facebook Ads, and more.",
//     image:
//       "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
//     tech: ["Vue.js", "Laravel", "REST APIs", "Chart.js"],
//   },
//   {
//   id: 4,
//   title: "EduTrack – Learning Management System (LMS)",
//   description:
//     "EduTrack is a feature-rich LMS designed for universities and online education providers. It offers course management, real-time quizzes, student analytics, and progress tracking. Built to scale with performance in mind.",
//   image:
//     "https://images.unsplash.com/photo-1625217527288-93919c99650a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3BzJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D",
//   tech: ["React", "Express.js", "MySQL", "Tailwind CSS", "Redux Toolkit"],
// },
// {
//   id: 5,
//   title: "FitNation – Fitness and Nutrition App",
//   description:
//     "FitNation is a cross-platform fitness tracking app that provides personalized workout routines, meal plans, and progress insights. Includes user authentication, calendar scheduling, and goal tracking features.",
//   image:
//     "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZpdHxlbnwwfHwwfHx8MA%3D%3D",
//   tech: ["React Native", "Firebase", "Node.js", "Expo", "Styled Components"],
// },
// {
//   id: 6,
//   title: "RentRoam – Real Estate Rental Platform",
//   description:
//     "RentRoam is an advanced property rental marketplace allowing agents and users to list, filter, and book properties in real-time. It includes map integration, user messaging, and landlord dashboards.",
//   image:
//     "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
//   tech: ["Next.js", "Laravel", "MySQL", "Leaflet.js", "Tailwind CSS"],
// },

// ];

// const ProjectDetails = () => {
 

//   return (
//     <div className=" text-black font-poppins">
//       {/* Hero Section with Animated Background */}
//       <HeroBanner/>

//       {/* Project Showcase Section */}
//       <section className="px-4 md:px-16 py-24 bg-[#DBD2FF] ">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-center"
//         >
//           <h2 className="text-4xl font-[Archivo] text-black mb-2">
//             Recent Projects
//           </h2>
//           <p className="text-gray-600 font-[Outfit]">
//             Genuine case studies demonstrating our expertise
//           </p>
//         </motion.div>

//         <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               whileHover={{ scale: 1.03 }}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="bg-gray-50  shadow-[8px_8px_0px_rgb(0,0,0,0.6)] rounded-xl overflow-hidden duration-10 transition-all"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold font-[Archivo] text-black">
//                   {project.title}
//                 </h2>
//                 <p className="text-gray-600 font-[Poppins] text-sm mt-2">
//                   {project.description}
//                 </p>
//                 <div className="mt-4 text-xs font-[Inter] text-gray-500">
//                   Tech Stack: {project.tech.join(", ")}
//                 </div>
//                 <Link
//                   to={`/projects/${project.id}`}
//                   className="mt-4 inline-block text-purple-400 font-semibold font-[Outfit] hover:underline"
//                 >
//                   View Details →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="bg-gray-100 py-20 px-6">
//         <motion.div
//           className="max-w-5xl mx-auto text-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-4xl font-[Archivo] mb-6">
//             Why Businesses Trust Us
//           </h2>
//           <p className="text-gray-600 font-[Outfit] text-lg mb-8">
//             We bring together creativity, technology, and performance with a
//             strategy-first approach to deliver industry-grade IT and Marketing
//             solutions.
//           </p>
//           <div className="grid md:grid-cols-3 gap-8 text-left">
//             <div>
//               <h3 className="font-[Archivo] text-xl mb-2">
//                 Tailored Solutions
//               </h3>
//               <p className="font-[Poppins] text-sm text-gray-600">
//                 We design and develop products specific to your goals. No
//                 templates. No limits.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-[Archivo] text-xl mb-2">Agile Development</h3>
//               <p className="font-[Poppins] text-sm text-gray-600">
//                 Agile processes with rapid iterations to reduce time-to-market
//                 and improve quality.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-[Archivo] text-xl mb-2">
//                 Performance & Support
//               </h3>
//               <p className="font-[Poppins] text-sm text-gray-600">
//                 Long-term partnerships with performance optimization and 24/7
//                 client support.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-6 text-center bg-white">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-[Archivo] mb-4">
//             Have a Vision? Let’s Build It Together.
//           </h2>
//           <p className="text-lg font-[Outfit] text-gray-600 mb-6">
//             We work with startups, SMEs, and enterprises to build scalable,
//             performant applications that make an impact.
//           </p>
//           <a
//             href="mailto:contact@ozmediaplanet.com"
//             className="bg-[#DBD2FF] hover:bg-purple-300 text-black px-6 py-3 rounded-full font-[Outfit] transition"
//           >
//             Let’s Connect
//           </a>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default ProjectDetails;




import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroBanner from "./Hero";
import { FaCogs, FaRunning, FaHeadset } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "InspireWell – Mental Health SaaS Platform",
    description:
      "InspireWell is a comprehensive mental wellness SaaS solution built for therapists and individuals. It includes online booking, mood tracking, AI-guided journaling, and analytics for self-growth. Built using React, Laravel, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    tech: ["React", "Laravel", "MongoDB", "Tailwind CSS", "Framer Motion"],
    route: "/projects-details/inspirewall-mentalhealth-saas-platform",
  },
  {
    id: 2,
    title: "ShopEase – E-commerce Web App",
    description:
      "A fast, scalable e-commerce web app that supports multiple vendors, real-time inventory, and AI-driven recommendations. Designed for startups and small businesses.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    route: "/projects-details/shopease-e-commerce-web-app",
  },
  {
    id: 3,
    title: "LeadBoost – Digital Marketing Dashboard",
    description:
      "A custom-built marketing analytics dashboard tailored for agencies and digital teams to track campaigns, leads, CTR, and performance using integrated APIs like Google Ads, Facebook Ads, and more.",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
    tech: ["Vue.js", "Laravel", "REST APIs", "Chart.js"],
    route: "/projects-details/leadboost-digital-marketing-dashboard",
  },
  {
    id: 4,
    title: "EduTrack – Learning Management System (LMS)",
    description:
      "EduTrack is a feature-rich LMS designed for universities and online education providers. It offers course management, real-time quizzes, student analytics, and progress tracking. Built to scale with performance in mind.",
    image:
      "https://images.unsplash.com/photo-1625217527288-93919c99650a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3BzJTIwdHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D",
    tech: ["React", "Express.js", "MySQL", "Tailwind CSS", "Redux Toolkit"],
    route: "/projects-details/edu-track-learning-management-system",
  },
  {
    id: 5,
    title: "FitNation – Fitness and Nutrition App",
    description:
      "FitNation is a cross-platform fitness tracking app that provides personalized workout routines, meal plans, and progress insights. Includes user authentication, calendar scheduling, and goal tracking features.",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZpdHxlbnwwfHwwfHx8MA%3D%3D",
    tech: ["React Native", "Firebase", "Node.js", "Expo", "Styled Components"],
    route: "/projects-details/fitnation-fitness-and-nutrition-app",
  },
  {
    id: 6,
    title: "RentRoam – Real Estate Rental Platform",
    description:
      "RentRoam is an advanced property rental marketplace allowing agents and users to list, filter, and book properties in real-time. It includes map integration, user messaging, and landlord dashboards.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
    tech: ["Next.js", "Laravel", "MySQL", "Leaflet.js", "Tailwind CSS"],
    route: "/projects-details/rentroam-real-state-rental-platofrm",
  },
];

const ProjectDetails = () => {
  return (
    <div className="text-black font-poppins">
      {/* Hero Section */}
      <HeroBanner />

      {/* Projects */}
      <section className="px-4 md:px-16 py-24 bg-[#DBD2FF]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl font-[Archivo] text-black mb-2">
            Recent Projects
          </h2>
          <p className="text-gray-600 font-[Outfit]">
            Genuine case studies demonstrating our expertise
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 shadow-[8px_8px_0px_rgb(0,0,0,0.6)] rounded-xl overflow-hidden duration-10 transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold font-[Archivo] text-black">
                  {project.title}
                </h2>
                <p className="text-gray-600 font-[Poppins] text-sm mt-2">
                  {project.description}
                </p>
                <div className="mt-4 text-xs font-[Inter] text-gray-500">
                  Tech Stack: {project.tech.join(", ")}
                </div>
                <Link
                  to={project.route}
                  className="mt-4 inline-block text-purple-400 font-semibold font-[Outfit] hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Businesses Trust Us Section */}
      <section className="bg-gray-100 py-20 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-[Archivo] mb-6">
            Why Businesses Trust Us
          </h2>
          <p className="text-gray-600 font-[Outfit] text-lg mb-8">
            We bring together creativity, technology, and performance with a
            strategy-first approach to deliver industry-grade IT and Marketing
            solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col items-start">
              <FaCogs className="text-purple-500 text-2xl mb-2" />
              <h3 className="font-[Archivo] text-xl mb-2">Tailored Solutions</h3>
              <p className="font-[Poppins] text-sm text-gray-600">
                We design and develop products specific to your goals. No
                templates. No limits.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <FaRunning className="text-purple-500 text-2xl mb-2" />
              <h3 className="font-[Archivo] text-xl mb-2">Agile Development</h3>
              <p className="font-[Poppins] text-sm text-gray-600">
                Agile processes with rapid iterations to reduce time-to-market
                and improve quality.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <FaHeadset className="text-purple-500 text-2xl mb-2" />
              <h3 className="font-[Archivo] text-xl mb-2">
                Performance & Support
              </h3>
              <p className="font-[Poppins] text-sm text-gray-600">
                Long-term partnerships with performance optimization and 24/7
                client support.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-[Archivo] mb-4">
            Have a Vision? Let’s Build It Together.
          </h2>
          <p className="text-lg font-[Outfit] text-gray-600 mb-6">
            We work with startups, SMEs, and enterprises to build scalable,
            performant applications that make an impact.
          </p>
          <a
            href="mailto:contact@ozmediaplanet.com"
            className="bg-[#DBD2FF] hover:bg-purple-300 text-black px-6 py-3 rounded-full font-[Outfit] transition"
          >
            Let’s Connect
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectDetails;
