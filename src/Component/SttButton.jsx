import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // You can change icon if needed

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only after scrolling below hero
  useEffect(() => {
    const toggleVisibility = () => {
      const heroHeight = document.querySelector("#hero")?.offsetHeight || 300;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed lg:bottom-2 lg:right-6 md:bottom-14 md:right-6 bottom-10 right-4 z-50 bg-[#DBD2FF] hover:bg-[#c4b9f1] border-2 border-black transition-colors duration-300 w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-black w-7 h-7" />
      </button>
    )
  );
};

export default ScrollToTopButton;
