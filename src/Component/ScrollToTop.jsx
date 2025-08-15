import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Always scroll to top smoothly on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.search, location.hash, location.key]);

  return null; // This component doesn't render anything
}
