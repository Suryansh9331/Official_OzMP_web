// Page 1: Inspiring Brands is Empowering Stories
import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Folder,
  Star,
  Users,
  CheckCircle,
  MessageCircle,
  Target,
  Flame,
  Heart,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import b4 from "../../../assets/images/Blog4.jpg";

const Blog4 = () => {
  const blog = {
    image: b4,
    title: "🌟 Inspiring Brands is Empowering Stories",
    subheading:
      "Behind every great brand is a story that moves people. Discover how powerful narratives build unforgettable identities.",
    date: "October 19, 2024",
    author: "Brand Team",
    category: "Branding",
  };

  return (
    <div className="max-w-6xl mx-auto md:px-16 lg:px-2 px-4 py-16 font-[Poppins] text-gray-700">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-xl overflow-hidden shadow-lg mb-10 bg-[#F4F0FF]"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto object-cover max-h-[450px]"
        />
      </motion.div>

      <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-5">
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

      <h1 className="md:text-4xl text-2xl font-[Outfit] font-bold text-gray-800 mb-3 leading-tight">
        {blog.title}
      </h1>

      <p className="text-lg mb-10">{blog.subheading}</p>

      <Section icon={<Star />} title="1️⃣ Purpose-Led Storytelling" points={["Every successful brand starts with purpose.", "Define what you stand for and why you exist."]} />
      <Section icon={<Users />} title="2️⃣ Human Connections Over Features" points={["Brands that connect emotionally perform better.", "Stories evoke trust, empathy, and loyalty."]} />
      <Section icon={<CheckCircle />} title="3️⃣ Authenticity Wins" points={["Don’t fabricate stories. Tell the truth in a compelling way.", "People crave real voices and real experiences."]} />
      <Section icon={<MessageCircle />} title="4️⃣ Consistent Messaging Across Touchpoints" points={["A unified voice across channels builds brand recognition.", "From your website to emails, the tone should align."]} />
      <Section icon={<Target />} title="5️⃣ Know Your Audience Deeply" points={["Great stories start with listening.", "Know your customer’s journey, challenges, and dreams."]} />
      <Section icon={<Flame />} title="6️⃣ Emotion Drives Decisions" points={["Rational benefits are important—but emotion converts.", "We remember how a brand made us feel."]} />
      <Section icon={<Heart />} title="7️⃣ User-Generated Content Builds Trust" points={["Encourage users to share their stories about your brand.", "Authentic social proof is priceless."]} />
      <Section icon={<TrendingUp />} title="8️⃣ Storytelling as a Growth Strategy" points={["Brand stories drive marketing, content, and product decisions.", "They influence culture internally and externally."]} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-14 bg-[#F4F0FF] p-6 rounded-xl"
      >
        <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
          <CheckCircle className="text-[#9D8BFF]" />
          Final Takeaway
        </h2>
        <p>
          Inspiring brands are built on stories worth sharing. Lead with truth, connect through emotion, and stay consistent to build a brand legacy.
        </p>
      </motion.div>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
        {/* Back Button */}
       <Link to="/blogs">
          <button className="px-6 py-2 cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
            ⬅️ Back to All Blogs
          </button>
        </Link>


        {/* Contact Us Button */}
        <Link to="/contact-us">
          <button className="px-6 py-2  cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
            Contact Us ➡️
          </button>
        </Link>
      </div>
    </div>
  );
};

const Section = ({ icon, title, points }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 flex items-center gap-2 mb-3">
        {icon} {title}
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Blog4;
