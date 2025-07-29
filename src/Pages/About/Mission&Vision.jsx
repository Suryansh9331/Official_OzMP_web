// import React from "react";
// import icon from "../../assets/images/Icon.png"; // Replace with your icon path

// const MissionVision = () => {
//   return (
//     <div className="flex flex-col items-center justify-center px-4 py-12 font-poppins space-y-8">
//       {/* Our Mission Card */}
//       <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-xl p-6 md:p-8 shadow-sm">
//         <div className="flex items-center gap-2 mb-4">
//           <img src={icon} alt="icon" className="w-6 h-6" />
//           <h2 className="text-2xl font-bold font-archivo text-gray-900">
//             Our Mission
//           </h2>
//         </div>
//         <ul className="space-y-4 text-[15px] leading-relaxed text-gray-800">
//           <li className="flex items-start gap-2">
//             <span className="text-purple-600 mt-1">✔️</span>
//             <p>
//               To redefine the digital world by blending creativity, technology,
//               and strategy into seamless brand experiences. We don't just
//               market—we create, innovate, and build digital ecosystems that
//               engage, inspire, and convert.
//             </p>
//           </li>
//           <li className="flex items-start gap-2">
//             <span className="text-purple-600 mt-1">✔️</span>
//             <p>
//               Every project is an opportunity to push boundaries and set new
//               industry standards.
//             </p>
//           </li>
//         </ul>
//       </div>

//       {/* Our Vision Card */}
//       <div className="w-full max-w-3xl bg-[#E2DAFF] rounded-xl p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
//         <div className="flex items-center gap-2 mb-4">
//           <img src={icon} alt="icon" className="w-6 h-6" />
//           <h2 className="text-2xl font-bold font-archivo text-gray-900">
//             Our Vision
//           </h2>
//         </div>
//         <ul className="space-y-4 text-[15px] leading-relaxed text-gray-900">
//           <li className="flex items-start gap-2">
//             <span className="text-purple-700 mt-1">✔️</span>
//             <p>
//               To be the ultimate digital powerhouse, where marketing and
//               technology converge to shape the future of brands. We envision a
//               world where businesses don’t just adapt to digital trends but lead
//               them with innovation, precision, and impact.
//             </p>
//           </li>
//           <li className="flex items-start gap-2">
//             <span className="text-purple-700 mt-1">✔️</span>
//             <p>
//               Through AI-driven strategies, immersive digital experiences, and
//               seamless IT solutions, we strive to transform into market leaders,
//               ensuring they thrive in an ever-evolving digital landscape.
//             </p>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MissionVision;

import React from 'react';
import icon from "../../assets/images/Icon.png"; 

export default function MissionVisionCards() {
  return (
    <div className="min-h-screen bg-gray-50 lg:px-18 lg:py-16 md:py-8  flex flex-col items-center justify-center md:gap-18 py-12 md:px-3 px-4 gap-10">
      {/* Mission Card - Top Left Aligned */}
      <div className="w-full  flex justify-start">
        <div className="bg-white rounded-3xl border border-gray-200 md:p-8 p-6 max-w-2xl shadow-sm  hover:shadow-[8px_8px_0px_#000]">
          <div className="flex items-center gap-3 mb-6">
            <img src={icon} alt="Icon" className="w-12 h-10" />
            <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Archivo, sans-serif' }}>
              Our Mission
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center mt-1 flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                To redefine the digital world by blending creativity, technology, 
                and strategy into seamless brand experiences. We don't just 
                market—we create, innovate, and build digital ecosystems that 
                engage, inspire, and convert.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center mt-1 flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Every project is an opportunity to push boundaries and set 
                new industry standards
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Card - Bottom Right Aligned */}
      <div className="w-full   flex justify-end">
        <div 
          className="rounded-3xl border-2 border-black md:p-8 p-6 max-w-2xl"
          style={{ 
            backgroundColor: '#E2DAFF',
            boxShadow: '8px 8px 0px 0px rgba(0, 0, 0, 1)'
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <img src={icon} alt="Icon" className="w-12 h-10" />
            <h2 className="text-3xl lg:text-4xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'Archivo, sans-serif' }}>
              Our Vision
            </h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center mt-1 flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                To be the ultimate digital powerhouse, where marketing and 
                technology converge to shape the future of brands. We envision 
                a world where businesses don't just adapt to digital trends but 
                lead them with innovation, precision, and impact.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center mt-1 flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Through AI-driven strategies, immersive digital experiences, 
                and seamless IT solutions, we strive to transform into market 
                leaders, ensuring they thrive in an ever-evolving digital 
                landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}