import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "..//assets/images/logo.jpg";

const navLinks = [
  { label: "Home", dropdown: false },
  { label: "About Us", dropdown: true, items: ["Our Team", "Our Story"] },
  {
    label: "Services",
    dropdown: true,
    items: ["Design", "Development", "Marketing"],
  },
  { label: "Case Studies", dropdown: true, items: ["Clients", "Projects"] },
  {
    label: "Industries We Serve",
    dropdown: true,
    items: ["Healthcare", "Finance", "Retail"],
  },

  { label: "Careers", dropdown: true, items: ["Openings", "Culture"] },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-['Nunito']">
      <div className="mx-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-lg object-cover shadow-sm"
          />
          <span className="text-xl text-black font-['serif'] font-extrabold tracking-wide">
            Oz Media
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-[16px] font-bold text-black">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group overflow-visible">
              <button
                className="flex items-center gap-1 relative text-black font-extrabold transition duration-300 
          before:absolute before:bottom-0 before:left-0 before:w-0 
          before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer 
          before:transition-all before:duration-500 
          group-hover:before:w-full"
              >
                {link.label}
                {link.dropdown && <FaChevronDown size={12} />}
              </button>

              {link.dropdown && (
                <ul
                  className="absolute top-10 left-0 bg-white/60 backdrop-blur-sm shadow-xl border border-[#dcd4ff] py-2 w-52 rounded-xl
            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
            transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 
            scale-95 group-hover:scale-100 z-50"
                >
                  {link.items.map((item, index) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 px-4 py-2 text-sm cursor-pointer transition-all duration-300 
                hover:bg-[#dcd4ff] hover:text-black border-b border-transparent 
                hover:border-[#dcd4ff] delay-${index * 75}`}
                    >
                      <FaArrowRight
                        size={10}
                        className="text-violet-400 mt-[1px]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <button className="bg-[#dcd4ff] text-black font-extrabold text-sm tracking-wide py-2 hover:cursor-pointer px-8 rounded-full flex items-center gap-2 border border-gray-600 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300">
            CONTACT US{" "}
            <span className="rounded-full border border-black p-1">
              <FaArrowRight size={12} />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden px-4 py-4 bg-white shadow-lg rounded-lg mt-2 border border-gray-200"
          >
            <ul className="space-y-4 text-[17.5px] font-semibold text-black">
              {navLinks.map((link) => (
                <li key={link.label} className="relative">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex justify-between items-center py-2 px-2 rounded-md hover:bg-gray-100 transition-all duration-200"
                  >
                    {link.label}
                    {link.dropdown && (
                      <FaChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {link.dropdown && openDropdown === link.label && (
                    <ul className="ml-4 mt-2 space-y-2 animate-slideDown">
                      {link.items.map((item, index) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 pl-2 py-1 text-[15px] text-gray-700 rounded-md hover:bg-violet-100 cursor-pointer transition-all duration-300"
                        >
                          <FaArrowRight
                            size={10}
                            className="text-violet-500 mt-[1px]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <li>
                <button className="w-full bg-[#dcd4ff] text-black font-bold py-2 rounded-full flex justify-center items-center gap-2 border border-black hover:bg-[#c9bcfd] hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 mt-4">
                  CONTACT US
                  <span className="rounded-full border border-black p-1">
                    <FaArrowRight size={12} />
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
