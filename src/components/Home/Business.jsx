import React from 'react';
import { motion } from 'framer-motion';

const companyLogos = [
  "https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2362155/pexels-photo-2362155.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2180780/pexels-photo-2180780.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2835170/pexels-photo-2835170.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/104372/pexels-photo-104372.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3081173/pexels-photo-3081173.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1769735/pexels-photo-1769735.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4480519/pexels-photo-4480519.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3070071/pexels-photo-3070071.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/9843280/pexels-photo-9843280.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4503739/pexels-photo-4503739.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/31206348/pexels-photo-31206348/free-photo-of-modern-architecture-in-puebla-business-district.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5531004/pexels-photo-5531004.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6763964/pexels-photo-6763964.jpeg?auto=compress&cs=tinysrgb&w=600",
];

export default function Business() {
  const duplicatedLogos = [...companyLogos, ...companyLogos, ...companyLogos];
  
  return (
    <section className="py-16 bg-gradient-radial from-[#4E95DB] via-[#2267AC] to-[#002347] overflow-hidden" style={{background: 'radial-gradient(circle, #4E95DB 0%, #2267AC 30%, #0F5091 60%, #002347 100%)'}}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 px-6">
          <span className="text-[#FF5003]">Join</span> the <span className="text-[#FF5003]">15,000+</span> small and mid-sized US businesses using the <span className="text-[#FF5003]">GoCo</span> platform
        </h2>
        
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex space-x-8 w-max"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              duration: 80,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company ${index + 1}`}
                className="w-64 h-48 rounded-md"
              />
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}