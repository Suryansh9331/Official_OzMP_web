// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Calendar,
//   User,
//   Folder,
//   Cloud,
//   ShieldCheck,
//   Bot,
//   Activity,
//   TrendingUp,
//   MonitorSmartphone,
//   Smile,
//   CheckCircle,
//   Brush,
//   PenTool,
//   Eye,
//   BookOpen,
//   Users,
//   Zap,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import b1 from "../../../assets/images/blog6.jpg"; // Replace with actual Blog 6 image

// const Blog6 = () => {
//   const blog = {
//     image: b1,
//     title: "🎨 Creative Excellence Beyond Boundaries",
//     subheading:
//       "In today’s hyper-visual and competitive digital landscape, creativity isn’t just a skill — it’s the edge. Explore how design thinking, innovation, and storytelling create unforgettable brand experiences.",
//     date: "October 19, 2024",
//     author: "Admin Team",
//     category: "Creative Strategy",
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

//       {/* Meta Info */}
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

//       {/* Blog Title */}
//       <h1 className="md:text-4xl text-2xl font-[Outfit] font-bold text-gray-800 mb-3 leading-tight">
//         {blog.title}
//       </h1>

//       <p className="text-lg mb-10">{blog.subheading}</p>

//       {/* Blog Sections */}
//       <Section
//         icon={<Brush className="text-[#9D8BFF]" />}
//         title="1️⃣ Design Thinking: Innovation Starts with Empathy"
//         content={[
//           "Design thinking empowers brands to create solutions that are both creative and practical.",
//           "It begins with deep user understanding and ends in impactful innovation.",
//         ]}
//         bullets={[
//           "🎯 Empathize, define, ideate, prototype, test",
//           "🔁 Solve real problems creatively",
//           "🤝 Human-centered process",
//         ]}
//       />

//       <Section
//         icon={<PenTool className="text-[#9D8BFF]" />}
//         title="2️⃣ The Art of Visual Storytelling"
//         content={[
//           "Humans remember stories, not stats. Visuals help us connect emotionally.",
//           "A well-told brand story builds trust, emotion, and loyalty.",
//         ]}
//         bullets={[
//           "📖 Brand origin storytelling",
//           "🎨 Story-infused graphics",
//           "📽️ Video + motion graphics",
//         ]}
//       />

//       <Section
//         icon={<Eye className="text-[#9D8BFF]" />}
//         title="3️⃣ Building a Memorable Visual Identity"
//         content={[
//           "Your brand identity is more than a logo — it's your visual fingerprint.",
//           "Consistency and psychology make brands memorable.",
//         ]}
//         bullets={[
//           "🖼️ Logo, color palette, font pairing",
//           "🎯 Psychological design elements",
//           "📲 Multi-platform visual consistency",
//         ]}
//       />

//       <Section
//         icon={<BookOpen className="text-[#9D8BFF]" />}
//         title="4️⃣ Compelling Content Creation for Brand Growth"
//         content={[
//           "Content drives conversations. The right content drives conversions.",
//           "We create engaging, brand-aligned content that educates and excites.",
//         ]}
//         bullets={[
//           "📝 Blog posts, case studies, guides",
//           "📣 Social media storytelling",
//           "🎥 Video, animations, infographics",
//         ]}
//       />

//       <Section
//         icon={<Users className="text-[#9D8BFF]" />}
//         title="5️⃣ Community-Driven Creativity"
//         content={[
//           "Your audience isn't just a target — it's a community.",
//           "User-generated content, feedback loops, and crowd-sourced ideas make your brand human.",
//         ]}
//         bullets={[
//           "🤳 UGC campaigns",
//           "🧩 Interactive polls & stories",
//           "🧠 Creative crowdsourcing",
//         ]}
//       />

//       <Section
//         icon={<Cloud className="text-[#9D8BFF]" />}
//         title="6️⃣ Creative in the Cloud: Collaborative Design"
//         content={[
//           "Remote creative workflows are now the norm. Cloud tools boost productivity, transparency, and co-creation.",
//           "We use smart tools to bring teams and ideas together seamlessly.",
//         ]}
//         bullets={[
//           "☁️ Real-time design collaboration",
//           "🛠️ Figma, Miro, Canva Pro",
//           "🔄 Version control & idea tracking",
//         ]}
//       />

//       <Section
//         icon={<TrendingUp className="text-[#9D8BFF]" />}
//         title="7️⃣ Campaigns That Blend Data with Art"
//         content={[
//           "Data guides creativity; creativity brings data to life.",
//           "We balance performance metrics with originality for campaigns that win hearts and numbers.",
//         ]}
//         bullets={[
//           "📈 KPI-aligned creative work",
//           "🧪 A/B tested campaigns",
//           "🎯 Analytics + imagination",
//         ]}
//       />

//       <Section
//         icon={<Activity className="text-[#9D8BFF]" />}
//         title="8️⃣ Experience-First Design Approach"
//         content={[
//           "User experience is the true differentiator.",
//           "We design journeys that feel good, flow well, and work perfectly on all devices.",
//         ]}
//         bullets={[
//           "📱 Mobile-first layouts",
//           "🧪 UX testing & optimization",
//           "🧭 Intuitive navigation systems",
//         ]}
//       />

//       <Section
//         icon={<ShieldCheck className="text-[#9D8BFF]" />}
//         title="9️⃣ Ethical & Inclusive Creative Practices"
//         content={[
//           "Inclusive design means everyone feels seen and heard.",
//           "We focus on accessibility, diversity, and ethical storytelling in every asset.",
//         ]}
//         bullets={[
//           "🦽 WCAG accessibility standards",
//           "🌍 Diverse representation in visuals",
//           "🛡️ Transparent brand values",
//         ]}
//       />

//       <Section
//         icon={<Smile className="text-[#9D8BFF]" />}
//         title="🔟 Joyful Branding That Resonates"
//         content={[
//           "The most memorable brands spark joy. We infuse positive emotion into every touchpoint.",
//           "From playful animations to delightful copy — joy builds connection.",
//         ]}
//         bullets={[
//           "😊 Delightful microinteractions",
//           "✨ Brand personality through humor",
//           "🎉 Celebrate users, not just sales",
//         ]}
//       />

//       <Section
//         icon={<MonitorSmartphone className="text-[#9D8BFF]" />}
//         title="1️⃣1️⃣ Responsive & Modern Design Systems"
//         content={[
//           "Consistency builds credibility. Design systems make scaling creativity sustainable.",
//           "We build modular UI kits that keep your creative sharp, fast, and on-brand.",
//         ]}
//         bullets={[
//           "🧩 Reusable components",
//           "📐 Token-based design scaling",
//           "📱 Adaptive for every screen",
//         ]}
//       />

//       <Section
//         icon={<Zap className="text-[#9D8BFF]" />}
//         title="1️⃣2️⃣ Lightning-Speed Delivery without Compromise"
//         content={[
//           "Creativity is nothing without speed. We blend innovation with execution to meet deadlines and goals — without sacrificing quality.",
//           "Efficiency meets imagination in our workflow.",
//         ]}
//         bullets={[
//           "⚡ Agile sprints for creative tasks",
//           "🧠 Smart use of automation tools",
//           "🛠️ Streamlined feedback cycles",
//         ]}
//       />

//       {/* Wrapping Up */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         className="mt-14 bg-[#F4F0FF] p-6 rounded-xl"
//       >
//         <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
//           <CheckCircle className="text-[#9D8BFF]" />
//           Wrapping Up
//         </h2>
//         <p>
//           Creative excellence is not about trends — it's about pushing boundaries with purpose. The brands that lead tomorrow are the ones that dare to think different today.
//         </p>
//         <p className="mt-3 italic text-sm text-gray-600">
//           Ready to unlock your brand's creative potential? Let's make magic. 🚀
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

// export default Blog6;




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
  Brush,
  PenTool,
  Eye,
  BookOpen,
  Users,
  Zap,
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  HeartHandshake,
  Rocket,
  Globe,
  Gauge,
  Palette,
} from "lucide-react";
import { motion } from "framer-motion";
import b1 from "../../../assets/images/Blog6.jpg";

const Blog6 = () => {
  const blog = {
    image: b1,
    title: "Creative Excellence Beyond Boundaries",
    subheading:
      "In today's hyper-visual digital economy, creativity is the ultimate competitive advantage. Discover how forward-thinking brands leverage design thinking, strategic innovation, and emotional storytelling to create unforgettable experiences.",
    date: "October 19, 2024",
    author: "Creative Strategy Team",
    category: "Brand Innovation",
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

      {/* Meta Info */}
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

      {/* Blog Title */}
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
        <p>
          According to McKinsey research, design-led companies grow revenues and shareholder returns at nearly <span className="font-semibold">twice the rate</span> of their industry counterparts. This comprehensive guide explores the strategic frameworks and creative methodologies that drive measurable business impact through design excellence.
        </p>
      </motion.div>

      {/* Blog Sections */}
      <Section
        icon={<Brush className="text-purple-400" />}
        title="Strategic Design Thinking Framework"
        content={[
          "The Stanford d.school's design thinking methodology has become the gold standard for innovation. Our adapted framework goes beyond products to transform entire brand experiences:",
          "We implement a 6-phase approach that delivers 3-5x higher solution adoption rates compared to traditional methods."
        ]}
        bullets={[
          "Empathize: Deep-dive ethnographic research",
          "Define: Opportunity mapping sessions",
          "Ideate: Cross-functional brainstorming",
          "Prototype: Rapid experimentation cycles",
          "Test: User validation protocols",
          "Scale: Implementation roadmaps"
        ]}
      />

      <Section
        icon={<PenTool className="text-purple-400" />}
        title="Visual Storytelling Architecture"
        content={[
          "Neuroscience reveals that stories are 22x more memorable than facts alone. Our visual storytelling framework combines narrative psychology with brand strategy:"
        ]}
        bullets={[
          "Hero's Journey brand narrative development",
          "Emotional arc mapping for campaigns",
          "Visual metaphor systems",
          "Multisensory design elements",
          "Platform-specific storytelling adaptations"
        ]}
      />

      <Section
        icon={<LayoutGrid className="text-purple-400" />}
        title="Comprehensive Visual Identity Systems"
        content={[
          "A cohesive visual identity can increase brand recognition by up to 80%. We build holistic systems that go beyond logos:"
        ]}
        bullets={[
          "Brand archetype alignment",
          "Color psychology optimization",
          "Typography hierarchy systems",
          "Photographic art direction",
          "Motion design language"
        ]}
      />

      <Section
        icon={<BookOpen className="text-purple-400" />}
        title="Strategic Content Ecosystem"
        content={[
          "Content marketing generates 3x more leads than outbound marketing at 62% lower cost. Our content framework focuses on:"
        ]}
        bullets={[
          "Pillar-cluster topic architecture",
          "Search intent optimization",
          "Multiformat content repurposing",
          "Performance measurement dashboards",
          "Community-driven content creation"
        ]}
      />

      <Section
        icon={<HeartHandshake className="text-purple-400" />}
        title="Community-Centric Engagement"
        content={[
          "Brands with strong communities see 20-40% higher customer retention. Our community-building methodology includes:"
        ]}
        bullets={[
          "Advocate identification programs",
          "Co-creation platforms",
          "User-generated content ecosystems",
          "Real-world experience design",
          "Community health metrics"
        ]}
      />

      <Section
        icon={<Cloud className="text-purple-400" />}
        title="Cloud-Based Creative Workflows"
        content={[
          "Distributed teams using cloud tools show 25% higher productivity. Our optimized creative stack includes:"
        ]}
        bullets={[
          "Real-time design collaboration platforms",
          "Digital asset management systems",
          "Creative workflow automation",
          "Cross-functional visibility tools",
          "Version control protocols"
        ]}
      />

      <Section
        icon={<TrendingUp className="text-purple-400" />}
        title="Data-Informed Creative Development"
        content={[
          "Creative teams using data insights achieve 67% higher campaign performance. Our analytics integration covers:"
        ]}
        bullets={[
          "Creative performance benchmarking",
          "Multivariate testing frameworks",
          "Emotional response measurement",
          "Predictive creative modeling",
          "ROI attribution modeling"
        ]}
      />

      <Section
        icon={<Rocket className="text-purple-400" />}
        title="Experience-Led Design Principles"
        content={[
          "Superior UX design can increase conversion rates by 400%. Our experience framework focuses on:"
        ]}
        bullets={[
          "Cognitive load optimization",
          "Frictionless journey mapping",
          "Accessibility-first development",
          "Microinteraction design systems",
          "Performance-based design standards"
        ]}
      />

      <Section
        icon={<Globe className="text-purple-400" />}
        title="Inclusive Design Standards"
        content={[
          "Inclusive brands see 35% better performance in diverse markets. Our inclusion protocols include:"
        ]}
        bullets={[
          "WCAG 2.1 AA compliance auditing",
          "Cultural localization frameworks",
          "Representation guidelines",
          "Bias-free language systems",
          "Universal design principles"
        ]}
      />

      <Section
        icon={<Palette className="text-purple-400" />}
        title="Emotional Design Systems"
        content={[
          "Emotionally engaging designs drive 3x more conversions. Our emotional design methodology:"
        ]}
        bullets={[
          "Brand feeling articulation",
          "Color emotion mapping",
          "Haptic feedback design",
          "Sonic branding integration",
          "Delight moment planning"
        ]}
      />

      <Section
        icon={<Gauge className="text-purple-400" />}
        title="Design Operations Optimization"
        content={[
          "Mature design ops practices reduce time-to-market by 50%. Our operational frameworks include:"
        ]}
        bullets={[
          "Component-based design systems",
          "Creative workflow automation",
          "Resource allocation modeling",
          "Capacity planning tools",
          "Performance benchmarking"
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
          <Rocket className="text-purple-400" />
          Creative Transformation in Action
        </h2>
        <p className="font-semibold mb-2">Global Retail Brand Case Study:</p>
        <p>
          For a Fortune 500 retailer, we implemented a comprehensive creative excellence program:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Enterprise design system development</li>
          <li>Omnichannel storytelling framework</li>
          <li>Data-driven creative optimization</li>
          <li>Inclusive design certification</li>
        </ul>
        <p className="mt-3">
          <span className="font-semibold">Results:</span> 28% increase in brand affinity, 40% faster campaign production, and $12M annual savings in creative operations.
        </p>
      </motion.div>

      {/* Final Thoughts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-14 bg-[#F4F0FF] p-6 rounded-xl border border-purple-400"
      >
        <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
          <CheckCircle className="text-purple-400" />
          The Future of Creative Excellence
        </h2>
        <p>
          As we move toward 2025, creative excellence will be defined by the seamless integration of human ingenuity and technological capability. The most successful brands will be those that harness AI as a creative collaborator while maintaining authentic human connection at their core.
        </p>
        <p className="mt-3 italic text-sm text-gray-600">
          Ready to transform your brand's creative capabilities? Our strategic frameworks have helped industry leaders achieve breakthrough results.
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

export default Blog6;