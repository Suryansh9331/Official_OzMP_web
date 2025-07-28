import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Starter Package",
    subtitle: "For Startups",
    price: "20$",
    features: [
      "Basic Analytics Dashboard",
      "Email Support",
      "Access to Core Features",
      "Community Access",
      "Monthly Reports",
    ],
    isHighlight: false,
    hideOnTablet: false,
    button: {
      text: "Get Started",
      bgColor: "bg-[#DBD2FE]",
      hoverColor: "hover:bg-[#c3ebd8]",
      textColor: "text-black",
      link: "/pricing/starter",
    },
  },
  {
    title: "Growth Package",
    subtitle: "For Scaling Businesses",
    price: "40$",
    features: [
      "Advanced Analytics",
      "Priority Support",
      "Marketing Tools Access",
      "Team Collaboration",
      "Weekly Performance Reports",
    ],
    isHighlight: true,
    hideOnTablet: false,
    button: {
      text: "Choose Growth",
      bgColor: "bg-white",
      hoverColor: "hover:bg-[#c3ebd8]",
      textColor: "text-black",
      link: "/pricing/growth",
    },
  },
  {
    title: "Enterprise Package",
    subtitle: "For Large-Scale Operations",
    price: "60$",
    features: [
      "Dedicated Account Manager",
      "Custom Integrations",
      "24/7 Support",
      "Unlimited Team Access",
      "Daily Performance Insights",
    ],
    isHighlight: false,
    hideOnTablet: true,
    button: {
      text: "Contact Sales",
      bgColor: "bg-[#DBD2FE]",
      hoverColor: "hover:bg-[#c3ebd8]",
      textColor: "text-black",
      link: "/pricing/enterprise",
    },
  },
];

const PricingSection = () => {
  return (
    <section className="w-full lg:py-18 md:py-16 py-8 md:px-4 px-2 lg:px-20 font-[Archivo] text-center">
      <img
        src="/images/Star.png"
        alt="Star Icon"
        className="mx-auto w-18 h-18 mb-4"
      />
      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        Flexible Packages for Every Business Stage
      </h2>

      <div className="grid lg:gap-14  gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-6 ">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl border-2 border-black  p-8 flex flex-col justify-between text-left ${
              card.isHighlight
                ? "bg-[#DBD2FE] shadow-lg scale-[1.02]"
                : "bg-white"
            } ${card.hideOnTablet ? "flex md:hidden lg:flex" : ""}`}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-1">{card.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{card.subtitle}</p>
              <h4 className="text-3xl font-bold mb-0">{card.price}</h4>
              <p className="text-base mb-6">Month</p>

              <ul className="text-left flex flex-col gap-3 font-[Roboto]">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <CheckCircle className="w-5 h-5 text-[#A98DFD] mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={card.button.link}
              className={`${card.button.bgColor} ${card.button.hoverColor} ${card.button.textColor} text-sm font-semibold py-2 px-4 shadow-[2px_2px_0px_#000] rounded-full mt-4 inline-block text-center transition-all`}
            >
              {card.button.text}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
