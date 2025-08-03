
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
  {
    question: "What digital marketing services do you offer at OZ Media Planet?",
    answer:
      "We offer a full suite of digital marketing services including SEO, Google & Meta Ads, content marketing, social media strategy, email automation, performance analytics, and brand growth campaigns — all designed to drive ROI and brand authority.",
  },
  {
    question: "How is OZ Media Planet different from other marketing agencies?",
    answer:
      "Unlike typical agencies, we combine marketing expertise with in-house tech capabilities. That means smarter strategies powered by real-time data, custom dashboards, and seamless integration between marketing campaigns and digital platforms.",
  },
  {
    question: "Do you manage ad campaigns for platforms like Google and Instagram?",
    answer:
      "Yes. We specialize in high-converting ad campaigns on Google, YouTube, Instagram, Facebook, and LinkedIn. From copywriting and creative design to precise targeting and analytics, we handle it end-to-end.",
  },
  {
    question: "How soon can I expect results from your marketing campaigns?",
    answer:
      "While paid ad results can begin within days, organic growth through SEO and content strategies takes a few months. Our focus is sustainable growth, so we build data-backed campaigns that perform long-term — not just quick spikes.",
  },
  {
    question: "Can you work with my existing website or marketing team?",
    answer:
      "Absolutely. We can plug into your current team or tech stack seamlessly — whether you're using WordPress, Shopify, or a custom CMS. Collaboration is key, and we tailor our approach to complement your brand and resources.",
  },
  {
    question: "How do we get started with a digital marketing plan?",
    answer:
      "Simply fill out our quick discovery form or book a free strategy call. We’ll assess your goals, audit your current efforts, and propose a clear action plan — no fluff, just real strategy.",
  },
];


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="lg:py-8 bg-white py-2 px-4 sm:px-6 lg:px-10">
      <div className=" mx-auto">
        <div className="bg-[#DBD2FE] rounded-3xl p-6 sm:p-8 lg:p-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 xl:gap-16">
            {/* Left Section with Animated Heading */}
            <motion.div
              className="lg:pr-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                Got Questions?
              </h1>
              <p
                className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Archivo, sans-serif' }}
              >
                Discover how OZ Media transforms businesses through innovative IT solutions and strategic digital marketing. We're here to help you grow and scale your digital presence.
              </p>
            </motion.div>

            {/* Right Section with FAQ Items Animated */}
            <motion.div
              className="space-y-3 sm:space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="border-b border-gray-400 pb-3 sm:pb-4 transition-all duration-300 ease-in-out"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50 rounded-lg px-2 hover:bg-white/20 transition-colors duration-200"
                  >
                    <span
                      className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 pr-4 leading-tight"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-600 transition-transform duration-300 ease-in-out ${
                          openIndex === index ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </div>
                  </button>

                  <motion.div
                    animate={{
                      height: openIndex === index ? 'auto' : 0,
                      opacity: openIndex === index ? 1 : 0,
                      marginTop: openIndex === index ? 12 : 0,
                    }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-2 pb-2">
                      <p
                        className="text-sm sm:text-base text-gray-700 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
