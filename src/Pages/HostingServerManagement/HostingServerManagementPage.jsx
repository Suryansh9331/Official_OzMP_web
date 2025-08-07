import React, { useState, useEffect } from "react";
import {
  CircleCheck,
  Server,
  Shield,
  Zap,
  Globe,
  Database,
  Cloud,
  BarChart3,
  Settings,
  Monitor,
  Download,
  Star,
  Lock,
  Cpu,
  ArrowRight,
  CheckCircle,
  PlayCircle,
  Heart,
  Bell,
  HardDrive,
  Wifi,
  Activity,
  Gauge,
  AlertTriangle,
  TrendingUp,
  Users,
  Code,
  Layers,
  Workflow,
  LineChart,
  Timer,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";
const HostingServerManagementPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeHostingType, setActiveHostingType] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const features = [
    {
      icon: <Server size={40} />,
      title: "Managed Hosting",
      description:
        "Fully managed hosting solutions with 24/7 monitoring, automated backups, and expert technical support for optimal performance.",
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud Infrastructure",
      description:
        "Scalable cloud hosting on AWS, Google Cloud, and Azure with auto-scaling capabilities and global CDN integration.",
    },
    {
      icon: <Shield size={40} />,
      title: "Security Management",
      description:
        "Advanced security protocols including SSL certificates, DDoS protection, malware scanning, and regular security updates.",
    },
    {
      icon: <Zap size={40} />,
      title: "Performance Optimization",
      description:
        "SSD storage, caching solutions, CDN integration, and performance monitoring for lightning-fast website loading speeds.",
    },
  ];

  const technologies = [
    {
      name: "AWS",
      color: "#FF9900",
      description: "Amazon Web Services",
      icon: "https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png",
    },
    {
      name: "Google Cloud",
      color: "#4285F4",
      description: "Google Cloud Platform",
      icon: "https://www.gstatic.com/devrel-devsite/prod/vc8928e4803ba00823d2deb39c327db4919db629120082a4b2a92ebc441dc1e19/cloud/images/favicons/onecloud/super_cloud.png",
    },
    {
      name: "DigitalOcean",
      color: "#0080FF",
      description: "Cloud Computing Platform",
      icon: "https://www.digitalocean.com/_next/static/media/favicon.594d6067.ico",
    },
    {
      name: "Cloudflare",
      color: "#F38020",
      description: "CDN & Security",
      icon: "https://www.cloudflare.com/favicon.ico",
    },
    {
      name: "cPanel",
      color: "#FF6C2C",
      description: "Control Panel",
      icon: "https://cpanel.net/wp-content/uploads/2019/04/favicon.png",
    },
    {
      name: "Apache",
      color: "#D22128",
      description: "Web Server",
      icon: "https://httpd.apache.org/images/httpd_logo_wide_new.png",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Infrastructure Assessment",
      description:
        "Comprehensive analysis of your current hosting needs, traffic patterns, resource requirements, and growth projections for optimal server configuration.",
    },
    {
      step: "02",
      title: "Server Setup & Configuration",
      description:
        "Professional server deployment with optimized configurations, security hardening, SSL installation, and performance tuning for your specific requirements.",
    },
    {
      step: "03",
      title: "Migration & Testing",
      description:
        "Seamless website/application migration with zero downtime, comprehensive testing, and performance validation across all functionalities.",
    },
    {
      step: "04",
      title: "Monitoring & Maintenance",
      description:
        "24/7 server monitoring, automated backups, security updates, performance optimization, and proactive issue resolution with expert support.",
    },
  ];

  const hostingTypes = [
    {
      id: 0,
      title: "Managed WordPress Hosting",
      category: "Content Management",
      description:
        "Optimized hosting specifically designed for WordPress websites with automatic updates and security",
      longDescription:
        "Our managed WordPress hosting provides lightning-fast performance with specialized caching, automatic WordPress updates, daily backups, and advanced security features. Perfect for blogs, business websites, and e-commerce stores built on WordPress.",
      features: [
        "WordPress Optimization",
        "Automatic Updates",
        "Daily Backups",
        "SSL Certificate",
        "CDN Integration",
        "Expert Support",
      ],
      benefits: [
        "3x faster loading speeds",
        "99.9% uptime guarantee",
        "Enhanced security protection",
      ],
      image:
        "https://verpex.com/assets/uploads/images/blog/What-Is-Managed-WordPress-Hosting.webp?v=1665750849",
      icon: <Globe size={32} className="text-purple-600" />,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 1,
      title: "Cloud VPS Hosting",
      category: "Virtual Private Server",
      description:
        "Scalable virtual private servers with dedicated resources for growing businesses",
      longDescription:
        "Cloud VPS hosting offers dedicated resources with the flexibility to scale instantly. Perfect for applications requiring consistent performance, custom configurations, and root access. Includes SSD storage, automated backups, and 24/7 monitoring.",
      features: [
        "Dedicated Resources",
        "Root Access",
        "SSD Storage",
        "Auto Scaling",
        "Load Balancers",
        "Monitoring Dashboard",
      ],
      benefits: [
        "Guaranteed server resources",
        "Instant scalability",
        "Full server control",
      ],
      image:
        "https://5.imimg.com/data5/EW/BC/LD/SELLER-69586808/cloud-vps-jpg.jpg",
      icon: <Cloud size={32} className="text-purple-600" />,
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Dedicated Server Hosting",
      category: "Enterprise Solutions",
      description:
        "High-performance dedicated servers for mission-critical applications and high-traffic websites",
      longDescription:
        "Dedicated servers provide maximum performance and security with exclusive hardware resources. Ideal for large-scale applications, high-traffic websites, and enterprises requiring complete server control and customization.",
      features: [
        "Exclusive Hardware",
        "Full Server Control",
        "Custom Configurations",
        "DDoS Protection",
        "24/7 Monitoring",
        "Hardware Replacement",
      ],
      benefits: [
        "Maximum performance",
        "Complete security control",
        "Unlimited bandwidth",
      ],
      image:
        "https://www.parallels.com/blogs/ras/app/uploads/2020/10/dedicated-server-bg.jpg",
      icon: <Server size={32} className="text-purple-600" />,
      color: "from-green-500 to-blue-600",
    },
  ];

  const services = [
    {
      name: "Website Hosting",
      icon: "🌐",
      description:
        "Fast, reliable hosting for static and dynamic websites with 99.9% uptime",
      projects: "500+ Sites",
      color: "bg-blue-100 hover:bg-blue-200",
      image:
        "https://www.knownhost.com/blog/wp-content/uploads/2020/02/Web-Hosting-Info-Graphic-1024x536.png.webp",
    },
    {
      name: "E-commerce Hosting",
      icon: "🛒",
      description:
        "Secure hosting optimized for online stores with SSL and payment processing",
      projects: "150+ Stores",
      color: "bg-green-100 hover:bg-green-200",
      image:
        "https://www.ecommerceceo.com/wp-content/uploads/2019/07/ecommerce-hosting.jpg",
    },
    {
      name: "Database Management",
      icon: "💾",
      description:
        "Professional database hosting and management with automated backups",
      projects: "200+ Databases",
      color: "bg-purple-100 hover:bg-purple-200",
      image:
        "https://blog.panoply.io/hs-fs/hubfs/database%20management%20main.jpg?width=1000&name=database%20management%20main.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      company: "TechStartup Inc.",
      quote:
        "Our website went from 5-second load times to under 2 seconds. The hosting optimization increased our conversion rate by 40%.",
      rating: 5,
      position: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      uptime: "99%",
    },
    {
      name: "Lisa Rodriguez",
      company: "E-Shop Global",
      quote:
        "The server management team handled our Black Friday traffic surge perfectly. Zero downtime during our biggest sales day.",
      rating: 5,
      position: "IT Director",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b332c3b7?w=100&h=100&fit=crop&crop=face",
      uptime: "100%",
    },
    {
      name: "David Kim",
      company: "HealthCare Plus",
      quote:
        "HIPAA-compliant hosting with excellent security. Our patient data is safe and our systems are always running smoothly.",
      rating: 5,
      position: "System Administrator",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      uptime: "99.99%",
    },
  ];

  const ServerDashboard = () => {
    const [currentView, setCurrentView] = useState(0);
    const [cpuUsage, setCpuUsage] = useState(45);
    const [memoryUsage, setMemoryUsage] = useState(67);
    const [diskUsage, setDiskUsage] = useState(32);
    const [networkTraffic, setNetworkTraffic] = useState(1.2);
    const [uptime, setUptime] = useState(99.98);
    const [activeConnections, setActiveConnections] = useState(847);

    const views = [
      {
        name: "dashboard",
        content: (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-2xl text-white shadow-xl overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/5 rounded-full"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Server size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Server Management</h3>
                    <p className="text-xs text-green-100">
                      Production Environment
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                    <div className="text-lg font-bold">{uptime}%</div>
                    <div className="text-xs text-green-100">Uptime</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                    <div className="text-lg font-bold">24/7</div>
                    <div className="text-xs text-green-100">Monitoring</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                    <div className="text-lg font-bold">SSD</div>
                    <div className="text-xs text-green-100">Storage</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-sm text-gray-800">
                  Server Metrics
                </h4>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">
                    Healthy
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-xl bg-blue-50">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Cpu size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-800">
                        CPU Usage
                      </span>
                      <span className="text-xs text-blue-600 font-bold">
                        {cpuUsage}%
                      </span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${cpuUsage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl bg-purple-50">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Database size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-800">
                        Memory
                      </span>
                      <span className="text-xs text-purple-600 font-bold">
                        {memoryUsage}%
                      </span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-1.5">
                      <div
                        className="bg-purple-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${memoryUsage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2 rounded-xl bg-green-50">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <HardDrive size={14} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-800">
                        Disk Space
                      </span>
                      <span className="text-xs text-green-600 font-bold">
                        {diskUsage}%
                      </span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-1.5">
                      <div
                        className="bg-green-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${diskUsage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Activity size={16} className="text-orange-600" />
                  <span className="text-xs font-medium text-orange-800">
                    Network
                  </span>
                </div>
                <div className="text-xl font-bold text-orange-800">
                  {networkTraffic}GB/s
                </div>
                <div className="text-xs text-orange-600">Real-time traffic</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={16} className="text-purple-600" />
                  <span className="text-xs font-medium text-purple-800">
                    Connections
                  </span>
                </div>
                <div className="text-xl font-bold text-purple-800">
                  {activeConnections.toLocaleString()}
                </div>
                <div className="text-xs text-purple-600">Currently active</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        name: "monitoring",
        content: (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl text-white">
              <div className="flex items-center gap-3">
                <Activity size={24} />
                <div>
                  <h3 className="font-bold">System Monitoring</h3>
                  <p className="text-xs text-blue-100">
                    Real-time performance tracking
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              {[
                {
                  service: "Web Server",
                  status: "Running",
                  response: "45ms",
                  icon: "🌐",
                },
                {
                  service: "Database",
                  status: "Optimized",
                  response: "12ms",
                  icon: "💾",
                },
                {
                  service: "SSL Certificate",
                  status: "Valid",
                  response: "365 days",
                  icon: "🔒",
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-3 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{service.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm text-gray-800">
                          {service.service}
                        </span>
                        <span className="text-xs text-gray-500">
                          {service.response}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600">
                          {service.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-sm text-gray-800 mb-3">
                Performance Alerts
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-sm text-gray-700">
                    All systems operational
                  </span>
                  <span className="text-xs text-gray-500 ml-auto">
                    Just now
                  </span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                  <Bell size={16} className="text-blue-600" />
                  <span className="text-sm text-gray-700">
                    Backup completed successfully
                  </span>
                  <span className="text-xs text-gray-500 ml-auto">5m ago</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentView((prev) => (prev + 1) % views.length);

        // setCpuUsage(prev => Math.max(20, Math.min(80, prev + (Math.random() - 0.5) * 10))); add only 2 values after desimal
        setCpuUsage((prev) =>
          Math.max(
            20,
            Math.min(
              80,
              Math.round((prev + (Math.random() - 0.5) * 10) * 100) / 100
            )
          )
        );
        // setMemoryUsage(prev => Math.max(30, Math.min(85, prev + (Math.random() - 0.5) * 8)));
        setMemoryUsage((prev) =>
          Math.max(
            30,
            Math.min(
              85,
              Math.round((prev + (Math.random() - 0.5) * 8) * 100) / 100
            )
          )
        );

        // setDiskUsage(prev => Math.max(20, Math.min(60, prev + (Math.random() - 0.5) * 3)));
        setDiskUsage((prev) =>
          Math.max(
            20,
            Math.min(
              60,
              Math.round((prev + (Math.random() - 0.5) * 3) * 100) / 100
            )
          )
        );
        // setNetworkTraffic(prev => Math.max(0.5, Math.min(3.0, prev + (Math.random() - 0.5) * 0.5)));
        setNetworkTraffic((prev) =>
          Math.max(
            0.5,
            Math.min(
              3.0,
              Math.round((prev + (Math.random() - 0.5) * 0.5) * 10) / 10
            )
          )
        );
        // setActiveConnections(prev => Math.max(500, prev + Math.floor((Math.random() - 0.5) * 100)));

        setActiveConnections((prev) =>
          Math.max(500, prev + Math.floor((Math.random() - 0.5) * 1000))
        );
      }, 6000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-[3rem] blur-xl scale-110"></div>

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
                  <span className="font-semibold">Server Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">
                      Online
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-full pb-20 overflow-hidden">
                {views[currentView].content}
              </div>

              <div className="absolute bottom-6 left-4 right-4">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/20">
                  <div className="flex justify-around items-center">
                    {[
                      {
                        icon: <Monitor size={20} />,
                        active: currentView === 0,
                      },
                      {
                        icon: <Activity size={20} />,
                        active: currentView === 1,
                      },
                      { icon: <Settings size={20} />, active: false },
                      { icon: <BarChart3 size={20} />, active: false },
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

  const HostingSolutions = () => {
    const [activeService, setActiveService] = useState("hosting");

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveService((prev) => {
          if (prev === "hosting") return "cloud";
          if (prev === "cloud") return "security";
          return "hosting";
        });
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Complete{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Hosting Solutions
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We provide reliable, scalable, and secure hosting infrastructure
              that keeps your business online and performing at its best
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
                    Expert 24/7 Support
                  </h3>
                  <p className="text-gray-700">
                    Professional server management team available around the
                    clock for technical support, troubleshooting, and
                    maintenance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    99.9% Uptime Guarantee
                  </h3>
                  <p className="text-gray-700">
                    Enterprise-grade infrastructure with redundant systems,
                    failover protection, and 24/7 monitoring to ensure your
                    website stays online.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Lightning-Fast Performance
                  </h3>
                  <p className="text-gray-700">
                    SSD storage, advanced caching, CDN integration, and
                    optimized server configurations deliver exceptional loading
                    speeds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex-shrink-0">
                  <CircleCheck size={24} className="text-purple-600 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Advanced Security Protection
                  </h3>
                  <p className="text-gray-700">
                    Multi-layer security with SSL certificates, DDoS protection,
                    malware scanning, and regular security updates and patches.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative flex items-center justify-center min-h-[420px]">
                <div
                  className={`absolute -left-8 w-48 h-64 bg-black rounded-2xl p-1 shadow-2xl transform transition-all duration-700 ${
                    activeService === "cloud"
                      ? "-top-4 rotate-12 opacity-100 z-20 scale-110"
                      : "top-8 rotate-6 opacity-70 z-10 scale-100"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                    <div className="text-center p-4">
                      <Cloud size={60} className="text-blue-600 mx-auto mb-3" />
                      <div className="text-lg font-bold text-gray-800">
                        Cloud Hosting
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Scalable infrastructure
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`w-56 h-96 bg-black rounded-3xl p-2 shadow-2xl transition-all duration-700 ${
                    activeService === "hosting"
                      ? "z-30 scale-100"
                      : "z-20 scale-90"
                  }`}
                >
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl z-10"></div>
                    <div className="pt-6 px-4 h-full bg-gradient-to-br from-green-50 to-blue-50">
                      <div className="space-y-3">
                        <div className="bg-[#dcd4ff] p-3 rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"></div>
                            <span className="text-sm font-semibold">
                              Server Status
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white p-2 rounded-lg text-center">
                              <Activity
                                size={14}
                                className="mx-auto mb-1 text-green-600"
                              />
                              <span className="text-xs">99.98%</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg text-center">
                              <Zap
                                size={14}
                                className="mx-auto mb-1 text-blue-600"
                              />
                              <span className="text-xs">1.2s</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                              <Server size={16} className="text-green-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold">
                                Web Hosting
                              </div>
                              <div className="text-xs text-gray-600">
                                Production Server
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <Database size={16} className="text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold">
                                Database
                              </div>
                              <div className="text-xs text-gray-600">
                                MySQL Server
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute -right-6 w-20 h-24 bg-black rounded-2xl p-1 shadow-2xl transform transition-all duration-700 ${
                    activeService === "security"
                      ? "top-8 -rotate-12 opacity-100 z-20 scale-125"
                      : "top-16 -rotate-6 opacity-70 z-10 scale-100"
                  }`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Shield size={20} className="text-red-600 mx-auto mb-1" />
                      <div className="text-xs font-bold">Secure</div>
                      <div className="text-[8px] mt-1">Protected</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-10 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-20 animate-float1"></div>
                  <div className="absolute top-20 right-8 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-20 animate-float2"></div>
                  <div className="absolute bottom-16 left-12 w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-20 animate-float3"></div>
                  <div className="absolute bottom-8 right-16 w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-20 animate-float4"></div>
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
              🚀 HOSTING & SERVER MANAGEMENT
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Reliable, Scalable
              <br />
              <span className="text-purple-600">& Secure Hosting</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Ensure your website or application stays online, fast, and secure
              with expert hosting and server support that scales with your
              business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link to="/contact-us">
                <button className="uppercase cursor-pointer font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                  Get Hosting Quote
                </button>
              </Link>
              <Link to="/blogs/blog-article-1">
                <button className="uppercase cursor-pointer font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                  Get Idea
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
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-sm text-gray-600">Sites Hosted</div>
              </div>
            </div>
          </div>

          {/* Visual Element - Server Dashboard */}
          <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
            <ServerDashboard />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Why Choose Our Hosting & Server Management?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We provide enterprise-grade hosting infrastructure with
              professional management to ensure optimal performance and
              security.
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

      {/* Hosting Solutions */}
      <HostingSolutions />

      {/* Hosting Types Section */}
      <div className="py-24 bg-white">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Hosting Solutions for Every Need
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From shared hosting to dedicated servers, we provide scalable
              hosting solutions tailored to your business requirements and
              growth goals.
            </p>
          </div>

          {/* Interactive Hosting Type Showcase */}
          <div className="space-y-32">
            {hostingTypes.map((hosting, index) => (
              <div
                key={hosting.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6">
                  <div
                    className={`inline-flex items-center gap-3 px-4 py-2 bg-[#dcd4ff] text-black rounded-full shadow-[2px_2px_0px_#000] transition-all duration-300 hover:bg-purple-200`}
                  >
                    {hosting.icon}
                    <span>{hosting.category}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-black">
                    {hosting.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {hosting.longDescription}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {hosting.features.map((feature, featureIndex) => (
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
                        src={hosting.image}
                        alt={hosting.title}
                        className="w-full h-64 object-cover rounded-2xl mb-6"
                      />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-semibold text-gray-600">
                            Server Status
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
                            <div className="text-lg font-bold text-green-600">
                              99.9%
                            </div>
                            <div className="text-xs text-gray-600">Uptime</div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">
                              1.2s
                            </div>
                            <div className="text-xs text-gray-600">
                              Load Time
                            </div>
                          </div>
                          <div className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-lg font-bold text-purple-600">
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

      {/* Services We Provide */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Complete Hosting Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive hosting and server management services to keep your
              digital infrastructure running smoothly and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div
                  className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
                    hoveredService === index
                      ? "transform -translate-y-2 shadow-[12px_12px_0px_#000]"
                      : "shadow-[6px_6px_0px_#000]"
                  } bg-white border-2 border-black`}
                >
                  {/* Image Background */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* Floating Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#dcd4ff] rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-black">
                      {service.icon}
                    </div>

                    {/* Project Count Badge */}
                    <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.projects}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-black">
                      {service.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Interactive Elements */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600 font-semibold">
                          Active Service
                        </span>
                      </div>
                      <ArrowRight
                        size={20}
                        className={`text-purple-600 transition-transform duration-300 ${
                          hoveredService === index ? "translate-x-1" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  {hoveredService === index && (
                    <div className="absolute inset-0 bg-[#dcd4ff]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white px-6 py-3 rounded-full shadow-lg border-2 border-black font-semibold">
                        Learn More
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
                Need Custom Hosting Solutions?
              </h3>
              <p className="text-gray-700 mb-6 max-w-md mx-auto">
                Every business has unique hosting requirements. Let's discuss
                how we can create the perfect hosting environment for your
                specific needs.
              </p>
              <Link to="/contact-us">
                <button className="bg-[#dcd4 cursor-pointerff] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                  Get Custom Quote
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
              Hosting Technologies We Use
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage industry-leading hosting platforms and technologies to
              deliver reliable, scalable, and high-performance hosting
              solutions.
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

      {/* Server Management Process */}
      <div className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-20"></div>

        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Our Hosting & Server Management Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A systematic approach ensuring optimal hosting performance from
              initial setup to ongoing maintenance and support.
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
                Ready to Optimize Your Hosting?
              </h3>
              <p className="mb-6 text-black">
                Let's discuss your hosting needs and create a reliable, scalable
                infrastructure that grows with your business!
              </p>
              <Link to="/contact-us">
                <button className="uppercase cursor-pointer font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 active:translate-x-0 active:translate-y-0 border-2 border-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                  Get Hosting Solution
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials with Uptime Stats */}
      <div className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from businesses that transformed their online
              presence with our reliable hosting and server management
              solutions.
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

                  {/* Uptime Badge */}
                  <div className="inline-flex items-center gap-2 bg-[#dcd4ff] px-3 py-1 rounded-full mb-4">
                    <Activity size={14} className="text-green-600" />
                    <span className="text-sm font-semibold text-black">
                      {testimonial.uptime} Uptime
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
              Why Professional Hosting Matters
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the advantages of professional hosting management that
              ensures optimal performance, security, and reliability for your
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Zap size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Lightning Fast Loading
              </h3>
              <p className="text-gray-700">
                Optimized servers with SSD storage and advanced caching deliver
                3x faster loading speeds, improving user experience and SEO
                rankings.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Shield size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Advanced Security
              </h3>
              <p className="text-gray-700">
                Multi-layer security protection including SSL certificates, DDoS
                protection, and malware scanning keeps your data safe from
                threats.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Activity size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                99.9% Uptime
              </h3>
              <p className="text-gray-700">
                Redundant infrastructure and proactive monitoring ensure your
                website stays online, minimizing business disruption and revenue
                loss.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <TrendingUp size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Scalable Infrastructure
              </h3>
              <p className="text-gray-700">
                Auto-scaling capabilities handle traffic spikes seamlessly,
                ensuring consistent performance during high-demand periods.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Headphones size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                24/7 Expert Support
              </h3>
              <p className="text-gray-700">
                Round-the-clock technical support from certified server
                administrators ensures rapid issue resolution and peace of mind.
              </p>
            </div>

            <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
              <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                <Database size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                Automated Backups
              </h3>
              <p className="text-gray-700">
                Daily automated backups with instant recovery options protect
                your data and ensure business continuity in any scenario.
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
                Ready to Upgrade Your Hosting?
              </h2>
              <p className="text-lg text-purple-100 mb-8">
                Whether you need shared hosting, VPS, dedicated servers, or
                cloud infrastructure, our team is ready to provide reliable,
                scalable hosting solutions that grow with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact-us">
                  <button className="bg-white  cursor-pointer text-black  cursor-pointertext-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50 hover:shadow-lg">
                    Get Hosting Quote
                  </button>
                </Link>
                <Link to="/about-us">
                  <button className="bg-transparent  cursor-pointer  text-white px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10">
                    Know about us
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
                      <Server size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Server Management
                      </h3>
                      <p className="text-purple-100">
                        24/7 monitoring & support
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <Shield size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Security First
                      </h3>
                      <p className="text-purple-100">Advanced protection</p>
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

export default HostingServerManagementPage;
