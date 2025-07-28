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
} from "lucide-react";
import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Services",
    links: [
      {
        label: "Digital Marketing",
        icon: TrendingUp,
        to: "/services/digital-marketing",
      },
      {
        label: "Content Creation",
        icon: PenTool,
        to: "/services/content-creation",
      },
      {
        label: "Social Media Management",
        icon: Users,
        to: "/services/social-media",
      },
      { label: "SEO Optimization", icon: Search, to: "/services/seo" },
      {
        label: "Brand Strategy",
        icon: Palette,
        to: "/services/brand-strategy",
      },
      { label: "Web Development", icon: Code, to: "/services/web-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", icon: Globe, to: "/about-us" },
      { label: "Our Team", icon: Users, to: "/team" },
      { label: "Careers", icon: Award, to: "/careers" },
      { label: "Portfolio", icon: Camera, to: "/portfolio" },
      { label: "Case Studies", icon: FileText, to: "/case-studies" },
      { label: "Press Kit", icon: Download, to: "/press-kit" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", icon: BookOpen, to: "/blog" },
      { label: "Free Tools", icon: Code, to: "/tools" },
      { label: "Templates", icon: FileText, to: "/templates" },
      { label: "Guides & eBooks", icon: Download, to: "/guides" },
      { label: "Webinars", icon: Video, to: "/webinars" },
      { label: "Newsletter", icon: Mail, to: "/newsletter" },
    ],
  },
  //   {
  //     title: "Solutions",
  //     links: [
  //       { label: "Analytics & Insights", icon: TrendingUp, to: "/solutions/analytics" },
  //       { label: "Market Research", icon: Search, to: "/solutions/research" },
  //       { label: "Creative Design", icon: Palette, to: "/solutions/design" },
  //       { label: "Video Production", icon: Video, to: "/solutions/video" },
  //       { label: "Podcast Services", icon: Headphones, to: "/solutions/podcast" },
  //       { label: "Global Campaigns", icon: Globe, to: "/solutions/global" },
  //     ],
  //   },
  {
    title: "Support",
    links: [
      { label: "Help Center", icon: HelpCircle, to: "/support/help" },
      { label: "Contact Support", icon: Mail, to: "/support/contact" },
      { label: "Documentation", icon: BookOpen, to: "/support/docs" },
      { label: "Security", icon: Shield, to: "/support/security" },
      { label: "Certifications", icon: Award, to: "/support/certifications" },
      { label: "Community", icon: Users, to: "/support/community" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:gap-14 md:gap-20 gap-10">
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
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-gray-700/50 hover:bg-[#DBD2FE] rounded-md flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-[#DBD2FE]/20"
                  >
                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-[#1C1A1F] transition-colors duration-300" />
                  </a>
                )
              )}
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
                to="/terms"
                className="text-gray-400 hover:text-[#DBD2FE] transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
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
