import HeroBanner from "./Hero";
import StatsSection from "./Reviews";
const Home = () => {
  return (
    <div>
      <HeroBanner/>
     <div className="lg:px-16 px-2 md:px-4 mb-6 mt-6  md:mt-2  " >
      <StatsSection/>
     </div>
      

    </div>
  );
};

export default Home;
