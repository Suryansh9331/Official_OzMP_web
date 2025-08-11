import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Palette,
  Users,
  TrendingUp,
  Search,
  Globe,
  Code,
  PenTool,
  Camera,
  FileText,
  Download,
  Video,
  Headphones,
  Award,
  Shield,
  HelpCircle,
  BookOpen,
  Smartphone,
  Server,
  ShoppingCart,
  Briefcase,
  Settings,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Services",
    links: [
      {
        label: "IT solutions",
        icon: Rocket,
        to: "/it-services",
      },
      {
        label: "Digital Marketing",
        icon: Globe,
        to: "services-digital-marketing",
      },
      {
        label: "Developement Services",
        icon: Code,
        to: "/it-services",
      },
      {
        label: "  Growth Compaigns ",
        icon: TrendingUp,
        to: "/services/digital-marketing",
      },
      {
        label: "UIUX Designing",
        icon: Palette,
        to: "/it-services/graphics-uiux-developement",
      },
      {
        label: "App Developement",
        icon: Smartphone,
        to: "/it-services/mobile-application-developement",
      },
      {
        label: "Content Creation",
        icon: PenTool,
        to: "/services/marketing/content-marketing",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", icon: Globe, to: "/about-us" },
      { label: "Our Team", icon: Users, to: "/our-team" },
      {
        label: "Careers",
        icon: Briefcase,
        to: "/careers/future-options-we-have",
      },
      { label: "Portfolio", icon: Camera, to: "/about-us" },
      { label: "Case Studies", icon: FileText, to: "/projects-details" },
    ],
  },
  {
    title: "IT Solutions ",
    links: [
      {
        label: "Mobile Applications",
        icon: Smartphone,
        to: "/it-services/mobile-application-developement",
      },
      {
        label: "Website Developement",
        icon: Code,
        to: "/it-services/website-developement",
      },
      {
        label: "Software Developement",
        icon: FileText,
        to: "/it-services/software-developement",
      },
      {
        label: "API Developement",
        icon: FileText,
        to: "/it-services/api-developement",
      },
      {
        label: "Graphics Designing",
        icon: Palette,
        to: "/it-services/graphics-uiux-developement",
      },
      {
        label: "Hosting And Server ",
        icon: Server,
        to: "/it-services/hosting-server-management",
      },
      {
        label: "E-commerce Solutions",
        icon: ShoppingCart,
        to: "/it-services/e-commerce-solution",
      },
      {
        label: "Tech Support AMC",
        icon: Settings,
        to: "/it-services/tech-support-sollution",
      },
    ],
  },
  {
    title: "Digital Success Solutions",
    links: [
      {
        label: " Serach Engine Optimization",
        icon: Search,
        to: "/services/marketing/seo-services",
      },
      {
        label: "E-mail Marketing",
        icon: Mail,
        to: "/services/marketing/email-marketing",
      },
      {
        label: "Content marketing",
        icon: BookOpen,
        to: "/services/marketing/content-marketing",
      },
      {
        label: "Affliate Marketing",
        icon: Shield,
        to: "/services/marketing/affiliate-marketing",
      },
      {
        label: "Social Media Marketing",
        icon: Twitter,
        to: "/services/marketing/social-media-marketing",
      },
    ],
  },
  {
    title: "Blogs/ Articles",
    links: [
      { label: "All Blogs ", icon: FileText, to: "/blogs" },
      { label: "Popular Blogs", icon: TrendingUp, to: "/blogs" },
      { label: "IT Tips ", icon: BookOpen, to: "/blogs/blog-article-1" },
      {
        label: "Mastering Digital Marketing",
        icon: Globe,
        to: "/blogs/blog-article-2",
      },
      { label: "Inspiring Brands", icon: Award, to: "/blogs/blog-article-3" },
      {
        label: "Creative Journey ",
        icon: PenTool,
        to: "/blogs/blog-article-4",
      },
      { label: "Creative Brands ", icon: Users, to: "/blogs/blog-article-5" },
    ],
  },
  {
    title: "Career Opportunities",
    links: [
      {
        label: "Career Optiion ",
        icon: Briefcase,
        to: "/careers/future-options-we-have",
      },
      { label: "Grow with us ", icon: TrendingUp, to: "/contact-us" },
    ],
  },
  {
    title: "Domains/Community",
    links: [
      { label: "Oz Media Planet", icon: Globe, to: "" },
      { label: "Oz Learning", icon: BookOpen, to: "" },
      { label: "Oz International", icon: Globe, to: "" },
      { label: "Community", icon: Users, to: "" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", icon: HelpCircle, to: "/contact" },
      { label: "Contact Support", icon: Mail, to: "/about-us" },
      {
        label: "24x7 Customer Support",
        icon: Phone,
        to: "/it-services/tech-support-sollution",
      },
      { label: "Security", icon: Shield, to: "/privacy-policy" },
      { label: "Terms", icon: FileText, to: "/terms-and-condition" },
    ],
  },
];

const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <footer className="relative bg-[#1C1A1F] text-white font-body overflow-hidden">
      {/* <div className="absolute inset-0 opacity-5"> */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none z-0"></div>
      <div className="border-t border-gray-700 mt-12  mx-4 max-w-full"></div>
      <div className="relative z-10 w-full mx-auto px-6 lg:py-16 md:py-12 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-12 md:gap-20 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="./">
              {" "}
              <div className="flex items-center mb-4 ">
                <div className="w-16 h-16 mr-3 rounded-none overflow-hidden bg-black flex items-center justify-center">
                  <img
                    className="w-full h-full bg-contain "
                    src="/images/logo.png"
                    alt=""
                  />
                </div>
                <h2 className="text-3xl font-bold text-white font-['serif'] ">
                  Oz Media Planet
                </h2>
              </div>
            </Link>

            <h3 className="text-lg font-semibold mb-3 text-[#DBD2FE] font-heading">
              Digital Marketing Excellence
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Transforming brands through innovative digital strategies,
              creative content, and data-driven marketing solutions. We craft
              compelling narratives that resonate with your audience and drive
              measurable results in the ever-evolving digital landscape.
            </p>

            <div className="mb-6 p-4 bg-gray-800/50 rounded-none border border-gray-700/50">
              <h4 className="text-[#DBD2FE] font-medium mb-3 font-heading">
                Stay Updated
              </h4>
              <div className="flex items-center space-x-3">
                <label className="relative cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 border-2 transition-all duration-300 flex items-center justify-center ${
                      isChecked
                        ? "bg-[#DBD2FE] border-[#DBD2FE] scale-110"
                        : "border-gray-400 hover:border-[#DBD2FE]"
                    }`}
                  >
                    {isChecked && (
                      <svg
                        className="w-3 h-3 text-[#1C1A1F] animate-pulse"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </label>
                <span className="text-gray-300 text-sm">
                  Subscribe to our newsletter for latest updates
                </span>
              </div>
            </div>

            {/* Socials */}
            {/* Socials */}
            <div className="flex flex-wrap gap-3 mt-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yourprofile" // <-- your LinkedIn link
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700/50 hover:bg-[#DBD2FE] rounded-md flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-[#DBD2FE]/20"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-[#1C1A1F] transition-colors duration-300" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/7313676879" // <-- your WhatsApp number with country code
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700/50 hover:bg-green-500 rounded-md flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.24 2 11.75c0 2.09.62 4.05 1.68 5.71L2 22l4.7-1.58A9.86 9.86 0 0012 21.5c5.52 0 10-4.24 10-9.75S17.52 2 12 2zm.05 17.29c-1.74 0-3.38-.51-4.78-1.48l-.34-.23-2.84.96.94-2.76-.23-.36A7.77 7.77 0 014.2 11.8c0-4.29 3.54-7.78 7.9-7.78 2.12 0 4.11.82 5.61 2.3a7.69 7.69 0 012.33 5.49c0 4.29-3.54 7.78-7.9 7.78z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href=" https://www.instagram.com/ozmediaplanet?igsh=ZmczbzR1cGVtemty&utm_source=qr" // <-- your Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700/50 hover:bg-pink-500 rounded-md flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20"
              >
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>

              {/* Phone */}
              <a
                href="tel:+917313676879" // <-- your phone number
                className="w-10 h-10 bg-gray-700/50 hover:bg-blue-500 rounded-md flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Phone className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>

              {/* Gmail */}
              <a
                href="mailto:youremail@gmail.com" // <-- your email
                className="w-10 h-10 bg-gray-700/50 hover:bg-red-500 rounded-md flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-red-500/20"
              >
                <Mail className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Dynamic Link Sections */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-4 text-[#DBD2FE] font-heading">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="flex items-center text-gray-300 hover:text-[#DBD2FE] transition-all duration-300 group hover:translate-x-1"
                    >
                      <link.icon className="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Oz Media Planet. All Rights Reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-[#DBD2FE] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-condition"
                className="text-gray-400 hover:text-[#DBD2FE] transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-[#DBD2FE] transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
