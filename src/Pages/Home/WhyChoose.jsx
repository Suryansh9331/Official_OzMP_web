import React from "react";
import { motion } from "framer-motion";
import './whyChoose.css';

const features = [
  {
    title: "Data-Driven Approach",
    points: [
      "Every Strategy Is Guided By Real-Time Data And Performance Insights.",
      "We Analyze Customer Behavior, Trends, And Metrics Before Taking Action.",
      "This Ensures Our Efforts Are Targeted, Efficient, And Results-Oriented."
    ]
  },
  {
    title: "ROI-Focused Strategies",
    points: [
      "We Focus On Delivering Measurable Returns On Every Rupee You Invest.",
      "Strategies Are Designed To Drive Leads, Conversions, And Long-Term Value.",
      "Our Ultimate Goal: Maximize Your Profits Through Smart Marketing."
    ]
  },
  {
    title: "End-To-End Marketing & Development",
    points: [
      "Complete Digital Services—From Design And Branding To Full-Stack Development.",
      "Seamless Coordination Between Marketing And Tech For Consistent Execution.",
      "One Reliable Team Handling Your Entire Online Growth Journey."
    ]
  },
  {
    title: "Transparent Reporting & Analytics",
    points: [
      "Get Detailed Reports With Real-Time Performance Tracking.",
      "Full Visibility Into What's Working And Where Improvements Are Needed.",
      "No Fluff—Just Honest Data, Insights, And Progress You Can Trust."
    ]
  }
];

const WhyChoose = () => {
  return (
    <div className="bg-[#1E1C21] text-white font-archivo py-20 px-4 md:px-10">
      <div className="flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">

        {/* LEFT PANEL - Sticky */}
        <motion.div
          className="md:w-1/2 sticky-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose OZ Media Planet?
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Smart Solutions. Proven Methods. <br />
            Transparent Execution.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex text-purple-400 text-xl">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-sm">4.95 &nbsp; Loved by 256 companies</p>
          </div>
          <button className="mt-6 border border-white rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition">
            LEARN MORE
          </button>
        </motion.div>

        {/* RIGHT PANEL - Scrollable Cards */}
        <div className="md:w-1/2 overflow-y-scroll scroll-area space-y-6 pb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#DBD2FF] text-black rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <img src="/quote-icon.png" alt="Quote" className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-bold text-lg font-archivo">
                    {feature.title}
                  </h3>
                  <ul className="mt-3 space-y-2 font-poppins text-sm">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-600 text-base font-bold">✔</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
