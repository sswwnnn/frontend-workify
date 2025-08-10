import React, { useState } from "react";

const tasks = [
  {
    id: 1,
    title: "Onboarding feedback",
    progress: 60,
    color: "bg-yellow-400",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Set new employee account",
    progress: 40,
    color: "bg-red-500",
    status: "Pending"
  },
  {
    id: 3,
    title: "Post a Shoutout to welcome your new joiner",
    progress: 40,
    color: "bg-pink-400",
    status: "Scheduled"
  },
];

const HRSoftwareSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="w-11/12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002347] leading-tight mb-6">
                  Say hi to the HR software that
                  <br />
                  <span className="text-[#FF5003]">Streamlines and automates</span>
                  <br />
                  HR processes
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Easily add and adjust workflows, tasks, and timelines as processes change.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Customize workflows and make them personal for teams, departments, or individuals.
                  </p>
                </div>
              </div>

             
          
            </div>

            {/* Right Content - Task Management Card */}
            <div className="relative">
              {/* Assigned User Card - Floating */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border">
                  <img
                    src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Jennifer Walker"
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <p className="mt-3 text-sm text-gray-600">Assigned to</p>
                  <p className="font-bold text-[#002347] text-lg">Jennifer Walker</p>
                </div>
              </div>

              {/* Main Task Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 pt-16 transform hover:scale-105 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-[#002347]">Tasks</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">3 Active</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className="bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-[#002347] font-semibold">{task.title}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            task.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                            task.status === 'Pending' ? 'bg-red-100 text-red-800' :
                            'bg-pink-100 text-pink-800'
                          }`}>
                            {task.status}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600">Progress</span>
                          <span className="text-sm font-semibold text-[#002347]">{task.progress}%</span>
                        </div>
                        
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${task.color} rounded-full transition-all duration-500 ease-out`}
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                 
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -bottom-4 -right-4 bg-[#FF5003] text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold">
                2 tasks due today
              </div>
            </div>
          </div>

         
           
        </div>

        {/* Modal */}
        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-[#002347] flex items-center space-x-3">
                    <span className="text-3xl">🎥</span>
                    <span>Watch the Demo</span>
                  </h3>
                  <button
                    onClick={handleOpen}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <span className="text-gray-600 text-xl">×</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="relative w-full h-64 md:h-96 bg-gray-100 rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="HR Software Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <div className="p-6 border-t bg-gray-50 flex justify-end space-x-4">
                <button
                  onClick={handleOpen}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg font-semibold transition-colors duration-200"
                >
                  Close
                </button>
                <button className="px-6 py-3 bg-[#FF5003] hover:bg-[#E0440A] text-white rounded-lg font-semibold transition-colors duration-200">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default HRSoftwareSection;
               