


import Hero from "./Hero"
import OverviewSection from "./Overview";
import MissionVision from "./Mission&Vision";
import ValuesSection from "./OurValue";
import WhyChooseUs from "./WhyChooseUs";


const About = () => {
  return (
    <div className= " w-full overflow-hidden">
      
      <Hero/>
      <OverviewSection/>
      <MissionVision/>
      <ValuesSection/>
      <WhyChooseUs/>
    </div>
  );
};

export default About;
