// 5th Blog Page: Empowering Your the Creative Journey
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
} from "lucide-react";
import b5 from "../../../assets/images/Blog5.jpg";

const Blog5 = () => {
  return (
    <section className="w-full bg-[#F9F6FF] text-[#222] font-[Inter]">
      <div className="max-w-6xl mx-auto p-6 pt-28">
        <img
          src={b5}
          alt="Creative Journey"
          className="rounded-2xl shadow-xl mb-10 w-full max-h-[500px] object-cover"
        />

        <h1 className="text-4xl md:text-5xl font-[Archivo] text-[#372975] mb-4">
          Empowering Your the Creative Journey
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-600 mb-10">
          <div className="flex items-center gap-2">
            <Calendar size={18} /> October 19, 2024
          </div>
          <div className="flex items-center gap-2">
            <User size={18} /> Creative Team
          </div>
        </div>

        {/* Section 1 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
            <Lightbulb /> 1. The Spark of Creativity
          </h2>
          <p>
            Every creative journey begins with a spark — that tiny burst of
            inspiration that urges us to create, to express, and to build. It
            could be a moment, a thought, or a visual that stirs something
            within. Acknowledging and nurturing this spark is the first step in
            empowering your journey.
          </p>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
            <PenTool /> 2. Honoring the Process
          </h2>
          <p>
            Creativity is not a linear path. It’s a winding process filled with
            drafts, dead ends, and breakthroughs. Rather than rushing to the end
            result, we must learn to fall in love with the journey — the messy
            sketches, the late-night brainstorming, and the endless
            experimentation.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
            <Eye /> 3. Observing the World Differently
          </h2>
          <p>
            Empowered creatives see the world through a unique lens. Inspiration
            is hidden in everyday details — the colors of the sky, the rhythm of
            footsteps, the way people interact. Training your eyes to observe
            with curiosity leads to deeper creativity.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
            <BookOpen /> 4. Lifelong Learning Fuels Creativity
          </h2>
          <p>
            Great creatives never stop learning. Whether it's a new skill, a
            different tool, or a fresh perspective — continuous learning expands
            our toolkit. Reading, attending workshops, and engaging with diverse
            thinkers can reignite your passion and refine your craft.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
            <Zap /> 5. The Power of Creative Rituals
          </h2>
          <p>
            Building rituals — like morning journaling, afternoon walks, or a
            dedicated workspace — helps enter a creative flow state. Rituals
            reduce resistance, signaling your brain that it’s time to create.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
            <Share2 /> 6. Collaboration over Competition
          </h2>
          <p>
            Surrounding yourself with a creative community can elevate your
            journey. Sharing ideas, receiving feedback, and co-creating adds
            energy and dimension to your work. Empowered creators lift each
            other up.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
            <BarChart2 /> 7. Measuring Progress, Not Perfection
          </h2>
          <p>
            Don't wait for perfection to publish or perform. Track your progress
            instead. Celebrate small wins — a completed sketch, a shared blog,
            or a new technique learned. Growth comes from iteration.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
            <Smile /> 8. Building Creative Confidence
          </h2>
          <p>
            Confidence grows with creation. The more you make, the more you
            believe in your voice. Resist comparison, stay authentic, and remind
            yourself that your vision matters.
          </p>
        </div>

        {/* Section 9 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
            <User /> 9. Your Creative Identity
          </h2>
          <p>
            Who are you as a creator? What values guide your work? What story do
            you want to tell? Exploring these questions grounds your creative
            journey in purpose and helps you stay true to your path.
          </p>
        </div>

        {/* Section 10 */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-[#372975]">
            <Lightbulb /> 10. Keep the Flame Alive 🔥
          </h2>
          <p>
            There will be days when doubt creeps in, but remember — creativity
            isn’t a gift, it’s a habit. Show up, stay curious, and keep
            nurturing your flame. Your journey is valid, powerful, and worth
            continuing.
          </p>
        </div>
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
            Inspiring brands are built on stories worth sharing. Lead with
            truth, connect through emotion, and stay consistent to build a brand
            legacy.
          </p>
        </motion.div>

        <div className="mt-10">
          <Link to="/blogs">
            <button className="px-6 py-2 cursor-pointer bg-[#DBD2FF] text-black font-semibold rounded-full font-[Poppins] hover:scale-105 transition">
              ⬅️ Back to All Blogs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog5;
