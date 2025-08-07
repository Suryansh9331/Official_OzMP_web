import React, { useState, useEffect } from 'react';
import { 
  CircleCheck, Smartphone, Monitor, Globe, Zap, Shield, Users, 
  BarChart3, Settings, Database, Download, Star, Server, Cpu, 
  ArrowRight, CheckCircle, PlayCircle, Heart, Bell, Lock, 
  MessageCircle, ShoppingCart, MapPin, Calendar, Search, Layers,
  Code, Cloud, Brain, Workflow, Link, Activity, 
  GitBranch, Terminal, Boxes, Network, Key, FileCode
} from "lucide-react";

const APIDevelopmentPage = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [hoveredTech, setHoveredTech] = useState(null);
    const [activeAPIType, setActiveAPIType] = useState(0);
    const [hoveredIndustry, setHoveredIndustry] = useState(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const features = [
        {
            icon: <Server size={40} />,
            title: "RESTful APIs",
            description: "Scalable REST APIs with proper endpoint structure, HTTP methods, and status codes for seamless integration."
        },
        {
            icon: <Network size={40} />,
            title: "GraphQL APIs",
            description: "Efficient GraphQL APIs with flexible queries, real-time subscriptions, and optimized data fetching."
        },
        {
            icon: <Database size={40} />,
            title: "Database Integration",
            description: "Robust database connectivity with MongoDB, PostgreSQL, MySQL, and Redis for optimal performance."
        },
        {
            icon: <Shield size={40} />,
            title: "Security & Authentication",
            description: "Enterprise-grade security with JWT, OAuth, API keys, rate limiting, and comprehensive data protection."
        }
    ];

    const technologies = [
        {
            name: "Node.js",
            color: "#339933",
            description: "JavaScript runtime for APIs",
            icon: "https://nodejs.org/static/images/logo.svg"
        },
        {
            name: "Express.js",
            color: "#000000",
            description: "Fast web framework",
            icon: "https://expressjs.com/images/express-facebook-share.png"
        },
        {
            name: "FastAPI",
            color: "#009688",
            description: "Modern Python framework",
            icon: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
        },
        {
            name: "Django",
            color: "#092E20",
            description: "Python web framework",
            icon: "https://static.djangoproject.com/img/icon-touch.e4872c4da341.png"
        },
        {
            name: "GraphQL",
            color: "#E10098",
            description: "Query language for APIs",
            icon: "https://graphql.org/img/logo.svg"
        },
        {
            name: "MongoDB",
            color: "#47A248",
            description: "NoSQL database",
            icon: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "API Planning & Design",
            description: "Comprehensive API architecture planning, endpoint design, documentation structure, and integration strategy for scalable solutions."
        },
        {
            step: "02",
            title: "Development & Testing",
            description: "Agile API development with comprehensive testing, performance optimization, and security implementation across all endpoints."
        },
        {
            step: "03",
            title: "Documentation & Integration",
            description: "Complete API documentation with interactive examples, SDK creation, and seamless integration support for developers."
        },
        {
            step: "04",
            title: "Deployment & Monitoring",
            description: "Cloud deployment, performance monitoring, analytics implementation, and ongoing maintenance with 24/7 support."
        }
    ];

    const apiTypes = [
        {
            id: 0,
            title: "E-Commerce APIs",
            category: "Retail & Shopping",
            description: "Complete e-commerce API suite with payment processing, inventory management, and order tracking",
            longDescription: "Our e-commerce APIs provide comprehensive functionality including product catalogs, shopping carts, payment gateway integration, order management, inventory tracking, and customer management. Built for high-volume transactions with real-time data synchronization.",
            features: ["Product Management", "Payment Gateway", "Order Processing", "Inventory Sync", "Customer Data", "Analytics API"],
            benefits: ["99.9% uptime guarantee", "Sub-100ms response time", "PCI DSS compliant security"],
            image: "https://elastic-path.files.svdcdn.com/static/resources-blog/ecommerce_api_medium_com_graphic-min.png",
            icon: <ShoppingCart size={32} className="text-purple-600" />,
            color: "from-purple-500 to-indigo-600"
        },
        {
            id: 1,
            title: "Payment APIs",
            category: "Financial Services",
            description: "Secure payment processing APIs with multi-gateway support and fraud detection",
            longDescription: "Advanced payment APIs supporting multiple payment gateways, cryptocurrencies, recurring billing, fraud detection, and compliance with international financial regulations. Real-time transaction processing with instant notifications.",
            features: ["Multi-Gateway Support", "Fraud Detection", "Recurring Payments", "Crypto Support", "PCI Compliance", "Real-time Notifications"],
            benefits: ["Bank-level security", "Global payment support", "99.99% transaction success"],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3O_8D3vnpubVnpa-7mQaQxBxFoXjRj59xtg&s",
            icon: <Lock size={32} className="text-purple-600" />,
            color: "from-green-500 to-emerald-600"
        },
        {
            id: 2,
            title: "Social Media APIs",
            category: "Social & Communication",
            description: "Social platform APIs for user management, content sharing, and real-time messaging",
            longDescription: "Comprehensive social media APIs enabling user authentication, profile management, content posting, real-time messaging, notifications, and social analytics. Scalable infrastructure supporting millions of concurrent users.",
            features: ["User Authentication", "Content Management", "Real-time Messaging", "Social Analytics", "Media Upload", "Notification System"],
            benefits: ["Real-time scalability", "Social platform integration", "Advanced analytics"],
            image: "https://cdn.prod.website-files.com/6284f7327b63a63510a796c8/649e562c4874365688af5ab6_getphyllo%20Thumbnail%20(6).webp",
            icon: <MessageCircle size={32} className="text-purple-600" />,
            color: "from-blue-500 to-cyan-600"
        }
    ];

    const industries = [
        { 
            name: "E-Commerce", 
            icon: "🛒", 
            description: "Payment processing, inventory management, and order tracking APIs",
            projects: "180+ APIs",
            color: "bg-blue-100 hover:bg-blue-200",
            image: "https://cdn.prod.website-files.com/6624dafd5ec71461271eb9b5/6643bab288b2d9e4a3729621_647435c2107043aab0c0ef8b_headless-commerce-architecture.jpeg"
        },
        { 
            name: "FinTech", 
            icon: "💳", 
            description: "Banking APIs, payment gateways, and financial data processing",
            projects: "120+ APIs",
            color: "bg-green-100 hover:bg-green-200",
            image: "https://appinventiv.com/wp-content/uploads/2020/03/fintech_apis_operation_cycle.webp"
        },
        { 
            name: "Healthcare", 
            icon: "🏥", 
            description: "HIPAA-compliant APIs for patient data and telemedicine platforms",
            projects: "95+ APIs",
            color: "bg-red-100 hover:bg-red-200",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFXlrgTK0lOsjdFHkktrlRwHC8GgigYliObQ&s"
        },
        { 
            name: "IoT & Smart Devices", 
            icon: "📱", 
            description: "Device connectivity, data collection, and real-time monitoring APIs",
            projects: "150+ APIs",
            color: "bg-purple-100 hover:bg-purple-200",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-n1g-t2g9kS6CY8F2boFi2cNt8-p5S9YHjQ&s"
        },
        { 
            name: "SaaS Platforms", 
            icon: "☁️", 
            description: "Multi-tenant APIs, subscription management, and integration platforms",
            projects: "200+ APIs",
            color: "bg-cyan-100 hover:bg-cyan-200",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66DXpOnG2UkN9wKCKYq30r5X_yngllz39NQ&s"
        },
        { 
            name: "Media & Content", 
            icon: "🎬", 
            description: "Content delivery, streaming APIs, and digital asset management",
            projects: "75+ APIs",
            color: "bg-orange-100 hover:bg-orange-200",
            image: "https://cdn.prod.website-files.com/6284f7327b63a63510a796c8/64e5c57cdc55fdda384c3121_platforms%20supported%20by%20Phyllo.webp"
        }
    ];

    const testimonials = [
        {
            name: "David Rodriguez",
            company: "TechCorp Solutions",
            quote: "Their API reduced our integration time by 70%. The documentation is excellent and support is outstanding.",
            rating: 5,
            position: "CTO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            apiCalls: "50M+ monthly"
        },
        {
            name: "Lisa Chen",
            company: "FinanceFirst",
            quote: "Bank-level security with lightning-fast response times. Our transaction success rate improved to 99.9%.",
            rating: 5,
            position: "Head of Engineering",
            image: "https://images.unsplash.com/photo-1494790108755-2616b332c3b7?w=100&h=100&fit=crop&crop=face",
            apiCalls: "25M+ monthly"
        },
        {
            name: "Michael Park",
            company: "HealthTech Pro",
            quote: "HIPAA-compliant APIs that scale beautifully. Our patient data processing is now seamless and secure.",
            rating: 5,
            position: "Product Manager",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            apiCalls: "15M+ monthly"
        }
    ];

    const APIInterface = () => {
        const [currentEndpoint, setCurrentEndpoint] = useState(0);
        const [apiCallsCount, setApiCallsCount] = useState(1247890);
        const [responseTime, setResponseTime] = useState(45);
        const [uptime, setUptime] = useState(99.97);
        const [activeConnections, setActiveConnections] = useState(2847);
        const [currentTime, setCurrentTime] = useState('14:32:15');

        const endpoints = [
            {
                name: "User Management",
                method: "GET",
                path: "/api/v1/users",
                status: "Active",
                calls: "125K",
                responseTime: "42ms",
                icon: <Users size={16} className="text-blue-600" />
            },
            {
                name: "Payment Processing",
                method: "POST",
                path: "/api/v1/payments",
                status: "Active",
                calls: "89K",
                responseTime: "38ms",
                icon: <Lock size={16} className="text-green-600" />
            },
            {
                name: "Data Analytics",
                method: "GET",
                path: "/api/v1/analytics",
                status: "Active",
                calls: "76K",
                responseTime: "52ms",
                icon: <BarChart3 size={16} className="text-purple-600" />
            }
        ];

        useEffect(() => {
            const timeInterval = setInterval(() => {
                const now = new Date();
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                const seconds = now.getSeconds().toString().padStart(2, '0');
                setCurrentTime(`${hours}:${minutes}:${seconds}`);
            }, 1000);

            const endpointInterval = setInterval(() => {
                setCurrentEndpoint(prev => (prev + 1) % endpoints.length);
            }, 3000);

            const dataInterval = setInterval(() => {
                setApiCallsCount(prev => prev + Math.floor(Math.random() * 100) + 50);
                setResponseTime(prev => Math.max(30, prev + Math.random() * 10 - 5));
                setUptime(prev => Math.max(99.9, Math.min(100, prev + Math.random() * 0.1 - 0.05)));
                setActiveConnections(prev => prev + Math.floor(Math.random() * 100) - 50);
            }, 2000);

            return () => {
                clearInterval(timeInterval);
                clearInterval(endpointInterval);
                clearInterval(dataInterval);
            };
        }, []);

        return (
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-[2rem] blur-xl scale-110"></div>
                
                <div className="relative w-80 h-[500px] bg-gradient-to-b from-gray-800 to-black rounded-[2rem] p-3 shadow-2xl">
                    <div className="w-full h-full bg-black rounded-[1.5rem] overflow-hidden relative">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 text-white">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <Server size={20} />
                                    <span className="font-bold">API Dashboard</span>
                                </div>
                                <div className="text-sm font-mono">{currentTime}</div>
                            </div>
                            <div className="text-xs opacity-90">Real-time API monitoring & analytics</div>
                        </div>
                        
                        <div className="p-4 h-full bg-gradient-to-br from-gray-50 to-blue-50 space-y-4">
                            {/* API Stats */}
                            <div className="bg-[#dcd4ff] p-4 rounded-2xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                                        <Activity size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm">API Performance</div>
                                        <div className="text-xs text-gray-600">Live Metrics</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded-lg text-center">
                                        <div className="text-lg font-bold text-purple-600">{(apiCallsCount / 1000000).toFixed(1)}M</div>
                                        <div className="text-xs text-gray-600">Total Calls</div>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg text-center">
                                        <div className="text-lg font-bold text-green-600">{Math.round(responseTime)}ms</div>
                                        <div className="text-xs text-gray-600">Avg Response</div>
                                    </div>
                                </div>
                            </div>

                            {/* Current Endpoint */}
                            <div className="bg-white p-4 rounded-2xl shadow-lg">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-semibold text-sm text-gray-800">Active Endpoints</h4>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-xs text-green-600 font-medium">Live</span>
                                    </div>
                                </div>
                                
                                {endpoints.map((endpoint, index) => (
                                    <div key={index} className={`flex items-center gap-3 p-3 rounded-xl mb-2 transition-all duration-300 ${
                                        currentEndpoint === index ? 'bg-purple-50 border border-purple-200' : 'bg-gray-50'
                                    }`}>
                                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
                                            {endpoint.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-medium text-gray-800">{endpoint.name}</div>
                                            <div className="text-xs text-gray-600">{endpoint.path}</div>
                                            <div className="flex gap-2 mt-1">
                                                <span className={`text-xs px-2 py-1 rounded ${
                                                    endpoint.method === 'GET' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                                                }`}>
                                                    {endpoint.method}
                                                </span>
                                                <span className="text-xs text-gray-500">{endpoint.responseTime}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-gray-500">{endpoint.calls}</div>
                                            <div className="text-xs text-green-600">Active</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* System Status */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Shield size={16} className="text-green-600" />
                                        <span className="text-xs font-medium text-green-800">Uptime</span>
                                    </div>
                                    <div className="text-xl font-bold text-green-800">
                                        {uptime.toFixed(2)}%
                                    </div>
                                    <div className="text-xs text-green-600">Last 30 days</div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Network size={16} className="text-blue-600" />
                                        <span className="text-xs font-medium text-blue-800">Connections</span>
                                    </div>
                                    <div className="text-xl font-bold text-blue-800">
                                        {activeConnections.toLocaleString()}
                                    </div>
                                    <div className="text-xs text-blue-600">Active now</div>
                                </div>
                            </div>

                            {/* Security Status */}
                            <div className="bg-white p-3 rounded-xl border-2 border-green-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <Lock size={12} className="text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-800">Security Status</span>
                                    </div>
                                    <div className="text-sm font-bold text-green-600">Secure</div>
                                </div>
                                <div className="text-xs text-gray-600 mt-1">All endpoints encrypted & authenticated</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const APISolutions = () => {
        const [activeAPI, setActiveAPI] = useState('rest');

        useEffect(() => {
            const interval = setInterval(() => {
                setActiveAPI(prev => {
                    if (prev === 'rest') return 'graphql';
                    if (prev === 'graphql') return 'websocket';
                    return 'rest';
                });
            }, 4000);
            
            return () => clearInterval(interval);
        }, []);

        return (
            <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">API Solutions</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We build scalable APIs that power modern applications and drive business growth
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
                                        RESTful API Development
                                    </h3>
                                    <p className="text-gray-700">
                                        Industry-standard REST APIs with proper HTTP methods, status codes, and resource-based URLs for seamless third-party integrations.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                                <div className="flex-shrink-0">
                                    <CircleCheck size={24} className="text-purple-600 mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-2">
                                        GraphQL Implementation
                                    </h3>
                                    <p className="text-gray-700">
                                        Flexible GraphQL APIs with real-time subscriptions, efficient data fetching, and powerful query capabilities for modern applications.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                                <div className="flex-shrink-0">
                                    <CircleCheck size={24} className="text-purple-600 mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-2">
                                        Microservices Architecture
                                    </h3>
                                    <p className="text-gray-700">
                                        Scalable microservices with Docker containerization, Kubernetes orchestration, and service mesh for enterprise-grade applications.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                                <div className="flex-shrink-0">
                                    <CircleCheck size={24} className="text-purple-600 mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-2">
                                        API Security & Documentation
                                    </h3>
                                    <p className="text-gray-700">
                                        Comprehensive security with OAuth, JWT, rate limiting, and interactive API documentation for seamless developer experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="relative flex items-center justify-center min-h-[420px]">
                                {/* Code Editor Mockup */}
                                <div className={`w-80 h-[450px] bg-gray-900 rounded-2xl shadow-2xl transition-all duration-700 ${
                                    activeAPI === 'rest' ? 'z-30 scale-100' : 'z-20 scale-90 opacity-90'
                                }`}>
                                    <div className="flex items-center gap-2 p-4 border-b border-gray-700">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div className="text-gray-400 text-sm ml-4">api-server.js</div>
                                    </div>
                                    <div className="p-4 text-sm font-mono">
                                        <div className="text-purple-400">// REST API Endpoint</div>
                                        <div className="text-blue-400 mt-2">app.get<span className="text-white">(</span><span className="text-green-400">'/api/v1/users'</span><span className="text-white">{`, async (req, res) => {`}</span></div>
                                        <div className="text-white ml-4 mt-1">const users = await User.find();</div>
                                        <div className="text-white ml-4">{`res.json({`}</div>
                                        <div className="text-green-400 ml-8">success: true,</div>
                                        <div className="text-green-400 ml-8">data: users,</div>
                                        <div className="text-green-400 ml-8">total: users.length</div>
                                        <div className="text-white ml-4">{`});`}</div>
                                        <div className="text-white">{`});`}</div>
                                        
                                        <div className="mt-4 p-3 bg-green-900/30 rounded border-l-4 border-green-400">
                                            <div className="text-green-400 text-xs">✓ Response: 200 OK</div>
                                            <div className="text-green-300 text-xs">⚡ 42ms response time</div>
                                        </div>
                                        
                                        <div className="mt-4">
                                            <div className="text-purple-400">// API Security</div>
                                            <div className="text-blue-400 mt-1">app.use<span className="text-white">(</span><span className="text-green-400">authenticate</span><span className="text-white">);</span></div>
                                            <div className="text-blue-400">app.use<span className="text-white">(</span><span className="text-green-400">rateLimit</span><span className="text-white">);</span></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Floating API Elements */}
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                    <div className="absolute top-10 left-4 w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 animate-float1 flex items-center justify-center">
                                        <Code size={16} className="text-white" />
                                    </div>
                                    <div className="absolute top-20 right-8 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-teal-500 opacity-20 animate-float2 flex items-center justify-center">
                                        <Database size={12} className="text-white" />
                                    </div>
                                    <div className="absolute bottom-16 left-12 w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 animate-float3 flex items-center justify-center">
                                        <Server size={20} className="text-white" />
                                    </div>
                                    <div className="absolute bottom-8 right-16 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-float4 flex items-center justify-center">
                                        <Shield size={12} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen overflow-hidden">
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
                            🔌 API DEVELOPMENT
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                            Modern API Solutions
                            <br />
                            <span className="text-purple-600">for Modern Businesses</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Build and integrate robust APIs for scalable and secure application architecture. We create high-performance APIs that power seamless integrations and drive business growth.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <button className="uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                                Start API Project
                            </button>
                            <button className="uppercase font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                                View API Documentation
                            </button>
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-purple-600">500+</div>
                                <div className="text-sm text-gray-600">APIs Deployed</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-purple-600">99.9%</div>
                                <div className="text-sm text-gray-600">Uptime SLA</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-purple-600">50M+</div>
                                <div className="text-sm text-gray-600">API Calls/Month</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Visual Element - API Interface */}
                    <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
                        <APIInterface />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Why Choose Our API Development Services?
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            We build enterprise-grade APIs with cutting-edge technologies, robust security, and comprehensive documentation for seamless integration.
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

            {/* API Development Services */}
            <APISolutions />

            {/* API Types Section */}
            <div className="py-24 bg-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Specialized API Solutions
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Custom API development tailored to your industry needs with enterprise-grade security and scalable architecture.
                        </p>
                    </div>
                    
                    {/* Interactive API Type Showcase */}
                    <div className="space-y-32">
                        {apiTypes.map((api, index) => (
                            <div key={api.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                                {/* Content Side */}
                                <div className="flex-1 space-y-6">
                                    <div className={`inline-flex items-center gap-3 px-4 py-2 bg-[#dcd4ff] text-black rounded-full shadow-[2px_2px_0px_#000] transition-all duration-300 hover:bg-purple-200`}>
                                        {api.icon}
                                        <span>{api.category}</span>
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold text-black">{api.title}</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">{api.longDescription}</p>
                                    
                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {api.features.map((feature, featureIndex) => (
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
                                                src={api.image} 
                                                alt={api.title}
                                                className="w-full h-64 object-cover rounded-2xl mb-6"
                                            />
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm font-semibold text-gray-600">API Status</div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                        <span className="text-sm text-green-600">Active</span>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                        <div className="text-lg font-bold text-purple-600">99.9%</div>
                                                        <div className="text-xs text-gray-600">Uptime</div>
                                                    </div>
                                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                        <div className="text-lg font-bold text-green-600">45ms</div>
                                                        <div className="text-xs text-gray-600">Response</div>
                                                    </div>
                                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                        <div className="text-lg font-bold text-blue-600">50M+</div>
                                                        <div className="text-xs text-gray-600">Calls/Month</div>
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
                            Industries We Power
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Robust API solutions across diverse industries with deep domain expertise and proven scalability.
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
                                                <span className="text-sm text-green-600 font-semibold">APIs Running</span>
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
                                                View APIs
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
                            <h3 className="text-2xl font-bold text-black mb-4">Need Custom API Solutions?</h3>
                            <p className="text-gray-700 mb-6 max-w-md mx-auto">Every business has unique integration needs. Let's discuss how we can build APIs that perfectly fit your requirements.</p>
                            <button className="bg-[#dcd4ff] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                                Discuss API Requirements
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technology Stack */}
            <div className="py-24 bg-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            API Technologies We Master
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            We leverage cutting-edge technologies and frameworks to build robust, scalable, and secure API solutions.
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
                            Our API Development Process
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            A systematic approach ensuring robust API delivery from planning to deployment and ongoing maintenance.
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
                            <h3 className="text-2xl font-bold mb-4">Ready to Build Your API?</h3>
                            <p className="mb-6 text-black">Let's discuss your integration needs and create powerful APIs that drive your business forward!</p>
                            <button className="uppercase font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 active:translate-x-0 active:translate-y-0 border-2 border-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                                Start API Development
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials with API Stats */}
            <div className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Client Success Stories
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Real results from businesses that transformed their operations with our powerful API solutions.
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
                                    
                                    {/* API Calls Badge */}
                                    <div className="inline-flex items-center gap-2 bg-[#dcd4ff] px-3 py-1 rounded-full mb-4">
                                        <Activity size={14} className="text-purple-600" />
                                        <span className="text-sm font-semibold text-black">{testimonial.apiCalls} API calls</span>
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
                            Why APIs Drive Business Success
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Experience the advantages of modern API architecture that enables scalability, efficiency, and seamless integrations.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Server size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Scalable Architecture</h3>
                            <p className="text-gray-700">APIs enable microservices architecture that scales independently, handling millions of requests with optimal performance and resource utilization.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Zap size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Faster Development</h3>
                            <p className="text-gray-700">Reusable API components reduce development time by 60%, enabling rapid prototyping and faster time-to-market for new features.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Network size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Seamless Integration</h3>
                            <p className="text-gray-700">Connect with third-party services, mobile apps, and web platforms effortlessly with standardized API protocols and comprehensive documentation.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Shield size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Enterprise Security</h3>
                            <p className="text-gray-700">Bank-level security with OAuth 2.0, JWT tokens, rate limiting, and encryption ensuring data protection and compliance with industry standards.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <BarChart3 size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Real-time Analytics</h3>
                            <p className="text-gray-700">Comprehensive API analytics with usage metrics, performance monitoring, and business intelligence to optimize operations and user experience.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Globe size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Global Accessibility</h3>
                            <p className="text-gray-700">Cloud-hosted APIs with CDN distribution ensure low-latency access worldwide, supporting global user bases with 99.9% uptime guarantee.</p>
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
                                Ready to Power Your Business with APIs?
                            </h2>
                            <p className="text-lg text-purple-100 mb-8">
                                Whether you need RESTful APIs, GraphQL endpoints, or microservices architecture, our team is ready to build scalable API solutions that drive your business growth and enable seamless integrations.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50 hover:shadow-lg">
                                    Start API Development
                                </button>
                                <button className="bg-transparent text-white px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10">
                                    View API Documentation
                                </button>
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
                                            <h3 className="text-xl font-bold text-white">Enterprise APIs</h3>
                                            <p className="text-purple-100">Scalable & secure solutions</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <BarChart3 size={32} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Real-time Analytics</h3>
                                            <p className="text-purple-100">Monitor performance & usage</p>
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

export default APIDevelopmentPage;