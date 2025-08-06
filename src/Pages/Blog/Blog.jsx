import React from "react";
// import bgimage from "../../assets/images/bg.png";
// import blog1 from "../../assets/images/Blogbanner1.png";
// import section1 from "../../assets/images/blogsection1.png";
// import section2 from "../../assets/images/section2blog.png";
// import section3 from "../../assets/images/section3.png";

import HeroBanner from "./Hero";
import SidebarWidget from "./Sidebar"; // Import the sidebar

const Blog = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />

      {/* Main Blog Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="w-full lg:w-3/4">
            {/* Replace this with your blog list or content */}
            <div className="bg-white shadow p-6 rounded-xl font-poppins">
              <h2 className="text-2xl font-outfit mb-4">Latest Blog Articles</h2>
              <p className="text-gray-700">[Your blog posts will go here]</p>
            </div>
          </div>

          {/* Sidebar on the Right */}
          <SidebarWidget />
        </div>
      </div>
    </div>
  );
};

export default Blog;
