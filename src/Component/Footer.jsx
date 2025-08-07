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
        to: "/services/digital-marketing",
      },
      {
        label: "Digital Marketing",
        icon: Globe,
        to: "/services/digital-marketing",
      },
      {
        label: "Developement Services",
        icon: Code,
        to: "/services/digital-marketing",
      },
      {
        label: "  Growth Compaigns ",
        icon: TrendingUp,
        to: "/services/digital-marketing",
      },
      {
        label: "UIUX Designing",
        icon: Palette,
        to: "/services/digital-marketing",
      },
      {
        label: "App Developement",
        icon: Smartphone,
        to: "/services/digital-marketing",
      },
      {
        label: "Content Creation",
        icon: PenTool,
        to: "/services/content-creation",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", icon: Globe, to: "/about-us" },
      { label: "Our Team", icon: Users, to: "/team" },
      { label: "Careers", icon: Briefcase, to: "/careers" },
      { label: "Portfolio", icon: Camera, to: "/portfolio" },
      { label: "Case Studies", icon: FileText, to: "/case-studies" },
    ],
  },
  {
    title: "IT Solutions ",
    links: [
      { label: "Mobile Applications", icon: Smartphone, to: "/blog" },
      { label: "Website Developement", icon: Code, to: "/tools" },
      { label: "Software Developement", icon: FileText, to: "/templates" },
      { label: "Graphics Designing", icon: Palette, to: "/guides" },
      { label: "Hosting And Server ", icon: Server, to: "/webinars" },
      { label: "E-commerce Solutions", icon: ShoppingCart, to: "/newsletter" },
      { label: "Tech Support AMC", icon: Settings, to: "/newsletter" },
    ],
  },
  {
    title: "Digital Success Solutions",
    links: [
      { label: " Serach Enigine Optimization", icon: Search, to: "/support/help" },
      { label: "E-mail Marketing", icon: Mail, to: "/support/contact" },
      { label: "Content-marketing", icon: BookOpen, to: "/support/docs" },
      { label: "Affliate Marketing", icon: Shield, to: "/support/security" },
      { label: "Social Media Marketing", icon: Twitter, to: "/support/certifications" },
    ],
  },
  {
    title: "Blogs/ Articles",
    links: [
      { label: "All Blogs ", icon: FileText, to: "/blogs" },
      { label: "Popular Blogs", icon: TrendingUp, to: "/blogs" },
      { label: "IT Tips ", icon: BookOpen, to: "/support/docs" },
      { label: "Mastering Digital Marketing", icon: Globe, to: "/support/security" },
      { label: "Inspiring Brands", icon: Award, to: "/support/certifications" },
      { label: "Creative Journey ", icon: PenTool, to: "/support/community" },
      { label: "Creative Brands ", icon: Users, to: "/support/community" },
    ],
  },
  {
    title: "Career Opportunities",
    links: [
      { label: "Career Optiion ", icon: Briefcase, to: "/support/help" },
      { label: "Grow with us ", icon: TrendingUp, to: "/support/contact" },
    ],
  },
  {
    title: "Domains/Community",
    links: [
      { label: "Oz Media Planet", icon: Globe, to: "/support/help" },
      { label: "Oz Learning", icon: BookOpen, to: "/support/contact" },
      { label: "Oz International", icon: Globe, to: "/support/docs" },
      { label: "Community", icon: Users, to: "/support/community" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", icon: HelpCircle, to: "/support/help" },
      { label: "Contact Support", icon: Mail, to: "/support/contact" },
      { label: "24x7 Customer Support", icon: Phone, to: "/support/docs" },
      { label: "Security", icon: Shield, to: "/support/security" },
      { label: "Terms", icon: FileText, to: "/support/security" },
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
