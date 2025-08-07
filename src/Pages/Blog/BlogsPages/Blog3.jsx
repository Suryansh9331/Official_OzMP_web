import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  User,
  Folder,
  Monitor,
  MousePointerClick,
  Palette,
  LayoutDashboard,
  Compass,
  SmilePlus,
  Zap,
  Activity,
  Star,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import b3 from "../../../assets/images/Blog3.png";

const Blog3 = () => {
  const blog = {
    image: b3,
    title: "🎨 Designing Seamless UX for Higher Conversions",
    subheading:
      "Explore our human-centered design philosophy that transforms clicks into customers through powerful, intuitive user experiences.",
    date: "July 10, 2025",
    author: "UX Department",
    category: "UI/UX Design",
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

      {/* Sections */}
      <Section
        icon={<Monitor className="text-[#9D8BFF]" />}
        title="1️⃣ The UX-Conversion Connection"
        content={[
          "User experience (UX) isn’t just about looks—it’s about results. A smoother, more intuitive interface keeps users engaged, reduces friction, and boosts conversions.",
        ]}
        bullets={[
          "📈 Improved user retention",
          "💬 Higher engagement and satisfaction",
          "🛒 Reduced drop-off during critical flows",
        ]}
      />

      <Section
        icon={<MousePointerClick className="text-[#9D8BFF]" />}
        title="2️⃣ Mapping the User Journey"
        content={[
          "Understanding the user's journey from entry to conversion is crucial. We map user flows and behavior patterns to eliminate bottlenecks.",
        ]}
        bullets={[
          "🗺️ UX research and journey mapping",
          "🔍 Heatmap and click analysis",
          "🎯 Funnel optimization",
        ]}
      />

      <Section
        icon={<Palette className="text-[#9D8BFF]" />}
        title="3️⃣ Visual Hierarchy & UI Aesthetics"
        content={[
          "Design isn’t decoration—it’s communication. We create clear visual hierarchies that guide users intuitively through your product.",
        ]}
        bullets={[
          "🎨 Strategic use of color and contrast",
          "🔤 Consistent typography and spacing",
          "🔘 F-pattern and Z-pattern layouts",
        ]}
      />

      <Section
        icon={<LayoutDashboard className="text-[#9D8BFF]" />}
        title="4️⃣ Intuitive Interface Design"
        content={[
          "Complexity kills conversions. Our approach simplifies navigation, improves content discoverability, and ensures clear calls-to-action.",
        ]}
        bullets={[
          "🔲 Minimalist interfaces",
          "🧭 Clear menu structures",
          "🚀 Effortless micro-interactions",
        ]}
      />

      <Section
        icon={<Compass className="text-[#9D8BFF]" />}
        title="5️⃣ Human-Centered Interaction"
        content={[
          "We design for humans, not machines. Every decision is made with empathy and accessibility in mind—resulting in a more inclusive digital product.",
        ]}
        bullets={[
          "🧠 Cognitive load minimization",
          "🦻 Accessibility (WCAG) standards",
          "🤝 Emotion-driven UX choices",
        ]}
      />

      <Section
        icon={<SmilePlus className="text-[#9D8BFF]" />}
        title="6️⃣ Usability Testing in Real Environments"
        content={[
          "Guessing is out—testing is in. We gather real user feedback early and often to shape designs that perform in the wild.",
        ]}
        bullets={[
          "📹 Session recordings & user feedback",
          "🧪 A/B and multivariate testing",
          "📊 Usability score benchmarks",
        ]}
      />

      <Section
        icon={<Zap className="text-[#9D8BFF]" />}
        title="7️⃣ Micro-Interactions that Matter"
        content={[
          "Subtle animations and responsive transitions can elevate a user’s experience and make the interface feel alive and engaging.",
        ]}
        bullets={[
          "⚡ Button hover/press effects",
          "🎯 Real-time visual feedback",
          "📲 Mobile gestures and animations",
        ]}
      />

      <Section
        icon={<Activity className="text-[#9D8BFF]" />}
        title="8️⃣ Performance-First UX"
        content={[
          "Speed is a design feature. Fast-loading, mobile-optimized, and responsive experiences reduce bounce and encourage deeper interactions.",
        ]}
        bullets={[
          "⚙️ Lightweight design components",
          "📉 Lazy-loading and asset optimization",
          "📱 Fully responsive layouts",
        ]}
      />

      <Section
        icon={<Star className="text-[#9D8BFF]" />}
        title="9️⃣ Consistency Builds Trust"
        content={[
          "A unified design system ensures familiarity and trust. We enforce UI guidelines across all screens and touchpoints.",
        ]}
        bullets={[
          "🎛️ Design system libraries",
          "📚 Component reusability",
          "📏 Pixel-perfect consistency",
        ]}
      />

      <Section
        icon={<CheckCircle className="text-[#9D8BFF]" />}
        title="🔟 UX = Brand Identity"
        content={[
          "Great UX tells your story. Every element—from the loading animation to the tone of error messages—builds your brand's voice.",
        ]}
        bullets={[
          "🔊 Voice and tone integration",
          "🖼️ Brand-aligned UI components",
          "💡 Memorable first-time user experience (FTUE)",
        ]}
      />

      {/* Final Note */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-14 bg-[#F4F0FF] p-6 rounded-xl"
      >
        <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
          <CheckCircle className="text-[#9D8BFF]" />
          Final Thoughts
        </h2>
        <p>
          Seamless UX isn't a luxury—it’s the foundation of digital success. Whether you're building an app, website, or SaaS tool, prioritizing the user's experience leads to tangible business results.
        </p>
        <p className="mt-3 italic text-sm text-gray-600">
          Let’s create experiences your users will love—and remember. 🚀
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

export default Blog3;
