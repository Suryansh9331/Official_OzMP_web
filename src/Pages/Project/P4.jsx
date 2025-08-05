import React from "react";
import ProjectDetails from "./CommonLayout";

const EduTrack = () => {
  return (
    <ProjectDetails
      title="EduTrack – Learning Management System (LMS)"
      description="EduTrack is a feature-rich LMS designed for universities and online education providers. It offers course management, real-time quizzes, student analytics, and progress tracking. Built to scale with performance in mind."
      image="https://images.unsplash.com/photo-1625217527288-93919c99650a?w=600&auto=format&fit=crop&q=60"
      tech={["React", "Express.js", "MySQL", "Tailwind CSS", "Redux Toolkit"]}
      overview="EduTrack simplifies e-learning by offering an intuitive interface for both students and educators. It supports modular content delivery, automated assessments, and insightful progress analytics — all optimized for scalability and cross-platform support."
      features={[
        "Dynamic course and module management system",
        "Timed quizzes with instant grading and feedback",
        "Student dashboards with performance graphs",
        "Admin panel for role-based access and reporting",
        "Offline video sync and mobile responsiveness"
      ]}
      techExplanation="React ensures a dynamic and interactive frontend, Express.js powers backend APIs for course and quiz management, MySQL handles structured relational data, Tailwind CSS keeps the design modern, and Redux Toolkit manages global application state efficiently."
      problems="Traditional LMS platforms are often bloated or lack flexibility. EduTrack focuses on delivering a customizable yet lightweight solution ideal for modern educational needs."
      challenges={[
        "Ensuring real-time quiz syncing and timing consistency across devices",
        "Handling high concurrency during exams with database optimization"
      ]}
      outcome="Deployed across three major educational institutions, EduTrack reduced administrative workload by 45% and improved student performance tracking dramatically."
      future={[
        "AI-generated quiz and assignment suggestions",
        "Integration with Zoom/Google Meet for live lectures",
        "Gamification features like badges and leaderboards",
        "Multilingual support and accessibility improvements"
      ]}
    />
  );
};

export default EduTrack;
