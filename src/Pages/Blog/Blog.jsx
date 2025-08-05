import React from "react";
import bgimage from "../../assets/images/bg.png";
import blog1 from "../../assets/images/Blogbanner1.png";
import section1 from "../../assets/images/blogsection1.png";
import section2 from "../../assets/images/section2blog.png";
import section3 from "../../assets/images/section3.png";

const Blog = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full min-h-[400px] xs:min-h-[450px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[780px] flex flex-col lg:flex-row items-center pt-4 xs:pt-5 sm:pt-6 md:pt-8 lg:pt-10 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-40 justify-between gap-4 xs:gap-5 sm:gap-6 lg:gap-0"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundColor: "#DBD2FF",
        }}
      >
        <div className="font-['Archivo'] max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 xs:mb-4 md:mb-6 leading-tight">
            Stay Ahead in The Digital World
          </h1>
          <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-light text-gray-800">
            Insights, Strategies, And Updates On IT Services And Marketing That
            Matter.
          </h2>
        </div>
        <div className="mt-3 xs:mt-4 lg:mt-0 order-1 lg:order-2 flex justify-center">
          <img src={blog1} alt="Blog Banner" className="max-w-[180px] xs:max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-md w-full h-auto" />
        </div>
      </div>

      {/* Blog Sections and the right of categories in the row and in Column */}
      <div className="flex flex-col xl:flex-row xl:gap-12 2xl:gap-16 3xl:gap-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-40 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 font-['Archivo']">
        {/* Blog Sections (Main Content) */}
        <div className="flex flex-col gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 w-full xl:w-[65%]">
          {/* Section 1 */}
          <div className="rounded-lg shadow-md w-full">
            <img
              src={section1}
              alt="Web Development"
              className="bg-[#DBD2FF] h-[200px] xs:h-[220px] sm:h-[250px] md:h-[320px] lg:h-[400px] xl:h-[450px] 2xl:h-[523px] w-full object-cover rounded-t-lg"
            />
            <div className="p-3 xs:p-4 sm:p-5 md:p-6 flex flex-col items-start gap-2 xs:gap-3 md:gap-4">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Web Development</h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 opacity-70">
                Your website is your brand's face. Fast, responsive, and
                optimized web apps keep users engaged and coming back.
              </p>
              <button className="bg-[#DBD2FF] rounded-full text-xs xs:text-sm sm:text-base md:text-lg p-2 xs:p-3 sm:p-4 font-light mt-2 shadow-[3px_3px_0px_0px_black] xs:shadow-[4px_4px_0px_0px_black] sm:shadow-[6px_6px_0px_0px_black] -rotate-0.5 hover:rotate-0 hover:shadow-[6px_6px_0px_0px_black] xs:hover:shadow-[8px_8px_0px_0px_black] hover:scale-105 transition-all duration-300 ease-in-out border border-black">
                Read More
              </button>
            </div>
          </div>

          {/* Section 2 */}
          <div className="rounded-lg shadow-md w-full">
            <img
              src={section2}
              alt="Digital Marketing"
              className="bg-[#DBD2FF] h-[200px] xs:h-[220px] sm:h-[250px] md:h-[320px] lg:h-[400px] xl:h-[450px] 2xl:h-[523px] w-full object-cover rounded-t-lg"
            />
            <div className="p-3 xs:p-4 sm:p-5 md:p-6 flex flex-col items-start gap-2 xs:gap-3 md:gap-4">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Digital Marketing</h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 opacity-70">
                We help brands get noticed online using SEO, social media, email
                marketing, and data-driven ads that convert.
              </p>
              <button className="bg-[#DBD2FF] rounded-full text-xs xs:text-sm sm:text-base md:text-lg p-2 xs:p-3 sm:p-4 font-light mt-2 shadow-[3px_3px_0px_0px_black] xs:shadow-[4px_4px_0px_0px_black] sm:shadow-[6px_6px_0px_0px_black] -rotate-0.5 hover:rotate-0 hover:shadow-[6px_6px_0px_0px_black] xs:hover:shadow-[8px_8px_0px_0px_black] hover:scale-105 transition-all duration-300 ease-in-out border border-black">
                Read More
              </button>
            </div>
          </div>

          {/* Section 3 */}
          <div className="rounded-lg shadow-md w-full">
            <img
              src={section3}
              alt="UI/UX Design"
              className="bg-[#DBD2FF] h-[200px] xs:h-[220px] sm:h-[250px] md:h-[320px] lg:h-[400px] xl:h-[450px] 2xl:h-[523px] w-full object-cover rounded-t-lg"
            />
            <div className="p-3 xs:p-4 sm:p-5 md:p-6 flex flex-col items-start gap-2 xs:gap-3 md:gap-4">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">UI/UX Design</h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 opacity-70">
                We design intuitive, aesthetic interfaces that offer seamless
                user experiences across all platforms and devices.
              </p>
              <button className="bg-[#DBD2FF] rounded-full text-xs xs:text-sm sm:text-base md:text-lg p-2 xs:p-3 sm:p-4 font-light mt-2 shadow-[3px_3px_0px_0px_black] xs:shadow-[4px_4px_0px_0px_black] sm:shadow-[6px_6px_0px_0px_black] -rotate-0.5 hover:rotate-0 hover:shadow-[6px_6px_0px_0px_black] xs:hover:shadow-[8px_8px_0px_0px_black] hover:scale-105 transition-all duration-300 ease-in-out border border-black">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar (Popular Blogs, Categories, Tags, Social) */}
        <div className="mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-0 w-full xl:w-[35%]">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">Popular Blogs</h1>
          <div className="flex flex-col mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 font-semibold text-sm xs:text-base sm:text-lg md:text-xl">
            <div className="flex items-center gap-3">
              <img
                className="w-[80px] xs:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[60px] xs:h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] object-cover rounded-lg flex-shrink-0"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEjBilP-PBEbL7NAsVh5jU2PEYPgaGhh8-g&s"
                alt=""
              />
              <p className="flex-1">Frontend vs Backend – What Should You Know Before Hiring?</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-[80px] xs:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[60px] xs:h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] object-cover rounded-lg flex-shrink-0"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDKst728urVIj2K6X3AbamWVH7qi23T84EeA&s"
                alt=""
              />
              <p className="flex-1">Top 10 Lead Generation Strategies That Actually Work</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                className="w-[80px] xs:w-[90px] sm:w-[100px] md:w-[120px] lg:w-[140px] h-[60px] xs:h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] object-cover rounded-lg flex-shrink-0"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysfjLLa7cJnCDfJRBL48zqmHujG2nyFzFVQ&s"
                alt=""
              />
              <p className="flex-1">The Psychology Behind Color Choices in Web Design</p>
            </div>
          </div>

          <div className="mt-16 xs:mt-20 sm:mt-24 md:mt-28 lg:mt-30">
            <h1 className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl">Category</h1>
            <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
              {["Elite Auto Services", "Digital Agency", "App Dev", "Cloud", "AI Solutions"].map((cat, i) => (
                <p key={i} className="border border-gray-500 opacity-70 text-center text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl p-2 xs:p-3 rounded-full">
                  {cat}
                </p>
              ))}
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mt-16 xs:mt-20 sm:mt-24 md:mt-28 lg:mt-30">Popular Tags</h1>
            <div className="grid grid-cols-2 xs:grid-cols-3 mt-4 xs:mt-5 gap-2 xs:gap-3">
              {["Creations", "Tech", "Ideas", "Design", "SEO"].map((tag, i) => (
                <p key={i} className="border border-gray-600 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl p-2 xs:p-3 rounded-full text-center">
                  {tag}
                </p>
              ))}
            </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mt-16 xs:mt-20 sm:mt-24 md:mt-28 lg:mt-30">Social Media</h1>
            <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 flex flex-col gap-4 xs:gap-5 sm:gap-6 md:gap-8">
              {[
                { name: "Facebook", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3fXjA3qJg40seGn060RQaMaE1q2JLJXNWg&s" },
                { name: "Twitter X", img: "https://www.logoshape.com/wp-content/uploads/2024/02/twitter-x-vector-logo-logoshape.com_.png" },
                { name: "Instagram", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiNFtPCpgaLwF4O14R82_uxfuQ-TEAxDAqQ&s" },
                { name: "LinkedIn", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s" },
              ].map((s, i) => (
                <div key={i} className="flex font-bold text-base xs:text-lg sm:text-xl items-center gap-3 xs:gap-4">
                  <img className="h-[40px] xs:h-[45px] sm:h-[50px] w-[40px] xs:w-[45px] sm:w-[50px] rounded-full object-cover flex-shrink-0" src={s.img} alt={s.name} />
                  <p>{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;