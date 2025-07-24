import React from "react";
import HeroImage from "../../assets/images/HeroGroup.png"; // adjust path accordingly

const HeroBanner = () => {
  return (
    
    <div className="w-full min-h-auto bg-white mx-auto px-4  md:px-10 lg:px-20  md:py-8 py-4  lg:py-30 flex flex-col-reverse lg:flex-row items-center ">
      {/* Left Section */}
      <div className="lg:w-3/2  sm:w-full lg:text-left text-center lg:mt-0  md:mt-8   sm:mt-4 mt-4 ">
        <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl font-bold font-outfit leading-snug sm:leading-tight text-gray-900">
          We Build Digital–First Brands <br className="hidden sm:block" />
          With Technology, Strategy, <br className="hidden sm:block" />
          And Creativity
        </h1>

        <p className="text-base sm:text-[17px] md:text-[18px] font-poppins text-gray-600 mt-4 sm:mt-10">
          Comprehensive Digital Marketing and IT Solutions Designed to{" "}
          <br className="hidden sm:block" />
          Accelerate Your Business Growth
        </p>

        {/* Buttons */}
        <div className="mt-6 md:mt-10 lg:mt-18  flex flex-wrap gap-6 sm:gap-10 justify-center lg:justify-start">
          <button className="font-outfit font-semibold hover:cursor-pointer border border-black px-8 sm:px-8 py-3 rounded-full transition-transform duration-300 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1">
            VIEW OUR PORTFOLIO
          </button>
          <button className="font-outfit font-semibold hover:cursor-pointer bg-[#dcd4ff] text-black px-5 sm:px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1">
            GET A FREE CONSULTATION
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full  flex justify-center ">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full lg:max-w-[900px] sm:max-w-[500px] md:max-w-[600px] h-auto  "
        />
      </div>
    </div>
  );
};

export default HeroBanner;




