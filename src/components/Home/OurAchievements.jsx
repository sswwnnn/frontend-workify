import React from "react";
import { Trophy, Users, Rocket, UserCheck, Star, Globe } from "lucide-react";

const achievements = [
  {
    title: "Years of Excellence",
    count: "10+",
    description: "Leading the industry with innovative HR solutions",
    icon: Trophy,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Happy Clients",
    count: "500+",
    description: "Companies trust us with their HR management",
    icon: UserCheck,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    backgroundImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Projects Delivered",
    count: "1000+",
    description: "Successful implementations worldwide",
    icon: Rocket,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Team Members",
    count: "50+",
    description: "Dedicated professionals across the globe",
    icon: Users,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Customer Satisfaction",
    count: "92%",
    description: "Exceptional service quality rating",
    icon: Star,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    backgroundImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop&crop=center"
  },
  {
    title: "Countries Served",
    count: "25+",
    description: "Global reach with local expertise",
    icon: Globe,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    backgroundImage: "https://images.unsplash.com/photo-1569389397653-c04fe624e663?w=400&h=300&fit=crop&crop=center"
  },
];

function OurAchievements() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#002347] via-[#003366] to-[#004080] relative overflow-hidden">
      {/* Enhanced Background decorative elements with pulsating circles */}
      <div className="absolute inset-0">
        {/* Large pulsating circle - top left */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF5003] rounded-full opacity-[0.03] blur-3xl animate-pulse"></div>
        
        {/* Medium pulsating circle - bottom right */}
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#FF5003] rounded-full opacity-[0.04] blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Small pulsating circle - top right */}
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#FF5003] rounded-full opacity-[0.025] blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Extra small circle - middle left */}
        <div className="absolute top-1/2 left-1/6 w-48 h-48 bg-[#FF5003] rounded-full opacity-[0.02] blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Another medium circle - bottom left */}
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[#FF5003] rounded-full opacity-[0.035] blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Subtle white accent circle */}
        <div className="absolute top-2/3 right-1/6 w-56 h-56 bg-white rounded-full opacity-[0.015] blur-3xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our Amazing
            <br />
            <span className="text-[#FF5003]">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and innovation in HR management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                ></div>
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/50 group-hover:from-black/30 group-hover:via-black/20 group-hover:to-black/40 transition-all duration-300 rounded-2xl"></div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`${item.iconBg} p-4 rounded-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={32} className={item.iconColor} />
                    </div>
                  </div>
                  
                  {/* Count */}
                  <div className="text-4xl md:text-5xl font-bold text-[#FF5003] mb-2 group-hover:text-white transition-colors duration-300">
                    {item.count}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-6 w-full bg-white/20 rounded-full h-1">
                    <div 
                      className="bg-[#FF5003] h-1 rounded-full transition-all duration-1000 delay-300"
                      style={{ width: index % 2 === 0 ? '85%' : '92%' }}
                    ></div>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-3 h-3 bg-[#FF5003] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}

export default OurAchievements;