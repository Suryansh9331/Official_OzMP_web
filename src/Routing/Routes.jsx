// routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your pages
import Home from "../Pages/Home/Home";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import About from "../Pages/About/About";

import ScrollToTopButton from "../Component/SttButton";
import DigitalMarketing from "../Pages/DigitalMarketing/DigitalMarketing";
import Contact from "../Pages/Contact/Contact";
import OurTeam from "../Pages/Team/Team";
import WebsiteDevelopmentPage from "../Pages/WebDev/WebDevelopment";
import APIDevelopmentPage from "../Pages/APIDevelopement/APIDevelopmentPage";
import SoftwareDevelopmentPage from "../Pages/SoftWareDevelopement/SoftwareDevelopmentPage";
import MobileAppDevelopmentPage from "../Pages/MobileApp/MobileAppDevelopmentPage";
import GraphicUIUXDesignPage from "../Pages/GraphicUIUX/GraphicUIUXDesignPage";
import ECommerceDevelopmentPage from "../Pages/Ecommerce/ECommerceDevelopmentPage";
import TechSupportAMCPage from "../Pages/TechSupport/TechSupportAMCPage";
import HostingServerManagement from "../Pages/HostingServerManagement/HostingServerManagementPage";
import SEOServicesPage from "../Pages/SEOService/SEOServicesPage";
import ITPage from "../Pages/IT/ITPage";
import Blog from "../Pages/Blog/Blog";
import ProjectDetails from "../Pages/Project/Project";
import Inspirewall from "../Pages/Project/p1";
import ShopEase from "../Pages/Project/p2";
import LeadBoost from "../Pages/Project/p3";
import EduTrack from "../Pages/Project/P4";
import FitNation from "../Pages/Project/p5";
import RentRoam from "../Pages/Project/p6";
import Career from "../Pages/Carrier/Carrier";
const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route
          path="/services-digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/our-team" element={<OurTeam />} />

        {/* routes for IT services */}
        <Route path="/it-services" element={<ITPage />} />
        <Route
          path="/it-services/website-developement"
          element={<WebsiteDevelopmentPage />}
        />
        <Route
          path="/it-services/api-developement"
          element={<APIDevelopmentPage />}
        />
        <Route
          path="/it-services/software-developement"
          element={<SoftwareDevelopmentPage />}
        />
        <Route
          path="/it-services/mobile-application-developement"
          element={<MobileAppDevelopmentPage />}
        />
        <Route
          path="/it-services/graphics-uiux-developement"
          element={<GraphicUIUXDesignPage />}
        />
        <Route
          path="/it-services/e-commerce-solution"
          element={<ECommerceDevelopmentPage />}
        />
        <Route
          path="/it-services/tech-support-sollution"
          element={<TechSupportAMCPage />}
        />
        <Route
          path="/it-services/hosting-server-management"
          element={<HostingServerManagement />}
        />
        <Route
          path="/services/seo-services"
          element={<SEOServicesPage />}
        />
        
        {/* <Route path="/it-services/hosting-and-server" element={</>} />
        <Route path="/it-services/techsupport-amc-services" element={<OurTeam/>} /> */}

        <Route
          path="/blogs"
          element={<Blog />}
        />
        <Route
          path="/projects-details"
          element={<ProjectDetails />}
        />
        <Route
          path="/projects-details/inspirewall-mentalhealth-saas-platform"
          element={<Inspirewall />}
        />
        <Route
          path="/projects-details/shopease-e-commerce-web-app"
          element={<ShopEase />}
        />
        <Route
          path="/projects-details/leadboost-digital-marketing-dashboard"
          element={<LeadBoost />}
        />
        <Route
          path="/projects-details/edu-track-learning-management-system"
          element={<EduTrack />}
        />
        <Route
          path="/projects-details/fitnation-fitness-and-nutrition-app"
          element={<FitNation />}
        />
        <Route
          path="/projects-details/rentroam-real-state-rental-platofrm"
          element={<RentRoam />}
        />
      
        <Route
          path="/careers/future-options-we-have"
          element={<Career />}
        />
      
      
      
      </Routes>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AppRoutes;
