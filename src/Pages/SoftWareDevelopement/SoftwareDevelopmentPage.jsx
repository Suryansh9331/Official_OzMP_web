import React, { useState } from "react";
import {
  CircleCheck,
  Code2,
  Database,
  Cog,
  Zap,
  Shield,
  Users,
  BarChart3,
  Settings,
  MonitorPlay,
  Server,
  Layers,
  Cloud,
  Lock,
  ArrowRight,
  CheckCircle,
  Globe,
  Cpu,
  Brain,
  Workflow,
} from "lucide-react";

import HeroImg from "../../assets/SoftwareDevelopmentPage/hero.png";

import PhpLogo from "../../assets/WebDevelopment/php-logo.png";
import { Link } from "react-router-dom";

const SoftwareDevelopmentPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  const features = [
    {
      icon: <Code2 size={40} />,
      title: "Custom Software",
      description:
        "Tailor-made solutions designed specifically for your business processes and industry requirements.",
    },
    {
      icon: <Database size={40} />,
      title: "Enterprise Systems",
      description:
        "Robust ERP, CRM, and SaaS platforms built to handle complex business operations at scale.",
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud Integration",
      description:
        "Scalable cloud-based solutions with seamless integration capabilities for modern businesses.",
    },
    {
      icon: <Shield size={40} />,
      title: "Secure Architecture",
      description:
        "Enterprise-grade security with encrypted data handling and compliance with industry standards.",
    },
  ];

  const technologies = [
    {
      name: "MERN",
      color: "#61DAFB",
      description: "MongoDB, Express, React, Node.js",
      icon: "https://5.imimg.com/data5/SELLER/Default/2023/8/339150271/LH/TG/EZ/9375037/mern-full-stack-support-pro-plan-500x500.png",
    },
    {
      name: "MEAN",
      color: "#DD0031",
      description: "MongoDB, Express, Angular, Node.js",
      icon: "https://etlhive.com/wp-content/uploads/2024/04/mean-stack.png",
    },
    {
      name: "PHP",
      color: "#777BB4",
      description: "Server-side scripting",
      icon: PhpLogo,
    },
    {
      name: "Python",
      color: "#3776AB",
      description: "Data processing & AI",
      icon: "https://www.shutterstock.com/image-vector/vector-illustration-icon-python-programming-260nw-1397241389.jpg",
    },
    {
      name: "MySQL",
      color: "#4479A1",
      description: "Relational database",
      icon: "https://pngimg.com/d/mysql_PNG9.png",
    },
    {
      name: "AWS",
      color: "#FF9900",
      description: "Cloud infrastructure",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nKHJAA85nQMg0FOVqqJcl6i6pRiaxHMBpQ&s",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description:
        "Deep dive into your business processes, workflows, and specific requirements to design the perfect solution architecture.",
    },
    {
      step: "02",
      title: "System Architecture",
      description:
        "Creating scalable system design with database modeling, API planning, and security framework establishment.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development approach with continuous testing, code reviews, and quality assurance throughout the process.",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Seamless deployment to production with comprehensive training, documentation, and ongoing technical support.",
    },
  ];

  // New unique software solutions with interactive tabs
  const softwareSolutions = [
    {
      id: 0,
      title: "Enterprise Resource Planning (ERP)",
      category: "Business Management",
      description:
        "Comprehensive ERP systems that unify all your business processes into one powerful platform",
      longDescription:
        "Our ERP solutions integrate every aspect of your business operations, from inventory and supply chain management to financial reporting and human resources. Built with modern architecture, our ERP systems provide real-time visibility into your business performance.",
      features: [
        "Inventory Management",
        "Financial Reporting",
        "HR Management",
        "Supply Chain",
        "Real-time Analytics",
        "Multi-location Support",
      ],
      benefits: [
        "40% reduction in operational costs",
        "60% faster reporting",
        "Unified data across departments",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      icon: <Database size={32} className="text-purple-600" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 1,
      title: "Customer Relationship Management (CRM)",
      category: "Sales & Marketing",
      description:
        "Advanced CRM platforms that transform how you manage customer relationships and drive sales growth",
      longDescription:
        "Our CRM solutions provide a 360-degree view of your customers, from initial lead capture to long-term relationship management. With advanced analytics and automation, boost your sales team's productivity and customer satisfaction.",
      features: [
        "Lead Tracking",
        "Sales Pipeline",
        "Customer Analytics",
        "Automation",
        "Email Integration",
        "Mobile Access",
      ],
      benefits: [
        "45% increase in sales productivity",
        "30% improvement in customer retention",
        "Real-time sales insights",
      ],
      image:
        "https://multipurposethemes.com/wp-content/uploads/2023/07/CRM-Bootstrap-5-Admin-Dashboard-2.jpg",
      icon: <Users size={32} className="text-purple-600" />,
      color: "from-green-500 to-teal-600",
    },
    {
      id: 2,
      title: "Software as a Service (SaaS)",
      category: "Cloud Solutions",
      description:
        "Multi-tenant SaaS applications with subscription management and scalable architecture",
      longDescription:
        "Build and launch your own SaaS platform with our comprehensive development approach. From multi-tenancy architecture to subscription billing, we handle all the technical complexities while you focus on your core business.",
      features: [
        "Multi-tenancy",
        "Subscription Billing",
        "API Integration",
        "Analytics Dashboard",
        "User Management",
        "Payment Processing",
      ],
      benefits: [
        "Scalable to millions of users",
        "99.9% uptime guarantee",
        "Global deployment ready",
      ],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      icon: <Cloud size={32} className="text-purple-600" />,
      color: "from-blue-500 to-cyan-600",
    },
  ];

  // Enhanced industries with more interactive design
  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      description:
        "HIPAA-compliant solutions for patient management and medical records",
      projects: "25+ Projects",
      color: "bg-red-100 hover:bg-red-200",
      image:
        "https://themewagon.com/wp-content/uploads/2020/06/MedicalCenter-1.jpg",
    },
    {
      name: "Finance",
      icon: "💰",
      description:
        "Secure banking and fintech solutions with regulatory compliance",
      projects: "18+ Projects",
      color: "bg-green-100 hover:bg-green-200",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Industrial IoT and supply chain management systems",
      projects: "30+ Projects",
      color: "bg-orange-100 hover:bg-orange-200",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    },
    {
      name: "Education",
      icon: "🎓",
      description: "Learning management systems and educational platforms",
      projects: "22+ Projects",
      color: "bg-blue-100 hover:bg-blue-200",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
    },
    {
      name: "Retail",
      icon: "🛍️",
      description: "E-commerce platforms and inventory management solutions",
      projects: "35+ Projects",
      color: "bg-pink-100 hover:bg-pink-200",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
    },
    {
      name: "Logistics",
      icon: "🚚",
      description: "Fleet management and supply chain optimization systems",
      projects: "28+ Projects",
      color: "bg-yellow-100 hover:bg-yellow-200",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=200&fit=crop",
    },
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Manufacturing Corp",
      quote:
        "Their custom ERP solution transformed our entire operation. We've seen 40% improvement in efficiency.",
      rating: 5,
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Lisa Chang",
      company: "TechVenture Ltd",
      quote:
        "The SaaS platform they built scaled perfectly with our growth. Excellent architecture and support.",
      rating: 5,
      position: "CEO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c3b7?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Robert Wilson",
      company: "Healthcare Solutions",
      quote:
        "Secure, compliant, and user-friendly. Exactly what we needed for our healthcare management system.",
      rating: 5,
      position: "Director of IT",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(156, 146, 172, 0.1) 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="w-full lg:w-[85%] relative z-10 flex flex-col lg:flex-row items-center min-h-screen px-4 sm:px-6 py-8">
          {/* Text Content */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <div className="inline-block bg-[#dcd4ff] text-black px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-[2px_2px_0px_#000]">
              💻 SOFTWARE DEVELOPMENT
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Tailor-Made Software
              <br />
              <span className="text-purple-600">for Every Business</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We develop enterprise-grade software systems to streamline
              operations, automate processes, and enhance productivity across
              all industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/contact-us">
                <button className="uppercase cursor-pointer font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                  Start Your Project
                </button>
              </Link>
              <Link to="/blogs">
                <button className="uppercase  cursor-pointer font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                  Get Idea
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">150+</div>
                <div className="text-sm text-gray-600">Software Built</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">System Monitoring</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
            <div className="relative">
              {/* add img */}
              <img
                src={HeroImg}
                alt="Software Development Hero"
                className="w-full h-auto rounded-3xl shadow-lg border-2 border-black"
              />
              <div className="absolute top-4 right-4 bg-purple-200 text-black px-4 py-2 rounded-full shadow-lg">
                <Settings size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Why Choose Our Software Development?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to
              create software that drives business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? "bg-[#dcd4ff] shadow-[8px_8px_0px_#000] transform -translate-x-1 -translate-y-1"
                    : "bg-gray-50 hover:bg-[#dcd4ff] hover:shadow-[4px_4px_0px_#000]"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW: Complete Software Solutions - Unique Interactive Design */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Complete Software Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive platforms designed to transform your business
              operations with cutting-edge technology.
            </p>
          </div>

          {/* Interactive Solution Cards */}
          <div className="space-y-32">
            {softwareSolutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div
                    className={`inline-flex items-center gap-3 px-4 py-2 bg-[#dcd4ff] text-black rounded-full shadow-[2px_2px_0px_#000] transition-all duration-300 hover:bg-purple-200`}
                  >
                    {solution.icon}
                    <span>{solution.category}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-black">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {solution.longDescription}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle
                          size={16}
                          className="text-blue-500 flex-shrink-0"
                        />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  {/* <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500">
                                        <h4 className="font-bold text-black mb-3">Key Benefits:</h4>
                                        <ul className="space-y-2">
                                            {solution.benefits.map((benefit, benefitIndex) => (
                                                <li key={benefitIndex} className="flex items-center gap-2">
                                                    <ArrowRight size={14} className="text-purple-600" />
                                                    <span className="text-gray-700 text-sm">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div> */}

                  {/* <button className="bg-[#dcd4ff] text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                                        Learn More About {solution.title.split(' ')[0]}
                                    </button> */}
                </div>

                {/* Visual Side */}
                <div className="flex-1">
                  <div className="relative group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-[#dcd4ff] to-[#dcd4ff] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}
                    ></div>
                    <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-2 border-black">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-64 object-cover rounded-2xl mb-6"
                      />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold text-gray-600">
                            System Status
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-green-600">
                              Online
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-600">
                              99.9%
                            </div>
                            <div className="text-xs text-gray-600">Uptime</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">
                              150ms
                            </div>
                            <div className="text-xs text-gray-600">
                              Response
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">
                              24/7
                            </div>
                            <div className="text-xs text-gray-600">Support</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW: Industries We Serve - Enhanced Interactive Design */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized software solutions across diverse industries with deep
              domain knowledge and proven expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
              >
                <div
                  className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                    hoveredIndustry === index
                      ? "transform -translate-y-2 shadow-[12px_12px_0px_#000]"
                      : "shadow-[6px_6px_0px_#000]"
                  } bg-white border-2 border-black`}
                >
                  {/* Image Background */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#dcd4ff] rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-black">
                      {industry.icon}
                    </div>

                    {/* Project Count Badge */}
                    <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {industry.projects}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-black">
                      {industry.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Interactive Elements */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600 font-semibold">
                          Active Projects
                        </span>
                      </div>
                      <ArrowRight
                        size={20}
                        className={`text-purple-600 transition-transform duration-300 ${
                          hoveredIndustry === index ? "translate-x-1" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredIndustry === index && (
                    <div className="absolute inset-0 bg-[#dcd4ff]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2 border-black font-semibold">
                        Explore Solutions
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_#000]">
              <h3 className="text-2xl font-bold text-black mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-gray-700 mb-6 max-w-md mx-auto">
                We work across all sectors. Let's discuss how we can create
                custom software for your specific industry needs.
              </p>
              <Link to="/projects-details ">
                <button className="bg-[#dcd4ff] cursor-pointer text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                  See All Projects
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-24 bg-gray-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable,
              and secure software solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div
                  className={`p-6 rounded-2xl text-center transition-all duration-300 ${
                    hoveredTech === index
                      ? "bg-[#dcd4ff] shadow-[6px_6px_0px_#000] transform -translate-x-1 -translate-y-1"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: tech.color }}
                  >
                    <img
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      className="w-10 h-10 object-contain"
                      style={{
                        backgroundColor: tech.color,
                        borderRadius: "50%",
                        padding: "2px",
                      }}
                    />
                  </div>

                  <h3 className="font-semibold text-black mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-20"></div>

        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A systematic approach ensuring successful software delivery from
              concept to deployment.
            </p>
          </div>

          {/* Timeline Design */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-purple-800 to-purple-400 transform -translate-x-1/2"></div>

            <div className="space-y-24 lg:space-y-32">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`lg:w-5/12 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <div className="group cursor-pointer">
                      <div
                        className={`bg-[#dcd4ff] text-black px-8 py-9 rounded-tr-[10px] rounded-bl-[10px] transition-all duration-300 shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000] border border-black hover:bg-white`}
                      >
                        <div
                          className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 bg-white text-black border-2 border-black hover:bg-[#dcd4ff] group-hover:bg-[#dcd4ff] transition-colors duration-300`}
                        >
                          Step {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-4">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex lg:w-2/12 justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-black shadow-lg flex items-center justify-center text-black font-bold text-xl transition-all duration-500 hover:scale-125 bg-[#dcd4ff]">
                        {step.step}
                      </div>

                      {/* Pulse Animation */}
                      <div className="absolute inset-0 animate-ping opacity-20 bg-purple-600"></div>
                    </div>
                  </div>

                  {/* Mobile Step Number */}
                  <div className="lg:hidden">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg bg-[#dcd4ff]">
                      {step.step}
                    </div>
                  </div>

                  {/* Empty Space for Alternating Layout */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="hidden lg:block absolute left-1/2 top-0 w-6 h-6 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-3 shadow-lg"></div>
            <div className="hidden lg:block absolute left-1/2 bottom-0 w-6 h-6 bg-purple-500 rounded-full transform -translate-x-1/2 translate-y-3 shadow-lg"></div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-[#dcd4ff] text-black px-8 py-9 rounded-tr-[10px] rounded-bl-[10px] transition-all duration-300 shadow-[8px_8px_0px_#000] border border-black">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your Software Project?
              </h3>
              <p className="mb-6 text-black">
                Let's discuss your requirements and build the perfect solution
                for your business!
              </p>
              <Link to="/contact-us">
                <button className="uppercase cursor-pointer font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 active:translate-x-0 active:translate-y-0 border-2 border-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials */}
      {/* <div className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Success stories from businesses that transformed their operations with our custom software solutions.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="group">
                                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 hover:-translate-y-2">
                                   
                                    <div className="flex items-center gap-4 mb-6">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                                        />
                                        <div>
                                            <div className="font-semibold text-black">{testimonial.name}</div>
                                            <div className="text-sm text-purple-600 font-medium">{testimonial.position}</div>
                                            <div className="text-sm text-gray-600">{testimonial.company}</div>
                                        </div>
                                    </div>
                                    
                                
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                                        ))}
                                    </div>
                                    
                                    
                                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                                    
                                 
                                    <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

      {/* Key Benefits Section */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Why Businesses Choose Our Software
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the advantages of custom software built with
              enterprise-grade standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Zap size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Increased Efficiency
              </h3>
              <p className="text-gray-700">
                Automate repetitive tasks and streamline workflows to boost
                productivity by up to 60%.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Shield size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-700">
                Advanced security protocols with data encryption and compliance
                with industry standards.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Layers size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Scalable Architecture
              </h3>
              <p className="text-gray-700">
                Built to grow with your business, handling increased load
                without performance degradation.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Database size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Data Integration
              </h3>
              <p className="text-gray-700">
                Seamless integration with existing systems and third-party APIs
                for unified operations.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <BarChart3 size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Real-time Analytics
              </h3>
              <p className="text-gray-700">
                Comprehensive dashboards with real-time insights and
                customizable reporting features.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Users size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                User-Centric Design
              </h3>
              <p className="text-gray-700">
                Intuitive interfaces designed for maximum user adoption and
                minimal training requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="py-24 bg-black text-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Ready to Transform Your Business with Custom Software?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Let's discuss your unique requirements and build enterprise-grade software that drives growth and efficiency.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#333] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#333] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#333]">
                            Start Your Project
                        </button>
                        <button className="uppercase font-semibold bg-transparent text-white px-8 py-4 rounded-full border-2 border-white transition-all duration-300 hover:bg-white hover:text-black">
                            Schedule Consultation
                        </button>
                    </div>
                    
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <Users size={40} className="mx-auto mb-4 text-purple-400" />
                            <h3 className="text-xl font-semibold mb-2">Expert Development Team</h3>
                            <p className="text-gray-400">Skilled developers with industry expertise</p>
                        </div>
                        <div>
                            <Shield size={40} className="mx-auto mb-4 text-purple-400" />
                            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                            <p className="text-gray-400">Built with security and compliance in mind</p>


                            </div>
                        <div>
                            <BarChart3 size={40} className="mx-auto mb-4 text-purple-400" />
                            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                            <p className="text-gray-400">Delivering measurable business outcomes</p>
                        </div>
                    </div>
                </div>
            </div> */}

      {/* Final CTA Section */}
      <div className="py-24 bg-gradient-to-br from-black to-black text-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Let's Build Something Extraordinary
              </h2>
              <p className="text-lg text-purple-100 mb-8">
                Whether you need a complete enterprise system or a custom
                business application, our team is ready to bring your vision to
                life with cutting-edge software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link  to ="/contact-us">   
                <button className="bg-white cursor-pointer text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50 hover:shadow-lg">
                Lets work together 
                </button>
               </Link>
              <Link  to ="/blogs">   
                <button className="bg-transparent cursor-pointer  text-white px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10">
                 Read Latest Blogs
                </button>
            </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 absolute -top-8 -left-8"></div>
                <div className="w-64 h-64 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full opacity-20 absolute -bottom-8 -right-8"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Cpu size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Technical Support
                      </h3>
                      <p className="text-purple-100">24/7 system monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Brain size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        AI Integration
                      </h3>
                      <p className="text-purple-100">
                        Smart automation features
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-black text-white py-16">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6">Software Solutions</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Software</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise Systems</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Solutions</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Applications</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI & Machine Learning</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6">Industries</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Healthcare</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Finance</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Manufacturing</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Education</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Retail</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Process</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
                            <div className="flex gap-4 mb-6">
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h4>
                                <form className="flex">
                                    <input 
                                        type="email" 
                                        placeholder="Your email" 
                                        className="bg-gray-800 text-white px-4 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                                    />
                                    <button 
                                        type="submit" 
                                        className="bg-purple-600 text-white px-6 py-3 rounded-r-full hover:bg-purple-700 transition-colors"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2023 Software Solutions. All rights reserved.
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer> */}
    </div>
  );
};

export default SoftwareDevelopmentPage;
