import React, { useState, useEffect } from 'react';
import { 
  Search, TrendingUp, Target, BarChart3, Globe, Eye, Zap, 
  CheckCircle, ArrowRight, Users, Award, Lightbulb, Monitor,
  FileText, Settings, Smartphone, Gauge, Star, Trophy,
  PieChart, LineChart, Activity, Layers, Code,
  MousePointer, Calendar, Clock, MapPin, Heart, ThumbsUp,
  Instagram, Facebook, Twitter, Youtube, Linkedin, Share2,
  MessageCircle, Hash, Image, Video, Smile, UserPlus,
  Bell, Mail, ThumbsUp as Like, Bookmark, Send
} from "lucide-react";
import { Link } from 'react-router-dom';
const SocialMediaMarketingPage = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [hoveredPortfolio, setHoveredPortfolio] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [socialMetrics, setSocialMetrics] = useState({
    engagementRate: 78,
    followerGrowth: 65,
    clickThroughRate: 52,
    conversionRate: 38
  });

  const expertiseAreas = [
    {
      icon: <Instagram size={40} />,
      title: "Social Media Strategy",
      description: "Comprehensive social media strategies tailored to your brand's goals, audience, and industry trends.",
      benefits: ["Platform-specific strategies", "Content calendar planning", "Audience targeting", "Competitor analysis"]
    },
    {
      icon: <Image size={40} />,
      title: "Content Creation",
      description: "Stunning visuals and compelling copy that captures attention and communicates your brand message effectively.",
      benefits: ["Graphic design", "Video production", "Copywriting", "Branded content"]
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Community Management",
      description: "Building and nurturing your online community through engagement, conversations, and relationship building.",
      benefits: ["Comment moderation", "Direct messaging", "Engagement strategies", "Brand advocacy"]
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Paid Social Advertising",
      description: "Targeted ad campaigns that reach your ideal customers and drive measurable results across social platforms.",
      benefits: ["Audience targeting", "Ad creative development", "Campaign management", "Performance optimization"]
    }
  ];

    const portfolio = [
    {
      id: 1,
      title: "Fashion Brand Campaign",
      category: "Retail & E-commerce",
      description: "Increased engagement by 420% and sales by 350% through Instagram strategy",
      metrics: {
        engagementIncrease: "420%",
        revenueGrowth: "350%",
        timeframe: "6 months",
        followers: "45K new followers"
      },
      image: "https://img.freepik.com/premium-psd/top-fashion-banners-enhance-your-brands-visual-appeal_839034-944.jpg",
      tags: ["Instagram", "Influencer Collabs", "Content Creation"]
    },
    {
      id: 2,
      title: "Tech Startup Launch",
      category: "Technology",
      description: "Generated 5,000 leads and 200+ signups through LinkedIn and Twitter campaigns",
      metrics: {
        engagementIncrease: "380%",
        leadGrowth: "5,000",
        timeframe: "3 months",
        followers: "12K new followers"
      },
      image: "https://img.freepik.com/free-psd/start-up-business-concept-banner-template_23-2148806580.jpg",
      tags: ["LinkedIn", "Twitter", "Lead Generation"]
    },
    {
      id: 3,
      title: "Restaurant Chain Promotion",
      category: "Food & Beverage",
      description: "Drove 150% more foot traffic and 80% increase in online orders through Facebook campaigns",
      metrics: {
        engagementIncrease: "290%",
        revenueGrowth: "80%",
        timeframe: "4 months",
        followers: "28K new followers"
      },
      image: "https://img.freepik.com/free-psd/modern-banner-breakfast-restaurant_23-2148351348.jpg",
      tags: ["Facebook", "Local Marketing", "Promotions"]
    },
    {
      id: 4,
      title: "Fitness App Growth",
      category: "Health & Wellness",
      description: "Achieved 600% growth in app downloads through TikTok and YouTube content",
      metrics: {
        engagementIncrease: "550%",
        downloadGrowth: "600%",
        timeframe: "8 months",
        followers: "95K new followers"
      },
      image: "https://assets.weforum.org/editor/oivngYtaavLuKdG_6ul2G0E_rRoZvWm5uGuEgSyf8jY.jpg",
      tags: ["TikTok", "YouTube", "Viral Content"]
    }
  ];

  const socialTools = [
    {
      name: "Hootsuite",
      category: "Social Management",
      description: "Comprehensive social media scheduling and monitoring",
      icon: "🦉",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Canva",
      category: "Content Creation",
      description: "Professional graphic design for social media",
      icon: "🎨",
      color: "from-blue-500 to-teal-600"
    },
    {
      name: "Sprout Social",
      category: "Analytics",
      description: "Advanced social media analytics and reporting",
      icon: "🌱",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Adobe Premiere",
      category: "Video Editing",
      description: "Professional video editing for social content",
      icon: "🎬",
      color: "from-purple-500 to-blue-600"
    },
    {
      name: "Facebook Ads Manager",
      category: "Advertising",
      description: "Powerful ad creation and targeting tools",
      icon: "📊",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Later",
      category: "Instagram Scheduling",
      description: "Visual content calendar for Instagram",
      icon: "⏱️",
      color: "from-pink-500 to-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Jessica Williams",
      company: "Bella Fashion",
      position: "Marketing Director",
      quote: "Our Instagram engagement increased by 400% in just 4 months. The creative content and strategic posting schedule transformed our social presence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      results: "400% engagement growth"
    },
    {
      name: "David Kim",
      company: "TechNova Solutions",
      position: "CEO",
      quote: "The LinkedIn strategy brought us 3x more qualified leads than our previous marketing efforts. The content resonated perfectly with our B2B audience.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      results: "3x more qualified leads"
    },
    {
      name: "Maria Rodriguez",
      company: "Urban Eats",
      position: "Owner",
      quote: "Our TikTok videos went viral, bringing in thousands of new customers. The team understood exactly how to make our food look irresistible on camera.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      results: "Viral TikTok campaign"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to see results from social media marketing?",
      answer: "Initial engagement improvements often appear within 4-8 weeks, while significant growth and conversion results typically manifest in 3-6 months. Consistent, high-quality content is key to building momentum."
    },
    {
      question: "Which social platforms should my business be on?",
      answer: "The ideal platforms depend on your target audience and business goals. We analyze your audience demographics and industry trends to recommend the most effective platforms for your specific needs."
    },
    {
      question: "How do you measure social media success?",
      answer: "We track metrics like engagement rate, follower growth, website clicks, lead generation, and conversion rates. Our reports focus on ROI and align with your specific business objectives."
    },
    {
      question: "What's included in your social media services?",
      answer: "Our comprehensive services include strategy development, content creation, community management, advertising campaigns, influencer partnerships, and detailed performance analytics."
    },
    {
      question: "How often should we post on social media?",
      answer: "Optimal posting frequency varies by platform and audience. We create customized content calendars that balance visibility with quality, typically ranging from 3-5 posts per week on LinkedIn to 1-2 posts daily on Instagram."
    },
    {
      question: "Do you manage social media advertising?",
      answer: "Yes, we create and manage targeted ad campaigns across all major platforms, including Facebook, Instagram, LinkedIn, Twitter, and TikTok, with continuous optimization for maximum ROI."
    }
  ];

  // Social Dashboard Component
  const SocialDashboard = () => {
    const [currentMetric, setCurrentMetric] = useState(0);
    
    const metrics = [
      {
        title: "Engagement Rate",
        value: socialMetrics.engagementRate,
        change: "+32%",
        icon: <Heart size={16} />,
        color: "from-pink-500 to-red-600"
      },
      {
        title: "Follower Growth",
        value: socialMetrics.followerGrowth,
        change: "+28%",
        icon: <UserPlus size={16} />,
        color: "from-blue-500 to-cyan-600"
      },
      {
        title: "Click-Through Rate",
        value: socialMetrics.clickThroughRate,
        change: "+15%",
        icon: <MousePointer size={16} />,
        color: "from-purple-500 to-purple-600"
      },
      {
        title: "Conversion Rate",
        value: socialMetrics.conversionRate,
        change: "+22%",
        icon: <Trophy size={16} />,
        color: "from-yellow-500 to-orange-600"
      }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentMetric(prev => (prev + 1) % metrics.length);
        
        // Animate metrics
        setSocialMetrics(prev => ({
          engagementRate: Math.max(70, Math.min(90, prev.engagementRate + (Math.random() - 0.5) * 5)),
          followerGrowth: Math.max(55, Math.min(80, prev.followerGrowth + (Math.random() - 0.5) * 4)),
          clickThroughRate: Math.max(45, Math.min(65, prev.clickThroughRate + (Math.random() - 0.5) * 3)),
          conversionRate: Math.max(30, Math.min(50, prev.conversionRate + (Math.random() - 0.5) * 3))
        }));
      }, 4000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-blue-600/20 rounded-[3rem] blur-xl scale-110"></div>
        
        <div className="relative w-72 h-[580px] bg-gradient-to-b from-gray-800 to-black rounded-[3rem] p-2 shadow-2xl">
          <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            
            <div className="pt-10 px-4 h-full bg-gradient-to-br from-gray-50 to-pink-50 relative">
              <div className="flex justify-between items-center mb-6 text-xs text-gray-800">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">Social Dashboard</span>
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
                      <Users size={16} className="text-purple-600" />
                      <span className="text-xs font-medium text-gray-800">Followers</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800">45.8K</div>
                    <div className="text-xs text-green-600">+1.2K this month</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageCircle size={16} className="text-blue-600" />
                      <span className="text-xs font-medium text-gray-800">Engagement</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800">1.4K</div>
                    <div className="text-xs text-green-600">+28% improved</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <h4 className="font-semibold text-sm text-gray-800 mb-3">Platform Performance</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Instagram", value: 88, color: "bg-pink-500" },
                      { label: "Facebook", value: 76, color: "bg-blue-500" },
                      { label: "LinkedIn", value: 82, color: "bg-indigo-500" }
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
                      { icon: <Instagram size={20} />, active: false },
                      { icon: <Facebook size={20} />, active: false },
                      { icon: <Settings size={20} />, active: false }
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${
                          item.active ? 'bg-pink-500 text-white shadow-lg' : 'text-gray-600'
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
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
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
              🚀 SOCIAL MEDIA MARKETING
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Designs That
              <br />
              <span className="text-purple-600">Communicate & Convert</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We create stunning visuals and intuitive interfaces that reflect your brand and enhance user engagement across all social platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <Link  to ="/contact-us">   
              <button className="cursor-pointer uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                Get Free Strategy
              </button>
             </Link>
            <Link  to ="/projects-details">   
              <button className="cursor-pointer uppercase font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                View Our Work
              </button>
             </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">400%</div>
                <div className="text-sm text-gray-600">Avg Engagement Growth</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">1M+</div>
                <div className="text-sm text-gray-600">Followers Gained</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">80+</div>
                <div className="text-sm text-gray-600">Successful Campaigns</div>
              </div>
            </div>
          </div>
          
          {/* Social Dashboard */}
          <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
            <SocialDashboard />
          </div>
        </div>
      </div>

      {/* About Social Media Services */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                  Why Social Media Marketing Matters
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Social media isn't just about posting content—it's about building relationships, establishing brand authority, and driving meaningful engagement that converts to business results. Our strategic approach ensures your brand stands out in crowded social feeds.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <TrendingUp size={24} className="text-purple-600" />,
                    title: "Increased Brand Awareness",
                    description: "Expand your reach and visibility with content designed to be shared, liked, and remembered."
                  },
                  {
                    icon: <Target size={24} className="text-purple-600" />,
                    title: "Higher Engagement Rates",
                    description: "Build meaningful connections with your audience through interactive, valuable content."
                  },
                  {
                    icon: <Award size={24} className="text-purple-600" />,
                    title: "Cost-Effective Advertising",
                    description: "Social ads offer precise targeting at a fraction of traditional advertising costs."
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
              <div className="relative bg-gradient-to-br from-pink-100 to-blue-100 p-8 rounded-3xl border-2 border-black shadow-[12px_12px_0px_#000]">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000]">
                      <Share2 size={32} className="text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-2">Social Media Success Formula</h3>
                    <p className="text-gray-700">Our proven methodology for social media growth</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Content Strategy", percentage: "95%" },
                      { label: "Community Growth", percentage: "88%" },
                      { label: "Engagement Rate", percentage: "92%" },
                      { label: "Ad Performance", percentage: "85%" }
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
      <div className="py-24 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Social Media Expertise
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive social media services that cover strategy, content creation, community management, and paid advertising across all major platforms.
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
                  <h3 className="text-2xl font-bold text-black mb-2">Social Media Performance</h3>
                  <p className="text-gray-600">Real-time engagement metrics</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { metric: "Engagement Rate", value: 78, color: "bg-pink-500", icon: <Heart size={16} /> },
                    { metric: "Follower Growth", value: 65, color: "bg-blue-500", icon: <UserPlus size={16} /> },
                    { metric: "Content Reach", value: 84, color: "bg-purple-500", icon: <Globe size={16} /> },
                    { metric: "Response Time", value: 92, color: "bg-green-500", icon: <MessageCircle size={16} /> }
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
              Social Media Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from businesses that transformed their social presence with our strategic content and data-driven approach.
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
                      <div className="text-lg font-bold text-green-400">{project.metrics.engagementIncrease}</div>
                      <div className="text-xs">Engagement Growth</div>
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
                        <div className="text-lg font-bold text-purple-600">{project.metrics.revenueGrowth || project.metrics.leadGrowth || project.metrics.downloadGrowth}</div>
                        <div className="text-xs text-gray-600">
                          {project.metrics.revenueGrowth ? 'Revenue Growth' : 
                           project.metrics.leadGrowth ? 'Leads Generated' : 'Download Growth'}
                        </div>
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
            <div className="inline-block bg-gradient-to-r from-pink-100 to-blue-100 p-8 rounded-3xl border-2 border-black shadow-[8px_8px_0px_#000]">
              <h3 className="text-2xl font-bold text-black mb-4">Ready to Transform Your Social Presence?</h3>
              <p className="text-gray-700 mb-6 max-w-md mx-auto">Every brand is unique. Let's create a custom social media strategy that delivers results for your specific audience and goals.</p>
            <Link  to ="/contact-us">   
              <button className="cursor-pointer bg-[#dcd4ff] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                Start Your Social Journey
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social Tools & Tech Stack */}
      <div className="py-24 bg-gray-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Social Media Toolkit
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage industry-leading social media tools and technologies to create stunning content, manage campaigns, and analyze performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialTools.map((tool, index) => (
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
              <h3 className="text-2xl font-bold text-black mb-4">Advanced Social Technologies</h3>
              <p className="text-gray-700">Cutting-edge tools for comprehensive social media management</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Influencer Marketing", icon: "🌟" },
                { name: "Social Listening", icon: "👂" },
                { name: "User-Generated Content", icon: "📸" },
                { name: "Community Building", icon: "👥" },
                { name: "Live Streaming", icon: "🎥" },
                { name: "Chatbots", icon: "🤖" },
                { name: "AR Filters", icon: "👓" },
                { name: "Social Commerce", icon: "🛒" }
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
      <div className="py-24 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real testimonials from businesses that have experienced transformative growth through our social media strategies and content expertise.
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
              Get answers to common questions about social media marketing, content strategy, and what you can expect from our services.
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
              <div className="inline-block bg-gradient-to-r from-pink-100 to-blue-100 p-6 rounded-2xl border-2 border-black shadow-[6px_6px_0px_#000]">
                <h3 className="text-xl font-bold text-black mb-3">Still Have Questions?</h3>
                <p className="text-gray-700 mb-4">Our social media experts are here to help you understand how we can grow your online presence.</p>
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
              Ready to Dominate Social Media?
            </h2>
            <p className="text-lg text-pink-100 mb-8 max-w-3xl mx-auto">
              Stop losing potential customers to competitors. Our proven social media strategies will boost your engagement, grow your audience, and drive more conversions.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { icon: "🚀", title: "Boost Engagement", description: "Higher likes, shares & comments" },
                { icon: "📈", title: "Grow Followers", description: "Quality audience growth" },
                { icon: "💰", title: "Drive Sales", description: "Convert followers to customers" }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-pink-100">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link  to ="/contact-us">   
              <button className="cursor-pointer bg-white text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-pink-50 hover:shadow-lg text-lg">
                Get Free Strategy Call
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
                <span className="text-pink-100">Award-Winning Agency</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-blue-400" />
                <span className="text-pink-100">300+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-yellow-400" />
                <span className="text-pink-100">4.8/5 Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketingPage;
