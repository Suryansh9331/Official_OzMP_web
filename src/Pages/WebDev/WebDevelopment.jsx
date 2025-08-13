import React, { useState } from "react";
import {
  CircleCheck,
  Code,
  Smartphone,
  Search,
  Zap,
  Globe,
  Users,
  BarChart3,
  Shield,
  Palette,
  Settings,
  MonitorPlay,
} from "lucide-react";
import HeroImg from "../../assets/WebDevelopment/hero.png";
import { Link } from "react-router-dom";
import img1 from "../../assets/WebDevelopment/img1.png";

import ReactLogo from "../../assets/WebDevelopment/react-logo.png";
import NodeLogo from "../../assets/WebDevelopment/node-logo.png";
import MongoLogo from "../../assets/WebDevelopment/mongo-logo.png";
import NextLogo from "../../assets/WebDevelopment/next-logo.png";
import PhpLogo from "../../assets/WebDevelopment/php-logo.png";
import TailwindLogo from "../../assets/WebDevelopment/tailwind-logo.png";

const WebsiteDevelopmentPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);

  const features = [
    {
      icon: <Code size={40} />,
      title: "Custom Development",
      description:
        "Tailored solutions built from scratch to match your unique brand identity and business requirements.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Responsive",
      description:
        "Pixel-perfect designs that adapt seamlessly across all devices and screen sizes.",
    },
    {
      icon: <Search size={40} />,
      title: "SEO Optimized",
      description:
        "Built-in SEO best practices to help your website rank higher in search results.",
    },
    {
      icon: <Zap size={40} />,
      title: "High Performance",
      description:
        "Lightning-fast loading speeds and optimized performance for better user experience.",
    },
  ];

  const technologies = [
    {
      name: "React",
      color: "#61DAFB",
      description: "Modern frontend framework",
      image: ReactLogo,
    },
    {
      name: "Node.js",
      color: "#339933",
      description: "Server-side JavaScript",
      image: NodeLogo,
    },
    {
      name: "MongoDB",
      color: "#47A248",
      description: "NoSQL database",
      image: MongoLogo,
    },
    {
      name: "Next.js",
      color: "white",
      description: "Full-stack React framework",
      image: NextLogo,
    },
    {
      name: "PHP",
      color: "#3178C6",
      description: "Server-side scripting",
      image: PhpLogo,
    },
    {
      name: "Tailwind",
      color: "#06B6D4",
      description: "Utility-first CSS",
      image: TailwindLogo,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We understand your business goals, target audience, and project requirements to create a comprehensive development strategy.",
    },
    {
      step: "02",
      title: "Design & Wireframing",
      description:
        "Creating user-friendly wireframes and stunning visual designs that align with your brand identity.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Building your website with clean code, rigorous testing, and ensuring cross-browser compatibility.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description:
        "Seamless deployment to production with ongoing maintenance and technical support.",
    },
  ];

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Online Store",
      description: "Modern e-commerce solution with payment integration",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    },
    {
      title: "Corporate Website",
      category: "Business",
      description: "Professional corporate presence with CMS",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    },
    {
      title: "Portfolio Website",
      category: "Creative",
      description: "Showcase platform for creative professionals",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      quote:
        "Their team delivered exactly what we needed - a fast, beautiful website that converts visitors into customers.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "GreenLeaf Solutions",
      quote:
        "Professional service from start to finish. Our new website has increased our online presence significantly.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio",
      quote:
        "Outstanding work! They understood our vision and brought it to life perfectly.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
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
              🚀 WEBSITE DEVELOPMENT
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Build a Strong
              <br />
              <span className="text-purple-600">Online Presence</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We design and develop custom websites that not only look great but
              also perform exceptionally well across all devices and platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/contact-us">
                <button className="uppercase  cursor-pointer font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                  Get Started Today
                </button>
              </Link>
              <Link to="/about-us">
                <button className="uppercase cursor-pointer font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                  View Portfolio
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-gray-600">Websites Built</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">99%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
            {/* <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl transform rotate-6 shadow-2xl"></div>
                            <div className="absolute inset-0 w-80 h-80 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                                <MonitorPlay size={120} className="text-purple-600" />
                            </div>
                        </div> */}

            {/* add image */}
            <div className="relative">
              <img
                src={HeroImg}
                alt="Website Development Hero"
                className="w-full h-auto rounded-3xl transform transition-transform duration-300 hover:scale-105 object-fit"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Why Choose Our Website Development?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven design principles
              to create websites that drive results.
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

      {/* Services Breakdown */}
      <div className="py-24">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Complete Website Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Custom Static and Dynamic Websites
                  </h3>
                  <p className="text-gray-700">
                    Tailored to your brand with unique designs that reflect your
                    business identity and values, from simple brochure sites to
                    complex web applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Mobile and Desktop Responsive Designs
                  </h3>
                  <p className="text-gray-700">
                    Ensure your website looks perfect and functions flawlessly
                    on all devices, providing an optimal user experience across
                    smartphones, tablets, and desktops.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    SEO-Optimized Site Architecture
                  </h3>
                  <p className="text-gray-700">
                    Built with search engine optimization in mind, featuring
                    clean code, proper meta tags, structured data, and fast
                    loading speeds to improve search rankings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Performance-Focused Development
                  </h3>
                  <p className="text-gray-700">
                    Optimized for fast loading times and high engagement, using
                    modern techniques like lazy loading, image optimization, and
                    efficient caching strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
                                <div className="bg-white rounded-2xl p-6 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                        <div className="h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded"></div>
                                        <div className="flex gap-2">
                                            <div className="h-4 bg-purple-200 rounded flex-1"></div>
                                            <div className="h-4 bg-blue-200 rounded flex-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

              {/* add image */}

              <img
                src={img1}
                alt="Website Development Services"
                className="w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-105 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage the latest and most reliable technologies to build
              robust, scalable websites.
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
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <img
                      src={tech.image}
                      alt={`${tech.name} logo`}
                      className="w-10 h-10 object-contain"
                      style={{
                        backgroundColor: tech.color,
                        borderRadius: "50%",
                        padding: "6px",
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
      <div className="py-24 bg-gray-50 relative overflow-hidden">
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
              A proven methodology that ensures successful project delivery from
              concept to launch.
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
                      <div
                        className={`w-16 h-16 border-4 border-black shadow-lg flex items-center justify-center text-black font-bold text-xl transition-all duration-500 hover:scale-125 ${
                          index === 0
                            ? "bg-[#dcd4ff]"
                            : index === 1
                            ? "bg-[#dcd4ff]"
                            : index === 2
                            ? "bg-[#dcd4ff]"
                            : "bg-[#dcd4ff]"
                        }`}
                      >
                        {step.step}
                      </div>

                      {/* Pulse Animation */}
                      <div
                        className={`absolute inset-0 animate-ping opacity-20 ${
                          index === 0
                            ? "bg-purple-600"
                            : index === 1
                            ? "bg-purple-600"
                            : index === 2
                            ? "bg-purple-600"
                            : "bg-purple-600"
                        }`}
                      ></div>
                    </div>
                  </div>

                  {/* Mobile Step Number */}
                  <div className="lg:hidden">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-black font-bold text-lg ${
                        index === 0
                          ? "bg-[#dcd4ff]"
                          : index === 1
                          ? "bg-[#dcd4ff]"
                          : index === 2
                          ? "bg-[#dcd4ff]"
                          : "bg-[#dcd4ff]"
                      }`}
                    >
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
                Ready to Start Your Project?
              </h3>
              <p className="mb-6 text-black">
                Let's discuss your requirements and kick off your development
                journey today!
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

      {/* Portfolio Showcase */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Take a look at some of our latest website development projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-semibold">{item.category}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects-details">
              <button className="uppercase cursor-pointer font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">
                      ★
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-black">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-black text-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's transform your vision into a powerful online presence that
            drives results and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us">
              <button className="uppercase cursor-pointer font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#333] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#333] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#333]">
                Start Your Project
              </button>
            </Link>
            <Link to="/contact-us">
              <button className="uppercase cursor-pointer font-semibold bg-transparent text-white px-8 py-4 rounded-full border-2 border-white transition-all duration-300 hover:bg-white hover:text-black">
                Schedule Consultation
              </button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Users size={40} className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-400">Skilled developers and designers</p>
            </div>
            <div>
              <Shield size={40} className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-400">
                Built with security best practices
              </p>
            </div>
            <div>
              <BarChart3 size={40} className="mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Results Driven</h3>
              <p className="text-gray-400">Focused on your business goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopmentPage;
