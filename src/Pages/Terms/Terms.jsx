import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, FileText, Mail, Phone, MapPin, Calendar, Users, CheckCircle, Lock, ArrowRight } from 'lucide-react';

const TermsAndConditions = () => {
  const [expandedSection, setExpandedSection] = useState('introduction');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hoverEffect = "hover:shadow-lg hover:scale-105 transition-all duration-300";

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <Users className="w-6 h-6" />,
      content: `Welcome to Oz Media Planet ("Company", "we", "our", "us"). These Terms and Conditions ("Terms") govern your use of our website, services, and products related to IT solutions, software development, digital marketing, and other consulting services.

By accessing or using our website or services, you agree to be bound by these Terms. If you do not agree, please do not use our services.`
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: <CheckCircle className="w-6 h-6" />,
      content: `We offer comprehensive digital solutions including:

• Website & Mobile App Development
• Digital Marketing (SEO, SEM, SMM, PPC)
• UI/UX Design
• Cloud Solutions
• IT Consulting & Strategy
• Software Maintenance & Support

We reserve the right to modify or discontinue services at any time without notice.`
    },
    {
      id: 'eligibility',
      title: 'Eligibility',
      icon: <Shield className="w-6 h-6" />,
      content: `You must be at least 18 years old to use our services. By using our services, you represent that you have the legal capacity to enter into this agreement.`
    },
    {
      id: 'responsibilities',
      title: 'User Responsibilities',
      icon: <FileText className="w-6 h-6" />,
      content: `You agree not to:

• Use our services for unlawful or harmful purposes
• Violate the intellectual property rights of others or our company
• Interfere with our systems, security, or operations
• Misuse or resell our services without prior written consent`
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property',
      icon: <Lock className="w-6 h-6" />,
      content: `All content, designs, software, logos, and materials developed by or for Oz Media Planet are the property of the company unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited.`
    },
    {
      id: 'client-obligations',
      title: 'Client Obligations',
      icon: <Users className="w-6 h-6" />,
      content: `Clients must:

• Provide accurate project requirements and timely feedback
• Ensure timely payments as per agreed terms
• Not use our services for malicious, illegal, or unethical purposes`
    },
    {
      id: 'payments',
      title: 'Payments & Refunds',
      icon: <CheckCircle className="w-6 h-6" />,
      content: `All fees are outlined in project proposals or service agreements. Payment terms must be followed as per the invoice schedule. Refunds are not provided once services are rendered or development has begun, except under specific agreements.`
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      icon: <Shield className="w-6 h-6" />,
      content: `We may use third-party tools, platforms, or APIs. We are not liable for any third-party failures or service disruptions.`
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      icon: <FileText className="w-6 h-6" />,
      content: `We are not liable for:

• Any indirect or consequential loss or damage
• Loss of business, reputation, or data
• Delays or failures beyond our reasonable control`
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <Lock className="w-6 h-6" />,
      content: `We may suspend or terminate services:

• For breach of these terms
• If payment is not received
• If the service is misused or abused`
    },
    {
      id: 'governing',
      title: 'Governing Law',
      icon: <Shield className="w-6 h-6" />,
      content: `These Terms are governed by the laws of India, without regard to conflict of law principles.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-100 rounded-full opacity-20 -top-48 -left-48"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute w-80 h-80 bg-purple-200 rounded-full opacity-15 top-1/2 -right-40"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />
        <div 
          className="absolute w-64 h-64 bg-purple-100 rounded-full opacity-10 bottom-20 left-20"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        />
      </div>

      {/* Header */}
      <header className="relative bg-white shadow-xl border-b-4 border-purple-200">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <h1 className="font-['Outfit'] text-6xl font-bold text-gray-800">
                  Oz Media Planet
                </h1>
                <p className="font-['Inter'] text-xl text-gray-600 mt-2">
                  Terms & Conditions
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="font-['Poppins'] text-lg text-gray-700 leading-relaxed">
                Please read these terms and conditions carefully before using our services. 
                By accessing or using our services, you agree to be bound by these terms.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-purple-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="font-['Inter']">Home</span>
            <ArrowRight className="w-4 h-4" />
            <span className="font-['Inter'] text-purple-600 font-semibold">Terms & Conditions</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Document Info */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Calendar className="w-8 h-8 text-purple-600" />
              <div className="text-left">
                <p className="font-['Inter'] text-lg font-semibold text-gray-800">Effective Date</p>
                <p className="font-['Poppins'] text-gray-600">August 6, 2025</p>
              </div>
            </div>
            <h2 className="font-['Archivo'] text-4xl font-bold text-gray-800 mb-4">
              Terms and Conditions
            </h2>
            <p className="font-['Poppins'] text-gray-600 text-lg max-w-2xl mx-auto">
              These terms govern your relationship with Oz Media Planet and outline the rights and 
              responsibilities of both parties when using our IT solutions and digital marketing services.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="font-['Inter'] text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-600" />
              Table of Contents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setExpandedSection(section.id);
                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 text-left transition-colors duration-200"
                >
                  <span className="font-['Poppins'] text-purple-600 font-semibold min-w-[24px]">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className="font-['Poppins'] text-gray-700">{section.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl ${
                index % 2 === 0 ? 'transform hover:translate-x-2' : 'transform hover:-translate-x-2'
              }`}
            >
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? '' : section.id)}
                className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-4">
                    <span className="font-['Outfit'] text-2xl font-bold text-purple-600 min-w-[48px]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      {section.icon}
                    </div>
                  </div>
                  <h3 className="font-['Inter'] text-2xl font-semibold text-gray-800">{section.title}</h3>
                </div>
                <ChevronDown
                  className={`w-8 h-8 text-gray-400 transition-transform duration-300 ${
                    expandedSection === section.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`px-8 overflow-hidden transition-all duration-500 ${
                  expandedSection === section.id ? 'max-h-96 pb-8' : 'max-h-0'
                }`}
              >
                <div className="border-t border-gray-200 pt-8 pl-20">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="font-['Poppins'] text-gray-700 leading-relaxed whitespace-pre-line text-base">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-10 text-white text-center">
            <h3 className="font-['Outfit'] text-3xl font-bold mb-4">Questions About Our Terms?</h3>
            <p className="font-['Poppins'] text-lg mb-8 opacity-90">
              If you have any questions or concerns about these terms and conditions, please don't hesitate to contact us.
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
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

export default TermsAndConditions;