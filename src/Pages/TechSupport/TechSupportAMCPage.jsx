import React, { useState, useEffect } from "react";
import {
  CircleCheck,
  Shield,
  Clock,
  Settings,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  MessageCircle,
  Zap,
  Users,
  BarChart3,
  Monitor,
  Server,
  Database,
  Cloud,
  Lock,
  ArrowRight,
  Eye,
  Bell,
  Activity,
  Cpu,
  HardDrive,
  Wifi,
  Battery,
  RefreshCw,
  Wrench,
  HeadphonesIcon,
  FileText,
  TrendingUp,
  AlertCircle,
  Star,
  Globe,
  Code,
  Layers,
  Heart,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
const TechSupportAMCPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeServiceType, setActiveServiceType] = useState(0);
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: <Clock size={40} />,
      title: "24/7 Support",
      description:
        "Round-the-clock technical assistance with guaranteed response times to ensure your systems are always operational.",
    },
    {
      icon: <Shield size={40} />,
      title: "Proactive Monitoring",
      description:
        "Continuous system monitoring with automated alerts and preventive maintenance to avoid issues before they occur.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Regular Maintenance",
      description:
        "Scheduled updates, patches, and optimizations to keep your systems running at peak performance and security.",
    },
    {
      icon: <FileText size={40} />,
      title: "Detailed Reporting",
      description:
        "Comprehensive monthly reports with system performance metrics, security assessments, and improvement recommendations.",
    },
  ];

  const supportChannels = [
    {
      name: "Phone Support",
      color: "#10B981",
      description: "Direct phone assistance",
      icon: "📞",
    },
    {
      name: "Live Chat",
      color: "#3B82F6",
      description: "Real-time chat support",
      icon: "💬",
    },
    {
      name: "Email Support",
      color: "#8B5CF6",
      description: "Detailed email assistance",
      icon: "📧",
    },
    {
      name: "Remote Access",
      color: "#F59E0B",
      description: "Screen sharing support",
      icon: "🖥️",
    },
    {
      name: "On-site Visit",
      color: "#EF4444",
      description: "Physical presence when needed",
      icon: "🏢",
    },
    {
      name: "Knowledge Base",
      color: "#06B6D4",
      description: "Self-service resources",
      icon: "📚",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "System Assessment",
      description:
        "Comprehensive evaluation of your current IT infrastructure, identifying potential issues, vulnerabilities, and optimization opportunities.",
    },
    {
      step: "02",
      title: "Support Plan Setup",
      description:
        "Customized support plan creation with defined SLAs, response times, and maintenance schedules tailored to your business needs.",
    },
    {
      step: "03",
      title: "Proactive Monitoring",
      description:
        "24/7 system monitoring implementation with automated alerts, performance tracking, and preventive maintenance protocols.",
    },
    {
      step: "04",
      title: "Ongoing Support & Reports",
      description:
        "Continuous technical support with regular performance reports, security updates, and strategic IT recommendations for growth.",
    },
  ];

  // Service Types with interactive showcase
  const serviceTypes = [
    {
      id: 0,
      title: "24/7 Technical Help Desk",
      category: "Immediate Support",
      description:
        "Round-the-clock technical assistance for all your IT issues and questions",
      longDescription:
        "Our 24/7 help desk provides immediate technical support through multiple channels including phone, chat, and email. Our certified technicians are available around the clock to resolve issues, answer questions, and provide guidance on IT-related matters with guaranteed response times.",
      features: [
        "Phone Support",
        "Live Chat",
        "Email Tickets",
        "Remote Assistance",
        "Priority Queuing",
        "Escalation Management",
      ],
      benefits: [
        "< 5 min response time",
        "99.9% availability",
        "Multi-language support",
      ],
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      icon: <HeadphonesIcon size={32} className="text-purple-600" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 1,
      title: "Proactive System Monitoring",
      category: "Preventive Care",
      description:
        "Continuous monitoring and maintenance to prevent issues before they impact your business",
      longDescription:
        "Our proactive monitoring service uses advanced tools to continuously watch your systems, networks, and applications. We identify potential issues before they become problems, perform automated maintenance tasks, and provide detailed insights into system performance and health.",
      features: [
        "Real-time Monitoring",
        "Automated Alerts",
        "Performance Analytics",
        "Capacity Planning",
        "Security Scanning",
        "Health Reports",
      ],
      benefits: [
        "95% issue prevention",
        "Zero downtime goal",
        "Automated responses",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      icon: <Activity size={32} className="text-purple-600" />,
      color: "from-green-500 to-teal-600",
    },
  ];

  // Industries with support focus
  const industries = [
    {
      name: "Healthcare",
      icon: "🏥",
      description: "HIPAA-compliant IT support with 99.9% uptime guarantee",
      projects: "150+ Clients",
      color: "bg-blue-100 hover:bg-blue-200",
      image:
        "https://multipurposethemes.com/wp-content/uploads/2024/09/Medical-feature.jpg",
    },
    {
      name: "Finance",
      icon: "🏦",
      description:
        "Secure financial IT systems with regulatory compliance support",
      projects: "200+ Clients",
      color: "bg-green-100 hover:bg-green-200",
      image:
        "https://static.vecteezy.com/system/resources/previews/012/797/473/non_2x/financial-audit-landing-page-website-flat-template-vector.jpg",
    },
    {
      name: "Education",
      icon: "🎓",
      description:
        "Reliable IT support for schools and educational institutions",
      projects: "120+ Clients",
      color: "bg-purple-100 hover:bg-purple-200",
      image:
        "https://static.agentestudio.com/uploads/ckeditor/pictures/2493/content_CHS_project.png",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description:
        "Industrial IT support with minimal downtime and maximum efficiency",
      projects: "180+ Clients",
      color: "bg-orange-100 hover:bg-orange-200",
      image:
        "https://www.dbswebsite.com/uploads/Factory-Website-Examples-Hero-Image-min.png",
    },
    {
      name: "Retail",
      icon: "🛍️",
      description: "POS and e-commerce IT support with 24/7 availability",
      projects: "300+ Clients",
      color: "bg-pink-100 hover:bg-pink-200",
      image:
        "https://img1.wsimg.com/cdnassets/transform/777d2c5b-ef8d-45b1-96be-3e898a8dc94a/Mrq",
    },
    {
      name: "Legal",
      icon: "⚖️",
      description:
        "Confidential IT support with data security and compliance focus",
      projects: "90+ Clients",
      color: "bg-indigo-100 hover:bg-indigo-200",
      image:
        "https://htmlburger.com/blog/wp-content/uploads/2024/02/15-best-lawyer-websites.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "MedTech Solutions",
      quote:
        "Their proactive monitoring prevented 3 major system failures last month. Our uptime improved from 97% to 99.8%.",
      rating: 5,
      position: "IT Director",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      supportType: "24/7 Monitoring",
    },
    {
      name: "Lisa Anderson",
      company: "Global Finance Corp",
      quote:
        "Response time is incredible. When we have issues, they're resolved within minutes, not hours. Game changer for our business.",
      rating: 5,
      position: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c3b7?w=100&h=100&fit=crop&crop=face",
      supportType: "Emergency Support",
    },
    {
      name: "David Rodriguez",
      company: "EduTech Institute",
      quote:
        "Monthly reports give us clear insights into our IT performance. Their recommendations have saved us thousands in potential upgrades.",
      rating: 5,
      position: "Technology Coordinator",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      supportType: "AMC Package",
    },
  ];

  // Support Dashboard Component
  const SupportDashboard = () => {
    const [currentTime, setCurrentTime] = useState("14:35");
    const [systemStatus, setSystemStatus] = useState("online");
    const [activeTickets, setActiveTickets] = useState(7);
    const [responseTime, setResponseTime] = useState("2.3");
    const [uptime, setUptime] = useState(99.8);
    const [currentAlert, setCurrentAlert] = useState(0);

    const alerts = [
      {
        type: "info",
        message: "System backup completed successfully",
        time: "2m ago",
        icon: <CheckCircle size={14} />,
        color: "bg-green-500",
      },
      {
        type: "warning",
        message: "Server CPU usage at 75%",
        time: "5m ago",
        icon: <AlertTriangle size={14} />,
        color: "bg-yellow-500",
      },
      {
        type: "success",
        message: "Security patch installed",
        time: "10m ago",
        icon: <Shield size={14} />,
        color: "bg-blue-500",
      },
      {
        type: "info",
        message: "Monthly performance report ready",
        time: "1h ago",
        icon: <FileText size={14} />,
        color: "bg-purple-500",
      },
    ];

    useEffect(() => {
      const timeInterval = setInterval(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        setCurrentTime(`${hours}:${minutes}`);
      }, 1000);

      const alertInterval = setInterval(() => {
        setCurrentAlert((prev) => (prev + 1) % alerts.length);
      }, 4000);

      const dataInterval = setInterval(() => {
        setActiveTickets((prev) =>
          Math.max(0, prev + Math.floor(Math.random() * 3) - 1)
        );
        setResponseTime((prev) => (Math.random() * 2 + 1.5).toFixed(1));
        setUptime((prev) => Math.min(100, prev + Math.random() * 0.1 - 0.05));
      }, 5000);

      return () => {
        clearInterval(timeInterval);
        clearInterval(alertInterval);
        clearInterval(dataInterval);
      };
    }, []);

    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-[3rem] blur-xl scale-110"></div>

        <div className="relative w-80 h-[520px] bg-gradient-to-b from-gray-800 to-black rounded-[3rem] p-2 shadow-2xl">
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
                  <span className="font-semibold">{currentTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        systemStatus === "online"
                          ? "bg-green-500"
                          : "bg-red-500"
                      } animate-pulse`}
                    ></div>
                    <span className="text-xs font-medium">ONLINE</span>
                  </div>
                  <div className="text-xs font-medium">100%</div>
                </div>
              </div>

              <div className="h-full pb-20 overflow-hidden">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 rounded-2xl text-white shadow-xl overflow-hidden relative">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/5 rounded-full"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <Shield size={18} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-base">
                            Support Center
                          </h3>
                          <p className="text-xs text-purple-100">
                            24/7 Technical Support
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                          <div className="text-lg font-bold">
                            {uptime.toFixed(1)}%
                          </div>
                          <div className="text-xs text-purple-100">Uptime</div>
                        </div>
                        <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                          <div className="text-lg font-bold">
                            {responseTime}m
                          </div>
                          <div className="text-xs text-purple-100">
                            Response
                          </div>
                        </div>
                        <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                          <div className="text-lg font-bold">
                            {activeTickets}
                          </div>
                          <div className="text-xs text-purple-100">Active</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-sm text-gray-800">
                        System Status
                      </h4>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600 font-medium">
                          All Systems OK
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-2 rounded-xl bg-green-50">
                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                          <Server size={14} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">
                            Web Servers
                          </div>
                          <div className="text-xs text-green-600">
                            Running Smoothly
                          </div>
                          <div className="w-full bg-green-200 rounded-full h-1 mt-1">
                            <div className="bg-green-500 h-1 rounded-full w-[95%]"></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">CPU: 45%</div>
                          <CheckCircle
                            size={16}
                            className="text-green-500 ml-auto"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-2 rounded-xl bg-blue-50">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Database size={14} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-800">
                            Database
                          </div>
                          <div className="text-xs text-blue-600">Optimized</div>
                          <div className="w-full bg-blue-200 rounded-full h-1 mt-1">
                            <div className="bg-blue-500 h-1 rounded-full w-[87%]"></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">Load: 87%</div>
                          <CheckCircle
                            size={16}
                            className="text-blue-500 ml-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-sm text-gray-800">
                        Recent Alerts
                      </h4>
                      <Bell size={16} className="text-gray-400" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-2 rounded-lg bg-gray-50">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${alerts[currentAlert].color}`}
                        >
                          {alerts[currentAlert].icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-800">
                            {alerts[currentAlert].message}
                          </div>
                          <div className="text-xs text-gray-500">
                            {alerts[currentAlert].time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-4 right-4">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/20">
                  <div className="flex justify-around items-center">
                    {[
                      { icon: <Monitor size={20} />, active: true },
                      { icon: <Settings size={20} />, active: false },
                      { icon: <BarChart3 size={20} />, active: false },
                      {
                        icon: <HeadphonesIcon size={20} />,
                        active: false,
                        badge: activeTickets > 0,
                      },
                    ].map((item, index) => (
                      <div key={index} className="relative">
                        <div
                          className={`p-2 rounded-xl transition-all duration-300 ${
                            item.active
                              ? "bg-purple-500 text-white shadow-lg"
                              : "text-gray-600"
                          }`}
                        >
                          {item.icon}
                        </div>
                        {item.badge && activeTickets > 0 && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">
                              {activeTickets}
                            </span>
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

  const SupportSolutions = () => {
    const [activeService, setActiveService] = useState("monitoring");

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveService((prev) => {
          if (prev === "monitoring") return "helpdesk";
          if (prev === "helpdesk") return "maintenance";
          return "monitoring";
        });
      }, 4000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Support Solutions
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive technical support and maintenance services that keep
              your systems running smoothly
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
                    24/7 Multi-Channel Support
                  </h3>
                  <p className="text-gray-700">
                    Round-the-clock technical assistance through phone, chat,
                    email, and remote access with guaranteed response times and
                    escalation procedures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Proactive System Monitoring
                  </h3>
                  <p className="text-gray-700">
                    Continuous monitoring of your IT infrastructure with
                    automated alerts, performance tracking, and preventive
                    maintenance to avoid downtime.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Regular Maintenance & Updates
                  </h3>
                  <p className="text-gray-700">
                    Scheduled maintenance windows, security patches, software
                    updates, and system optimizations to ensure peak performance
                    and security.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Performance Analytics & Reporting
                  </h3>
                  <p className="text-gray-700">
                    Detailed monthly reports with system performance metrics,
                    security assessments, and strategic recommendations for
                    continuous improvement.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative flex items-center justify-center min-h-[420px]">
                {/* Floating service icons */}
                <div
                  className={`absolute -left-8 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-4 shadow-2xl transform transition-all duration-700 ${
                    activeService === "monitoring"
                      ? "-top-4 rotate-12 opacity-100 z-20 scale-110"
                      : "top-8 rotate-6 opacity-70 z-10 scale-100"
                  }`}
                >
                  <div className="text-center h-full flex flex-col justify-center">
                    <Activity
                      size={40}
                      className="text-green-600 mx-auto mb-2"
                    />
                    <div className="text-sm font-bold text-gray-800">
                      Monitoring
                    </div>
                    <p className="text-xs text-gray-600 mt-1">24/7 Watch</p>
                  </div>
                </div>

                {/* Main Support Dashboard */}
                <div
                  className={`w-56 h-80 bg-white rounded-3xl p-4 shadow-2xl border-2 border-gray-200 transition-all duration-700 ${
                    activeService === "helpdesk"
                      ? "z-30 scale-100"
                      : "z-20 scale-90"
                  }`}
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <HeadphonesIcon size={32} className="text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800">
                      Help Desk
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-[#dcd4ff] p-3 rounded-xl">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium">Online</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Response: &lt; 5 min
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-50 p-2 rounded-lg text-center">
                          <Phone
                            size={16}
                            className="mx-auto mb-1 text-purple-600"
                          />
                          <span className="text-xs">Call</span>
                        </div>
                        <div className="bg-gray-50 p-2 rounded-lg text-center">
                          <MessageCircle
                            size={16}
                            className="mx-auto mb-1 text-purple-600"
                          />
                          <span className="text-xs">Chat</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Maintenance Service */}
                <div
                  className={`absolute -right-6 w-28 h-36 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-3 shadow-2xl transform transition-all duration-700 ${
                    activeService === "maintenance"
                      ? "bottom-8 -rotate-12 opacity-100 z-20 scale-125"
                      : "bottom-16 -rotate-6 opacity-70 z-10 scale-100"
                  }`}
                >
                  <div className="text-center h-full flex flex-col justify-center">
                    <Wrench size={24} className="text-blue-600 mx-auto mb-2" />
                    <div className="text-xs font-bold text-gray-800">
                      Maintenance
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Updates</div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-10 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 animate-float1"></div>
                  <div className="absolute top-20 right-8 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-teal-500 opacity-20 animate-float2"></div>
                  <div className="absolute bottom-16 left-12 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-20 animate-float3"></div>
                  <div className="absolute bottom-8 right-16 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 animate-float4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float1 {
            0% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-15px) translateX(10px);
            }
            100% {
              transform: translateY(0) translateX(0);
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
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-10px) translateX(-10px);
            }
            100% {
              transform: translateY(0) translateX(0);
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
              🛠️ TECH SUPPORT & AMC
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              24x7 Support That
              <br />
              <span className="text-purple-600">Never Sleeps</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stay worry-free with dedicated IT support and proactive system
              maintenance. Our expert team ensures your technology works
              seamlessly, so you can focus on growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/contact-us">
                <button className="cursor-pointer uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                  Get Support Now
                </button>
              </Link>
              <Link to="/contact-us">
                <button className="cursor-pointer uppercase font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                  View Support Plans
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">
                  &lt;5min
                </div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Available Always</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Support Dashboard */}
          <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
            <SupportDashboard />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Why Choose Our Support Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We combine proactive monitoring with responsive support to ensure
              your systems are always running at peak performance.
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

      {/* Support Solutions */}
      <SupportSolutions />

      {/* Service Types Section */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Comprehensive Support Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From immediate technical assistance to proactive system
              maintenance, we provide complete IT support solutions tailored to
              your business needs.
            </p>
          </div>

          {/* Interactive Service Type Showcase */}
          <div className="space-y-32">
            {serviceTypes.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div
                    className={`inline-flex items-center gap-3 px-4 py-2 bg-[#dcd4ff] text-black rounded-full shadow-[2px_2px_0px_#000] transition-all duration-300 hover:bg-purple-200`}
                  >
                    {service.icon}
                    <span>{service.category}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
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
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover rounded-2xl mb-6"
                      />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold text-gray-600">
                            Service Status
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
                              99.9%
                            </div>
                            <div className="text-xs text-gray-600">Uptime</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">
                              &lt;5min
                            </div>
                            <div className="text-xs text-gray-600">
                              Response
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">
                              24/7
                            </div>
                            <div className="text-xs text-gray-600">
                              Available
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
      <div className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Industries We Support
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized technical support across diverse industries with deep
              understanding of sector-specific IT requirements and compliance
              needs.
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

                    {/* Client Count Badge */}
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
                          Active Support
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
                        View Support Plans
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
                Need Specialized Support?
              </h3>
              <p className="text-gray-700 mb-6 max-w-md mx-auto">
                Every industry has unique IT requirements. Let's discuss how we
                can provide tailored support solutions for your specific
                business needs.
              </p>
              <Link to="/contact-us">
                <button className="cursor-pointer bg-[#dcd4ff] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                  Discuss Support Needs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Multiple Support Channels
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get help through your preferred communication method with
              consistent quality across all channels.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {supportChannels.map((channel, index) => (
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
                  <div className="text-3xl mb-3">{channel.icon}</div>
                  <h3 className="font-semibold text-black mb-1">
                    {channel.name}
                  </h3>
                  <p className="text-xs text-gray-600">{channel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Process */}
      <div className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-20"></div>

        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Support Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A systematic approach ensuring rapid issue resolution and
              proactive system maintenance for optimal performance.
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
                Ready for Reliable IT Support?
              </h3>
              <p className="mb-6 text-black">
                Let's ensure your systems are always running smoothly with our
                comprehensive support and maintenance services!
              </p>
              <Link to="/contact-us">
                <button className="cursor-pointer uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 active:translate-x-0 active:translate-y-0 border-2 border-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                  Start Support Plan
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
              Real results from businesses that transformed their IT operations
              with our comprehensive support and maintenance services.
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

                  {/* Support Type Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#dcd4ff] px-3 py-1 rounded-full mb-4">
                    <HeadphonesIcon size={14} className="text-purple-600" />
                    <span className="text-sm font-semibold text-black">
                      {testimonial.supportType}
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
              Why Professional IT Support Matters
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the advantages of dedicated technical support that
              keeps your business running smoothly and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Clock size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Minimized Downtime
              </h3>
              <p className="text-gray-700">
                Proactive monitoring and rapid response reduce system downtime
                by up to 95%, keeping your business operations running smoothly.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Shield size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Enhanced Security
              </h3>
              <p className="text-gray-700">
                Regular security updates and monitoring protect against 99% of
                common cyber threats, safeguarding your valuable business data.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <TrendingUp size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Cost Savings
              </h3>
              <p className="text-gray-700">
                Preventive maintenance reduces unexpected repair costs by 60%
                and extends hardware lifespan, maximizing your IT investment.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Users size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Expert Team Access
              </h3>
              <p className="text-gray-700">
                Get instant access to certified IT professionals with diverse
                expertise, eliminating the need for costly in-house IT staff.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <BarChart3 size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Performance Optimization
              </h3>
              <p className="text-gray-700">
                Regular system tuning and optimization improve performance by
                40%, ensuring your technology supports business growth.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Heart size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Peace of Mind
              </h3>
              <p className="text-gray-700">
                24/7 monitoring and support give you confidence that your
                systems are protected, letting you focus on core business
                activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      {/* <div className="py-24 bg-gradient-to-br from-black to-black text-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                                Ready for Worry-Free IT Operations?
                            </h2>
                            <p className="text-lg text-purple-100 mb-8">
                                Whether you need emergency technical support, proactive system monitoring, or comprehensive AMC services, our expert team is ready to keep your technology running at peak performance 24/7.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                    <Link  to ="/contact-us">   
                            <button className="cursor-pointer bg-white text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50 hover:shadow-lg">
                                    Get Support Now
                                </button>
                          </Link>
                                 <Link  to ="/contact-us">       
                                <button className="cursor-pointer bg-transparent text-white px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10">
                                    View Support Plans
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
                                            <Clock size={32} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">24/7 Available</h3>
                                            <p className="text-purple-100">Always here when you need us</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <Shield size={32} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Proactive Protection</h3>
                                            <p className="text-purple-100">Preventing issues before they happen</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default TechSupportAMCPage;
