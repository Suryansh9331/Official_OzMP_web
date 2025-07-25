// ServicesOverview.jsx

import { ArrowRight } from "lucide-react";

const servicesData = [
  {
    title: "Digital Marketing Services",
    points: [
      "Social Media Marketing (Facebook, Instagram, LinkedIn, YouTube)",
      "SEO – Search Engine Optimization",
      "Performance Marketing (Google Ads, Paid Campaigns)",
      "Branding & Creative Direction",
      "Influencer Marketing",
      "Email Marketing Automation",
      "Video Production & Editing",
    ],
  },
  {
    title: "Analytics & Strategy Services",
    points: [
      "Data Analytics & Business Intelligence",
      "Digital Strategy & Consulting",
      "Conversion Rate Optimization (CRO)",
      "CRM & ERP System Solutions",
      "AI-Powered Solutions and Automation",
      "UI/UX Design Services",
      "API Integration Services",
    ],
  },
  {
    title: "IT & Technology Solutions",
    points: [
      "Website Design & Development",
      "E-Commerce Development",
      "Mobile App Development (iOS, Android, Hybrid)",
      "CRM & ERP System Solutions",
      "AI-Powered Solutions and Automation",
      "UI/UX Design Services",
      "API Integration Services",
    ],
  },
];

const ServicesOverview = () => {
  return (
    <div className="w-full bg-white px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">Services Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-[#DCD4FF] rounded-xl shadow-md px-6 py-8 flex flex-col justify-between min-h-[480px]"
          >
            <div>
              <h3
                className="text-[#3D0D84] text-xl font-semibold mb-6"
                style={{ fontFamily: "Archivo, sans-serif" }}
              >
                {service.title}
              </h3>
              <ul className="space-y-4">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    <ArrowRight size={16} className="text-[#3D0D84] mt-1" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="mt-8 self-start px-4 py-2 text-xs rounded-full bg-white text-[#3D0D84] font-semibold shadow-sm hover:scale-105 transition-all"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              LEARN MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOverview;
