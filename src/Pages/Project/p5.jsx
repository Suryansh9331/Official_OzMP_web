import React from "react";
import ProjectDetails from "./CommonLayout";

const FitNation = () => {
  return (
    <ProjectDetails
      title="FitNation – Fitness and Nutrition App"
      description="FitNation is a cross-platform fitness tracking app that provides personalized workout routines, meal plans, and progress insights. Includes user authentication, calendar scheduling, and goal tracking features."
      image="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&auto=format&fit=crop&q=60"
      tech={["React Native", "Firebase", "Node.js", "Expo", "Styled Components"]}
      overview="FitNation helps users maintain their fitness journey by offering smart recommendations, personalized plans, and real-time progress charts. Its cross-platform nature ensures accessibility across Android and iOS devices seamlessly."
      features={[
        "Daily workout and meal recommendations",
        "Progress tracker with weight and calorie analytics",
        "Google/Apple authentication and session persistence",
        "Calendar scheduling and workout reminders",
        "Push notifications and motivational badges"
      ]}
      techExplanation="React Native ensures cross-platform mobile compatibility, Firebase handles secure authentication and real-time database syncing, Node.js manages backend data processes, and Styled Components allows modular, theme-based styling."
      problems="Many fitness apps lack personalization or feel too generic. FitNation tailors content based on user goals, history, and fitness level, making progress more achievable."
      challenges={[
        "Syncing real-time user progress data across devices",
        "Designing seamless and responsive UI for diverse screen sizes"
      ]}
      outcome="FitNation gained over 10K+ active users within 6 months, with a 4.7-star rating across platforms and significantly increased user engagement due to personalized recommendations."
      future={[
        "AI-generated fitness plans based on body type and goal",
        "Wearable device integration (e.g., Fitbit, Apple Watch)",
        "Social challenges and community groups",
        "Offline mode for workout tracking without internet"
      ]}
    />
  );
};

export default FitNation;
