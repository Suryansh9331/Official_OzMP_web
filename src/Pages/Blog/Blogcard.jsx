// import React from "react";
// import { Calendar, User, Tag } from "lucide-react";
// import { Link } from "react-router-dom";

// const blogData = [
//   {
//     id: 1,
//     image: "/images/blog1.png", // replace with your actual images
//     date: "October 19, 2024",
//     author: "admin",
//     category: "Marketing",
//     title: "Transforming Businesses with AI-Powered Digital Marketing",
//     description:
//       "Discover how AI and data-driven strategies are reshaping the digital marketing landscape for IT companies. Explore automation, personalization, and real ROI.",
//   },
//   {
//     id: 2,
//     image: "/images/blog2.png",
//     date: "October 15, 2024",
//     author: "admin",
//     category: "Development",
//     title: "Why Every Business Needs a Scalable Web Solution in 2025",
//     description:
//       "Learn the key reasons why scalable web applications are crucial for modern IT service providers and how to implement one effectively.",
//   },
//   {
//     id: 3,
//     image: "/images/blog3.png",
//     date: "October 10, 2024",
//     author: "admin",
//     category: "Design & UX",
//     title: "Crafting High-Converting UI/UX for IT Product Websites",
//     description:
//       "User experience is at the heart of digital success. This article dives into the best UI/UX practices for IT product and SaaS landing pages.",
//   },
// ];

// const BlogCardList = () => {
//   return (
//     <div className="space-y-10">
//       {blogData.map((blog) => (
//         <div
//           key={blog.id}
//           className="flex flex-col lg:flex-row gap-6 bg-white p-6 rounded-xl shadow"
//         >
//           {/* Image */}
//           <div className="lg:w-1/2 w-full">
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="rounded-xl object-cover w-full"
//             />
//           </div>

//           {/* Content */}
//           <div className="lg:w-1/2 w-full flex flex-col justify-between">
//             <div className="space-y-3">
//               {/* Meta Info */}
//               <div className="flex flex-wrap gap-4 text-sm font-poppins text-gray-500 items-center">
//                 <div className="flex items-center gap-1">
//                   <Calendar size={14} /> {blog.date}
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <User size={14} /> {blog.author}
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Tag size={14} /> {blog.category}
//                 </div>
//               </div>

//               {/* Title */}
//               <h2 className="font-outfit text-xl font-semibold text-black">
//                 {blog.title}
//               </h2>

//               {/* Description */}
//               <p className="text-gray-600 font-poppins text-sm">
//                 {blog.description}
//               </p>
//             </div>

//             {/* Read More */}
//             <div className="mt-5">
//               <Link
//                 to={`/blog/${blog.id}`}
//                 className="inline-block px-6 py-2 rounded-full font-poppins text-sm font-medium text-black bg-[#DBD2FF] hover:bg-[#c5b5f5] transition-all"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogCardList;

import b1 from "../../assets/images/Blog1.png"
import b2 from "../../assets/images/Blog2.png"
import b3 from "../../assets/images/Blog3.png"

import React from "react";
import { Calendar, User, Folder } from "lucide-react";

const blogs = [
  {
    id: 1,
    image: b1,
    title: "Revolutionizing IT Services with Scalable Tech Solutions",
    description:
      "Discover how we drive digital transformation using scalable, secure, and future-ready IT infrastructure for businesses.",
    date: "August 1, 2025",
    author: "Admin",
    category: "IT Solutions",
  },
  {
    id: 2,
    image: b2,
    title: "Mastering Digital Marketing in a Data-Driven World",
    description:
      "We help brands thrive online through performance-focused strategies that blend creativity with analytics.",
    date: "July 22, 2025",
    author: "Marketing Team",
    category: "Digital Marketing",
  },
  {
    id: 3,
    image: b3,
    title: "Designing Seamless UX for Higher Conversions",
    description:
      "Explore our human-centered design approach to building intuitive digital products that maximize user engagement.",
    date: "July 10, 2025",
    author: "UX Department",
    category: "UI/UX Design",
  },
];

const BlogList = () => {
  return (
    <div className="grid gap-10 max-w-6xl mx-auto  px-4">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col "
        >
          <div className="md:w-1/2  lg:w-full ">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-contain "
            />
          </div>

          <div className="md:w-1/2 lg:w-full w-full p-10 flex flex-col justify-center">
            <div className="flex items-center text-sm text-gray-500 gap-6 mb-3 w-auto py-2 px-2 rounded-xl  border-2 border-purple-400 ">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {blog.author}
              </span>
              <span className="flex items-center gap-1">
                <Folder className="w-4 h-4" />
                {blog.category}
              </span>
            </div>

            <h2 className="text-2xl font-bold font-[Outfit] text-gray-800 mb-4 mt-2">
              {blog.title}
            </h2>

            <p className="text-gray-600 text-base font-[Poppins] mb-4">
              {blog.description}
            </p>

            <button className="mt-6 w-fit px-6 py-2 bg-[#DBD2FF] text-black font-medium shadow-[4px_4px_0px_rgb(0,0,0,0.6)] rounded-full text-sm font-[Poppins] hover:scale-105 transition-all">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
