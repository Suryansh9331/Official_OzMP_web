// import React from "react";

// const StatsSection = () => {
//   return (
//     <div className=" bg-[#dcd4ff] py-10 px-6 rounded-[2rem]  ">
//       <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center justify-between md:flex-row md:gap-0 text-black">
        
//         {/* Stat 1 */}
//         <div className="flex items-center lg:gap-4 md:gap-1 sm:gap-4 gap-4  text-center md:text-left">
//           <h2 className="text-5xl font-bold font-satoshi">10k</h2>
//           <div className="text-left">
//             <p className="text-md font-semibold font-satoshi">Daily Users</p>
//             <p className="text-sm font-satoshi">Lorem Ipsum Dolor Sit Amet</p>
//           </div>
//         </div>

//         {/* Stat 2 */}
//         <div className="flex items-center lg:gap-4 md:gap-1 sm:gap-4 gap-4 text-center md:text-left">
//           <h2 className="text-5xl font-bold font-satoshi">99%</h2>
//           <div className="text-left">
//             <p className="text-md font-semibold font-satoshi">Downloads</p>
//             <p className="text-sm font-satoshi">Lorem Ipsum Dolor Sit Amet</p>
//           </div>
//         </div>

//         {/* Slg:tat 4 md:gap-1 sm:gap-4 gap-4 */}
//         <div className="flex items-center lg:gap-4 md:gap-1 sm:gap-4 gap-4 text-center md:text-left">
//           <h2 className="text-5xl font-bold font-satoshi">543</h2>
//           <div className="text-left">
//             <p className="text-md font-semibold font-satoshi">Projects</p>
//             <p className="text-sm font-satoshi">Lorem Ipsum Dolor Sit Amet</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default StatsSection;



import React, { useState, useEffect, useRef } from "react";

const StatsSection = () => {
  const [counted, setCounted] = useState(false);
  const [values, setValues] = useState({ value1: 0, value2: 0, value3: 0 });
  const sectionRef = useRef(null);

  const targetValues = { value1: 5000, value2: 79, value3: 50 };
  const duration = 2000; // Animation duration in ms

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !counted) {
            setCounted(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [counted]);

  const animateNumbers = () => {
    const startTime = Date.now();

    const updateNumbers = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setValues({
        value1: Math.floor(progress * targetValues.value1),
        value2: Math.floor(progress * targetValues.value2),
        value3: Math.floor(progress * targetValues.value3),
      });

      if (progress < 1) {
        requestAnimationFrame(updateNumbers);
      } else {
        // Ensure we reach the exact target values
        setValues(targetValues);
      }
    };

    requestAnimationFrame(updateNumbers);
  };

  const formatNumber = (num) => {
    if (num === 10000) return "5k";
    return num.toString();
  };
 const [hovered, setHovered] = useState(false);
  return (
      <div 
        ref={sectionRef}
      className="bg-[#dcd4ff] py-8 px-6 rounded-[2rem] relative overflow-hidden transition-all duration-300"
      style={{
        boxShadow: hovered
          ? "-6px -6px 0 0 rgba(0,0,0,0.8)"
          : "6px 6px 0 0 rgba(0,0,0,0.8)",
        transform: hovered ? "translate(-4px, -4px)" : "translate(0, 0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
    <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center justify-between md:flex-row md:gap-0 text-black">
  {/* Stat 1 */}
  <div className="flex items-center lg:gap-4 md:gap-1 sm:gap-4 gap-4 text-center md:text-left md:flex-col lg:flex-row flex-row">
    <h2 className="lg:text-5xl font-bold font-satoshi md:text-4xl text-5xl">
      {formatNumber(values.value1)}
    </h2>
    <div className="lg:text-left md:text-center text-left">
      <p className="text-md font-semibold font-satoshi">Daily Users</p>
      <p className="text-sm font-satoshi">Engaging with our platforms every day</p>
    </div>
  </div>

  {/* Stat 2 */}
  <div className="flex items-center lg:gap-4 md:gap-1 sm:gap-4 gap-4 text-center md:text-left md:flex-col lg:flex-row flex-row">
    <h2 className="lg:text-5xl font-bold font-satoshi md:text-4xl text-5xl">
      {values.value2}%
    </h2>
    <div className="lg:text-left md:text-center text-left">
      <p className="text-md font-semibold font-satoshi">Accuracy</p>
      <p className="text-sm font-satoshi">Across all major digital platforms</p>
    </div>
  </div>

  {/* Stat 3 */}
  <div className="flex items-center lg:gap-4 md:gap-1 sm:gap-4 gap-4 text-center md:text-left md:flex-col lg:flex-row flex-row">
    <h2 className="lg:text-5xl font-bold font-satoshi md:text-4xl text-5xl">
      {values.value3}
    </h2>
    <div className="lg:text-left md:text-center text-left">
      <p className="text-md font-semibold font-satoshi">Projects</p>
      <p className="text-sm font-satoshi">Successfully delivered IT solutions</p>
    </div>
  </div>
</div>
    </div>
  );
};

export default StatsSection;