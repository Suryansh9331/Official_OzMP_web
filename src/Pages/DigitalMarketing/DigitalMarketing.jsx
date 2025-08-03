import S1 from "../../assets/images/DMS1.png";
import S2 from "../../assets/images/DMS2.png";
import S3 from "../../assets/images/DMS3.png";
import S4 from "../../assets/images/DMS4.png";
import S5 from "../../assets/images/DMS5.png";
import Hero from "./Hero";
import DigitalMarketingSection from "./Overview";
import ServiceIntro from "./ServicesIntro";
import SecondSection from "./ThreeBox";
import LeftServiceSection from "./DmLeftServices";
import RightServiceSection from "./DmRightServices";
import WhatWeDo from "./WhatWeDo";

const DigitalMarketing = () => {
  return (
    <div className=" w-full overflow-hidden">
      <Hero />
      <SecondSection />
      <DigitalMarketingSection />
      <ServiceIntro />

      <LeftServiceSection
        image={S1}
        heading="Search Engine Optimization (SEO)"
        subheading="Boost your website’s visibility on search engines with targeted keyword strategies and on-page excellence. Drive consistent, high-quality organic traffic."
        points={[
          "Custom static and dynamic websites tailored to your brand",
          "Mobile and desktop responsive designs",
          "SEO-optimized site architecture",
          "Performance-focused for fast loading and high engagement",
        ]}
        buttonText="Read More"
        buttonColor="#DBD2FF"
      />
      <RightServiceSection
        image={S2}
        heading="Social Media Marketing"
        subheading="Designs That Communicate and Convert. We create stunning visuals and intuitive interfaces that reflect your brand and enhance user engagement."
        points={[
          "Custom software for various industries",
          "ERP, CRM, and SaaS platforms using MERN, MEAN, PHP, Python",
          "Secure and scalable backend infrastructure",
          "Dashboard-driven solutions ready for integration",
        ]}
        buttonText="Read More"
        buttonColor="#DBD2FF"
      />

      <LeftServiceSection
        image={S3}
        heading="Email Marketing"
        subheading="Boost your website’s visibility on search engines with targeted keyword strategies and on-page excellence. Drive consistent, high-quality organic traffic."
        points={[
          "Custom static and dynamic websites tailored to your brand",
          "Mobile and desktop responsive designs",
          "SEO-optimized site architecture",
          "Performance-focused for fast loading and high engagement",
        ]}
        buttonText="Read More"
        buttonColor="#DBD2FF"
      />

      <RightServiceSection
        image={S4}
        heading="Content Marketing"
        subheading="Designs That Communicate and Convert. We create stunning visuals and intuitive interfaces that reflect your brand and enhance user engagement."
        points={[
          "Custom software for various industries",
          "ERP, CRM, and SaaS platforms using MERN, MEAN, PHP, Python",
          "Secure and scalable backend infrastructure",
          "Dashboard-driven solutions ready for integration",
        ]}
        buttonText="Read More"
        buttonColor="#DBD2FF"
      />

      <LeftServiceSection
        image={S5}
        heading="Affiliate Marketing"
        subheading="Boost your website’s visibility on search engines with targeted keyword strategies and on-page excellence. Drive consistent, high-quality organic traffic."
        points={[
          "Custom static and dynamic websites tailored to your brand",
          "Mobile and desktop responsive designs",
          "SEO-optimized site architecture",
          "Performance-focused for fast loading and high engagement",
        ]}
        buttonText="Read More"
        buttonColor="#DBD2FF"
      />

      <WhatWeDo />

      <section className="w-full px-4 py-12 text-center">
        {/* Main heading with emoji */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl md:text-3xl">🧩</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-archivo font-semibold text-black">
            How We Work
          </h2>
        </div>

        {/* Subheading */}
        <h3 className="text-lg sm:text-xl md:text-2xl mt-4 font-poppins font-medium text-black">
          A Collaborative, Goal-Driven Approach To Digital Success
        </h3>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base font-poppins text-gray-700 max-w-4xl mx-auto leading-relaxed">
          We Believe In Working As An Extension Of Your Team. Our Process Blends
          Strategic Thinking, Data Insights, And Creative Execution To Build
          Tailored Digital Marketing Campaigns That Deliver Real Results.
        </p>
      </section>
    </div>
  );
};

export default DigitalMarketing;
