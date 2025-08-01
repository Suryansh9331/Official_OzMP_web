import React from "react";

const HeroBanner = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-start px-8 md:px-16 bg-no-repeat bg-cover bg-right"
      style={{
        backgroundImage: "url('/images/Bannerbg.png')", // Replace with actual path
      }}
    >
      <div className="max-w-5xl">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          Transforming Digital Marketing <br />
          with <span className="relative">
            Strategy & Creativity
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-purple-300 rounded-md"></span>
          </span>
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
