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
       
       <section className="w-full  lg:px-18  md:px-10 px-2  lg:py-26 md:py-24 py-16 text-center flex flex-col items-center">
      {/* Main Heading */}
      <h1
        className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-snug"
        style={{
          fontFamily: "'Arima', cursive",
          color: "#19007C",
        }}
      >
        OZ Media Planet isn’t just a service provider — we are a strategic partner in your{" "}
       
        business growth journey.
      </h1>

      {/* Buttons */}
      <div className="md:mt-14 mt-8 flex flex-col sm:flex-row md:gap-14 gap-6 ">
        <button className="uppercase font-outfit font-semibold hover:cursor-pointer bg-[#dcd4ff] text-black px-5 sm:px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1">
          Our Impact in Action
        </button>
        <button className=" uppercase font-outfit font-semibold hover:cursor-pointer border border-black px-8 sm:px-8 py-3 rounded-full transition-transform duration-300 hover:shadow-[4px_4px_0px_#000] hover:-translate-x-1 hover:-translate-y-1">
        Plan With Us – No Cost
        </button>
      </div>
    </section>
 
    </div>
  );
};

export default Home;
