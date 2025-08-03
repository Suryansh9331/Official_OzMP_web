import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "CEO & Founder",
      company: "TechStart Solutions",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      testimonial: "We love Oz Media Planet! Their designers were using it for their projects, so we already knew what kind of design they want.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Marketing Director",
      company: "Digital Innovations",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      testimonial: "Oz Media Planet transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      designation: "Creative Director",
      company: "Creative Studios",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      testimonial: "Outstanding work from the Oz Media Planet team. They delivered our project on time and with exceptional quality.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      designation: "Business Development Manager",
      company: "Growth Ventures",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      testimonial: "Professional service and innovative solutions. Oz Media Planet helped us achieve our marketing goals effectively.",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Parker",
      designation: "Brand Manager",
      company: "Brand Builders",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      testimonial: "The team at Oz Media Planet is incredibly talented. They understood our vision and brought it to life perfectly.",
      rating: 5
    },
    {
      id: 6,
      name: "James Wilson",
      designation: "CTO",
      company: "Future Tech",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      testimonial: "Exceptional creativity and professionalism. Oz Media Planet consistently delivers high-quality results for our campaigns.",
      rating: 5
    },
    {
      id: 7,
      name: "Rachel Green",
      designation: "Head of Design",
      company: "Design Hub",
      image: "https://randomuser.me/api/portraits/women/72.jpg",
      testimonial: "Working with Oz Media Planet was a game-changer for our business. Their strategic approach made all the difference.",
      rating: 5
    },
    {
      id: 8,
      name: "Alex Martinez",
      designation: "Product Manager",
      company: "Innovation Labs",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      testimonial: "Oz Media Planet's expertise in digital marketing helped us reach new heights. Highly recommend their services.",
      rating: 5
    },
    {
      id: 9,
      name: "Sophia Lee",
      designation: "Operations Director",
      company: "Creative Agency",
      image: "https://randomuser.me/api/portraits/women/81.jpg",
      testimonial: "The quality of work from Oz Media Planet is unmatched. They bring fresh ideas and execute them flawlessly.",
      rating: 5
    },
    {
      id: 10,
      name: "Robert Kim",
      designation: "VP of Marketing",
      company: "Media Solutions",
      image: "https://randomuser.me/api/portraits/men/73.jpg",
      testimonial: "Oz Media Planet delivered beyond our expectations. Their team is professional, creative, and results-driven.",
      rating: 5
    },
    {
      id: 11,
      name: "Rajesh Sharma",
      designation: "Founder & CEO",
      company: "Bangalore Tech Solutions",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
      testimonial: "Oz Media Planet's understanding of the Indian market is exceptional. They helped us scale our startup with brilliant digital strategies.",
      rating: 5
    },
    {
      id: 12,
      name: "Priya Patel",
      designation: "Marketing Head",
      company: "Mumbai Digital Agency",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      testimonial: "Working with Oz Media Planet was transformational for our agency. Their innovative approach helped us win major clients across India.",
      rating: 5
    },
    {
      id: 13,
      name: "Arjun Gupta",
      designation: "Co-Founder",
      company: "Delhi E-commerce Ventures",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      testimonial: "Oz Media Planet's expertise in e-commerce marketing boosted our sales by 300%. Their team understands the Indian consumer mindset perfectly.",
      rating: 5
    },
    {
      id: 14,
      name: "Sneha Reddy",
      designation: "Brand Director",
      company: "Hyderabad Creative Studios",
      image: "https://randomuser.me/api/portraits/women/77.jpg",
      testimonial: "The creative campaigns by Oz Media Planet resonated perfectly with our South Indian audience. Exceptional work and timely delivery.",
      rating: 5
    },
    {
      id: 15,
      name: "Vikram Singh",
      designation: "Business Owner",
      company: "Jaipur Fashion House",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      testimonial: "Oz Media Planet helped us establish a strong digital presence for our traditional business. Their cultural sensitivity and modern approach is commendable.",
      rating: 5
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // Approximate card width including margin
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320; // Approximate card width including margin
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      setCurrentIndex(Math.min(testimonials.length - 1, currentIndex + 1));
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'fill-black text-black' : 'fill-gray-300 text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="w-full bg-white py-16 ">
      <div className="w-full mx-auto ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Our Loyal Customers Have Said
          </h2>
          <p className="text-gray-600 max-w-2xl  mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Oz Media Planet gives you the blocks & components you need to create a truly
            professional website, landing page or admin panel for your SaaS.
          </p>
        </div>

        {/* Testimonial Cards Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-80 p-6 rounded-2xl shadow-lg"
                style={{ backgroundColor: '#DBD2FE' }}
              >
                {/* Profile Section */}
                <div className="flex items-start mb-4">
                  <div className="relative mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-400 shadow-md"
                    />
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        Fill (348) x 28 Hug
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="font-semibold text-gray-900 text-sm mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="mb-6">
                  <p 
                    className="text-gray-800 text-sm leading-relaxed"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    "{testimonial.testimonial}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="border-t border-gray-300 pt-4">
                  <p 
                    className="text-sm text-gray-600 mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {testimonial.designation}
                  </p>
                  <p 
                    className="font-semibold text-gray-900"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200 shadow-sm"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-lg border border-gray-300  hover:border-purple-400 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200 shadow-sm"
              disabled={currentIndex >= testimonials.length - 1}
            >
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </button>
          </div>

          {/* See All Reviews Link */}
          {/* <div className="text-center mt-6">
            <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
              See all reviews by our customers
              <ChevronRight className="w-4 h-4" />
            </button>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;