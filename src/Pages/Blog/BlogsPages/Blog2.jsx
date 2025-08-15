// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Calendar,
//   User,
//   Folder,
//   BarChart,
//   LineChart,
//   Layers,
//   Rocket,
//   ThumbsUp,
//   TrendingUp,
//   MonitorSmartphone,
//   Smile,
//   CheckCircle,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import b2 from "../../../assets/images/Blog2.png"; // Your Blog 2 image

// const Blog2 = () => {
//   const blog = {
//     image: b2,
//     title: "📊 Mastering Digital Marketing in a Data-Driven World",
//     subheading:
//       "Unlock the potential of performance marketing, customer insights, and omnichannel strategies through the power of data.",
//     date: "July 22, 2025",
//     author: "Marketing Team",
//     category: "Digital Marketing",
//   };

//   return (
//     <div className="max-w-6xl mx-auto md:px-16 lg:px-2 px-4 py-16 font-[Poppins] text-gray-700">
//       {/* Hero Image */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="rounded-xl overflow-hidden shadow-lg mb-10 bg-[#F4F0FF]"
//       >
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="w-full h-auto object-cover max-h-[450px]"
//         />
//       </motion.div>

//       {/* Meta */}
//       <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4 mb-5">
//         <span className="flex items-center gap-1">
//           <Calendar className="w-4 h-4" />
//           {blog.date}
//         </span>
//         <span className="flex items-center gap-1">
//           <User className="w-4 h-4" />
//           {blog.author}
//         </span>
//         <span className="flex items-center gap-1">
//           <Folder className="w-4 h-4" />
//           {blog.category}
//         </span>
//       </div>

//       {/* Title */}
//       <h1 className="md:text-4xl text-2xl font-[Outfit] font-bold text-gray-800 mb-3 leading-tight">
//         {blog.title}
//       </h1>

//       <p className="text-lg mb-10">{blog.subheading}</p>

//       {/* Section 1 - Data is the New Currency */}
//       <Section
//         icon={<BarChart className="text-[#9D8BFF]" />}
//         title="1️⃣ Data is the New Currency"
//         content={[
//           "In today's digital world, data isn’t just helpful—it’s essential. Every click, scroll, and interaction holds key insights into customer behavior.",
//           "By analyzing data, businesses gain the competitive edge to personalize content, predict trends, and maximize ROI.",
//         ]}
//         bullets={[
//           "📉 Real-time analytics dashboards",
//           "🔍 Customer segmentation & targeting",
//           "📊 KPI-driven marketing performance",
//         ]}
//       />

//       {/* Section 2 - Building Omnichannel Experiences */}
//       <Section
//         icon={<Layers className="text-[#9D8BFF]" />}
//         title="2️⃣ Omnichannel Strategies that Convert"
//         content={[
//           "Your audience isn't limited to one platform—and neither should your marketing.",
//           "We help brands integrate messaging across social media, email, search, and web to deliver a seamless user journey.",
//         ]}
//         bullets={[
//           "🌐 Cross-channel campaign planning",
//           "📱 Social, email, web, and SMS sync",
//           "🎯 Unified messaging frameworks",
//         ]}
//       />

//       {/* Section 3 - Marketing Automation & AI */}
//       <Section
//         icon={<Rocket className="text-[#9D8BFF]" />}
//         title="3️⃣ Automation & AI-Driven Insights"
//         content={[
//           "Modern marketing requires scale—and automation makes it possible.",
//           "From smart CRM workflows to automated email campaigns, we streamline processes that drive growth while reducing manual effort.",
//         ]}
//         bullets={[
//           "🤖 CRM & email automation",
//           "🔁 Retargeting and drip sequences",
//           "📈 AI-backed trend forecasting",
//         ]}
//       />

//       {/* Section 4 - SEO & Performance Optimization */}
//       <Section
//         icon={<TrendingUp className="text-[#9D8BFF]" />}
//         title="4️⃣ SEO that Actually Performs"
//         content={[
//           "Being online isn't enough. You need to be *found*. Our SEO strategies combine technical fixes, content marketing, and link-building to increase visibility and drive traffic.",
//         ]}
//         bullets={[
//           "🔍 On-page SEO & site audits",
//           "📝 Keyword-optimized content",
//           "🔗 Ethical backlink strategies",
//         ]}
//       />

//       {/* Section 5 - Mobile-First Experience */}
//       <Section
//         icon={<MonitorSmartphone className="text-[#9D8BFF]" />}
//         title="5️⃣ Mobile Optimization is Mandatory"
//         content={[
//           "With over 60% of web traffic coming from mobile, a responsive, lightning-fast mobile UX is no longer optional.",
//           "We craft mobile-first designs that ensure a smooth, engaging journey on any screen.",
//         ]}
//         bullets={[
//           "📱 Responsive interfaces",
//           "⚡ Core Web Vitals optimization",
//           "🧪 Mobile usability testing",
//         ]}
//       />

//       {/* Section 6 - Social Proof & Trust */}
//       <Section
//         icon={<ThumbsUp className="text-[#9D8BFF]" />}
//         title="6️⃣ Building Brand Trust with Social Proof"
//         content={[
//           "People trust people. We help brands collect, display, and promote real reviews, case studies, and success stories to boost credibility and conversion rates.",
//         ]}
//         bullets={[
//           "⭐ Customer testimonials",
//           "🏆 Industry case studies",
//           "🎥 Video reviews and interviews",
//         ]}
//       />

//       {/* Section 7 - Results that Speak */}
//       <Section
//         icon={<Smile className="text-[#9D8BFF]" />}
//         title="7️⃣ Our Campaigns in Action"
//         content={[
//           `"Increased conversion rates by 190% through optimized landing pages and targeted retargeting." – FinTech Client`,
//           `"Achieved a 320% ROI on Facebook Ads within 45 days." – DTC E-Commerce Brand`,
//         ]}
//         bullets={["✔️ Transparent metrics", "📊 Full-funnel attribution reporting"]}
//       />

//       {/* Final Words */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         className="mt-14 bg-[#F4F0FF] p-6 rounded-xl"
//       >
//         <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
//           <CheckCircle className="text-[#9D8BFF]" />
//           Conclusion: Marketing that Moves the Needle
//         </h2>
//         <p>
//           Digital marketing isn't about shouting louder—it's about speaking smarter. By combining strategy, data, and creativity, your brand can lead the digital conversation.
//         </p>
//         <p className="mt-3 italic text-sm text-gray-600">
//           Need help scaling your brand? Let's build something impactful together. 📈
//         </p>
//       </motion.div>

//       {/* CTA */}
//         <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
//         {/* Back Button */}
//         <Link to="/blogs">
//           <button className="px-6 py-2 cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
//             ⬅️ Back to All Blogs
//           </button>
//         </Link>

//         {/* Contact Us Button */}
//         <Link to="/contact-us">
//           <button className="px-6 py-2  cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
//             Contact Us ➡️
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// // Reusable Section Component
// const Section = ({ icon, title, content, bullets }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="mb-12"
//     >
//       <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 flex items-center gap-2 mb-3">
//         {icon} {title}
//       </h2>
//       {content.map((para, idx) => (
//         <p className="mb-2" key={idx}>
//           {para}
//         </p>
//       ))}
//       {bullets && (
//         <ul className="list-disc ml-6 mt-4 space-y-1">
//           {bullets.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//       )}
//     </motion.div>
//   );
// };

// export default Blog2;



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