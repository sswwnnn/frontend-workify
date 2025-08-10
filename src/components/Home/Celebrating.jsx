import React from "react";
import badgeImage from '../../assets/badge1.png';
import backgroundBadgeImage from '../../assets/badge2.png';

function Celebrating() {
  
  const generateBokehCircles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 15,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.6
    }));
  };

  const bokehCircles = generateBokehCircles(30);

  return (
    <div className="bg-gradient-to-br from-[#002347] to-[#003366] min-h-screen relative overflow-hidden">
      {/* Background Bokeh Effects */}
      <div className="absolute inset-0">
        {/* Large background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002347] to-[#001a33]"></div>
        
        {/* Animated bokeh circles */}
        {bokehCircles.map((circle) => (
          <div
            key={circle.id}
            className="absolute rounded-full bg-gradient-radial from-[#FF5003]/20 via-orange-400/15 to-amber-400/10 blur-md animate-pulsate"
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              left: `${circle.left}%`,
              top: `${circle.top}%`,
              animationDelay: `${circle.delay}s`,
              animationDuration: `${circle.duration}s`,
              opacity: circle.opacity * 0.3
            }}
          />
        ))}

        {/* Large background badge image - positioned like in reference */}
        <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 opacity-10 overflow-hidden">
          <div className="relative w-[700px] h-[700px]">
            <img 
              src={backgroundBadgeImage}
              alt="10 Year Anniversary Badge Background"
              className="w-full h-full object-contain"
            />
            {/* Optional: Additional glow effect */}
            <div className="absolute inset-0 bg-white/5 blur-xl rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Placeholder Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-80 h-80">
                {/* Replace badgeImage with your imported image */}
                <img 
                  src={badgeImage}
                  alt="Anniversary Badge"
                  className="w-full h-full object-contain rounded-full"
                />
                
                {/* Glow effect around the image */}
                <div className="absolute inset-0 rounded-full bg-white/5 blur-xl -z-10"></div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF5003] leading-tight mb-6">
                  A{" "}
                  <span className="text-[#FF5003]">
                    DECADE 
                  </span>
                  <br />
                  <span className="text-[#FF5003]">
                    OF SERVICE
                  </span>
                  <br />
                  <span className="text-[#FF5003]">
                    EXCELLENCE
                  </span>
                </h1>
              </div>

              {/* Content Text */}
              <div className="space-y-6 text-lg text-[#E5E5E5] leading-relaxed">
                <p>
                  For a decade, we've been dedicated to transforming the way businesses manage their people, 
                  streamlining workflows, simplifying payroll, and creating workplaces where teams thrive.
                </p>
                <p>
                  This milestone is more than just a number. It's a testament to the trust of our clients, 
                  the passion of our team, and the impact we've made together.
                </p>
                <p>
                  Here's to 10 years of innovation, commitment, and excellence and to many more years of 
                  helping businesses and people succeed.
                </p>
                <p>
                  <span className="text-[#FF5003] font-semibold">
                    Thank you for being part of our journey.
                  </span>
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        
        @keyframes pulsate {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        .animate-pulsate {
          animation: pulsate 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Celebrating;