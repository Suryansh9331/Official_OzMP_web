// import React from "react";
// import { Link } from "react-router-dom";
// import { Instagram, Facebook, Twitter } from "lucide-react";
// import { FaPinterest } from "react-icons/fa"; // Pinterest from react-icons

// const SidebarWidget = () => {
//   const posts = [
//     {
//       date: "October 19, 2024",
//       title: "Inspiring Brands is the a Empowering Stories",
//       img: "https://via.placeholder.com/60x60",
//       path: "/blog/inspiring-brands",
//     },
//     {
//       date: "October 19, 2024",
//       title: "Empowering Your the Creative Journey",
//       img: "https://via.placeholder.com/60x60",
//       path: "/blog/creative-journey",
//     },
//     {
//       date: "October 19, 2024",
//       title: "Creative Excellence the Beyond Boundaries",
//       img: "https://via.placeholder.com/60x60",
//       path: "/blog/beyond-boundaries",
//     },
//   ];

//   const categories = [
//     { name: "Elite Auto Services", count: 2 },
//     { name: "Imagination Forge", count: 1 },
//     { name: "Artistry Avenue", count: 3 },
//     { name: "InnovateIQ Agency", count: 4 },
//   ];

//   const tags = [
//     "Creations",
//     "Agency",
//     "VisionaryInk Studio",
//     "Inspire Scope Designs",
//     "Perfection Agency",
//   ];

//   return (
//     <div className="w-full lg:w-1/4 px-4 lg:fixed right-0 top-20 space-y-6 ">
//       {/* Popular Posts */}
//       <div
//         className="bg-white rounded-xl shadow p-5 border-l-4"
//         style={{ borderColor: "#A039E4" }}
//       >
//         <h2 className="font-outfit text-lg font-semibold mb-4">Popular Post</h2>
//         <div className="space-y-4">
//           {posts.map((post, idx) => (
//             <Link to={post.path} key={idx} className="flex gap-3 group">
//               <img
//                 src={post.img}
//                 alt="Post Thumbnail"
//                 className="w-14 h-14 rounded-md object-cover"
//               />
//               <div>
//                 <p className="text-sm text-gray-400 font-poppins">
//                   {post.date}
//                 </p>
//                 <p className="text-sm font-medium font-poppins text-black group-hover:text-[#A039E4]">
//                   {post.title}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Categories */}
//       <div
//         className="bg-white rounded-xl shadow p-5 border-l-4"
//         style={{ borderColor: "#A039E4" }}
//       >
//         <h2 className="font-outfit text-lg font-semibold mb-4">Catagory</h2>
//         <div className="space-y-3">
//           {categories.map((cat, i) => (
//             <div
//               key={i}
//               className="flex justify-between items-center border rounded-full px-4 py-2 text-sm font-poppins hover:border-[#A039E4] cursor-pointer"
//             >
//               <span>{cat.name}</span>
//               <span className="text-[#A039E4] font-semibold">{`0${cat.count}`}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Popular Tags */}
//       <div
//         className="bg-white rounded-xl shadow p-5 border-l-4"
//         style={{ borderColor: "#A039E4" }}
//       >
//         <h2 className="font-outfit text-lg font-semibold mb-4">Popular Tags</h2>
//         <div className="flex flex-wrap gap-2 font-poppins text-sm">
//           {tags.map((tag, i) => (
//             <span
//               key={i}
//               className={`px-3 py-1 rounded-full border ${
//                 i === 0
//                   ? "bg-[#A039E4] text-white border-[#A039E4]"
//                   : "text-gray-700"
//               } hover:bg-[#A039E4] hover:text-white transition-all cursor-pointer`}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Social Media */}
//       <div
//         className="bg-white rounded-xl shadow p-5 border-l-4"
//         style={{ borderColor: "#A039E4" }}
//       >
//         <h2 className="font-outfit text-lg font-semibold mb-4">Socal Media</h2>
//         <div className="flex flex-col gap-3 text-sm font-poppins text-black">
//           <a href="#" className="flex items-center gap-2 hover:text-[#A039E4]">
//             <Instagram className="text-[#A039E4]" size={16} /> Instagram
//           </a>
//           <a href="#" className="flex items-center gap-2 hover:text-[#A039E4]">
//             <FaPinterest className="text-[#A039E4]" size={16} /> Pinterest
//           </a>

//           <a href="#" className="flex items-center gap-2 hover:text-[#A039E4]">
//             <Facebook className="text-[#A039E4]" size={16} /> Facebook
//           </a>
//           <a href="#" className="flex items-center gap-2 hover:text-[#A039E4]">
//             <Twitter className="text-[#A039E4]" size={16} /> Twitter
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarWidget;



import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { FaPinterest } from "react-icons/fa"; // Pinterest from react-icons

const SidebarWidget = () => {
  const posts = [
    {
      date: "October 19, 2024",
      title: "Inspiring Brands is the a Empowering Stories",
      img: "https://via.placeholder.com/60x60",
      path: "/blog/inspiring-brands",
    },
    {
      date: "October 19, 2024",
      title: "Empowering Your the Creative Journey",
      img: "https://via.placeholder.com/60x60",
      path: "/blog/creative-journey",
    },
    {
      date: "October 19, 2024",
      title: "Creative Excellence the Beyond Boundaries",
      img: "https://via.placeholder.com/60x60",
      path: "/blog/beyond-boundaries",
    },
  ];

  const categories = [
    { name: "Elite Auto Services", count: 2 },
    { name: "Imagination Forge", count: 1 },
    { name: "Artistry Avenue", count: 3 },
    { name: "InnovateIQ Agency", count: 4 },
  ];

  const tags = [
    "Creations",
    "Agency",
    "VisionaryInk Studio",
    "Inspire Scope Designs",
    "Perfection Agency",
  ];

  return (
    <div className="w-full lg:w-1/4 px-4 space-y-6 lg:sticky top-28">
      {/* Popular Posts */}
      <div
        className="bg-white rounded-xl shadow p-5 border-l-4"
        style={{ borderColor: "#A039E4" }}
      >
        <h2 className="font-outfit text-lg font-semibold mb-4">Popular Post</h2>
        <div className="space-y-4">
          {posts.map((post, idx) => (
            <Link to={post.path} key={idx} className="flex gap-3 group">
              <img
                src={post.img}
                alt="Post Thumbnail"
                className="w-14 h-14 rounded-md object-cover"
              />
              <div>
                <p className="text-sm text-gray-400 font-poppins">
                  {post.date}
                </p>
                <p className="text-sm font-medium font-poppins text-black group-hover:text-[#A039E4]">
                  {post.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div
        className="bg-white rounded-xl shadow p-5 border-l-4"
        style={{ borderColor: "#A039E4" }}
      >
        <h2 className="font-outfit text-lg font-semibold mb-4">Catagory</h2>
        <div className="space-y-3">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="flex justify-between items-center border rounded-full px-4 py-2 text-sm font-poppins hover:border-[#A039E4] cursor-pointer"
            >
              <span>{cat.name}</span>
              <span className="text-[#A039E4] font-semibold">{`0${cat.count}`}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div
        className="bg-white rounded-xl shadow p-5 border-l-4"
        style={{ borderColor: "#A039E4" }}
      >
        <h2 className="font-outfit text-lg font-semibold mb-4">Popular Tags</h2>
        <div className="flex flex-wrap gap-2 font-poppins text-sm">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full border ${
                i === 0
                  ? "bg-[#A039E4] text-white border-[#A039E4]"
                  : "text-gray-700"
              } hover:bg-[#A039E4] hover:text-white transition-all cursor-pointer`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div
        className="bg-white rounded-xl shadow p-5 border-l-4"
        style={{ borderColor: "#A039E4" }}
      >
        <h2 className="font-outfit text-lg font-semibold mb-4">Socal Media</h2>
        <div className="flex flex-col gap-3 text-sm font-poppins text-black">
          <a href="#" className="flex items-center gap-2 hover:text-[#A039E4]">
            <Instagram className="text-[#A039E4]" size={16} /> Instagram
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#A039E4]">
            <FaPinterest className="text-[#A039E4]" size={16} /> Pinterest
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#A039E4]">
            <Facebook className="text-[#A039E4]" size={16} /> Facebook
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#A039E4]">
            <Twitter className="text-[#A039E4]" size={16} /> Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarWidget;
