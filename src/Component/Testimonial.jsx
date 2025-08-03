import React, { useState } from "react";
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

  const prev = () => {
    setCurrent((prev) => (prev - itemsPerPage + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setCurrent((prev) => (prev + itemsPerPage) % testimonials.length);
  };

  return (
    <div className="px-6 py-12 bg-white text-center">
      <h2 className="text-4xl font-bold font-[Outfit] text-gray-900 mb-2">Our Loyal Customers Have Said</h2>
      <p className="text-gray-600 font-[Poppins] max-w-2xl mx-auto">
        Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
      </p>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button onClick={prev} className="p-2 border rounded-full hover:bg-gray-100">
          <ArrowLeft />
        </button>
        <button onClick={next} className="p-2 border rounded-full hover:bg-gray-100">
          <ArrowRight />
        </button>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {testimonials.slice(current, current + itemsPerPage).map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#DBD2FE] w-64 rounded-xl p-6 shadow-md text-left font-[Poppins]"
          >
            <div className="flex items-center gap-3 mb-2">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
            <p className="text-sm font-[Archivo] italic">“{t.review}”</p>
            <p className="mt-4 text-sm text-gray-700">{t.role}</p>
            <p className="text-sm font-semibold">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
