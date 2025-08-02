import React from "react";
// import icon1 from "../../assets/images/icon1.png";
// import icon2 from "../../assets/images/icon2.png";
// import icon3 from "../../assets/images/icon3.png";

const SecondSection = () => {
  const cards = [
    {
      icon: "/images/DMIcon1.png",
      title: "Grow Faster With Our",
      subtitle: "All-In-One Marketing Hub",
      animation: "animate-bounce",
    },
    {
      icon: "/images/DMIcon2.png",
      title: "Smarter Marketing",
      subtitle: "Starts Here",
      animation: "animate-spin",
    },
    {
      icon: "/images/DMIcon3.png",
      title: "Everything You Need",
      subtitle: "To Scale Online",
      animation: "custom-wiggle",
    },
  ];

  return (
    <>
      {/* Inline keyframes for custom wiggle */}
      <style>
        {`
          @keyframes wiggle {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
          }
          .custom-wiggle {
            animation: wiggle 1s ease-in-out infinite;
          }
        `}
      </style>

      <section className="px-4 md:py-28 py-14  md:px-2 lg:px-24 font-[Poppins]">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[Archivo] font-semibold text-black">
            Power Your Growth With Smarter Marketing
          </h2>
          <p className="text-base md:text-lg mt-4 text-gray-700 lg:max-w-6xl  md:max-w-2xl mx-auto">
            All-In-One Platform To Manage SEO, Ads, Social Media, And Email — With Real-Time Insights And Automation Built In
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group transition-all duration-300 ease-in-out p-6  rounded-xl text-center cursor-pointer hover:border shadow-lg hover:border-black hover:bg-[#E2DCFF] hover:shadow-lg"
            >
              <div className={`w-14 h-14 mx-auto mb-4 ${card.animation}`}>
                <img
                  src={card.icon}
                  alt={`icon-${index}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">{card.title}</h3>
              <p className="text-sm text-gray-800">{card.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SecondSection;
