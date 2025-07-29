// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Plus, Minus } from "lucide-react";

// const faqs = [
//   {
//     question: "What does OZ Media actually do?",
//     answer:
//       "We're a hybrid digital agency that blends strategic marketing with custom IT development. From brand campaigns to mobile apps, we help businesses grow creatively and scale technically — all under one roof.",
//   },
//   {
//     question:
//       "Can I hire you for just one service — like marketing or development?",
//     answer:
//       "Yes. You can work with us for just digital marketing, just development, or go all in with a full-stack solution. We're flexible and custom-built to fit your needs.",
//   },
//   {
//     question: "How do we start working together?",
//     answer:
//       "Easy. Just fill out our contact form, drop us a message, or schedule a quick discovery call. We'll understand your goals, suggest a solution, and take it from there.",
//   },
//   {
//     question: "What makes you different from other agencies?",
//     answer:
//       "Most agencies specialize in one thing. We bring creative strategy and smart technology together — so your brand looks amazing and runs flawlessly.",
//   },
//   {
//     question: "What tech stack and marketing tools do you specialize in?",
//     answer:
//       "We build on React, Vue, Laravel, Node.js, and cloud platforms like AWS & Azure. On the marketing side, we rock Google Ads, Meta Ads, HubSpot, SEO tools, and data analytics suites. If it moves pixels or processes data, we know it.",
//   },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const toggleIndex = (index) => {
//     setOpenIndex(index === openIndex ? null : index);
//   };

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-6xl mx-auto px-6 bg-[#DBD2FE] rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10">
//         {/* Left Side */}
//         <div>
//           <h2
//             className="text-3xl md:text-4xl font-bold mb-4"
//             style={{ fontFamily: "Archivo" }}
//           >
//             Got Questions?
//           </h2>
//           <p className="text-sm text-gray-700" style={{ fontFamily: "Archivo" }}>
//             As a full-service IT and digital marketing agency, we know clarity matters. Here’s what you need to know about working with OZ Media.
//           </p>
//         </div>

//         {/* Right Side - FAQ */}
//         <div>
//           {faqs.map((item, index) => (
//             <div key={index} className="border-b border-gray-300 py-4">
//               <button
//                 onClick={() => toggleIndex(index)}
//                 className="flex justify-between items-center w-full text-left"
//                 style={{ fontFamily: "Inter" }}
//               >
//                 <span className="font-medium text-base text-gray-900">
//                   {item.question}
//                 </span>
//                 <span className="ml-4">
//                   {openIndex === index ? (
//                     <Minus className="h-4 w-4 text-purple-700" />
//                   ) : (
//                     <Plus className="h-4 w-4 text-purple-700" />
//                   )}
//                 </span>
//               </button>
//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden mt-2 text-sm text-gray-700"
//                     style={{ fontFamily: "Inter" }}
//                   >
//                     {item.answer}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqs = [
    {
      question: "What does OZ Media actually do?",
      answer:
        "We're a hybrid digital agency that blends strategic marketing with custom IT development. From brand campaigns to mobile apps, we help businesses grow creatively and scale technically — all under one roof.",
    },
    {
      question:
        "Can I hire you for just one service — like marketing or development?",
      answer:
        "Yes. You can work with us for just digital marketing, just development, or go all in with a full-stack solution. We're flexible and custom-built to fit your needs.",
    },
    {
      question: "How do we start working together?",
      answer:
        "Easy. Just fill out our contact form, drop us a message, or schedule a quick discovery call. We'll understand your goals, suggest a solution, and take it from there.",
    },
    {
      question: "What makes you different from other agencies?",
      answer:
        "Most agencies specialize in one thing. We bring creative strategy and smart technology together — so your brand looks amazing and runs flawlessly.",
    },
    {
      question: "What tech stack and marketing tools do you specialize in?",
      answer:
        "We build on React, Vue, Laravel, Node.js, and cloud platforms like AWS & Azure. On the marketing side, we rock Google Ads, Meta Ads, HubSpot, SEO tools, and data analytics suites. If it moves pixels or processes data, we know it.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="lg:py-22 bg-white py-8 px-4 sm:px-6 lg:px-10">
      <div className="max- mx-auto">
        <div className="bg-[#DBD2FE] rounded-3xl p-6 sm:p-8 lg:p-12">
          
          {/* Grid Layout: Left Header, Right FAQ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            
            {/* Left Side - Header Section */}
            <div className="lg:pr-8">
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                Got Questions?
              </h1>
              <p 
                className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                Discover how OZ Media transforms businesses through innovative IT solutions and strategic digital marketing. We're here to help you grow and scale your digital presence.
              </p>
            </div>

            {/* Right Side - FAQ Section */}
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-400 pb-3 sm:pb-4 transition-all duration-300 ease-in-out"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50 rounded-lg px-2 hover:bg-white/20 transition-colors duration-200"
                  >
                    <span 
                      className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-4 leading-tight"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform duration-300 ease-in-out ${
                          openIndex === index ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index 
                        ? 'max-h-96 opacity-100 mt-2 sm:mt-3' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-2 pb-2">
                      <p 
                        className="text-sm sm:text-base text-gray-700 leading-relaxed animate-fade-in"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          animationDelay: openIndex === index ? '200ms' : '0ms'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FAQ;