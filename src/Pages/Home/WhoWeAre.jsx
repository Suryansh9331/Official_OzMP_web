



// const WhoWeAreSection = () => {
//   return (
//     <div className="w-full md:py-12 lg:py-14  py-6  px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
//       <div className="max-full mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 sm:mb-16">
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4"
//             style={{ fontFamily: 'Archivo, sans-serif' }}
//           >
//             Who We Are
//           </h1>
//           <p
//             className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
//             style={{ fontFamily: 'Outfit, sans-serif' }}
//           >
//             Building trust, delivering results, and growing with our clients.
//           </p>
//         </div>

//         {/* Grid Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
//           {/* Left: Image Container */}
//           <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
//             {/* Background Box */}
//             <div
//               className="w-full h-full rounded-3xl"
//               style={{ backgroundColor: '#DCD4FF' }}
//             ></div>

//             {/* Overlay Image */}
//             <img
//               src="/images/WhoWeAre.png"
//               alt="Digital marketing illustration"
//               className="absolute lg:left-12 inset-0 w-full h-full object-cover object-center scale-110"
//             />
//           </div>

//           {/* Right: Text Content */}
//           <div className="space-y-8">
//             <div>
//               <p
//                 className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4"
//                 style={{ fontFamily: 'Roboto, sans-serif' }}
//               >
//                 <span className="text-[#7352F6] font-semibold">OZ Media Planet</span> is a performance-driven digital
//                 marketing and IT services company dedicated to helping businesses scale through modern technology and
//                 creative storytelling.
//               </p>
//               <p
//                 className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
//                 style={{ fontFamily: 'Roboto, sans-serif' }}
//               >
//                 Our experienced team blends innovation, technology, and data to deliver impactful results.
//               </p>
//             </div>

//             {/* Stats with Hover Fill Animation */}
//             <div className="space-y-6">
//               {[1, 2, 3].map((num, i) => (
//                 <div
//                   key={i}
//                   className="relative group overflow-hidden border-l-4 pl-4 sm:pl-6"
//                   style={{ borderColor: '#DCD4FF' }}
//                 >
//                   {/* Animated Hover Fill */}
//                   <div
//                     className="absolute inset-0 w-0 group-hover:w-1/2 transition-all duration-700 ease-in-out"
//                     style={{ backgroundColor: '#DCD4FF', zIndex: 0 }}
//                   ></div>

//                   {/* Foreground Content */}
//                   <div className="relative z-10">
//                     <div
//                       className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2"
//                       style={{ fontFamily: 'Archivo, sans-serif' }}
//                     >
//                       0{num}
//                     </div>
//                     <p
//                       className="text-gray-700 font-medium text-base sm:text-lg"
//                       style={{ fontFamily: 'Roboto, sans-serif' }}
//                     >
//                       {num === 1 && 'Years in Industry'}
//                       {num === 2 && 'Successful Projects Delivered'}
//                       {num === 3 && 'Global Clientele Footprint'}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Button */}
//             <div className="pt-4">
//               <button
//                 className="bg-[#EFEBFF] hover:bg-purple-300 rounded-3xl shadow-[4px_4px_0px_#000]  text-[#7352F6] px-6 sm:px-8 py-2.5 sm:py-3  font-medium transition duration-200 hover:scale-105"
//                 style={{ fontFamily: 'Roboto, sans-serif' }}
//               >
//                 LEARN MORE
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhoWeAreSection;

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const WhoWeAreSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // Framer animation variants
  const imageVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const contentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const textItem = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1.4, duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full md:py-12 lg:py-14 py-6 px-4 sm:px-6 md:px-10 lg:px-16 bg-white"
    >
      <div className="max-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Archivo, sans-serif' }}
          >
            Who We Are
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Building trust, delivering results, and growing with our clients.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Image Block */}
          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]"
          >
            <div
              className="w-full h-full rounded-3xl"
              style={{ backgroundColor: '#DCD4FF' }}
            ></div>

            <img
              src="/images/WhoWeAre.png"
              alt="Digital marketing illustration"
              className="absolute lg:left-12 inset-0 w-full h-full object-cover object-center scale-110"
            />
          </motion.div>

          {/* Right Content: Text + Button */}
          <motion.div
            variants={contentVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={textItem}>
              <p
                className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                <span className="text-[#7352F6] font-semibold">OZ Media Planet</span> is a performance-driven digital
                marketing and IT services company dedicated to helping businesses scale through modern technology and
                creative storytelling.
              </p>
              <p
                className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Our experienced team blends innovation, technology, and data to deliver impactful results.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div className="space-y-6" variants={textItem}>
              {[1, 2, 3].map((num, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden border-l-4 pl-4 sm:pl-6"
                  style={{ borderColor: '#DCD4FF' }}
                >
                  <div
                    className="absolute inset-0 w-0 group-hover:w-1/2 transition-all duration-700 ease-in-out"
                    style={{ backgroundColor: '#DCD4FF', zIndex: 0 }}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                      style={{ fontFamily: 'Archivo, sans-serif' }}
                    >
                      0{num}
                    </div>
                    <p
                      className="text-gray-700 font-medium text-base sm:text-lg"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {num === 1 && 'Years in Industry'}
                      {num === 2 && 'Successful Projects Delivered'}
                      {num === 3 && 'Global Clientele Footprint'}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Button with Pop Animation */}
            <motion.div variants={buttonVariant}>
              <button
                className="bg-[#EFEBFF] hover:bg-purple-300 rounded-3xl shadow-[4px_4px_0px_#000] text-[#7352F6] px-6 sm:px-8 py-2.5 sm:py-3 font-medium transition duration-200 hover:scale-105"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                LEARN MORE
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
