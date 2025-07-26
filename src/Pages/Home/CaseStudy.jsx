

// import React, { useState, useEffect, useRef } from 'react';
// import { User, AlertTriangle, Lightbulb, TrendingUp, Users, Clock, BarChart3, Zap, Target, Globe } from 'lucide-react';

// const CaseStudiesSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   const caseStudies = [
//     {
//       id: 1,
//       title: "E-Commerce Growth Acceleration",
//       client: "Fashion Retailer",
//       challenge: "Low online visibility and stagnant sales.",
//       solution: "Website optimization, targeted ad campaigns, SEO, and conversion tracking.",
//       results: [
//         { icon: "🚀", text: "3x Increase In Web Traffic" },
//         { icon: "📈", text: "65% Boost In Online Sales Within 4 Months" },
//         { icon: "🌍", text: "Expanded To 10+ International Markets" }
//       ],
//       link: "/case-study/ecommerce-growth"
//     },
//     {
//       id: 2,
//       title: "B2B Lead Generation for SaaS Startup",
//       client: "SaaS Platform",
//       challenge: "Poor brand recognition and low-quality leads.",
//       solution: "Brand revamp, landing page optimization, and multichannel outreach via LinkedIn and email.",
//       results: [
//         { icon: "🎯", text: "4x Increase In Qualified B2B Leads" },
//         { icon: "💹", text: "5x Improvement In Conversion Rate" },
//         { icon: "🏆", text: "Top 5 Google Ranking For 10+ Industry Keywords" }
//       ],
//       link: "/case-study/b2b-lead-generation"
//     },
//     {
//       id: 3,
//       title: "Workflow Automation for Service Business",
//       client: "Professional Services Firm",
//       challenge: "Time-consuming client onboarding.",
//       solution: "Custom CRM integration, automated workflows, and digital document management.",
//       results: [
//         { icon: "⚡", text: "70% Reduction In Operational Workload" },
//         { icon: "⏱️", text: "40% Faster Client Onboarding" },
//         { icon: "📊", text: "Improved Customer Satisfaction And Retention" }
//       ],
//       link: "/case-study/workflow-automation"
//     },
//     // Extra card for tablet view
//     {
//       id: 4,
//       title: "Digital Marketing Transformation",
//       client: "Healthcare Provider",
//       challenge: "Outdated marketing strategies and low patient engagement.",
//       solution: "Digital marketing overhaul, social media strategy, and patient portal optimization.",
//       results: [
//         { icon: "📱", text: "85% Increase In Patient Engagement" },
//         { icon: "🎯", text: "50% Improvement In Lead Quality" },
//         { icon: "🌟", text: "Enhanced Brand Recognition In Local Market" }
//       ],
//       link: "/case-study/digital-transformation"
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const handleLearnMore = (link) => {
//     // Replace with your actual navigation logic
//     console.log(`Navigating to: ${link}`);
//     // window.location.href = link; // or use your router
//   };

//   return (
//     <div ref={sectionRef} className="py-16 px-4 max-w-7xl mx-auto">
//       {/* Header Section */}
//       <div className="text-center mb-16">
//         <div 
//           className={`transition-all duration-700 ease-out ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//         >
//           <p className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase" 
//              style={{ fontFamily: 'Outfit, sans-serif' }}>
//             ------ OUR STUDIES ------
//           </p>
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4" 
//               style={{ fontFamily: 'Archivo, sans-serif' }}>
//             Case Studies
//           </h1>
//           <p className="text-xl text-gray-700 font-medium" 
//              style={{ fontFamily: 'Archivo, sans-serif' }}>
//             Real Results, Proven Growth
//           </p>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
//         {caseStudies.map((study, index) => {
//           // Show only 3 cards on desktop, 4 on tablet, 1 on mobile
//           const isTabletOnly = index === 3;
//           const cardClasses = isTabletOnly 
//             ? "hidden md:block lg:hidden xl:hidden" 
//             : index >= 3 ? "hidden" : "";

//           return (
//             <div
//               key={study.id}
//               className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group ${cardClasses} ${
//                 isVisible 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-12'
//               }`}
//               style={{
//                 transitionDelay: `${index * 150}ms`
//               }}
//             >
//               {/* Card Image Placeholder */}
//               <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent"></div>
//                 <div className="absolute bottom-4 left-4 right-4">
//                   <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
//                     {index === 0 && <TrendingUp className="w-6 h-6 text-purple-600" />}
//                     {index === 1 && <Target className="w-6 h-6 text-purple-600" />}
//                     {index === 2 && <Zap className="w-6 h-6 text-purple-600" />}
//                     {index === 3 && <Globe className="w-6 h-6 text-purple-600" />}
//                   </div>
//                 </div>
//               </div>

//               {/* Card Content */}
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-6" 
//                     style={{ fontFamily: 'Archivo, sans-serif', color: '#3D0D84' }}>
//                   {study.title}
//                 </h3>

//                 {/* Details */}
//                 <div className="space-y-4 mb-6">
//                   <div className="flex items-start gap-3">
//                     <User className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <span className="text-sm font-medium text-gray-600" 
//                             style={{ fontFamily: 'Poppins, sans-serif' }}>
//                         Client:
//                       </span>
//                       <span className="text-sm text-gray-800 ml-1" 
//                             style={{ fontFamily: 'Poppins, sans-serif' }}>
//                         {study.client}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <AlertTriangle className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <span className="text-sm font-medium text-gray-600" 
//                             style={{ fontFamily: 'Poppins, sans-serif' }}>
//                         Challenge:
//                       </span>
//                       <span className="text-sm text-gray-800 ml-1" 
//                             style={{ fontFamily: 'Poppins, sans-serif' }}>
//                         {study.challenge}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <Lightbulb className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <span className="text-sm font-medium text-gray-600" 
//                             style={{ fontFamily: 'Poppins, sans-serif' }}>
//                         Solution:
//                       </span>
//                       <span className="text-sm text-gray-800 ml-1" 
//                             style={{ fontFamily: 'Poppins, sans-serif' }}>
//                         {study.solution}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Results */}
//                 <div className="space-y-3 mb-8">
//                   {study.results.map((result, idx) => (
//                     <div key={idx} className="flex items-center gap-3">
//                       <span className="text-lg">{result.icon}</span>
//                       <span className="text-sm font-medium text-gray-700" 
//                             style={{ fontFamily: 'Outfit, sans-serif' }}>
//                         {result.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Learn More Button */}
//                 <button
//                   onClick={() => handleLearnMore(study.link)}
//                   className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
//                   style={{ fontFamily: 'Outfit, sans-serif' }}
//                 >
//                   LEARN MORE
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CaseStudiesSection;



import React, { useState, useEffect, useRef } from 'react';
import { User, AlertTriangle, Lightbulb, TrendingUp, Users, Clock, BarChart3, Zap, Target, Globe } from 'lucide-react';

const CaseStudiesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Growth Acceleration",
      client: "Fashion Retailer",
      challenge: "Low online visibility and stagnant sales.",
      solution: "Website optimization, targeted ad campaigns, SEO, and conversion tracking.",
      results: [
        { icon: "🚀", text: "3x Increase In Web Traffic" },
        { icon: "📈", text: "65% Boost In Online Sales Within 4 Months" },
        { icon: "🌍", text: "Expanded To 10+ International Markets" }
      ],
      link: "/case-study/ecommerce-growth"
    },
    {
      id: 2,
      title: "B2B Lead Generation for SaaS Startup",
      client: "SaaS Platform",
      challenge: "Poor brand recognition and low-quality leads.",
      solution: "Brand revamp, landing page optimization, and multichannel outreach via LinkedIn and email.",
      results: [
        { icon: "🎯", text: "4x Increase In Qualified B2B Leads" },
        { icon: "💹", text: "5x Improvement In Conversion Rate" },
        { icon: "🏆", text: "Top 5 Google Ranking For 10+ Industry Keywords" }
      ],
      link: "/case-study/b2b-lead-generation"
    },
    {
      id: 3,
      title: "Workflow Automation for Service Business",
      client: "Professional Services Firm",
      challenge: "Time-consuming client onboarding.",
      solution: "Custom CRM integration, automated workflows, and digital document management.",
      results: [
        { icon: "⚡", text: "70% Reduction In Operational Workload" },
        { icon: "⏱️", text: "40% Faster Client Onboarding" },
        { icon: "📊", text: "Improved Customer Satisfaction And Retention" }
      ],
      link: "/case-study/workflow-automation"
    },
    // Extra card for tablet view
    {
      id: 4,
      title: "Digital Marketing Transformation",
      client: "Healthcare Provider",
      challenge: "Outdated marketing strategies and low patient engagement.",
      solution: "Digital marketing overhaul, social media strategy, and patient portal optimization.",
      results: [
        { icon: "📱", text: "85% Increase In Patient Engagement" },
        { icon: "🎯", text: "50% Improvement In Lead Quality" },
        { icon: "🌟", text: "Enhanced Brand Recognition In Local Market" }
      ],
      link: "/case-study/digital-transformation"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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

  const handleLearnMore = (link) => {
    // Replace with your actual navigation logic
    console.log(`Navigating to: ${link}`);
    // window.location.href = link; // or use your router
  };

  return (
    <div ref={sectionRef} className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-8">
        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-medium text-gray-500 mb-4 tracking-wider uppercase" 
             style={{ fontFamily: 'Outfit, sans-serif' }}>
            ------ OUR STUDIES ------
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8" 
              style={{ fontFamily: 'Archivo, sans-serif' }}>
            Case Studies
          </h1>
        </div>
      </div>

      {/* Subheading - Left Aligned */}
      <div className="mb-12">
        <div 
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="text-xl text-gray-700 font-medium text-left" 
             style={{ fontFamily: 'Archivo, sans-serif' }}>
            Real Results, Proven Growth
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => {
          // Show only 3 cards on desktop, 4 on tablet, 1 on mobile
          const isTabletOnly = index === 3;
          const cardClasses = isTabletOnly 
            ? "hidden md:block lg:hidden xl:hidden" 
            : index >= 3 ? "hidden" : "";

          return (
            <div
              key={study.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group ${cardClasses} ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Card Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 bg-white/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    {index === 0 && <TrendingUp className="w-6 h-6 text-purple-600" />}
                    {index === 1 && <Target className="w-6 h-6 text-purple-600" />}
                    {index === 2 && <Zap className="w-6 h-6 text-purple-600" />}
                    {index === 3 && <Globe className="w-6 h-6 text-purple-600" />}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6" 
                    style={{ fontFamily: 'Archivo, sans-serif', color: '#3D0D84' }}>
                  {study.title}
                </h3>

                {/* Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <User className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-600" 
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Client:
                      </span>
                      <span className="text-sm text-gray-800 ml-1" 
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {study.client}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-600" 
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Challenge:
                      </span>
                      <span className="text-sm text-gray-800 ml-1" 
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {study.challenge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-600" 
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Solution:
                      </span>
                      <span className="text-sm text-gray-800 ml-1" 
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {study.solution}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3 mb-8 flex-grow">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-lg">{result.icon}</span>
                      <span className="text-sm font-medium text-gray-700" 
                            style={{ fontFamily: 'Outfit, sans-serif' }}>
                        {result.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button - Left Aligned */}
                <div className="mt-auto">
                  <button
                    onClick={() => handleLearnMore(study.link)}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                    style={{ fontFamily: 'Outfit, sans-serif' }}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudiesSection;