// // import { motion, AnimatePresence } from "framer-motion";
// // import { useEffect, useState } from "react";
// // import { FaChevronDown, FaArrowRight } from "react-icons/fa";
// // import { HiMenu, HiX } from "react-icons/hi";
// // import { Link } from "react-router-dom";
// // import logo from "../assets/images/logo.jpg";

// // const navLinks = [
// //   { label: "Home", dropdown: false, route: "/" },
// //   {
// //     label: "About Us",
// //     dropdown: true,
// //     items: [
// //       { name: "Our Team", route: "/about/our-team" },
// //       { name: "Our Story", route: "/about-us" },
// //     ],
// //   },
// //   {
// //     label: "Services",
// //     dropdown: true,
// //     items: [
// //       { name: "Design", route: "/services/design" },
// //       { name: "Development", route: "/services/development" },
// //       { name: "Marketing", route: "/services/marketing" },
// //     ],
// //   },
// //   {
// //     label: "Case Studies",
// //     dropdown: true,
// //     items: [
// //       { name: "Clients", route: "/case-studies/clients" },
// //       { name: "Projects", route: "/case-studies/projects" },
// //     ],
// //   },
// //   {
// //     label: "Industries We Serve",
// //     dropdown: true,
// //     items: [
// //       { name: "Healthcare", route: "/industries/healthcare" },
// //       { name: "Finance", route: "/industries/finance" },
// //       { name: "Retail", route: "/industries/retail" },
// //     ],
// //   },
// //   {
// //     label: "Careers",
// //     dropdown: true,
// //     items: [
// //       { name: "Openings", route: "/careers/openings" },
// //       { name: "Culture", route: "/careers/culture" },
// //     ],
// //   },
// // ];

// // export default function Navbar() {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [openDropdown, setOpenDropdown] = useState(null);
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   const toggleDropdown = (label) => {
// //     setOpenDropdown(openDropdown === label ? null : label);
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 10);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <nav
// //       className={`${
// //         isScrolled ? "bg-purple-50 shadow-md" : "bg-transparent"
// //       } sticky top-0 z-50 font-['Nunito'] transition-all duration-300`}
// //     >
// //       <div className="mx-6 py-4 flex items-center justify-between">
// //         {/* Logo */}
// //        <Link to= "/">
// //         <div className="flex items-center space-x-2">
// //           <img
// //             src="/images/logo.png"
// //             alt="Logo"
// //             className="h-12 w-12 rounded-lg bg-black"
// //           />
// //           <span className="text-2xl text-black font-['serif'] font-extrabold tracking-wide">
// //             Oz Media
// //           </span>
// //         </div>
// // </Link>
// //         {/* Desktop Menu */}
// //         <ul className="hidden lg:flex space-x-8 text-[17px] font-bold text-black">
// //           {navLinks.map((link) => (
// //             <li key={link.label} className="relative group overflow-visible">
// //               {!link.dropdown ? (
// //                 <Link
// //                   to={link.route}
// //                   className="flex items-center gap-1 relative text-black font-extrabold transition duration-300
// //                   before:absolute before:bottom-0 before:left-0 before:w-0
// //                   before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer
// //                   before:transition-all before:duration-500
// //                   hover:before:w-full"
// //                 >
// //                   {link.label}
// //                 </Link>
// //               ) : (
// //                 <>
// //                   <button
// //                     className="flex items-center gap-1 relative text-black font-extrabold transition duration-300
// //                     before:absolute before:bottom-0 before:left-0 before:w-0
// //                     before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer
// //                     before:transition-all before:duration-500
// //                     group-hover:before:w-full"
// //                   >
// //                     {link.label}
// //                     <FaChevronDown size={14} />
// //                   </button>

// //                   <ul
// //                     className="absolute top-10 left-0 bg-white backdrop-blur-sm shadow-xl border border-[#dcd4ff] py-2 w-52 rounded-xl
// //                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
// //                     transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
// //                     scale-95 group-hover:scale-100 z-50"
// //                   >
// //                     {link.items.map((item, index) => (
// //                       <Link
// //                         key={item.name}
// //                         to={item.route}
// //                         className={`flex items-center gap-2 px-4 py-2 text-md cursor-pointer transition-all duration-300
// //                           hover:bg-[#dcd4ff] hover:text-black border-b border-transparent
// //                           hover:border-[#dcd4ff] delay-${index * 75}`}
// //                       >
// //                         <FaArrowRight
// //                           size={16}
// //                           className="text-violet-400 mt-[4px]"
// //                         />
// //                         {item.name}
// //                       </Link>
// //                     ))}
// //                   </ul>
// //                 </>
// //               )}
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Contact Button */}
// //         <div className="hidden lg:block">
// // <button className="bg-[#dcd4ff] text-black font-extrabold text-sm tracking-wide py-2 hover:cursor-pointer px-8 rounded-full flex items-center gap-2 border border-gray-600 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300">
// //   CONTACT US{" "}
// //   <span className="rounded-full border border-black p-1">
// //     <FaArrowRight size={12} />
// //   </span>
// // </button>
// //         </div>

// //         {/* Mobile Menu Toggle */}
// //         <div className="lg:hidden">
// //           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
// //             {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <AnimatePresence>
// //         {mobileMenuOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             transition={{ duration: 0.4, ease: "easeInOut" }}
// //             className="lg:hidden px-4 py-4 bg-white shadow-lg rounded-lg mt-2 border border-gray-200"
// //           >
// //             <ul className="space-y-4 text-xl font-bold text-black">
// //               {navLinks.map((link) => (
// //                 <li key={link.label} className="relative">
// //                   {!link.dropdown ? (
// //                     <Link
// //                       to={link.route}
// //                       onClick={() => setMobileMenuOpen(false)} // ✅ close menu
// //                       className="block w-full py-2 px-2 rounded-md hover:bg-gray-100 transition-all duration-200"
// //                     >
// //                       {link.label}
// //                     </Link>
// //                   ) : (
// //                     <>
// //                       <button
// //                         onClick={() => toggleDropdown(link.label)}
// //                         className="w-full flex justify-between items-center py-2 px-2 rounded-md hover:bg-gray-100 transition-all duration-200"
// //                       >
// //                         {link.label}
// //                         <FaChevronDown
// //                           size={14}
// //                           className={`transition-transform duration-300 ${
// //                             openDropdown === link.label ? "rotate-180" : ""
// //                           }`}
// //                         />
// //                       </button>

// //                       {openDropdown === link.label && (
// //                         <ul className="ml-4 mt-2 space-y-4 animate-slideDown">
// //                           {link.items.map((item) => (
// //                             <Link
// //                               key={item.name}
// //                               to={item.route}
// //                               onClick={() => setMobileMenuOpen(false)} // ✅ close menu
// //                               className="flex items-center gap-2 pl-2 py-1 text-md text-gray-700 rounded-md hover:bg-violet-100 cursor-pointer transition-all duration-300"
// //                             >
// //                               <FaArrowRight
// //                                 size={10}
// //                                 className="text-violet-500 mt-[2px]"
// //                               />
// //                               {item.name}
// //                             </Link>
// //                           ))}
// //                         </ul>
// //                       )}
// //                     </>
// //                   )}
// //                 </li>
// //               ))}

// //               <li>
// //                 <button className="w-full bg-[#dcd4ff] text-black font-bold py-2 rounded-full flex justify-center items-center gap-2 border border-black hover:bg-[#c9bcfd] hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 mt-4">
// //                   CONTACT US
// //                   <span className="rounded-full border border-black p-1">
// //                     <FaArrowRight size={12} />
// //                   </span>
// //                 </button>
// //               </li>
// //             </ul>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </nav>
// //   );
// // }

// // import { motion, AnimatePresence } from "framer-motion";
// // import { useEffect, useState } from "react";
// // import { FaChevronDown, FaArrowRight } from "react-icons/fa";
// // import { HiMenu, HiX } from "react-icons/hi";
// // import { Link } from "react-router-dom";

// // const navLinks = [
// //   { label: "Home", dropdown: false, route: "/" },
// //   {
// //     label: "About Us",
// //     dropdown: true,
// //     items: [
// //       {
// //         name: "Our Team",
// //         subItems: [
// //           { name: "Leadership", route: "/about/team/leadership" },
// //           { name: "Creative", route: "/about/team/creative" },
// //         ],
// //       },
// //       { name: "Our Story", route: "/about/story" },
// //     ],
// //   },
// //   {
// //     label: "Services",
// //     dropdown: true,
// //     items: [
// //       {
// //         name: "Design",
// //         subItems: [
// //           { name: "UI/UX", route: "/services/design/ui-ux" },
// //           { name: "Branding", route: "/services/design/branding" },
// //         ],
// //       },
// //       {
// //         name: "Development",
// //         subItems: [
// //           { name: "Web", route: "/services/development/web" },
// //           { name: "Mobile", route: "/services/development/mobile" },
// //         ],
// //       },
// //       { name: "Marketing", route: "/services/marketing" },
// //     ],
// //   },
// //   {
// //     label: "Case Studies",
// //     dropdown: true,
// //     items: [
// //       { name: "Clients", route: "/case-studies/clients" },
// //       {
// //         name: "Projects",
// //         subItems: [
// //           { name: "Completed", route: "/case-studies/projects/completed" },
// //           { name: "Ongoing", route: "/case-studies/projects/ongoing" },
// //         ],
// //       },
// //     ],
// //   },
// //   {
// //     label: "Industries We Serve",
// //     dropdown: true,
// //     items: [
// //       { name: "Healthcare", route: "/industries/healthcare" },
// //       {
// //         name: "Finance",
// //         subItems: [
// //           { name: "Banking", route: "/industries/finance/banking" },
// //           { name: "Insurance", route: "/industries/finance/insurance" },
// //         ],
// //       },
// //       { name: "Retail", route: "/industries/retail" },
// //     ],
// //   },
// //   {
// //     label: "Careers",
// //     dropdown: true,
// //     items: [
// //       { name: "Openings", route: "/careers/openings" },
// //       {
// //         name: "Culture",
// //         subItems: [
// //           { name: "Work Life", route: "/careers/culture/work-life" },
// //           { name: "Growth", route: "/careers/culture/growth" },
// //         ],
// //       },
// //     ],
// //   },
// // ];

// // export default function Navbar() {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   const [openDropdown, setOpenDropdown] = useState(null);
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   const toggleDropdown = (label) => {
// //     setOpenDropdown(openDropdown === label ? null : label);
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 10);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <nav
// //       className={`${
// //         isScrolled ? "bg-purple-50 shadow-md" : "bg-transparent"
// //       } sticky top-0 z-50 font-['Nunito'] transition-all duration-300`}
// //     >
// //       <div className="mx-6 py-4 flex items-center justify-between">
// //         {/* Logo */}
// //         <Link to="/">
// //           <div className="flex items-center space-x-2">
// //             <img
// //               src="/images/logo.png"
// //               alt="Logo"
// //               className="h-12 w-12 rounded-lg bg-black"
// //             />
// //             <span className="text-2xl text-black font-['serif'] font-extrabold tracking-wide">
// //               Oz Media
// //             </span>
// //           </div>
// //         </Link>

// //         {/* Desktop Menu */}
// //         <ul className="hidden lg:flex space-x-8 text-[17px] font-bold text-black">
// //           {navLinks.map((link) => (
// //             <li key={link.label} className="relative group">
// //               {!link.dropdown ? (
// //                 <Link
// //                   to={link.route}
// //                   className="flex items-center gap-1 relative text-black font-extrabold transition duration-300
// //                   before:absolute before:bottom-0 before:left-0 before:w-0
// //                   before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer
// //                   before:transition-all before:duration-500
// //                   hover:before:w-full"
// //                 >
// //                   {link.label}
// //                 </Link>
// //               ) : (
// //                 <>
// //                   <button
// //                     className="flex items-center gap-1 relative text-black font-extrabold transition duration-300
// //                     before:absolute before:bottom-0 before:left-0 before:w-0
// //                     before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer
// //                     before:transition-all before:duration-500
// //                     group-hover:before:w-full"
// //                   >
// //                     {link.label}
// //                     <FaChevronDown size={14} />
// //                   </button>

// //                   {/* First-Level Dropdown */}
// //                   <ul className="absolute top-10 left-0 bg-white shadow-xl border border-[#dcd4ff] py-2 w-56 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 scale-95 group-hover:scale-100 z-50">
// //                     {link.items.map((item, index) => (
// //                       <div key={item.name} className="relative group/item">
// //                         {!item.subItems ? (
// //                           <Link
// //                             to={item.route}
// //                             className={`flex items-center gap-2 px-4 py-2 text-md cursor-pointer transition-all duration-300
// //                             hover:bg-[#dcd4ff] hover:text-black border-b border-transparent
// //                             hover:border-[#dcd4ff] delay-${index * 75}`}
// //                           >
// //                             <FaArrowRight
// //                               size={16}
// //                               className="text-violet-400 mt-[4px]"
// //                             />
// //                             {item.name}
// //                           </Link>
// //                         ) : (
// //                           <>
// //                             <button
// //                               className="flex items-center gap-2 px-4 py-2 text-md cursor-pointer transition-all duration-300 w-full hover:bg-[#dcd4ff] text-left"
// //                             >
// //                               <FaChevronDown size={12} />
// //                               {item.name}
// //                             </button>

// //                             {/* Sub-Sub Dropdown */}
// //                             <ul className="absolute left-[100%] top-0 bg-white border border-[#dcd4ff] shadow-xl py-2 w-48 rounded-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0 scale-95 group-hover/item:scale-100 z-50">
// //                               {item.subItems.map((sub) => (
// //                                 <Link
// //                                   key={sub.name}
// //                                   to={sub.route}
// //                                   className="block px-4 py-2 hover:bg-[#dcd4ff] text-black"
// //                                 >
// //                                   {sub.name}
// //                                 </Link>
// //                               ))}
// //                             </ul>
// //                           </>
// //                         )}
// //                       </div>
// //                     ))}
// //                   </ul>
// //                 </>
// //               )}
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Contact Button */}
// //         <div className="hidden lg:block">
// //           <button className="bg-[#dcd4ff] text-black font-extrabold text-sm tracking-wide py-2 hover:cursor-pointer px-8 rounded-full flex items-center gap-2 border border-gray-600 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300">
// //             CONTACT US
// //             <span className="rounded-full border border-black p-1">
// //               <FaArrowRight size={12} />
// //             </span>
// //           </button>
// //         </div>

// //         {/* Mobile Menu Toggle */}
// //         <div className="lg:hidden">
// //           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
// //             {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// // <AnimatePresence>
// //   {mobileMenuOpen && (
// //     <motion.div
// //       initial={{ opacity: 0, y: -20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       exit={{ opacity: 0, y: -20 }}
// //       transition={{ duration: 0.4, ease: "easeInOut" }}
// //       className="lg:hidden px-4 py-4 bg-white shadow-lg rounded-lg mt-2 border border-gray-200"
// //     >
// //       <ul className="space-y-4 text-xl font-bold text-black">
// //         {navLinks.map((link) => (
// //           <li key={link.label} className="relative">
// //             {!link.dropdown ? (
// //               <Link
// //                 to={link.route}
// //                 onClick={() => setMobileMenuOpen(false)}
// //                 className="block w-full py-2 px-2 rounded-md hover:bg-gray-100 transition-all duration-200"
// //               >
// //                 {link.label}
// //               </Link>
// //             ) : (
// //               <>
// //                 <button
// //                   onClick={() => toggleDropdown(link.label)}
// //                   className="w-full flex justify-between items-center py-2 px-2 rounded-md hover:bg-gray-100 transition-all duration-200"
// //                 >
// //                   {link.label}
// //                   <FaChevronDown
// //                     size={14}
// //                     className={`transition-transform duration-300 ${
// //                       openDropdown === link.label ? "rotate-180" : ""
// //                     }`}
// //                   />
// //                 </button>

// //                 {openDropdown === link.label && (
// //                   <ul className="ml-4 mt-2 space-y-2">
// //                     {link.items.map((item, idx) => (
// //                       <div key={item.name}>
// //                         {!item.subItems ? (
// //                           <Link
// //                             to={item.route}
// //                             onClick={() => setMobileMenuOpen(false)}
// //                             className="flex items-center gap-2 pl-2 py-1 text-md text-gray-700 rounded-md hover:bg-violet-100 cursor-pointer transition-all duration-300"
// //                           >
// //                             <FaArrowRight size={10} className="mt-[2px]" />
// //                             {item.name}
// //                           </Link>
// //                         ) : (
// //                           <>
// //                             <span className="font-semibold text-sm px-3 py-1 block">
// //                               {item.name}
// //                             </span>
// //                             <ul className="ml-4 space-y-2">
// //                               {item.subItems.map((sub) => (
// //                                 <Link
// //                                   key={sub.name}
// //                                   to={sub.route}
// //                                   onClick={() => setMobileMenuOpen(false)}
// //                                   className="block text-sm text-gray-600 pl-6 py-1 hover:bg-purple-100 rounded-md"
// //                                 >
// //                                   {sub.name}
// //                                 </Link>
// //                               ))}
// //                             </ul>
// //                           </>
// //                         )}
// //                       </div>
// //                     ))}
// //                   </ul>
// //                 )}
// //               </>
// //             )}
// //           </li>
// //         ))}
// //         <li>
// //           <button className="w-full bg-[#dcd4ff] text-black font-bold py-2 rounded-full flex justify-center items-center gap-2 border border-black hover:bg-[#c9bcfd] hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 mt-4">
// //             CONTACT US
// //             <span className="rounded-full border border-black p-1">
// //               <FaArrowRight size={12} />
// //             </span>
// //           </button>
// //         </li>
// //       </ul>
// //     </motion.div>
// //   )}
// // </AnimatePresence>

// //     </nav>
// //   );
// // }

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { FaChevronDown, FaArrowRight } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const navLinks = [
//   { label: "Home", dropdown: false, route: "/" },
//   {
//     label: "About Us",
//     dropdown: true,
//     items: [
//       {
//         name: "Our Team",
//         route: "our-team",
//       },
//       { name: "Our Story", route: "/about-us" },
//     ],
//   },
//   {
//     label: "Services",
//     dropdown: true,
//     items: [
//       { name: "IT", route: "/it-services" },
//       {
//         name: "Development",
//         subItems: [
//           { name: "Web", route: "/it-services/website-developement" },
//           {
//             name: "Mobile App",
//             route: "/it-services/mobile-application-developement",
//           },
//           { name: "Software", route: "/it-services/software-developement" },
//           {
//             name: "Graphics UI/UX",
//             route: "/it-services/graphics-uiux-developement",
//           },
//           { name: "E-commerce", route: "/it-services/e-commerce-solution" },
//           {
//             name: "Hosting & Server",
//             route: "/it-services/hosting-server-management",
//           },
//           {
//             name: "Tech Support & AMC",
//             route: "/it-services/tech-support-sollution",
//           },
//         ],
//       },
//       {
//         name: "Digital Campaigns",
//         subItems: [
//           { name: "SEO Services", route: "/services/marketing/seo-services" },
//           {
//             name: "Affliate Marketing",
//             route: "/services/marketing/affiliate-marketing",
//           },
//           {
//             name: "Content Marketing",
//             route: "/services/marketing/content-marketing",
//           },
//           { name: "Email Marketing", route: "/services/marketing/email-marketing" },
//           {
//             name: "Social Media Marketing",
//             route: "/services/marketing/social-media-marketing",
//           },

//         ],
//       },
//       { name: "Marketing ", route: "/services-digital-marketing" },
//       {
//         name: "Design",
//         subItems: [
//           { name: "UI/UX", route: "/it-services/graphics-uiux-developement" },
//           { name: "Branding", route: "/blogs/blog-article-4" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Case Studies",
//     dropdown: true,
//     items: [
//       { name: "All Projects", route: "/projects-details" },
//       {
//         name: "Recent Work",
//         subItems: [
//           {
//             name: "Healthcare SaaS Platform",
//             route: "/projects-details/inspirewall-mentalhealth-saas-platform",
//           },
//           {
//             name: "E-commerce",
//             route: "/projects-details/shopease-e-commerce-web-app",
//           },
//           {
//             name: "Digital Marketing Dashboard",
//             route: "/projects-details/leadboost-digital-marketing-dashboard",
//           },
//           {
//             name: "EduTrack-LMS",
//             route: "/projects-details/edu-track-learning-management-system",
//           },
//           {
//             name: "FitNation- Mobile App",
//             route: "/projects-details/fitnation-fitness-and-nutrition-app",
//           },
//           {
//             name: "RentRoam- Real State Platform",
//             route: "/projects-details/rentroam-real-state-rental-platofrm",
//           },
//         ],
//       },
//     ],
//   },
//   // {
//   //   label: "Industries",
//   //   dropdown: true,
//   //   items: [
//   //     { name: "Healthcare", route: "/industries/healthcare" },
//   //     {
//   //       name: "Finance",
//   //       subItems: [
//   //         { name: "Banking", route: "/industries/finance/banking" },
//   //         { name: "Insurance", route: "/industries/finance/insurance" },
//   //       ],
//   //     },
//   //     { name: "Retail", route: "/industries/retail" },
//   //   ],
//   // },
//   {
//     label: "Careers",
//     dropdown: true,
//     items: [
//       { name: "Carrier Options", route: "/careers/future-options-we-have" },
//       {
//         name: "Grow With Us",route: "/contact-us"

//       },
//       {
//         name: "24X7 Tech help ",route: "/it-services/tech-support-sollution"

//       },
//     ],
//   },
//   {
//     label: "Blogs",
//     dropdown: true,
//     items: [
//       { name: " All Blog", route: "/blogs" },
//       {
//         name: "Recent Blogs",
//         subItems: [
//           { name: "IT Tips Blog", route: "/blogs/blog-article-1" },
//           {
//             name: "Mastering Digital Marketing ",
//             route: "/blogs/blog-article-2",
//           },
//           { name: "Designing UI  ", route: "/blogs/blog-article-3" },
//           { name: "Inspiring Brands  ", route: "/blogs/blog-article-4" },
//           { name: "Creative Journey", route: "/blogs/blog-article-5" },
//           { name: "Creative Excellence", route: "/blogs/blog-article-6" },
//         ],
//       },
//     ],
//   },
// ];
// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openSubMenus, setOpenSubMenus] = useState({});
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleDropdown = (label) => {
//     setOpenDropdown((prev) => (prev === label ? null : label));
//     setOpenSubMenus({});
//   };

//   const toggleSubMenu = (itemName) => {
//     setOpenSubMenus((prev) => ({
//       ...prev,
//       [itemName]: !prev[itemName],
//     }));
//   };

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         isScrolled ? "bg-purple-50 bg-blur-xl shadow-md" : "bg-transparent"
//       } sticky top-0 z-50 font-['Nunito'] transition-all duration-300`}
//     >
//       <div className="mx-4 py-2 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/">
//           <div className="flex items-center space-x-2">
//             <img
//               src="/images/logo.png"
//               alt="Logo"
//               className="md:h-12 md:w-12 h-8 w-8 rounded-lg bg-black"
//             />
//             <span className="md:text-2xl text-xl  text-black font-['serif'] font-extrabold tracking-wide">
//               Oz Media
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex space-x-8 text-[16px] font-bold font-['Nunito'] text-black  ">
//           {navLinks.map((link) => (
//             <li
//               key={link.label}
//               className="relative group  before:absolute before:bottom-0 before:left-0 before:w-0
//                    before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer
//                    before:transition-all before:duration-500
//                    hover:before:w-full"
//             >
//               {!link.dropdown ? (
//                 <Link
//                   to={link.route}
//                   className="flex items-center gap-1 relative text-black font-extrabold hover:cursor-pointer"
//                 >
//                   {link.label}
//                 </Link>
//               ) : (
//                 <>
//                   <button className="flex items-center gap-1 relative text-black font-extrabold">
//                     {link.label} <FaChevronDown size={14} />
//                   </button>
//                   <ul className="absolute top-10 left-0 bg-white shadow-xl border border-[#dcd4ff] py-2 w-52 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                     {link.items.map((item) => (
//                       <div key={item.name} className="relative group/item">
//                         {!item.subItems ? (
//                           <Link
//                             to={item.route}
//                             className="block px-4 py-2 hover:bg-[#dcd4ff]"
//                           >
//                             <span className="flex items-center gap-2">
//                               <FaArrowRight
//                                 size={14}
//                                 className="text-violet-400 mt-[4px]"
//                               />{" "}
//                               {item.name}
//                             </span>
//                           </Link>
//                         ) : (
//                           <>
//                             <button className="w-full text-left px-4 py-2 hover:bg-[#dcd4ff] flex items-center justify-between">
//                               <span className="flex items-center gap-2">
//                                 <FaArrowRight
//                                   size={14}
//                                   className="text-violet-400 mt-[4px]"
//                                 />{" "}
//                                 {item.name}
//                               </span>
//                               <FaChevronDown size={10} />
//                             </button>
//                             <ul className="absolute left-full top-0 bg-white shadow-xl border border-[#dcd4ff] py-2 w-68 rounded-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-50">
//                               {item.subItems.map((sub) => (
//                                 <Link
//                                   key={sub.name}
//                                   to={sub.route}
//                                   className="block px-4 py-2 hover:bg-[#dcd4ff]"
//                                 >
//                                   <span className="flex items-center gap-2">
//                                     <FaArrowRight
//                                       size={14}
//                                       className="text-violet-400 mt-[4px]"
//                                     />{" "}
//                                     {sub.name}
//                                   </span>
//                                 </Link>
//                               ))}
//                             </ul>
//                           </>
//                         )}
//                       </div>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Contact Button */}
//         <div className="hidden lg:block">
//           <Link to="/contact-us">
//             <button className="bg-[#dcd4ff] text-black font-extrabold text-sm tracking-wide py-2 hover:cursor-pointer px-8 rounded-full flex items-center gap-2 border border-gray-600 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300">
//               CONTACT US{" "}
//               <span className="rounded-full border border-black p-1">
//                 <FaArrowRight size={12} />
//               </span>
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="lg:hidden">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden px-6 pb-6 max-h-[95vh] overflow-y-auto  scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-transparent"
//           >
//             <ul className="space-y-4 text-lg font-bold text-black">
//               {navLinks.map((link) => (
//                 <li key={link.label}>
//                   {!link.dropdown ? (
//                     <Link
//                       to={link.route}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="block py-2"
//                     >
//                       {link.label}
//                     </Link>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => toggleDropdown(link.label)}
//                         className="w-full flex justify-between items-center py-3"
//                       >
//                         {link.label}
//                         <FaChevronDown
//                           size={14}
//                           className={`transition-transform ${
//                             openDropdown === link.label ? "rotate-180" : ""
//                           }`}
//                         />
//                       </button>
//                       {openDropdown === link.label && (
//                         <ul className="pl-4 space-y-3">
//                           {link.items.map((item) => (
//                             <div key={item.name}>
//                               {!item.subItems ? (
//                                 <Link
//                                   to={item.route}
//                                   onClick={() => setMobileMenuOpen(false)}
//                                   className="block text-md py-1 pl-2 hover:bg-purple-100 rounded"
//                                 >
//                                   {/* <FaArrowRight className="inline-block mr-1" size={10} /> */}
//                                   <span className="flex items-center gap-2">
//                                     <FaArrowRight
//                                       size={14}
//                                       className="text-violet-400 mt-[4px]"
//                                     />{" "}
//                                     {item.name}
//                                   </span>
//                                 </Link>
//                               ) : (
//                                 <>
//                                   <button
//                                     onClick={() => toggleSubMenu(item.name)}
//                                     className="w-full text-left text-md py-1 pl-2 font-semibold flex justify-between items-center hover:bg-purple-100 rounded"
//                                   >
//                                     <span className="flex items-center gap-2">
//                                       <FaArrowRight
//                                         size={14}
//                                         className="text-violet-400 mt-[4px]"
//                                       />{" "}
//                                       {item.name}
//                                     </span>
//                                     <FaChevronDown
//                                       size={12}
//                                       className={`transition-transform ${
//                                         openSubMenus[item.name]
//                                           ? "rotate-180"
//                                           : ""
//                                       }`}
//                                     />
//                                   </button>
//                                   {openSubMenus[item.name] && (
//                                     <ul className="pl-4 space-y-2">
//                                       {item.subItems.map((sub) => (
//                                         <Link
//                                           key={sub.name}
//                                           to={sub.route}
//                                           onClick={() =>
//                                             setMobileMenuOpen(false)
//                                           }
//                                           className="block text-md py-2 pl-4 hover:bg-purple-100 rounded"
//                                         >
//                                           <span className="flex items-center gap-2">
//                                             <FaArrowRight
//                                               size={14}
//                                               className="text-violet-400 mt-[4px]"
//                                             />{" "}
//                                             {sub.name}
//                                           </span>
//                                         </Link>
//                                       ))}
//                                     </ul>
//                                   )}
//                                 </>
//                               )}
//                             </div>
//                           ))}
//                         </ul>
//                       )}
//                     </>
//                   )}
//                 </li>
//               ))}

//               {/* Contact Button */}
//               <li>
//                 <Link to="/contact-us">
//                   <button className="w-full bg-[#dcd4ff] text-black font-bold py-2 rounded-full flex justify-center items-center gap-2 border border-black hover:bg-[#c9bcfd] hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 mt-4">
//                     CONTACT US
//                     <span className="rounded-full border border-black p-1">
//                       <FaArrowRight size={12} />
//                     </span>
//                   </button>
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { FaChevronDown, FaArrowRight } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.jpg";

// const navLinks = [
//   { label: "Home", dropdown: false, route: "/" },
//   {
//     label: "About Us",
//     dropdown: true,
//     items: [
//       { name: "Our Team", route: "/about/our-team" },
//       { name: "Our Story", route: "/about-us" },
//     ],
//   },
//   {
//     label: "Services",
//     dropdown: true,
//     items: [
//       { name: "Design", route: "/services/design" },
//       { name: "Development", route: "/services/development" },
//       { name: "Marketing", route: "/services/marketing" },
//     ],
//   },
//   {
//     label: "Case Studies",
//     dropdown: true,
//     items: [
//       { name: "Clients", route: "/case-studies/clients" },
//       { name: "Projects", route: "/case-studies/projects" },
//     ],
//   },
//   {
//     label: "Industries We Serve",
//     dropdown: true,
//     items: [
//       { name: "Healthcare", route: "/industries/healthcare" },
//       { name: "Finance", route: "/industries/finance" },
//       { name: "Retail", route: "/industries/retail" },
//     ],
//   },
//   {
//     label: "Careers",
//     dropdown: true,
//     items: [
//       { name: "Openings", route: "/careers/openings" },
//       { name: "Culture", route: "/careers/culture" },
//     ],
//   },
// ];

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleDropdown = (label) => {
//     setOpenDropdown(openDropdown === label ? null : label);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         isScrolled ? "bg-purple-50 shadow-md" : "bg-transparent"
//       } sticky top-0 z-50 font-['Nunito'] transition-all duration-300`}
//     >
//       <div className="mx-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//        <Link to= "/">
//         <div className="flex items-center space-x-2">
//           <img
//             src="/images/logo.png"
//             alt="Logo"
//             className="h-12 w-12 rounded-lg bg-black"
//           />
//           <span className="text-2xl text-black font-['serif'] font-extrabold tracking-wide">
//             Oz Media
//           </span>
//         </div>
// </Link>
//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex space-x-8 text-[17px] font-bold text-black">
//           {navLinks.map((link) => (
//             <li key={link.label} className="relative group overflow-visible">
//               {!link.dropdown ? (
//                 <Link
//                   to={link.route}
//                   className="flex items-center gap-1 relative text-black font-extrabold transition duration-300
//                   before:absolute before:bottom-0 before:left-0 before:w-0
//                   before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer
//                   before:transition-all before:duration-500
//                   hover:before:w-full"
//                 >
//                   {link.label}
//                 </Link>
//               ) : (
//                 <>
//                   <button
//                     className="flex items-center gap-1 relative text-black font-extrabold transition duration-300
//                     before:absolute before:bottom-0 before:left-0 before:w-0
//                     before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer
//                     before:transition-all before:duration-500
//                     group-hover:before:w-full"
//                   >
//                     {link.label}
//                     <FaChevronDown size={14} />
//                   </button>

//                   <ul
//                     className="absolute top-10 left-0 bg-white backdrop-blur-sm shadow-xl border border-[#dcd4ff] py-2 w-52 rounded-xl
//                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
//                     transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
//                     scale-95 group-hover:scale-100 z-50"
//                   >
//                     {link.items.map((item, index) => (
//                       <Link
//                         key={item.name}
//                         to={item.route}
//                         className={`flex items-center gap-2 px-4 py-2 text-md cursor-pointer transition-all duration-300
//                           hover:bg-[#dcd4ff] hover:text-black border-b border-transparent
//                           hover:border-[#dcd4ff] delay-${index * 75}`}
//                       >
//                         <FaArrowRight
//                           size={16}
//                           className="text-violet-400 mt-[4px]"
//                         />
//                         {item.name}
//                       </Link>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Contact Button */}
//         <div className="hidden lg:block">
// <button className="bg-[#dcd4ff] text-black font-extrabold text-sm tracking-wide py-2 hover:cursor-pointer px-8 rounded-full flex items-center gap-2 border border-gray-600 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300">
//   CONTACT US{" "}
//   <span className="rounded-full border border-black p-1">
//     <FaArrowRight size={12} />
//   </span>
// </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="lg:hidden px-4 py-4 bg-white shadow-lg rounded-lg mt-2 border border-gray-200"
//           >
//             <ul className="space-y-4 text-xl font-bold text-black">
//               {navLinks.map((link) => (
//                 <li key={link.label} className="relative">
//                   {!link.dropdown ? (
//                     <Link
//                       to={link.route}
//                       onClick={() => setMobileMenuOpen(false)} // ✅ close menu
//                       className="block w-full py-2 px-2 rounded-md hover:bg-gray-100 transition-all duration-200"
//                     >
//                       {link.label}
//                     </Link>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => toggleDropdown(link.label)}
//                         className="w-full flex justify-between items-center py-2 px-2 rounded-md hover:bg-gray-100 transition-all duration-200"
//                       >
//                         {link.label}
//                         <FaChevronDown
//                           size={14}
//                           className={`transition-transform duration-300 ${
//                             openDropdown === link.label ? "rotate-180" : ""
//                           }`}
//                         />
//                       </button>

//                       {openDropdown === link.label && (
//                         <ul className="ml-4 mt-2 space-y-4 animate-slideDown">
//                           {link.items.map((item) => (
//                             <Link
//                               key={item.name}
//                               to={item.route}
//                               onClick={() => setMobileMenuOpen(false)} // ✅ close menu
//                               className="flex items-center gap-2 pl-2 py-1 text-md text-gray-700 rounded-md hover:bg-violet-100 cursor-pointer transition-all duration-300"
//                             >
//                               <FaArrowRight
//                                 size={10}
//                                 className="text-violet-500 mt-[2px]"
//                               />
//                               {item.name}
//                             </Link>
//                           ))}
//                         </ul>
//                       )}
//                     </>
//                   )}
//                 </li>
//               ))}

//               <li>
//                 <button className="w-full bg-[#dcd4ff] text-black font-bold py-2 rounded-full flex justify-center items-center gap-2 border border-black hover:bg-[#c9bcfd] hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 mt-4">
//                   CONTACT US
//                   <span className="rounded-full border border-black p-1">
//                     <FaArrowRight size={12} />
//                   </span>
//                 </button>
//               </li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { FaChevronDown, FaArrowRight } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const navLinks = [
//   { label: "Home", dropdown: false, route: "/" },
//   {
//     label: "About Us",
//     dropdown: true,
//     items: [
//       {
//         name: "Our Team",
//         subItems: [
//           { name: "Leadership", route: "/about/team/leadership" },
//           { name: "Creative", route: "/about/team/creative" },
//         ],
//       },
//       { name: "Our Story", route: "/about/story" },
//     ],
//   },
//   {
//     label: "Services",
//     dropdown: true,
//     items: [
//       {
//         name: "Design",
//         subItems: [
//           { name: "UI/UX", route: "/services/design/ui-ux" },
//           { name: "Branding", route: "/services/design/branding" },
//         ],
//       },
//       {
//         name: "Development",
//         subItems: [
//           { name: "Web", route: "/services/development/web" },
//           { name: "Mobile", route: "/services/development/mobile" },
//         ],
//       },
//       { name: "Marketing", route: "/services/marketing" },
//     ],
//   },
//   {
//     label: "Case Studies",
//     dropdown: true,
//     items: [
//       { name: "Clients", route: "/case-studies/clients" },
//       {
//         name: "Projects",
//         subItems: [
//           { name: "Completed", route: "/case-studies/projects/completed" },
//           { name: "Ongoing", route: "/case-studies/projects/ongoing" },
//         ],
//       },
//     ],
//   },
//   {
//     label: "Industries We Serve",
//     dropdown: true,
//     items: [
//       { name: "Healthcare", route: "/industries/healthcare" },
//       {
//         name: "Finance",
//         subItems: [
//           { name: "Banking", route: "/industries/finance/banking" },
//           { name: "Insurance", route: "/industries/finance/insurance" },
//         ],
//       },
//       { name: "Retail", route: "/industries/retail" },
//     ],
//   },
//   {
//     label: "Careers",
//     dropdown: true,
//     items: [
//       { name: "Openings", route: "/careers/openings" },
//       {
//         name: "Culture",
//         subItems: [
//           { name: "Work Life", route: "/careers/culture/work-life" },
//           { name: "Growth", route: "/careers/culture/growth" },
//         ],
//       },
//     ],
//   },
// ];

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleDropdown = (label) => {
//     setOpenDropdown(openDropdown === label ? null : label);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         isScrolled ? "bg-purple-50 shadow-md" : "bg-transparent"
//       } sticky top-0 z-50 font-['Nunito'] transition-all duration-300`}
//     >
//       <div className="mx-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/">
//           <div className="flex items-center space-x-2">
//             <img
//               src="/images/logo.png"
//               alt="Logo"
//               className="h-12 w-12 rounded-lg bg-black"
//             />
//             <span className="text-2xl text-black font-['serif'] font-extrabold tracking-wide">
//               Oz Media
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex space-x-8 text-[17px] font-bold text-black">
//           {navLinks.map((link) => (
//             <li key={link.label} className="relative group">
//               {!link.dropdown ? (
//                 <Link
//                   to={link.route}
//                   className="flex items-center gap-1 relative text-black font-extrabold transition duration-300
//                   before:absolute before:bottom-0 before:left-0 before:w-0
//                   before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer
//                   before:transition-all before:duration-500
//                   hover:before:w-full"
//                 >
//                   {link.label}
//                 </Link>
//               ) : (
//                 <>
//                   <button
//                     className="flex items-center gap-1 relative text-black font-extrabold transition duration-300
//                     before:absolute before:bottom-0 before:left-0 before:w-0
//                     before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer
//                     before:transition-all before:duration-500
//                     group-hover:before:w-full"
//                   >
//                     {link.label}
//                     <FaChevronDown size={14} />
//                   </button>

//                   {/* First-Level Dropdown */}
//                   <ul className="absolute top-10 left-0 bg-white shadow-xl border border-[#dcd4ff] py-2 w-56 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 scale-95 group-hover:scale-100 z-50">
//                     {link.items.map((item, index) => (
//                       <div key={item.name} className="relative group/item">
//                         {!item.subItems ? (
//                           <Link
//                             to={item.route}
//                             className={`flex items-center gap-2 px-4 py-2 text-md cursor-pointer transition-all duration-300
//                             hover:bg-[#dcd4ff] hover:text-black border-b border-transparent
//                             hover:border-[#dcd4ff] delay-${index * 75}`}
//                           >
//                             <FaArrowRight
//                               size={16}
//                               className="text-violet-400 mt-[4px]"
//                             />
//                             {item.name}
//                           </Link>
//                         ) : (
//                           <>
//                             <button
//                               className="flex items-center gap-2 px-4 py-2 text-md cursor-pointer transition-all duration-300 w-full hover:bg-[#dcd4ff] text-left"
//                             >
//                               <FaChevronDown size={12} />
//                               {item.name}
//                             </button>

//                             {/* Sub-Sub Dropdown */}
//                             <ul className="absolute left-[100%] top-0 bg-white border border-[#dcd4ff] shadow-xl py-2 w-48 rounded-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0 scale-95 group-hover/item:scale-100 z-50">
//                               {item.subItems.map((sub) => (
//                                 <Link
//                                   key={sub.name}
//                                   to={sub.route}
//                                   className="block px-4 py-2 hover:bg-[#dcd4ff] text-black"
//                                 >
//                                   {sub.name}
//                                 </Link>
//                               ))}
//                             </ul>
//                           </>
//                         )}
//                       </div>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Contact Button */}
//         <div className="hidden lg:block">
//           <button className="bg-[#dcd4ff] text-black font-extrabold text-sm tracking-wide py-2 hover:cursor-pointer px-8 rounded-full flex items-center gap-2 border border-gray-600 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300">
//             CONTACT US
//             <span className="rounded-full border border-black p-1">
//               <FaArrowRight size={12} />
//             </span>
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden">
//           <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
// <AnimatePresence>
//   {mobileMenuOpen && (
//     <motion.div
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className="lg:hidden px-4 py-4 bg-white shadow-lg rounded-lg mt-2 border border-gray-200"
//     >
//       <ul className="space-y-4 text-xl font-bold text-black">
//         {navLinks.map((link) => (
//           <li key={link.label} className="relative">
//             {!link.dropdown ? (
//               <Link
//                 to={link.route}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="block w-full py-2 px-2 rounded-md hover:bg-gray-100 transition-all duration-200"
//               >
//                 {link.label}
//               </Link>
//             ) : (
//               <>
//                 <button
//                   onClick={() => toggleDropdown(link.label)}
//                   className="w-full flex justify-between items-center py-2 px-2 rounded-md hover:bg-gray-100 transition-all duration-200"
//                 >
//                   {link.label}
//                   <FaChevronDown
//                     size={14}
//                     className={`transition-transform duration-300 ${
//                       openDropdown === link.label ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {openDropdown === link.label && (
//                   <ul className="ml-4 mt-2 space-y-2">
//                     {link.items.map((item, idx) => (
//                       <div key={item.name}>
//                         {!item.subItems ? (
//                           <Link
//                             to={item.route}
//                             onClick={() => setMobileMenuOpen(false)}
//                             className="flex items-center gap-2 pl-2 py-1 text-md text-gray-700 rounded-md hover:bg-violet-100 cursor-pointer transition-all duration-300"
//                           >
//                             <FaArrowRight size={10} className="mt-[2px]" />
//                             {item.name}
//                           </Link>
//                         ) : (
//                           <>
//                             <span className="font-semibold text-sm px-3 py-1 block">
//                               {item.name}
//                             </span>
//                             <ul className="ml-4 space-y-2">
//                               {item.subItems.map((sub) => (
//                                 <Link
//                                   key={sub.name}
//                                   to={sub.route}
//                                   onClick={() => setMobileMenuOpen(false)}
//                                   className="block text-sm text-gray-600 pl-6 py-1 hover:bg-purple-100 rounded-md"
//                                 >
//                                   {sub.name}
//                                 </Link>
//                               ))}
//                             </ul>
//                           </>
//                         )}
//                       </div>
//                     ))}
//                   </ul>
//                 )}
//               </>
//             )}
//           </li>
//         ))}
//         <li>
//           <button className="w-full bg-[#dcd4ff] text-black font-bold py-2 rounded-full flex justify-center items-center gap-2 border border-black hover:bg-[#c9bcfd] hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 mt-4">
//             CONTACT US
//             <span className="rounded-full border border-black p-1">
//               <FaArrowRight size={12} />
//             </span>
//           </button>
//         </li>
//       </ul>
//     </motion.div>
//   )}
// </AnimatePresence>

//     </nav>
//   );
// }


import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaFacebookF } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", dropdown: false, route: "/" },
  {
    label: "About Us",
    dropdown: true,
    items: [
      { name: "Our Story", route: "/about-us" },
      {
        name: "Our Team",
        route: "our-team",
      },
    ],
  },
  {
    label: "Services",
    dropdown: true,
    items: [
      { name: "IT", route: "/it-services" },
      {
        name: "Development",
        subItems: [
          { name: "Web", route: "/it-services/website-developement" },
          {
            name: "Mobile App",
            route: "/it-services/mobile-application-developement",
          },
          { name: "Software", route: "/it-services/software-developement" },
          {
            name: "Graphics UI/UX",
            route: "/it-services/graphics-uiux-developement",
          },
          { name: "E-commerce", route: "/it-services/e-commerce-solution" },
          {
            name: "Hosting & Server",
            route: "/it-services/hosting-server-management",
          },
          {
            name: "Tech Support & AMC",
            route: "/it-services/tech-support-sollution",
          },
        ],
      },
      {
        name: "Digital Campaigns",
        subItems: [
          { name: "SEO Services", route: "/services/marketing/seo-services" },
          {
            name: "Affliate Marketing",
            route: "/services/marketing/affiliate-marketing",
          },
          {
            name: "Content Marketing",
            route: "/services/marketing/content-marketing",
          },
          {
            name: "Email Marketing",
            route: "/services/marketing/email-marketing",
          },
          {
            name: "Social Media Marketing",
            route: "/services/marketing/social-media-marketing",
          },
        ],
      },
      { name: "Marketing ", route: "/services-digital-marketing" },
      {
        name: "Design",
        subItems: [
          { name: "UI/UX", route: "/it-services/graphics-uiux-developement" },
          { name: "Branding", route: "/blogs/blog-article-4" },
        ],
      },
    ],
  },
  {
    label: "Case Studies",
    dropdown: true,
    items: [
      { name: "All Projects", route: "/projects-details" },
      {
        name: "Recent Work",
        subItems: [
          {
            name: "Healthcare SaaS Platform",
            route: "/projects-details/inspirewall-mentalhealth-saas-platform",
          },
          {
            name: "E-commerce",
            route: "/projects-details/shopease-e-commerce-web-app",
          },
          {
            name: "Digital Marketing Dashboard",
            route: "/projects-details/leadboost-digital-marketing-dashboard",
          },
          {
            name: "EduTrack-LMS",
            route: "/projects-details/edu-track-learning-management-system",
          },
          {
            name: "FitNation- Mobile App",
            route: "/projects-details/fitnation-fitness-and-nutrition-app",
          },
          {
            name: "RentRoam- Real State Platform",
            route: "/projects-details/rentroam-real-state-rental-platofrm",
          },
        ],
      },
    ],
  },
  // {
  //   label: "Industries",
  //   dropdown: true,
  //   items: [
  //     { name: "Healthcare", route: "/industries/healthcare" },
  //     {
  //       name: "Finance",
  //       subItems: [
  //         { name: "Banking", route: "/industries/finance/banking" },
  //         { name: "Insurance", route: "/industries/finance/insurance" },
  //       ],
  //     },
  //     { name: "Retail", route: "/industries/retail" },
  //   ],
  // },
  {
    label: "Careers",
    dropdown: true,
    items: [
      { name: "Carrier Options", route: "/careers/future-options-we-have" },
      {
        name: "Grow With Us",
        route: "/contact-us",
      },
      {
        name: "24X7 Tech help ",
        route: "/it-services/tech-support-sollution",
      },
    ],
  },
  {
    label: "Blogs",
    dropdown: true,
    items: [
      { name: " All Blog", route: "/blogs" },
      {
        name: "Recent Blogs",
        subItems: [
          { name: "IT Tips Blog", route: "/blogs/blog-article-1" },
          {
            name: "Mastering Digital Marketing ",
            route: "/blogs/blog-article-2",
          },
          { name: "Designing UI  ", route: "/blogs/blog-article-3" },
          { name: "Inspiring Brands  ", route: "/blogs/blog-article-4" },
          { name: "Creative Journey", route: "/blogs/blog-article-5" },
          { name: "Creative Excellence", route: "/blogs/blog-article-6" },
        ],
      },
    ],
  },
];
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubMenus, setOpenSubMenus] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
    setOpenSubMenus({});
  };

  const toggleSubMenu = (itemName) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-purple-50 bg-blur-xl shadow-md" : "bg-transparent"
      } sticky top-0 z-50 font-['Nunito'] transition-all duration-300`}
    >
      <div className="mx-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="md:h-12 md:w-12 h-8 w-8 rounded-lg bg-black"
            />
            <span className="md:text-2xl text-xl  text-black font-['serif'] font-extrabold tracking-wide">
              Oz Media
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-[16px] font-bold font-['Nunito'] text-black  ">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative group  before:absolute before:bottom-0 before:left-0 before:w-0 
                   before:h-[2px] before:bg-[#dcd4ff] hover:cursor-pointer 
                   before:transition-all before:duration-500 
                   hover:before:w-full"
            >
              {!link.dropdown ? (
                <Link
                  to={link.route}
                  className="flex items-center gap-1 relative text-black font-extrabold hover:cursor-pointer"
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <button className="flex items-center gap-1 relative text-black font-extrabold">
                    {link.label} <FaChevronDown size={14} />
                  </button>
                  <ul className="absolute top-10 left-0 bg-white shadow-xl border border-[#dcd4ff] py-2 w-52 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {link.items.map((item) => (
                      <div key={item.name} className="relative group/item">
                        {!item.subItems ? (
                          <Link
                            to={item.route}
                            className="block px-4 py-2 hover:bg-[#dcd4ff]"
                          >
                            <span className="flex items-center gap-2">
                              <FaArrowRight
                                size={14}
                                className="text-violet-400 mt-[4px]"
                              />{" "}
                              {item.name}
                            </span>
                          </Link>
                        ) : (
                          <>
                            <button className="w-full text-left px-4 py-2 hover:bg-[#dcd4ff] flex items-center justify-between">
                              <span className="flex items-center gap-2">
                                <FaArrowRight
                                  size={14}
                                  className="text-violet-400 mt-[4px]"
                                />{" "}
                                {item.name}
                              </span>
                              <FaChevronDown size={10} />
                            </button>
                            <ul className="absolute left-full top-0 bg-white shadow-xl border border-[#dcd4ff] py-2 w-68 rounded-xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 z-50">
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.route}
                                  className="block px-4 py-2 hover:bg-[#dcd4ff]"
                                >
                                  <span className="flex items-center gap-2">
                                    <FaArrowRight
                                      size={14}
                                      className="text-violet-400 mt-[4px]"
                                    />{" "}
                                    {sub.name}
                                  </span>
                                </Link>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link to="/contact-us">
            <button className="bg-[#dcd4ff] text-black font-extrabold text-sm tracking-wide py-2 hover:cursor-pointer px-8 rounded-full flex items-center gap-2 border border-gray-600 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300">
              CONTACT US{" "}
              <span className="rounded-full border border-black p-1">
                <FaArrowRight size={12} />
              </span>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white z-50 overflow-y-auto shadow-xl"
            >
              {/* Cross Icon */}
              <div className="flex justify-end p-4 border-b">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-black transition-all duration-300"
                  aria-label="Close menu"
                >
                  <motion.div
                    initial={{ rotate: 0, scale: 0.7 }}
                    animate={{ rotate: 180, scale: 1 }}
                    exit={{ rotate: 0, scale: 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiX size={28} />
                  </motion.div>
                </button>
              </div>

              {/* Sidebar Menu */}
              <div className="px-6 py-4">
                <ul className="space-y-4 text-lg font-bold text-black">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      {!link.dropdown ? (
                        <Link
                          to={link.route}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => toggleDropdown(link.label)}
                            className="w-full flex justify-between items-center py-3"
                          >
                            {link.label}
                            <FaChevronDown
                              size={14}
                              className={`transition-transform ${
                                openDropdown === link.label ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {openDropdown === link.label && (
                            <ul className="pl-4 space-y-3">
                              {link.items.map((item) => (
                                <div key={item.name}>
                                  {!item.subItems ? (
                                    <Link
                                      to={item.route}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block text-md py-1 pl-2 hover:bg-purple-100 rounded"
                                    >
                                      <span className="flex items-center gap-2">
                                        <FaArrowRight
                                          size={14}
                                          className="text-violet-400 mt-[4px]"
                                        />
                                        {item.name}
                                      </span>
                                    </Link>
                                  ) : (
                                    <>
                                      <button
                                        onClick={() => toggleSubMenu(item.name)}
                                        className="w-full text-left text-md py-1 pl-2 font-semibold flex justify-between items-center hover:bg-purple-100 rounded"
                                      >
                                        <span className="flex items-center gap-2">
                                          <FaArrowRight
                                            size={14}
                                            className="text-violet-400 mt-[4px]"
                                          />
                                          {item.name}
                                        </span>
                                        <FaChevronDown
                                          size={12}
                                          className={`transition-transform ${
                                            openSubMenus[item.name]
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                        />
                                      </button>
                                      {openSubMenus[item.name] && (
                                        <ul className="pl-4 space-y-2">
                                          {item.subItems.map((sub) => (
                                            <Link
                                              key={sub.name}
                                              to={sub.route}
                                              onClick={() =>
                                                setMobileMenuOpen(false)
                                              }
                                              className="block text-md py-2 pl-4 hover:bg-purple-100 rounded"
                                            >
                                              <span className="flex items-center gap-2">
                                                <FaArrowRight
                                                  size={14}
                                                  className="text-violet-400 mt-[4px]"
                                                />
                                                {sub.name}
                                              </span>
                                            </Link>
                                          ))}
                                        </ul>
                                      )}
                                    </>
                                  )}
                                </div>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </li>
                  ))}

                  {/* Contact Button */}
                  <li>
                    <Link
                      to="/contact-us"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <button className="w-full bg-[#dcd4ff] text-black font-bold py-2   rounded-full flex justify-center items-center gap-2 border border-black hover:bg-[#c9bcfd] hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 mt-14">
                        CONTACT US
                        <span className="rounded-full border border-black p-1">
                          <FaArrowRight size={12} />
                        </span>
                      </button>
                    </Link>
                  </li>
                </ul>

                {/* Social Icons */}
<div className="mt-12 flex justify-center gap-6">
  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-gray-100 hover:bg-purple-200 transition"
  >
    <FaInstagram size={20} />
  </a>
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-gray-100 hover:bg-purple-200 transition"
  >
    <FaLinkedinIn size={20} />
  </a>
  <a
    href="https://wa.me/XXXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-gray-100 hover:bg-purple-200 transition"
  >
    <FaWhatsapp size={20} />
  </a>
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-gray-100 hover:bg-purple-200 transition"
  >
    <FaFacebookF size={20} />
  </a>
</div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
