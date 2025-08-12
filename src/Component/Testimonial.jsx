

// const TestimonialSlider = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const scrollContainerRef = useRef(null);

//  const testimonials = [
//   {
//     id: 1,
//     name: "Rohan Mehta",
//     designation: "Founder",
//     company: "Mehta Logistics",
//     image: "https://randomuser.me/api/portraits/men/36.jpg",
//     testimonial:
//       "OZ Media Planet transformed our digital operations with a highly responsive and professional approach. They developed a streamlined, user-friendly corporate website along with a custom CRM system tailored to our logistics operations. The IT services they provided helped us eliminate paperwork, automate key processes like fleet tracking and order management, and improve operational efficiency by over 40%. Their after-support has been equally impressive, ensuring our digital systems evolve with our needs.",
//     rating: 5
//   },
//   {
//     id: 2,
//     name: "Neha Sharma",
//     designation: "Marketing Head",
//     company: "PureGlow Cosmetics",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     testimonial:
//       "Our partnership with OZ Media Planet resulted in a complete brand repositioning across digital platforms. Their team conceptualized and executed a comprehensive digital marketing strategy — from social media management to influencer collaborations and targeted paid advertising. Within three months, we observed a 75% increase in social media engagement and a 35% uplift in sales conversion through our e-commerce website. Their creative team delivered visually stunning content that resonated with our target audience.",
//     rating: 5
//   },
//   {
//     id: 3,
//     name: "Arjun Rao",
//     designation: "Co-founder",
//     company: "EventEase",
//     image: "https://randomuser.me/api/portraits/men/52.jpg",
//     testimonial:
//       "Working with OZ Media Planet on our event management app was a seamless experience. From the initial wireframes to the final deployment on both Android and iOS platforms, their team maintained clear communication and quick turnaround times. They not only developed a fully functional mobile application but also created a complementary event website and designed our brand identity from scratch. Thanks to their technical and creative support, our platform has become one of the top-rated local event discovery apps.",
//     rating: 5
//   }
// ];

   

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     const cardWidth = 320; // Approximate card width including margin
  //     scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  //     setCurrentIndex(Math.max(0, currentIndex - 1));
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     const cardWidth = 320; // Approximate card width including margin
  //     scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
  //     setCurrentIndex(Math.min(testimonials.length - 1, currentIndex + 1));
  //   }
  // };

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <Star
//         key={index}
//         className={`w-4 h-4 ${index < rating ? 'fill-black text-black' : 'fill-gray-300 text-gray-300'}`}
//       />
//     ));
//   };

//   return (
//     <div className="w-full bg-white py-8 md:py-14 ">
//       <div className="w-full mx-auto ">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="md:text-4xl text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
//             Our Loyal Customers Have Said
//           </h2>
//           <p className="text-gray-600 max-w-2xl  mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
//             Oz Media Planet gives you the blocks & components you need to create a truly
//             professional website, landing page or admin panel for your SaaS.
//           </p>
//         </div>

//         {/* Testimonial Cards Container */}
//         <div className="relative">
//           <div
//             ref={scrollContainerRef}
//             className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={testimonial.id}
//                 className="flex-shrink-0 w-80 p-6 rounded-2xl shadow-lg"
//                 style={{ backgroundColor: '#DBD2FE' }}
//               >
//                 {/* Profile Section */}
//                 <div className="flex items-start mb-4">
//                   <div className="relative mr-4">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-16 h-16 rounded-full object-cover border-2 border-purple-400 shadow-md"
//                     />
//                     {index === 0 && (
//                       <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
//                         Fill (348) x 28 Hug
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <h4 
//                       className="font-semibold text-gray-900 text-sm mb-1"
//                       style={{ fontFamily: 'Poppins, sans-serif' }}
//                     >
//                       {testimonial.name}
//                     </h4>
//                     <div className="flex items-center gap-2 mb-1">
//                       <div className="flex">
//                         {renderStars(testimonial.rating)}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Testimonial Text */}
//                 <div className="mb-6">
//                   <p 
//                     className="text-gray-800 text-sm leading-relaxed"
//                     style={{ fontFamily: 'Archivo, sans-serif' }}
//                   >
//                     "{testimonial.testimonial}"
//                   </p>
//                 </div>

//                 {/* Client Info */}
//                 <div className="border-t border-gray-300 pt-4">
//                   <p 
//                     className="text-sm text-gray-600 mb-1"
//                     style={{ fontFamily: 'Poppins, sans-serif' }}
//                   >
//                     {testimonial.designation}
//                   </p>
//                   <p 
//                     className="font-semibold text-gray-900"
//                     style={{ fontFamily: 'Poppins, sans-serif' }}
//                   >
//                     {testimonial.company}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <div className="flex justify-center gap-3 mt-8">
//             <button
//               onClick={scrollLeft}
//               className="w-10 h-10 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200 shadow-sm"
//               disabled={currentIndex === 0}
//             >
//               <ChevronLeft className="w-5 h-5 text-gray-600" />
//             </button>
//             <button
//               onClick={scrollRight}
//               className="w-10 h-10 rounded-lg border border-gray-300  hover:border-purple-400 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200 shadow-sm"
//               disabled={currentIndex >= testimonials.length - 1}
//             >
//               <ChevronRight className="w-5 h-5 text-purple-400" />
//             </button>
//           </div>

//           {/* See All Reviews Link */}
//           {/* <div className="text-center mt-6">
//             <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
//               See all reviews by our customers
//               <ChevronRight className="w-4 h-4" />
//             </button>
//           </div> */}
//         </div>
//       </div>

//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TestimonialSlider;


import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Rohan Mehta",
      designation: "Founder",
      company: "Mehta Logistics",
      image: "https://i.ibb.co/tXz7Ycc/indian-man1.jpg", // Indian man image
      testimonial: `OZ Media Planet transformed our digital operations with a highly responsive and professional approach. They developed a streamlined, user-friendly corporate website along with a custom CRM system tailored to our logistics operations. The IT services they provided helped us eliminate paperwork, automate key processes like fleet tracking and order management, and improve operational efficiency by over 40%. Their after-support has been equally impressive, ensuring our digital systems evolve with our needs.`,
      rating: 5,
      
    },
    {
      id: 2,
      name: "Neha Sharma",
      designation: "Marketing Head",
      company: "PureGlow Cosmetics",
      image: "https://i.ibb.co/dLmdcJv/indian-woman1.jpg", // Indian woman image
      testimonial: `Our partnership with OZ Media Planet resulted in a complete brand repositioning across digital platforms. Their team conceptualized and executed a comprehensive digital marketing strategy — from social media management to influencer collaborations and targeted paid advertising. Within three months, we observed a 75% increase in social media engagement and a 35% uplift in sales conversion through our e-commerce website. Their creative team delivered visually stunning content that resonated with our target audience.`,
      rating: 5,
    
    },
    {
      id: 3,
      name: "Arjun Rao",
      designation: "Co-founder",
      company: "EventEase",
      image: "https://i.ibb.co/yy3tDdm/indian-man2.jpg", // Indian man image
      testimonial: `Working with OZ Media Planet on our event management app was a seamless experience. From the initial wireframes to the final deployment on both Android and iOS platforms, their team maintained clear communication and quick turnaround times. They not only developed a fully functional mobile application but also created a complementary event website and designed our brand identity from scratch. Thanks to their technical and creative support, our platform has become one of the top-rated local event discovery apps.`,
      rating: 5,
     
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 350;
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 350;
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
    <div className="w-full bg-white py-8 md:py-14">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="md:text-4xl text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Our Loyal Customers Have Said
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Hear from our valued clients about their journey with OZ Media Planet.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 md:justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
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
                  </div>
                  <div className="flex-1">
                    <h4
                      className="font-semibold text-gray-900 text-sm mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {testimonial.name}
                    </h4>
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="mb-4">
                  <p
                    className="text-gray-800 text-sm leading-relaxed"
                    style={{ fontFamily: 'Archivo, sans-serif' }}
                  >
                    "{testimonial.testimonial}"
                  </p>
                </div>

                {/* Deliverables */}
             

                {/* Client Info */}
                <div className="border-t border-gray-300 pt-4">
                  <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {testimonial.designation}
                  </p>
                  <p className="font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
              className="w-10 h-10 rounded-lg border border-gray-300 hover:border-purple-400 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors duration-200 shadow-sm"
              disabled={currentIndex >= testimonials.length - 1}
            >
              <ChevronRight className="w-5 h-5 text-purple-400" />
            </button>
          </div>
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
