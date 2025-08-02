// import React from "react";
// import bg from "../../assets/images/parallax4.png"

// const HeroBanner = () => {
//   return (
//     <section
//       className={`
//          h-auto 
//         flex 
//         items-center 
//         px-8 md:px-12 
//         bg-no-repeat bg-cover 
//         justify-center 
//         lg:justify-start
//       `}
//      style={{
//   backgroundImage: `url(${bg})`,
//   backgroundPosition: "right",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   backgroundColor: "rgba(255, 255, 255, 0.2)", // white overlay (adjust alpha as needed)
//   backgroundBlendMode: "overlay", // applies the blend mode
// }}

//     >
//       <div
//         className={`
//           max-w-4xl
//           mt-10
//           lg:py-40
//           md:py-10
          
//           text-center 
//           lg:text-left
//           md:text-left
//         `}
//       >
//         <h1
//           className="text-4xl md:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
//           style={{ fontFamily: "Archivo, sans-serif" }}
//         >
//           Transforming Digital Marketing <br />
//           with <span className="relative">Strategy & Creativity</span>
//         </h1>

//         <p
//           className="text-sm  mt-4 text-gray-800"
//           style={{ fontFamily: "Inter, sans-serif" }}
//         >
//           Digital success isn’t just about being seen—it’s about making an impact. OZ Media
//           Planet crafts powerful marketing strategies that drive engagement, growth, and results.
//         </p>

//         <button
//           className="mt-6 px-6 py-2 rounded-full font-medium shadow-md text-sm"
//           style={{
//             backgroundColor: "#DBD2FF",
//             fontFamily: "Inter, sans-serif",
//             boxShadow: "4px 4px 0px #000",
//           }}
//         >
//           LET’S CONNECT
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;



import React from "react";
import bg from "../../assets/images/bg.png";

const HeroBanner = () => {
  return (
    <>
      {/* Large Screen Version with BG */}
      <section
        className="hidden lg:flex h-auto items-start   bg-no-repeat bg-cover lg:py-20 md:py-16 py-12"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255, 255, 255, 0.5 )",
          backgroundBlendMode: "overlay",
        }}
      >
        <HeroContent />
      </section>

      {/* Mobile/Tablet Version without BG */}
      <section className="flex lg:hidden h-auto items-center px-4 justify-center bg-[#DBD2FF]/40">
        <HeroContent />
      </section>
    </>
  );
};

const HeroContent = () => (
  <div
    className={`
      lg:max-w-5xl
  lg:px-12
      mt-10
      md:py-20
      py-10
      text-center 
      lg:text-left
      
    `}
  >
    <h1
      className="text-xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
      style={{ fontFamily: "Archivo, sans-serif" }}
    >
      Transforming Digital Marketing <br />
      with <span className="relative">Strategy & Creativity</span>
    </h1>

    <p
      className="text-sm lg:text-lg md:text-lg mt-4 text-gray-800"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      Digital success isn’t just about being seen—it’s about making an impact. OZ Media
      Planet crafts powerful marketing strategies that drive engagement, growth, and results.
    </p>

    <button
      className="md:mt-10 mt-8 px-6 py-2 rounded-full font-medium shadow-md text-sm"
      style={{
        backgroundColor: "#DBD2FF",
        fontFamily: "Inter, sans-serif",
        boxShadow: "4px 4px 0px #000",
      }}
    >
      LET’S CONNECT
    </button>
  </div>
);

export default HeroBanner;
