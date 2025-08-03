import React from "react";
import { motion } from "framer-motion";

// Individual Box Component
const InfoBox = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-6  rounded-md "
    >
      <img src={icon} alt="icon" className="w-10 h-10 mb-4" />
      <h3 className="text-xl font-medium font-[Archivo] text-[#1C1A1F] mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 font-[Inter]">{description}</p>
    </motion.div>
  );
};

const WhatWeDo = () => {
  const defaultBoxes = [
    {
      icon: "/images/1.png",
      title: "What We Do",
      description:
        "We craft tailored digital marketing strategies using data, creativity, and the latest tools to grow your brand online.",
    },
    {
      icon: "/images/2.png",
      title: "Why It Matters",
      description:
        "In today’s digital-first world, consistent visibility and targeted messaging are key to staying ahead of the competition.",
    },
    {
      icon: "/images/3.png",
      title: "How We Deliver",
      description:
        "In today’s digital-first world, consistent visibility and targeted messaging are key to staying ahead of the competition.",
    },
  ];

  // ✅ 4th box for tablets only
  const tabletOnlyBox = {
    icon: "/images/DMIcon3.png",
    title: "Our Focus",
    description:
      "We prioritize measurable outcomes and tailored campaigns to meet your business goals in a competitive digital space.",
  };

  return (
    <section className=" mt-10 w-full py-12 px-2 md:px-10 lg:px-16  lg:py-20 md:py-12  bg-[#DCD4FF]">
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          justify-items-center
        "
      >
        {/* Render 3 core boxes */}
        {defaultBoxes.map((box, index) => (
          <InfoBox
            key={index}
            icon={box.icon}
            title={box.title}
            description={box.description}
          />
        ))}

        {/* ✅ Extra box only visible on tablet */}
        <div className="hidden md:block lg:hidden">
          <InfoBox
            icon={tabletOnlyBox.icon}
            title={tabletOnlyBox.title}
            description={tabletOnlyBox.description}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
