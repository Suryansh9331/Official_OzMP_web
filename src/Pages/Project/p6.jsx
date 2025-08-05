import React from "react";
import ProjectDetails from "./CommonLayout";

const RentRoam = () => {
  return (
    <ProjectDetails
      title="RentRoam – Real Estate Rental Platform"
      description="RentRoam is an advanced property rental marketplace allowing agents and users to list, filter, and book properties in real-time. It includes map integration, user messaging, and landlord dashboards."
      image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60"
      tech={["Next.js", "Laravel", "MySQL", "Leaflet.js", "Tailwind CSS"]}
      overview="RentRoam revolutionizes the property rental experience by combining real-time search, smart filters, and location-based suggestions. It supports multi-user dashboards for agents and tenants with seamless communication tools."
      features={[
        "Live property listings with geolocation search",
        "Advanced filters by rent, type, amenities, etc.",
        "Integrated chat between landlords and renters",
        "Property booking calendar with availability sync",
        "Admin dashboard for agent onboarding and analytics"
      ]}
      techExplanation="Next.js offers SSR for faster initial load and SEO optimization, Laravel powers secure backend APIs and user authentication, MySQL handles large-scale property data, Leaflet.js provides real-time map interactions, and Tailwind CSS ensures a responsive UI."
      problems="Property renters often deal with outdated listings and unresponsive interfaces. RentRoam solves this with real-time data, verified listings, and built-in messaging for faster decision-making."
      challenges={[
        "Real-time syncing of availability across multiple devices",
        "Integrating map-based filters with backend property data"
      ]}
      outcome="RentRoam now powers over 5,000 active listings and reduced booking time by 40%, leading to higher landlord occupancy rates and better renter satisfaction."
      future={[
        "Virtual property tours with WebXR/VR support",
        "Rent negotiation system with bidding feature",
        "Integration with payment gateways for deposit handling",
        "Smart contract-based lease agreements on blockchain"
      ]}
    />
  );
};

export default RentRoam;
