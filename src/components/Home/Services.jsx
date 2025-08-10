import React, { useState } from "react";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Workflow Monitoring",
      description: "Track and monitor the progress of employee tasks efficiently in real-time with advanced analytics and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy",
      features: ["Real-time tracking", "Progress analytics", "Performance insights"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Salary Management",
      description: "Manage salaries, payment histories, and ensure timely payments to employees with comprehensive financial tracking.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=entropy",
      features: ["Manage salaries", "Payment history", "Financial reports"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Employee Records",
      description: "Maintain comprehensive records of employees, including designations, roles, and bank details in a secure environment.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=faces",
      features: ["Digital profiles", "Role management", "Secure access"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Performance Analysis",
      description: "Analyze employee performance to identify strengths and areas for improvement with detailed insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy",
      features: ["Performance metrics", "Growth tracking"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden" id="services">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF5003] rounded-full opacity-[0.02] blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[#002347] rounded-full opacity-[0.03] blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#FF5003]/5 to-[#002347]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-11/12 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-[#FF5003] to-[#FF7043] text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002347] mb-6 leading-tight">
            Streamline HR processes with
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5003] to-[#FF7043]">
              intelligent solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empower your team with comprehensive HR tools designed for modern workplaces, 
            featuring cutting-edge technology and intuitive design.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card background with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 group-hover:from-gray-50 group-hover:to-white transition-all duration-500"></div>
              
              {/* Floating accent elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#FF5003]/10 to-[#002347]/10 rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-[#002347]/5 to-[#FF5003]/5 rounded-full blur-lg group-hover:scale-125 transition-all duration-500"></div>

              <div className="relative z-10 p-8">
                {/* Image section with modern styling */}
                <div className="relative mb-8 overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-500">
                  <div className="aspect-video relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#002347] px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      Enhanced
                    </div>
                  </div>
                </div>

                {/* Content section */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#002347] mb-4 group-hover:text-[#FF5003] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </div>

                  {/* Features grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl group-hover:bg-white group-hover:shadow-md transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full flex-shrink-0 shadow-sm`}></div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#002347] transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div 
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform origin-left transition-transform duration-500 ${
                    hoveredCard === service.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section with modern design */}
        <div className="mt-24">
          <div className="relative bg-gradient-to-br from-[#002347] via-[#003366] to-[#002347] rounded-3xl shadow-2xl p-12 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF5003] to-transparent"></div>
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform your HR processes today
              </h3>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Experience the power of modern workforce management
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="https://youtu.be/bI9RZjF-538?feature=shared"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#002347] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span>Watch a Demo</span>
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-8 right-8 w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-[#FF5003] rounded-full animate-pulse"></div>
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 border border-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;