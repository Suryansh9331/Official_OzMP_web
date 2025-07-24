

// import { useState } from "react";
// import { FaChevronDown, FaArrowRight } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";
// import logo from "..//assets/images/logo.jpg";
// const navLinks = [
//   { label: "Home", dropdown: false },
//   { label: "About Us", dropdown: true, items: ["Our Team", "Our Story"] },
//   {
//     label: "Services",
//     dropdown: true,
//     items: ["Design", "Development", "Marketing"],
//   },
//   { label: "Case Studies", dropdown: true, items: ["Clients", "Projects"] },
//   {
//     label: "Industries We Serve",
//     dropdown: true,
//     items: ["Healthcare", "Finance", "Retail"],
//   },
//   { label: "Blog", dropdown: true, items: ["Articles", "News"] },
//   { label: "Careers", dropdown: true, items: ["Openings", "Culture"] },
// ];

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (label) => {
//     setOpenDropdown(openDropdown === label ? null : label);
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50 font-['Nunito']">
//       <div className=" mx-4  py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-10 w-10 rounded-lg  object-cover shadow-sm"
//           />
//           <span className="text-xl  text-black  font-['serif'] font-extrabold tracking-wide">
//             Oz Media
//           </span>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex space-x-6 text-sm font-bold text-black ">
//           {navLinks.map((link) => (
//             <li key={link.label} className="relative group overflow-visible">
//               <button
//                 className="flex items-center gap-1 relative text-black font-extrabold transition duration-300 
//        before:absolute before:bottom-0 before:left-0 before:w-0 
//        before:h-[2px] before:bg-[#dcd4ff]  hover:cursor-pointer 
//        before:transition-all before:duration-500 
//        group-hover:before:w-full"
//               >
//                 {link.label}
//                 {link.dropdown && <FaChevronDown size={12} />}
//               </button>

//               {link.dropdown && (
//                 <ul
//                   className="absolute top-10 left-0 bg-white/50 shadow-xl  border  border-[#dcd4ff] py-2 w-52 
//            opacity-0 invisible group-hover:opacity-100 group-hover:visible 
//            transition-all duration-300 transform scale-95 group-hover:scale-100 z-50"
//                 >
//                   {link.items.map((item, index) => (
//                     <li
//                       key={item}
//                       className={`px-4 py-2 hover:bg-[#dcd4ff] hover:text-black text-sm cursor-pointer transition-all duration-300 border-b border-transparent hover:border-[#dcd4ff] 
//                 delay-${index * 75}`}
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Contact Button */}
//         <div className="hidden lg:block">
//           <button className="bg-[#dcd4ff] text-black font-extrabold text-sm tracking-wide py-2 hover:cursor-pointer  px-8 rounded-full flex items-center gap-2 border  border-gray-600 hover:scale-105 transition-transform duration-300">
//             CONTACT US{" "}
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
//       {mobileMenuOpen && (
//         <div className="lg:hidden px-4 pb-4">
//           <ul className="space-y-3 text-[17.5px] font-medium text-black">
//             {navLinks.map((link) => (
//               <li key={link.label} className="relative">
//                 <button
//                   onClick={() => toggleDropdown(link.label)}
//                   className="w-full flex justify-between items-center hover:text-[#dcd4ff]"
//                 >
//                   {link.label}
//                   {link.dropdown && <FaChevronDown size={12} />}
//                 </button>
//                 {link.dropdown && openDropdown === link.label && (
//                   <ul className="mt-2 ml-2 space-y-2 text-sm animate-slideDown">
//                     {link.items.map((item) => (
//                       <li
//                         key={item}
//                         className="pl-4 py-1 hover:bg-[#dcd4ff] rounded cursor-pointer transition-all"
//                       >
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//             <li>
//               <button className="bg-[#dcd4ff] w-full text-black font-extrabold py-2 rounded-full flex justify-center items-center gap-2 mt-3 border border-black">
//                 CONTACT US{" "}
//                 <span className="rounded-full border border-black p-1">
//                   <FaArrowRight size={12} />
//                 </span>
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }



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
  { label: "Blog", dropdown: true, items: ["Articles", "News"] },
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
      <div className="mx-4 py-3 flex items-center justify-between">
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
        <ul className="hidden lg:flex space-x-6 text-sm font-bold text-black">
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
                      className={`px-4 py-2 text-sm cursor-pointer transition-all duration-300 
                        hover:bg-[#dcd4ff] hover:text-black border-b border-transparent 
                        hover:border-[#dcd4ff] delay-${index * 75}`}
                    >
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
          <button className="bg-[#dcd4ff] text-black font-extrabold text-sm tracking-wide py-2 hover:cursor-pointer px-8 rounded-full flex items-center gap-2 border border-gray-600 hover:scale-105 transition-transform duration-300">
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
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          <ul className="space-y-3 text-[17.5px] font-medium text-black">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                <button
                  onClick={() => toggleDropdown(link.label)}
                  className="w-full flex justify-between items-center hover:text-[#dcd4ff]"
                >
                  {link.label}
                  {link.dropdown && <FaChevronDown size={12} />}
                </button>
                {link.dropdown && openDropdown === link.label && (
                  <ul className="mt-2 ml-2 space-y-2 text-sm animate-slideDown">
                    {link.items.map((item, index) => (
                      <li
                        key={item}
                        className={`pl-4 py-1 hover:bg-[#dcd4ff] rounded cursor-pointer transition-all delay-${index * 75}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <button className="bg-[#dcd4ff] w-full text-black font-extrabold py-2 rounded-full flex justify-center items-center gap-2 mt-3 border border-black">
                CONTACT US{" "}
                <span className="rounded-full border border-black p-1">
                  <FaArrowRight size={12} />
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
