

// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(0); // First question open by default

//   const faqs = [
//     {
//       question: "What does OZ Media actually do?",
//       answer:
//         "We're a hybrid digital agency that blends strategic marketing with custom IT development. From brand campaigns to mobile apps, we help businesses grow creatively and scale technically — all under one roof.",
//     },
//     {
//       question:
//         "Can I hire you for just one service — like marketing or development?",
//       answer:
//         "Yes. You can work with us for just digital marketing, just development, or go all in with a full-stack solution. We're flexible and custom-built to fit your needs.",
//     },
//     {
//       question: "How do we start working together?",
//       answer:
//         "Easy. Just fill out our contact form, drop us a message, or schedule a quick discovery call. We'll understand your goals, suggest a solution, and take it from there.",
//     },
//     {
//       question: "What makes you different from other agencies?",
//       answer:
//         "Most agencies specialize in one thing. We bring creative strategy and smart technology together — so your brand looks amazing and runs flawlessly.",
//     },
//     {
//       question: "What tech stack and marketing tools do you specialize in?",
//       answer:
//         "We build on React, Vue, Laravel, Node.js, and cloud platforms like AWS & Azure. On the marketing side, we rock Google Ads, Meta Ads, HubSpot, SEO tools, and data analytics suites. If it moves pixels or processes data, we know it.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <div className="lg:py-22 bg-white py-8 px-4 sm:px-6 lg:px-10">
//       <div className="max- mx-auto">
//         <div className="bg-[#DBD2FE] rounded-3xl p-6 sm:p-8 lg:p-12">
          
//           {/* Grid Layout: Left Header, Right FAQ */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            
//             {/* Left Side - Header Section */}
//             <div className="lg:pr-8">
//               <h1 
//                 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
//                 style={{ fontFamily: 'Archivo, sans-serif' }}
//               >
//                 Got Questions?
//               </h1>
//               <p 
//                 className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
//                 style={{ fontFamily: 'Archivo, sans-serif' }}
//               >
//                 Discover how OZ Media transforms businesses through innovative IT solutions and strategic digital marketing. We're here to help you grow and scale your digital presence.
//               </p>
//             </div>

//             {/* Right Side - FAQ Section */}
//             <div className="space-y-3 sm:space-y-4">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className="border-b border-gray-400 pb-3 sm:pb-4 transition-all duration-300 ease-in-out"
//                 >
//                   <button
//                     onClick={() => toggleFAQ(index)}
//                     className="w-full flex justify-between items-center text-left py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50 rounded-lg px-2 hover:bg-white/20 transition-colors duration-200"
//                   >
//                     <span 
//                       className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-4 leading-tight"
//                       style={{ fontFamily: 'Inter, sans-serif' }}
//                     >
//                       {faq.question}
//                     </span>
//                     <div className="flex-shrink-0">
//                       <ChevronDown
//                         className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform duration-300 ease-in-out ${
//                           openIndex === index ? 'rotate-180' : 'rotate-0'
//                         }`}
//                       />
//                     </div>
//                   </button>
                  
//                   <div
//                     className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                       openIndex === index 
//                         ? 'max-h-96 opacity-100 mt-2 sm:mt-3' 
//                         : 'max-h-0 opacity-0'
//                     }`}
//                   >
//                     <div className="px-2 pb-2">
//                       <p 
//                         className="text-sm sm:text-base text-gray-700 leading-relaxed animate-fade-in"
//                         style={{ 
//                           fontFamily: 'Inter, sans-serif',
//                           animationDelay: openIndex === index ? '200ms' : '0ms'
//                         }}
//                       >
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.3s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default FAQ;


import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
      <div className=" mx-auto">
        <div className="bg-[#DBD2FE] rounded-3xl p-6 sm:p-8 lg:p-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            <motion.div
              className="lg:pr-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
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
            </motion.div>

            {/* Right Section with FAQ Items Animated */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
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

                  <motion.div
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                      marginTop: openIndex === index ? 12 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-2 pb-2">
                      <p
                        className="text-sm sm:text-base text-gray-700 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
