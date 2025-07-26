// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FaUser, FaBolt, FaLightbulb } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const cardData = [
//   {
//     title: "E-Commerce Growth Acceleration",
//     image: "/images/card1.png",
//     client: "Fashion Retailer",
//     challenge: "Low online visibility and stagnant sales.",
//     solution: "Website optimization, targeted ad campaigns, SEO, and conversion tracking.",
//     points: [
//       "🚀 3x Increase In Web Traffic",
//       "🛒 65% Boost In Online Sales Within 4 Months",
//       "🌍 Expanded To 10+ International Markets"
//     ],
//     link: "/case-study/ecommerce-growth"
//   },
//   {
//     title: "B2B Lead Generation for SaaS Startup",
//     image: "/images/card2.png",
//     client: "SaaS Platform",
//     challenge: "Poor brand recognition and low-quality leads.",
//     solution: "Brand revamp, landing page optimization, and multichannel outreach via LinkedIn and email.",
//     points: [
//       "📈 4x Increase In Qualified B2B Leads",
//       "⚙️ 5x Improvement In Conversion Rate",
//       "🔍 Top 5 Google Ranking For 10+ Industry Keywords"
//     ],
//     link: "/case-study/b2b-lead-gen"
//   },
//   {
//     title: "Workflow Automation for Service Business",
//     image: "/images/card3.png",
//     client: "Professional Services Firm",
//     challenge: "Time-consuming client onboarding.",
//     solution: "Custom CRM integration, automated workflows, and digital document management.",
//     points: [
//       "💡 70% Reduction In Operational Workload",
//       "⏱️ 40X Faster Client Onboarding",
//       "📊 Improved Customer Satisfaction And Retention"
//     ],
//     link: "/case-study/workflow-automation"
//   },
//   // Extra card (shown only on tablet)
//   {
//     title: "Social Media Optimization for Local Brand",
//     image: "/images/card1.png",
//     client: "Regional Apparel Brand",
//     challenge: "Low engagement on social platforms.",
//     solution: "Creative content strategy, influencer partnerships, and reel campaigns.",
//     points: [
//       "📉 60% Drop in Bounce Rate",
//       "📱 Viral Reel Campaigns with 500K+ Reach",
//       "🧠 Brand Recall Boosted by 3X"
//     ],
//     link: "/case-study/social-media"
//   }
// ];

// export default function CaseStudiesSection() {
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
//     })
//   };

//   return (
//     <section className="py-16 px-6 lg:px-20 bg-white font-outfit" ref={ref}>
//       <div className="text-center mb-12">
//         <p className="text-primary tracking-widest font-outfit text-sm">OUR STUDIES</p>
//         <h2 className="text-4xl font-archivo font-bold mt-2">Case Studies</h2>
//         <p className="text-lg font-archivo mt-2">Real Results, Proven Growth</p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {cardData.map((card, index) => (
//           <motion.div
//             key={index}
//             custom={index}
//             variants={cardVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//             className={`bg-cardBg rounded-xl p-6 shadow-lg flex flex-col justify-between ${
//               index === 3 ? "hidden sm:flex lg:hidden" : ""
//             }`}
//           >
//             <img
//               src={card.image}
//               alt={card.title}
//               className="rounded-lg h-48 w-full object-cover mb-4"
//             />
//             <h3 className="text-xl font-archivo text-primary font-semibold mb-3">
//               {card.title}
//             </h3>
//             <div className="space-y-2 text-sm font-poppins">
//               <p className="flex items-center gap-2">
//                 <FaUser className="text-primary" /> <strong>Client:</strong> {card.client}
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaBolt className="text-primary" /> <strong>Challenge:</strong> {card.challenge}
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaLightbulb className="text-primary" /> <strong>Solution:</strong> {card.solution}
//               </p>
//             </div>

//             <ul className="mt-4 space-y-1 text-sm font-outfit">
//               {card.points.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>

//             <div className="mt-6">
//               <Link
//                 to={card.link}
//                 className="inline-block text-sm font-semibold bg-primary text-white px-5 py-2 rounded-full hover:bg-[#2c0765] transition"
//               >
//                 LEARN MORE
//               </Link>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// deepseek output


import React, { useEffect, useRef } from 'react';
import { FaShoppingCart, FaChartLine, FaGlobe, FaUsers, FaSearch, FaRobot, FaFileAlt, FaSmile } from 'react-icons/fa';

const CaseStudiesSection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardRefs.current.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fadeInUp');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Growth Acceleration',
      client: 'Fashion Retailer',
      challenge: 'Low online visibility and stagnant sales.',
      solution: 'Website optimization, targeted ad campaigns, SEO, and conversion tracking.',
      results: [
        { text: '3x Increase in Web Traffic', completed: true, icon: <FaChartLine className="text-purple-700" /> },
        { text: '65% Boost In Online Sales Within 4 Months', completed: false, icon: <FaShoppingCart className="text-purple-700" /> },
        { text: 'Expanded To 10+ International Markets', completed: true, icon: <FaGlobe className="text-purple-700" /> }
      ],
      link: '/case-studies/ecommerce-growth'
    },
    {
      id: 2,
      title: 'B2B Lead Generation for SaaS Startup',
      client: 'SaaS Platform',
      challenge: 'Poor brand recognition and low-quality leads.',
      solution: 'Brand swamp, landing page optimization, and multichannel outreach via LinkedIn and email.',
      results: [
        { text: '4x Increase in Qualified B2B Leads', completed: true, icon: <FaUsers className="text-purple-700" /> },
        { text: '5x Improvement in Conversion Rate', completed: true, icon: <FaSearch className="text-purple-700" /> },
        { text: 'Top 5 Google Ranking For 10+ Industry Keywords', completed: true, icon: <FaFileAlt className="text-purple-700" /> }
      ],
      link: '/case-studies/b2b-lead-generation'
    },
    {
      id: 3,
      title: 'Workflow Automation for Service Business',
      client: 'Professional Services Firm',
      challenge: 'Time-consuming client onboarding.',
      solution: 'Custom CRM Integration, automated workflows, and digital document management.',
      results: [
        { text: '70% Reduction in Operational Workload', completed: true, icon: <FaRobot className="text-purple-700" /> },
        { text: '40% Faster Client Onboarding', completed: true, icon: <FaFileAlt className="text-purple-700" /> },
        { text: 'Improved Customer Satisfaction And Retention', completed: true, icon: <FaSmile className="text-purple-700" /> }
      ],
      link: '/case-studies/workflow-automation'
    },
    // This card will only show on tablet devices
    {
      id: 4,
      title: 'Social Media Strategy for Healthcare',
      client: 'Healthcare Provider',
      challenge: 'Low engagement and outdated social presence.',
      solution: 'Content strategy overhaul, platform-specific campaigns, and influencer partnerships.',
      results: [
        { text: '5x Increase in Engagement Rate', completed: true, icon: <FaUsers className="text-purple-700" /> },
        { text: '300% Growth in Follower Base', completed: true, icon: <FaChartLine className="text-purple-700" /> },
        { text: 'Top 3 in Healthcare Social Rankings', completed: false, icon: <FaFileAlt className="text-purple-700" /> }
      ],
      link: '/case-studies/social-media-healthcare'
    }
  ];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 font-archivo">CASE STUDIES</h2>
          <div className="w-20 h-1 bg-purple-700 mx-auto mb-4"></div>
          <h3 className="text-4xl font-bold text-gray-900 font-archivo">Real Results, Proven Growth</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              ref={addToRefs}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl opacity-0 translate-y-10 ${
                index === 3 ? 'hidden md:block lg:hidden' : ''
              }`}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-900 mb-4 font-archivo">{study.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-600 font-poppins"><span className="font-semibold">Client:</span> {study.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-600 font-poppins"><span className="font-semibold">Challenge:</span> {study.challenge}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-600 font-poppins"><span className="font-semibold">Solution:</span> {study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {result.icon}
                      </div>
                      <div className="ml-3">
                        <p className={`text-sm font-outfit ${result.completed ? 'text-gray-800' : 'text-gray-400 line-through'}`}>
                          {result.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a 
                  href={study.link} 
                  className="inline-block px-6 py-2 bg-purple-700 text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');
        
        .font-archivo {
          font-family: 'Archivo', sans-serif;
        }
        
        .font-outfit {
          font-family: 'Outfit', sans-serif;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection;