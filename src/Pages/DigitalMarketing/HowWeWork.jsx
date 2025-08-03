import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

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

const HowWeWork = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full font-[Poppins] space-y-4 max-w-5xl mx-auto px-4 md:px-0">
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
            className={classNames(
              'transition-all duration-300 rounded-xl border overflow-hidden shadow-sm',
              {
                'bg-[#DBD2FF]': isActive,
                'bg-white': !isActive,
                'border-[#E4E4E7]': !isActive,
              }
            )}
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center space-x-4">
                <img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" />
                <div>
                  <h3 className="text-base md:text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 max-w-md">{item.description}</p>
                </div>
              </div>
              <span className="text-sm text-[#9E71FF] font-medium">
                Read More →
              </span>
            </div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="px-16 pb-4 text-sm text-gray-700"
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

export default HowWeWork;
