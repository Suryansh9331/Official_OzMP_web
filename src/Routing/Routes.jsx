// // routes.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";

// // Import your pages
// import Home from "../Pages/Home/Home";
// import Navbar from "../Component/Navbar";
// import Footer from "../Component/Footer";
// import About from "../Pages/About/About";

// import ScrollToTopButton from "../Component/SttButton";
// import DigitalMarketing from "../Pages/DigitalMarketing/DigitalMarketing";
// import Contact from "../Pages/Contact/Contact";
// import OurTeam from "../Pages/Team/Team";
// import WebsiteDevelopmentPage from "../Pages/WebDev/WebDevelopment";
// import APIDevelopmentPage from "../Pages/APIDevelopement/APIDevelopmentPage";
// import SoftwareDevelopmentPage from "../Pages/SoftWareDevelopement/SoftwareDevelopmentPage";
// import MobileAppDevelopmentPage from "../Pages/MobileApp/MobileAppDevelopmentPage";
// import GraphicUIUXDesignPage from "../Pages/GraphicUIUX/GraphicUIUXDesignPage";
// import ECommerceDevelopmentPage from "../Pages/Ecommerce/ECommerceDevelopmentPage";
// import TechSupportAMCPage from "../Pages/TechSupport/TechSupportAMCPage";
// import HostingServerManagement from "../Pages/HostingServerManagement/HostingServerManagementPage";
// import SEOServicesPage from "../Pages/SEOService/SEOServicesPage";
// import AffiliateMarketingPage from "../Pages/AffiliateMarketing/AffiliateMarketingPage";
// import ContentMarketingPage from "../Pages/ContentMarketing/ContentMarketingPage";
// import EmailMarketingPage from "../Pages/EmailMarketing/EmailMarketingPage";
// import SocialMediaMarketingPage from "../Pages/SocialMedia/SocialMediaMarketingPage";

// import ITPage from "../Pages/IT/ITPage";
// import Blog from "../Pages/Blog/Blog";
// import ProjectDetails from "../Pages/Project/Project";
// import Inspirewall from "../Pages/Project/p1";
// import ShopEase from "../Pages/Project/p2";
// import LeadBoost from "../Pages/Project/p3";
// import EduTrack from "../Pages/Project/P4";
// import FitNation from "../Pages/Project/p5";
// import RentRoam from "../Pages/Project/p6";
// import Career from "../Pages/Carrier/Carrier";
// import TermsAndConditions from "../Pages/Terms/Terms";
// import PrivacyPolicy from "../Pages/Privacy/Privacy";
// import Blog1 from "../Pages/Blog/BlogsPages/Blog1";
// import Blog2 from "../Pages/Blog/BlogsPages/Blog2";
// import Blog3 from "../Pages/Blog/BlogsPages/Blog3";
// import Blog4 from "../Pages/Blog/BlogsPages/Blog4";
// import Blog5 from "../Pages/Blog/BlogsPages/Blog5";
// import Blog6 from "../Pages/Blog/BlogsPages/Blog6";
// const AppRoutes = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about-us" element={<About />} />
//         <Route
//           path="/services-digital-marketing"
//           element={<DigitalMarketing />}
//         />
//         <Route path="/contact-us" element={<Contact />} />
//         <Route path="/our-team" element={<OurTeam />} />

//         {/* routes for IT services */}
//         <Route path="/it-services" element={<ITPage />} />
//         <Route
//           path="/it-services/website-developement"
//           element={<WebsiteDevelopmentPage />}
//         />
//         <Route
//           path="/it-services/api-developement"
//           element={<APIDevelopmentPage />}
//         />
//         <Route
//           path="/it-services/software-developement"
//           element={<SoftwareDevelopmentPage />}
//         />
//         <Route
//           path="/it-services/mobile-application-developement"
//           element={<MobileAppDevelopmentPage />}
//         />
//         <Route
//           path="/it-services/graphics-uiux-developement"
//           element={<GraphicUIUXDesignPage />}
//         />
//         <Route
//           path="/it-services/e-commerce-solution"
//           element={<ECommerceDevelopmentPage />}
//         />
//         <Route
//           path="/it-services/tech-support-sollution"
//           element={<TechSupportAMCPage />}
//         />
//         <Route
//           path="/it-services/hosting-server-management"
//           element={<HostingServerManagement />}
//         />
//         <Route
//           path="/services/marketing/seo-services"
//           element={<SEOServicesPage />}
//         />
//         <Route
//           path="/services/marketing/affiliate-marketing"
//           element={<AffiliateMarketingPage />}
//         />
//         <Route
//           path="/services/marketing/content-marketing"
//           element={<ContentMarketingPage />}
//         />
//         <Route
//           path="/services/marketing/email-marketing"
//           element={<EmailMarketingPage />}
//         />
//         <Route
//           path="/services/marketing/social-media-marketing"
//           element={<SocialMediaMarketingPage />}
//         />

//         <Route path="/blogs" element={<Blog />} />
//         <Route path="/blogs/blog-article-1" element={<Blog1 />} />
//         <Route path="/blogs/blog-article-2" element={<Blog2 />} />
//         <Route path="/blogs/blog-article-3" element={<Blog3 />} />
//         <Route path="/blogs/blog-article-4" element={<Blog4 />} />
//         <Route path="/blogs/blog-article-5" element={<Blog5 />} />
//         <Route path="/blogs/blog-article-6" element={<Blog6 />} />

//         <Route path="/projects-details" element={<ProjectDetails />} />
//         <Route
//           path="/projects-details/inspirewall-mentalhealth-saas-platform"
//           element={<Inspirewall />}
//         />
//         <Route
//           path="/projects-details/shopease-e-commerce-web-app"
//           element={<ShopEase />}
//         />
//         <Route
//           path="/projects-details/leadboost-digital-marketing-dashboard"
//           element={<LeadBoost />}
//         />
//         <Route
//           path="/projects-details/edu-track-learning-management-system"
//           element={<EduTrack />}
//         />
//         <Route
//           path="/projects-details/fitnation-fitness-and-nutrition-app"
//           element={<FitNation />}
//         />
//         <Route
//           path="/projects-details/rentroam-real-state-rental-platofrm"
//           element={<RentRoam />}
//         />

//         <Route path="/careers/future-options-we-have" element={<Career />} />

//         <Route path="/terms-and-condition" element={<TermsAndConditions />} />

//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//       </Routes>

//       <Footer />
//       <ScrollToTopButton />
//     </div>
//   );
// };

// export default AppRoutes;

//optimized routes


import React, { Suspense, lazy, memo } from "react";
import { Routes, Route } from "react-router-dom";

// Memoized persistent components (always rendered)
import NavbarComp from "../Component/Navbar";
import FooterComp from "../Component/Footer";
import ScrollBtnComp from "../Component/SttButton";

const Navbar = memo(NavbarComp);
const Footer = memo(FooterComp);
const ScrollToTopButton = memo(ScrollBtnComp);

// ====== Home & Core Pages ======
const Home = lazy(() =>
  import(/* webpackPrefetch: true */ "../Pages/Home/Home")
);
const About = lazy(() =>
  import(/* webpackPrefetch: true */ "../Pages/About/About")
);
const Contact = lazy(() =>
  import(/* webpackPrefetch: true */ "../Pages/Contact/Contact")
);
const OurTeam = lazy(() => import("../Pages/Team/Team"));

// ====== Group: Services ======
const DigitalMarketing = lazy(() =>
  import(
    /* webpackChunkName: "services", webpackPrefetch: true */ "../Pages/DigitalMarketing/DigitalMarketing"
  )
);
const ITPage = lazy(() =>
  import(/* webpackChunkName: "services" */ "../Pages/IT/ITPage")
);
const WebsiteDevelopmentPage = lazy(() =>
  import(/* webpackChunkName: "services" */ "../Pages/WebDev/WebDevelopment")
);
const APIDevelopmentPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/APIDevelopement/APIDevelopmentPage"
  )
);
const SoftwareDevelopmentPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/SoftWareDevelopement/SoftwareDevelopmentPage"
  )
);
const MobileAppDevelopmentPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/MobileApp/MobileAppDevelopmentPage"
  )
);
const GraphicUIUXDesignPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/GraphicUIUX/GraphicUIUXDesignPage"
  )
);
const ECommerceDevelopmentPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/Ecommerce/ECommerceDevelopmentPage"
  )
);
const TechSupportAMCPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/TechSupport/TechSupportAMCPage"
  )
);
const HostingServerManagement = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/HostingServerManagement/HostingServerManagementPage"
  )
);
const SEOServicesPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/SEOService/SEOServicesPage"
  )
);
const AffiliateMarketingPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/AffiliateMarketing/AffiliateMarketingPage"
  )
);
const ContentMarketingPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/ContentMarketing/ContentMarketingPage"
  )
);
const EmailMarketingPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/EmailMarketing/EmailMarketingPage"
  )
);
const SocialMediaMarketingPage = lazy(() =>
  import(
    /* webpackChunkName: "services" */ "../Pages/SocialMedia/SocialMediaMarketingPage"
  )
);

// ====== Group: Blogs ======
const Blog = lazy(() =>
  import(
    /* webpackChunkName: "blogs", webpackPrefetch: true */ "../Pages/Blog/Blog"
  )
);
const Blog1 = lazy(() =>
  import(/* webpackChunkName: "blogs" */ "../Pages/Blog/BlogsPages/Blog1")
);
const Blog2 = lazy(() =>
  import(/* webpackChunkName: "blogs" */ "../Pages/Blog/BlogsPages/Blog2")
);
const Blog3 = lazy(() =>
  import(/* webpackChunkName: "blogs" */ "../Pages/Blog/BlogsPages/Blog3")
);
const Blog4 = lazy(() =>
  import(/* webpackChunkName: "blogs" */ "../Pages/Blog/BlogsPages/Blog4")
);
const Blog5 = lazy(() =>
  import(/* webpackChunkName: "blogs" */ "../Pages/Blog/BlogsPages/Blog5")
);
const Blog6 = lazy(() =>
  import(/* webpackChunkName: "blogs" */ "../Pages/Blog/BlogsPages/Blog6")
);

// ====== Group: Projects ======
const ProjectDetails = lazy(() =>
  import(
    /* webpackChunkName: "projects", webpackPrefetch: true */ "../Pages/Project/Project"
  )
);
const Inspirewall = lazy(() =>
  import(/* webpackChunkName: "projects" */ "../Pages/Project/p1")
);
const ShopEase = lazy(() =>
  import(/* webpackChunkName: "projects" */ "../Pages/Project/p2")
);
const LeadBoost = lazy(() =>
  import(/* webpackChunkName: "projects" */ "../Pages/Project/p3")
);
const EduTrack = lazy(() =>
  import(/* webpackChunkName: "projects" */ "../Pages/Project/P4")
);
const FitNation = lazy(() =>
  import(/* webpackChunkName: "projects" */ "../Pages/Project/p5")
);
const RentRoam = lazy(() =>
  import(/* webpackChunkName: "projects" */ "../Pages/Project/p6")
);

// ====== Others ======
const Career = lazy(() => import("../Pages/Carrier/Carrier"));
const TermsAndConditions = lazy(() => import("../Pages/Terms/Terms"));
const PrivacyPolicy = lazy(() => import("../Pages/Privacy/Privacy"));

const AppRoutes = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
        <Routes>
          {/* Core */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/our-team" element={<OurTeam />} />

          {/* Services */}
          <Route
            path="/services-digital-marketing"
            element={<DigitalMarketing />}
          />
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
            path="/services/marketing/seo-services"
            element={<SEOServicesPage />}
          />
          <Route
            path="/services/marketing/affiliate-marketing"
            element={<AffiliateMarketingPage />}
          />
          <Route
            path="/services/marketing/content-marketing"
            element={<ContentMarketingPage />}
          />
          <Route
            path="/services/marketing/email-marketing"
            element={<EmailMarketingPage />}
          />
          <Route
            path="/services/marketing/social-media-marketing"
            element={<SocialMediaMarketingPage />}
          />

          {/* Blogs */}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/blog-article-1" element={<Blog1 />} />
          <Route path="/blogs/blog-article-2" element={<Blog2 />} />
          <Route path="/blogs/blog-article-3" element={<Blog3 />} />
          <Route path="/blogs/blog-article-4" element={<Blog4 />} />
          <Route path="/blogs/blog-article-5" element={<Blog5 />} />
          <Route path="/blogs/blog-article-6" element={<Blog6 />} />

          {/* Projects */}
          <Route path="/projects-details" element={<ProjectDetails />} />
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

          {/* Others */}
          <Route path="/careers/future-options-we-have" element={<Career />} />
          <Route path="/terms-and-condition" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AppRoutes;
