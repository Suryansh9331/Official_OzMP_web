// import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="relative bg-[#1C1A1F] text-white overflow-hidden">
//       {/* Subtle background animation */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 left-10 w-32 h-32 bg-[#DBD2FE] rounded-full animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-20 h-20 bg-[#DBD2FE] rounded-full animate-pulse delay-1000"></div>
//         <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-[#DBD2FE] rounded-full animate-pulse delay-500"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
//           {/* Brand Section */}
//           <div className="lg:col-span-2">
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 bg-[#DBD2FE] rounded-lg flex items-center justify-center mr-3">
//                 <span className="text-[#1C1A1F] font-bold text-xl">OZ</span>
//               </div>
//               <h2 className="text-2xl font-bold text-[#DBD2FE]">Oz Media Planet</h2>
//             </div>
//             <h3 className="text-lg font-semibold mb-3 text-[#DBD2FE]">Digital Marketing Excellence</h3>
//             <p className="text-gray-300 mb-6 leading-relaxed">
//               Transforming brands through innovative digital strategies, creative content, and data-driven marketing solutions. Your success is our mission in the digital universe.
//             </p>

//             {/* Social Media Icons */}
//             <div className="flex space-x-4">
//               <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#DBD2FE] rounded-lg flex items-center justify-center transition-all duration-300 group">
//                 <Facebook className="w-5 h-5 text-gray-300 group-hover:text-[#1C1A1F]" />
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#DBD2FE] rounded-lg flex items-center justify-center transition-all duration-300 group">
//                 <Twitter className="w-5 h-5 text-gray-300 group-hover:text-[#1C1A1F]" />
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#DBD2FE] rounded-lg flex items-center justify-center transition-all duration-300 group">
//                 <Instagram className="w-5 h-5 text-gray-300 group-hover:text-[#1C1A1F]" />
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#DBD2FE] rounded-lg flex items-center justify-center transition-all duration-300 group">
//                 <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-[#1C1A1F]" />
//               </a>
//               <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-[#DBD2FE] rounded-lg flex items-center justify-center transition-all duration-300 group">
//                 <Youtube className="w-5 h-5 text-gray-300 group-hover:text-[#1C1A1F]" />
//               </a>
//             </div>
//           </div>

//           {/* Services Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-[#DBD2FE]">Services</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Digital Marketing</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Content Creation</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Social Media Management</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">SEO Optimization</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Brand Strategy</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Web Development</a></li>
//             </ul>
//           </div>

//           {/* Company Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-[#DBD2FE]">Company</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">About Us</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Our Team</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Careers</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Portfolio</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Case Studies</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Press Kit</a></li>
//             </ul>
//           </div>

//           {/* Resources Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-[#DBD2FE]">Resources</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Blog</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Free Tools</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Templates</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Guides & eBooks</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Webinars</a></li>
//               <li><a href="#" className="text-gray-300 hover:text-[#DBD2FE] transition-colors duration-200">Newsletter</a></li>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 text-[#DBD2FE]">Contact</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center text-gray-300">
//                 <Mail className="w-4 h-4 mr-2 text-[#DBD2FE]" />
//                 <a href="mailto:hello@ozmediaplanet.com" className="hover:text-[#DBD2FE] transition-colors duration-200">hello@ozmediaplanet.com</a>
//               </li>
//               <li className="flex items-center text-gray-300">
//                 <Phone className="w-4 h-4 mr-2 text-[#DBD2FE]" />
//                 <a href="tel:+1234567890" className="hover:text-[#DBD2FE] transition-colors duration-200">+1 (234) 567-8900</a>
//               </li>
//               <li className="flex items-start text-gray-300">
//                 <MapPin className="w-4 h-4 mr-2 mt-1 text-[#DBD2FE]" />
//                 <span>123 Digital Avenue<br />Creative District<br />NY 10001</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Separator */}
//         <div className="border-t border-gray-700 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             {/* Copyright */}
//             <div className="text-gray-400 text-sm">
//               © 2024 Oz Media Planet. All Rights Reserved.
//             </div>

//             {/* Legal Links */}
//             <div className="flex space-x-6 text-sm">
//               <a href="#" className="text-gray-400 hover:text-[#DBD2FE] transition-colors duration-200">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-[#DBD2FE] transition-colors duration-200">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-[#DBD2FE] transition-colors duration-200">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import {
//   faFacebookF,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function Footer() {
//   return (
//     <footer className="bg-[#1C1A1F] text-white font-poppins px-6 lg:px-20 pt-16 pb-8">
//       <div className="border-t border-gray-700 mb-12"></div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
//         {/* Left Section */}
//         <div className="md:col-span-2">
//           <h2 className="text-white text-2xl font-archivo font-bold">Oz Media Planet</h2>
//           <p className="text-[#DBD2FE] font-semibold mt-2">About Oz Media</p>
//           <p className="text-sm mt-4 text-gray-300 leading-relaxed">
//             We are your digital growth partner — providing web & app development, SEO, digital marketing and advertising solutions tailored for success.
//           </p>
//           <div className="flex space-x-4 mt-6 text-[#DBD2FE]">
//             <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-white" />
//             <FontAwesomeIcon icon={faFacebookF} className="cursor-pointer hover:text-white" />
//             <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-white" />
//           </div>
//         </div>

//         {/* Column Links */}
//         <div>
//           <h4 className="text-[#DBD2FE] font-semibold mb-4">Company</h4>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>About</li>
//             <li>Features</li>
//             <li>Works</li>
//             <li>Career</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-[#DBD2FE] font-semibold mb-4">Help</h4>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>Customer Support</li>
//             <li>Delivery Details</li>
//             <li>Terms & Conditions</li>
//             <li>Privacy Policy</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-[#DBD2FE] font-semibold mb-4">Resources</h4>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>Free eBooks</li>
//             <li>Development Tutorial</li>
//             <li>How to - Blog</li>
//             <li>YouTube Playlist</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-[#DBD2FE] font-semibold mb-4">Explore</h4>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li>Case Studies</li>
//             <li>Events</li>
//             <li>Media Kit</li>
//             <li>Newsletter</li>
//           </ul>
//         </div>
//       </div>

//       {/* Separator */}
//       <div className="border-t border-gray-700 mt-16 mb-6"></div>

//       {/* Bottom Footer */}
//       <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-400">
//         <p>© Copyright 2022, All Rights Reserved by Oz Media Planet</p>
//         <div className="flex space-x-6 mt-4 md:mt-0">
//           <a href="#" className="hover:text-[#DBD2FE]">Terms</a>
//           <a href="#" className="hover:text-[#DBD2FE]">Privacy Policy</a>
//           <a href="mailto:info@ozmediaplanet.com" className="hover:text-[#DBD2FE]">info@ozmediaplanet.com</a>
//           <a href="tel:+919876543210" className="hover:text-[#DBD2FE]">+91 98765 43210</a>
//         </div>
//       </div>
//     </footer>
//   );
// }

{
  /* Contact Section */
}
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
      { label: "Digital Marketing", icon: TrendingUp, to: "/services/digital-marketing" },
      { label: "Content Creation", icon: PenTool, to: "/services/content-creation" },
      { label: "Social Media Management", icon: Users, to: "/services/social-media" },
      { label: "SEO Optimization", icon: Search, to: "/services/seo" },
      { label: "Brand Strategy", icon: Palette, to: "/services/brand-strategy" },
      { label: "Web Development", icon: Code, to: "/services/web-development" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", icon: Globe, to: "/about" },
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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-10 w-22 h-22 bg-[#DBD2FE] animate-pulse"></div>
        <div className="absolute top-40 right-0 w-20 h-20 bg-[#DBD2FE] animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-[#DBD2FE] animate-pulse delay-500"></div>
      </div>
 <div className="border-t border-gray-700 lg:mt-12 lg:ml-28 max-w-7xl"></div>
      <div className="relative z-10 w-full mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 mr-3 rounded-none overflow-hidden bg-black flex items-center justify-center">
               <img className="w-full h-full bg-contain" src="/images/logo.png" alt="" />
              </div>
              <h2 className="text-3xl font-bold text-white font-['serif']">
                Oz Media Planet
              </h2>
            </div>
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
              <h4 className="text-[#DBD2FE] font-medium mb-3 font-heading">Stay Updated</h4>
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
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-gray-700/50 hover:bg-[#DBD2FE] rounded-none flex items-center justify-center transition-all duration-300 group hover:scale-110 hover:shadow-lg hover:shadow-[#DBD2FE]/20"
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-[#1C1A1F] transition-colors duration-300" />
                </a>
              ))}
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
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#DBD2FE] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#DBD2FE] transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-[#DBD2FE] transition-colors duration-200">
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