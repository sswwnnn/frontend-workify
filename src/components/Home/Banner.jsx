import React from "react";
import Navbar from "../Shared/Navbar/NavBar";

function Banner() {
  const handleAboutUsClick = () => {
    
    const ourStoryElement = document.getElementById('our-story-section');
    if (ourStoryElement) {
      ourStoryElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#002347] to-[#003366] overflow-hidden">
      <Navbar />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Moving particles  */}
        <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-[#FF5003] rounded-full opacity-[0.03] blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[380px] h-[380px] bg-[#FF5003] rounded-full opacity-[0.02] blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        {/* Additional pulsating orange circles  */}
        <div className="absolute top-1/3 left-1/3 w-[520px] h-[520px] bg-[#FF5003] rounded-full opacity-[0.025] blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5003] rounded-full opacity-[0.02] blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#002347] opacity-30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-[#FF5003] opacity-20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-[#002347] opacity-20 rotate-45 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 right-10 w-6 h-6 border-2 border-[#FF5003] opacity-15 animate-spin" style={{ animationDuration: '4s' }}></div>
        
        {/* Flowing lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#002347" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#FF5003" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#002347" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="line2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF5003" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#002347" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF5003" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,100 Q200,50 400,100 T800,100"
            fill="none"
            stroke="url(#line1)"
            strokeWidth="2"
            className="animate-pulse"
          />
          <path
            d="M0,300 Q300,250 600,300 T1200,300"
            fill="none"
            stroke="url(#line2)"
            strokeWidth="3"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <path
            d="M0,500 Q250,450 500,500 T1000,500"
            fill="none"
            stroke="url(#line1)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </svg>

        {/* Central rotating ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#FF5003]/5 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        
        {/* Data stream effect */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#002347]/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#FF5003]/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-[#002347]/15 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Moving dots along paths */}
        <div className="absolute top-20 left-0 w-2 h-2 bg-[#FF5003] rounded-full opacity-30 animate-bounce" style={{ 
          animation: 'float-horizontal 4s infinite linear',
          animationDelay: '0s'
        }}></div>
        <div className="absolute top-40 left-0 w-1 h-1 bg-[#002347] rounded-full opacity-40 animate-bounce" style={{ 
          animation: 'float-horizontal 6s infinite linear',
          animationDelay: '2s'
        }}></div>
        <div className="absolute top-60 left-0 w-3 h-3 border border-[#FF5003] rounded-full opacity-20 animate-bounce" style={{ 
          animation: 'float-horizontal 5s infinite linear',
          animationDelay: '1s'
        }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-between h-screen px-4 md:px-8 lg:px-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Where Growth Inspires 
                <br />
                <span className="text-[#FF5003] animate-pulse">Greatness</span>
                <br />
               
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-[#E5E5E5] leading-relaxed max-w-lg">
              Empowering businesses and delivering unparalleled solutions to our valued clients worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleAboutUsClick}
                className="bg-[#FF5003] hover:bg-[#E0440A] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                About Us →
              </button>
                   
            </div>
          </div>
        </div>

        {/* Right Content - Dashboard Preview */}
        <div className="hidden lg:block flex-1 max-w-2xl">
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#002347]">The future of </h3>
                  <div className="w-12 h-12 bg-[#FF5003] rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#002347] -mt-2">employee management, today.</h3>
                
                <p className="text-gray-600 leading-relaxed">
                  Building smarter workflows, better payroll, and stronger teams.
                </p>

                {/* Team avatars */}
                <div className="flex -space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 border-4 border-white flex items-center justify-center animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>
                    <span className="text-white font-semibold text-sm">Reg</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-600 border-4 border-white flex items-center justify-center animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '2s' }}>
                    <span className="text-white font-semibold text-sm">Lim</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 border-4 border-white flex items-center justify-center animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '2s' }}>
                    <span className="text-white font-semibold text-sm">Zeke</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 border-4 border-white flex items-center justify-center animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '2s' }}>
                    <span className="text-white font-semibold text-sm">Klei</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#E5E5E5] border-4 border-white flex items-center justify-center animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '2s' }}>
                    <span className="text-gray-600 font-semibold text-sm">+50
                      
        
                    </span>
                  </div>
                </div>

                {/* Progress indicators */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Progress Overview</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">85%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: '72%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">72%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#FF5003] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-[#FF5003] h-2 rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-[#FF5003] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg animate-bounce">
              Building career
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-horizontal {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Banner;