import React, { useState, useEffect } from 'react';
import { 
  Mail, Send, Inbox, BarChart2, Users, Target, CheckCircle, 
  ArrowRight, Award, Lightbulb, Monitor, FileText, Settings, 
  Smartphone, Gauge, Star, Trophy, PieChart, LineChart, 
  Activity, Layers, Code, Link, MousePointer, Calendar, 
  Clock, MapPin, Heart, ThumbsUp, TrendingUp 
} from "lucide-react";

const EmailMarketingPage = () => {
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [hoveredPortfolio, setHoveredPortfolio] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [emailMetrics, setEmailMetrics] = useState({
    openRate: 85,
    clickRate: 32,
    conversionRate: 18,
    subscriberGrowth: 45
  });

  const expertiseAreas = [
    {
      icon: <Mail size={40} />,
      title: "Email Strategy & Campaigns",
      description: "Strategic email marketing campaigns designed to engage your audience and drive conversions with personalized content.",
      benefits: ["Audience segmentation", "Automation workflows", "A/B testing", "Behavior-based triggers"],
      chartData: [
        { month: 'Jan', openRate: 35, clickRate: 12, conversionRate: 5 },
        { month: 'Feb', openRate: 42, clickRate: 15, conversionRate: 7 },
        { month: 'Mar', openRate: 48, clickRate: 18, conversionRate: 9 },
        { month: 'Apr', openRate: 52, clickRate: 22, conversionRate: 11 },
        { month: 'May', openRate: 58, clickRate: 25, conversionRate: 13 },
        { month: 'Jun', openRate: 62, clickRate: 28, conversionRate: 15 }
      ]
    },
    {
      icon: <Send size={40} />,
      title: "Automation & Drip Campaigns",
      description: "Automated email sequences that nurture leads and customers through targeted messaging at every stage of their journey.",
      benefits: ["Welcome series", "Cart abandonment", "Re-engagement", "Post-purchase follow-ups"],
      chartData: [
        { month: 'Jan', openRate: 28, clickRate: 10, conversionRate: 4 },
        { month: 'Feb', openRate: 35, clickRate: 14, conversionRate: 6 },
        { month: 'Mar', openRate: 45, clickRate: 20, conversionRate: 9 },
        { month: 'Apr', openRate: 52, clickRate: 26, conversionRate: 12 },
        { month: 'May', openRate: 58, clickRate: 32, conversionRate: 15 },
        { month: 'Jun', openRate: 65, clickRate: 38, conversionRate: 18 }
      ]
    },
    {
      icon: <FileText size={40} />,
      title: "Content & Copywriting",
      description: "Compelling email content that captures attention, builds relationships, and drives action with persuasive copy.",
      benefits: ["Subject line optimization", "Personalization", "Value-driven content", "Clear CTAs"],
      chartData: [
        { month: 'Jan', openRate: 25, clickRate: 8, conversionRate: 3 },
        { month: 'Feb', openRate: 32, clickRate: 12, conversionRate: 5 },
        { month: 'Mar', openRate: 45, clickRate: 18, conversionRate: 8 },
        { month: 'Apr', openRate: 52, clickRate: 24, conversionRate: 11 },
        { month: 'May', openRate: 58, clickRate: 28, conversionRate: 14 },
        { month: 'Jun', openRate: 62, clickRate: 32, conversionRate: 16 }
      ]
    },
    {
      icon: <BarChart2 size={40} />,
      title: "Analytics & Optimization",
      description: "Data-driven insights to continuously improve performance through testing and optimization strategies.",
      benefits: ["Performance tracking", "Conversion analysis", "List hygiene", "Deliverability monitoring"],
      chartData: [
        { month: 'Jan', openRate: 30, clickRate: 10, conversionRate: 4 },
        { month: 'Feb', openRate: 38, clickRate: 15, conversionRate: 6 },
        { month: 'Mar', openRate: 45, clickRate: 20, conversionRate: 9 },
        { month: 'Apr', openRate: 52, clickRate: 25, conversionRate: 12 },
        { month: 'May', openRate: 60, clickRate: 30, conversionRate: 15 },
        { month: 'Jun', openRate: 68, clickRate: 35, conversionRate: 18 }
      ]
    }
  ];

  const portfolio = [
    {
      id: 1,
      title: "E-commerce Fashion Brand",
      category: "Retail & E-commerce",
      description: "Increased email revenue by 420% with targeted segmentation and automation",
      metrics: {
        revenueGrowth: "420%",
        openRate: "48%",
        timeframe: "6 months",
        conversionRate: "8.2%"
      },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      tags: ["Automation", "Segmentation", "Personalization"]
    },
    {
      id: 2,
      title: "SaaS Technology Company",
      category: "Technology & Software",
      description: "Grew subscriber base by 300% and improved engagement with content strategy",
      metrics: {
        subscriberGrowth: "300%",
        openRate: "52%",
        timeframe: "9 months",
        conversionRate: "12.5%"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["Lead Nurturing", "Content Strategy", "Onboarding"]
    },
    {
      id: 3,
      title: "Healthcare Provider",
      category: "Healthcare & Medical",
      description: "Implemented automation that increased appointment bookings by 280%",
      metrics: {
        revenueGrowth: "280%",
        openRate: "56%",
        timeframe: "5 months",
        conversionRate: "15.3%"
      },
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      tags: ["Automation", "Patient Engagement", "Reminders"]
    },
    {
      id: 4,
      title: "Nonprofit Organization",
      category: "Nonprofit & Charity",
      description: "Boosted donor engagement and recurring donations by 350%",
      metrics: {
        revenueGrowth: "350%",
        openRate: "44%",
        timeframe: "7 months",
        conversionRate: "6.8%"
      },
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=300&fit=crop",
      tags: ["Donor Engagement", "Storytelling", "Fundraising"]
    }
  ];

  const emailTools = [
    {
      name: "Mailchimp",
      category: "Email Platform",
      description: "Comprehensive email marketing and automation platform",
      icon: "✉️",
      color: "from-yellow-500 to-orange-600"
    },
    {
      name: "Klaviyo",
      category: "E-commerce Email",
      description: "Advanced segmentation and automation for online stores",
      icon: "🛒",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "HubSpot",
      category: "Marketing Automation",
      description: "All-in-one CRM with powerful email capabilities",
      icon: "🔄",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "ActiveCampaign",
      category: "Automation",
      description: "Sophisticated automation and CRM features",
      icon: "🤖",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "ConvertKit",
      category: "Creator Platform",
      description: "Email marketing designed for creators and bloggers",
      icon: "🖋️",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Omnisend",
      category: "E-commerce Automation",
      description: "Multi-channel automation for online stores",
      icon: "📲",
      color: "from-red-500 to-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Urban Fashion Co",
      position: "Marketing Director",
      quote: "Our email revenue increased by 420% in just 6 months. The automation sequences and segmentation strategies transformed our email performance.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3b7?w=100&h=100&fit=crop&crop=face",
      results: "420% revenue growth"
    },
    {
      name: "Michael Chen",
      company: "TechStart Solutions",
      position: "CEO",
      quote: "They completely revamped our email strategy. Our open rates went from 18% to 48% and we're converting 5x more leads through email.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      results: "48% open rate"
    },
    {
      name: "Emily Rodriguez",
      company: "Wellness Center",
      position: "Owner",
      quote: "The automated sequences they set up have saved us dozens of hours each week while dramatically improving our patient engagement.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      results: "300% more engagement"
    }
  ];

  const faqs = [
    {
      question: "How is email marketing different from social media?",
      answer: "Email marketing reaches your audience directly in their inbox, with much higher engagement rates than social media. You own your email list, unlike social media followers where platforms control access. Email converts 40x better than social media for customer acquisition."
    },
    {
      question: "What's a good email open rate?",
      answer: "Average open rates vary by industry but generally 20-30% is decent, 30-40% is good, and 40%+ is excellent. With our strategies, clients typically achieve 40-60% open rates through segmentation, personalization, and optimized send times."
    },
    {
      question: "How often should we send emails?",
      answer: "Frequency depends on your audience and content. For most businesses, 1-2x per week is ideal. We help determine the optimal frequency through testing to maximize engagement without causing fatigue."
    },
    {
      question: "How do you measure email marketing success?",
      answer: "We track multiple metrics including open rates, click-through rates, conversion rates, revenue per email, list growth rate, and overall ROI. Our detailed reports show how each campaign performs against your business goals."
    },
    {
      question: "Is email marketing worth it for small businesses?",
      answer: "Absolutely! Email marketing delivers the highest ROI of any marketing channel - $42 for every $1 spent. It's especially powerful for small businesses to build relationships and drive repeat purchases cost-effectively."
    },
    {
      question: "What's included in your email marketing services?",
      answer: "Our services include strategy development, audience segmentation, email design and copywriting, automation setup, A/B testing, analytics, and ongoing optimization. We create customized solutions based on your business goals."
    }
  ];

  // Tablet Email Animation Component
  const EmailTabletAnimation = () => {
    const [activeEmail, setActiveEmail] = useState(0);
    
    const emails = [
      {
        subject: "Your exclusive offer inside!",
        preview: "We've saved something special just for you. Limited time only...",
        sender: "Sales Team",
        time: "10:30 AM",
        unread: true
      },
      {
        subject: "Your cart is waiting for you",
        preview: "Complete your purchase and get free shipping on your order...",
        sender: "Customer Support",
        time: "Yesterday",
        unread: false
      },
      {
        subject: "New collection just dropped!",
        preview: "Be the first to shop our newest arrivals. Exclusive preview...",
        sender: "Marketing Team",
        time: "Mar 15",
        unread: false
      },
      {
        subject: "Your weekly digest is here",
        preview: "Check out the most popular content from this week. Don't miss...",
        sender: "Newsletter",
        time: "Mar 14",
        unread: true
      }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveEmail(prev => (prev + 1) % emails.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-[2rem] blur-xl scale-110"></div>
        
        <div className="relative w-[420px] h-[580px] bg-gradient-to-b from-gray-800 to-black rounded-[2rem] p-2 shadow-2xl">
          <div className="w-full h-full bg-black rounded-[1.8rem] overflow-hidden relative">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            
            <div className="pt-10 px-6 h-full bg-gradient-to-br from-gray-50 to-blue-50 relative">
              <div className="flex justify-between items-center mb-6 text-sm text-gray-800">
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-purple-600" />
                  <span className="font-semibold">Email Inbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                    24 new
                  </div>
                </div>
              </div>
              
              {/* Email List */}
              <div className="space-y-2 h-[400px] overflow-y-auto pr-2">
                {emails.map((email, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                      activeEmail === index 
                        ? 'bg-purple-100 border-2 border-purple-300 shadow-md' 
                        : 'bg-white hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveEmail(index)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activeEmail === index ? 'bg-purple-600 text-white' : 'bg-gray-200'
                      }`}>
                        {email.sender.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline">
                          <h3 className={`font-semibold truncate ${
                            email.unread ? 'text-black' : 'text-gray-600'
                          }`}>
                            {email.subject}
                          </h3>
                          <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                            {email.time}
                          </span>
                        </div>
                        <p className={`text-sm truncate ${
                          email.unread ? 'text-gray-800' : 'text-gray-500'
                        }`}>
                          {email.preview}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Selected Email Preview */}
              <div className="absolute bottom-6 left-6 right-6 h-[180px] bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{emails[activeEmail].subject}</h3>
                  <span className="text-xs text-gray-500">{emails[activeEmail].time}</span>
                </div>
                <div className="text-xs text-gray-700 mb-2">From: {emails[activeEmail].sender}</div>
                <div className="h-[80px] overflow-y-auto text-sm text-gray-800 mb-3">
                  {emails[activeEmail].preview} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition">
                  View Full Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Interactive Line Chart Component
    const InteractiveLineChart = ({ data }) => {
    const height = 200;
    const padding = 40;
  
    const [width, setWidth] = React.useState(400);
    const svgRef = React.useRef(null);
  
    React.useEffect(() => {
      const updateWidth = () => {
        if (svgRef.current) {
          const parentWidth = svgRef.current.parentElement.offsetWidth;
          setWidth(parentWidth < 400 ? parentWidth : 400);
        }
      };
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, []);
  
    const maxValue = Math.max(...data.map(d => Math.max(d.openRate, d.clickRate, d.conversionRate))) + 10;
  
    const getY = (value) => height - padding - (value / maxValue) * (height - padding * 2);
    const getX = (index) => padding + (index / (data.length - 1)) * (width - padding * 2);
  
    const createPath = (dataKey) =>
      data.map((point, i) => {
        const x = getX(i);
        const y = getY(point[dataKey]);
        return `${i === 0 ? 'M' : 'L'}${x},${y}`;
      }).join(' ');
  
    const openPath = createPath('openRate');
    const clickPath = createPath('clickRate');
    const conversionPath = createPath('conversionRate');
  
    return (
      <div className="w-full max-w-[420px] mx-auto px-4">
        <svg ref={svgRef} width={width} height={height} className="mx-auto">
          {[0, 25, 50, 75].map((value, i) => (
              <g key={`grid-${i}`}>
                <line 
                  x1={padding} 
                  y1={getY(value)} 
                  x2={width - padding} 
                  y2={getY(value)} 
                  stroke="#e5e7eb" 
                  strokeWidth="1" 
                />
                <text 
                  x={padding - 10} 
                  y={getY(value) + 4} 
                  textAnchor="end" 
                  fill="#6b7280" 
                  fontSize="10"
                >
                  {value}%
                </text>
              </g>
            ))}
            
            {/* X-axis labels */}
            {data.map((point, i) => (
              <text 
                key={`label-${i}`}
                x={getX(i)} 
                y={height - padding + 15} 
                textAnchor="middle" 
                fill="#6b7280" 
                fontSize="10"
              >
                {point.month}
              </text>
            ))}
            
            {/* Open Rate Line */}
            <path 
              d={openPath} 
              fill="none" 
              stroke="#3b82f6" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            {data.map((point, i) => (
              <circle 
                key={`open-${i}`}
                cx={getX(i)} 
                cy={getY(point.openRate)} 
                r="4" 
                fill="#3b82f6" 
              />
            ))}
            
            {/* Click Rate Line */}
            <path 
              d={clickPath} 
              fill="none" 
              stroke="#8b5cf6" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            {data.map((point, i) => (
              <circle 
                key={`click-${i}`}
                cx={getX(i)} 
                cy={getY(point.clickRate)} 
                r="4" 
                fill="#8b5cf6" 
              />
            ))}
            
            {/* Conversion Rate Line */}
            <path 
              d={conversionPath} 
              fill="none" 
              stroke="#10b981" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            {data.map((point, i) => (
              <circle 
                key={`conversion-${i}`}
                cx={getX(i)} 
                cy={getY(point.conversionRate)} 
                r="4" 
                fill="#10b981" 
              />
            ))}      </svg>
  
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs text-gray-700">Open Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-xs text-gray-700">Click Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-700">Conversion Rate</span>
            </div>      </div>
      </div>
    );
  };

  const EmailDashboard = () => {
    const [currentMetric, setCurrentMetric] = useState(0);
    
    const metrics = [
      {
        title: "Open Rate",
        value: emailMetrics.openRate,
        change: "+12%",
        icon: <Inbox size={16} />,
        color: "from-blue-500 to-cyan-600"
      },
      {
        title: "Click Rate",
        value: emailMetrics.clickRate,
        change: "+8%",
        icon: <MousePointer size={16} />,
        color: "from-purple-500 to-pink-600"
      },
      {
        title: "Conversion Rate",
        value: emailMetrics.conversionRate,
        change: "+15%",
        icon: <Trophy size={16} />,
        color: "from-green-500 to-emerald-600"
      },
      {
        title: "Subscriber Growth",
        value: emailMetrics.subscriberGrowth,
        change: "+22%",
        icon: <Users size={16} />,
        color: "from-orange-500 to-red-600"
      }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentMetric(prev => (prev + 1) % metrics.length);
        
        // Animate metrics
        setEmailMetrics(prev => ({
          openRate: Math.max(70, Math.min(95, prev.openRate + (Math.random() - 0.5) * 5)),
          clickRate: Math.max(25, Math.min(45, prev.clickRate + (Math.random() - 0.5) * 4)),
          conversionRate: Math.max(12, Math.min(25, prev.conversionRate + (Math.random() - 0.5) * 3)),
          subscriberGrowth: Math.max(35, Math.min(60, prev.subscriberGrowth + (Math.random() - 0.5) * 3))
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
                  <span className="font-semibold">Email Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Active Campaign</span>
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
                      <Users size={16} className="text-blue-600" />
                      <span className="text-xs font-medium text-gray-800">Subscribers</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800">24.7K</div>
                    <div className="text-xs text-green-600">+1.2K this month</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Send size={16} className="text-purple-600" />
                      <span className="text-xs font-medium text-gray-800">Campaigns</span>
                    </div>
                    <div className="text-xl font-bold text-gray-800">18</div>
                    <div className="text-xs text-green-600">4 active</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <h4 className="font-semibold text-sm text-gray-800 mb-3">Campaign Performance</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Open Rate", value: 85, color: "bg-blue-500" },
                      { label: "Click Rate", value: 32, color: "bg-purple-500" },
                      { label: "Conversion", value: 18, color: "bg-green-500" }
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
                      { icon: <BarChart2 size={20} />, active: true },
                      { icon: <Mail size={20} />, active: false },
                      { icon: <Target size={20} />, active: false },
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
      {/* Hero Section with Tablet */}
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(156, 146, 172, 0.1) 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="w-full lg:w-[85%] relative z-10 flex flex-col lg:flex-row items-center min-h-screen px-4 sm:px-6 py-8">
        <div className="w-full text-center lg:text-left">
            <div className="inline-block bg-[#dcd4ff] text-black px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-[2px_2px_0px_#000]">
              ✉️ EMAIL MARKETING
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Grow Your Business
              <br />
              <span className="text-purple-600">With Email Marketing</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Boost engagement and revenue with targeted email campaigns, automation sequences, and data-driven strategies that convert subscribers into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                Get Free Audit
              </button>
              <button className="uppercase font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                View Email Plans
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">42x</div>
                <div className="text-sm text-gray-600">Higher ROI Than Social</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">48%</div>
                <div className="text-sm text-gray-600">Avg Open Rates</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">5x</div>
                <div className="text-sm text-gray-600">More Conversions</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            {/* ... (keep text content the same) */}
          </div>
          
          {/* Email Tablet Animation */}
          <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
            <EmailTabletAnimation />
          </div>
        </div>
      </div>

      {/* Why Email Marketing Matters */}
      {/* ... (keep this section the same) */}

      {/* Our Expertise */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Email Expertise
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive email marketing services that cover strategy, automation, content, and analytics to maximize your email performance.
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
            
            {/* Interactive Line Chart */}
            <div className="relative">
              <div className="relative bg-white p-8 rounded-3xl border-2 border-black shadow-[12px_12px_0px_#000]">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {expertiseAreas[activeExpertise].title} Performance
                  </h3>
                  <p className="text-gray-600">6-month growth trajectory</p>
                </div>
                
                <InteractiveLineChart data={expertiseAreas[activeExpertise].chartData} />
                
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-blue-600">
                      {expertiseAreas[activeExpertise].chartData[5].openRate}%
                    </div>
                    <div className="text-xs text-gray-600">Open Rate</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-purple-600">
                      {expertiseAreas[activeExpertise].chartData[5].clickRate}%
                    </div>
                    <div className="text-xs text-gray-600">Click Rate</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-600">
                      {expertiseAreas[activeExpertise].chartData[5].conversionRate}%
                    </div>
                    <div className="text-xs text-gray-600">Conversion</div>
                  </div>
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
      </div>

            {/* Portfolio Section */}
            <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Email Marketing Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from businesses that transformed their customer engagement and revenue with our strategic email marketing solutions.
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
                      <div className="text-lg font-bold text-green-400">{project.metrics.revenueGrowth}</div>
                      <div className="text-xs">Revenue Growth</div>
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
                        <div className="text-lg font-bold text-purple-600">{project.metrics.openRate}</div>
                        <div className="text-xs text-gray-600">Open Rate</div>
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
              <h3 className="text-2xl font-bold text-black mb-4">Ready to Transform Your Email Marketing?</h3>
              <p className="text-gray-700 mb-6 max-w-md mx-auto">Every business is unique. Let's create a custom email strategy that delivers results for your specific audience and goals.</p>
              <button className="bg-[#dcd4ff] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                Start Your Email Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Email Tools & Tech Stack */}
      <div className="py-24 bg-gray-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Email Marketing Toolkit
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage industry-leading email platforms and technologies to deliver data-driven campaigns, automation workflows, and measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emailTools.map((tool, index) => (
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
              <h3 className="text-2xl font-bold text-black mb-4">Advanced Email Technologies</h3>
              <p className="text-gray-700">Cutting-edge tools for comprehensive email marketing success</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Personalization", icon: "👤" },
                { name: "Dynamic Content", icon: "🔄" },
                { name: "AI Subject Lines", icon: "🧠" },
                { name: "Predictive Analytics", icon: "🔮" },
                { name: "Behavioral Triggers", icon: "🎯" },
                { name: "Advanced Segmentation", icon: "✂️" },
                { name: "Deliverability Tools", icon: "📩" },
                { name: "Interactive Emails", icon: "🖱️" }
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
              Real testimonials from businesses that have experienced transformative growth through our email marketing strategies and automation expertise.
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
              Get answers to common questions about email marketing services, strategies, and what you can expect from our campaigns.
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
                <p className="text-gray-700 mb-4">Our email marketing experts are here to help you understand how we can improve your campaigns.</p>
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
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto">
              Stop leaving revenue on the table. Our proven email strategies will boost your open rates, increase engagement, and drive more conversions for your business.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              {[
                { icon: "📈", title: "Higher Open Rates", description: "40-60% average open rates" },
                { icon: "💰", title: "Increased Revenue", description: "$42 ROI for every $1 spent" },
                { icon: "⏱️", title: "Save Time", description: "Automation does the work for you" }
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
                Get Free Email Audit
              </button>
              <button className="bg-transparent text-white px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10 text-lg">
                View Email Packages
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

export default EmailMarketingPage;
