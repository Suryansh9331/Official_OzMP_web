// import S1 from "../../assets/images/DMS1.png";
// import S2 from "../../assets/images/DMS2.png";
// import S3 from "../../assets/images/DMS3.png";
// import S4 from "../../assets/images/DMS4.png";
// import S5 from "../../assets/images/DMS5.png";
// import Hero from "./Hero";
// import DigitalMarketingSection from "./Overview";
// import ServiceIntro from "./ServicesIntro";
// import SecondSection from "./ThreeBox";
// import LeftServiceSection from "./DmLeftServices";
// import RightServiceSection from "./DmRightServices";
// import WhatWeDo from "./WhatWeDo";
// import HowWeWork from "./HowWeWork";
// import PricingSection from "../Home/Pricing";
// import TestimonialSlider from "../../Component/Testimonial";

// const DigitalMarketing = () => {
//   return (
//     <div className=" w-full overflow-hidden">
//       <Hero />
//       <SecondSection />
//       <DigitalMarketingSection />
//       <ServiceIntro />

//       <LeftServiceSection
//         image={S1}
//         heading="Search Engine Optimization (SEO)"
//         subheading="Boost your website’s visibility on search engines with targeted keyword strategies and on-page excellence. Drive consistent, high-quality organic traffic."
//         points={[
//           "Custom static and dynamic websites tailored to your brand",
//           "Mobile and desktop responsive designs",
//           "SEO-optimized site architecture",
//           "Performance-focused for fast loading and high engagement",
//         ]}
//         buttonText="Read More"
//         buttonColor="#DBD2FF"
//       />
//       <RightServiceSection
//         image={S2}
//         heading="Social Media Marketing"
//         subheading="Designs That Communicate and Convert. We create stunning visuals and intuitive interfaces that reflect your brand and enhance user engagement."
//         points={[
//           "Custom software for various industries",
//           "ERP, CRM, and SaaS platforms using MERN, MEAN, PHP, Python",
//           "Secure and scalable backend infrastructure",
//           "Dashboard-driven solutions ready for integration",
//         ]}
//         buttonText="Read More"
//         buttonColor="#DBD2FF"
//       />

//       <LeftServiceSection
//         image={S3}
//         heading="Email Marketing"
//         subheading="Boost your website’s visibility on search engines with targeted keyword strategies and on-page excellence. Drive consistent, high-quality organic traffic."
//         points={[
//           "Custom static and dynamic websites tailored to your brand",
//           "Mobile and desktop responsive designs",
//           "SEO-optimized site architecture",
//           "Performance-focused for fast loading and high engagement",
//         ]}
//         buttonText="Read More"
//         buttonColor="#DBD2FF"
//       />

//       <RightServiceSection
//         image={S4}
//         heading="Content Marketing"
//         subheading="Designs That Communicate and Convert. We create stunning visuals and intuitive interfaces that reflect your brand and enhance user engagement."
//         points={[
//           "Custom software for various industries",
//           "ERP, CRM, and SaaS platforms using MERN, MEAN, PHP, Python",
//           "Secure and scalable backend infrastructure",
//           "Dashboard-driven solutions ready for integration",
//         ]}
//         buttonText="Read More"
//         buttonColor="#DBD2FF"
//       />

//       <LeftServiceSection
//         image={S5}
//         heading="Affiliate Marketing"
//         subheading="Boost your website’s visibility on search engines with targeted keyword strategies and on-page excellence. Drive consistent, high-quality organic traffic."
//         points={[
//           "Custom static and dynamic websites tailored to your brand",
//           "Mobile and desktop responsive designs",
//           "SEO-optimized site architecture",
//           "Performance-focused for fast loading and high engagement",
//         ]}
//         buttonText="Read More"
//         buttonColor="#DBD2FF"
//       />

//       <WhatWeDo />

//       <section className="w-full px-4 py-12 text-center">
//         {/* Main heading with emoji */}
//         <div className="flex items-center justify-center gap-2">
//           <span className="text-2xl md:text-3xl">🧩</span>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-archivo font-semibold text-black">
//             How We Work
//           </h2>
//         </div>

//         {/* Subheading */}
//         <h3 className="text-lg sm:text-xl md:text-2xl mt-4 font-poppins font-medium text-black">
//           A Collaborative, Goal-Driven Approach To Digital Success
//         </h3>

//         {/* Description */}
//         <p className="mt-4 text-sm sm:text-base font-poppins text-gray-700 max-w-4xl mx-auto leading-relaxed">
//           We Believe In Working As An Extension Of Your Team. Our Process Blends
//           Strategic Thinking, Data Insights, And Creative Execution To Build
//           Tailored Digital Marketing Campaigns That Deliver Real Results.
//         </p>
//       </section>
//       <HowWeWork />
//        <PricingSection/>
//        <TestimonialSlider/>
//     </div>
//   );
// };

// export default DigitalMarketing;



import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophia Carter",
    role: "Marketing Head",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Oz Media Planet helped us shape our brand story like no other. Truly outstanding service!",
  },
  {
    name: "Liam Thompson",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "Their expertise in digital content has elevated our presence tenfold. Highly recommended!",
  },
  {
    name: "Ava Smith",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Exceptional service, design, and delivery. Oz Media Planet delivers excellence every time.",
  },
  {
    name: "Noah Davis",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    review:
      "Working with Oz Media Planet was a game-changer. Our UX has never been better.",
  },
  {
    name: "Emily Johnson",
    role: "Business Analyst",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    review:
      "Their strategic insights helped our business scale faster than we anticipated.",
  },
  {
    name: "Oliver Martinez",
    role: "Operations Head",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    review:
      "Top-tier professionalism and unmatched creativity. I trust them with every campaign.",
  },
  {
    name: "Isabella Brown",
    role: "Growth Manager",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    review:
      "Oz Media Planet brings a perfect balance of innovation and execution.",
  },
  {
    name: "William Clark",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "They understood our vision better than we did. Game-changing partnership!",
  },
  {
    name: "Charlotte Lee",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
    review:
      "Clean, efficient, and modern work. Our development team loved collaborating with them.",
  },
  {
    name: "James White",
    role: "Chief Designer",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    review:
      "Every detail was beautifully crafted. They live and breathe design."
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const itemsPerPage = 4;
  const intervalRef = useRef(null);

  const scrollNext = () => {
    setCurrent((prev) => (prev + itemsPerPage) % testimonials.length);
  };

  const scrollPrev = () => {
    setCurrent((prev) => (prev - itemsPerPage + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(scrollNext, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const visibleTestimonials = testimonials.slice(current, current + itemsPerPage);
  if (visibleTestimonials.length < itemsPerPage) {
    visibleTestimonials.push(...testimonials.slice(0, itemsPerPage - visibleTestimonials.length));
  }

  return (
    <div className="px-4 py-12 bg-white text-center">
      <h2 className="text-4xl font-bold font-[Outfit] text-gray-900 mb-2">Our Loyal Customers Have Said</h2>
      <p className="text-gray-600 font-[Poppins] max-w-2xl mx-auto">
        Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {visibleTestimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#DBD2FE] w-full max-w-xs rounded-xl p-6 shadow-md text-left font-[Poppins] hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-3">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex gap-1 text-black">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="black" />
                ))}
              </div>
            </div>
            <p className="text-sm font-[Archivo] italic">“{t.review}”</p>
            <p className="mt-4 text-sm text-gray-700">{t.role}</p>
            <p className="text-sm font-semibold">{t.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <button
          onClick={scrollPrev}
          className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={scrollNext}
          className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
