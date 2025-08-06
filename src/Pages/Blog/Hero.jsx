import React from "react";
import { CheckCircle } from "lucide-react";
import heroImage from "../../assets/images/section3.png"; // Your foreground image
import bgPattern from "../../assets/images/bg.png"; // Background pattern image
import heroVideo from "../../assets/Video/Bgvideo.mp4";
const HeroBanner = () => {
  return (
    <section
      className="w-full bg-[#DBD2FF]   md:p relative overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-50 z-0"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-full mx-auto flex flex-col-reverse  md:flex-col-reverse  lg:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="lg:w-1/2 md:w-full w-full mb-8 md:mb-0 lg:mx-12  lg:px-0  md:px-12  px-4 py-6 md:py-8 ">
          <h1
            className="text-3xl md:text-5xl font-semibold mb-4 text-gray-900"
            style={{ fontFamily: "Archivo, sans-serif" }}
          >
            Stay Ahead In The Digital World
          </h1>
          <p
            className="text-base md:text-lg text-gray-700 mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Insights, Strategies, And Updates On IT Services And Marketing That
            Matter.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-purple-700 w-5 h-5" />
              Real-Time Industry Trends & Research
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-purple-700 w-5 h-5" />
              Practical Marketing & IT Solutions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-purple-700 w-5 h-5" />
              Expert Insights & Growth Strategies
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2  w-full flex justify-center z-10">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="max-w-full lg:h-full md:h-[60%] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
