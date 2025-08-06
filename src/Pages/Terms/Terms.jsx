



// import React, { useState, useEffect } from 'react';
// import {
//   ChevronDown,
//   Shield,
//   FileText,
//   Mail,
//   Phone,
//   MapPin,
//   Calendar,
//   Users,
//   CheckCircle,
//   Lock,
//   ArrowRight,
// } from 'lucide-react';

// const TermsAndConditions = () => {
//   const [expandedSection, setExpandedSection] = useState('introduction');
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const hoverEffect =
//     'hover:shadow-lg hover:scale-105 transition-all duration-300';

//   const sections = [
//     {
//       id: 'introduction',
//       title: 'Introduction',
//       icon: <Users className="w-6 h-6" />,
//       content: `Welcome to Oz Media Planet ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your use of our website, services, and products related to IT solutions, software development, digital marketing, and other consulting services.\n\nBy accessing or using our website or services, you agree to be bound by these Terms. If you do not agree, please do not use our services.`,
//     },
//     {
//       id: 'services',
//       title: 'Our Services',
//       icon: <CheckCircle className="w-6 h-6" />,
//       content: `We offer comprehensive digital solutions including:\n\n• Website & Mobile App Development\n• Digital Marketing (SEO, SEM, SMM, PPC)\n• UI/UX Design\n• Cloud Solutions\n• IT Consulting & Strategy\n• Software Maintenance & Support\n\nWe reserve the right to modify or discontinue services at any time without notice.`,
//     },
//     {
//       id: 'eligibility',
//       title: 'Eligibility',
//       icon: <Shield className="w-6 h-6" />,
//       content: `You must be at least 18 years old to use our services. By using our services, you represent that you have the legal capacity to enter into this agreement.`,
//     },
//     {
//       id: 'responsibilities',
//       title: 'User Responsibilities',
//       icon: <FileText className="w-6 h-6" />,
//       content: `You agree not to:\n\n• Use our services for unlawful or harmful purposes\n• Violate the intellectual property rights of others or our company\n• Interfere with our systems, security, or operations\n• Misuse or resell our services without prior written consent`,
//     },
//     {
//       id: 'intellectual',
//       title: 'Intellectual Property',
//       icon: <Lock className="w-6 h-6" />,
//       content: `All content, designs, software, logos, and materials developed by or for Oz Media Planet are the property of the company unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited.`,
//     },
//     {
//       id: 'client-obligations',
//       title: 'Client Obligations',
//       icon: <Users className="w-6 h-6" />,
//       content: `Clients must:\n\n• Provide accurate project requirements and timely feedback\n• Ensure timely payments as per agreed terms\n• Not use our services for malicious, illegal, or unethical purposes`,
//     },
//     {
//       id: 'payments',
//       title: 'Payments & Refunds',
//       icon: <CheckCircle className="w-6 h-6" />,
//       content: `All fees are outlined in project proposals or service agreements. Payment terms must be followed as per the invoice schedule. Refunds are not provided once services are rendered or development has begun, except under specific agreements.`,
//     },
//     {
//       id: 'third-party',
//       title: 'Third-Party Services',
//       icon: <Shield className="w-6 h-6" />,
//       content: `We may use third-party tools, platforms, or APIs. We are not liable for any third-party failures or service disruptions.`,
//     },
//     {
//       id: 'limitation',
//       title: 'Limitation of Liability',
//       icon: <FileText className="w-6 h-6" />,
//       content: `We are not liable for:\n\n• Any indirect or consequential loss or damage\n• Loss of business, reputation, or data\n• Delays or failures beyond our reasonable control`,
//     },
//     {
//       id: 'termination',
//       title: 'Termination',
//       icon: <Lock className="w-6 h-6" />,
//       content: `We may suspend or terminate services:\n\n• For breach of these terms\n• If payment is not received\n• If the service is misused or abused`,
//     },
//     {
//       id: 'governing',
//       title: 'Governing Law',
//       icon: <Shield className="w-6 h-6" />,
//       content: `These Terms are governed by the laws of India, without regard to conflict of law principles.`,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
//       {/* Floating Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-purple-100 rounded-full opacity-20 -top-32 -left-32"
//           style={{ transform: `translateY(${scrollY * 0.1}px)` }}
//         />
//         <div
//           className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-purple-200 rounded-full opacity-15 top-1/2 -right-24"
//           style={{ transform: `translateY(${scrollY * -0.05}px)` }}
//         />
//         <div
//           className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-purple-100 rounded-full opacity-10 bottom-20 left-20"
//           style={{ transform: `translateY(${scrollY * 0.02}px)` }}
//         />
//       </div>

//       {/* Header */}
//       <header className="relative bg-white shadow-xl border-b-4 border-purple-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
//           <div className="text-center space-y-6 sm:space-y-10">
//             <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
//               <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-lg flex items-center justify-center shadow-xl">
//                 <img className='w-full h-full' src="/images/logo.png" alt="" />
//               </div>
//               <div className="text-left max-w-full">
//                 <h1 className="font-['Outfit'] text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
//                   Oz Media Planet
//                 </h1>
//                 <p className="font-['Inter'] text-base sm:text-lg text-gray-600 mt-1 sm:mt-2">
//                   Terms & Conditions
//                 </p>
//               </div>
//             </div>
//             <div className="max-w-3xl mx-auto px-4 sm:px-0">
//               <p className="font-['Poppins'] text-base sm:text-lg text-gray-700 leading-relaxed">
//                 Please read these terms and conditions carefully before using our services.
//                 By accessing or using our services, you agree to be bound by these terms.
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Breadcrumb */}
//       <div className="bg-purple-50 py-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="flex items-center space-x-2 text-sm text-gray-600">
//             <span className="font-['Inter']">Home</span>
//             <ArrowRight className="w-4 h-4" />
//             <span className="font-['Inter'] text-purple-500 font-semibold">
//               Terms & Conditions
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
//         <div className="space-y-10">
//           {/* Document Info */}
//           <div className="text-center bg-white rounded-2xl p-6 sm:p-8 border-2 border-purple-100 shadow-[10px_10px_0px_rgb(0,0,0,0.8)]">
//             <div className="flex items-center justify-center gap-4 mb-6">
//               <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
//               <div className="text-left">
//                 <p className="font-['Inter'] text-base sm:text-lg font-semibold text-gray-800">
//                   Effective Date
//                 </p>
//                 <p className="font-['Poppins'] text-gray-600 text-sm sm:text-base">
//                   August 6, 2025
//                 </p>
//               </div>
//             </div>
//             <h2 className="font-['Archivo'] text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
//               Terms and Conditions
//             </h2>
//             <p className="font-['Poppins'] text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
//               These terms govern your relationship with Oz Media Planet and outline
//               the rights and responsibilities of both parties when using our IT
//               solutions and digital marketing services.
//             </p>
//           </div>

//           {/* Table of Contents */}
//           <div className="bg-[#DBD2FF] rounded-xl p-6 sm:p-8 border border-gray-200 shadow-[10px_10px_0px_rgb(0,0,0,0.8)]">
//             <h3 className="font-['Inter'] text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
//               <FileText className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-purple-500" />
//               Table of Contents
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {sections.map((section, index) => (
//                 <button
//                   key={section.id}
//                   onClick={() => {
//                     setExpandedSection(section.id);
//                     document
//                       .getElementById(section.id)
//                       ?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                   className="flex items-start sm:items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 text-left transition-colors duration-200"
//                 >
//                   <span className="font-['Poppins'] text-purple-500 font-semibold min-w-[24px]">
//                     {String(index + 1).padStart(2, '0')}.
//                   </span>
//                   <span className="font-['Poppins'] text-gray-700 text-sm sm:text-base">
//                     {section.title}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Sections */}
//           {sections.map((section, index) => (
//             <div
//               key={section.id}
//               id={section.id}
//               className={`bg-[#DBD2FF] rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl shadow-[10px_10px_0px_rgb(0,0,0,0.8)] ${
//                 index % 2 === 0
//                   ? 'transform hover:translate-x-2'
//                   : 'transform hover:-translate-x-2'
//               }`}
//             >
//               <button
//                 onClick={() =>
//                   setExpandedSection(
//                     expandedSection === section.id ? '' : section.id
//                   )
//                 }
//                 className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
//               >
//                 <div className="flex items-start sm:items-center space-x-4 sm:space-x-6">
//                   <div className="flex items-center space-x-4">
//                     <span className="font-['Outfit'] text-xl sm:text-2xl font-bold text-purple-500 min-w-[48px]">
//                       {String(index + 1).padStart(2, '0')}
//                     </span>
//                     <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
//                       {section.icon}
//                     </div>
//                   </div>
//                   <h3 className="font-['Inter'] text-lg sm:text-2xl font-semibold text-gray-800">
//                     {section.title}
//                   </h3>
//                 </div>
//                 <ChevronDown
//                   className={`w-6 h-6 sm:w-8 sm:h-8 text-gray-400 transition-transform duration-300 ${
//                     expandedSection === section.id ? 'rotate-180' : ''
//                   }`}
//                 />
//               </button>
//               <div
//                 className={`px-6 sm:px-8 overflow-hidden transition-all duration-500 ${
//                   expandedSection === section.id ? 'max-h-[600px] pb-6 sm:pb-8' : 'max-h-0'
//                 }`}
//               >
//                 <div className="border-t border-gray-200 pt-6 sm:pt-8 pl-8 sm:pl-20">
//                   <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
//                     <p className="font-['Poppins'] text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
//                       {section.content}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Contact Section & Footer — already responsive */}
//           {/* ...keep your existing contact + footer here, no major changes needed... */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditions;
