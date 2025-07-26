


// import { CheckCircle } from "lucide-react";
// import { motion } from "framer-motion";

// const servicesData = [
//   {
//     title: "Digital Marketing Services",
//     points: [
//       "Social Media Marketing (Facebook, Instagram, LinkedIn, YouTube)",
//       "SEO – Search Engine Optimization",
//       "Performance Marketing (Google Ads, Paid Campaigns)",
//       "Branding & Creative Direction",
//       "Influencer Marketing",
//       "Email Marketing Automation",
//       "Video Production & Editing",
//     ],
//   },
//   {
//     title: "Analytics & Strategy Services",
//     points: [
//       "Data Analytics & Business Intelligence",
//       "Digital Strategy & Consulting",
//       "Conversion Rate Optimization (CRO)",
//       "CRM & ERP System Solutions",
//       "AI-Powered Solutions and Automation",
//       "UI/UX Design Services",
//       "API Integration Services",
//     ],
//   },
//   {
//     title: "IT & Technology Solutions",
//     points: [
//       "Website Design & Development",
//       "E-Commerce Development",
//       "Mobile App Development (iOS, Android, Hybrid)",
//       "CRM & ERP System Solutions",
//       "AI-Powered Solutions and Automation",
//       "UI/UX Design Services",
//       "API Integration Services",
//     ],
//   },
// ];

// const ServicesOverview = () => {
//   return (
//     <div className="w-full bg-white px-4 py-12">
//       <h2
//         className="text-4xl md:text-5xl font-bold text-center mb-16"
//         style={{ fontFamily: "Archivo, sans-serif", color: "#3D0D84" }}
//       >
//         Services Overview
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {servicesData.map((service, index) => {
//           const delay = index * 0.2;

//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay }}
//               viewport={{ once: true }}
//               className="bg-[#DCD4FF] rounded-2xl p-8 min-h-[520px]  shadow-[8px_8px_0px_rgb(0,0,0,0.8)] hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#3D0D84]/30 flex flex-col justify-between"
//             >
//               <div className="flex-1">
//                 <h3
//                   className="text-2xl font-semibold mb-6"
//                   style={{ fontFamily: "Archivo, sans-serif", color: "#3D0D84" }}
//                 >
//                   {service.title}
//                 </h3>

//                 <ul className="space-y-4">
//                   {service.points.map((point, idx) => (
//                     <motion.li
//                       key={idx}
//                       className="flex items-start gap-2 text-base leading-relaxed text-black"
//                       style={{ fontFamily: "Inter, sans-serif" }}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.4, delay: delay + 0.1 * idx }}
//                       viewport={{ once: true }}
//                     >
//                       <CheckCircle size={18} className="text-[#3D0D84] mt-1" />
//                       {point}
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="mt-8 self-start px-5 py-2 text-sm rounded-full bg-white text-[#3D0D84] font-semibold shadow-md transition-all hover:cursor-pointer"
//                 style={{ fontFamily: "Archivo, sans-serif" }}
//               >
//                 LEARN MORE
//               </motion.button>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ServicesOverview;



import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link

const servicesData = [
  {
    title: "Digital Marketing Services",
    link: "/services/digital-marketing", // ✅ Specific route
    points: [
      "Social Media Marketing (Facebook, Instagram, LinkedIn, YouTube)",
      "SEO – Search Engine Optimization",
      "Performance Marketing (Google Ads, Paid Campaigns)",
      "Branding & Creative Direction",
      "Influencer Marketing",
      "Email Marketing Automation",
      "Video Production & Editing",
    ],
  },
  {
    title: "Analytics & Strategy Services",
    link: "/services/analytics-strategy", // ✅ Specific route
    points: [
      "Data Analytics & Business Intelligence",
      "Digital Strategy & Consulting",
      "Conversion Rate Optimization (CRO)",
      "CRM & ERP System Solutions",
      "AI-Powered Solutions and Automation",
      "UI/UX Design Services",
      "API Integration Services",
    ],
  },
  {
    title: "IT & Technology Solutions",
    link: "/services/it-technology", // ✅ Specific route
    points: [
      "Website Design & Development",
      "E-Commerce Development",
      "Mobile App Development (iOS, Android, Hybrid)",
      "CRM & ERP System Solutions",
      "AI-Powered Solutions and Automation",
      "UI/UX Design Services",
      "API Integration Services",
    ],
  },
];

const ServicesOverview = () => {
  return (
    <div className="w-full bg-white px-4 py-12">
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        style={{ fontFamily: "Archivo, sans-serif", color: "#3D0D84" }}
      >
        Services Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {servicesData.map((service, index) => {
          const delay = index * 0.2;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay }}
              viewport={{ once: true }}
              className="bg-[#DCD4FF] rounded-2xl p-8 min-h-[520px] shadow-[8px_8px_0px_rgb(0,0,0,0.8)] hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#3D0D84]/30 flex flex-col justify-between"
            >
              <div className="flex-1">
                <h3
                  className="text-2xl font-semibold mb-6"
                  style={{ fontFamily: "Archivo, sans-serif", color: "#3D0D84" }}
                >
                  {service.title}
                </h3>

                <ul className="space-y-4">
                  {service.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2 text-base leading-relaxed text-black"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: delay + 0.1 * idx }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle size={18} className="text-[#3D0D84] mt-1" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* ✅ Learn More Button with Link */}
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to={service.link}
                  className="mt-8 inline-block self-start px-5 py-2 text-sm rounded-full bg-white text-[#3D0D84] font-semibold shadow-md transition-all hover:cursor-pointer"
                  style={{ fontFamily: "Archivo, sans-serif" }}
                >
                  LEARN MORE
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesOverview;
