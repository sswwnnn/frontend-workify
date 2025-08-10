import React from "react";

function Vision() {
  return (
    <div className="relative">
      {/* GIF Background */}
      <div id="vision"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://media.giphy.com/media/lbcLMX9B6sTsGjUmS3/giphy.gif)'
        }}
      >
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#002347]/40"></div>
      </div>

      {/* Section 4: Vision */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#FF5003] rounded-full opacity-[0.025] blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="visionLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF5003" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#002347" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#FF5003" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,200 Q400,100 800,200 T1600,200"
              fill="none"
              stroke="url(#visionLine)"
              strokeWidth="2"
              className="animate-pulse"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF5003]/10 rounded-full mb-6 animate-pulse">
              <span className="text-4xl text-[#FF5003]"></span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight">
              Our <span className="text-[#FF5003]">Vision</span>
            </h2>
          </div>

          <div className="bg-gray-900/40 backdrop-blur-lg rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-transform duration-300 border border-white/20">
            <p className="text-2xl md:text-3xl text-white leading-relaxed font-medium">
              To inspire a world where 
              <span className="text-[#FF5003] font-bold"> managing people is effortless</span>,
              and every workplace becomes a 
              <span className="text-[#FF5003] font-bold"> thriving community </span>
              driven by purpose, innovation, and excellence.
            </p>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-8 -left-8 w-16 h-16 border-4 border-[#FF5003]/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-[#FF5003]/20 rounded-full animate-pulse"></div>
        </div>
      </section>
    </div>
  );
}

export default Vision;