import React from "react";
import { Share2 } from "lucide-react";
import Surya from "../../assets/OurTeam/Suryansh.jpeg"
import Atul from "../../assets/OurTeam/Atul.JPG"
import Rajeev from "../../assets/OurTeam/rajeev (2).jpg"
import palak from "../../assets/OurTeam/palak.jpeg"
import Avni from "../../assets/OurTeam/Avni3.png"
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Avni Bhadouriya",
   
      designation: " Founder & CEO",
      image:
        Avni,
      description:
        "Visionary founder and CEO driving digital innovation and business transformation. Leading OZ Media Planet with strategic expertise in market positioning and growth.",
      socialLinks: ["facebook", "twitter", "instagram", "pinterest"],
    },
   
    {
      name: "Rajeev Patel",
      role: "software",
      designation: "Full Stack Developer",
      image: Rajeev,
        
      description:
        "Full-stack developer delivering scalable solutions with expertise in React, Node.js, and modern web technologies. Specialized in building high-performance applications.",
      socialLinks: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      name: "Palak Tiwari",
      role: "software",
      designation: " Full Stack Developer",
      image: palak,
      description:
        "Senior developer focused on creating robust backend architectures and seamless API integrations. Expert in database design and cloud deployment solutions.",
      socialLinks: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      name: "Atul kumar Rawat",
      role: "UI/UX",
      designation: " UI/Ux designer",
      image: Atul,
      description:
        "Expert UI/UX designer crafting intuitive digital experiences with deep expertise in user-centered design, wireframing, and interactive prototyping for web and mobile platforms.",
      socialLinks: ["facebook", "twitter", "instagram", "linkedin"],
    },

    {
      name: "Suryansh Mishra",
      role: "software",
      designation: " Software Developer",
      image: Surya,
      description:
        "Mobile app specialist creating advanced cross-platform applications. Also expert in Web technology Like MERN stack , Laravel , Django .Focus To deliver Scalable robust and reliable application  .",
      socialLinks: ["facebook", "twitter", "instagram", "linkedin"],
    },
  ];

  const SocialIcon = ({ type, isPurple = false }) => {
    const baseClass =
      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 cursor-pointer";
    const colorClass = isPurple
      ? "bg-purple-500 text-white hover:bg-purple-600 hover:scale-110 shadow-lg"
      : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:scale-110 hover:shadow-md";

    return (
      <div className={`${baseClass} ${colorClass}`}>
        {type === "facebook" && "f"}
        {type === "twitter" && "𝕏"}
        {type === "instagram" && "@"}
        {type === "linkedin" && "in"}
        {type === "pinterest" && "P"}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        {/* Header Section with Animation */}
        <div className="text-left mb-16">
          <div className="animate-fade-in-up">
            <p className="text-purple-600 text-md font-semibold mb-4 font-['Archivo'] tracking-[0.2em] uppercase ">
              ------ OUR TEAM
            </p>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-[#1C1A1F] mb-4 font-['Outfit'] leading-[1.1] tracking-tight">
              The Futures Elevate Your
            </h1>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-16 font-['Outfit'] leading-[1.1] tracking-tight">
              Brand <span className="text-[#A259FF]">Experience</span>
            </h1>
          </div>

          {/* Navigation buttons with hover effects */}
        </div>

        {/* Team Grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full max-w-sm mx-auto animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Container - EXACT match to reference */}
              <div
                className="relative rounded-3xl  shadow-[8px_8px_0px_rgb(0,0,0,0.7)] p-6 h-[450px] flex flex-col transition-all duration-500  cursor-pointer overflow-hidden"
                style={{ backgroundColor: "" }}
              >
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Name and Role - Top positioned exactly like reference */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 font-['Archivo'] group-hover:text-gray-800 transition-colors">
                    {member.name}
                  </h3>
                 
                  {member.designation && (
                    <p className="text-gray-700 text-sm font-['Archivo'] opacity-80">
                      {member.designation}
                    </p>
                  )}
                </div>

                {/* Profile Image - Center with hover effects */}
                <div className="flex items-center justify-between w-full">
                  {/* Social Icons Section - Left Vertical */}
                  <div className="flex flex-col items-center gap-4 ml-4">
                    {/* Top 3 Social Icons */}
                    {member.socialLinks
                      .slice(0, 3)
                      .map((social, socialIndex) => (
                        <SocialIcon key={socialIndex} type={social} />
                      ))}

                    {/* Extra social link (if any) with purple style */}
                    {member.socialLinks.length > 3 && (
                      <SocialIcon
                        type={member.socialLinks[3]}
                       
                      />
                    )}

                    {/* Share Button - Bottom */}
                    <button className="w-8 h-8  rounded-full bg-[#A259FF] flex items-center justify-center hover:scale-110 shadow-md transition-all duration-300 group/share">
                      <Share2 size={14} className="text-white" />
                    </button>
                  </div>

                  {/* Image Section - Right Side */}
                  <div className="relative z-10 flex justify-end flex-1 mr-2">
                    <div className="relative group">
                      <div className="w-56 h-56 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Image overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Floating animation circle behind image */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                    </div>
                  </div>
                </div>

                {/* Description Text - Bottom center exactly like reference */}
                <div className="relative z-10 text-center mt-4">
                  <p className="text-gray-700 text-xs font-['Archivo'] leading-relaxed px-2 group-hover:text-gray-600 transition-colors">
                    {member.description}
                  </p>
                </div>

                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-300/50 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default OurTeam;
