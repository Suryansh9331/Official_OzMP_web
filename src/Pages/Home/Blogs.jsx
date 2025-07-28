import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Design Systems",
    category: "Design System · UI/UX",
    description:
      "Build consistent and scalable interfaces with modern design systems.",
    image: "/images/card1.png", // Replace with actual paths
  },
  {
    title: "Web Accessibility",
    category: "Accessibility · Web",
    description:
      "Create inclusive experiences for all users with accessibility best practices.",
    image: "/images/card2.png",
  },
  {
    title: "Emerging Tech",
    category: "Tech · Innovation",
    description:
      "Stay ahead with the latest tech trends and development methodologies.",
    image: "/images/card3.png",
  },
];

// Extra tablet-only card
const tabletOnlyCard = {
  title: "Performance Optimization",
  category: "Speed · Tech",
  description:
    "Techniques to make your websites faster and more efficient for users.",
  image: "/images/card4.png",
};

const InsightSection = () => {
  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16 bg-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h4 className="text-lg text-gray-500 font-outfit">
          Learn New Technology
        </h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-archivo text-gray-900 mt-2">
          Stay Informed with Industry Insights
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {[...cardData, tabletOnlyCard].map((card, index) => (
          <div
            key={index}
            className={`bg-[#F4F4F5] p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300
              ${index === 3 ? "hidden md:block lg:hidden" : ""}
            `}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-semibold font-poppins text-gray-900 mb-2">
              {card.title}
            </h3>
            <p className="text-sm font-poppins text-indigo-600 mb-3">
              {card.category}
            </p>
            <p className="text-gray-600 font-poppins text-sm">
              {card.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default InsightSection;
