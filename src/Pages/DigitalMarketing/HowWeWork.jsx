import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const accordionData = [
  {
    title: 'Discover & Define',
    icon: '/assets/icons/discover.png',
    description: 'We start by understanding your brand, goals, and audience — setting a clear direction with measurable KPIs',
    expandContent: 'In this phase, we conduct workshops, gather insights, and define your value proposition. It lays the groundwork for your marketing strategy.',
  },
  {
    title: 'Strategize & Plan',
    icon: '/assets/icons/strategize.png',
    description: 'We start by understanding your brand, goals, and audience — setting a clear direction with measurable KPIs',
    expandContent: 'We align objectives with market trends and build a data-driven strategy to ensure maximum ROI for your campaigns.',
  },
  {
    title: 'Execute & Optimize',
    icon: '/assets/icons/execute.png',
    description: 'We start by understanding your brand, goals, and audience — setting a clear direction with measurable KPIs',
    expandContent: 'Our team executes marketing plans across all channels while continuously optimizing based on analytics.',
  },
  {
    title: 'Report & Collaborate',
    icon: '/assets/icons/report.png',
    description: 'We start by understanding your brand, goals, and audience — setting a clear direction with measurable KPIs',
    expandContent: 'We generate performance reports and conduct review sessions to ensure continuous improvement.',
  },
];

const HWW = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full font-[Poppins] space-y-4 max-w-7xl mx-auto px-4 ">
      {accordionData.map((item, index) => {
        const isActive = activeIndex === index;

        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });

        return (
          <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`transition-all duration-300 rounded-xl border overflow-hidden shadow-sm ${
              isActive ? 'bg-[#DBD2FF]' : 'bg-white border-[#E4E4E7]'
            }`}
          >
            <div
              onClick={() => toggleAccordion(index)}
              className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 md:py-8  gap-y-3 cursor-pointer"
            >
              {/* Left: Icon + Title */}
              <div className="flex items-center gap-3 min-w-[200px]">
                <img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" />
                <h3 className="text-base md:text-lg font-medium">{item.title}</h3>
              </div>

              {/* Center: Description */}
              <div className="flex-1 text-sm text-gray-600 md:text-center md:px-6 px-0" >
                {item.description}
              </div>

              {/* Right: Read More */}
              <div className="text-sm text-[#9E71FF] font-medium">
                +
              </div>
            </div>

            {/* Expanded content */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="px-6 pb-4 text-sm text-gray-700"
              >
                {item.expandContent}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default HWW;
