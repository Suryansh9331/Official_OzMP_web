import React from "react";

import HeroBanner from "./Hero";
import SidebarWidget from "./Sidebar";
import BlogCardList from "./Blogcard";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <div className="max-w-full mx-auto lg:px-18 md:px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-3/4">
            <BlogCardList />
          </div>
          <SidebarWidget />
        </div>
      </div>
    </div>
  );
};

export default Blog;
