import React from "react";
import ProjectDetails from "./CommonLayout";
import sampleVideo from "../../assets/Video/Project3.mp4";
import HeroSection from "./CommonHero";
const LeadBoost = () => {
  return (
    <div>
      <HeroSection
        heading={<>LeadBoost – Digital Marketing Dashboard</>}
        subheading="An all-in-one marketing analytics dashboard that integrates with ad platforms and analytics APIs to help agencies track campaigns, optimize performance, and make data-driven decisions."
        description=""
        buttonText="LET’S Build For You"
        buttonLink="/contact-us"
        videoSrc={sampleVideo}
      />
      <ProjectDetails
        title="LeadBoost – Digital Marketing Dashboard"
        description="An all-in-one marketing analytics dashboard that integrates with ad platforms and analytics APIs to help agencies track campaigns, optimize performance, and make data-driven decisions."
        image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&q=80"
        tech={["Vue.js", "Laravel", "REST APIs", "Chart.js"]}
        overview="LeadBoost is a centralized dashboard for digital marketers and agencies that need real-time insights across campaigns. It consolidates metrics from multiple channels, offering visualization tools and actionable analytics to drive ROI."
        features={[
          "Real-time data sync from Google Ads, Meta Ads, and more",
          "Custom KPI setting and campaign alerts",
          "Interactive charts and funnel visualizations",
          "White-labeled client portals for reporting",
          "Exportable performance reports and CSV data",
        ]}
        techExplanation="Vue.js enables a lightweight and reactive UI, Laravel ensures secure and robust API handling, REST APIs are used to fetch live campaign data, and Chart.js visualizes performance trends efficiently."
        problems="Marketers often juggle between multiple tools, resulting in fragmented data and reporting delays. LeadBoost eliminates this by acting as a unified reporting interface."
        challenges={[
          "Synchronizing API data at scale required efficient caching and data normalization strategies.",
          "Ensuring accurate, timezone-adjusted reporting from global ad platforms with differing schemas.",
        ]}
        outcome="Adopted by digital agencies managing over $1M in ad spend, LeadBoost has improved client transparency and decision-making speed."
        future={[
          "AI-powered campaign performance forecasting",
          "Drag-and-drop custom dashboard builder",
          "Slack and Teams integration for instant alerts",
          "Email automation based on campaign metrics",
          "Multi-language support for global agencies",
        ]}
      />
    </div>
  );
};

export default LeadBoost;
