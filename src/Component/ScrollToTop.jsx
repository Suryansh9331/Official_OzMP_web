// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.key]); // location.key ensures re-trigger even for same pathname

  return null; // This component doesn’t render anything
};

export default ScrollToTop;
