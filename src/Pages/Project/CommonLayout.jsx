// Reusable Project Detail Page Component Template
import React from "react";
import { Link } from "react-router-dom";
import {
  FaCogs,
  FaRocket,
  FaPuzzlePiece,
  FaBrain,
  FaUserShield,
  FaGlobe,
  FaHeartbeat,
  FaJournalWhills,
  FaCalendarAlt,
  FaComments,
  FaChartLine,
  FaLock,
  FaMobile,
} from "react-icons/fa";

const ProjectDetails = ({
  title,
  description,
  image,
  tech,
  overview,
  features,
  techExplanation,
  problems,
  challenges,
  outcome,
  future,
}) => {
  return (
    <div className="font-poppins text-black bg-white">
      <section className="relative w-full h-[80vh] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover brightness-45"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="transform transition-all duration-700 ease-out opacity-0 translate-y-4 animate-[fadeInUp_0.8s_0.2s_ease-out_forwards]">
            <h1 className="text-4xl md:text-5xl font-[Archivo] text-white font-bold mb-4 drop-shadow-lg">
              {title}
            </h1>
            <p className="text-lg font-[Outfit] text-gray-100 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="transform transition-all duration-500 ease-out opacity-0 translate-y-4 animate-[fadeInUp_0.6s_0.4s_ease-out_forwards]">
          {/* Overview */}
          <h2 className="text-3xl font-[Archivo] mb-4 flex items-center gap-3">
            <FaHeartbeat className="text-[#DBD2FF] animate-pulse" /> Project
            Overview
          </h2>
          <p className="text-gray-700 text-lg font-[Poppins] mb-8">
            {overview}
          </p>

          {/* Features & Tech Stack */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="transform transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg rounded-lg p-1">
              <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
                <FaPuzzlePiece className="text-[#DBD2FF]" /> Key Features
              </h3>
              <ul className="list-none pl-0 text-gray-700 font-[Poppins] space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaJournalWhills className="text-[#DBD2FF] mt-1 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#DBD2FF] border-2 border-black rounded-tl-4xl rounded-br-4xl rounded-tr-none rounded-bl-none p-6 transform transition-all duration-300 hover:translate-y-[-2px] shadow-[8px_8px_0px_rgb(0,0,0,0.8)]">
              <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
                <FaCogs className="text-[#DBD2FF]" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3 mb-4">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-white border-black border text-black px-4 py-2 rounded-full font-[Outfit] text-sm shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 font-[Poppins] text-sm">
                {techExplanation}
              </p>
            </div>
          </div>

          {/* Problems Solved */}
          <div className="mb-16 transform transition-all duration-300 hover:translate-y-[-1px]">
            <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
              <FaBrain className="text-[#DBD2FF]" /> Problem It Solves
            </h3>
            <p className="text-gray-700 font-[Poppins]">{problems}</p>
          </div>

          {/* Challenges & Solutions */}
          <div className="mb-16 transform transition-all duration-300 hover:translate-y-[-1px]">
            <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
              <FaUserShield className="text-[#DBD2FF]" /> Challenges & Solutions
            </h3>
            <div className="space-y-4">
              {challenges.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  {i % 2 === 0 ? (
                    <FaLock className="text-[#DBD2FF] mt-1 flex-shrink-0" />
                  ) : (
                    <FaMobile className="text-[#DBD2FF] mt-1 flex-shrink-0" />
                  )}
                  <p className="text-gray-700 font-[Poppins]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Outcome */}
          <div className="mb-16 transform transition-all duration-300 hover:translate-y-[-1px]">
            <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
              <FaRocket className="text-[#DBD2FF]" /> Final Outcome
            </h3>
            <p className="text-gray-700 font-[Poppins]">{outcome}</p>
          </div>

          {/* Future Improvements */}
          <div className="mb-20 transform transition-all duration-300 hover:translate-y-[-1px]">
            <h3 className="text-2xl font-[Archivo] mb-4 flex items-center gap-2">
              <FaGlobe className="text-[#DBD2FF]" /> Future Improvements
            </h3>
            <ul className="list-none pl-0 text-gray-700 font-[Poppins] space-y-2">
              {future.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FaHeartbeat className="text-[#DBD2FF] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-[Outfit] transition-all duration-200 shadow-md hover:shadow-lg transform hover:translate-y-[-1px]"
            >
              Work With Us
              <FaRocket className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectDetails;
