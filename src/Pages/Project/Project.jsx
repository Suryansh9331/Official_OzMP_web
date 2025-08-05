import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'InspireWell – Mental Health SaaS Platform',
    description:
      'InspireWell is a comprehensive mental wellness SaaS solution built for therapists and individuals. It includes online booking, mood tracking, AI-guided journaling, and analytics for self-growth. Built using React, Laravel, and MongoDB.',
    image:
      'https://assets-global.website-files.com/6422e4c30c8cc26f2239d8c5/6481bdbb1e810a33e812e7f2_saassss.png',
    tech: ['React', 'Laravel', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 2,
    title: 'ShopEase – E-commerce Web App',
    description:
      'A fast, scalable e-commerce web app that supports multiple vendors, real-time inventory, and AI-driven recommendations. Designed for startups and small businesses.',
    image:
      'https://www.codica.com/_next/image?url=%2Fimages%2Fsolutions%2Fecommerce-solution-cover.png&w=1080&q=75',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'LeadBoost – Digital Marketing Dashboard',
    description:
      'A custom-built marketing analytics dashboard tailored for agencies and digital teams to track campaigns, leads, CTR, and performance using integrated APIs like Google Ads, Facebook Ads, and more.',
    image:
      'https://assets-global.website-files.com/63358716c7c2d4e93d44ffdd/63358d77e2ce8a7c07bc1632_digital-marketing-dashboard.png',
    tech: ['Vue.js', 'Laravel', 'REST APIs', 'Chart.js'],
  },
];

const ProjectDetails = () => {
  return (
    <div className="bg-white text-black font-poppins">
      {/* Hero Section */}
      <section className="bg-[#DBD2FF] text-black py-24 px-6 text-center">
        <h1 className="text-5xl font-[Archivo] font-bold mb-4">
          Our Work Speaks for Itself
        </h1>
        <p className="text-xl font-[Outfit] max-w-3xl mx-auto">
          Explore a curated selection of real-world projects across Web, SaaS, Mobile Apps, and Marketing Automation delivered with performance, scalability, and elegance.
        </p>
      </section>

      {/* Project Showcase Section */}
      <section className="px-4 md:px-16 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-[Archivo] text-black mb-2">Recent Projects</h2>
          <p className="text-gray-600 font-[Outfit]">
            Genuine case studies demonstrating our expertise
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold font-[Archivo] text-black">
                  {project.title}
                </h2>
                <p className="text-gray-600 font-[Poppins] text-sm mt-2">
                  {project.description}
                </p>
                <div className="mt-4 text-xs font-[Inter] text-gray-500">
                  Tech Stack: {project.tech.join(', ')}
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="mt-4 inline-block text-purple-400 font-semibold font-[Outfit] hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-[Archivo] mb-6">Why Businesses Trust Us</h2>
          <p className="text-gray-600 font-[Outfit] text-lg mb-8">
            We bring together creativity, technology, and performance with a strategy-first approach to deliver industry-grade IT and Marketing solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-[Archivo] text-xl mb-2">Tailored Solutions</h3>
              <p className="font-[Poppins] text-sm text-gray-600">
                We design and develop products specific to your goals. No templates. No limits.
              </p>
            </div>
            <div>
              <h3 className="font-[Archivo] text-xl mb-2">Agile Development</h3>
              <p className="font-[Poppins] text-sm text-gray-600">
                Agile processes with rapid iterations to reduce time-to-market and improve quality.
              </p>
            </div>
            <div>
              <h3 className="font-[Archivo] text-xl mb-2">Performance & Support</h3>
              <p className="font-[Poppins] text-sm text-gray-600">
                Long-term partnerships with performance optimization and 24/7 client support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-[Archivo] mb-4">Have a Vision? Let’s Build It Together.</h2>
        <p className="text-lg font-[Outfit] text-gray-600 mb-6">
          We work with startups, SMEs, and enterprises to build scalable, performant applications that make an impact.
        </p>
        <a
          href="mailto:contact@ozmediaplanet.com"
          className="bg-[#DBD2FF] hover:bg-purple-300 text-black px-6 py-3 rounded-full font-[Outfit] transition"
        >
          Let’s Connect
        </a>
      </section>
    </div>
  );
};

export default ProjectDetails;