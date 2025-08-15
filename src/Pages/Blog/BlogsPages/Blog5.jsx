// // 5th Blog Page: Empowering Your the Creative Journey
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import React from "react";
// import {
//   Calendar,
//   CheckCircle,
//   User,
//   Lightbulb,
//   PenTool,
//   Eye,
//   BookOpen,
//   Zap,
//   Share2,
//   BarChart2,
//   Smile,
// } from "lucide-react";
// import b5 from "../../../assets/images/Blog5.jpg";

// const Blog5 = () => {
//   return (
//     <section className="w-full bg-[#F9F6FF] text-[#222] font-[Inter]">
//       <div className="max-w-6xl mx-auto p-6 pt-28">
//         <img
//           src={b5}
//           alt="Creative Journey"
//           className="rounded-2xl shadow-xl mb-10 w-full max-h-[500px] object-cover"
//         />

//         <h1 className="text-4xl md:text-5xl font-[Archivo] text-[#372975] mb-4">
//           Empowering Your the Creative Journey
//         </h1>

//         <div className="flex items-center gap-6 text-sm text-gray-600 mb-10">
//           <div className="flex items-center gap-2">
//             <Calendar size={18} /> October 19, 2024
//           </div>
//           <div className="flex items-center gap-2">
//             <User size={18} /> Creative Team
//           </div>
//         </div>

//         {/* Section 1 */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
//             <Lightbulb /> 1. The Spark of Creativity
//           </h2>
//           <p>
//             Every creative journey begins with a spark — that tiny burst of
//             inspiration that urges us to create, to express, and to build. It
//             could be a moment, a thought, or a visual that stirs something
//             within. Acknowledging and nurturing this spark is the first step in
//             empowering your journey.
//           </p>
//         </div>

//         {/* Section 2 */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
//             <PenTool /> 2. Honoring the Process
//           </h2>
//           <p>
//             Creativity is not a linear path. It’s a winding process filled with
//             drafts, dead ends, and breakthroughs. Rather than rushing to the end
//             result, we must learn to fall in love with the journey — the messy
//             sketches, the late-night brainstorming, and the endless
//             experimentation.
//           </p>
//         </div>

//         {/* Section 3 */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
//             <Eye /> 3. Observing the World Differently
//           </h2>
//           <p>
//             Empowered creatives see the world through a unique lens. Inspiration
//             is hidden in everyday details — the colors of the sky, the rhythm of
//             footsteps, the way people interact. Training your eyes to observe
//             with curiosity leads to deeper creativity.
//           </p>
//         </div>

//         {/* Section 4 */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
//             <BookOpen /> 4. Lifelong Learning Fuels Creativity
//           </h2>
//           <p>
//             Great creatives never stop learning. Whether it's a new skill, a
//             different tool, or a fresh perspective — continuous learning expands
//             our toolkit. Reading, attending workshops, and engaging with diverse
//             thinkers can reignite your passion and refine your craft.
//           </p>
//         </div>

//         {/* Section 5 */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
//             <Zap /> 5. The Power of Creative Rituals
//           </h2>
//           <p>
//             Building rituals — like morning journaling, afternoon walks, or a
//             dedicated workspace — helps enter a creative flow state. Rituals
//             reduce resistance, signaling your brain that it’s time to create.
//           </p>
//         </div>

//         {/* Section 6 */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
//             <Share2 /> 6. Collaboration over Competition
//           </h2>
//           <p>
//             Surrounding yourself with a creative community can elevate your
//             journey. Sharing ideas, receiving feedback, and co-creating adds
//             energy and dimension to your work. Empowered creators lift each
//             other up.
//           </p>
//         </div>

//         {/* Section 7 */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
//             <BarChart2 /> 7. Measuring Progress, Not Perfection
//           </h2>
//           <p>
//             Don't wait for perfection to publish or perform. Track your progress
//             instead. Celebrate small wins — a completed sketch, a shared blog,
//             or a new technique learned. Growth comes from iteration.
//           </p>
//         </div>

//         {/* Section 8 */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
//             <Smile /> 8. Building Creative Confidence
//           </h2>
//           <p>
//             Confidence grows with creation. The more you make, the more you
//             believe in your voice. Resist comparison, stay authentic, and remind
//             yourself that your vision matters.
//           </p>
//         </div>

//         {/* Section 9 */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
//             <User /> 9. Your Creative Identity
//           </h2>
//           <p>
//             Who are you as a creator? What values guide your work? What story do
//             you want to tell? Exploring these questions grounds your creative
//             journey in purpose and helps you stay true to your path.
//           </p>
//         </div>

//         {/* Section 10 */}
//         <div className="mb-10">
//           <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
//             <Lightbulb /> 10. Keep the Flame Alive 🔥
//           </h2>
//           <p>
//             There will be days when doubt creeps in, but remember — creativity
//             isn’t a gift, it’s a habit. Show up, stay curious, and keep
//             nurturing your flame. Your journey is valid, powerful, and worth
//             continuing.
//           </p>
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           className="mt-14 bg-[#F4F0FF] p-6 rounded-xl"
//         >
//           <h2 className="text-2xl font-[Outfit] font-semibold text-gray-800 mb-2 flex gap-2 items-center">
//             <CheckCircle className="text-[#9D8BFF]" />
//             Final Takeaway
//           </h2>
//           <p>
//             Inspiring brands are built on stories worth sharing. Lead with
//             truth, connect through emotion, and stay consistent to build a brand
//             legacy.
//           </p>
//         </motion.div>

//         <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
//           {/* Back Button */}
//           <Link to="/blogs">
//             <button className="px-6 py-2 cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
//               ⬅️ Back to All Blogs
//             </button>
//           </Link>

//           {/* Contact Us Button */}
//           <Link to="/contact-us">
//             <button className="px-6 py-2  cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
//               Contact Us ➡️
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog5;




import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";
import {
  Calendar,
  CheckCircle,
  User,
  Lightbulb,
  PenTool,
  Eye,
  BookOpen,
  Zap,
  Share2,
  BarChart2,
  Smile,
  ArrowLeft,
  ArrowRight,
  Flame,
  Bookmark,
  Users,
  Target,
  Heart,
} from "lucide-react";
import b5 from "../../../assets/images/Blog5.jpg";
//import updated 
const Blog5 = () => {
  return (
    <section className="w-full bg-[#F9F6FF] text-[#222] font-[Inter]">
      <div className="max-w-6xl mx-auto p-6 pt-28">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-xl mb-10 overflow-hidden bg-[#F4F0FF]"
        >
          <img
            src={b5}
            alt="Creative Journey"
            className="w-full max-h-[500px] object-cover"
          />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-[Archivo] text-[#372975] mb-4">
          Empowering Your Creative Journey
        </h1>

        {/* Meta Information */}
        <div className="flex items-center gap-6 text-sm text-gray-600 mb-10">
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-purple-400" /> October 19, 2024
          </div>
          <div className="flex items-center gap-2">
            <User size={18} className="text-purple-400" /> Creative Team
          </div>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-[#F4F0FF] p-6 rounded-xl border border-purple-400"
        >
          <p className="mb-3">
            Creativity isn't a talent—it's a way of operating. According to Adobe's State of Create report, <span className="font-semibold">companies that foster creativity see 1.5x higher market share</span> and are 3x more likely to exceed financial targets. This comprehensive guide explores how to cultivate and sustain your creative potential at every stage of your journey.
          </p>
          <p>
            Whether you're an artist, entrepreneur, or creative professional, these evidence-based strategies will help you overcome blocks, maintain inspiration, and produce your most meaningful work.
          </p>
        </motion.div>

        {/* Section 1 */}
        <Section
          icon={<Lightbulb className="text-purple-400" />}
          title="Igniting Creative Inspiration"
          content={[
            "Neuroscience reveals that creative insights often emerge from three key conditions: relaxed attention, positive mood, and diverse stimuli. The most innovative companies intentionally design environments that foster these states.",
            "Our research-backed framework for sparking creativity:"
          ]}
          bullets={[
            "Morning idea capture rituals (90% more effective than evening)",
            "Cross-disciplinary exposure to new concepts",
            "Mindfulness practices to quiet the critical mind",
            "Curated inspiration libraries (visual, textual, auditory)",
            "Structured daydreaming sessions"
          ]}
        />

        {/* Section 2 */}
        <Section
          icon={<PenTool className="text-purple-400" />}
          title="Mastering the Creative Process"
          content={[
            "The creative process follows predictable stages: preparation, incubation, illumination, and verification. Understanding these phases helps navigate the inevitable challenges.",
            "Key strategies for each stage:"
          ]}
          bullets={[
            "Preparation: Immersive research techniques",
            "Incubation: Strategic distraction methods",
            "Illumination: Capturing fleeting insights",
            "Verification: Iterative refinement processes",
            "Developing personal creative rhythms"
          ]}
        />

        {/* Section 3 */}
        <Section
          icon={<Eye className="text-purple-400" />}
          title="Cultivating Creative Observation"
          content={[
            "Trained observation separates exceptional creatives from the rest. Studies show design-led companies that emphasize observation grow revenues 2x faster than industry peers.",
            "Methods to sharpen your observational skills:"
          ]}
          bullets={[
            "Daily sensory awareness exercises",
            "Visual journaling practices",
            "Behavioral pattern recognition training",
            "Cultural trendspotting frameworks",
            "Environmental scanning techniques"
          ]}
        />

        {/* Section 4 */}
        <Section
          icon={<BookOpen className="text-purple-400" />}
          title="The Learning-Creativity Connection"
          content={[
            "Stanford research demonstrates that continuous learners maintain cognitive flexibility 40% longer than peers. This mental agility directly fuels creative output.",
            "Our learning optimization system:"
          ]}
          bullets={[
            "T-shaped knowledge development",
            "Deliberate skill-stacking approaches",
            "Microlearning integration strategies",
            "Creative cross-training methods",
            "Knowledge management systems"
          ]}
        />

        {/* Section 5 */}
        <Section
          icon={<Zap className="text-purple-400" />}
          title="Designing Creative Rituals"
          content={[
            "Rituals create neural pathways that ease creative entry. University of London studies show ritualized creators experience flow states 3x more frequently.",
            "Components of effective creative rituals:"
          ]}
          bullets={[
            "Environmental priming techniques",
            "Cognitive transition exercises",
            "Personalized creative triggers",
            "Energy management protocols",
            "Post-session reflection practices"
          ]}
        />

        {/* Section 6 */}
        <Section
          icon={<Share2 className="text-purple-400" />}
          title="The Power of Creative Community"
          content={[
            "MIT research reveals that the most innovative teams share three characteristics: psychological safety, diverse perspectives, and structured collaboration.",
            "Building your creative network:"
          ]}
          bullets={[
            "Mastermind group formation",
            "Critique partner matching",
            "Cross-pollination events",
            "Accountability systems",
            "Digital collaboration frameworks"
          ]}
        />

        {/* Section 7 */}
        <Section
          icon={<BarChart2 className="text-purple-400" />}
          title="Measuring Creative Growth"
          content={[
            "What gets measured gets improved. Creative professionals who track progress show 2.5x greater career advancement over 5 years.",
            "Key metrics to monitor:"
          ]}
          bullets={[
            "Idea generation velocity",
            "Project completion rates",
            "Skill acquisition benchmarks",
            "Creative risk-taking frequency",
            "Influence and impact indicators"
          ]}
        />

        {/* Section 8 */}
        <Section
          icon={<Smile className="text-purple-400" />}
          title="Developing Creative Confidence"
          content={[
            "Confidence isn't prerequisite to creation—it's the result. Neuroscience shows each creative act physically strengthens self-belief pathways in the brain.",
            "Evidence-based confidence builders:"
          ]}
          bullets={[
            "Small wins accumulation",
            "Fear-setting exercises",
            "Creative legacy projection",
            "Imposter syndrome reframing",
            "Personal brand development"
          ]}
        />

        {/* Section 9 */}
        <Section
          icon={<Bookmark className="text-purple-400" />}
          title="Crafting Your Creative Identity"
          content={[
            "The most fulfilled creatives align their work with core values. Research shows value-aligned creators experience 60% less burnout.",
            "Identity-defining exercises:"
          ]}
          bullets={[
            "Personal manifesto development",
            "Creative lineage mapping",
            "Signature style cultivation",
            "Portfolio theme articulation",
            "Legacy statement creation"
          ]}
        />

        {/* Section 10 */}
        <Section
          icon={<Flame className="text-purple-400" />}
          title="Sustaining Creative Energy"
          content={[
            "Creative endurance separates professionals from hobbyists. Top performers use these strategies to maintain output over decades:"
          ]}
          bullets={[
            "Energy cycling techniques",
            "Creative season planning",
            "Inspiration renewal systems",
            "Artistic sabbatical frameworks",
            "Burnout prevention protocols"
          ]}
        />

        {/* Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-gradient-to-r from-[#F4F0FF] to-[#E8E2FF] p-6 rounded-xl"
        >
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2 text-[#372975]">
            <Users className="text-purple-400" />
            Creative Transformation in Action
          </h2>
          <p className="font-semibold mb-2">Design Studio Case Study:</p>
          <p>
            For a struggling design team, we implemented a comprehensive creative empowerment program:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Daily creative warm-up rituals</li>
            <li>Cross-disciplinary inspiration sessions</li>
            <li>Quarterly skill-stacking challenges</li>
            <li>Portfolio review framework</li>
          </ul>
          <p className="mt-3">
            <span className="font-semibold">Results:</span> 3x increase in client satisfaction scores, 40% faster project completion, and 75% reduction in creative block days within 9 months.
          </p>
        </motion.div>

        {/* Final Thoughts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-14 bg-[#F4F0FF] p-6 rounded-xl border border-purple-400"
        >
          <h2 className="text-2xl font-semibold mb-2 flex gap-2 items-center text-[#372975]">
            <CheckCircle className="text-purple-400" />
            The Future of Creative Work
          </h2>
          <p>
            As AI transforms the creative landscape, human creativity becomes more valuable than ever. The future belongs to those who can combine technical skills with uniquely human capacities: intuition, emotional resonance, and meaning-making.
          </p>
          <p className="mt-3 italic text-sm text-gray-600">
            Ready to unlock your full creative potential? Our framework has helped thousands of creatives break through barriers and achieve extraordinary results.
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
    </section>
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
      <h2 className="text-2xl font-semibold text-[#372975] flex items-center gap-2 mb-3">
        {icon} {title}
      </h2>
      {content && content.map((para, idx) => (
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

export default Blog5;