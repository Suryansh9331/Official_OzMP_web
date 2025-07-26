// import React from "react";
// import './whyChoose.css';
// import { motion } from "framer-motion";

// const features = [
//   {
//     title: "Data-Driven Approach",
//     points: [
//       "Every Strategy Is Guided By Real-Time Data And Performance Insights.",
//       "We Analyze Customer Behavior, Trends, And Metrics Before Taking Action.",
//       "This Ensures Our Efforts Are Targeted, Efficient, And Results-Oriented.",
//     ],
//   },
//   {
//     title: "ROI-Focused Strategies",
//     points: [
//       "We Focus On Delivering Measurable Returns On Every Rupee You Invest.",
//       "Strategies Are Designed To Drive Leads, Conversions, And Long-Term Value.",
//       "Our Ultimate Goal: Maximize Your Profits Through Smart Marketing.",
//     ],
//   },
//   {
//     title: "End-To-End Marketing & Development",
//     points: [
//       "Complete Digital Services—From Design And Branding To Full-Stack Development.",
//       "Seamless Coordination Between Marketing And Tech For Consistent Execution.",
//       "One Reliable Team Handling Your Entire Online Growth Journey.",
//     ],
//   },
//   {
//     title: "Transparent Reporting & Analytics",
//     points: [
//       "Get Detailed Reports With Real-Time Performance Tracking.",
//       "Full Visibility Into What's Working And Where Improvements Are Needed.",
//       "No Fluff—Just Honest Data, Insights, And Progress You Can Trust.",
//     ],
//   },
// ];

// const WhyChoose = () => {
//   return (
//     <div className="bg-[#1E1C21] text-white font-archivo px-4 md:px-10 py-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
//         {/* LEFT STICKY SIDE */}
//         <div className="w-full md:w-1/2">
//           <div className="sticky top-20">
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className=""
//             >
//               <h2 className="text-3xl md:text-4xl font-bold leading-snug">
//                 Why Choose OZ Media Planet?
//               </h2>
//               <p className="mt-4 text-lg leading-relaxed">
//                 Smart Solutions. Proven Methods. <br />
//                 Transparent Execution.
//               </p>
//               <div className="flex items-center gap-2 mt-4">
//                 <div className="flex text-purple-400 text-xl">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i}>★</span>
//                   ))}
//                 </div>
//                 <p className="text-sm">4.95 &nbsp; Loved by 256 companies</p>
//               </div>
//               <button className="mt-6 border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition">
//                 LEARN MORE
//               </button>
//             </motion.div>
//           </div>
//         </div>

//         {/* RIGHT CONTENT SECTION THAT CAUSES PAGE SCROLL */}
//         <div className="w-full md:w-1/2 flex flex-col gap-6">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="bg-[#DBD2FF] text-black rounded-[1.25rem] p-6 md:p-7 shadow-md"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="flex items-start gap-3">
//                 <img
//                   src="/quote-icon.png"
//                   alt="Quote"
//                   className="w-6 h-6 mt-1"
//                 />
//                 <div>
//                   <h3 className="font-bold text-lg font-archivo">
//                     {feature.title}
//                   </h3>
//                   <ul className="mt-3 space-y-2 font-poppins text-sm">
//                     {feature.points.map((point, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <span className="text-purple-600 text-base font-bold">
//                           ✔
//                         </span>
//                         <span>{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChoose;




import React, { useEffect, useRef, useState } from 'react';

const OZMediaSection = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const [activeBox, setActiveBox] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !leftContentRef.current || !rightContentRef.current) return;

      const section = sectionRef.current;
      const leftContent = leftContentRef.current;
      const rightContent = rightContentRef.current;
      
      const sectionRect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // Calculate which box should be active based on scroll position within the section
      const scrollProgress = Math.max(0, -sectionRect.top) / (sectionHeight - viewportHeight);
      const boxIndex = Math.min(Math.floor(scrollProgress * 4), 3);
      setActiveBox(boxIndex);

      // Handle sticky behavior for the entire section scroll
      if (sectionRect.top <= 0 && sectionRect.bottom >= viewportHeight) {
        // Section is in viewport, make left content sticky
        leftContent.style.position = 'fixed';
        leftContent.style.top = '0px';
        leftContent.style.left = '0px';
        leftContent.style.width = window.innerWidth >= 1024 ? '50vw' : '100vw';
        leftContent.style.height = '100vh';
        leftContent.style.zIndex = '10';
      } else if (sectionRect.top > 0) {
        // Section hasn't entered viewport yet
        leftContent.style.position = 'relative';
        leftContent.style.top = 'auto';
        leftContent.style.left = 'auto';
        leftContent.style.width = 'auto';
        leftContent.style.height = 'auto';
        leftContent.style.zIndex = 'auto';
      } else {
        // Section has passed viewport
        leftContent.style.position = 'absolute';
        leftContent.style.top = 'auto';
        leftContent.style.bottom = '0px';
        leftContent.style.left = '0px';
        leftContent.style.width = window.innerWidth >= 1024 ? '50%' : '100%';
        leftContent.style.height = '100vh';
        leftContent.style.zIndex = '10';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const features = [
    {
      title: "Data-Driven Approach",
      points: [
        "Every Strategy Is Guided By Real-Time Data And Performance Insights.",
        "We Analyze Customer Behavior, Trends, And Metrics Before Taking Action.",
        "This Ensures Our Efforts Are Targeted, Efficient, And Results-Oriented."
      ]
    },
    {
      title: "ROI-Focused Strategies",
      points: [
        "We Focus On Delivering Measurable Returns On Every Rupee You Invest.",
        "Strategies Are Designed To Drive Leads, Conversions, And Long-Term Value.",
        "Our Ultimate Goal: Maximize Your Profits Through Smart Marketing."
      ]
    },
    {
      title: "End-To-End Marketing & Development",
      points: [
        "Complete Digital Services—From Design And Branding To Full-Stack Development.",
        "Seamless Coordination Between Marketing And Tech For Consistent Execution.",
        "One Reliable Team Handling Your Entire Online Growth Journey."
      ]
    },
    {
      title: "Transparent Reporting & Analytics",
      points: [
        "Get Detailed Reports With Real-Time Performance Tracking.",
        "Full Visibility Into What's Working And Where Improvements Are Needed.",
        "No Fluff—Just Honest Data, Insights, And Progress You Can Trust."
      ]
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-[250vh] bg-[#1E1C21] overflow-hidden"
      style={{ fontFamily: 'Archivo, sans-serif' }}
    >
      {/* Left Side - Sticky Content */}
      <div 
        ref={leftContentRef}
        className="w-full lg:w-[30%] h-screen lg:mt-12 flex flex-col justify-center px-6 lg:px-12 xl:px-16 relative z-10"
      >
        <div className="max-w-md">
          <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Why Choose OZ Media Planet?
          </h1>
          
          <div className="mb-8">
            <p className="text-white text-lg mb-2">Smart Solutions. Proven Methods.</p>
            <p className="text-white text-lg">Transparent Execution.</p>
          </div>

          <div className="flex items-center mb-8">
            <div className="flex text-yellow-400 text-xl mr-3">
              {'★'.repeat(5)}
            </div>
            <span className="text-white text-lg font-semibold mr-3">4.95</span>
            <span className="text-gray-300 text-sm">Loved by 256 companies</span>
          </div>

          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1E1C21] transition-all duration-300 text-sm font-medium tracking-wide">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Right Side - Scrollable Boxes */}
      <div 
        ref={rightContentRef}
        className="absolute top-0 right-0 w-full lg:w-[60%] px-6 lg:px-8 xl:px-10 py-20"
      >
        <div className="space-y-20 lg:space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-box bg-[#DBD2FF] rounded-2xl p-8 lg:p-10 relative transition-all duration-500 shadow-lg ${
                activeBox === index ? 'scale-105 shadow-2xl' : 'scale-100'
              }`}
              style={{ borderRadius: '24px' }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-8">
                <div className="w-10 h-10 bg-[#DBD2FF] rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#1E1C21]">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-[#1E1C21] text-xl lg:text-2xl font-bold mb-6" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  {feature.title}
                </h3>
                
                <div className="space-y-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-[#1E1C21] text-sm lg:text-base leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden absolute inset-0 px-6 py-12">
        <div className="mb-12">
          <h1 className="text-white text-3xl font-bold mb-6 leading-tight">
            Why Choose OZ Media Planet?
          </h1>
          
          <div className="mb-8">
            <p className="text-white text-lg mb-2">Smart Solutions. Proven Methods.</p>
            <p className="text-white text-lg">Transparent Execution.</p>
          </div>

          <div className="flex items-center mb-8">
            <div className="flex text-yellow-400 text-xl mr-3">
              {'★'.repeat(5)}
            </div>
            <span className="text-white text-lg font-semibold mr-3">4.95</span>
            <span className="text-gray-300 text-sm">Loved by 256 companies</span>
          </div>

          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1E1C21] transition-all duration-300 text-sm font-medium tracking-wide">
            LEARN MORE
          </button>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#DBD2FF] rounded-2xl p-6 relative shadow-lg"
              style={{ borderRadius: '24px' }}
            >
              <div className="absolute -top-3 left-6">
                <div className="w-10 h-10 bg-[#DBD2FF] rounded-full flex items-center justify-center shadow-md border-2 border-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#1E1C21]">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-[#1E1C21] text-xl font-bold mb-6" style={{ fontFamily: 'Archivo, sans-serif' }}>
                  {feature.title}
                </h3>
                
                <div className="space-y-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-[#1E1C21] text-sm leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OZMediaSection;


// Finalized React + Tailwind Component With Sticky Scroll Layout & Responsive Design
