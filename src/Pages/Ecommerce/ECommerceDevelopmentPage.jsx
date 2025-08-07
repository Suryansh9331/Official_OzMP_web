import React, { useState, useEffect } from 'react';
import { 
  CircleCheck, ShoppingCart, CreditCard, Package, Truck, Shield, Users, 
  BarChart3, Settings, TrendingUp, Star, Globe, Cpu, Tablet,
  ArrowRight, CheckCircle, PlayCircle, Heart, Bell, Camera, 
  MessageCircle, Search, MapPin, Calendar, Layers, Zap,
  Code, Database, Cloud, Lock, Brain, Workflow, DollarSign,
  Store, Smartphone, Monitor, Tag, Percent, Gift
} from "lucide-react";

import { Link } from 'react-router-dom';

const ECommerceDevelopmentPage = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [hoveredTech, setHoveredTech] = useState(null);
    const [activeStoreType, setActiveStoreType] = useState(0);
    const [hoveredIndustry, setHoveredIndustry] = useState(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const features = [
        {
            icon: <ShoppingCart size={40} />,
            title: "Custom E-Commerce",
            description: "Fully customized online stores built from scratch with unique features tailored to your business needs."
        },
        {
            icon: <CreditCard size={40} />,
            title: "Secure Payments",
            description: "Multiple payment gateway integrations including Razorpay, Stripe, PayPal with PCI DSS compliance."
        },
        {
            icon: <Smartphone size={40} />,
            title: "Mobile Commerce",
            description: "Mobile-first design with PWA capabilities for seamless shopping experience across all devices."
        },
        {
            icon: <TrendingUp size={40} />,
            title: "Analytics & SEO",
            description: "Built-in analytics dashboard and SEO optimization to drive traffic and track performance metrics."
        }
    ];

    const technologies = [
        {
            name: "Shopify",
            color: "#95BF47",
            description: "Complete e-commerce platform",
            icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg"
        },
        {
            name: "WooCommerce",
            color: "#96588A",
            description: "WordPress e-commerce",
            icon: "https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png"
        },
        {
            name: "Magento",
            color: "#EE672F",
            description: "Enterprise e-commerce",
            icon: "https://magento.com/sites/default/files/magento-logo.svg"
        },
        {
            name: "React.js",
            color: "#61DAFB",
            description: "Frontend framework",
            icon: "https://reactjs.org/logo-og.png"
        },
        {
            name: "Node.js",
            color: "#339933",
            description: "Backend runtime",
            icon: "https://nodejs.org/static/images/logo.svg"
        },
        {
            name: "Stripe",
            color: "#635BFF",
            description: "Payment processing",
            icon: "https://stripe.com/img/v3/home/twitter.png"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Business Analysis & Planning",
            description: "Understanding your product catalog, target audience, competitors, and creating a comprehensive e-commerce strategy with feature roadmap."
        },
        {
            step: "02",
            title: "UI/UX & Store Design",
            description: "Creating user-friendly store layouts, product pages, checkout flows, and mobile-responsive designs that convert visitors to customers."
        },
        {
            step: "03",
            title: "Development & Integration",
            description: "Building the store with payment gateways, inventory management, order processing, and third-party service integrations."
        },
        {
            step: "04",
            title: "Launch & Optimization",
            description: "Store deployment, performance optimization, SEO setup, analytics integration, and ongoing maintenance support."
        }
    ];

    const storeTypes = [
        {
            id: 0,
            title: "Custom E-Commerce Store",
            category: "Fully Customized Solution",
            description: "Tailor-made online stores with unique features and unlimited customization possibilities",
            longDescription: "Our custom e-commerce solutions are built from the ground up using modern technologies like React, Node.js, and cloud infrastructure. Perfect for businesses with specific requirements, complex product catalogs, or unique business models that need advanced functionality beyond standard platforms.",
            features: ["Custom Design", "Advanced Features", "API Integrations", "Scalable Architecture", "Multi-vendor Support", "Custom Analytics"],
            benefits: ["Unlimited customization", "Better performance", "Unique user experience"],
            image: "https://cdn.dribbble.com/userupload/17169016/file/original-083b4e68f7271b4000c532ecdd134483.png?resize=400x300",
            icon: <Code size={32} className="text-purple-600" />,
            color: "from-purple-500 to-indigo-600"
        },
        {
            id: 1,
            title: "Shopify Store Development",
            category: "Platform-Based Solution",
            description: "Professional Shopify stores with custom themes and advanced functionality",
            longDescription: "We create stunning Shopify stores with custom themes, app integrations, and optimized conversion funnels. Perfect for businesses looking for a robust, scalable platform with extensive third-party app ecosystem and built-in payment processing.",
            features: ["Custom Themes", "App Integration", "Payment Setup", "SEO Optimization", "Mobile Responsive", "Inventory Management"],
            benefits: ["Quick deployment", "Built-in features", "App ecosystem"],
            image: "https://cdn.dribbble.com/userupload/42825309/file/original-9d4ec93f3216e5b017cbe5e53393d17e.png?resize=752x&vertical=center",
            icon: <Store size={32} className="text-purple-600" />,
            color: "from-green-500 to-teal-600"
        },
        {
            id: 2,
            title: "Multi-Vendor Marketplace",
            category: "Marketplace Platform",
            description: "Comprehensive marketplace solutions connecting multiple vendors and customers",
            longDescription: "Build your own marketplace like Amazon or Etsy with vendor management, commission systems, order routing, and advanced search capabilities. Features include vendor dashboards, multi-payment splitting, and comprehensive admin controls.",
            features: ["Vendor Management", "Commission System", "Order Routing", "Multi-Payment", "Admin Dashboard", "Advanced Search"],
            benefits: ["Multiple revenue streams", "Scalable business model", "Vendor ecosystem"],
            image: "https://cdn.dribbble.com/userupload/17432014/file/original-59f5e92ceaf7903c197336d214ebc6d3.png?format=webp&resize=400x300&vertical=center",
            icon: <Users size={32} className="text-purple-600" />,
            color: "from-blue-500 to-cyan-600"
        }
    ];

    const industries = [
        { 
            name: "Fashion & Apparel", 
            icon: "👗", 
            description: "Clothing stores with size guides, color variants, and seasonal collections",
            projects: "85+ Stores",
            color: "bg-pink-100 hover:bg-pink-200",
            image: "https://cdn.dribbble.com/userupload/17496099/file/original-06a327465e373fa7d35ef9a86028900c.jpg?resize=752x&vertical=center"
        },
        { 
            name: "Electronics & Tech", 
            icon: "📱", 
            description: "Tech stores with detailed specs, reviews, and warranty management",
            projects: "45+ Stores",
            color: "bg-blue-100 hover:bg-blue-200",
            image: "https://www.datocms-assets.com/16499/1604482151-saas-ai-platform-ux-design.jpg?auto=format"
        },
        { 
            name: "Health & Beauty", 
            icon: "💄", 
            description: "Cosmetics and wellness stores with ingredient lists and tutorials",
            projects: "62+ Stores",
            color: "bg-purple-100 hover:bg-purple-200",
            image: "https://interexy.com/wp-content/uploads/2023/11/1.png"
        },
        { 
            name: "Food & Beverage", 
            icon: "🍕", 
            description: "Food delivery and restaurant stores with menu management",
            projects: "35+ Stores",
            color: "bg-orange-100 hover:bg-orange-200",
            image: "https://cdn.dribbble.com/userupload/42825309/file/original-9d4ec93f3216e5b017cbe5e53393d17e.png?resize=752x&vertical=center"
        },
        { 
            name: "Home & Garden", 
            icon: "🏠", 
            description: "Furniture and decor stores with room visualization tools",
            projects: "28+ Stores",
            color: "bg-green-100 hover:bg-green-200",
            image: "https://www.creativefabrica.com/wp-content/uploads/2022/03/10/Online-Learning-Education-App-UX-UI-Graphics-26829117-1.jpg"
        },
        { 
            name: "Sports & Fitness", 
            icon: "⚽", 
            description: "Sports equipment stores with size calculators and team customization",
            projects: "32+ Stores",
            color: "bg-cyan-100 hover:bg-cyan-200",
            image: "https://cdn.dribbble.com/userupload/17169016/file/original-083b4e68f7271b4000c532ecdd134483.png?resize=400x300"
        }
    ];

    const testimonials = [
        {
            name: "Alex Rodriguez",
            company: "StyleHub Fashion",
            quote: "Our online sales increased by 180% after the new e-commerce store launch. The mobile experience is fantastic!",
            rating: 5,
            position: "CEO",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            salesIncrease: "180%"
        },
        {
            name: "Emma Thompson",
            company: "TechGear Pro",
            quote: "The custom features and payment integrations work flawlessly. Our conversion rate improved by 45%.",
            rating: 5,
            position: "Operations Manager",
            image: "https://images.unsplash.com/photo-1494790108755-2616b332c3b7?w=100&h=100&fit=crop&crop=face",
            salesIncrease: "45%"
        },
        {
            name: "Michael Chen",
            company: "GreenLiving Marketplace",
            quote: "The multi-vendor functionality is perfect for our marketplace. Managing 200+ vendors has never been easier.",
            rating: 5,
            position: "Founder",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            salesIncrease: "300%"
        }
    ];

    const ECommerceInterface = () => {
        const [currentView, setCurrentView] = useState(0);
        const [cartItems, setCartItems] = useState(3);
        const [totalRevenue, setTotalRevenue] = useState(45680);
        const [activeOrders, setActiveOrders] = useState(127);
        const [showNotification, setShowNotification] = useState(false);
        const [currentProduct, setCurrentProduct] = useState(0);

        const products = [
            { name: "Wireless Headphones", price: "$99", rating: "4.8", sales: "256", image: "🎧" },
            { name: "Smart Watch", price: "$299", rating: "4.9", sales: "189", image: "⌚" },
            { name: "Laptop Stand", price: "$49", rating: "4.7", sales: "342", image: "💻" }
        ];

        const views = [
            {
                name: "dashboard",
                content: (
                    <div className="space-y-4">
                        <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 rounded-2xl text-white shadow-xl overflow-hidden relative">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <ShoppingCart size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base">E-Store Pro</h3>
                                        <p className="text-xs text-purple-100">E-Commerce Platform</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-4">
                                    <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                                        <div className="text-lg font-bold">${(totalRevenue/1000).toFixed(0)}K</div>
                                        <div className="text-xs text-purple-100">Revenue</div>
                                    </div>
                                    <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                                        <div className="text-lg font-bold">{activeOrders}</div>
                                        <div className="text-xs text-purple-100">Orders</div>
                                    </div>
                                    <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg text-center">
                                        <div className="text-lg font-bold">4.9★</div>
                                        <div className="text-xs text-purple-100">Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 rounded-2xl shadow-lg">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-semibold text-sm text-gray-800">Top Products</h4>
                                <div className="flex items-center gap-1">
                                    <TrendingUp size={12} className="text-green-500" />
                                    <span className="text-xs text-green-600 font-medium">+12%</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                {products.slice(0, 2).map((product, index) => (
                                    <div key={index} className="flex items-center gap-3 p-2 rounded-xl bg-gray-50">
                                        <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center text-lg">
                                            {product.image}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-sm font-medium text-gray-800">{product.name}</div>
                                            <div className="text-xs text-gray-600">{product.sales} sold • {product.rating}★</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-bold text-purple-600">{product.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <DollarSign size={16} className="text-green-600" />
                                    <span className="text-xs font-medium text-green-800">Today's Sales</span>
                                </div>
                                <div className="text-xl font-bold text-green-800">$2,847</div>
                                <div className="text-xs text-green-600">+23% vs yesterday</div>
                            </div>
                            <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <Users size={16} className="text-orange-600" />
                                    <span className="text-xs font-medium text-orange-800">Visitors</span>
                                </div>
                                <div className="text-xl font-bold text-orange-800">1,247</div>
                                <div className="text-xs text-orange-600">+8% this week</div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                name: "products",
                content: (
                    <div className="space-y-4">
                        <div className="bg-gradient-to-r from-green-500 to-teal-600 p-4 rounded-2xl text-white">
                            <div className="flex items-center gap-3">
                                <Package size={24} />
                                <div>
                                    <h3 className="font-bold">Product Catalog</h3>
                                    <p className="text-xs text-green-100">{products.length} products available</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="space-y-3">
                            {products.map((product, index) => (
                                <div key={index} className={`bg-white p-4 rounded-xl shadow-sm transition-all duration-300 ${currentProduct === index ? 'ring-2 ring-purple-300' : ''}`}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center text-2xl">
                                            {product.image}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-sm text-gray-800">{product.name}</div>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-sm font-bold text-purple-600">{product.price}</span>
                                                <div className="flex items-center gap-1">
                                                    <Star size={12} className="text-yellow-400 fill-current" />
                                                    <span className="text-xs text-gray-600">{product.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-gray-500">Sold: {product.sales}</div>
                                           <Link  to ="/contact-us">   
                                            <button className="mt-1 bg-purple-500 text-white px-3 py-1 rounded-full text-xs hover:bg-purple-600 transition-colors">
                                                Edit
                                            </button>
                         </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        ];

        useEffect(() => {
            const viewInterval = setInterval(() => {
                setCurrentView(prev => (prev + 1) % views.length);
            }, 5000);

            const productInterval = setInterval(() => {
                setCurrentProduct(prev => (prev + 1) % products.length);
            }, 2000);

            const notificationInterval = setInterval(() => {
                setShowNotification(true);
                setTimeout(() => setShowNotification(false), 3000);
            }, 7000);

            const dataInterval = setInterval(() => {
                setCartItems(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
                setTotalRevenue(prev => prev + Math.floor(Math.random() * 100) - 50);
                setActiveOrders(prev => Math.max(0, prev + Math.floor(Math.random() * 5) - 2));
            }, 4000);

            return () => {
                clearInterval(viewInterval);
                clearInterval(productInterval);
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
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white bg-green-500 shadow-lg">
                                            <ShoppingCart size={14} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="font-semibold text-sm">New Order</span>
                                                <span className="text-xs text-gray-500">now</span>
                                            </div>
                                            <div className="font-medium text-sm mb-1">Order #1247 Received</div>
                                            <div className="text-sm text-gray-600">Wireless Headphones - $99</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div className="pt-10 px-4 h-full bg-gradient-to-br from-gray-50 to-purple-50 relative">
                            <div className="flex justify-between items-center mb-6 text-xs text-gray-800">
                                <div className="flex items-center gap-1">
                                    <span className="font-semibold">9:41</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-end gap-[1px]">
                                        {[1,2,3,4].map((bar) => (
                                            <div 
                                                key={bar}
                                                className="w-1 bg-gray-800 rounded-sm h-3 opacity-100"
                                            />
                                        ))}
                                    </div>
                                    <div className="w-6 h-3 border border-gray-800 rounded-sm relative">
                                        <div className="h-full bg-green-500 rounded-sm w-[85%]"></div>
                                    </div>
                                    <div className="w-[2px] h-2 bg-gray-800 rounded-r-sm"></div>
                                </div>
                            </div>
                            
                            <div className="h-full pb-20 overflow-hidden">
                                {views[currentView].content}
                            </div>

                            <div className="absolute bottom-6 left-4 right-4">
                                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/20">
                                    <div className="flex justify-around items-center">
                                        {[
                                            { icon: <BarChart3 size={20} />, active: currentView === 0 },
                                            { icon: <Package size={20} />, active: currentView === 1 },
                                            { icon: <ShoppingCart size={20} />, active: false, badge: cartItems > 0 },
                                            { icon: <Settings size={20} />, active: false }
                                        ].map((item, index) => (
                                            <div key={index} className="relative">
                                                <div className={`p-2 rounded-xl transition-all duration-300 ${
                                                    item.active ? 'bg-purple-500 text-white shadow-lg' : 'text-gray-600'
                                                }`}>
                                                    {item.icon}
                                                </div>
                                                {item.badge && cartItems > 0 && (
                                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                                        <span className="text-xs text-white font-bold">{cartItems}</span>
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

    const ECommerceSolutions = () => {
        const [activeStore, setActiveStore] = useState('desktop');
    
        useEffect(() => {
            const interval = setInterval(() => {
                setActiveStore(prev => {
                    if (prev === 'desktop') return 'mobile';
                    if (prev === 'mobile') return 'tablet';
                    return 'desktop';
                });
            }, 4000);
            
            return () => clearInterval(interval);
        }, []);
    
        return (
            <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">E-Commerce Solutions</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            We build powerful online stores that drive sales and deliver exceptional shopping experiences
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
                                        Multi-Platform Store Development
                                    </h3>
                                    <p className="text-gray-700">
                                        Custom stores, Shopify, WooCommerce, and Magento solutions with responsive design and optimized performance across all devices.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                                <div className="flex-shrink-0">
                                    <CircleCheck size={24} className="text-purple-600 mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-2">
                                        Secure Payment Integration
                                    </h3>
                                    <p className="text-gray-700">
                                        Multiple payment gateways including Razorpay, Stripe, PayPal with PCI DSS compliance and fraud protection.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                                <div className="flex-shrink-0">
                                    <CircleCheck size={24} className="text-purple-600 mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-2">
                                        Inventory & Order Management
                                    </h3>
                                    <p className="text-gray-700">
                                        Advanced inventory tracking, automated order processing, shipping integration, and real-time stock management.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                                <div className="flex-shrink-0">
                                    <CircleCheck size={24} className="text-purple-600 mt-1" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-black mb-2">
                                        SEO & Performance Optimization
                                    </h3>
                                    <p className="text-gray-700">
                                        Built-in SEO optimization, fast loading speeds, Google Analytics integration, and conversion tracking for maximum visibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative">
                            {/* Multi-device showcase */}
                            <div className="relative flex items-center justify-center min-h-[420px]">
                                {/* Desktop Store */}
                                <div className={`absolute -left-8 w-64 h-40 bg-black rounded-lg p-1 shadow-2xl transform transition-all duration-700 ${
                                    activeStore === 'desktop' 
                                        ? '-top-4 rotate-3 opacity-100 z-20 scale-110' 
                                        : 'top-8 rotate-1 opacity-70 z-10 scale-100'
                                }`}>
                                    <div className="w-full h-full bg-white rounded-md overflow-hidden">
                                        <div className="bg-gray-100 p-1 flex items-center gap-1">
                                            <div className="flex gap-1">
                                                <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                                                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                                                <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-gradient-to-br from-purple-50 to-blue-50">
                                            <div className="text-center">
                                                <Monitor size={40} className="text-purple-600 mx-auto mb-2" />
                                                <div className="text-sm font-bold text-gray-800">Desktop Store</div>
                                                <p className="text-xs text-gray-600 mt-1">Full featured</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Mobile Store - Main */}
                                <div className={`w-56 h-96 bg-black rounded-3xl p-2 shadow-2xl transition-all duration-700 ${
                                    activeStore === 'mobile' 
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
                                                        <span className="text-sm font-semibold">MyStore</span>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <div className="bg-white p-2 rounded-lg text-center">
                                                            <ShoppingCart size={14} className="mx-auto mb-1 text-purple-600" />
                                                            <span className="text-xs">Shop</span>
                                                        </div>
                                                        <div className="bg-white p-2 rounded-lg text-center">
                                                            <Heart size={14} className="mx-auto mb-1 text-purple-600" />
                                                            <span className="text-xs">Wishlist</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                                            <Package size={16} className="text-blue-600" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-semibold">Electronics</div>
                                                            <div className="text-xs text-gray-600">250+ Products</div>
                                                        </div>
                                                    </div>
                                                    <div className="bg-white p-3 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                                                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                                                            <Tag size={16} className="text-pink-600" />
                                                        </div>
                                                        <div>
                                                            <div className="text-sm font-semibold">Fashion</div>
                                                            <div className="text-xs text-gray-600">180+ Products</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Tablet */}
                                <div className={`absolute -right-6 w-32 h-44 bg-black rounded-2xl p-1 shadow-2xl transform transition-all duration-700 ${
                                    activeStore === 'tablet' 
                                        ? 'top-8 -rotate-6 opacity-100 z-20 scale-125' 
                                        : 'top-16 -rotate-3 opacity-70 z-10 scale-100'
                                }`}>
                                    <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                                        <div className="text-center">
                                            <Tablet size={32} className="text-purple-600 mx-auto mb-2" />
                                            <div className="text-sm font-bold">Tablet Store</div>
                                            <div className="text-xs mt-1">Touch optimized</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Floating e-commerce icons */}
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                                    <div className="absolute top-10 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 opacity-20 animate-float1"></div>
                                    <div className="absolute top-20 right-8 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 animate-float2"></div>
                                    <div className="absolute bottom-16 left-12 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 animate-float3"></div>
                                    <div className="absolute bottom-8 right-16 w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-20 animate-float4"></div>
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
                            🛒 E-COMMERCE DEVELOPMENT
                        </div>
                        
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                            Launch and Scale
                            <br />
                            <span className="text-purple-600">Your Online Store</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            We create high-performing e-commerce platforms tailored to your product and market with secure payments, inventory management, and conversion optimization.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                          
                          <Link  to ="/contact-us">   
                            <button className="uppercase cursor-pointer font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                                Start Your Store
                            </button>
                     </Link>
                           <Link  to ="/projects-details/shopease-e-commerce-web-app">   
                            <button className="uppercase cursor-pointer font-semibold bg-white text-black px-8 py-4 rounded-full border-2 border-black transition-all duration-300 hover:bg-gray-50">
                                View Store Example
                            </button>
                        </Link>
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-purple-600">200+</div>
                                <div className="text-sm text-gray-600">Stores Built</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-purple-600">$50M+</div>
                                <div className="text-sm text-gray-600">Revenue Generated</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-purple-600">98%</div>
                                <div className="text-sm text-gray-600">Uptime Guaranteed</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Visual Element - E-Commerce Interface */}
                    <div className="w-full lg:w-[45%] flex justify-center items-center mt-12 lg:mt-0">
                        <ECommerceInterface />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Why Choose Our E-Commerce Development?
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            We combine cutting-edge e-commerce technologies with conversion-focused design to create stores that drive sales and customer loyalty.
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

            {/* E-Commerce Solutions */}
            <ECommerceSolutions />

            {/* Store Types Section */}
            <div className="py-24 bg-white">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            E-Commerce Store Solutions
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Comprehensive online store development from custom solutions to platform-specific implementations designed for maximum sales conversion.
                        </p>
                    </div>
                    
                    {/* Interactive Store Type Showcase */}
                    <div className="space-y-32">
                        {storeTypes.map((store, index) => (
                            <div key={store.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                                {/* Content Side */}
                                <div className="flex-1 space-y-6">
                                    <div className={`inline-flex items-center gap-3 px-4 py-2 bg-[#dcd4ff] text-black rounded-full shadow-[2px_2px_0px_#000] transition-all duration-300 hover:bg-purple-200`}>
                                        {store.icon}
                                        <span>{store.category}</span>
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold text-black">{store.title}</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">{store.longDescription}</p>
                                    
                                    {/* Features Grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {store.features.map((feature, featureIndex) => (
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
                                                src={store.image} 
                                                alt={store.title}
                                                className="w-full h-64 object-cover rounded-2xl mb-6"
                                            />
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm font-semibold text-gray-600">Store Performance</div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                        <span className="text-sm text-green-600">Live</span>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-3 gap-4">
                                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                        <div className="text-lg font-bold text-purple-600">99.9%</div>
                                                        <div className="text-xs text-gray-600">Uptime</div>
                                                    </div>
                                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                        <div className="text-lg font-bold text-green-600">$25K+</div>
                                                        <div className="text-xs text-gray-600">Monthly Sales</div>
                                                    </div>
                                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                                        <div className="text-lg font-bold text-blue-600">3.2%</div>
                                                        <div className="text-xs text-gray-600">Conversion</div>
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
                            Specialized e-commerce solutions across diverse industries with deep understanding of market dynamics and customer behavior.
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
                                                <span className="text-sm text-green-600 font-semibold">Active Stores</span>
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
                                                View Stores
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
                            <h3 className="text-2xl font-bold text-black mb-4">Need a Custom E-Commerce Solution?</h3>
                            <p className="text-gray-700 mb-6 max-w-md mx-auto">Every business has unique requirements. Let's discuss how we can create the perfect online store for your specific industry needs.</p>
                           <Link  to ="/contact-us">   
                            <button className="bg-[#dcd4ff] text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                                Discuss Your Store
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
                            E-Commerce Technologies We Use
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            We leverage the latest e-commerce platforms and technologies to build scalable, secure, and high-performing online stores.
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
                            Our E-Commerce Development Process
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            A proven methodology ensuring successful store launch from initial planning to ongoing optimization and growth.
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
                            <h3 className="text-2xl font-bold mb-4">Ready to Launch Your E-Commerce Store?</h3>
                            <p className="mb-6 text-black">Let's create an online store that converts visitors into customers and drives your business growth!</p>
                           <Link  to ="/contact-us">   
                            <button className="uppercase cursor-pointer font-semibold bg-[#dcd4ff] text-black px-8 py-4 rounded-full transition-all duration-300 active:translate-x-0 active:translate-y-0 border-2 border-black hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
                                Start Store Development
                            </button>
                         </Link></
                        div>
                    </div>
                </div>
            </div>

            {/* Testimonials with Sales Stats */}
            <div className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
                <div className="w-full lg:w-[85%] mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                            Success Stories
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Real results from businesses that transformed their online presence with our e-commerce solutions.
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
                                    
                                    {/* Sales Increase Badge */}
                                    <div className="inline-flex items-center gap-2 bg-[#dcd4ff] px-3 py-1 rounded-full mb-4">
                                        <TrendingUp size={14} className="text-purple-600" />
                                        <span className="text-sm font-semibold text-black">+{testimonial.salesIncrease} Sales Increase</span>
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
                            Why E-Commerce Drives Business Success
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Experience the advantages of professional e-commerce development that increases sales and expands market reach.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <ShoppingCart size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">24/7 Sales Channel</h3>
                            <p className="text-gray-700">Your online store works around the clock, generating sales even while you sleep, expanding your revenue potential significantly.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Globe size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Global Market Reach</h3>
                            <p className="text-gray-700">Reach customers worldwide without geographical limitations, expanding your market beyond local boundaries.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <BarChart3 size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Data-Driven Insights</h3>
                            <p className="text-gray-700">Advanced analytics provide detailed customer behavior insights, helping optimize sales strategies and inventory management.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <DollarSign size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Lower Operating Costs</h3>
                            <p className="text-gray-700">Reduce overhead costs compared to physical stores while reaching more customers and increasing profit margins.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Users size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Personalized Shopping</h3>
                            <p className="text-gray-700">AI-powered recommendations and personalized experiences increase customer satisfaction and average order value.</p>
                        </div>
                        
                        <div className="text-center p-6 group hover:bg-purple-50 rounded-2xl transition-colors duration-300">
                            <div className="w-16 h-16 bg-[#dcd4ff] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                <Zap size={32} className="text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-3">Scalable Growth</h3>
                            <p className="text-gray-700">Easy to scale inventory, add new products, and expand to new markets without significant infrastructure investment.</p>
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
                                Ready to Launch Your Online Store?
                            </h2>
                            <p className="text-lg text-purple-100 mb-8">
                                Whether you need a custom e-commerce solution, Shopify store, or multi-vendor marketplace, our team is ready to create a high-converting online store that drives sales and grows your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                               <Link  to ="/our-teams">   
                                <button className="cursor-pointer bg-white text-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-purple-50 hover:shadow-lg">
                                    Our Teams
                                </button>
                                </Link>
                               <Link  to ="//projects-details/shopease-e-commerce-web-app">   
                                <button className=" cursor-pointer bg-transparent text-white px-8 py-4 rounded-full border-2 border-white font-semibold transition-all duration-300 hover:bg-white/10">
                                    See Examples
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
                                            <ShoppingCart size={32} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Store Ready</h3>
                                            <p className="text-purple-100">Full e-commerce solution</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <TrendingUp size={32} className="text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">Sales Analytics</h3>
                                            <p className="text-purple-100">Track performance</p>
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

export default ECommerceDevelopmentPage;