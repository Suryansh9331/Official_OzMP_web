


import Hero from "./Hero"
import OverviewSection from "./Overview";
import MissionVision from "./Mission&Vision";
import ValuesSection from "./OurValue";


const About = () => {
  return (
    <div className= " w-full overflow-hidden">
      
      <Hero/>
      <OverviewSection/>
      <MissionVision/>
      <ValuesSection/>
    </div>
  );
};

export default About;
