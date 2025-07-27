// import React, { useEffect, useRef } from "react";
// import { ChevronRight } from "lucide-react"; // Or use your own icon


// const cardData = [
//   {
//     bgColor: "bg-lime-100",
//     title: "Strategic Foundation",
//     subtitle:
//       "In-Depth Discovery Sessions To Understand Your Business Model, Objectives, And Challenges",
//     description:
//       "Comprehensive Market Research And Competitor Analysis To Identify Growth Opportunities.",
//     image: "/images/CardImg1.png", // Replace with your image path
//   },
//   {
//     bgColor: "bg-purple-200",
//     title: "Creative Development",
//     subtitle:
//       "Brand Identity Design, Content Strategy, And Creative Asset Development Including Websites, Social Media, Video, And Advertising Collateral",
//     description:
//       "Focused On User Engagement, Storytelling, And Brand Loyalty Creation.",
//     image: "/images/CardImg1.png",
//   },
//   {
//     bgColor: "bg-yellow-200",
//     title: "Technology Execution",
//     subtitle:
//       "Robust Technology Solutions Including Websites, Custom Software, Mobile Applications, And E-Commerce Platforms Built On The Latest Frameworks.",
//     description:
//       "Ensuring Scalability, Security, And High-Performance Delivery.",
//     image: "/images/CardImg1.png",
//   },
//   {
//     bgColor: "bg-purple-200",
//     title: "4. Performance Marketing & Growth Optimization",
//     subtitle:
//       "Data-Backed Digital Marketing Campaigns Focusing On Lead Generation, Customer Acquisition, And Sales Growth.",
//     description:
//       "Real-Time Analytics, Regular Reporting, And Performance Refinement Cycles.",
//     image: "/images/CardImg1.png",
//   },
// ];


// const OurApproach = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     let index = 0;

//     const scrollCards = () => {
//       if (!container) return;

//       const cardWidth = container.children[0].offsetWidth + 24; // 24px is gap
//       container.scrollTo({
//         left: index * cardWidth,
//         behavior: "smooth",
//       });

//       index = (index + 1) % cardData.length;
//     };

//     const interval = setInterval(scrollCards, 3000); // scroll every 3s
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full py-20 px-6 md:px-16 bg-white font-archivo">
//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Left Side */}
//         <div className="w-full md:w-[30%] space-y-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-black">Our Approach</h2>
//           <p className="text-sm md:text-base text-gray-700">
//             Integrated and Impact-Driven Tailored to meet your business objectives
//             through creativity, strategy, and cutting-edge technology.
//           </p>
//           <button className="bg-[#EDE9FE] text-black px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition">
//             VIEW ALL
//           </button>
//         </div>

//         {/* Right Side - Cards */}
//         <div
//           ref={scrollRef}
//           className="w-full md:w-[70%] flex overflow-x-auto space-x-6 scroll-smooth scrollbar-hide snap-x snap-mandatory"
//         >
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               className={`snap-start min-w-[280px] md:min-w-[320px] h-[440px] rounded-xl p-6 ${card.bgColor} flex flex-col justify-between relative shadow-md transition-shadow hover:shadow-2xl hover:scale-[1.02] duration-300`}
//             >
//               <div>
//                 <h3 className="text-xl font-bold mb-2 leading-tight">{card.title}</h3>
//                 <p className="text-sm text-gray-800">{card.subtitle}</p>
//               </div>

//               <img
//                 src={card.image}
//                 alt="card visual"
//                 className="w-full max-h-[180px] object-contain mt-6"
//               />

//               <div className="absolute bottom-4 right-4 border border-black p-2 rounded-md hover:bg-black hover:text-white transition">
//                 <ChevronRight className="w-4 h-4" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurApproach;


import React from 'react';
import { ChevronRight } from 'lucide-react';

const cardData = [
  {
    bgColor: 'bg-[#DAFDBB]',
    title: 'Strategic Foundation',
    subtitle:
      'In-Depth Discovery Sessions To Understand Your Business Model, Objectives, And Challenges',
    description:
      'Comprehensive Market Research And Competitor Analysis To Identify Growth Opportunities.',
    image: '/images/CardImg1.png',
  },
  {
    bgColor: 'bg-[#DBD2FE]',
    title: 'Creative Development',
    subtitle:
      'Brand Identity Design, Content Strategy, And Creative Asset Development Including Websites, Social Media, Video, And Advertising Collateral',
    description:
      'Focused On User Engagement, Storytelling, And Brand Loyalty Creation.',
    image: '/images/CardImg2.png',
  },
  {
    bgColor: 'bg-[#FFF27A]',
    title: 'Technology Execution',
    subtitle:
      'Robust Technology Solutions Including Websites, Custom Software, Mobile Applications, And E-Commerce Platforms Built On The Latest Frameworks.',
    description:
      'Ensuring Scalability, Security, And High-Performance Delivery.',
    image: '/images/Img3.png',
  },
  {
    bgColor: 'bg-[#DBD2FE]',
    title: ' Performance Marketing & Growth Optimization',
    subtitle:
      'Data-Backed Digital Marketing Campaigns Focusing On Lead Generation, Customer Acquisition, And Sales Growth.',
    description:
      'Real-Time Analytics, Regular Reporting, And Performance Refinement Cycles.',
    image: '/images/CardImg4.png',
  },
];

const OurApproach = () => {
  const loopedCards = [...cardData, ...cardData]; // Duplicate for seamless scroll

  return (
    <section className="w-full bg-white   font-[Archivo] relative">
      {/* Inline Keyframes */}
      <style>
        {`
          @keyframes scrollLoop {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>

      <div className="w-full  flex flex-col lg:flex-row items-start  justify-between gap-8 lg:py-12">
        {/* Left Side */}
        <div className="w-full lg:w-[30%] md:w-full md:text-center lg:text-left text-center  lg:pl-8 md:px-4 px-2">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-gray-900">Our Approach</h2>
          <p className="text-base text-gray-700 mb-6">
            Integrated and Impact-Driven Tailored to meet your business objectives through creativity,
            strategy, and cutting-edge technology.
          </p>
          <button className="bg-[#E4DDFF] px-8 py-3 rounded-full font-normal text-sm hover:shadow-[4px_4px_0px_#000] hover:cursor-po transition">
            VIEW ALL
          </button>
        </div>

        {/* Right Side Scrollable Cards */}
        <div className="w-full lg:w-[75%] md:w-full overflow-hidden py-4">
          <div
            className="flex md:gap-14 gap-8"
            style={{
              animation: 'scrollLoop 40s linear infinite',
              width: 'max-content',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running';
            }}
          >
            {loopedCards.map((card, index) => (
              <div
                key={index}
                className={`min-w-[340px] max-w-[340px] md:h-[480px] h-[430px] p-8  rounded-2xl relative flex flex-col justify-between transition-all duration-300 shadow-[8px_8px_0px_rgb(0,0,0,0.6)]  ${card.bgColor}`}
                
              >
                <div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-sm text-gray-700 font-medium mb-2">{card.subtitle}</p>
                  <p className="text-sm text-gray-800 leading-relaxed">{card.description}</p>
                </div>
                <div className="flex justify-center  mt-4 ">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[180px] object-contain"
                  />
                </div>
                <button className="absolute bottom-4 right-4 w-8 h-8 rounded border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
                  <ChevronRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
