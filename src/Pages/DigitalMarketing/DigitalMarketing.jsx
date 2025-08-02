

import S1 from "../../assets/images/DMS1.png"
import Hero from "./Hero"
import DigitalMarketingSection from "./Overview";
import ServiceIntro from "./ServicesIntro";
import SecondSection from "./ThreeBox";
import LeftServiceSection from "./DmLeftServices";


const DigitalMarketing = () => {
  return (
    <div className= " w-full overflow-hidden">
      
      <Hero/>
      <SecondSection/>
      <DigitalMarketingSection/>
      <ServiceIntro/>
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
    </div>
  );
};

export default DigitalMarketing;
