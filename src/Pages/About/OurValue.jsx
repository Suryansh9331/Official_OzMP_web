
import icon1 from "../../assets/images/Icon1.png"; // Creative Excellence
import icon2 from "../../assets/images/icon2.png"; // Seamless Integration
import icon3 from "../../assets/images/Icon3.png"; // Innovation & Tech
import icon4 from "../../assets/images/Icon4.png"; // Effective Strategy
import icon5 from "../../assets/images/Icon5.png"; // Scalability
import icon6 from "../../assets/images/Icon6.png"; // Data Driven

// const values = [
//   {
//     icon: icon1,
//     title: "Creative Excellence",
//     desc: "We deliver standout ideas that shape bold and memorable experiences.",
//     anim: "animate-bounce"
//   },
//   {
//     icon: icon2,
//     title: "Seamless Integration",
//     desc: "Our solutions blend effortlessly into your workflows and systems.",
//     anim: "animate-spin"
//   },
//   {
//     icon: icon3,
//     title: "Innovation & Technology",
//     desc: "Cutting-edge tools and thinking drive everything we create.",
//     anim: "animate-pulse"
//   },
//   {
//     icon: icon4,
//     title: "Effective Digital Strategy",
//     desc: "We plan with precision and execute with purpose for long-term growth.",
//     anim: "animate-wiggle"
//   },
//   {
//     icon: icon5,
//     title: "Scalability & Future-Readiness",
//     desc: "Our architecture scales with your ambition and tech evolution.",
//     anim: "animate-rotateY"
//   },
//   {
//     icon: icon6,
//     title: "Data-Driven Growth",
//     desc: "We use analytics to empower your decisions and drive outcomes.",
//     anim: "animate-bounce"
//   },
// ];

// const ValuesSection = () => {
//   return (
//     <div className="bg-[#1E1C21] text-white py-16 px-6">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-archivo font-bold">Our Values</h2>
//         <p className="text-base font-poppins text-gray-300 mt-2 max-w-xl mx-auto">
//           We believe in building with purpose, integrating smart technologies,
//           and pushing boundaries to create exceptional experiences.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
//         {values.map((value, index) => (
//           <div key={index} className="text-center px-4">
//             <img
//               src={value.icon}
//               alt={value.title}
//               className={`mx-auto mb-4 w-12 h-12 ${value.anim} duration-1000`}
//             />
//             <h3 className="text-xl font-semibold font-poppins">{value.title}</h3>
//             <p className="text-sm text-gray-400 mt-2 font-poppins">
//               {value.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ValuesSection;

import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      iconSrc: icon1, // Replace with your icon path
      title: "Creative Excellence",
      description: "We deliver exceptional creative solutions that captivate audiences and drive meaningful engagement through innovative design and strategic thinking.",
      animation: "animate-float"
    },
    {
      iconSrc: icon2, // Replace with your icon path
      title: "Seamless Integration",
      description: "Our solutions integrate flawlessly across all platforms and systems, ensuring smooth workflows and unified user experiences.",
      animation: "animate-spin-slow"
    },
    {
      iconSrc: icon3, // Replace with your icon path
      title: "Innovation & Technology",
      description: "We leverage cutting-edge technologies and innovative approaches to solve complex challenges and create future-ready solutions.",
      animation: "animate-bounce-slow"
    },
    {
      iconSrc: icon4, // Replace with your icon path
      title: "Effective Digital Strategy",
      description: "Our data-driven strategies are carefully crafted to maximize ROI and achieve your business objectives through targeted digital campaigns.",
      animation: "animate-rotate"
    },
    {
      iconSrc: icon5, // Replace with your icon path
      title: "Scalability & Future-Readiness",
      description: "We build scalable solutions that grow with your business, ensuring long-term success and adaptability to changing market needs.",
      animation: "animate-spin-slow"
    },
    {
      iconSrc: icon6, // Replace with your icon path
      title: "Data-Driven Growth",
      description: "We harness the power of analytics and insights to drive sustainable growth and make informed decisions that propel your business forward.",
      animation: "animate-pulse-slow"
    }
  ];

  return (
    <div className=" bg-[#1E1C21] lg:py-20 py-16  px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="text-center md:mb-16 mb-10 ">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" 
              style={{ fontFamily: 'Archivo, sans-serif' }}>
            Our Values
          </h2>
          <p className="text-white/70 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed"
             style={{ fontFamily: 'Archivo, sans-serif' }}>
            Discover the core principles that drive our success and shape every project we undertake
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {values.map((value, index) => {
            return (
              <div 
                key={index}
                className="text-center"
              >
                {/* Icon Container */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    {/* Icon wrapper */}
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center md:p-4 p-2 ${value.animation}`}>
                      <img 
                        src={value.iconSrc}
                        alt={value.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl  font-semibold text-white"
                      style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-white/80 text-sm  leading-relaxed"
                     style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative elements */}
       
      </div>

      {/* Custom CSS for additional animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          50% { transform: rotate(-15deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-rotate {
          animation: rotate 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ValuesSection;