import React from "react";

function Mission() {
  return (
    <div id="mission" className="bg-gradient-to-br from-[#002347] to-[#003366]">
      {/* Section 3: Mission */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#002347]/85 to-[#003366]/85"></div>
          {/* Additional subtle pattern overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0">
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FF5003] rounded-full opacity-[0.05] blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF5003]/20 backdrop-blur-sm rounded-full mb-6 animate-pulse border border-[#FF5003]/30">
              <span className="text-4xl text-[#FF5003]"></span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight drop-shadow-2xl">
              Our <span className="text-[#FF5003] drop-shadow-lg">Mission</span>
            </h2>
          </div>

          <div className="bg-gray-900/40 backdrop-blur-lg rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-300 border border-white/20">
            <p className="text-2xl md:text-3xl text-white leading-relaxed font-medium">
              To empower businesses to reach their fullest potential by transforming it into a 
              <span className="text-[#FF5003] font-bold"> seamless, human-centered experience</span>. 
              We bring people, processes, and technology together to create workplaces where 
              <span className="text-[#FF5003] font-bold"> productivity flows, collaboration flourishes, and every team member feels valued</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mission;