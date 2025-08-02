import React from "react";
import bg from "../../assets/images/bg.png";

const HeroBanner = () => {
  return (
    <section
      className={`
        min-h-screen 
        flex 
        items-center 
        px-8 md:px-12 
        bg-no-repeat bg-cover 
        justify-center 
        lg:justify-start
      `}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "right center",
      
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
   
      }}
    >
      <div
        className={`
          max-w-5xl
          mt-10
          text-center 
          lg:text-left
        `}
      >
        <h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          Transforming Digital Marketing <br />
          with <span className="relative">Strategy & Creativity</span>
        </h1>

        <p
          className="text-sm md:text-base mt-4 text-gray-700"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Digital success isn’t just about being seen—it’s about making an impact. OZ Media
          Planet crafts powerful marketing strategies that drive engagement, growth, and results.
        </p>

        <button
          className="mt-6 px-6 py-2 rounded-full font-medium shadow-md text-sm"
          style={{
            backgroundColor: "#DBD2FF",
            fontFamily: "Inter, sans-serif",
            boxShadow: "4px 4px 0px #000",
          }}
        >
          LET’S CONNECT
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
