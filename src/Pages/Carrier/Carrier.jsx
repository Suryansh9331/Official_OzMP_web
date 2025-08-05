import React from "react";
import hero from "../../assets/Career Oppurtunity/Herobanner.png";
import career from "../../assets/Career Oppurtunity/career.png";

const Career = () => {
  return (
    <>
      {/* Hero Banner */}
      <div className="shrink-0 font-[archivo]">
        <img src={hero} alt="Career Hero" />
      </div>

      {/* Why Work With Us Section */}
      <div className="flex flex-col items-center justify-center mt-10 text-xl font-semibold">
        <p className="text-blue-600">---Why Work With Us?---</p>
        <h1 className="text-7xl mt-10 font-bold">
          Trusted By Brands, Driven By
        </h1>
        <p className="text-blue-500 text-7xl font-bold">Results</p>
      </div>

      {/* Side Text Section */}
      <div className="mt-5 flex flex-row">
        <img src={career} alt="Career Visual" />
        <div className="text-4xl text-center text-gray-800 font-bold -rotate-90 space-y-10">
          <p>01. Growth & Learning</p>
          <hr className="text-blue-500 border w-[500px]" />
          <p>02. Inclusive Culture</p>
          <hr className="text-blue-500 w-[500px]" />
          <p>03. Work-Life Balance</p>
          <hr className="text-blue-500 w-[500px]" />
          <p>04. Impact-Driven Work</p>
          <hr className="text-blue-500 w-[500px]" />
          <p>05. Innovation & Creativity</p>
          <hr className="text-blue-500 w-[500px]" />
        </div>
      </div>

      {/* Open Positions Title */}
      <span className="flex gap-3 flex-row font-bold items-center justify-center text-center mt-5">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/016/716/177/small_2x/search-3d-icon-png.png"
          className="h-[45px]"
          alt="Search Icon"
        />
        <h1 className="text-5xl text-center font-[archivo]">Open Positions</h1>
      </span>

      {/* Job Cards */}
      <div className="h-auto px-20 mt-10 grid gap-10 grid-cols-3">
        {/* Front-End Developer */}
        <div className="w-[410px] border-t-4 border-t-blue-500 border-r pt-2 pr-2 rounded-xl border-r-blue-500">
          <h1 className="text-4xl font-bold mt-4">Front-End Developer</h1>
          <h3 className="text-2xl mt-8 font-semibold text-gray-600">
            Build Clean, Responsive Interfaces. React/Next.js Preferred.
          </h3>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Strategy Spark</span>
          </p>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Brand Blaze</span>
          </p>
        </div>

        {/* SEO Specialist */}
        <div className="w-[410px] border-t border-t-blue-500 border-r pt-2 pr-2 rounded-xl border-r-blue-500">
          <h1 className="text-4xl font-bold mt-4">SEO Specialist</h1>
          <h3 className="text-2xl mt-8 font-semibold text-gray-600">
            Own the Search. Grow the Brand.
          </h3>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Strategy Spark</span>
          </p>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Brand Blaze</span>
          </p>
        </div>

        {/* Digital Marketing Executive */}
        <div className="w-[410px] border-t border-t-blue-500 border-r pt-2 pr-2 rounded-xl border-r-blue-500">
          <h1 className="text-4xl font-bold mt-4">
            Digital Marketing Executive
          </h1>
          <h3 className="text-2xl mt-8 font-semibold text-gray-600">
            Amplify, Engage, Convert.
          </h3>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Strategy Spark</span>
          </p>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Brand Blaze</span>
          </p>
        </div>

        {/* UI/UX Designer */}
        <div className="w-[410px] border-t border-t-blue-500 border-r pt-2 pr-2 rounded-xl border-r-blue-500">
          <h1 className="text-4xl font-bold mt-4">UI/UX Designer</h1>
          <h3 className="text-2xl mt-8 font-semibold text-gray-600">
            Transform complex ideas into intuitive, pixel-perfect experiences.
          </h3>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Strategy Spark</span>
          </p>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Brand Blaze</span>
          </p>
        </div>

        {/* Content Strategist Dynamo */}
        <div className="w-[410px] border-t border-t-blue-500 border-r pt-2 pr-2 rounded-xl border-r-blue-500">
          <h1 className="text-4xl font-bold mt-4">Content Strategist</h1>
          <h3 className="text-2xl mt-8 font-semibold text-gray-600">
            Shape narratives. Fuel demand with powerful content.
          </h3>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Strategy Spark</span>
          </p>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Brand Blaze</span>
          </p>
        </div>

        {/* Artistry Avenue */}
        <div className="w-[410px] border-t border-t-blue-500 border-r pt-2 pr-2 rounded-xl border-r-blue-500">
          <h1 className="text-4xl font-bold mt-4">Artistry Avenue</h1>
          <h3 className="text-2xl mt-8 font-semibold text-gray-600">
            Paint the Brand’s Future with creative visuals.
          </h3>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Strategy Spark</span>
          </p>
          <p className="text-xl flex gap-3 text-gray-500 font-semibold mt-5">
            +<span>Brand Blaze</span>
          </p>
        </div>
      </div>
      <div className="font-[archivo] px-50  ">
        <h1 className="text-5xl text-center mt-[10vh] ">
          Our Loyal Costomer Have Said
        </h1>
        <h2 className="text-4xl  mt-[3vh] text-center font-bold">
          Real Stories. Real Results
        </h2>
        <h3 className="text-2xl text-gray-600  mt-[3vh] text-center ">
          Hear directly from our clients about how we've helped transform their
          vision into value. From seamless collaboration to measurable success,
          our customers share their journeys—and why they trust us again and
          again.
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-20 ">
        <p className="h-[400px] w-[400px] bg-[#DBD2FE]"></p>
        <p className="h-[400px] w-[400px] bg-[#DBD2FE]"></p>
        <p className="h-[400px] w-[400px] bg-[#DBD2FE]"></p>
        <p className="h-[400px] w-[400px] bg-[#DBD2FE]"></p>
        <p className="h-[400px] w-[400px] bg-[#DBD2FE]"></p>
      </div>
    </>
  );
};

export default Career;