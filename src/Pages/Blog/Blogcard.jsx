import React from "react";
import { Calendar, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    image: "/images/blog1.png", // replace with your actual images
    date: "October 19, 2024",
    author: "admin",
    category: "Marketing",
    title: "Transforming Businesses with AI-Powered Digital Marketing",
    description:
      "Discover how AI and data-driven strategies are reshaping the digital marketing landscape for IT companies. Explore automation, personalization, and real ROI.",
  },
  {
    id: 2,
    image: "/images/blog2.png",
    date: "October 15, 2024",
    author: "admin",
    category: "Development",
    title: "Why Every Business Needs a Scalable Web Solution in 2025",
    description:
      "Learn the key reasons why scalable web applications are crucial for modern IT service providers and how to implement one effectively.",
  },
  {
    id: 3,
    image: "/images/blog3.png",
    date: "October 10, 2024",
    author: "admin",
    category: "Design & UX",
    title: "Crafting High-Converting UI/UX for IT Product Websites",
    description:
      "User experience is at the heart of digital success. This article dives into the best UI/UX practices for IT product and SaaS landing pages.",
  },
];

const BlogCardList = () => {
  return (
    <div className="space-y-10">
      {blogData.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col lg:flex-row gap-6 bg-white p-6 rounded-xl shadow"
        >
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-xl object-cover w-full"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2 w-full flex flex-col justify-between">
            <div className="space-y-3">
              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm font-poppins text-gray-500 items-center">
                <div className="flex items-center gap-1">
                  <Calendar size={14} /> {blog.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} /> {blog.author}
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={14} /> {blog.category}
                </div>
              </div>

              {/* Title */}
              <h2 className="font-outfit text-xl font-semibold text-black">
                {blog.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 font-poppins text-sm">
                {blog.description}
              </p>
            </div>

            {/* Read More */}
            <div className="mt-5">
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block px-6 py-2 rounded-full font-poppins text-sm font-medium text-black bg-[#DBD2FF] hover:bg-[#c5b5f5] transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCardList;
