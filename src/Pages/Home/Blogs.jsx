// InsightsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Most popular design systems to learn from in 2022",
    category: "Design Systems",
    image: "/images/Blog1.jpg",
  },
  {
    title: "Understanding accessibility makes you a better",
    category: "Accessibility",
    image: "/images/Blog2.jpg",
  },
  {
    title: "15 best tools that will help you build your website",
    category: "Tech",
    image: "/images/Blog3.jpg",
  },
  {
    title: "Secrets to effective UI writing revealed",
    category: "UX Writing",
    image: "/images/CardImg4.png", // Add new image in public/images
    tabletOnly: true, // Only visible on md screens
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const InsightsSection = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-20 bg-white text-center">
      <div className="flex flex-col items-center gap-2">
        <p className="font-outfit text-md mb-2 font-semibold text-[#3D0D84] tracking-wider uppercase relative after:content-[''] after:absolute after:w-12 after:h-px after:bg-[#3D0D84] after:left-[-60px] after:top-1/2 before:content-[''] before:absolute before:w-12 before:h-px before:bg-[#3D0D84] before:right-[-60px] before:top-1/2">
          Learn New Technology
        </p>
        <h2 className="font-archivo text-3xl md:text-4xl lg:text-6xl font-semibold text-gray-900">
          Stay Informed with Industry Insights
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            className={`bg-white shadow-md rounded-2xl overflow-hidden ${
              card.tabletOnly ? "hidden md:block lg:hidden" : ""
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-56 object-contain"
            />
            <div className="p-6 text-left space-y-4">
              <h3 className="font-poppins text-xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="font-poppins text-md font-semibold text-blue-600">
                {card.category}
              </p>
              <button className="mt-2 px-6 py-2  bg-purple-100 text-sm font-medium text-gray-900 rounded-full hover:bg-purple-200 shadow-[3px_3px_0px_#000] font-poppins">
                VISIT OUR BLOG
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default InsightsSection;
