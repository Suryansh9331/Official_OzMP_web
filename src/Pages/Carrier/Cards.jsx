import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // If using Next.js, replace with `next/link`

const positions = [
  {
    title: 'Front-End Developer',
    description: 'Build clean, responsive interfaces. React/Next.js preferred',
    companies: ['Strategy Spark', 'Brand Blaze'],
    highlight: true,
  },
  {
    title: 'SEO Specialist',
    description:
      'A creative agency speciali providing innovative and unique solutions to businesses build their brand',
    companies: ['Strategy Spark', 'Brand Blaze'],
  },
  {
    title: 'Digital Marketing Executive',
    description:
      'A creative agency speciali providing innovative and unique solutions to businesses build their brand',
    companies: ['Strategy Spark', 'Brand Blaze'],
  },
  {
    title: 'UI/UX Designer Graphics',
    description:
      'A creative agency speciali providing innovative and unique solutions to businesses build their brand',
    companies: ['Strategy Spark', 'Brand Blaze'],
  },
  {
    title: 'Content Strategist Dynamo',
    description:
      'A creative agency speciali providing innovative and unique solutions to businesses build their brand',
    companies: ['Strategy Spark', 'Brand Blaze'],
  },
  {
    title: 'Artistry Avenue',
    description:
      'A creative agency speciali providing innovative and unique solutions to businesses build their brand',
    companies: ['Strategy Spark', 'Brand Blaze'],
  },
];

const Cards = () => {
  return (
    <div className="px-6 lg:px-12 md:px-6  lg:py-16 md:py-8 py-2  mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-archivo font-semibold mb-12">
        🔍 Career Options We provide
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {positions.map((pos, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`group rounded-xl p-6 shadow-[6px_6px_0px_rgb(0,0,0,0.8)] bg-white relative overflow-hidden transition-all duration-300
              ${pos.highlight
                ? ' border-[1.5px] border-black'
                : 'border-t border-r   border-[1.5px] border-black'
              }
              border-[1.5px] border-black
            `}
          >
            <div className="mb-4">
              <span className="block w-10 h-[2px] bg-black mb-1"></span>
              <h3 className="text-lg font-outfit font-semibold group-hover:text-purple-600 transition-colors duration-300">
                {pos.title}
              </h3>
            </div>

            <p className="text-sm text-gray-700 font-poppins mb-4 leading-relaxed">
              {pos.description}
            </p>

            <ul className="text-sm font-poppins space-y-1 text-gray-800 mb-4">
              {pos.companies.map((company, i) => (
                <li key={i}>+ {company}</li>
              ))}
            </ul>

            <Link to="/contact-us">
              <button className="mt-2 cursor-pointer px-4 py-2 bg-[#DBD2FF] text-black font-poppins rounded-md hover:bg-purple-200 transition-all duration-300">
                Connect with Us
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
