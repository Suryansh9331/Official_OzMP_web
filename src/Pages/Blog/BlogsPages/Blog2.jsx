import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Folder,
  BarChart,
  LineChart,
  Layers,
  Rocket,
  ThumbsUp,
  TrendingUp,
  MonitorSmartphone,
  Smile,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import b2 from "../../../assets/images/Blog2.png"; // Your Blog 2 image

const Blog2 = () => {
  const blog = {
    image: b2,
    title: "📊 Mastering Digital Marketing in a Data-Driven World",
    subheading:
      "Unlock the potential of performance marketing, customer insights, and omnichannel strategies through the power of data.",
    date: "July 22, 2025",
    author: "Marketing Team",
    category: "Digital Marketing",
  };

  return (
    <div className="max-w-6xl mx-auto md:px-16 lg:px-2 px-4 py-16 font-[Poppins] text-gray-700">
      {/* Hero Image */}
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

      {/* Meta */}
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

      {/* Title */}
      <h1 className="md:text-4xl text-2xl font-[Outfit] font-bold text-gray-800 mb-3 leading-tight">
        {blog.title}
      </h1>

      <p className="text-lg mb-10">{blog.subheading}</p>

      {/* Section 1 - Data is the New Currency */}
      <Section
        icon={<BarChart className="text-[#9D8BFF]" />}
        title="1️⃣ Data is the New Currency"
        content={[
          "In today's digital world, data isn’t just helpful—it’s essential. Every click, scroll, and interaction holds key insights into customer behavior.",
          "By analyzing data, businesses gain the competitive edge to personalize content, predict trends, and maximize ROI.",
        ]}
        bullets={[
          "📉 Real-time analytics dashboards",
          "🔍 Customer segmentation & targeting",
          "📊 KPI-driven marketing performance",
        ]}
      />

      {/* Section 2 - Building Omnichannel Experiences */}
      <Section
        icon={<Layers className="text-[#9D8BFF]" />}
        title="2️⃣ Omnichannel Strategies that Convert"
        content={[
          "Your audience isn't limited to one platform—and neither should your marketing.",
          "We help brands integrate messaging across social media, email, search, and web to deliver a seamless user journey.",
        ]}
        bullets={[
          "🌐 Cross-channel campaign planning",
          "📱 Social, email, web, and SMS sync",
          "🎯 Unified messaging frameworks",
        ]}
      />

      {/* Section 3 - Marketing Automation & AI */}
      <Section
        icon={<Rocket className="text-[#9D8BFF]" />}
        title="3️⃣ Automation & AI-Driven Insights"
        content={[
          "Modern marketing requires scale—and automation makes it possible.",
          "From smart CRM workflows to automated email campaigns, we streamline processes that drive growth while reducing manual effort.",
        ]}
        bullets={[
          "🤖 CRM & email automation",
          "🔁 Retargeting and drip sequences",
          "📈 AI-backed trend forecasting",
        ]}
      />

      {/* Section 4 - SEO & Performance Optimization */}
      <Section
        icon={<TrendingUp className="text-[#9D8BFF]" />}
        title="4️⃣ SEO that Actually Performs"
        content={[
          "Being online isn't enough. You need to be *found*. Our SEO strategies combine technical fixes, content marketing, and link-building to increase visibility and drive traffic.",
        ]}
        bullets={[
          "🔍 On-page SEO & site audits",
          "📝 Keyword-optimized content",
          "🔗 Ethical backlink strategies",
        ]}
      />

      {/* Section 5 - Mobile-First Experience */}
      <Section
        icon={<MonitorSmartphone className="text-[#9D8BFF]" />}
        title="5️⃣ Mobile Optimization is Mandatory"
        content={[
          "With over 60% of web traffic coming from mobile, a responsive, lightning-fast mobile UX is no longer optional.",
          "We craft mobile-first designs that ensure a smooth, engaging journey on any screen.",
        ]}
        bullets={[
          "📱 Responsive interfaces",
          "⚡ Core Web Vitals optimization",
          "🧪 Mobile usability testing",
        ]}
      />

      {/* Section 6 - Social Proof & Trust */}
      <Section
        icon={<ThumbsUp className="text-[#9D8BFF]" />}
        title="6️⃣ Building Brand Trust with Social Proof"
        content={[
          "People trust people. We help brands collect, display, and promote real reviews, case studies, and success stories to boost credibility and conversion rates.",
        ]}
        bullets={[
          "⭐ Customer testimonials",
          "🏆 Industry case studies",
          "🎥 Video reviews and interviews",
        ]}
      />

      {/* Section 7 - Results that Speak */}
      <Section
        icon={<Smile className="text-[#9D8BFF]" />}
        title="7️⃣ Our Campaigns in Action"
        content={[
          `"Increased conversion rates by 190% through optimized landing pages and targeted retargeting." – FinTech Client`,
          `"Achieved a 320% ROI on Facebook Ads within 45 days." – DTC E-Commerce Brand`,
        ]}
        bullets={["✔️ Transparent metrics", "📊 Full-funnel attribution reporting"]}
      />

      {/* Final Words */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-14 bg-[#F4F0FF] p-6 rounded-xl"
      >
        <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
          <CheckCircle className="text-[#9D8BFF]" />
          Conclusion: Marketing that Moves the Needle
        </h2>
        <p>
          Digital marketing isn't about shouting louder—it's about speaking smarter. By combining strategy, data, and creativity, your brand can lead the digital conversation.
        </p>
        <p className="mt-3 italic text-sm text-gray-600">
          Need help scaling your brand? Let's build something impactful together. 📈
        </p>
      </motion.div>

      {/* CTA */}
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

// Reusable Section Component
const Section = ({ icon, title, content, bullets }) => {
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
      {content.map((para, idx) => (
        <p className="mb-2" key={idx}>
          {para}
        </p>
      ))}
      {bullets && (
        <ul className="list-disc ml-6 mt-4 space-y-1">
          {bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default Blog2;
