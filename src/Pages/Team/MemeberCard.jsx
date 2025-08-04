import React from "react";
import "../../index.css"; // Assuming Tailwind and fonts are imported here
import Img from "../../assets/images/techimage.png";


const teamMembers = [
  {
    name: "Avni Bhadouriya",
    role: "Chief Executive Officer (CEO)",
    image :Img,
    description:
      "Avni is the founder and strategic force behind OZ Media Planet, driving innovation and market leadership.",
  },
  {
    name: "Kajal Agrahari",
    role: "Human Resources (HR) Manager",
    image:Img,
    description:
      "Kajal ensures we recruit, retain, and nurture talent while fostering a supportive and high-performance culture.",
  },
  {
    name: "Atul Kumar Rawat",
    role: "Lead UI/UX Designer",
    image :Img,
    description:
      "Atul leads creative design with a human-centered approach, focusing on seamless user experience across all devices.",
  },
  {
    name: "Palak Tiwari",
    role: "Senior Full Stack Developer",
    image:Img,
    description:
      "Palak crafts scalable full-stack applications, merging backend efficiency with dynamic frontend interfaces.",
  },
  {
    name: "Rajeev Patel",
    role: "Senior Full Stack Developer",
    image: Img,
    description:
      "Rajeev specializes in developing secure, high-performing digital products with full-stack technologies.",
  },
  {
    name: "Suryansh Mishra",
    role: "Mobile App & Software Developer",
    image: Img,
    description:
      "Suryansh delivers custom software and mobile apps with strong UX and robust performance across platforms.",
  },
];

const Teams = () => {
  return (
    <section className="px-4 py-12 md:px-10 lg:px-24">
      <div className="text-center mb-12">
        <p className="text-sm tracking-wide text-[#a09bbc] font-Archivo">OUR TEAM</p>
        <h2 className="text-4xl md:text-5xl font-Outfit font-bold text-black leading-tight">
          The Futures Elevate Your Brand <span className="text-[#7b61ff]">Experience</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="relative p-4 rounded-2xl shadow-md bg-white transition-transform hover:-translate-y-1"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#E2DCFF] rounded-bl-full"></div>
            <img
              src={member.image}
              alt={member.name}
              className="rounded-md w-full h-64 object-cover z-10"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold font-Archivo text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 font-Archivo mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 font-Archivo">
                {member.description}
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <button className="bg-[#E2DCFF] p-2 rounded-full">
                <img src="/assets/icons/share-icon.png" alt="Share" className="w-4 h-4" />
              </button>
              {/* Social icons can be customized or passed as components */}
              <div className="flex gap-3">
                <img src="/assets/icons/fb.png" alt="fb" className="w-4 h-4" />
                <img src="/assets/icons/x.png" alt="x" className="w-4 h-4" />
                <img src="/assets/icons/insta.png" alt="insta" className="w-4 h-4" />
                <img src="/assets/icons/linkedin.png" alt="linkedin" className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;