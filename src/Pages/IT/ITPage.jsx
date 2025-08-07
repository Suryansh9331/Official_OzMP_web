import React, { useState } from "react";
import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/ItPage/Hero-Background.png";
import MobImg from "../../assets/ItPage/hero-mob.png";
import SmartItImg from "../../assets/ItPage/SmartIT.png";

import cr1 from "../../assets/ItPage/cr1.png";
import cr1hover from "../../assets/ItPage/cr1hover.png";
import cr2 from "../../assets/ItPage/cr2.png";
import cr2hover from "../../assets/ItPage/cr2hover.png";
import cr3 from "../../assets/ItPage/cr3.png";
import cr3hover from "../../assets/ItPage/cr3hover.png";

import serviceImg1 from "../../assets/ItPage/serviceImg1.png";
import serviceImg2 from "../../assets/ItPage/serviceImg2.png";
import serviceImg3 from "../../assets/ItPage/serviceImg3.png";
import serviceImg4 from "../../assets/ItPage/serviceImg4.png";
import serviceImg5 from "../../assets/ItPage/serviceImg5.png";
import serviceImg6 from "../../assets/ItPage/serviceImg6.png";
import serviceImg7 from "../../assets/ItPage/serviceImg7.png";
import serviceImg8 from "../../assets/ItPage/serviceImg8.png";


const servicesData = [
    {
        title: "/it-services/website-developement",
        description:
            "Build a Strong Online Presence. We design and develop custom websites that not only look great but also perform exceptionally well across devices and platforms.",
        lists: [
            "Custom static and dynamic websites tailored to your brand",
            "Mobile and desktop responsive designs",
            "SEO-optimized site architecture",
            "Performance-focused for fast loading and high engagement",
        ],
        buttonRedirection: "",
        image: serviceImg1,
        imageAtRight: true,
    },
    {
        title: "Software Development",
        description:
            "Tailor-Made Software for Every Business Need. We develop enterprise-grade software systems to streamline operations, automate processes, and enhance productivity.",
        lists: [
            "Custom software for various industries",
            "ERP, CRM, and SaaS platforms using MERN, MEAN, PHP, Python",
            "Secure and scalable backend infrastructure",
            "Dashboard-driven solutions ready for integration",
        ],
        buttonRedirection: "/it-services/software-developement",
        image: serviceImg2,
        imageAtRight: false,
    },
    {
        title: "Mobile App Development",
        description:
            "We design and develop mobile apps that not only look great but also perform exceptionally well across devices and platforms.",
        lists: [
            "Custom static and dynamic websites tailored to your brand",
            "Mobile and desktop responsive designs",
            "SEO-optimized site architecture",
            "Performance-focused for fast loading and high engagement",
        ],
        buttonRedirection: "/it-services/mobile-application-developement",
        image: serviceImg3,
        imageAtRight: true,
    },
    {
        title: "Graphic & UI/UX Designing",
        description:
            "Designs That Communicate and Convert. We create stunning visuals and intuitive interfaces that reflect your brand and enhance user engagement.",
        lists: [
            "Custom software for various industries",
            "ERP, CRM, and SaaS platforms using MERN, MEAN, PHP, Python",
            "Secure and scalable backend infrastructure",
            "Dashboard-driven solutions ready for integration",
        ],
        buttonRedirection: "/it-services/graphics-uiux-developement",
        image: serviceImg4,
        imageAtRight: false,
    },
    {
        title: "API Development",
        description:
            "Modern API Solutions for Modern Businesses. Build and integrate robust APIs for scalable and secure application architecture.",
        lists: [
            "Custom static and dynamic websites tailored to your brand",
            "Mobile and desktop responsive designs",
            "SEO-optimized site architecture",
            "Performance-focused for fast loading and high engagement",
        ],
        buttonRedirection: "/it-services/api-developement",
        image: serviceImg5,
        imageAtRight: true,
    },
    {
        title: "E-Commerce Development",
        description:
            "Launch and Scale Your Online Store. We create high-performing e-commerce platforms tailored to your product and market.",
        lists: [
            "Shopify, WooCommerce, Magento, or custom-coded stores",
            "Complete product catalog, cart, and checkout system",
            "Razorpay, Stripe, PayPal payment integrations",
            "SEO and analytics for performance tracking",
        ],
        buttonRedirection: "/it-services/e-commerce-solution",
        image: serviceImg6,
        imageAtRight: false,
    },
    {
        title: "Hosting & Server Management",
        description:
            "Reliable, Scalable, and Secure Hosting. Ensure your website or application stays online, fast, and secure with expert hosting and server support.",
        lists: [
            "Custom static and dynamic websites tailored to your brand",
            "Mobile and desktop responsive designs",
            "SEO-optimized site architecture",
            "Performance-focused for fast loading and high engagement",
        ],
        buttonRedirection: "/it-services/hosting-server-management",
        image: serviceImg7,
        imageAtRight: true,
    },
    {
        title: "Tech Support & AMC",
        description:
            "24x7 Technical Support and System Maintenance. Stay worry-free with dedicated IT support and proactive system maintenance.",
        lists: [
            "24/7 support with guaranteed response times",
            "Regular updates, bug fixes, and optimization",
            "Cybersecurity assessments and patching",
            "Monthly performance reports and technical audits",
        ],
        buttonRedirection: "/it-services/tech-support-sollution",
        image: serviceImg8,
        imageAtRight: false,
    },
];


const ITPage = () => {
    const [isCr1Hovered, setIsCr1Hovered] = useState(false);
    const [isCr2Hovered, setIsCr2Hovered] = useState(false);
    const [isCr3Hovered, setIsCr3Hovered] = useState(false);

    return (
        <div>
            {/* Main container Hero Section */}
            <div
                className="min-h-screen bg-cover bg-center flex justify-center flex-col lg:flex-row relative overflow-hidden"
                style={{ backgroundImage: `url(${HeroImg})` }}
            >
                {/* Content wrapper */}
                <div className="w-full lg:w-[85%] relative z-10 flex flex-col lg:flex-row min-h-screen">
                    {/* Text section */}
                    <div className="w-full lg:w-[55%] flex justify-center lg:justify-start px-4 sm:px-6 py-8 lg:py-0">
                        <div className="text-center lg:text-left lg:pt-36 max-w-2xl lg:max-w-none">
                            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                                INFORMATION TECHNOLOGY
                                <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>(IT) SERVICES DEPARTMENT
                            </h1>
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-6">
                                Empowering Businesses Through Technology
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg text-black mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                We empower businesses with tailor-made software, responsive
                                <br className="hidden lg:block" />
                                <span className="lg:hidden"> </span>websites, secure mobile
                                apps, and seamless integrations
                                <br className="hidden lg:block" />
                                <span className="lg:hidden"> </span>designed for the future.
                            </p>
                        <Link  to ="/contact-us">  
                            <button className="uppercase font-semibold hover:cursor-pointer bg-[#dcd4ff] text-black px-6 py-3 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]">
                                LET'S CONNECT
                            </button>
                        </Link>
                        </div>
                    </div>

                    {/* Mobile image section */}
                    <div className="w-full lg:w-[45%] flex justify-center items-center px-4 py-8 lg:py-0">
                        <div className="w-full max-w-sm sm:max-w-md lg:max-w-full">
                            <img
                                src={MobImg}
                                alt="Mobile Dashboard"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-full lg:w-[85%]">
                    {/* Secondary section text based */}
                    <div className="h-[25vh] flex items-center">
                        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-center lg:text-start text-black mb-4 leading-tight">
                            Innovative IT Services for Seamless Digital <br /> Transformation
                        </h2>
                    </div>

                    {/* Third Section */}
                    <div>
                        <div className="flex flex-col lg:flex-row gap-4 mb-36 px-6 lg:px-0">
                            <div className="w-full lg:w-1/2 rounded-lg ">
                                <img src={SmartItImg} alt="" />
                            </div>

                            {/* Smarter IT, Better Business */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
                                <div className="space-y-6">
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                                        Smarter IT, Better Business
                                    </h3>

                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        Don't just chase vanity metrics — let your brand grow where
                                        it truly counts. At Your Oz media, we turn clicks into
                                        conversions, followers into customers, and campaigns into
                                        measurable success.
                                    </p>

                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        Our expertise ensures seamless integration, robust security,
                                        and scalable systems to meet your evolving needs.
                                    </p>

                                    <div className="bg-[#dcd4ff] text-black px-8 py-9 rounded-tr-[10px] rounded-bl-[10px] transition-all duration-300 shadow-[8px_8px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000] border border-black hover:bg-white">
                                        <p className="text-black text-lg sm:text-xl font-normal leading-relaxed">
                                            Empowering Growth with Innovative IT Solutions
                                            Transforming Challenges
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fourth Section */}
                    <div className="flex flex-wrap gap-x-20 gap-y-8  md:gap-y-1 mb-8 md:my-16 lg:my-36 items-center justify-center">
                        {/* CR1 */}
                        <div
                            className="relative w-80 h-80 cursor-pointer"
                            onMouseEnter={() => setIsCr1Hovered(true)}
                            onMouseLeave={() => setIsCr1Hovered(false)}
                        >
                            <img
                                src={cr1}
                                alt="cr1"
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isCr1Hovered ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <img
                                src={cr1hover}
                                alt="cr1hover"
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isCr1Hovered ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        </div>

                        {/* CR2 */}
                        <div
                            className="relative w-80 h-80 cursor-pointer"
                            onMouseEnter={() => setIsCr2Hovered(true)}
                            onMouseLeave={() => setIsCr2Hovered(false)}
                        >
                            <img
                                src={cr2}
                                alt="cr2"
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isCr2Hovered ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <img
                                src={cr2hover}
                                alt="cr2hover"
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isCr2Hovered ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        </div>

                        {/* CR3 */}
                        <div
                            className="relative w-80 h-80 cursor-pointer"
                            onMouseEnter={() => setIsCr3Hovered(true)}
                            onMouseLeave={() => setIsCr3Hovered(false)}
                        >
                            <img
                                src={cr3}
                                alt="cr3"
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isCr3Hovered ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <img
                                src={cr3hover}
                                alt="cr3hover"
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${isCr3Hovered ? "opacity-100" : "opacity-0"
                                    }`}
                            />
                        </div>
                    </div>


                    {/* Fifth Section */}
                    <div className="py-16 px-4 sm:px-10 bg-white">
                        <h2 className="text-5xl font-bold text-center mb-12 md:mb-24 lg:mb-36 ">Services Overview</h2>
                        <div className="space-y-24">
                        {servicesData.map((service, index) => {
    const isImageRight = service.imageAtRight;

    return (
        <div
            key={index}
            className={`flex flex-col md:flex-row ${isImageRight ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10`}
        >
            {/* Image */}
            <div className="md:w-1/2 w-full flex justify-center px-4">
                <div className="w-full max-w-[510px] h-[280px] md:h-[420px] overflow-hidden rounded-lg">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 w-full px-4">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-12">
                    {service.lists.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                                <CircleCheck 
                                    size={20} 
                                    className="text-[#5a76ff] w-5 h-5" 
                                />
                            </div>
                            <span className="text-black flex-1">{item}</span>
                        </li>
                    ))}
                </ul>
                <Link
                    to = {service.buttonRedirection}
                    className="uppercase font-semibold hover:cursor-pointer bg-[#dcd4ff] text-black px-6 py-3 rounded-full transition-all duration-300 shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
})}
                        </div>
                    </div>


                    {/* Sixth Section */}
                    {/* <div className="py-24 px-4 sm:px-10 bg-white">
                        <div className="max-w-full mx-auto text-center flex flex-col items-center">
                            <h2 className="text-4xl font-normal mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </h2>
                            <p className="text-lg max-w-3xl text-gray-700 mb-8 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            <a
                                href="#"
                                className="inline-block uppercase font-semibold hover:cursor-pointer bg-[#dcd4ff] text-black px-6 py-3 rounded-full transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_#000]"
                            >
                                Let's Connect
                            </a>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default ITPage;
