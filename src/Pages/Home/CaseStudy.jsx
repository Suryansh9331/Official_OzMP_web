import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUser, FaBolt, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "E-Commerce Growth Acceleration",
    image: "/images/card1.png",
    client: "Fashion Retailer",
    challenge: "Low online visibility and stagnant sales.",
    solution: "Website optimization, targeted ad campaigns, SEO, and conversion tracking.",
    points: [
      "🚀 3x Increase In Web Traffic",
      "🛒 65% Boost In Online Sales Within 4 Months",
      "🌍 Expanded To 10+ International Markets"
    ],
    link: "/case-study/ecommerce-growth"
  },
  {
    title: "B2B Lead Generation for SaaS Startup",
    image: "/images/card2.png",
    client: "SaaS Platform",
    challenge: "Poor brand recognition and low-quality leads.",
    solution: "Brand revamp, landing page optimization, and multichannel outreach via LinkedIn and email.",
    points: [
      "📈 4x Increase In Qualified B2B Leads",
      "⚙️ 5x Improvement In Conversion Rate",
      "🔍 Top 5 Google Ranking For 10+ Industry Keywords"
    ],
    link: "/case-study/b2b-lead-gen"
  },
  {
    title: "Workflow Automation for Service Business",
    image: "/images/card3.png",
    client: "Professional Services Firm",
    challenge: "Time-consuming client onboarding.",
    solution: "Custom CRM integration, automated workflows, and digital document management.",
    points: [
      "💡 70% Reduction In Operational Workload",
      "⏱️ 40X Faster Client Onboarding",
      "📊 Improved Customer Satisfaction And Retention"
    ],
    link: "/case-study/workflow-automation"
  },
  // Extra card (shown only on tablet)
  {
    title: "Social Media Optimization for Local Brand",
    image: "/images/card1.png",
    client: "Regional Apparel Brand",
    challenge: "Low engagement on social platforms.",
    solution: "Creative content strategy, influencer partnerships, and reel campaigns.",
    points: [
      "📉 60% Drop in Bounce Rate",
      "📱 Viral Reel Campaigns with 500K+ Reach",
      "🧠 Brand Recall Boosted by 3X"
    ],
    link: "/case-study/social-media"
  }
];

export default function CaseStudiesSection() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <section className="py-16 px-6 lg:px-20 bg-white font-outfit" ref={ref}>
      <div className="text-center mb-12">
        <p className="text-primary tracking-widest font-outfit text-sm">OUR STUDIES</p>
        <h2 className="text-4xl font-archivo font-bold mt-2">Case Studies</h2>
        <p className="text-lg font-archivo mt-2">Real Results, Proven Growth</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`bg-cardBg rounded-xl p-6 shadow-lg flex flex-col justify-between ${
              index === 3 ? "hidden sm:flex lg:hidden" : ""
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="rounded-lg h-48 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-archivo text-primary font-semibold mb-3">
              {card.title}
            </h3>
            <div className="space-y-2 text-sm font-poppins">
              <p className="flex items-center gap-2">
                <FaUser className="text-primary" /> <strong>Client:</strong> {card.client}
              </p>
              <p className="flex items-center gap-2">
                <FaBolt className="text-primary" /> <strong>Challenge:</strong> {card.challenge}
              </p>
              <p className="flex items-center gap-2">
                <FaLightbulb className="text-primary" /> <strong>Solution:</strong> {card.solution}
              </p>
            </div>

            <ul className="mt-4 space-y-1 text-sm font-outfit">
              {card.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <div className="mt-6">
              <Link
                to={card.link}
                className="inline-block text-sm font-semibold bg-primary text-white px-5 py-2 rounded-full hover:bg-[#2c0765] transition"
              >
                LEARN MORE
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
