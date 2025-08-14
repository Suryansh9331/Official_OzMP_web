import React, { useState, useEffect } from "react";
import {
  CircleCheck,
  Palette,
  Monitor,
  Smartphone,
  Eye,
  Layers,
  Users,
  BarChart3,
  Settings,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Paintbrush,
  MousePointer,
  Layout,
  Heart,
  Star,
  Globe,
  Code,
  Database,
  Cloud,
  Lock,
  Brain,
  Workflow,
  Camera,
  Figma,
  Pen,
  Image,
  Square,
  Triangle,
  Circle,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";

const GraphicUIUXDesignPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeDesignType, setActiveDesignType] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: <Palette size={40} />,
      title: "Brand Identity",
      description:
        "Complete brand identity packages including logos, color schemes, typography, and brand guidelines that create lasting impressions.",
    },
    {
      icon: <Monitor size={40} />,
      title: "UI/UX Design",
      description:
        "User-centered interface designs that prioritize usability, accessibility, and conversion optimization for web and mobile platforms.",
    },
    {
      icon: <Eye size={40} />,
      title: "Visual Design",
      description:
        "Stunning graphics, illustrations, and visual elements that communicate your message effectively across all marketing channels.",
    },
    {
      icon: <MousePointer size={40} />,
      title: "Interactive Design",
      description:
        "Engaging interactive elements, animations, and micro-interactions that enhance user experience and drive engagement.",
    },
  ];

  const technologies = [
    {
      name: "Figma",
      color: "#F24E1E",
      description: "UI/UX Design & Prototyping",
      icon: "https://cdn.worldvectorlogo.com/logos/figma-5.svg",
    },
    {
      name: "Adobe XD",
      color: "#FF61F6",
      description: "User Experience Design",
      icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg",
    },
    {
      name: "Photoshop",
      color: "#31A8FF",
      description: "Photo editing & Graphics",
      icon: "https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg",
    },
    {
      name: "Illustrator",
      color: "#FF9A00",
      description: "Vector graphics & Logos",
      icon: "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-2019.svg",
    },
    {
      name: "After Effects",
      color: "#9999FF",
      description: "Motion graphics & Animation",
      icon: "https://cdn.worldvectorlogo.com/logos/after-effects-1.svg",
    },
    {
      name: "Sketch",
      color: "#FDB300",
      description: "Interface design",
      icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Research & Discovery",
      description:
        "Deep dive into your brand, target audience, competitors, and market trends to create design strategies that resonate and convert.",
    },
    {
      step: "02",
      title: "Concept & Wireframing",
      description:
        "Creating initial concepts, wireframes, and user flow diagrams to establish the foundation for exceptional user experiences.",
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description:
        "Crafting pixel-perfect designs with interactive prototypes for testing and validation before final implementation.",
    },
    {
      step: "04",
      title: "Testing & Refinement",
      description:
        "User testing, feedback incorporation, and design refinement to ensure optimal usability and visual appeal.",
    },
  ];

  // Design Types with interactive showcase
  const designTypes = [
    {
      id: 0,
      title: "Brand Identity Design",
      category: "Branding & Visual Identity",
      description:
        "Complete brand identity systems that establish strong brand recognition and emotional connection",
      longDescription:
        "Our brand identity designs go beyond just logos. We create comprehensive visual systems including color palettes, typography, imagery styles, and brand guidelines that ensure consistent brand communication across all touchpoints and marketing materials.",
      features: [
        "Logo Design",
        "Color Palette",
        "Typography",
        "Brand Guidelines",
        "Business Cards",
        "Letterheads",
      ],
      benefits: [
        "85% brand recognition increase",
        "Consistent brand presence",
        "Professional credibility boost",
      ],
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f4d11b222383449.67e4d3f6ab80f.jpg",
      icon: <Palette size={32} className="text-purple-600" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 1,
      title: "UI/UX Design Systems",
      category: "User Interface & Experience",
      description:
        "Comprehensive design systems that ensure consistent and intuitive user experiences across platforms",
      longDescription:
        "We create scalable design systems with reusable components, interaction patterns, and design tokens. Our UI/UX designs focus on user research, information architecture, and usability testing to deliver interfaces that users love and businesses benefit from.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
        "Responsive Design",
      ],
      benefits: [
        "40% increase in user engagement",
        "25% reduction in development time",
        "Improved user satisfaction",
      ],
      image:
        "https://amadine.com/assets/img/articles/ux-vs-ui/ux-vs-ui-design@2x.png",
      icon: <Layout size={32} className="text-purple-600" />,
      color: "from-green-500 to-teal-600",
    },
    {
      id: 2,
      title: "Marketing & Print Design",
      category: "Marketing Materials",
      description:
        "Eye-catching marketing materials and print designs that effectively communicate your message",
      longDescription:
        "From digital marketing assets to print materials, we create designs that capture attention and drive action. Our marketing designs are strategically crafted to align with your brand goals and target audience preferences while maintaining visual consistency.",
      features: [
        "Social Media Graphics",
        "Brochures",
        "Flyers",
        "Posters",
        "Web Banners",
        "Packaging Design",
      ],
      benefits: [
        "60% higher engagement rates",
        "Professional brand image",
        "Increased conversion rates",
      ],
      image:
        "https://assets.cdn.thewebconsole.com/S3WEB6795/images/Flyers-Category-Image-2021-7-31-12-06-04.jpg?m=01daaffde7ced686fd3c3f6faf79d1b7",
      icon: <Image size={32} className="text-purple-600" />,
      color: "from-blue-500 to-cyan-600",
    },
  ];

  // Industries with design focus
  const industries = [
    {
      name: "Technology",
      icon: "💻",
      description: "Modern UI/UX designs for SaaS platforms and tech startups",
      projects: "200+ Designs",
      color: "bg-blue-100 hover:bg-blue-200",
      image:
        "https://www.datocms-assets.com/16499/1604482151-saas-ai-platform-ux-design.jpg?auto=format",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      description:
        "Clean, accessible designs for medical and healthcare applications",
      projects: "150+ Designs",
      color: "bg-green-100 hover:bg-green-200",
      image:
        "https://cdn.dribbble.com/userupload/4839041/file/original-d581fe65b968e5ca5b1b5630811db011.jpg?resize=752x&vertical=center",
    },
    {
      name: "E-Commerce",
      icon: "🛒",
      description:
        "Conversion-focused designs for online stores and marketplaces",
      projects: "180+ Designs",
      color: "bg-orange-100 hover:bg-orange-200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTTWSKuyABvcflwHBH6ckXxv_Z57PiXQBTQ&s",
    },
    {
      name: "Finance",
      icon: "💰",
      description:
        "Trust-building designs for fintech and banking applications",
      projects: "120+ Designs",
      color: "bg-purple-100 hover:bg-purple-200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9eQH41eMfQ0syUSm5KaAr3Jwhfxpn4rw1Q&s",
    },
    {
      name: "Education",
      icon: "🎓",
      description:
        "Engaging designs for e-learning platforms and educational tools",
      projects: "100+ Designs",
      color: "bg-yellow-100 hover:bg-yellow-200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DWMici7pxECVtSCGUD2Eq5MY3V2L3zZ22g&s",
    },
    {
      name: "Real Estate",
      icon: "🏢",
      description:
        "Premium designs for property listings and real estate platforms",
      projects: "90+ Designs",
      color: "bg-pink-100 hover:bg-pink-200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ICDxJfIxbKGhghN9pDURq7VV2EYHMF2XAQ&s",
    },
  ];

  const testimonials = [
    {
      name: "Emily Johnson",
      company: "TechStart Inc.",
      quote:
        "Their design transformed our user experience completely. Our app engagement increased by 70% after the redesign.",
      rating: 5,
      position: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c3b7?w=100&h=100&fit=crop&crop=face",
      projectType: "UI/UX Redesign",
    },
    {
      name: "Marcus Thompson",
      company: "Brand Dynamics",
      quote:
        "The brand identity they created perfectly captures our vision. Our brand recognition has improved dramatically.",
      rating: 5,
      position: "Marketing Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      projectType: "Brand Identity",
    },
    {
      name: "Sarah Davis",
      company: "E-Shop Pro",
      quote:
        "Outstanding design work! Our conversion rate increased by 45% with their new e-commerce design.",
      rating: 5,
      position: "CEO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      projectType: "E-commerce Design",
    },
  ];

  // Interactive Design Showcase Component
  const DesignShowcase = () => {
    const [currentDesign, setCurrentDesign] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const designs = [
      {
        type: "Mobile App",
        preview: (
          <div className="w-48 h-80 bg-black rounded-3xl p-2 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-10"></div>
              <div className="pt-6 px-4 h-full">
                <div className="space-y-4">
                  <div className="bg-[#dcd4ff] p-4 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                      <div>
                        <div className="font-bold text-sm">DesignApp</div>
                        <div className="text-xs text-gray-600">
                          Creative Suite
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded-lg text-center">
                        <Palette
                          size={14}
                          className="mx-auto mb-1 text-purple-600"
                        />
                        <span className="font-semibold text-sm">
                          Design Studio
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Brand Identity Section */}
                  <div className="bg-[#dcd4ff] p-4 rounded-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <Palette size={16} className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-sm">Brand Identity</div>
                        <div className="text-xs text-gray-600">
                          Logo & Colors
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="w-full h-8 bg-purple-500 rounded"></div>
                      <div className="w-full h-8 bg-blue-500 rounded"></div>
                      <div className="w-full h-8 bg-pink-500 rounded"></div>
                      <div className="w-full h-8 bg-indigo-500 rounded"></div>
                    </div>
                  </div>

                  {/* UI Elements */}
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                        <Layout size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">
                          UI Components
                        </div>
                        <div className="text-xs text-gray-600">
                          Buttons & Cards
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                        <MousePointer size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold">
                          Interactive Design
                        </div>
                        <div className="text-xs text-gray-600">
                          Hover Effects
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Design Metrics */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-white p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-purple-600">
                        4.9★
                      </div>
                      <div className="text-xs text-gray-600">Design Rating</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-green-600">
                        98%
                      </div>
                      <div className="text-xs text-gray-600">Approval Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Design Tools */}
              <div className="absolute -top-4 -right-4 bg-purple-200 text-black px-4 py-2 rounded-full shadow-lg border-2 border-black">
                <Paintbrush size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-200 text-black px-4 py-2 rounded-full shadow-lg border-2 border-black">
                <Eye size={20} />
              </div>
            </div>
          </div>
        ),
      },
      {
        type: "Web Interface",
        preview: (
          <div className="w-64 h-80 bg-white rounded-2xl shadow-2xl border-2 border-gray-200 overflow-hidden">
            <div className="bg-gray-100 p-2 flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 bg-white rounded px-2 py-1">
                <div className="text-xs text-gray-500">designstudio.com</div>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-[#dcd4ff] p-4 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">Design Studio</h3>
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs">
                    Premium
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Creative solutions for modern brands
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-lg text-center">
                  <Palette size={20} className="mx-auto mb-2 text-purple-600" />
                  <div className="text-xs font-semibold">Branding</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-lg text-center">
                  <Layout size={20} className="mx-auto mb-2 text-blue-600" />
                  <div className="text-xs font-semibold">UI/UX</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-50 p-2 rounded-lg flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded"></div>
                  <span className="text-xs">Modern Logo Design</span>
                </div>
                <div className="bg-gray-50 p-2 rounded-lg flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded"></div>
                  <span className="text-xs">Responsive Web Design</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentDesign((prev) => (prev + 1) % designs.length);
          setIsAnimating(false);
        }, 300);
      }, 4000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Excellence
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We create designs that not only look beautiful but also drive
              results and enhance user experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    User-Centered Design Approach
                  </h3>
                  <p className="text-gray-700">
                    Every design decision is backed by user research and
                    testing, ensuring interfaces that are intuitive, accessible,
                    and conversion-focused.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Brand Consistency Across Platforms
                  </h3>
                  <p className="text-gray-700">
                    Cohesive visual identity systems that maintain brand
                    recognition and trust across web, mobile, print, and digital
                    marketing materials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Performance-Optimized Graphics
                  </h3>
                  <p className="text-gray-700">
                    All designs are optimized for web performance with proper
                    compression, responsive images, and efficient loading
                    without compromising visual quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Conversion-Focused Design Strategy
                  </h3>
                  <p className="text-gray-700">
                    Strategic design elements that guide users toward desired
                    actions, improving conversion rates and business outcomes
                    through psychological design principles.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center min-h-[420px]">
                <div
                  className={`transition-all duration-500 ${
                    isAnimating
                      ? "opacity-50 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  {designs[currentDesign].preview}
                </div>

                {/* Floating design elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-10 left-4 w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-float1"></div>
                  <div className="absolute top-20 right-8 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 animate-float2"></div>
                  <div className="absolute bottom-16 left-12 w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 opacity-20 animate-float3"></div>
                  <div className="absolute bottom-8 right-16 w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-20 animate-float4"></div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {designs.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentDesign === index ? "bg-purple-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float1 {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) translateX(10px) rotate(180deg);
            }
            100% {
              transform: translateY(0) translateX(0) rotate(360deg);
            }
          }

          @keyframes float2 {
            0% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(10px) translateX(-15px);
            }
            100% {
              transform: translateY(0) translateX(0);
            }
          }

          @keyframes float3 {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) translateX(-10px) rotate(-180deg);
            }
            100% {
              transform: translateY(0) translateX(0) rotate(-360deg);
            }
          }

          @keyframes float4 {
            0% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(15px) translateX(10px);
            }
            100% {
              transform: translateY(0) translateX(0);
            }
          }

          .animate-float1 {
            animation: float1 8s ease-in-out infinite;
          }

          .animate-float2 {
            animation: float2 6s ease-in-out infinite;
            animation-delay: 1s;
          }

          .animate-float3 {
            animation: float3 10s ease-in-out infinite;
            animation-delay: 2s;
          }

          .animate-float4 {
            animation: float4 7s ease-in-out infinite;
            animation-delay: 3s;
          }
        `}</style>
      </div>
    );
  };

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
              🎨 GRAPHIC & UI/UX DESIGNING
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Designs That Communicate
              <br />
              <span className="text-purple-600">and Convert</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We create stunning visuals and intuitive interfaces that reflect
              your brand identity and enhance user engagement through thoughtful
              design and strategic user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/contact-us">
                <button className="uppercase cursor-pointer font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                  Start Design Project
                </button>
              </Link>
              <Link to="/blogs/blog-article-3">
                <button className="uppercase cursor-pointer font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                  Get Idea
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Designs Created</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">48Hr</div>
                <div className="text-sm text-gray-600">Quick Turnaround</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Design Showcase */}
          <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
            <div className="relative">
              {/* Main Design Canvas */}
              <div className="w-80 h-96 bg-white rounded-3xl shadow-2xl border-2 border-black overflow-hidden">
                {/* Canvas Header */}
                <div className="bg-gray-100 p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Palette size={20} className="text-purple-600" />
                      <span className="font-semibold">Design Studio</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Canvas Content */}
                <div className="p-6 h-full bg-gradient-to-br from-purple-50 to-blue-50">
                  <div className="space-y-4">
                    {/* Brand Identity Section */}
                    <div className="bg-[#dcd4ff] p-4 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <Palette size={16} className="text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-sm">
                            Brand Identity
                          </div>
                          <div className="text-xs text-gray-600">
                            Logo & Colors
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="w-full h-8 bg-purple-500 rounded"></div>
                        <div className="w-full h-8 bg-blue-500 rounded"></div>
                        <div className="w-full h-8 bg-pink-500 rounded"></div>
                        <div className="w-full h-8 bg-indigo-500 rounded"></div>
                      </div>
                    </div>

                    {/* UI Elements */}
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                          <Layout size={14} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">
                            UI Components
                          </div>
                          <div className="text-xs text-gray-600">
                            Buttons & Cards
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                          <MousePointer size={14} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">
                            Interactive Design
                          </div>
                          <div className="text-xs text-gray-600">
                            Hover Effects
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Design Metrics */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-purple-600">
                          4.9★
                        </div>
                        <div className="text-xs text-gray-600">
                          Design Rating
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-lg font-bold text-green-600">
                          98%
                        </div>
                        <div className="text-xs text-gray-600">
                          Approval Rate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Design Tools */}
              <div className="absolute -top-4 -right-4 bg-purple-200 text-black px-4 py-2 rounded-full shadow-lg border-2 border-black">
                <Paintbrush size={20} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-200 text-black px-4 py-2 rounded-full shadow-lg border-2 border-black">
                <Eye size={20} />
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
              Why Choose Our Design Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We combine creative excellence with strategic thinking to create
              designs that not only look beautiful but also drive business
              results.
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

      {/* Design Solutions Showcase */}
      <DesignShowcase />

      {/* Design Types Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Complete Design Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive design services that cover every aspect of your
              brand's visual communication and user experience needs.
            </p>
          </div>

          {/* Interactive Design Type Showcase */}
          <div className="space-y-32">
            {designTypes.map((design, index) => (
              <div
                key={design.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div
                    className={`inline-flex items-center gap-3 px-4 py-2 bg-[#dcd4ff] text-black rounded-full shadow-[2px_2px_0px_#000] transition-all duration-300 hover:bg-purple-200`}
                  >
                    {design.icon}
                    <span>{design.category}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-black">
                    {design.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {design.longDescription}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {design.features.map((feature, featureIndex) => (
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
                </div>

                {/* Visual Side */}
                <div className="flex-1">
                  <div className="relative group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-[#dcd4ff] to-[#dcd4ff] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}
                    ></div>
                    <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-2 border-black">
                      <img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-64 object-cover rounded-2xl mb-6"
                      />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold text-gray-600">
                            Design Status
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm text-green-600">
                              Active
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-600">
                              95%
                            </div>
                            <div className="text-xs text-gray-600">
                              Satisfaction
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">
                              48hr
                            </div>
                            <div className="text-xs text-gray-600">
                              Delivery
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">
                              ∞
                            </div>
                            <div className="text-xs text-gray-600">
                              Revisions
                            </div>
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

      {/* Industries We Serve */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Industries We Design For
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized design solutions across diverse industries with deep
              understanding of sector-specific design requirements and user
              expectations.
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
                    <div className="w-full h-full">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

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
                     
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredIndustry === index && (
                    <div className="absolute inset-0 bg-[#dcd4ff]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
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
                Need Custom Design Solutions?
              </h3>
              <p className="text-gray-700 mb-6 max-w-md mx-auto">
                Every industry has unique design requirements. Let's discuss how
                we can create tailored designs for your specific business needs.
              </p>
              <Link to="/contact-us">
                <button className="bg-[#dcd4ff] cursor-pointer text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                  Discuss Your Project
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
              Design Tools & Technologies
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We use industry-leading design tools and software to create
              professional, high-quality designs and user experiences.
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
              Our Design Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A systematic approach ensuring exceptional design delivery from
              initial concept to final implementation and beyond.
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
                Ready to Start Your Design Project?
              </h3>
              <p className="mb-6 text-black">
                Let's create stunning visuals and exceptional user experiences
                that elevate your brand and engage your audience!
              </p>
              <Link to="/contact-us">
                <button className="cursor-pointer uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 active:translate-x-0 active:translate-y-0 border-2 border-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                  Start Design Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from businesses that transformed their brand presence
              and user engagement with our design solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 hover:-translate-y-2">
                  {/* Client Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
                    />
                    <div>
                      <div className="font-semibold text-black">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-purple-600 font-medium">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Project Type Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#dcd4ff] px-3 py-1 rounded-full mb-4">
                    <Palette size={14} className="text-purple-600" />
                    <span className="text-sm font-semibold text-black">
                      {testimonial.projectType}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400">
                        ★
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Why Great Design Matters
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the advantages of professional design that not only
              looks amazing but also drives measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Eye size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                First Impression Impact
              </h3>
              <p className="text-gray-700">
                Users form opinions about your brand within 50 milliseconds.
                Professional design ensures that first impression is positive
                and memorable.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <BarChart3 size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Increased Conversions
              </h3>
              <p className="text-gray-700">
                Good design can increase conversion rates by up to 200%.
                Strategic UI/UX improvements directly impact your bottom line.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Heart size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Brand Recognition
              </h3>
              <p className="text-gray-700">
                Consistent visual identity increases brand recognition by 80%,
                building trust and loyalty with your target audience.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Users size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                User Experience
              </h3>
              <p className="text-gray-700">
                Intuitive design reduces user frustration by 40% and increases
                engagement time, leading to better customer satisfaction.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Globe size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Market Competitiveness
              </h3>
              <p className="text-gray-700">
                Professional design gives you a competitive edge, helping you
                stand out in crowded markets and attract premium customers.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Zap size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Faster Loading
              </h3>
              <p className="text-gray-700">
                Optimized graphics and efficient design reduce loading times by
                60%, improving SEO rankings and user retention rates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-24 bg-gradient-to-br from-black to-black text-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Let's Create Something Beautiful Together
              </h2>
              <p className="text-lg text-purple-100 mb-8">
                Whether you need a complete brand identity, stunning UI/UX
                design, or marketing materials that convert, our creative team
                is ready to bring your vision to life with exceptional design
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <Link  to ="/projects-details">   
                <button className=" cursor-pointer bg-white text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50 hover:shadow-lg">
                  Our Project
                </button>
               </Link>
               <Link  to ="/about-us">   
                <button className=" cursor-pointer bg-transparent text-white px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10">
                  Who we are ?
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
                      <Palette size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Creative Excellence
                      </h3>
                      <p className="text-purple-100">Award-winning designs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Eye size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        User-Focused
                      </h3>
                      <p className="text-purple-100">Research-driven design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicUIUXDesignPage;
