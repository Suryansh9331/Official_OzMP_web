import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Workwithus = () => {
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

  const boxData = [
    {
      title: "Build Future-Ready Solutions",
      description: "We equip our teams to craft innovative, scalable, and future-proof digital solutions that meet evolving industry needs.",
      bg: "bg-[#E2DAFF]",
      hover: "hover:bg-white"
    },
    {
      title: "Hybrid & Flexible Work Culture",
      description: "Our adaptable work environment supports a healthy work-life balance, increasing productivity and satisfaction.",
      bg: "bg-white",
      hover: "hover:bg-[#E2DAFF]"
    },
    {
      title: "Clear Career Growth Path",
      description: "We offer structured growth opportunities, mentorship, and performance-driven career advancement plans.",
      bg: "bg-white",
      hover: "hover:bg-[#E2DAFF]"
    },
    {
      title: "Upskilling & Certification",
      description: "Continuous learning is encouraged through certifications, training programs, and hands-on projects.",
      bg: "bg-[#E2DAFF]",
      hover: "hover:bg-white"
    }
  ];

  return (
    <div className="relative bg-white min-h-screen lg:py-10 py-4">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url("./images/parallax5.png")`,
        }}
      ></div>

      <div className="relative z-10 w-full mx-auto md:px-10 px-4 py-16" ref={ref}>
       
       
        {/* Subheading */}
        <p className="text-center text-lg text-purple-600 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
          ---- Why work with Us ----
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14" style={{ fontFamily: 'Archivo, sans-serif' }}>
          Trusted by Brands, Driven by Results
        </h1>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Animated Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boxData.map((box, i) => (
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
                      {box.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Workwithus;
