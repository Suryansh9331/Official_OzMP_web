import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { 
  Search, TrendingUp, Target, BarChart3, Globe, Eye, Zap, 
  CheckCircle, ArrowRight, Users, Award, Lightbulb, Monitor,
  FileText, Settings, Smartphone, Gauge, Star, Trophy,
  PieChart, LineChart, Activity, Layers, Code, 
  MousePointer, Calendar, Clock, MapPin, Heart, ThumbsUp,
  DollarSign, ShoppingCart, Share2, Percent, ClipboardList,
  UserPlus, CreditCard, Repeat2, Gift, Tag, BarChart2
} from "lucide-react";

const AffiliateMarketingPage = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [hoveredPortfolio, setHoveredPortfolio] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [metrics, setMetrics] = useState({
    conversionRate: 65,
    trafficGrowth: 78,
    commissionEarned: 42,
    roi: 320
  });

  const expertiseAreas = [
    {
      icon: <Share2 size={40} />,
      title: "Affiliate Program Setup",
      description: "Comprehensive setup of your affiliate program including tracking, commission structures, and recruitment strategies.",
      benefits: ["Program configuration", "Tracking setup", "Commission models", "Recruitment strategy"]
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "Product Promotion Strategy",
      description: "Strategic promotion of affiliate products through content marketing, email campaigns, and social media.",
      benefits: ["Content strategy", "Email campaigns", "Social promotion", "Influencer partnerships"]
    },
    {
      icon: <BarChart2 size={40} />,
      title: "Performance Tracking",
      description: "Advanced tracking and analytics to measure affiliate performance and optimize campaigns.",
      benefits: ["Conversion tracking", "ROI analysis", "A/B testing", "Performance reporting"]
    },
    {
      icon: <UserPlus size={40} />,
      title: "Affiliate Recruitment",
      description: "Targeted recruitment of high-quality affiliates to promote your products and services.",
      benefits: ["Affiliate outreach", "Vetting process", "Onboarding", "Relationship management"]
    }
  ];

    const portfolio = [
    {
      id: 1,
      title: "Fitness Supplement Brand",
      category: "Health & Wellness",
      description: "Generated $120,000 in affiliate sales in 6 months",
      metrics: {
        salesGenerated: "$120,000",
        roi: "450%",
        timeframe: "6 months",
        affiliates: "50+ active affiliates"
      },
      image: "https://asset7.ckassets.com/blog/wp-content/uploads/sites/6/2024/07/retailer-hyugalife.jpg",
      tags: ["Supplement niche", "Influencer marketing", "Email campaigns"]
    },
    {
      id: 2,
      title: "SaaS Productivity Tool",
      category: "Software & Technology",
      description: "Increased affiliate-driven signups by 300% in 4 months",
      metrics: {
        salesGenerated: "2,500+ signups",
        roi: "380%",
        timeframe: "4 months",
        affiliates: "30+ tech affiliates"
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDJbrT2YxJXjbU2QOSLQBkdj9_LqdoUfbCw&s",
      tags: ["SaaS marketing", "Recurring commissions", "Tech influencers"]
    },
    {
      id: 3,
      title: "E-commerce Fashion Store",
      category: "Retail & Apparel",
      description: "Drove 40% of total revenue through affiliate program",
      metrics: {
        salesGenerated: "$280,000",
        roi: "520%",
        timeframe: "8 months",
        affiliates: "75+ fashion affiliates"
      },
      image: "https://ahkr.b-cdn.net/wp-content/uploads/2022/08/fashion-affiliate-featured.jpg",
      tags: ["Fashion bloggers", "Seasonal promotions", "Social commerce"]
    },
    {
      id: 4,
      title: "Online Course Platform",
      category: "Education & Training",
      description: "Achieved 600% ROI on affiliate marketing spend",
      metrics: {
        salesGenerated: "$95,000",
        roi: "600%",
        timeframe: "5 months",
        affiliates: "40+ education affiliates"
      },
      image: "https://www.proideators.com/wp-content/uploads/2019/01/Affiliate-Marketing-Proideators.jpg",
      tags: ["Course promotion", "Webinar strategy", "Email funnels"]
    }
  ];


  const tools = [
    {
      name: "ClickBank",
      category: "Affiliate Network",
      description: "Leading affiliate marketplace with thousands of products",
      icon: "💰",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "ShareASale",
      category: "Affiliate Network",
      description: "Robust affiliate tracking and management platform",
      icon: "🔄",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Impact",
      category: "Affiliate Platform",
      description: "Enterprise-level affiliate marketing solution",
      icon: "📈",
      color: "from-green-500 to-blue-600"
    },
    {
      name: "Post Affiliate Pro",
      category: "Tracking Software",
      description: "Self-hosted affiliate tracking solution",
      icon: "🔍",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "PartnerStack",
      category: "SaaS Affiliates",
      description: "Specialized in SaaS and tech partnerships",
      icon: "🤝",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Affise",
      category: "Performance Marketing",
      description: "Advanced tracking and analytics platform",
      icon: "🎯",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Jessica Williams",
      company: "FitLife Supplements",
      position: "Marketing Director",
      quote: "Our affiliate program went from generating $5,000/month to over $30,000/month in just 4 months. The strategic approach to recruiting quality affiliates made all the difference.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      results: "500% revenue increase"
    },
    {
      name: "David Kim",
      company: "TechFlow SaaS",
      position: "CEO",
      quote: "The affiliate marketing strategy delivered a consistent 8:1 ROI, becoming our most profitable customer acquisition channel. We've scaled it to 40% of our new business.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      results: "8:1 ROI consistently"
    },
    {
      name: "Maria Rodriguez",
      company: "EduMaster Courses",
      position: "Owner",
      quote: "Working with their team transformed our affiliate program from an afterthought to our primary sales channel. We now get 60% of our enrollments through affiliates.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop&crop=face",
      results: "60% of total sales"
    }
  ];

  const faqs = [
    {
      question: "How much does affiliate marketing cost?",
      answer: "Affiliate marketing is performance-based, meaning you only pay when you get results. Typical commission rates range from 5-30% of the sale price depending on your industry and profit margins. Our service fees vary based on the scope of work."
    },
    {
      question: "How long does it take to see results?",
      answer: "Initial results can appear within 30-60 days as affiliates begin promoting your products. Significant results typically take 3-6 months as you build relationships with top-performing affiliates and optimize your program."
    },
    {
      question: "What types of businesses benefit from affiliate marketing?",
      answer: "Almost any business with products or services to sell can benefit. E-commerce stores, SaaS companies, digital product creators, and service providers all see excellent results with properly managed affiliate programs."
    },
    {
      question: "How do you recruit quality affiliates?",
      answer: "We use targeted outreach to bloggers, influencers, and content creators in your niche, combined with attractive commission structures and promotional materials to attract serious affiliates who will actively promote your offers."
    },
    {
      question: "What's the difference between affiliates and influencers?",
      answer: "Affiliates earn commissions on sales they generate, while influencers typically charge fixed fees for promotion. Many influencers also participate in affiliate programs, combining both models for maximum earnings."
    },
    {
      question: "How do you track affiliate sales?",
      answer: "We implement robust tracking systems using specialized software that attributes sales to specific affiliates through unique tracking links, cookies, and other methods to ensure accurate commission payments."
    }
  ];

  // Affiliate Dashboard Component
  const AffiliateDashboard = () => {
    const [currentMetric, setCurrentMetric] = useState(0);
    
    const dashboardMetrics = [
      {
        title: "Conversion Rate",
        value: metrics.conversionRate,
        change: "+12%",
        icon: <Percent size={16} />,
        color: "from-green-500 to-emerald-600"
      },
      {
        title: "Traffic Growth",
        value: metrics.trafficGrowth,
        change: "+28%",
        icon: <TrendingUp size={16} />,
        color: "from-blue-500 to-cyan-600"
      },
      {
        title: "Commission Earned",
        value: metrics.commissionEarned,
        change: "+15%",
        icon: <DollarSign size={16} />,
        color: "from-purple-500 to-pink-600"
      },
      {
        title: "ROI",
        value: metrics.roi,
        change: "+40%",
        icon: <Repeat2 size={16} />,
        color: "from-orange-500 to-red-600"
      }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentMetric(prev => (prev + 1) % dashboardMetrics.length);
        
        // Animate metrics
        setMetrics(prev => ({
          conversionRate: Math.round(Math.max(55, Math.min(80, prev.conversionRate + (Math.random() - 0.5) * 5))),
          trafficGrowth: Math.max(65, Math.min(90, prev.trafficGrowth + (Math.random() - 0.5) * 4)),
          commissionEarned: Math.max(30, Math.min(55, prev.commissionEarned + (Math.random() - 0.5) * 3)),
          roi: Math.max(250, Math.min(400, prev.roi + (Math.random() - 0.5) * 20))
        }));
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-[3rem] blur-xl scale-110"></div>
        
        <div className="relative w-72 h-[580px] bg-gradient-to-b from-gray-800 to-black rounded-[3rem] p-2 shadow-2xl">
          <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            
            <div className="pt-10 px-4 h-full bg-gradient-to-br from-gray-50 to-blue-50 relative">
              <div className="flex justify-between items-center mb-6 text-xs text-gray-800">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Affiliate Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Active</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 h-full pb-20 overflow-hidden">
                {/* Main Metric Card */}
                <div className={`bg-gradient-to-r ${dashboardMetrics[currentMetric].color} p-4 rounded-2xl text-white shadow-xl overflow-hidden relative`}>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/5 rounded-full"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        {dashboardMetrics[currentMetric].icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-base">{dashboardMetrics[currentMetric].title}</h3>
                        <p className="text-xs text-white/70">Current Performance</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="text-3xl font-bold">{dashboardMetrics[currentMetric].value}{dashboardMetrics[currentMetric].title === 'ROI' ? '%' : dashboardMetrics[currentMetric].title === 'Commission Earned' ? 'K' : '%'}</div>
                      <div className="text-sm bg-white/20 px-2 py-1 rounded-full">{dashboardMetrics[currentMetric].change}</div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <UserPlus size={16} className="text-blue-600" />
                      <span className="text-xs font-medium text-gray-800">Affiliates</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800">87</div>
                    <div className="text-xs text-green-600">+15 this month</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign size={16} className="text-purple-600" />
                      <span className="text-xs font-medium text-gray-800">Revenue</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800">$42K</div>
                    <div className="text-xs text-green-600">+18% growth</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <h4 className="font-semibold text-sm text-gray-800 mb-3">Program Health</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Affiliate Activity", value: 78, color: "bg-green-500" },
                      { label: "Conversion Rate", value: 65, color: "bg-blue-500" },
                      { label: "Top Performers", value: 42, color: "bg-purple-500" }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-gray-700">{item.label}</span>
                          <span className="text-gray-600">{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full transition-all duration-1000`} 
                            style={{width: `${item.value}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <div className="absolute bottom-6 left-4 right-4">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/20">
                  <div className="flex justify-around items-center">
                    {[
                      { icon: <BarChart3 size={20} />, active: true },
                      { icon: <DollarSign size={20} />, active: false },
                      { icon: <UserPlus size={20} />, active: false },
                      { icon: <Settings size={20} />, active: false }
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${
                          item.active ? 'bg-purple-500 text-white shadow-lg' : 'text-gray-600'
                        }`}>
                          {item.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Auto-rotate expertise
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExpertise(prev => (prev + 1) % expertiseAreas.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [expertiseAreas.length]);

  return (
    <div className="min-h-screen  overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(156, 146, 172, 0.1) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="w-full lg:w-[85%] relative z-10 flex flex-col lg:flex-row items-center min-h-screen px-4 sm:px-6 py-8">
          {/* Text Content */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <div className="inline-block bg-[#dcd4ff] text-black px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-[2px_2px_0px_#000]">
              🚀 PERFORMANCE MARKETING
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Grow Your Revenue With
              <br />
              <span className="text-purple-600">Affiliate Marketing</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Leverage performance-based marketing to drive sales through affiliate partnerships, paying only for actual results while expanding your reach exponentially.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
             <Link  to ="/blogs/blog-article-2">   
              <button className="cursor-pointer uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                Get Free Strategy
              </button>
             </Link>
             <Link  to ="/contact-us">   
              <button className="cursor-pointer uppercase font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                View Pricing
              </button>
             </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">5:1</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">300+</div>
                <div className="text-sm text-gray-600">Active Affiliates</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">$2M+</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
            </div>
          </div>
          
          {/* Affiliate Dashboard */}
          <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
            <AffiliateDashboard />
          </div>
        </div>
      </div>

      {/* About Affiliate Marketing */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                  Why Affiliate Marketing Works
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Affiliate marketing is one of the most cost-effective ways to grow your business. You pay only for actual sales, while leveraging the audiences and credibility of established publishers, bloggers, and influencers in your niche.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <DollarSign size={24} className="text-purple-600" />,
                    title: "Performance-Based",
                    description: "Pay only for actual sales or leads, making it one of the lowest-risk marketing channels with measurable ROI."
                  },
                  {
                    icon: <UserPlus size={24} className="text-purple-600" />,
                    title: "Expanded Reach",
                    description: "Tap into established audiences of affiliates who have already built trust with your potential customers."
                  },
                  {
                    icon: <Repeat2 size={24} className="text-purple-600" />,
                    title: "Scalable Growth",
                    description: "As you add more affiliates, your marketing reach grows exponentially without proportional increases in costs."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group cursor-pointer">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#dcd4ff] rounded-full flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:shadow-[4px_4px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-3xl border-2 border-black shadow-[12px_12px_0px_#000]">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000]">
                      <DollarSign size={32} className="text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">Affiliate Success Formula</h3>
                    <p className="text-gray-700">Our proven methodology for affiliate program growth</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Program Setup", percentage: "95%" },
                      { label: "Affiliate Recruitment", percentage: "88%" },
                      { label: "Promotion Strategy", percentage: "92%" },
                      { label: "ROI Optimization", percentage: "85%" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{item.percentage}</div>
                          <div className="text-sm text-gray-700 mt-1">{item.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Trophy size={20} className="text-yellow-700" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-green-300 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <CheckCircle size={16} className="text-green-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Affiliate Expertise
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive affiliate marketing services that cover every aspect of program management, from setup and recruitment to optimization and scaling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Interactive Expertise Cards */}
            <div className="space-y-6">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeExpertise === index
                      ? "bg-[#dcd4ff] shadow-[8px_8px_0px_#000] transform -translate-x-1 -translate-y-1"
                      : "bg-white hover:bg-gray-50 shadow-[4px_4px_0px_#000]"
                  }`}
                  onClick={() => setActiveExpertise(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-purple-600 flex-shrink-0">{area.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2">{area.title}</h3>
                      <p className="text-gray-700 mb-4">{area.description}</p>
                      
                      {activeExpertise === index && (
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          {area.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-2">
                              <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Visual Representation */}
            <div className="relative">
              <div className="relative bg-white p-8 rounded-3xl border-2 border-black shadow-[12px_12px_0px_#000]">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">Affiliate Performance Metrics</h3>
                  <p className="text-gray-600">Real-time program performance</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { metric: "Active Affiliates", value: 78, color: "bg-green-500", icon: <UserPlus size={16} /> },
                    { metric: "Conversion Rate", value: 65, color: "bg-blue-500", icon: <Percent size={16} /> },
                    { metric: "Commission Payout", value: 42, color: "bg-purple-500", icon: <DollarSign size={16} /> },
                    { metric: "Program ROI", value: 320, color: "bg-orange-500", icon: <Repeat2 size={16} /> }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#dcd4ff] rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-800">{item.metric}</span>
                          <span className="text-sm font-bold text-gray-800">{item.value}{index === 3 ? '%' : ''}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                            style={{width: `${Math.min(100, item.value)}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Analytics Icons */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center shadow-lg animate-float1">
                <BarChart2 size={20} className="text-blue-700" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-green-300 rounded-full flex items-center justify-center shadow-lg animate-float2">
                <TrendingUp size={16} className="text-green-700" />
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float1 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          @keyframes float2 {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(-3deg); }
          }
          .animate-float1 { animation: float1 3s ease-in-out infinite; }
          .animate-float2 { animation: float2 4s ease-in-out infinite; animation-delay: 1s; }
        `}</style>
      </div>

      {/* Portfolio Section */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Affiliate Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from businesses that transformed their revenue streams with our strategic affiliate marketing solutions and performance-based approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredPortfolio(index)}
                onMouseLeave={() => setHoveredPortfolio(null)}
              >
                <div className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                  hoveredPortfolio === index 
                    ? "transform -translate-y-2 shadow-[12px_12px_0px_#000]" 
                    : "shadow-[6px_6px_0px_#000]"
                } bg-white border-2 border-black`}>
                  
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-[#dcd4ff] text-black px-3 py-1 rounded-full text-sm font-semibold shadow-[2px_2px_0px_#000]">
                      {project.category}
                    </div>
                    
                    {/* Main Metric */}
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full">
                      <div className="text-lg font-bold text-green-400">{project.metrics.salesGenerated}</div>
                      <div className="text-xs">Revenue Generated</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                      <p className="text-gray-700">{project.description}</p>
                    </div>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">{project.metrics.roi}</div>
                        <div className="text-xs text-gray-600">ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{project.metrics.timeframe}</div>
                        <div className="text-xs text-gray-600">Timeline</div>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action */}
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600 font-semibold">Case Study Available</span>
                      </div>
                      <ArrowRight 
                        size={20} 
                        className={`text-purple-600 transition-transform duration-300 ${
                          hoveredPortfolio === index ? "translate-x-1" : ""
                        }`} 
                      />
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  {hoveredPortfolio === index && (
                    <div className="absolute inset-0 bg-[#dcd4ff]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2 border-black font-semibold">
                        View Case Study
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Portfolio CTA */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_#000]">
              <h3 className="text-2xl font-bold text-black mb-4">Ready to Join Our Success Stories?</h3>
              <p className="text-gray-700 mb-6 max-w-md mx-auto">Every business is unique. Let's create a custom affiliate strategy that delivers results for your specific products and goals.</p>
             <Link  to ="/contact-us">   
              <button className="cursor-pointer bg-[#dcd4ff] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                Start Your Affiliate Journey
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Tech Stack */}
      <div className="py-24 bg-gray-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Affiliate Toolkit
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage industry-leading affiliate platforms and technologies to deliver measurable results, comprehensive tracking, and optimized performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-2xl border-2 border-black shadow-[6px_6px_0px_#000] transition-all duration-300 hover:shadow-[10px_10px_0px_#000] hover:-translate-x-1 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center text-2xl shadow-lg`}>
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-black">{tool.name}</h3>
                      <p className="text-sm text-purple-600 font-medium">{tool.category}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{tool.description}</p>
                  
                  {/* Tool Features */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-green-600 font-semibold">Active Tool</span>
                    </div>
                    <div className="text-purple-600 group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Tools Section */}
          <div className="mt-16 bg-[#dcd4ff] p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_#000]">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">Advanced Affiliate Technologies</h3>
              <p className="text-gray-700">Cutting-edge tools for comprehensive affiliate program management</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Conversion Tracking", icon: "📊" },
                { name: "Cookie Tracking", icon: "🍪" },
                { name: "Multi-Touch", icon: "✋" },
                { name: "Fraud Detection", icon: "🕵️" },
                { name: "Recurring Commissions", icon: "🔄" },
                { name: "Performance Analytics", icon: "📈" },
                { name: "Automated Payouts", icon: "💸" },
                { name: "Affiliate Portal", icon: "🚪" }
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-semibold text-black">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real testimonials from businesses that have experienced transformative growth through our affiliate marketing strategies and program management.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main Testimonial */}
              <div className="bg-white p-8 lg:p-12 rounded-3xl border-2 border-black shadow-[12px_12px_0px_#000] transition-all duration-500">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-[#dcd4ff]"
                    />
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start mb-4">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <div key={i} className="w-6 h-6 text-yellow-400 text-xl">★</div>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonials[activeTestimonial].quote}"
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                      <div>
                        <div className="font-bold text-lg text-black">{testimonials[activeTestimonial].name}</div>
                        <div className="text-purple-600 font-semibold">{testimonials[activeTestimonial].position}</div>
                        <div className="text-gray-600">{testimonials[activeTestimonial].company}</div>
                      </div>
                      
                      <div className="lg:ml-auto">
                        <div className="bg-[#dcd4ff] px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_#000]">
                          <div className="text-sm font-bold text-black">{testimonials[activeTestimonial].results}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTestimonial === index 
                        ? "bg-purple-600 scale-125" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Side Testimonials Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {testimonials.filter((_, index) => index !== activeTestimonial).slice(0, 2).map((testimonial, index) => (
                <div key={index} className="bg-white/50 p-6 rounded-2xl border border-gray-200 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-black">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm italic">"{testimonial.quote.substring(0, 100)}..."</p>
                  <div className="mt-3">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{testimonial.results}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get answers to common questions about affiliate marketing, program setup, and what you can expect from our performance-based approach.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="group">
                  <div 
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeFaq === index 
                        ? "bg-[#dcd4ff] shadow-[8px_8px_0px_#000] transform -translate-x-1 -translate-y-1" 
                        : "bg-gray-50 hover:bg-gray-100 shadow-[4px_4px_0px_#000]"
                    }`}
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-black pr-4">{faq.question}</h3>
                      <div className={`w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[2px_2px_0px_#000] transition-transform duration-300 ${
                        activeFaq === index ? "rotate-45" : ""
                      }`}>
                        <div className="w-4 h-4 text-purple-600 font-bold text-xl leading-none">+</div>
                      </div>
                    </div>
                    
                    {activeFaq === index && (
                      <div className="mt-4 pt-4 border-t border-black/10">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* FAQ CTA */}
            <div className="text-center mt-12">
              <div className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-2xl border-2 border-black shadow-[6px_6px_0px_#000]">
                <h3 className="text-xl font-bold text-black mb-3">Still Have Questions?</h3>
                <p className="text-gray-700 mb-4">Our affiliate marketing experts are here to help you understand how we can grow your revenue.</p>
               <Link  to ="/contact-us">   
                <button className="cursor-pointer bg-[#dcd4ff] text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-[3px_3px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000]">
                  Schedule Consultation
                </button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-24 bg-gradient-to-br from-black to-black text-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Scale Your Revenue?
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
              Stop leaving money on the table. Our proven affiliate strategies will connect you with high-quality partners, drive more sales, and grow your business with performance-based marketing.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { icon: "🚀", title: "Performance-Based", description: "Pay only for results" },
                { icon: "📈", title: "Increased Sales", description: "3-5x more revenue" },
                { icon: "💰", title: "Higher ROI", description: "5:1 average return" }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-purple-100">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link  to ="/contact-us">   
              <button className="cursor-pointer bg-white text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50 hover:shadow-lg text-lg">
                Get Free Strategy
              </button>
             </Link>
             <Link  to ="/about-us">   
              <button className="cursor-pointer bg-transparent text-white px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10 text-lg">
                Know More
              </button>
             </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Trophy size={20} className="text-yellow-400" />
                <span className="text-purple-100">Award-Winning Agency</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-blue-400" />
                <span className="text-purple-100">200+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-yellow-400" />
                <span className="text-purple-100">4.8/5 Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateMarketingPage;
