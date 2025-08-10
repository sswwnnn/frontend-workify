import React, { useState } from "react";

function OurStory() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const hrImages = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop&crop=faces"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hrImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hrImages.length) % hrImages.length);
  };

  return (
    <div id="our-story-section" className="bg-gradient-to-br from-[#002347] to-[#003366]">
      {/* Section 2: Our Story */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-[#FF5003] rounded-full opacity-[0.025] blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Our <span className="text-[#FF5003]">Story</span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-[#E5E5E5] leading-relaxed">
                <p>
                  Workify began with a simple idea, to make work management smarter, faster, and easier for everyone. 
                  We saw how complicated HR processes, administrative tasks, and scattered systems slowed businesses down, 
                  and we set out to change that.
                </p>
                <p>
                  From authentication to employee self-service, Workify was designed to bring all the essential tools 
                  into one seamless platform. Our system organizes capabilities into intuitive modules, ensuring every user, 
                  from HR leaders to employees, gets the right access and the right experience for their role.
                </p>
                <p>
                  Today, Workify stands as a trusted solution for organizations that value efficiency, clarity, and 
                  people-centered workflows. We're proud to help teams save time, reduce complexity, and focus on 
                  what matters most, <span className="text-[#FF5003] font-semibold">doing great work together.</span>
                </p>
              </div>
            </div>

            {/* Right: Swipable HR Images */}
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={hrImages[currentImageIndex]}
                    alt="HR Team"
                    className="w-full h-64 object-cover transition-transform duration-500"
                  />
                  
                  {/* Navigation buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#002347]/80 text-white p-2 rounded-full hover:bg-[#002347] transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#002347]/80 text-white p-2 rounded-full hover:bg-[#002347] transition-colors"
                  >
                    →
                  </button>
                </div>

                {/* Image indicators */}
                <div className="flex justify-center space-x-2 mb-4">
                  {hrImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-[#FF5003]' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#002347] mb-2">Our Amazing Team</h3>
                  <p className="text-gray-600">Dedicated professionals making work life better</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurStory;