import React from "react";
import ProjectDetails from "./CommonLayout";
import sampleVideo from  "../../assets/Video/Project2.mp4"
import HeroSection from "./CommonHero";
const ShopEase = () => {
  return (
   <div>
     <HeroSection
        heading={
          <>
          ShopEase – E-commerce Web App

          </>
        }
        subheading="A fast, scalable e-commerce platform supporting multi-vendor environments, dynamic inventory handling, and intelligent product recommendations — designed for modern shopping experiences.

"
        description=""
        buttonText="LET’S Build Together"
        buttonLink="/contact-us"
        videoSrc={sampleVideo}
      />
    <ProjectDetails
     
      tech={["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"]}
      overview="ShopEase is an enterprise-grade e-commerce web application tailored to empower small businesses and online vendors. It enables streamlined product management, advanced search and filter systems, customer authentication, and automated order tracking — delivering a seamless retail experience to users and sellers."
      features={[
        "Multi-vendor product listings with stock and pricing control",
        "Smart recommendations based on purchase patterns",
        "Responsive UI for mobile-first shopping",
        "Integrated order management and tracking system",
        "Secure checkout with payment gateway integration",
      ]}
      techExplanation="Built with Next.js for SSR performance and SEO optimization, Node.js for scalable backend operations, PostgreSQL for relational data consistency, and styled using Tailwind CSS for rapid UI development."
      problems="Traditional small-business platforms struggle with inventory syncing, slow performance, and lack of personalization. ShopEase addresses these with live inventory tracking, optimized code, and machine learning-powered suggestions."
      challenges={[
        "Handling multiple vendors with concurrent inventory updates required efficient transactional queries and role-based authentication.",
        "Building a modular checkout system that supports multiple payment processors while remaining extensible."
      ]}
      outcome="Currently piloted by 50+ local businesses, ShopEase has seen increased conversions and reduced cart abandonment rates. Vendors praise its real-time dashboard and customers love the speed and personalization."
      future={[
        "Voice-assisted shopping and navigation",
        "Real-time chat support for buyer-seller communication",
        "Progressive Web App (PWA) support",
        "Subscription-based product models",
        "Loyalty point and coupon management system"
      ]}
    />
    </div>
  );
};

export default ShopEase;