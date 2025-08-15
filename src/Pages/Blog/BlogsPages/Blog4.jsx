// // Page 1: Inspiring Brands is Empowering Stories
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Calendar,
//   User,
//   Folder,
//   Star,
//   Users,
//   CheckCircle,
//   MessageCircle,
//   Target,
//   Flame,
//   Heart,
//   TrendingUp,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import b4 from "../../../assets/images/Blog4.jpg";

// const Blog4 = () => {
//   const blog = {
//     image: b4,
//     title: "🌟 Inspiring Brands is Empowering Stories",
//     subheading:
//       "Behind every great brand is a story that moves people. Discover how powerful narratives build unforgettable identities.",
//     date: "October 19, 2024",
//     author: "Brand Team",
//     category: "Branding",
//   };

//   return (
//     <div className="max-w-6xl mx-auto md:px-16 lg:px-2 px-4 py-16 font-[Poppins] text-gray-700">
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

//       <h1 className="md:text-4xl text-2xl font-[Outfit] font-bold text-gray-800 mb-3 leading-tight">
//         {blog.title}
//       </h1>

//       <p className="text-lg mb-10">{blog.subheading}</p>

//       <Section icon={<Star />} title="1️⃣ Purpose-Led Storytelling" points={["Every successful brand starts with purpose.", "Define what you stand for and why you exist."]} />
//       <Section icon={<Users />} title="2️⃣ Human Connections Over Features" points={["Brands that connect emotionally perform better.", "Stories evoke trust, empathy, and loyalty."]} />
//       <Section icon={<CheckCircle />} title="3️⃣ Authenticity Wins" points={["Don’t fabricate stories. Tell the truth in a compelling way.", "People crave real voices and real experiences."]} />
//       <Section icon={<MessageCircle />} title="4️⃣ Consistent Messaging Across Touchpoints" points={["A unified voice across channels builds brand recognition.", "From your website to emails, the tone should align."]} />
//       <Section icon={<Target />} title="5️⃣ Know Your Audience Deeply" points={["Great stories start with listening.", "Know your customer’s journey, challenges, and dreams."]} />
//       <Section icon={<Flame />} title="6️⃣ Emotion Drives Decisions" points={["Rational benefits are important—but emotion converts.", "We remember how a brand made us feel."]} />
//       <Section icon={<Heart />} title="7️⃣ User-Generated Content Builds Trust" points={["Encourage users to share their stories about your brand.", "Authentic social proof is priceless."]} />
//       <Section icon={<TrendingUp />} title="8️⃣ Storytelling as a Growth Strategy" points={["Brand stories drive marketing, content, and product decisions.", "They influence culture internally and externally."]} />

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.6 }}
//         className="mt-14 bg-[#F4F0FF] p-6 rounded-xl"
//       >
//         <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
//           <CheckCircle className="text-[#9D8BFF]" />
//           Final Takeaway
//         </h2>
//         <p>
//           Inspiring brands are built on stories worth sharing. Lead with truth, connect through emotion, and stay consistent to build a brand legacy.
//         </p>
//       </motion.div>

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

// const Section = ({ icon, title, points }) => {
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
//       <ul className="list-disc ml-6 space-y-2">
//         {points.map((point, idx) => (
//           <li key={idx}>{point}</li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// };

// export default Blog4;

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
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import b4 from "../../../assets/images/Blog2.png";
//ok 
const Blog4 = () => {
  const blog = {
    image: b4,
    title: "Inspiring Brands Through Empowering Stories",
    subheading:
      "Discover how the world's most memorable brands leverage authentic storytelling to build emotional connections, foster loyalty, and drive sustainable growth.",
    date: "October 19, 2024",
    author: "Brand Strategy Team",
    category: "Brand Development",
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
        <p>
          In an era where consumers are bombarded with 4,000-10,000 brand
          messages daily, only those with compelling narratives break through
          the noise. Harvard Business Review research reveals that{" "}
          <span className="font-semibold">
            story-driven brands grow 2-3x faster
          </span>{" "}
          than competitors, while enjoying 50-80% higher customer lifetime
          value.
        </p>
      </motion.div>

      {/* Sections */}
      <Section
        icon={<Star className="text-purple-400" />}
        title="Purpose-Driven Brand Narratives"
        content={[
          "The most impactful brands anchor their stories in deeper purpose. Patagonia's environmental activism, Dove's real beauty campaign, and Tesla's mission to accelerate sustainable energy all demonstrate how purpose creates emotional resonance.",
          "Our framework for purpose-led storytelling:",
        ]}
        bullets={[
          "Identify your core reason for existing beyond profit",
          "Articulate how you improve customers' lives",
          "Align all messaging with this central purpose",
          "Measure impact beyond financial metrics",
        ]}
      />

      <Section
        icon={<Users className="text-purple-400" />}
        title="Human-Centric Brand Positioning"
        content={[
          "People connect with people, not products. Brands that humanize their messaging see 3-5x higher engagement rates according to LinkedIn's B2B Institute.",
          "Strategies for human connection:",
        ]}
        bullets={[
          "Feature real customers in storytelling (not stock photos)",
          "Develop relatable brand personas and voices",
          "Share founder/team stories authentically",
          "Create content that addresses emotional needs",
        ]}
      />

      <Section
        icon={<CheckCircle className="text-purple-400" />}
        title="The Authenticity Imperative"
        content={[
          "Edelman's Trust Barometer shows 81% of consumers say trust determines purchase decisions. Authenticity builds this trust through:",
        ]}
        bullets={[
          "Transparent business practices",
          "Vulnerability in communication",
          "Consistency between words and actions",
          "Owning mistakes and making amends",
          "Avoiding greenwashing and virtue signaling",
        ]}
      />

      <Section
        icon={<MessageCircle className="text-purple-400" />}
        title="Omnichannel Narrative Consistency"
        content={[
          "McKinsey research shows brands with consistent messaging across channels achieve 23% higher revenue growth. Our approach ensures:",
        ]}
        bullets={[
          "Unified brand voice guidelines",
          "Adaptive storytelling for different platforms",
          "Seamless customer journey narratives",
          "Content calendars that reinforce core messages",
          "Employee advocacy alignment",
        ]}
      />

      <Section
        icon={<Target className="text-purple-400" />}
        title="Audience-Centric Story Development"
        content={[
          "Effective brand stories start with deep audience understanding. We employ:",
        ]}
        bullets={[
          "Customer journey mapping workshops",
          "Psychographic segmentation analysis",
          "Cultural trend monitoring",
          "Empathy-driven content creation",
          "Continuous feedback loops",
        ]}
      />

      <Section
        icon={<Flame className="text-purple-400" />}
        title="Emotional Engagement Strategies"
        content={[
          "Neuroscience research proves emotional responses drive decision-making more than rational factors. We help brands:",
        ]}
        bullets={[
          "Identify core emotional triggers",
          "Develop signature brand feelings",
          "Create memorable brand moments",
          "Use color psychology strategically",
          "Craft compelling hero narratives",
        ]}
      />

      <Section
        icon={<Heart className="text-purple-400" />}
        title="Community-Driven Storytelling"
        content={[
          "User-generated content generates 6.9x higher engagement than brand content (Yotpo). Our community-building framework includes:",
        ]}
        bullets={[
          "Customer story collection systems",
          "Brand advocate programs",
          "Co-creation opportunities",
          "Social listening for organic stories",
          "Authentic influencer partnerships",
        ]}
      />

      <Section
        icon={<TrendingUp className="text-purple-400" />}
        title="Strategic Storytelling for Growth"
        content={[
          "Narrative isn't just marketing—it's a business strategy. Companies like Airbnb and Glossier prove stories can drive:",
        ]}
        bullets={[
          "Premium pricing power (20-30% increases)",
          "Lower customer acquisition costs",
          "Higher employee engagement",
          "Stronger investor narratives",
          "Resilience during crises",
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
          <Star className="text-purple-400" />
          Brand Transformation in Action
        </h2>
        <p className="font-semibold mb-2">
          Sustainable Apparel Brand Case Study:
        </p>
        <p>
          For an eco-conscious clothing startup, we developed a comprehensive
          brand narrative strategy:
        </p>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Defined "Circular Fashion Champion" positioning</li>
          <li>Created founder origin story content</li>
          <li>Developed customer sustainability journey maps</li>
          <li>Implemented UGC-driven social strategy</li>
        </ul>
        <p className="mt-3">
          <span className="font-semibold">Results:</span> 3x increase in brand
          recall, 45% higher conversion rates, and 80% growth in organic social
          engagement within 6 months.
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
          The Future of Brand Storytelling
        </h2>
        <p>
          As we move into 2025, emerging trends like AI-personalized narratives,
          immersive brand worlds, and values-driven commerce are redefining what
          brand storytelling means.
        </p>
        <p className="mt-3">
          The brands that will thrive are those that maintain human connection
          at their core while leveraging new technologies to tell their stories
          in more impactful ways.
        </p>
        <p className="mt-3 italic text-sm text-gray-600">
          Ready to craft your brand's powerful narrative? Our strategists can
          help uncover and articulate your unique story.
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
      {content &&
        content.map((para, idx) => (
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

export default Blog4;
