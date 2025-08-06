import React, { useState, useEffect } from 'react';
import { 
  Search, TrendingUp, Target, BarChart3, Globe, Eye, Zap, 
  CheckCircle, ArrowRight, Users, Award, Lightbulb, Monitor,
  FileText, Settings, Smartphone, Gauge, Star, Trophy,
  PieChart, LineChart, Activity, Layers, Code, Link,
  MousePointer, Calendar, Clock, MapPin, Heart, ThumbsUp,
  PenSquare, BookOpen, Type, ClipboardList, Image, Video,
  Mic, Share2, LayoutTemplate, MessageSquare, Bookmark
} from "lucide-react";

const ContentMarketingPage = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [hoveredPortfolio, setHoveredPortfolio] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [contentMetrics, setContentMetrics] = useState({
    engagementRate: 78,
    leadGeneration: 65,
    conversionRate: 52,
    trafficGrowth: 82
  });

  const expertiseAreas = [
    {
      icon: <PenSquare size={40} />,
      title: "Content Strategy & Planning",
      description: "Comprehensive content strategy development to align with your business goals and audience needs.",
      benefits: ["Audience research", "Content mapping", "Editorial calendar", "Performance measurement"]
    },
    {
      icon: <FileText size={40} />,
      title: "Blog & Article Writing",
      description: "High-quality, SEO-optimized blog posts and articles that establish thought leadership and drive organic traffic.",
      benefits: ["Keyword research", "SEO optimization", "Content formatting", "Internal linking"]
    },
    {
      icon: <Image size={40} />,
      title: "Visual Content Creation",
      description: "Engaging infographics, custom images, and visual assets that increase content shareability and comprehension.",
      benefits: ["Infographic design", "Custom illustrations", "Data visualization", "Branded templates"]
    },
    {
      icon: <Video size={40} />,
      title: "Video Content Production",
      description: "Professional video content including explainers, testimonials, and product demos for higher engagement.",
      benefits: ["Script writing", "Animation", "Editing", "Optimization"]
    }
  ];

  const portfolio = [
    {
      id: 1,
      title: "E-commerce Fashion Store",
      category: "Retail & E-commerce",
      description: "Increased organic traffic by 340% and revenue by 280% in 8 months",
      metrics: {
        trafficIncrease: "340%",
        revenueGrowth: "280%",
        timeframe: "8 months",
        rankings: "150+ keywords in top 10"
      },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      tags: ["E-commerce SEO", "Local SEO", "Content Marketing"]
    },
    {
      id: 2,
      title: "Healthcare Clinic Chain",
      category: "Healthcare & Medical",
      description: "Improved local search visibility resulting in 250% more appointment bookings",
      metrics: {
        trafficIncrease: "180%",
        revenueGrowth: "250%",
        timeframe: "6 months",
        rankings: "95+ local keywords ranking #1"
      },
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      tags: ["Local SEO", "Medical SEO", "Reputation Management"]
    },
    {
      id: 3,
      title: "SaaS Technology Platform",
      category: "Technology & Software",
      description: "Achieved 400% growth in qualified leads through strategic content SEO",
      metrics: {
        trafficIncrease: "420%",
        revenueGrowth: "400%",
        timeframe: "12 months",
        rankings: "200+ technical keywords ranking"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["Technical SEO", "Content Strategy", "Lead Generation"]
    },
    {
      id: 4,
      title: "Real Estate Agency",
      category: "Real Estate & Property",
      description: "Dominated local search results with 300% increase in property inquiries",
      metrics: {
        trafficIncrease: "290%",
        revenueGrowth: "300%",
        timeframe: "10 months",
        rankings: "120+ location-based keywords"
      },
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      tags: ["Local SEO", "Real Estate SEO", "Google My Business"]
    }
  ];

  const contentTools = [
    {
      name: "Grammarly",
      category: "Writing & Editing",
      description: "Advanced grammar checking and writing enhancement",
      icon: "✍️",
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Canva",
      category: "Visual Content",
      description: "Graphic design and visual content creation",
      icon: "🎨",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Ahrefs",
      category: "Content Research",
      description: "Content gap analysis and competitor research",
      icon: "🔍",
      color: "from-green-500 to-blue-600"
    },
    {
      name: "Adobe Premiere",
      category: "Video Editing",
      description: "Professional video editing and production",
      icon: "🎬",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "BuzzSumo",
      category: "Content Analysis",
      description: "Content performance and trending topics",
      icon: "📊",
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "SEMrush",
      category: "SEO Optimization",
      description: "Content optimization and keyword research",
      icon: "⚡",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechStart Solutions",
      position: "Marketing Director",
      quote: "Our content marketing strategy increased engagement by 350% in just 6 months. The quality of leads from our content has been incredible - we're getting 5x more qualified leads.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3b7?w=100&h=100&fit=crop&crop=face",
      results: "350% engagement increase"
    },
    {
      name: "Michael Chen",
      company: "Urban Fitness Chain",
      position: "CEO",
      quote: "They transformed our content strategy completely. Our blog went from 500 to 15,000 monthly visitors. Membership sign-ups from content doubled.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      results: "200% membership growth"
    },
    {
      name: "Emily Rodriguez",
      company: "Boutique Fashion Store",
      position: "Owner",
      quote: "The content strategy they developed not only improved our brand awareness but also increased our average order value by 40%. Amazing results!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      results: "40% AOV increase"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to see content marketing results?",
      answer: "Content marketing is a long-term strategy, and results typically begin showing within 3-6 months. Early indicators like engagement and traffic growth can appear sooner, while full benefits usually manifest within 6-12 months with consistent effort."
    },
    {
      question: "What's the difference between content marketing and traditional advertising?",
      answer: "Content marketing focuses on creating valuable, relevant content to attract and retain an audience, while traditional advertising directly promotes products/services. Content marketing builds trust and authority over time, while ads provide immediate visibility."
    },
    {
      question: "Do you create content for all platforms?",
      answer: "We specialize in creating platform-optimized content tailored for each channel's best practices, including websites, blogs, social media, email, and more. Our strategies align content with each platform's audience expectations."
    },
    {
      question: "How do you measure content marketing success?",
      answer: "We track multiple metrics including engagement rates, time on page, traffic growth, lead generation, conversion rates, and ultimately ROI. We provide detailed monthly reports showing progress across all key performance indicators."
    },
    {
      question: "Is content marketing worth it for small businesses?",
      answer: "Absolutely! Content marketing is especially valuable for small businesses as it levels the playing field with larger competitors. Quality content can help small businesses establish authority and attract customers who are ready to buy."
    },
    {
      question: "What's included in your content marketing services?",
      answer: "Our comprehensive services include content strategy development, audience research, content creation (writing, visual, video), SEO optimization, distribution planning, performance tracking, and monthly reporting."
    }
  ];

  // Content Dashboard Component
  const ContentDashboard = () => {
    const [currentMetric, setCurrentMetric] = useState(0);
    
    const metrics = [
      {
        title: "Engagement Rate",
        value: contentMetrics.engagementRate,
        change: "+32%",
        icon: <Heart size={16} />,
        color: "from-pink-500 to-rose-600"
      },
      {
        title: "Lead Generation",
        value: contentMetrics.leadGeneration,
        change: "+28%",
        icon: <Users size={16} />,
        color: "from-blue-500 to-cyan-600"
      },
      {
        title: "Conversion Rate",
        value: contentMetrics.conversionRate,
        change: "+18%",
        icon: <MousePointer size={16} />,
        color: "from-purple-500 to-fuchsia-600"
      },
      {
        title: "Traffic Growth",
        value: contentMetrics.trafficGrowth,
        change: "+45%",
        icon: <TrendingUp size={16} />,
        color: "from-green-500 to-emerald-600"
      }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentMetric(prev => (prev + 1) % metrics.length);
        
        // Animate metrics
        setContentMetrics(prev => ({
          engagementRate: Math.max(70, Math.min(90, prev.engagementRate + (Math.random() - 0.5) * 5)),
          leadGeneration: Math.max(55, Math.min(80, prev.leadGeneration + (Math.random() - 0.5) * 4)),
          conversionRate: Math.max(45, Math.min(65, prev.conversionRate + (Math.random() - 0.5) * 3)),
          trafficGrowth: Math.max(75, Math.min(95, prev.trafficGrowth + (Math.random() - 0.5) * 3))
        }));
      }, 4000);

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
                  <span className="font-semibold">Content Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Optimizing</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 h-full pb-20 overflow-hidden">
                {/* Main Metric Card */}
                <div className={`bg-gradient-to-r ${metrics[currentMetric].color} p-4 rounded-2xl text-white shadow-xl overflow-hidden relative`}>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/5 rounded-full"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        {metrics[currentMetric].icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-base">{metrics[currentMetric].title}</h3>
                        <p className="text-xs text-white/70">Current Performance</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-2">
                      <div className="text-3xl font-bold">{Math.round(metrics[currentMetric].value)}%</div>
                      <div className="text-sm bg-white/20 px-2 py-1 rounded-full">{metrics[currentMetric].change}</div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={16} className="text-blue-600" />
                      <span className="text-xs font-medium text-gray-800">Blog Posts</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800">48</div>
                    <div className="text-xs text-green-600">+5 this month</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Share2 size={16} className="text-purple-600" />
                      <span className="text-xs font-medium text-gray-800">Shares</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800">1.2K</div>
                    <div className="text-xs text-green-600">+18% growth</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <h4 className="font-semibold text-sm text-gray-800 mb-3">Content Health Score</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Content Quality", value: 92, color: "bg-green-500" },
                      { label: "Engagement", value: 88, color: "bg-blue-500" },
                      { label: "SEO Optimization", value: 85, color: "bg-purple-500" }
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
                      { icon: <PenSquare size={20} />, active: false },
                      { icon: <Image size={20} />, active: false },
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
    <div className="min-h-screen">
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
              ✍️ CONTENT MARKETING
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Transform Your Brand With
              <br />
              <span className="text-purple-600">Powerful Content</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Create valuable, engaging content that attracts your ideal customers, builds trust, and drives meaningful business results through strategic storytelling and distribution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                Get Content Audit
              </button>
              <button className="uppercase font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                View Content Plans
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">3.5x</div>
                <div className="text-sm text-gray-600">More Leads</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">80%</div>
                <div className="text-sm text-gray-600">Higher Engagement</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>
          
          {/* Content Dashboard */}
          <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
            <ContentDashboard />
          </div>
        </div>
      </div>

      {/* Why Content Marketing Matters */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                  Why Content Marketing Matters
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Content marketing isn't just about publishing—it's about creating valuable, relevant content that attracts and retains your ideal customers. Our strategic approach ensures your content drives meaningful business results.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <TrendingUp size={24} className="text-purple-600" />,
                    title: "Increased Brand Awareness",
                    description: "Quality content positions your brand as an industry leader and builds trust with potential customers."
                  },
                  {
                    icon: <Target size={24} className="text-purple-600" />,
                    title: "Higher Quality Leads",
                    description: "Content attracts visitors who are genuinely interested in your products or services, leading to better conversions."
                  },
                  {
                    icon: <Award size={24} className="text-purple-600" />,
                    title: "Long-term Value",
                    description: "Unlike ads that stop working when you stop paying, great content continues to attract and convert visitors for years."
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
                      <PenSquare size={32} className="text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">Content Marketing ROI</h3>
                    <p className="text-gray-700">How content drives business growth</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Lead Generation", percentage: "92%" },
                      { label: "Brand Awareness", percentage: "88%" },
                      { label: "Customer Retention", percentage: "85%" },
                      { label: "SEO Performance", percentage: "95%" }
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
              Our Content Marketing Expertise
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive content marketing services that cover strategy, creation, optimization, and distribution across all digital channels.
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
                  <h3 className="text-2xl font-bold text-black mb-2">Content Performance Metrics</h3>
                  <p className="text-gray-600">Real-time content engagement results</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { metric: "Engagement Rate", value: 78, color: "bg-green-500", icon: <Heart size={16} /> },
                    { metric: "Time on Page", value: 72, color: "bg-blue-500", icon: <Clock size={16} /> },
                    { metric: "Lead Conversion", value: 52, color: "bg-purple-500", icon: <Users size={16} /> },
                    { metric: "Social Shares", value: 85, color: "bg-orange-500", icon: <Share2 size={16} /> }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#dcd4ff] rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-800">{item.metric}</span>
                          <span className="text-sm font-bold text-gray-800">{item.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                            style={{width: `${item.value}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Analytics Icons */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center shadow-lg animate-float1">
                <BarChart3 size={20} className="text-blue-700" />
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
              Content Marketing Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from businesses that transformed their online presence with our strategic content solutions and data-driven approach.
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
                      <div className="text-lg font-bold text-green-400">{project.metrics.trafficIncrease}</div>
                      <div className="text-xs">Traffic Growth</div>
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
                        <div className="text-lg font-bold text-purple-600">{project.metrics.revenueGrowth}</div>
                        <div className="text-xs text-gray-600">Revenue Growth</div>
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
              <p className="text-gray-700 mb-6 max-w-md mx-auto">Every business is unique. Let's create a custom content strategy that delivers results for your specific industry and goals.</p>
              <button className="bg-[#dcd4ff] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                Start Your Content Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tools & Tech Stack */}
      <div className="py-24 bg-gray-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Content Toolkit
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage industry-leading content tools and technologies to deliver data-driven insights, comprehensive analysis, and measurable content marketing results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTools.map((tool, index) => (
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
              <h3 className="text-2xl font-bold text-black mb-4">Advanced Content Technologies</h3>
              <p className="text-gray-700">Cutting-edge tools for comprehensive content creation and distribution</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "AI Writing Assistants", icon: "🤖" },
                { name: "Interactive Content", icon: "🔄" },
                { name: "Content Analytics", icon: "📈" },
                { name: "Personalization", icon: "🎯" },
                { name: "Video Production", icon: "🎥" },
                { name: "Podcast Tools", icon: "🎙️" },
                { name: "Content Hubs", icon: "📚" },
                { name: "Social Listening", icon: "👂" }
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
              Real testimonials from businesses that have experienced transformative growth through our content marketing strategies and expertise.
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
              Get answers to common questions about content marketing services, strategies, and what you can expect from our content creation process.
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
                <p className="text-gray-700 mb-4">Our content marketing experts are here to help you understand how we can improve your content strategy.</p>
                <button className="bg-[#dcd4ff] text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-[3px_3px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_#000]">
                  Schedule Consultation
                </button>
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
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
              Stop wasting time on content that doesn't perform. Our proven content marketing strategies will boost engagement, attract qualified leads, and drive business growth.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { icon: "📈", title: "Increase Engagement", description: "3-5x more interactions" },
                { icon: "🎯", title: "Target Ideal Customers", description: "Higher quality leads" },
                { icon: "🚀", title: "Grow Your Business", description: "Proven ROI" }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-purple-100">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50 hover:shadow-lg text-lg">
                Get Free Content Audit
              </button>
              <button className="bg-transparent text-white px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10 text-lg">
                View Content Packages
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Trophy size={20} className="text-yellow-400" />
                <span className="text-purple-100">Award-Winning Agency</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-blue-400" />
                <span className="text-purple-100">500+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-yellow-400" />
                <span className="text-purple-100">4.9/5 Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMarketingPage;