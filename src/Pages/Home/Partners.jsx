import { motion } from "framer-motion";

const logos = [
 
  "/images/google.png",
  "/images/Acer.png",
  "/images/Huawai.png",
  "/images/intel.png",
"/images/Asus.png",
  "/images/oracle.png",
  "/images/Svmsung.png",
  "/images/techM.png",
  
];

const TrustedBrands = () => {
  return (
    <section className="py-16 bg-white overflow-hidden w-full">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2
          className="text-2xl md:text-4xl font-semibold text-black"
          style={{ fontFamily: "Archivo, sans-serif" }}
        >
          Trusted by Industry Leaders
        </h2>
        <p
          className="text-gray-700 text-sm md:text-base mt-4"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          We’ve delivered measurable results for startups, SMEs, and multinational companies.
        </p>
      </div>

      {/* Marquee Animation */}
      <div className="relative w-full">
        <motion.div
          className="flex gap-12 items-center whitespace-nowrap mt-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* Duplicate logos for seamless infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className=" md:h-10 h-6 lg:h-10 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands;
