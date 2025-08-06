import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Folder,
  Cloud,
  ShieldCheck,
  Bot,
  Activity,
  TrendingUp,
  MonitorSmartphone,
  Smile,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import b1 from "../../../assets/images/Blog1.png"

const Blog1 = () => {
  const blog = {
    image: b1, // Replace with actual image
    title: "🚀 Empowering the Future: IT & Marketing Solutions for the Digital Age",
    subheading:
      "In a world powered by technology, businesses must evolve through intelligent infrastructure, digital strategies, and scalable innovation.",
    date: "August 7, 2025",
    author: "Admin Team",
    category: "Digital Transformation",
  };

  return (
    <div className="max-w-6xl mx-auto md:px-16 lg:px-2 px-4  py-16 font-[Poppins] text-gray-700  ">
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

      {/* SECTION 1 - Cloud */}
      <Section
        icon={<Cloud className="text-[#9D8BFF]" />}
        title="1️⃣ Scalable Cloud Infrastructure"
        content={[
          `Cloud computing allows businesses to move faster, reduce costs, and scale globally.`,
          `We help businesses shift from legacy systems to agile, secure cloud-based platforms like AWS, Azure, or GCP.`,
        ]}
        bullets={[
          "☁️ On-demand scalability & availability",
          "🛠️ Migration from legacy servers",
          "🔗 Microservices and containerization",
        ]}
      />

      {/* SECTION 2 - Cybersecurity */}
      <Section
        icon={<ShieldCheck className="text-[#9D8BFF]" />}
        title="2️⃣ Cybersecurity That Works, Silently"
        content={[
          `Security is no longer optional — it's business-critical.`,
          `We implement proactive defenses: firewalls, encryption, and employee security protocols.`,
        ]}
        bullets={[
          "🔒 End-to-end encryption",
          "🧠 Security awareness training",
          "🔍 Regular penetration testing",
        ]}
      />

      {/* SECTION 3 - AI & Automation */}
      <Section
        icon={<Bot className="text-[#9D8BFF]" />}
        title="3️⃣ Automation with AI-Powered Tools"
        content={[
          `From marketing to operations, automation saves time and improves precision.`,
          `Our AI tools help businesses automate emails, schedule social content, predict trends, and analyze user behavior.`,
        ]}
        bullets={[
          "🤖 Chatbots & virtual agents",
          "📈 Predictive analytics",
          "⚙️ Workflow automation tools",
        ]}
      />

      {/* SECTION 4 - Branding & Identity */}
      <Section
        icon={<Activity className="text-[#9D8BFF]" />}
        title="4️⃣ Branding that Breathes Life into Business"
        content={[
          `A strong brand isn't just a logo — it's your identity.`,
          `We help define your visual tone, messaging, and positioning across all platforms.`,
        ]}
        bullets={[
          "🎨 Logo, typography, color palette",
          "📣 Brand voice & messaging framework",
          "🌐 Website and social identity",
        ]}
      />

      {/* SECTION 5 - Marketing Strategies */}
      <Section
        icon={<TrendingUp className="text-[#9D8BFF]" />}
        title="5️⃣ Performance-Driven Marketing"
        content={[
          `Digital marketing is no longer guesswork.`,
          `Our data-driven approach ensures that every dollar spent is accounted for, optimized, and results in growth.`,
        ]}
        bullets={[
          "📊 Campaign strategy & A/B testing",
          "📈 SEO, PPC & social media ads",
          "📬 Email & funnel optimization",
        ]}
      />

      {/* SECTION 6 - Mobile-First UX/UI */}
      <Section
        icon={<MonitorSmartphone className="text-[#9D8BFF]" />}
        title="6️⃣ Designing Intuitive Mobile-First Experiences"
        content={[
          `Modern users demand lightning-fast, beautiful interfaces on every device.`,
          `We focus on mobile-first UI/UX design for max engagement and retention.`,
        ]}
        bullets={[
          "📱 Responsive design systems",
          "🧪 Usability testing & heatmaps",
          "🎯 User-centered information architecture",
        ]}
      />

      {/* SECTION 7 - Client Success Stories */}
      <Section
        icon={<Smile className="text-[#9D8BFF]" />}
        title="7️⃣ Real Client Results 🎯"
        content={[
          `"We increased online leads by 230% within 90 days." – Real Estate Tech Co.`,
          `"Our app user base doubled after a UX overhaul." – Healthcare Startup`,
        ]}
        bullets={[
          "✔️ Real outcomes with data to back them",
          "💬 Testimonials from clients who scaled",
        ]}
      />

      {/* SECTION 8 - Final Words */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-14 bg-[#F4F0FF] p-6 rounded-xl"
      >
        <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
          <CheckCircle className="text-[#9D8BFF]" />
          Wrapping Up
        </h2>
        <p>
          Innovation is the heartbeat of progress. Whether you're launching a new product, revamping your infrastructure, or optimizing your digital presence — it all starts with the right partner.
        </p>
        <p className="mt-3 italic text-sm text-gray-600">
          Let us help you shape the future of your business. 💡
        </p>
      </motion.div>

      {/* CTA */}
      <div className="mt-10">
      <Link to ="/blogs">
        <button className="px-6 py-2 bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
          ⬅️ Back to All Blogs
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

export default Blog1;
