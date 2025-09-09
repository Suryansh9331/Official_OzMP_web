



import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    }),
  };

  const boxDescriptions = [
    "We understand different industries and provide customized, impactful solutions for each business model.",
    "Clear communication and timely updates ensure you’re always in control of your project’s progress.",
    "We’re here for the long haul, offering consistent support and growth-oriented strategies.",
    "From branding to deployment, our unified services streamline your digital journey efficiently."
  ];

  return (
    <div className="relative bg-white  min-h-screen lg:py-10 py-4">
      {/* Background Overlay */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat  opacity-10"
  style={{
    backgroundImage: `url("./images/parallax5.png")`,
  }}
></div>

      <div className="relative z-10 w-full mx-auto md:px-10 px-4 py-16" ref={ref}>
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16" style={{ fontFamily: 'Archivo, sans-serif' }}>
          Why Choose Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Animated Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Industry-specific tailored solutions",
                bg: "bg-[#E2DAFF]",
                hover: "hover:bg-white"
              },
              {
                title: "Transparent  management and timely deliveries",
                bg: "bg-white",
                hover: "hover:bg-[#E2DAFF]"
              },
              {
                title: "Long-term support and growth-focused strategies",
                bg: "bg-white",
                hover: "hover:bg-[#E2DAFF]"
              },
              {
                title: "One-stop for branding, dev, marketing & IT.",
                bg: "bg-[#E2DAFF]",
                hover: "hover:bg-white"
              }
            ].map((box, i) => (
              <motion.div
                key={i}
                className={`lg:p-4 md:p-4 p-4 rounded-xl shadow-md border-black border ${box.bg} ${box.hover}`}
                variants={boxVariants}
                initial="hidden"
                animate={controls}
                custom={i}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Archivo, sans-serif' }}>
                    {`0${i + 1}`}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3" style={{ fontFamily: 'Archivo, sans-serif' }}>
                      {box.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {boxDescriptions[i]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Replace Image with Video */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg hover:bg-opacity-100 transition-all duration-300 cursor-pointer">
                    <svg 
                      className="w-12 h-12 text-purple-400" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
