
import React, { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
const OZMediaSection = () => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const [activeBox, setActiveBox] = useState(0);

  const isDesktop = () => window.innerWidth >= 1024;

 useEffect(() => {
  const handleScroll = () => {
    if (!isDesktop()) return;

    if (
      !sectionRef.current ||
      !leftContentRef.current ||
      !rightContentRef.current
    )
      return;

    const section = sectionRef.current;
    const leftContent = leftContentRef.current;
    const rightContent = rightContentRef.current;

    const sectionRect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollProgress =
      Math.max(0, -sectionRect.top) / (sectionHeight - viewportHeight);
    const boxIndex = Math.min(Math.floor(scrollProgress * 4), 3);
    setActiveBox(boxIndex);

    if (sectionRect.top <= 0 && sectionRect.bottom >= viewportHeight) {
      leftContent.style.position = "fixed";
      leftContent.style.top = "0";
      leftContent.style.left = "0";
      leftContent.style.width = "50vw";
      leftContent.style.height = "100vh";
      leftContent.style.zIndex = "10";
    } else if (sectionRect.top > 0) {
      leftContent.style.position = "relative";
      leftContent.style.top = "auto";
      leftContent.style.left = "auto";
      leftContent.style.width = "100%";
      leftContent.style.height = "auto";
      leftContent.style.zIndex = "auto";
    } else {
      leftContent.style.position = "absolute";
      leftContent.style.bottom = "0px";
      leftContent.style.left = "0px";
      leftContent.style.width = "50vw";
      leftContent.style.height = "100vh";
      leftContent.style.zIndex = "10";
    }
  };

  if (isDesktop()) {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    // 🔥 Call immediately to avoid incorrect positioning on refresh
    handleScroll();
  }

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);


  const features = [
    {
      title: "Data-Driven Approach",
      points: [
        "Every Strategy Is Guided By Real-Time Data And Performance Insights.",
        "We Analyze Customer Behavior, Trends, And Metrics Before Taking Action.",
        "This Ensures Our Efforts Are Targeted, Efficient, And Results-Oriented.",
      ],
    },
    {
      title: "ROI-Focused Strategies",
      points: [
        "We Focus On Delivering Measurable Returns On Every Rupee You Invest.",
        "Strategies Are Designed To Drive Leads, Conversions, And Long-Term Value.",
        "Our Ultimate Goal: Maximize Your Profits Through Smart Marketing.",
      ],
    },
    {
      title: "End-To-End Marketing & Development",
      points: [
        "Complete Digital Services—From Design And Branding To Full-Stack Development.",
        "Seamless Coordination Between Marketing And Tech For Consistent Execution.",
        "One Reliable Team Handling Your Entire Online Growth Journey.",
      ],
    },
    {
      title: "Transparent Reporting & Analytics",
      points: [
        "Get Detailed Reports With Real-Time Performance Tracking.",
        "Full Visibility Into What's Working And Where Improvements Are Needed.",
        "No Fluff—Just Honest Data, Insights, And Progress You Can Trust.",
      ],
    },
    {
      title: "Customer-Centric Execution",
      points: [
        "Every Campaign Begins With A Deep Understanding Of Your Audience And Business Goals.",
        "We Personalize Strategies To Resonate With Your Target Customers Across Channels.",
        "Our Success Is Measured By The Real Impact We Create For Your Brand And Users.",
      ],
    },
  ];

  return (
    <div className="bg-[#1E1C21]" style={{ fontFamily: "Archivo, sans-serif" }}>
      {/* Desktop & Laptop Layout */}
      <div ref={sectionRef} className="hidden lg:block relative min-h-[238vh]">
        {/* Sticky Left Side */}
        <div
          ref={leftContentRef}
          className="w-[40vw] h-screen  flex flex-col justify-center px-12 xl:px-16 fixed z-10 left-0 top-0"
        >
          <div className="max-w-md mt-18">
            <h1 className="text-white text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              Why Choose OZ Media Planet?
            </h1>
            <div className="mb-8">
              <p className="text-white text-lg mb-2">
                Smart Solutions. Proven Methods.
              </p>
              <p className="text-white text-lg">Transparent Execution.</p>
            </div>
            <div className="flex items-center mb-8">
              <div className="flex text-purple-500 text-xl mr-3">
                {"★".repeat(5)}
              </div>
              <span className="text-white text-lg font-semibold mr-3">
                4.95
              </span>
              <span className="text-gray-300 text-sm">
                Loved by 256 companies
              </span>
            </div>
          <Link to ="/about-us"> 
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1E1C21] transition-all duration-300 text-sm font-medium tracking-wide">
              LEARN MORE
            </button>
          </Link>
          </div>
        </div>

        {/* Scrollable Right Boxes */}
        <div
          ref={rightContentRef}
          className="absolute right-0 top-0 w-[62vw] px-12 py-20 space-y-18"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#DBD2FF] p-10 shadow-lg transition-transform duration-500 ${
                activeBox === index ? "scale-105 shadow-2xl" : "scale-100"
              } rounded-tl-4xl rounded-br-4xl rounded-tr-none rounded-bl-none`}
            >
              <div className="absolute -top-3 left-8">
                <div className="w-12 h-12 bg-[#DBD2FF] rounded-full flex items-center justify-center shadow-md border-2 border-black">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#1E1C21]"
                  >
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-[#1E1C21] text-2xl font-bold mb-6">
                {feature.title}
              </h3>
              <div
                className="space-y-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {feature.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start">
                    <CheckCircle className="text-purple-600 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-[#1E1C21] text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden px-6 py-12 space-y-12">
        {/* Mobile stacked boxes */}
        <div className="space-y-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#DBD2FF]  p-6 shadow-md space-y-4   rounded-tl-4xl rounded-br-4xl rounded-tr-none rounded-bl-none"
            >
              <h3 className="text-[#1E1C21] text-xl font-bold">
                {feature.title}
              </h3>
              {feature.points.map((point, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="text-green-600 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-[#1E1C21] text-sm leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-white text-3xl font-bold mb-6 leading-tight">
            Why Choose OZ Media Planet?
          </h1>
          <p className="text-white text-lg mb-2">
            Smart Solutions. Proven Methods.
          </p>
          <p className="text-white text-lg mb-6">Transparent Execution.</p>
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400 text-xl mr-3">
              {"★".repeat(5)}
            </div>
            <span className="text-white text-lg font-semibold mr-3">4.95</span>
            <span className="text-gray-300 text-sm">
              Loved by 256 companies
            </span>
          </div>
          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1E1C21] transition-all duration-300 text-sm font-medium tracking-wide">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default OZMediaSection;
