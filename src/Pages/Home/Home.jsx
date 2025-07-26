import CaseStudiesSection from "./CaseStudy";
import HeroBanner from "./Hero";
import IndustrySection from "./IndustrySection";
import TrustedBrands from "./Partners";
import StatsSection from "./Reviews";
import ServicesOverview from "./Services";
import WhoWeAre from "./WhoWeAre";
import WhyChoose from "./WhyChoose";
const Home = () => {
  return (
    <div className="overflow-hidden">
    <div className="w-full overflow-hidden">
      <HeroBanner/>
   </div>
     <div className="lg:px-16 px-2 md:px-4 mb-6 mt-6  md:mt-2  " >
      <StatsSection/>
     </div>
      <TrustedBrands/>
      <WhoWeAre/>
      <ServicesOverview/>
      <IndustrySection/>
      <CaseStudiesSection/>
      
      <WhyChoose/>
        <IndustrySection/>
    </div>
  );
};

export default Home;
