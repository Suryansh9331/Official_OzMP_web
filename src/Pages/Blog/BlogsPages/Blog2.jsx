



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
import b2 from "../../../assets/images/Blog2.png";

const Blog2 = () => {
  const blog = {
    image: b2,
    title: "Mastering Digital Marketing in a Data-Driven World",
    subheading:
      "Unlock the potential of performance marketing, customer insights, and omnichannel strategies through the power of data analytics.",
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
          <Calendar className="w-4 h-4 text-[#E2DCFF]" />
          {blog.date}
        </span>
        <span className="flex items-center gap-1">
          <User className="w-4 h-4 text-[#E2DCFF]" />
          {blog.author}
        </span>
        <span className="flex items-center gap-1">
          <Folder className="w-4 h-4 text-[#E2DCFF]" />
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
        icon={<BarChart className="text-[#E2DCFF]" />}
        title="Data as Competitive Advantage"
        content={[
          "In the digital economy, data has become the most valuable currency. Every user interaction—from clicks and scroll depth to conversion paths—provides actionable intelligence that can transform your marketing strategy.",
          "Sophisticated data analysis enables businesses to create hyper-personalized experiences, predict market trends with greater accuracy, and optimize marketing spend for maximum ROI across all channels.",
        ]}
        bullets={[
          "Real-time analytics dashboards for performance monitoring",
          "Advanced customer segmentation for precision targeting",
          "Data-driven decision making for marketing optimization",
        ]}
      />

      {/* Section 2 - Building Omnichannel Experiences */}
      <Section
        icon={<Layers className="text-[#E2DCFF]" />}
        title="Seamless Omnichannel Integration"
        content={[
          "Today's consumers engage across multiple touchpoints before making purchasing decisions. A disjointed experience can significantly impact conversion rates and customer retention.",
          "Our omnichannel approach ensures brand consistency and message alignment across all platforms—social media, email marketing, search engines, and your website—creating a cohesive journey that guides users toward conversion.",
        ]}
        bullets={[
          "Cross-channel campaign orchestration",
          "Unified customer experience across all digital touchpoints",
          "Consistent messaging framework tailored for each platform",
        ]}
      />

      {/* Section 3 - Marketing Automation & AI */}
      <Section
        icon={<Rocket className="text-[#E2DCFF]" />}
        title="Intelligent Marketing Automation"
        content={[
          "Scalable marketing requires sophisticated automation tools powered by artificial intelligence. These technologies enable personalized engagement at scale while reducing operational overhead.",
          "We implement automated workflows that nurture leads, re-engage dormant customers, and deliver timely, relevant content—all while gathering valuable data to further refine your strategy.",
        ]}
        bullets={[
          "CRM integration with automated lead scoring",
          "Behavior-triggered email sequences",
          "Predictive analytics for trend forecasting",
        ]}
      />

      {/* Section 4 - SEO & Performance Optimization */}
      <Section
        icon={<TrendingUp className="text-[#E2DCFF]" />}
        title="Strategic SEO for Sustainable Growth"
        content={[
          "Visibility in search engines remains one of the most valuable digital assets. Our comprehensive SEO methodology combines technical excellence with content strategy to drive qualified organic traffic.",
          "We go beyond basic keyword optimization to build authoritative digital presences that withstand algorithm updates and deliver consistent results.",
        ]}
        bullets={[
          "Comprehensive technical SEO audits",
          "Content strategy aligned with search intent",
          "White-hat link building for domain authority",
        ]}
      />

      {/* Section 5 - Mobile-First Experience */}
      <Section
        icon={<MonitorSmartphone className="text-[#E2DCFF]" />}
        title="Mobile-First Digital Experiences"
        content={[
          "With mobile devices accounting for the majority of digital interactions, your mobile user experience directly impacts conversion rates and search rankings.",
          "We design mobile experiences that prioritize speed, usability, and engagement—meeting Google's Core Web Vitals standards while delivering exceptional user experiences.",
        ]}
        bullets={[
          "Responsive design with mobile-specific optimizations",
          "Performance optimization for mobile devices",
          "User testing across device types and operating systems",
        ]}
      />

      {/* Section 6 - Social Proof & Trust */}
      <Section
        icon={<ThumbsUp className="text-[#E2DCFF]" />}
        title="Leveraging Social Proof for Conversion"
        content={[
          "In an era of digital skepticism, authentic social proof has become essential for building trust and reducing purchase hesitation.",
          "We help brands systematically collect and showcase genuine customer testimonials, case studies, and user-generated content that demonstrates real-world value and results.",
        ]}
        bullets={[
          "Strategic placement of trust signals throughout the customer journey",
          "Video testimonials and case study development",
          "Review generation and management systems",
        ]}
      />

      {/* Section 7 - Results that Speak */}
      <Section
        icon={<Smile className="text-[#E2DCFF]" />}
        title="Demonstrated Marketing Success"
        content={[
          "Our data-driven approach delivers measurable impact:",
          "FinTech Client: Achieved 190% increase in conversion rates through optimized landing pages and precision retargeting.",
          "E-Commerce Brand: Generated 320% ROI on Facebook Ads within 45 days through audience segmentation and creative testing.",
        ]}
        bullets={[
          "Comprehensive performance reporting",
          "Full-funnel attribution modeling",
        ]}
      />

      {/* Final Words */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-14 bg-[#F4F0FF] p-6 rounded-xl"
      >
        <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
          <CheckCircle className="text-[#E2DCFF]" />
          Conclusion: Data-Driven Marketing Excellence
        </h2>
        <p>
          Effective digital marketing in today's landscape requires a strategic blend of analytics, technology, and creativity. By leveraging data intelligently, brands can create meaningful connections, optimize performance, and achieve sustainable growth.
        </p>
        <p className="mt-3 italic text-sm text-gray-600">
          Ready to transform your digital marketing strategy? Our team specializes in creating data-powered marketing solutions that deliver results.
        </p>
      </motion.div>

      {/* CTA */}
      <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
        <Link to="/blogs">
          <button className="px-6 py-2 cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
            <span className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to All Blogs
            </span>
          </button>
        </Link>

        <Link to="/contact-us">
          <button className="px-6 py-2 cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
            <span className="flex items-center gap-1">
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
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