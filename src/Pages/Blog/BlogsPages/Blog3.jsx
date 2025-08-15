// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Calendar,
//   User,
//   Folder,
//   Monitor,
//   MousePointerClick,
//   Palette,
//   LayoutDashboard,
//   Compass,
//   SmilePlus,
//   Zap,
//   Activity,
//   Star,
//   CheckCircle,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import b3 from "../../../assets/images/Blog3.png";

// const Blog3 = () => {
//   const blog = {
//     image: b3,
//     title: "🎨 Designing Seamless UX for Higher Conversions",
//     subheading:
//       "Explore our human-centered design philosophy that transforms clicks into customers through powerful, intuitive user experiences.",
//     date: "July 10, 2025",
//     author: "UX Department",
//     category: "UI/UX Design",
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

//       {/* Sections */}
//       <Section
//         icon={<Monitor className="text-[#9D8BFF]" />}
//         title="1️⃣ The UX-Conversion Connection"
//         content={[
//           "User experience (UX) isn’t just about looks—it’s about results. A smoother, more intuitive interface keeps users engaged, reduces friction, and boosts conversions.",
//         ]}
//         bullets={[
//           "📈 Improved user retention",
//           "💬 Higher engagement and satisfaction",
//           "🛒 Reduced drop-off during critical flows",
//         ]}
//       />

//       <Section
//         icon={<MousePointerClick className="text-[#9D8BFF]" />}
//         title="2️⃣ Mapping the User Journey"
//         content={[
//           "Understanding the user's journey from entry to conversion is crucial. We map user flows and behavior patterns to eliminate bottlenecks.",
//         ]}
//         bullets={[
//           "🗺️ UX research and journey mapping",
//           "🔍 Heatmap and click analysis",
//           "🎯 Funnel optimization",
//         ]}
//       />

//       <Section
//         icon={<Palette className="text-[#9D8BFF]" />}
//         title="3️⃣ Visual Hierarchy & UI Aesthetics"
//         content={[
//           "Design isn’t decoration—it’s communication. We create clear visual hierarchies that guide users intuitively through your product.",
//         ]}
//         bullets={[
//           "🎨 Strategic use of color and contrast",
//           "🔤 Consistent typography and spacing",
//           "🔘 F-pattern and Z-pattern layouts",
//         ]}
//       />

//       <Section
//         icon={<LayoutDashboard className="text-[#9D8BFF]" />}
//         title="4️⃣ Intuitive Interface Design"
//         content={[
//           "Complexity kills conversions. Our approach simplifies navigation, improves content discoverability, and ensures clear calls-to-action.",
//         ]}
//         bullets={[
//           "🔲 Minimalist interfaces",
//           "🧭 Clear menu structures",
//           "🚀 Effortless micro-interactions",
//         ]}
//       />

//       <Section
//         icon={<Compass className="text-[#9D8BFF]" />}
//         title="5️⃣ Human-Centered Interaction"
//         content={[
//           "We design for humans, not machines. Every decision is made with empathy and accessibility in mind—resulting in a more inclusive digital product.",
//         ]}
//         bullets={[
//           "🧠 Cognitive load minimization",
//           "🦻 Accessibility (WCAG) standards",
//           "🤝 Emotion-driven UX choices",
//         ]}
//       />

//       <Section
//         icon={<SmilePlus className="text-[#9D8BFF]" />}
//         title="6️⃣ Usability Testing in Real Environments"
//         content={[
//           "Guessing is out—testing is in. We gather real user feedback early and often to shape designs that perform in the wild.",
//         ]}
//         bullets={[
//           "📹 Session recordings & user feedback",
//           "🧪 A/B and multivariate testing",
//           "📊 Usability score benchmarks",
//         ]}
//       />

//       <Section
//         icon={<Zap className="text-[#9D8BFF]" />}
//         title="7️⃣ Micro-Interactions that Matter"
//         content={[
//           "Subtle animations and responsive transitions can elevate a user’s experience and make the interface feel alive and engaging.",
//         ]}
//         bullets={[
//           "⚡ Button hover/press effects",
//           "🎯 Real-time visual feedback",
//           "📲 Mobile gestures and animations",
//         ]}
//       />

//       <Section
//         icon={<Activity className="text-[#9D8BFF]" />}
//         title="8️⃣ Performance-First UX"
//         content={[
//           "Speed is a design feature. Fast-loading, mobile-optimized, and responsive experiences reduce bounce and encourage deeper interactions.",
//         ]}
//         bullets={[
//           "⚙️ Lightweight design components",
//           "📉 Lazy-loading and asset optimization",
//           "📱 Fully responsive layouts",
//         ]}
//       />

//       <Section
//         icon={<Star className="text-[#9D8BFF]" />}
//         title="9️⃣ Consistency Builds Trust"
//         content={[
//           "A unified design system ensures familiarity and trust. We enforce UI guidelines across all screens and touchpoints.",
//         ]}
//         bullets={[
//           "🎛️ Design system libraries",
//           "📚 Component reusability",
//           "📏 Pixel-perfect consistency",
//         ]}
//       />

//       <Section
//         icon={<CheckCircle className="text-[#9D8BFF]" />}
//         title="🔟 UX = Brand Identity"
//         content={[
//           "Great UX tells your story. Every element—from the loading animation to the tone of error messages—builds your brand's voice.",
//         ]}
//         bullets={[
//           "🔊 Voice and tone integration",
//           "🖼️ Brand-aligned UI components",
//           "💡 Memorable first-time user experience (FTUE)",
//         ]}
//       />

//       {/* Final Note */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         className="mt-14 bg-[#F4F0FF] p-6 rounded-xl"
//       >
//         <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
//           <CheckCircle className="text-[#9D8BFF]" />
//           Final Thoughts
//         </h2>
//         <p>
//           Seamless UX isn't a luxury—it’s the foundation of digital success. Whether you're building an app, website, or SaaS tool, prioritizing the user's experience leads to tangible business results.
//         </p>
//         <p className="mt-3 italic text-sm text-gray-600">
//           Let’s create experiences your users will love—and remember. 🚀
//         </p>
//       </motion.div>

//       {/* CTA */}
//         <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
//         {/* Back Button */}
//        <Link to="/blogs">
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

// export default Blog3;




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
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import b3 from "../../../assets/images/Blog3.png";

const Blog3 = () => {
  const blog = {
    image: b3,
    title: "Designing Seamless UX for Higher Conversions",
    subheading:
      "Discover how human-centered design philosophy transforms user interactions into meaningful engagements and drives measurable business results through intuitive digital experiences.",
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
          <Calendar className="w-4 h-4 text-purple-400" />
          {blog.date}
        </span>
        <span className="flex items-center gap-1">
          <User className="w-4 h-4 text-purple-400" />
          {blog.author}
        </span>
        <span className="flex items-center gap-1">
          <Folder className="w-4 h-4 text-purple-400" />
          {blog.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="md:text-4xl text-2xl font-[Outfit] font-bold text-gray-800 mb-3 leading-tight">
        {blog.title}
      </h1>

      <p className="text-lg mb-10">{blog.subheading}</p>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 bg-[#F9F7FF] p-6 rounded-lg border border-purple-400"
      >
        <p className="mb-3">
          In today's competitive digital landscape, user experience has become the differentiator between successful platforms and forgotten ones. Our research shows that companies investing in UX see <span className="font-semibold">2-4x higher conversion rates</span> compared to industry averages.
        </p>
        <p>
          This comprehensive guide explores the strategic principles behind creating digital experiences that don't just look beautiful, but perform exceptionally—driving engagement, retention, and revenue.
        </p>
      </motion.div>

      {/* Sections */}
      <Section
        icon={<Monitor className="text-purple-400" />}
        title="The Science Behind UX and Conversion Optimization"
        content={[
          "User experience design directly impacts your bottom line. According to Forrester Research, every dollar invested in UX yields $100 in return—an ROI of 9,900%. This staggering return comes from multiple factors:",
          "Well-designed interfaces reduce cognitive load, minimize decision fatigue, and create intuitive pathways to conversion. Our case studies demonstrate that strategic UX improvements can lift conversion rates by 30-400% depending on the starting point."
        ]}
        bullets={[
          "Increased customer retention rates (up to 75% improvement)",
          "Higher average order values through better product discovery",
          "Reduced support costs through intuitive self-service design",
          "Improved search rankings through better engagement metrics"
        ]}
      />

      <Section
        icon={<MousePointerClick className="text-purple-400" />}
        title="Strategic User Journey Mapping"
        content={[
          "Effective UX begins with deep understanding. We employ a comprehensive journey mapping process that identifies every touchpoint, pain point, and opportunity point in the user's interaction with your product.",
          "Using tools like heatmaps, scroll maps, and session recordings, we uncover hidden friction points that traditional analytics might miss. Our proprietary framework analyzes:"
        ]}
        bullets={[
          "Emotional states throughout the user journey",
          "Decision-making moments and hesitation points",
          "Technical barriers and performance bottlenecks",
          "Cross-device behavior patterns",
          "Micro-conversion opportunities"
        ]}
      />

      <Section
        icon={<Palette className="text-purple-400" />}
        title="Visual Hierarchy That Guides Decisions"
        content={[
          "Strategic visual design does more than please the eye—it directs attention and influences decisions. Our design team applies principles from cognitive psychology to create interfaces that naturally guide users toward conversion goals.",
          "We implement scientifically-proven techniques:"
        ]}
        bullets={[
          "Color psychology tailored to your brand and audience",
          "Typography hierarchy that improves content scanning by 47%",
          "Strategic white space that increases comprehension by 20%",
          "Contrast ratios optimized for both aesthetics and accessibility",
          "Visual weight distribution that emphasizes priority actions"
        ]}
      />

      <Section
        icon={<LayoutDashboard className="text-purple-400" />}
        title="Cognitive-Friendly Interface Architecture"
        content={[
          "The human brain processes visual information in predictable ways. Our interface designs leverage these natural patterns to create experiences that feel instantly familiar yet uniquely branded.",
          "We optimize for:"
        ]}
        bullets={[
          "F-pattern and Z-pattern reading behaviors",
          "Hick's Law implementation for optimal choice architecture",
          "Miller's Law application for information chunking",
          "Gestalt principles for intuitive grouping and relationships",
          "Progressive disclosure to prevent overwhelm"
        ]}
      />

      <Section
        icon={<Compass className="text-purple-400" />}
        title="Inclusive Design for Wider Reach"
        content={[
          "Accessibility isn't just compliance—it's good business. With over 1 billion people worldwide experiencing some form of disability, inclusive design expands your market reach while improving the experience for all users.",
          "Our accessibility-first approach includes:"
        ]}
        bullets={[
          "WCAG 2.1 AA compliance as baseline standard",
          "Screen reader optimization for blind users",
          "Keyboard navigation for motor-impaired users",
          "Color-blind friendly palettes",
          "Cognitive load considerations for neurodiverse users"
        ]}
      />

      <Section
        icon={<SmilePlus className="text-purple-400" />}
        title="Data-Driven Usability Validation"
        content={[
          "Assumptions have no place in modern UX design. We validate every design decision through rigorous testing methodologies that provide quantitative and qualitative insights.",
          "Our testing toolkit includes:"
        ]}
        bullets={[
          "Remote unmoderated usability testing (200+ participants)",
          "Eye-tracking studies for attention analysis",
          "A/B and multivariate testing frameworks",
          "First-click testing for navigation efficiency",
          "System Usability Scale (SUS) benchmarking"
        ]}
      />

      <Section
        icon={<Zap className="text-purple-400" />}
        title="Purposeful Microinteractions"
        content={[
          "Subtle animations and responses create a sense of direct manipulation that users find deeply satisfying. Our microinteraction design philosophy focuses on functional elegance that:"
        ]}
        bullets={[
          "Provides clear system status feedback",
          "Makes transitions between states logical",
          "Rewards user actions with satisfying responses",
          "Maintains performance (all animations under 300ms)",
          "Reflects brand personality through motion design"
        ]}
      />

      <Section
        icon={<Activity className="text-purple-400" />}
        title="Performance as a UX Feature"
        content={[
          "Speed is experience. Google's research shows that 53% of mobile users abandon sites that take longer than 3 seconds to load. Our performance optimization approach ensures your UX delivers both beauty and speed:"
        ]}
        bullets={[
          "Core Web Vitals optimization (LCP, FID, CLS)",
          "Progressive loading strategies",
          "Assets optimized for perceptual performance",
          "Conditional loading based on connection speed",
          "CDN integration for global performance"
        ]}
      />

      <Section
        icon={<Star className="text-purple-400" />}
        title="Design Systems for Consistent Excellence"
        content={[
          "Consistency builds trust and reduces cognitive load. Our design system approach creates reusable components that maintain visual harmony while allowing for creative flexibility:"
        ]}
        bullets={[
          "Atomic design methodology implementation",
          "Interactive component libraries",
          "Design token architecture",
          "Version-controlled documentation",
          "Cross-team collaboration workflows"
        ]}
      />

      <Section
        icon={<CheckCircle className="text-purple-400" />}
        title="Brand Expression Through Experience"
        content={[
          "Every interaction is a brand moment. We help craft distinctive UX personalities that make your digital products instantly recognizable while remaining intuitive:"
        ]}
        bullets={[
          "Custom illustration systems",
          "Signature interaction patterns",
          "Tone-of-voice guidelines for UI text",
          "Emotional design elements",
          "Onboarding experiences that reflect brand values"
        ]}
      />

      {/* Case Study */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 bg-gradient-to-r from-[#F4F0FF] to-[#E8E2FF] p-6 rounded-xl"
      >
        <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Activity className="text-purple-400" />
          UX Transformation in Action
        </h2>
        <p className="font-semibold mb-2">E-Commerce Platform Case Study:</p>
        <p>
          For a fashion retail client, we implemented a comprehensive UX overhaul that included:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Redesigned product discovery flows</li>
          <li>AR-powered virtual try-on feature</li>
          <li>Personalized recommendation engine</li>
          <li>Streamlined checkout process</li>
        </ul>
        <p className="mt-3">
          <span className="font-semibold">Results:</span> 142% increase in conversion rate, 38% higher average order value, and 67% reduction in cart abandonment.
        </p>
      </motion.div>

      {/* Final Note */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-14 bg-[#F4F0FF] p-6 rounded-xl border border-purple-400"
      >
        <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
          <CheckCircle className="text-purple-400" />
          The Future of UX: Where We're Heading
        </h2>
        <p>
          As technology evolves, so do user expectations. Emerging trends like voice interfaces, AI-powered personalization, and immersive AR experiences are reshaping what users consider "good" UX. 
        </p>
        <p className="mt-3">
          The constant remains: understanding human needs and behaviors will always be at the heart of effective design. By combining empathy with data, we create experiences that don't just meet expectations—they exceed them.
        </p>
        <p className="mt-3 italic text-sm text-gray-600">
          Ready to transform your digital experience? Our UX specialists can audit your current implementation and recommend data-backed improvements.
        </p>
      </motion.div>

      {/* CTA */}
      <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
        <Link to="/blogs">
          <button className="px-6 py-2 cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
            <span className="flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Back to All Blogs
            </span>
          </button>
        </Link>

        <Link to="/contact-us">
          <button className="px-6 py-2 cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
            <span className="flex items-center gap-1">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </span>
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