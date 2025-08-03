import React, { useEffect, useRef, useState } from "react";

const Headline = () => {
  const sectionRef = useRef(null);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

const fullText =
  "Fuel Your Growth with Digital Strategies That Deliver Real Impact . Partner with Oz Media Planet Today.";

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTypedText("");
          indexRef.current = 0;

          if (intervalRef.current) clearInterval(intervalRef.current);

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
          }, 30);
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
      className="w-full  md:px-10 px-2 lg:py-16 md:py-24 py-16 text-center flex flex-col items-center"
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

      <div className="md:mt-14 mt-8 flex justify-center">
        <button className="uppercase font-outfit font-semibold hover:cursor-pointer bg-[#dcd4ff] text-black px-8 sm:px-10 py-3 rounded-full shadow-lg transition-transform duration-300 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1">
          Let’s Connect
        </button>
      </div>
    </section>
  );
};

export default Headline;
