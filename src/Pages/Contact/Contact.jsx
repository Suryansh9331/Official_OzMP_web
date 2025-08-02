import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import bgImage from "../../assets/images/bg.png"; // Replace with actual path

const Contact = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-between px-8 md:px-16 bg-cover bg-no-repeat"
      style={{
        backgroundColor: "#DBD2FF",
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold font-['Archivo'] leading-tight text-black">
          Join 100+ Businesses And<br />Grow With Oz Media
        </h1>
        <p className="text-lg font-['Inter'] text-gray-800">
          Keep Your Business Account And All Your Finance<br />
          Needs Safely Organized Under One Roof.
        </p>

        <ul className="space-y-2 mt-4">
          {["Analytics Options", "Analytics Options", "Analytics Options"].map(
            (item, idx) => (
              <li key={idx} className="flex items-center gap-2 font-['Inter']">
                <FaCheckCircle className="text-purple-500" />
                <span>{item}</span>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Right Form Box */}
      <div className="w-full md:w-[40%] mt-10 md:mt-0 bg-white rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.85)] px-8 py-10">
        <h2 className="text-lg md:text-xl font-semibold font-['Inter'] text-black mb-6">
          Ready To Elevate Your Business?<br />
          Fill The Form And We'll Reach Out!
        </h2>

        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full border-b-2 outline-none pb-1 font-['Inter']"
            />
            <input
              type="text"
              placeholder="Email*"
              className="w-full border-b-2 outline-none pb-1 font-['Inter']"
            />
          </div>

          <input
            type="text"
            placeholder="Mobile*"
            className="w-full border-b-2 outline-none pb-1 font-['Inter']"
          />
          <input
            type="text"
            placeholder="Address*"
            className="w-full border-b-2 outline-none pb-1 font-['Inter']"
          />
          <textarea
            rows={3}
            placeholder="Message*"
            className="w-full border-b-2 outline-none font-['Inter'] resize-none pb-1"
          ></textarea>

          <button
            type="submit"
            className="bg-[#DBD2FF] shadow-[4px_4px_0px_0px_black] text-black px-6 py-2 rounded-full font-['Inter'] mt-4"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
