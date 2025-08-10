import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#002347] text-white overflow-hidden">
      {/* Background Design with Curves */}
      <div className="absolute inset-0">
        {/* Large curved shapes */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#003366] opacity-30 rounded-full"></div>
        <div className="absolute top-20 -right-40 w-80 h-80 bg-[#004488] opacity-20 rounded-full"></div>
        <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-[#0055aa] opacity-25 rounded-full"></div>
        
        {/* Additional curved elements for depth */}
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-[#003d66] opacity-15 rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#002a4d] opacity-20 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16">
        {/* Partnership Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Want to partner with us?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            If you're interested in our partnership and would like to find out some more information,
            <br />one of our advisors is excited to help.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-[#002347] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <div className="w-11/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Logo/Name */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold">
                workify<span className="text-blue-300">.</span>
              </h3>
            </div>

            {/* About */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-blue-300 uppercase tracking-wider">
                About
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/#our-story-section" 
                    className="hover:text-blue-300 transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      // Check if we're on the home page
                      if (window.location.pathname === '/') {
                        const element = document.getElementById('our-story-section');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                       
                        window.location.href = '/#our-story-section';
                      }
                    }}
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a 
                    href="/#mission" 
                    className="hover:text-blue-300 transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname === '/') {
                        const element = document.getElementById('mission');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        window.location.href = '/#mission';
                      }
                    }}
                  >
                    Mission
                  </a>
                </li>
                <li>
                  <a 
                    href="/#vision" 
                    className="hover:text-blue-300 transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname === '/') {
                        const element = document.getElementById('vision');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        window.location.href = '/#vision';
                      }
                    }}
                  >
                    Vision
                  </a>
                </li>
                <li>
                  <a 
                    href="/#services" 
                    className="hover:text-blue-300 transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname === '/') {
                        const element = document.getElementById('services');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        window.location.href = '/#services';
                      }
                    }}
                  >
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-blue-300 uppercase tracking-wider">
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/#faq" 
                    className="hover:text-blue-300 transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('faq');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Popular FAQ
                  </a>
                </li>
                <li>
                  <Link to="/dashboard" className="hover:text-blue-300 transition-colors">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us & Contact */}
            <div>
              <h4 className="text-sm font-bold mb-4 text-blue-300 uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex space-x-3 mb-6">
                <a 
                  href="https://github.com/zekewyd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/share/1717ipMbG8/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="text-sm opacity-90">
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:info@workify.com" className="hover:text-blue-300">
                    info@workify.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong> +123 456 7890
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;