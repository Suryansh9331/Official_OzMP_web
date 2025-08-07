// import React from "react";
// import rightImage from "../../assets/images/Career2.png";
// import bgImage from "../../assets/images/bg.png";

// const HeroSection = () => {
//   return (
//     <div
//       className="w-full bg-[#DBD2FF] bg-cover min-h-screen bg-center flex items-center justify-center px-6 py-16"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//       }}
//     >
//       <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-2 items-center px-8">
//         {/* Left Content */}
//         <div className="space-y-6">
//           <h1
//             className="text-4xl md:text-4xl font-bold text-black"
//             style={{ fontFamily: "Archivo, sans-serif" }}
//           >
//             Build Your Future With Us — Empowering Talent To Transform The Future
//           </h1>

//           <p
//             className="text-lg text-gray-800"
//             style={{ fontFamily: "Inter, sans-serif" }}
//           >
//             Join A Team That's Shaping The Digital World. We’re Always Looking For
//             Passionate, Innovative Minds To Grow With Us.
//           </p>

//           <ul className="space-y-3" style={{ fontFamily: "Poppins, sans-serif" }}>
//             <li className="flex items-center">
//               <span className="text-purple-600 text-xl mr-2">✔</span>
//               Collaborative and inclusive culture
//             </li>
//             <li className="flex items-center">
//               <span className="text-purple-600 text-xl mr-2">✔</span>
//               Opportunity to work with global clients
//             </li>
//             <li className="flex items-center">
//               <span className="text-purple-600 text-xl mr-2">✔</span>
//               Continuous learning & career growth
//             </li>
//           </ul>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center">
//           <img
//             src={rightImage}
//             alt="Team Planning"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React from "react";
import rightImage from "../../assets/images/Career2.png";
import bgImage from "../../assets/images/bg.png";

const HeroSection = () => {
  return (
    <div
      className="w-full  bg-[#DBD2FF] bg-cover  lg:min-h-screen md:h-auto h-auto  bg-center flex items-center justify-center lg:px-10  md:px-8 px-4   py-12 md:py-10 lg:py-8"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className=" w-full flex flex-col-reverse lg:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="w-full lg:w-[60%] space-y-6 text-center md:text-left">
          <h1
            className="text-xl md:text-4xl lg:text-5xl font-bold text-black leading-snug"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            Build Your Future With Us — Empowering Talent To Transform The Future
          </h1>

          <p
            className=" text-sm  lg:text-lg   md:text-xl  text-gray-800"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Join A Team That's Shaping The Digital World. We’re Always Looking For
            Passionate, Innovative Minds To Grow With Us.
          </p>

          <ul
            className="space-y-3 text-left mx-auto md:mx-0 w-fit"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <li className="flex items-start">
              <span className="text-purple-600 md:text-xl text-md mr-2">✔</span>
              <span>Collaborative and inclusive culture</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 md:text-xl text-md mr-2">✔</span>
              <span>Opportunity to work with global clients</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 md:text-xl text-md mr-2">✔</span>
              <span>Continuous learning & career growth</span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[40%]  flex justify-center">
          <img
            src={rightImage}
            alt="Team Planning"
            className="w-full  h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
