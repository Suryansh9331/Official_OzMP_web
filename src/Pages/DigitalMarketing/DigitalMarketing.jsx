


import Hero from "./Hero"
import DigitalMarketingSection from "./Overview";
import ServiceIntro from "./ServicesIntro";
import SecondSection from "./ThreeBox";



const DigitalMarketing = () => {
  return (
    <div className= " w-full overflow-hidden">
      
      <Hero/>
      <SecondSection/>
      <DigitalMarketingSection/>
      <ServiceIntro/>
     
    </div>
  );
};

export default DigitalMarketing;
