


import Hero from "./Hero"
import OverviewSection from "./Overview";
import MissionVision from "./Mission&Vision";


const About = () => {
  return (
    <div className= " w-full overflow-hidden">
      
      <Hero/>
      <OverviewSection/>
      <MissionVision/>
    </div>
  );
};

export default About;
