
import React, { useState, useEffect } from 'react';
import { 
  CircleCheck, Smartphone, Tablet, Monitor, Zap, Shield, Users, 
  BarChart3, Settings, MonitorPlay, Download, Star, Globe, Cpu, 
  ArrowRight, CheckCircle, PlayCircle, Heart, Bell, Camera, 
  MessageCircle, ShoppingCart, MapPin, Calendar, Search, Layers,
  Code, Database, Cloud, Lock, Brain, Workflow 
} from "lucide-react";
import { Link } from 'react-router-dom';


const MobileAppDevelopmentPage = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [hoveredTech, setHoveredTech] = useState(null);
    const [activeAppType, setActiveAppType] = useState(0);
    const [hoveredIndustry, setHoveredIndustry] = useState(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    

    const features = [
        {
            icon: <Smartphone size={40} />,
            title: "Native Apps",
            description: "High-performance native apps for iOS and Android with platform-specific features and optimal user experience."
        },
        {
            icon: <Monitor size={40} />,
            title: "Cross-Platform",
            description: "React Native and Flutter apps that work seamlessly across multiple platforms with shared codebase."
        },
        {
            icon: <Globe size={40} />,
            title: "Progressive Web Apps",
            description: "PWAs that combine the best of web and mobile apps with offline capabilities and app-like experience."
        },
        {
            icon: <Shield size={40} />,
            title: "Secure Architecture",
            description: "Enterprise-grade security with encrypted data handling, secure APIs, and compliance with app store guidelines."
        }
    ];

    const technologies = [
        {
            name: "React Native",
            color: "#61DAFB",
            description: "Cross-platform mobile apps",
            icon: "https://reactnative.dev/img/header_logo.svg"
        },
        {
            name: "Flutter",
            color: "#02569B",
            description: "Google's UI toolkit",
            icon: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png"
        },
        {
            name: "Swift",
            color: "#FA7343",
            description: "Native iOS development",
            icon: "https://developer.apple.com/assets/elements/icons/swift/swift-96x96_2x.png"
        },
        {
            name: "Kotlin",
            color: "#7F52FF",
            description: "Native Android development",
            icon: "https://kotlinlang.org/docs/images/kotlin-logo.png"
        },
        {
            name: "Firebase",
            color: "#FFCA28",
            description: "Backend services",
            icon: "https://firebase.google.com/downloads/brand/PNG/logo-logomark.png"
        },
        {
            name: "AWS Mobile",
            color: "#FF9900",
            description: "Cloud infrastructure",
            icon: "https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Strategy",
            description: "Deep understanding of your target audience, market research, feature planning, and technical architecture design for optimal user experience."
        },
        {
            step: "02",
            title: "UI/UX Design",
            description: "Creating intuitive user interfaces with wireframing, prototyping, and visual design that follows platform-specific guidelines."
        },
        {
            step: "03",
            title: "Development & Testing",
            description: "Agile development approach with continuous testing, performance optimization, and quality assurance across all target devices."
        },
        {
            step: "04",
            title: "Launch & Maintenance",
            description: "App store submission, launch strategy, post-launch monitoring, updates, and ongoing technical support and feature enhancements."
        }
    ];

    // App Types with interactive design
    const appTypes = [
        {
            id: 0,
            title: "E-Commerce Mobile Apps",
            category: "Retail & Shopping",
            description: "Feature-rich shopping apps with seamless payment integration and personalized shopping experiences",
            longDescription: "Our e-commerce mobile apps provide a complete shopping solution with advanced features like AR try-ons, AI-powered recommendations, secure payment gateways, and real-time inventory management. Built for scalability to handle high traffic during sales events.",
            features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "User Profiles", "Push Notifications", "Analytics Dashboard"],
            benefits: ["50% increase in mobile sales", "40% higher user engagement", "Seamless checkout experience"],
            image: "https://miro.medium.com/v2/resize:fit:1400/1*EjiVGqG-EhYUHQEi0m7IHg.png",
            icon: <ShoppingCart size={32} className="text-purple-600" />,
            color: "from-purple-500 to-indigo-600"
        },
        {
            id: 1,
            title: "Social & Communication Apps",
            category: "Social Networking",
            description: "Engaging social platforms with real-time messaging, content sharing, and community features",
            longDescription: "Build vibrant social communities with our comprehensive social app development. Features include real-time chat, video calls, content sharing, social feeds, and advanced privacy controls. Perfect for building communities and fostering user engagement.",
            features: ["Real-time Chat", "Video Calling", "Content Sharing", "Social Feeds", "User Profiles", "Privacy Controls"],
            benefits: ["90% user retention rate", "5M+ messages processed daily", "Real-time communication"],
            image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/081098176216013.64c10a8cce558.png",
            icon: <MessageCircle size={32} className="text-purple-600" />,
            color: "from-green-500 to-teal-600"
        },
        {
            id: 2,
            title: "Healthcare & Fitness Apps",
            category: "Health & Wellness",
            description: "HIPAA-compliant health apps with telemedicine, fitness tracking, and wellness monitoring features",
            longDescription: "Comprehensive healthcare solutions including telemedicine platforms, fitness tracking, appointment scheduling, and health monitoring. All apps are HIPAA-compliant with secure data handling and integration with wearable devices.",
            features: ["Telemedicine", "Health Tracking", "Appointment Booking", "Fitness Monitoring", "Medication Reminders", "Doctor Consultation"],
            benefits: ["100% HIPAA compliance", "60% improvement in patient engagement", "Secure health data management"],
            image: "https://cdn.dribbble.com/userupload/15287863/file/original-bddb99e62bb7dec9dcf60b7e64b4cda4.png?resize=752x&vertical=center",
            icon: <Heart size={32} className="text-purple-600" />,
            color: "from-red-500 to-pink-600"
        }
    ];

    // Industries with enhanced mobile focus
    const industries = [
        { 
            name: "E-Commerce", 
            icon: "🛒", 
            description: "Shopping apps with AR try-ons and seamless payment integration",
            projects: "45+ Apps",
            color: "bg-blue-100 hover:bg-blue-200",
            image: "https://cdn.dribbble.com/userupload/17496099/file/original-06a327465e373fa7d35ef9a86028900c.jpg?resize=752x&vertical=center"
        },
        { 
            name: "Healthcare", 
            icon: "🏥", 
            description: "Telemedicine and health monitoring apps with HIPAA compliance",
            projects: "28+ Apps",
            color: "bg-red-100 hover:bg-red-200",
            image: "https://interexy.com/wp-content/uploads/2023/11/1.png"
        },
        { 
            name: "Finance", 
            icon: "💳", 
            description: "Banking and fintech apps with biometric security and crypto features",
            projects: "32+ Apps",
            color: "bg-green-100 hover:bg-green-200",
            image: "https://cdn.dribbble.com/userupload/17432014/file/original-59f5e92ceaf7903c197336d214ebc6d3.png?format=webp&resize=400x300&vertical=center"
        },
        { 
            name: "Food Delivery", 
            icon: "🍔", 
            description: "On-demand delivery apps with real-time tracking and multi-vendor support",
            projects: "25+ Apps",
            color: "bg-orange-100 hover:bg-orange-200",
            image: "https://cdn.dribbble.com/userupload/42825309/file/original-9d4ec93f3216e5b017cbe5e53393d17e.png?resize=752x&vertical=center"
        },
        { 
            name: "Education", 
            icon: "📚", 
            description: "E-learning platforms with interactive content and progress tracking",
            projects: "38+ Apps",
            color: "bg-purple-100 hover:bg-purple-200",
            image: "https://www.creativefabrica.com/wp-content/uploads/2022/03/10/Online-Learning-Education-App-UX-UI-Graphics-26829117-1.jpg"
        },
        { 
            name: "Travel", 
            icon: "✈️", 
            description: "Travel booking and navigation apps with offline maps and itinerary planning",
            projects: "22+ Apps",
            color: "bg-cyan-100 hover:bg-cyan-200",
            image: "https://cdn.dribbble.com/userupload/17169016/file/original-083b4e68f7271b4000c532ecdd134483.png?resize=400x300"
        }
    ];

    const testimonials = [
        {
            name: "Jennifer Martinez",
            company: "RetailMax Inc.",
            quote: "Our e-commerce app increased mobile sales by 65%. The user experience is phenomenal and our customers love it.",
            rating: 5,
            position: "CEO",
            image: "https://images.unsplash.com/photo-1494790108755-2616b332c3b7?w=100&h=100&fit=crop&crop=face",
            appDownloads: "500K+"
        },
        {
            name: "Dr. Michael Thompson",
            company: "HealthFirst Clinic",
            quote: "The telemedicine app transformed our patient care. HIPAA-compliant and incredibly user-friendly for both doctors and patients.",
            rating: 5,
            position: "Chief Medical Officer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            appDownloads: "250K+"
        },
        {
            name: "Sarah Chen",
            company: "FitLife Wellness",
            quote: "Our fitness app has 4.8-star rating on both app stores. The real-time tracking features are exactly what our users needed.",
            rating: 5,
            position: "Founder",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            appDownloads: "1M+"
        }
    ];

    // Mock phone interface for hero section
// Mock phone interface for hero section
const PhoneInterface = () => {
    const [currentScreen, setCurrentScreen] = useState(0);
    const [currentTime, setCurrentTime] = useState('9:41');
    const [batteryLevel, setBatteryLevel] = useState(85);
    const [networkStrength, setNetworkStrength] = useState(4);
    const [showNotification, setShowNotification] = useState(false);
    const [currentNotification, setCurrentNotification] = useState(0);
    const [messageCount, setMessageCount] = useState(3);
    const [onlineUsers, setOnlineUsers] = useState(1247);
  
    const notifications = [
      { 
        app: "ShopNow", 
        icon: <ShoppingCart size={14} />, 
        title: "Flash Sale Started!", 
        message: "50% off on electronics", 
        color: "bg-orange-500",
        time: "now"
      },
      { 
        app: "HealthTracker", 
        icon: <Heart size={14} />, 
        title: "Daily Goal Achieved", 
        message: "10,000 steps completed 🎉", 
        color: "bg-red-500",
        time: "2m ago"
      },
      { 
        app: "ChatApp", 
        icon: <MessageCircle size={14} />, 
        title: "New Message", 
        message: "Sarah: How's the project going?", 
        color: "bg-blue-500",
        time: "5m ago"
      },
      { 
        app: "FoodieApp", 
        icon: <Star size={14} />, 
        title: "Order Delivered", 
        message: "Your pizza has arrived!", 
        color: "bg-green-500",
        time: "8m ago"
      }
    ];
  
    const screens = [
      {
        name: "dashboard",
        content: (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 rounded-2xl text-white shadow-xl overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/5 rounded-full"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Smartphone size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">AppBuilder Pro</h3>
                    <p className="text-xs text-purple-100">Mobile Development Suite</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                    <div className="text-lg font-bold">300+</div>
                    <div className="text-xs text-purple-100">Apps Built</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                    <div className="text-lg font-bold">4.9★</div>
                    <div className="text-xs text-purple-100">Rating</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                    <div className="text-lg font-bold">24/7</div>
                    <div className="text-xs text-purple-100">Support</div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-sm text-gray-800">Active Projects</h4>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600 font-medium">Live</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-blue-50">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <ShoppingCart size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-800">E-Commerce App</div>
                    <div className="text-xs text-blue-600">85% Complete</div>
                    <div className="w-full bg-blue-200 rounded-full h-1 mt-1">
                      <div className="bg-blue-500 h-1 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Due: 2 days</div>
                    <div className="flex -space-x-1 mt-1">
                      <div className="w-4 h-4 bg-purple-400 rounded-full border border-white"></div>
                      <div className="w-4 h-4 bg-green-400 rounded-full border border-white"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-2 rounded-xl bg-green-50">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Heart size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-800">Health Tracker</div>
                    <div className="text-xs text-green-600">Ready for Testing</div>
                    <div className="w-full bg-green-200 rounded-full h-1 mt-1">
                      <div className="bg-green-500 h-1 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Testing</div>
                    <CheckCircle size={16} className="text-green-500 ml-auto" />
                  </div>
                </div>
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={16} className="text-orange-600" />
                  <span className="text-xs font-medium text-orange-800">Active Users</span>
                </div>
                <div className="text-xl font-bold text-orange-800">
                  {onlineUsers.toLocaleString()}
                </div>
                <div className="text-xs text-orange-600">+12% this week</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Download size={16} className="text-purple-600" />
                  <span className="text-xs font-medium text-purple-800">Downloads</span>
                </div>
                <div className="text-xl font-bold text-purple-800">2.5M+</div>
                <div className="text-xs text-purple-600">+25% this month</div>
              </div>
            </div>
          </div>
        )
      },
      {
        name: "messages",
        content: (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl text-white">
              <div className="flex items-center gap-3">
                <MessageCircle size={24} />
                <div>
                  <h3 className="font-bold">Messages</h3>
                  <p className="text-xs text-blue-100">{messageCount} unread messages</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              {[
                { name: "Sarah Wilson", message: "How's the app development going?", time: "2m", online: true, avatar: "SW" },
                { name: "Mike Chen", message: "The UI looks amazing! 🎉", time: "15m", online: true, avatar: "MC" },
                { name: "Jessica Brown", message: "Can we schedule a meeting?", time: "1h", online: false, avatar: "JB" }
              ].map((chat, index) => (
                <div key={index} className="bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {chat.avatar}
                      </div>
                      {chat.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm text-gray-800">{chat.name}</span>
                        <span className="text-xs text-gray-500">{chat.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                    </div>
                    {index === 0 && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    ];
  
    useEffect(() => {
      const timeInterval = setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        setCurrentTime(`${hours}:${minutes}`);
      }, 1000);
  
      const screenInterval = setInterval(() => {
        setCurrentScreen(prev => (prev + 1) % screens.length);
      }, 6000);
  
      const notificationInterval = setInterval(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 4000);
        setCurrentNotification(prev => (prev + 1) % notifications.length);
      }, 8000);
  
      const dataInterval = setInterval(() => {
        setBatteryLevel(prev => Math.max(20, prev - Math.random() * 2));
        setNetworkStrength(Math.floor(Math.random() * 4) + 1);
        setOnlineUsers(prev => prev + Math.floor(Math.random() * 10) - 5);
        setMessageCount(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
      }, 5000);
  
      return () => {
        clearInterval(timeInterval);
        clearInterval(screenInterval);
        clearInterval(notificationInterval);
        clearInterval(dataInterval);
      };
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
            
            {showNotification && (
              <div className="absolute top-12 left-2 right-2 z-30">
                <div className="bg-white/95 backdrop-blur-md text-gray-800 p-4 rounded-2xl shadow-2xl border border-white/20">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${notifications[currentNotification].color} shadow-lg`}>
                      {notifications[currentNotification].icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-sm">{notifications[currentNotification].app}</span>
                        <span className="text-xs text-gray-500">{notifications[currentNotification].time}</span>
                      </div>
                      <div className="font-medium text-sm mb-1">{notifications[currentNotification].title}</div>
                      <div className="text-sm text-gray-600">{notifications[currentNotification].message}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="pt-10 px-4 h-full bg-gradient-to-br from-gray-50 to-blue-50 relative">
              <div className="flex justify-between items-center mb-6 text-xs text-gray-800">
                <div className="flex items-center gap-1">
                  <span className="font-semibold">{currentTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-end gap-[1px]">
                    {[1,2,3,4].map((bar) => (
                      <div 
                        key={bar}
                        className={`w-1 bg-gray-800 rounded-sm transition-all duration-300 ${
                          bar <= networkStrength ? 'h-3 opacity-100' : 'h-1 opacity-30'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <div className="w-3 h-3">
                      <div className="absolute inset-0 border-2 border-gray-800 rounded-full"></div>
                      <div className="absolute inset-1 border border-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-3 border border-gray-800 rounded-sm relative">
                      <div 
                        className={`h-full rounded-sm transition-all duration-500 ${
                          batteryLevel > 50 ? 'bg-green-500' : 
                          batteryLevel > 20 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${batteryLevel}%` }}
                      ></div>
                    </div>
                    <div className="w-[2px] h-2 bg-gray-800 rounded-r-sm"></div>
                    <span className="text-xs font-medium">{Math.round(batteryLevel)}%</span>
                  </div>
                </div>
              </div>
              
              <div className="h-full pb-20 overflow-hidden">
                {screens[currentScreen].content}
              </div>
  
              <div className="absolute bottom-6 left-4 right-4">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/20">
                  <div className="flex justify-around items-center">
                    {[
                      { icon: <Monitor size={20} />, active: currentScreen === 0 },
                      { icon: <MessageCircle size={20} />, active: currentScreen === 1, badge: messageCount > 0 },
                      { icon: <Settings size={20} />, active: false },
                      { icon: <BarChart3 size={20} />, active: false }
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        <div className={`p-2 rounded-xl transition-all duration-300 ${
                          item.active ? 'bg-purple-500 text-white shadow-lg' : 'text-gray-600'
                        }`}>
                          {item.icon}
                        </div>
                        {item.badge && messageCount > 0 && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">{messageCount}</span>
                          </div>
                        )}
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

  const MobileSolutions = () => {
    const [activeDevice, setActiveDevice] = useState('phone');
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveDevice(prev => {
          if (prev === 'phone') return 'tablet';
          if (prev === 'tablet') return 'watch';
          return 'phone';
        });
      }, 3000);
      
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Mobile Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We build stunning mobile experiences that captivate users and drive business growth
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
                    Native iOS & Android Apps
                  </h3>
                  <p className="text-gray-700">
                    Platform-specific apps built with Swift and Kotlin for optimal performance, leveraging native device features and providing the best user experience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Cross-Platform Development
                  </h3>
                  <p className="text-gray-700">
                    React Native and Flutter apps that work seamlessly across multiple platforms with shared codebase, reducing development time and costs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Progressive Web Apps (PWAs)
                  </h3>
                  <p className="text-gray-700">
                    Web-based apps that provide native app-like experience with offline capabilities, push notifications, and app store distribution.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    App Store Optimization & Launch
                  </h3>
                  <p className="text-gray-700">
                    Complete app store submission process, ASO strategies, launch campaigns, and post-launch analytics to maximize app visibility and downloads.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Multi-device showcase */}
              <div className="relative flex items-center justify-center min-h-[420px]">
                {/* Tablet */}
                <div className={`absolute -left-8 w-48 h-64 bg-black rounded-2xl p-1 shadow-2xl transform transition-all duration-700 ${
                  activeDevice === 'tablet' 
                    ? '-top-4 rotate-12 opacity-100 z-20 scale-110' 
                    : 'top-8 rotate-6 opacity-70 z-10 scale-100'
                }`}>
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <Tablet size={60} className="text-purple-600 mx-auto mb-3" />
                      <div className="text-lg font-bold text-gray-800">Tablet App</div>
                      <p className="text-sm text-gray-600 mt-1">Fully responsive design</p>
                    </div>
                  </div>
                </div>
                
                {/* Phone - Main */}
                <div className={`w-56 h-96 bg-black rounded-3xl p-2 shadow-2xl transition-all duration-700 ${
                  activeDevice === 'phone' 
                    ? 'z-30 scale-100' 
                    : 'z-20 scale-90'
                }`}>
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                    <div className="pt-6 px-4 h-full bg-gradient-to-br from-purple-50 to-blue-50">
                      <div className="space-y-3">
                        <div className="bg-[#dcd4ff] p-3 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                            <span className="text-sm font-semibold">Your App</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white p-2 rounded-lg text-center">
                              <Star size={14} className="mx-auto mb-1 text-purple-600" />
                              <span className="text-xs">4.8★</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg text-center">
                              <Download size={14} className="mx-auto mb-1 text-purple-600" />
                              <span className="text-xs">10K+</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <ShoppingCart size={16} className="text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold">E-Commerce</div>
                              <div className="text-xs text-gray-600">Shopping App</div>
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <Heart size={16} className="text-green-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold">Healthcare</div>
                              <div className="text-xs text-gray-600">Medical App</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Watch */}
                <div className={`absolute -right-6 w-20 h-24 bg-black rounded-2xl p-1 shadow-2xl transform transition-all duration-700 ${
                  activeDevice === 'watch' 
                    ? 'top-8 -rotate-12 opacity-100 z-20 scale-125' 
                    : 'top-16 -rotate-6 opacity-70 z-10 scale-100'
                }`}>
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-1"></div>
                      <div className="text-xs font-bold">App</div>
                      <div className="text-[8px] mt-1">Connected</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating app icons */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-10 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 animate-float1"></div>
                  <div className="absolute top-20 right-8 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 animate-float2"></div>
                  <div className="absolute bottom-16 left-12 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 animate-float3"></div>
                  <div className="absolute bottom-8 right-16 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 animate-float4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          @keyframes float1 {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-15px) translateX(10px); }
            100% { transform: translateY(0) translateX(0); }
          }
          
          @keyframes float2 {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(10px) translateX(-15px); }
            100% { transform: translateY(0) translateX(0); }
          }
          
          @keyframes float3 {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-10px) translateX(-10px); }
            100% { transform: translateY(0) translateX(0); }
          }
          
          @keyframes float4 {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(15px) translateX(10px); }
            100% { transform: translateY(0) translateX(0); }
          }
          
          .animate-float1 {
            animation: float1 6s ease-in-out infinite;
          }
          
          .animate-float2 {
            animation: float2 7s ease-in-out infinite;
            animation-delay: 1s;
          }
          
          .animate-float3 {
            animation: float3 8s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-float4 {
            animation: float4 9s ease-in-out infinite;
            animation-delay: 3s;
          }
        `}</style>
      </div>
    );
  };

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
                            📱 MOBILE APP DEVELOPMENT
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                            Apps That Users
                            <br />
                            <span className="text-purple-600">Love & Use Daily</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            We design and develop mobile apps that not only look stunning but also deliver exceptional performance across iOS and Android platforms with engaging user experiences.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                             <Link  to ="/contact-us">   
                            <button className=" cursor-pointer uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                                Start Your App
                            </button>
                             </Link>

                           <Link  to ="/projects-details">      
                            <button className=" cursor-pointer uppercase font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                                View App Portfolio
                            </button>
                         </Link>
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-purple-600">300+</div>
                                <div className="text-sm text-gray-600">Apps Launched</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-purple-600">4.8★</div>
                                <div className="text-sm text-gray-600">Average Rating</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-purple-600">10M+</div>
                                <div className="text-sm text-gray-600">Total Downloads</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Visual Element - Phone Interface */}
                    <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
                        <PhoneInterface />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Why Choose Our Mobile App Development?
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            We combine cutting-edge mobile technologies with user-centric design to create apps that drive engagement and business growth.
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
                                <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* App Development Services */}
            <MobileSolutions />

            {/* App Types Section */}
            <div className="py-24 bg-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Mobile App Solutions
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Specialized mobile applications designed to transform user experiences and drive business growth across industries.
                        </p>
                    </div>
                    
                    {/* Interactive App Type Showcase */}
                    <div className="space-y-32">
                        {appTypes.map((app, index) => (
                            <div key={app.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                                {/* Content Side */}
                                <div className="flex-1 space-y-6">
                                    <div className={`inline-flex items-center gap-3 px-4 py-2 bg-[#dcd4ff] text-black rounded-full shadow-[2px_2px_0px_#000] transition-all duration-300 hover:bg-purple-200`}>
                                        {app.icon}
                                        <span>{app.category}</span>
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold text-black">{app.title}</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">{app.longDescription}</p>
                                    
                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {app.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-2">
                                                <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Visual Side */}
                                <div className="flex-1">
                                    <div className="relative group">
                                        <div className={`absolute inset-0 bg-gradient-to-br from-[#dcd4ff] to-[#dcd4ff] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300`}></div>
                                        <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-2 border-black">
                                            <img 
                                                src={app.image} 
                                                alt={app.title}
                                                className="w-full h-64 object-cover rounded-2xl mb-6"
                                            />
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm font-semibold text-gray-600">App Performance</div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                        <span className="text-sm text-green-600">Live</span>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                        <div className="text-lg font-bold text-purple-600">4.8★</div>
                                                        <div className="text-xs text-gray-600">Rating</div>
                                                    </div>
                                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                        <div className="text-lg font-bold text-green-600">500K+</div>
                                                        <div className="text-xs text-gray-600">Downloads</div>
                                                    </div>
                                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                        <div className="text-lg font-bold text-blue-600">85%</div>
                                                        <div className="text-xs text-gray-600">Retention</div>
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
            <div className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Industries We Serve
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Specialized mobile app solutions across diverse industries with deep domain knowledge and proven expertise.
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
                                <div className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                                    hoveredIndustry === index 
                                        ? "transform -translate-y-2 shadow-[12px_12px_0px_#000]" 
                                        : "shadow-[6px_6px_0px_#000]"
                                } bg-white border-2 border-black`}>
                                    
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
                                        <h3 className="text-2xl font-bold text-black">{industry.name}</h3>
                                        <p className="text-gray-700 leading-relaxed">{industry.description}</p>
                                        
                                        {/* Interactive Elements */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-sm text-green-600 font-semibold">Active Development</span>
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
                                                View Apps
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
                            <h3 className="text-2xl font-bold text-black mb-4">Don't See Your Industry?</h3>
                            <p className="text-gray-700 mb-6 max-w-md mx-auto">We develop mobile apps for all industries. Let's discuss how we can create the perfect app for your specific business needs.</p>
                           <Link  to ="/projects-details">      
                            <button className=" cursor-pointer bg-[#dcd4ff] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                                See All Projects
                            </button>
                         </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technology Stack */}
            <div className="py-24 bg-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Mobile Technologies We Use
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            We leverage the latest mobile development technologies to build robust, scalable, and user-friendly applications.
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
                                    <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden" style={{ backgroundColor: tech.color }}>
                                        <img
                                            src={tech.icon}
                                            alt={`${tech.name} logo`}
                                            className="w-10 h-10 object-contain"
                                            style={{ backgroundColor: tech.color, borderRadius: "50%", padding: "2px" }}
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
                            Our Mobile App Development Process
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            A proven methodology ensuring successful app delivery from concept to app store launch and beyond.
                        </p>
                    </div>
                    
                    {/* Timeline Design */}
                    <div className="relative">
                        {/* Central Timeline Line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-purple-800 to-purple-400 transform -translate-x-1/2"></div>
                        
                        <div className="space-y-24 lg:space-y-32">
                            {processSteps.map((step, index) => (
                                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}>
                                    {/* Content Card */}
                                    <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div className="group cursor-pointer">
                                            <div className={`bg-[#dcd4ff] text-black px-8 py-9 rounded-tr-[10px] rounded-bl-[10px] transition-all duration-300 shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000] border border-black hover:bg-white`}>
                                                <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 bg-white text-black border-2 border-black hover:bg-[#dcd4ff] group-hover:bg-[#dcd4ff] transition-colors duration-300`}>
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
                            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Mobile App?</h3>
                            <p className="mb-6 text-black">Let's discuss your app idea and create something amazing that your users will love!</p>
                        <Link  to ="/contact-us">   
                            <button className=" cursor-pointer uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 active:translate-x-0 active:translate-y-0 border-2 border-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                                Start App Development
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials with App Stats */}
            <div className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Success Stories
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Real results from businesses that transformed their user engagement with our mobile app solutions.
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
                                            <div className="font-semibold text-black">{testimonial.name}</div>
                                            <div className="text-sm text-purple-600 font-medium">{testimonial.position}</div>
                                            <div className="text-sm text-gray-600">{testimonial.company}</div>
                                        </div>
                                    </div>
                                    
                                    {/* App Downloads Badge */}
                                    <div className="inline-flex items-center gap-2 bg-[#dcd4ff] px-3 py-1 rounded-full mb-4">
                                        <Download size={14} className="text-purple-600" />
                                        <span className="text-sm font-semibold text-black">{testimonial.appDownloads} Downloads</span>
                                    </div>
                                    
                                    {/* Rating */}
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                                        ))}
                                    </div>
                                    
                                    {/* Quote */}
                                    <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                                    
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
                            Why Mobile Apps Drive Business Growth
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Experience the advantages of mobile-first approach with apps that engage users and boost revenue.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Smartphone size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Higher User Engagement</h3>
                            <p className="text-gray-700">Mobile apps see 3x higher engagement rates compared to mobile websites with push notifications and personalized experiences.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Zap size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Faster Performance</h3>
                            <p className="text-gray-700">Native apps load 2-5x faster than mobile websites, providing superior user experience and reducing bounce rates.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Bell size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Push Notifications</h3>
                            <p className="text-gray-700">Direct communication channel with users, achieving 90% open rates and driving repeat engagement and conversions.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Globe size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Offline Functionality</h3>
                            <p className="text-gray-700">Apps work offline, providing uninterrupted user experience and functionality even without internet connection.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <BarChart3 size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Advanced Analytics</h3>
                            <p className="text-gray-700">Detailed user behavior tracking, conversion funnels, and actionable insights to optimize app performance and revenue.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Users size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Brand Loyalty</h3>
                            <p className="text-gray-700">Apps create stronger brand connection with 60% higher customer lifetime value compared to mobile web users.</p>
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
                                Ready to Launch Your Mobile App?
                            </h2>
                            <p className="text-lg text-purple-100 mb-8">
                                Whether you need a native iOS/Android app or a cross-platform solution, our team is ready to bring your mobile app vision to life with cutting-edge technology and user-centric design.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                  <Link  to ="/contact-us">   
                                <button className=" cursor-pointer bg-white text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50 hover:shadow-lg">
                                    Start App Development
                                </button>
                                 </Link>
                               <Link  to ="/our-team">      
                                <button className=" cursor-pointer bg-transparent text-white px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10">
                                    Meet Our Team
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
                                            <Smartphone size={32} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">App Store Ready</h3>
                                            <p className="text-purple-100">iOS & Android deployment</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <BarChart3 size={32} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Analytics Integration</h3>
                                            <p className="text-purple-100">Track user engagement</p>
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

export default MobileAppDevelopmentPage;