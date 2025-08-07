import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const AnimatedHeadingSection = () => {
  const sectionRef = useRef(null);
  const indexRef = useRef(0); // ✅ this holds typing progress correctly
  const intervalRef = useRef(null); // ✅ so we can clear interval
  const fullText =
    "OZ Media Planet isn’t just a service provider — we are a strategic partner in your business growth journey.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // ✅ Reset everything on each view
          setTypedText("");
          indexRef.current = 0;

          if (intervalRef.current) clearInterval(intervalRef.current); // clear old interval

          intervalRef.current = setInterval(() => {
            setTypedText((prev) => {
              const currentIndex = indexRef.current;
              const nextChar = fullText.charAt(currentIndex);
              indexRef.current++;

              if (indexRef.current > fullText.length) {
                clearInterval(intervalRef.current);
                return prev;
              }

              return prev + nextChar;
            });
          }, 30); // typing speed
        }
      },
      { threshold: 0.5 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full lg:px-18 md:px-10 px-2 lg:py-26 md:py-24 py-16 text-center flex flex-col items-center"
    >
      <h1
        className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-snug min-h-[4rem]"
        style={{
          fontFamily: "'Arima', cursive",
          color: "#19007C",
          whiteSpace: "pre-wrap",
        }}
      >
        {typedText}
      </h1>

      <div className="md:mt-14 mt-8 flex flex-col sm:flex-row md:gap-14 gap-6">
      <Link  to ="/projects-details">
        <button className="uppercase font-outfit font-semibold hover:cursor-pointer bg-[#dcd4ff] text-black px-5 sm:px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1">
          Our Impact in Action
        </button>
       </Link>
     
     <Link  to = "/contact-us">
        <button className="uppercase font-outfit font-semibold hover:cursor-pointer border border-black px-8 sm:px-8 py-3 rounded-full transition-transform duration-300 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1">
          Plan With Us – No Cost
        </button>
    </Link>

      </div>
    </section>
  );
};

export default AnimatedHeadingSection;
