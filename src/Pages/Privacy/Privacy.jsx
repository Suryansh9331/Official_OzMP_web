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

// const PrivacyPolicy = () => {
//   const [expandedSection, setExpandedSection] = useState('info-we-collect');
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
//       id: 'info-we-collect',
//       title: 'Information We Collect',
//       icon: <Users className="w-6 h-6" />,
//       content: `a. Personal Information:\nName\nEmail address\nPhone number\nCompany name\nBilling information\nProject details\n\nb. Technical Information:\nIP address\nBrowser type\nOperating system\nCookies and usage data`,
//     },
//     {
//       id: 'use-of-info',
//       title: 'How We Use Your Information',
//       icon: <CheckCircle className="w-6 h-6" />,
//       content: `• Providing and managing our services\n• Communicating with you regarding your projects\n• Sending newsletters and promotional materials (with your consent)\n• Improving our website and user experience\n• Complying with legal obligations`,
//     },
//     {
//       id: 'sharing-info',
//       title: 'Sharing Your Information',
//       icon: <Shield className="w-6 h-6" />,
//       content: `We do not sell or rent your personal data.\nWe may share data with:\n• Service providers and contractors (under confidentiality agreements)\n• Law enforcement or legal authorities (if required)\n• Third-party platforms used in project delivery (e.g., hosting, email marketing)`,
//     },
//     {
//       id: 'cookies',
//       title: 'Cookies & Tracking',
//       icon: <FileText className="w-6 h-6" />,
//       content: `We use cookies to:\n• Enhance website functionality\n• Analyze user behavior\n• Deliver personalized content\n\nYou can disable cookies via your browser settings, but some features may not work correctly.`,
//     },
//     {
//       id: 'data-retention',
//       title: 'Data Retention',
//       icon: <Lock className="w-6 h-6" />,
//       content: `We retain your personal data only as long as necessary to:\n• Provide the services\n• Comply with legal or contractual obligations\n• Maintain business records`,
//     },
//     {
//       id: 'data-security',
//       title: 'Data Security',
//       icon: <Shield className="w-6 h-6" />,
//       content: `We implement reasonable security measures such as:\n• SSL encryption\n• Access control mechanisms\n• Secure data storage\n\nHowever, no method of transmission over the Internet is 100% secure.`,
//     },
//     {
//       id: 'user-rights',
//       title: 'Your Rights',
//       icon: <Users className="w-6 h-6" />,
//       content: `You may:\n• Access, update, or delete your personal data\n• Withdraw consent at any time\n• Object to data processing\n• Request a copy of the data we hold\n\nPlease email us at privacy@yourcompany.com for requests.`,
//     },
//     {
//       id: 'third-party-links',
//       title: 'Third-Party Links',
//       icon: <FileText className="w-6 h-6" />,
//       content: `Our website may contain links to external sites.\nWe are not responsible for the privacy practices of such websites.`,
//     },
//     {
//       id: 'changes',
//       title: 'Changes to This Policy',
//       icon: <CheckCircle className="w-6 h-6" />,
//       content: `We may update this Privacy Policy occasionally.\nThe updated version will be effective once posted on this page.`,
//     },
//     {
//       id: 'contact',
//       title: 'Contact Us',
//       icon: <Mail className="w-6 h-6" />,
//       content: `Email: privacy@yourcompany.com\nPhone: +91-XXXXXXXXXX`,
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

//           <div className="bg-[#DBD2FF] rounded-2xl p-10 text-black text-center">
//             <h3 className="font-['Outfit'] text-3xl font-bold mb-4">Questions About Our Terms?</h3>
//             <p className="font-['Poppins'] text-lg mb-8 opacity-90">
//               If you have any questions or concerns about these terms and conditions, please don't hesitate to contact us.
//             </p>
//             <div className="grid md:grid-cols-2 gap-6">
//               <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl ${hoverEffect}`}>
//                 <Mail className="w-8 h-8 mx-auto mb-4" />
//                 <p className="font-['Inter'] font-semibold mb-2">General Inquiries</p>
//                 <p className="font-['Poppins'] text-sm">info@ozmediaplanet.com</p>
//               </div>
//               <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl ${hoverEffect}`}>
//                 <Phone className="w-8 h-8 mx-auto mb-4" />
//                 <p className="font-['Inter'] font-semibold mb-2">Support Team</p>
//                 <p className="font-['Poppins'] text-sm">support@ozmediaplanet.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
    
//      <footer className="bg-gray-900 text-white py-16">
//         <div className="container mx-auto px-6">
//           <div className="text-center space-y-8">
//             <div className="flex items-center justify-center space-x-4 mb-8">
//               <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
//                 <Shield className="w-6 h-6" />
//               </div>
//               <h3 className="font-['Outfit'] text-3xl font-bold">Oz Media Planet</h3>
//             </div>
            
//             <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//               <div className={`bg-gray-800 p-6 rounded-xl ${hoverEffect}`}>
//                 <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
//                 <p className="font-['Inter'] font-semibold mb-2">Email Us</p>
//                 <p className="font-['Poppins'] text-sm text-gray-300">info@ozmediaplanet.com</p>
//                 <p className="font-['Poppins'] text-sm text-gray-300">support@ozmediaplanet.com</p>
//               </div>
//               <div className={`bg-gray-800 p-6 rounded-xl ${hoverEffect}`}>
//                 <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
//                 <p className="font-['Inter'] font-semibold mb-2">Visit Us</p>
//                 <p className="font-['Poppins'] text-sm text-gray-300">VijayNagar PU54</p>
//                 <p className="font-['Poppins'] text-sm text-gray-300">Indore M.P., India</p>
//               </div>
//               <div className={`bg-gray-800 p-6 rounded-xl ${hoverEffect}`}>
//                 <FileText className="w-8 h-8 text-purple-400 mx-auto mb-4" />
//                 <p className="font-['Inter'] font-semibold mb-2">Legal</p>
//                 <p className="font-['Poppins'] text-sm text-gray-300">Terms & Conditions</p>
//                 <p className="font-['Poppins'] text-sm text-gray-300">Privacy Policy</p>
//               </div>
//             </div>
            
//             <div className="border-t border-gray-700 pt-8">
//               <p className="font-['Poppins'] text-gray-400">
//                 © 2025 Oz Media Planet. All rights reserved.
//               </p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PrivacyPolicy;





import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Shield,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  Lock,
  ArrowRight,
} from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState('info-we-collect');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hoverEffect =
    'hover:shadow-lg hover:scale-105 transition-all duration-300';

  const sections = [
    {
      id: 'info-we-collect',
      title: 'Information We Collect',
      icon: <Users className="w-6 h-6" />,
      content: `a. Personal Information:\nName\nEmail address\nPhone number\nCompany name\nBilling information\nProject details\n\nb. Technical Information:\nIP address\nBrowser type\nOperating system\nCookies and usage data`,
    },
    {
      id: 'use-of-info',
      title: 'How We Use Your Information',
      icon: <CheckCircle className="w-6 h-6" />,
      content: `• Providing and managing our services\n• Communicating with you regarding your projects\n• Sending newsletters and promotional materials (with your consent)\n• Improving our website and user experience\n• Complying with legal obligations`,
    },
    {
      id: 'sharing-info',
      title: 'Sharing Your Information',
      icon: <Shield className="w-6 h-6" />,
      content: `We do not sell or rent your personal data.\nWe may share data with:\n• Service providers and contractors (under confidentiality agreements)\n• Law enforcement or legal authorities (if required)\n• Third-party platforms used in project delivery (e.g., hosting, email marketing)`,
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: <FileText className="w-6 h-6" />,
      content: `We use cookies to:\n• Enhance website functionality\n• Analyze user behavior\n• Deliver personalized content\n\nYou can disable cookies via your browser settings, but some features may not work correctly.`,
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: <Lock className="w-6 h-6" />,
      content: `We retain your personal data only as long as necessary to:\n• Provide the services\n• Comply with legal or contractual obligations\n• Maintain business records`,
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Shield className="w-6 h-6" />,
      content: `We implement reasonable security measures such as:\n• SSL encryption\n• Access control mechanisms\n• Secure data storage\n\nHowever, no method of transmission over the Internet is 100% secure.`,
    },
    {
      id: 'user-rights',
      title: 'Your Rights',
      icon: <Users className="w-6 h-6" />,
      content: `You may:\n• Access, update, or delete your personal data\n• Withdraw consent at any time\n• Object to data processing\n• Request a copy of the data we hold\n\nPlease email us at privacy@ozmediaplanet.com for requests.`,
    },
    {
      id: 'third-party-links',
      title: 'Third-Party Links',
      icon: <FileText className="w-6 h-6" />,
      content: `Our website may contain links to external sites.\nWe are not responsible for the privacy practices of such websites.`,
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      icon: <CheckCircle className="w-6 h-6" />,
      content: `We may update this Privacy Policy occasionally.\nThe updated version will be effective once posted on this page.`,
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <Mail className="w-6 h-6" />,
      content: `Email: privacy@ozmediaplanet.com\nPhone: +91-XXXXXXXXXX`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-purple-100 rounded-full opacity-20 -top-32 -left-32"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-purple-200 rounded-full opacity-15 top-1/2 -right-24"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />
        <div
          className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-purple-100 rounded-full opacity-10 bottom-20 left-20"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        />
      </div>

      {/* Header */}
      <header className="relative bg-white shadow-xl border-b-10  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:min-h-[60vh] lg:min-h-[80vh] min-h-[70vh] ">
          <div className="text-center space-y-6 sm:space-y-10 mt-8 ">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-lg flex items-center justify-center shadow-xl">
                <img className='w-full h-full' src="/images/logo.png" alt="" />
              </div>
              <div className="text-left max-w-full">
                <h1 className="font-['Outfit'] text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-800">
                  Oz Media Planet
                </h1>
                <p className="font-['Inter'] text-base sm:text-lg text-gray-600 mt-1 sm:mt-2">
                  Privacy Policy
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto px-4 sm:px-0">
              <p className="font-['Poppins'] text-base sm:text-lg text-gray-700 leading-relaxed">
                This Privacy Policy explains how Oz Media Planet collects, uses, and protects your personal data when you use our IT solutions and digital marketing services. By using our services, you consent to the data practices described in this policy.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-purple-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-['Inter']">Home</span>
            <ArrowRight className="w-4 h-4" />
            <span className="font-['Inter'] text-purple-500 font-semibold">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="space-y-10">
          {/* Document Info */}
          <div className="text-center bg-white rounded-2xl p-6 sm:p-8 border-2 border-purple-100 shadow-[10px_10px_0px_rgb(0,0,0,0.8)]">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
              <div className="text-left">
                <p className="font-['Inter'] text-base sm:text-lg font-semibold text-gray-800">
                  Effective Date
                </p>
                <p className="font-['Poppins'] text-gray-600 text-sm sm:text-base">
                  August 6, 2025
                </p>
              </div>
            </div>
            <h2 className="font-['Archivo'] text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Privacy Policy
            </h2>
            <p className="font-['Poppins'] text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              At Oz Media Planet, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your data when you interact with our IT solutions and digital marketing services.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-[#DBD2FF] rounded-xl p-6 sm:p-8 border border-gray-200 shadow-[10px_10px_0px_rgb(0,0,0,0.8)]">
            <h3 className="font-['Inter'] text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-purple-500" />
              Table of Contents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setExpandedSection(section.id);
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-start sm:items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 text-left transition-colors duration-200"
                >
                  <span className="font-['Poppins'] text-purple-500 font-semibold min-w-[24px]">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className="font-['Poppins'] text-gray-700 text-sm sm:text-base">
                    {section.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`bg-[#DBD2FF] rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl shadow-[10px_10px_0px_rgb(0,0,0,0.8)] ${
                index % 2 === 0
                  ? 'transform hover:translate-x-2'
                  : 'transform hover:-translate-x-2'
              }`}
            >
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.id ? '' : section.id
                  )
                }
                className="w-full px-6 sm:px-8 py-6 sm:py-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex items-start sm:items-center space-x-4 sm:space-x-6">
                  <div className="flex items-center space-x-4">
                    <span className="font-['Outfit'] text-xl sm:text-2xl font-bold text-purple-500 min-w-[48px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-500">
                      {section.icon}
                    </div>
                  </div>
                  <h3 className="font-['Inter'] text-lg sm:text-2xl font-semibold text-gray-800">
                    {section.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 sm:w-8 sm:h-8 text-gray-400 transition-transform duration-300 ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 sm:px-8 overflow-hidden transition-all duration-500 ${
                  expandedSection === section.id ? 'max-h-[600px] pb-6 sm:pb-8' : 'max-h-0'
                }`}
              >
                <div className="border-t border-gray-200 pt-6 sm:pt-8 pl-8 sm:pl-20">
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <p className="font-['Poppins'] text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-[#DBD2FF] rounded-2xl p-10 text-black text-center">
            <h3 className="font-['Outfit'] text-3xl font-bold mb-4">Questions About Our Privacy Policy?</h3>
            <p className="font-['Poppins'] text-lg mb-8 opacity-90">
              If you have any questions or concerns about our data practices, feel free to reach out to us.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl ${hoverEffect}`}>
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <p className="font-['Inter'] font-semibold mb-2">General Inquiries</p>
                <p className="font-['Poppins'] text-sm">info@ozmediaplanet.com</p>
              </div>
              <div className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl ${hoverEffect}`}>
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <p className="font-['Inter'] font-semibold mb-2">Support Team</p>
                <p className="font-['Poppins'] text-sm">support@ozmediaplanet.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-['Outfit'] text-3xl font-bold">Oz Media Planet</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className={`bg-gray-800 p-6 rounded-xl ${hoverEffect}`}>
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <p className="font-['Inter'] font-semibold mb-2">Email Us</p>
                <p className="font-['Poppins'] text-sm text-gray-300">info@ozmediaplanet.com</p>
                <p className="font-['Poppins'] text-sm text-gray-300">support@ozmediaplanet.com</p>
              </div>
              <div className={`bg-gray-800 p-6 rounded-xl ${hoverEffect}`}>
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <p className="font-['Inter'] font-semibold mb-2">Visit Us</p>
                <p className="font-['Poppins'] text-sm text-gray-300">VijayNagar PU54</p>
                <p className="font-['Poppins'] text-sm text-gray-300">Indore M.P., India</p>
              </div>
              <div className={`bg-gray-800 p-6 rounded-xl ${hoverEffect}`}>
                <FileText className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <p className="font-['Inter'] font-semibold mb-2">Legal</p>
                <p className="font-['Poppins'] text-sm text-gray-300">Terms & Conditions</p>
                <p className="font-['Poppins'] text-sm text-gray-300">Privacy Policy</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="font-['Poppins'] text-gray-400">
                © 2025 Oz Media Planet. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
