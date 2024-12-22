import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  const handleExploreFeatures = () => {
    navigate('/features');
  };

  const handleGetStarted = () => {
    navigate('/landing');
  };

  return (
    <div>

      {/* Landing Section */}
      <div id="landing" className="relative min-h-screen w-full bg-gradient-to-r from-green-500 to-lime-600">
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            Welcome to Green Explorer
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white drop-shadow-md max-w-3xl">
            Discover the beauty of nature, explore green spaces, and connect with the environment
          </p>
          <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleExploreFeatures}
              className="bg-white text-green-600 px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore Features
            </button>
            <button
              onClick={handleGetStarted}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

{/* Features Us Section */}
<section id="features" className="bg-lime-200 py-20 h-screen">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-8">
                        Explore Our Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                        {/* Feature 1 */}
                        <div className="bg-gradient-to-r from-green-500 to-lime-400 text-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="text-green-600 text-4xl mb-4">🌳</div>
                            <h3 className="text-xl font-semibold mb-2">Nature Tours</h3>
                            <p className="text-brown-600">
                                Discover beautiful forests, mountains, and lakes with expert guides.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gradient-to-r from-green-500 to-lime-400 text-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="text-green-600 text-4xl mb-4">🌎</div>
                            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Tips</h3>
                            <p className="text-brown-600">
                                Learn how to live sustainably and reduce your environmental footprint.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gradient-to-r from-green-500 to-lime-400 text-center p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
                            <div className="text-green-600 text-4xl mb-4">🌟</div>
                            <h3 className="text-xl font-semibold mb-2">Community Events</h3>
                            <p className="text-brown-600">
                                Join events that celebrate nature and bring people together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


      {/* About Us Section */}
      <section id="about" className="bg-lime-300 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Text */}
            <div className="text-center md:text-left max-w-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Discover Nature's Hidden Gems</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At GreenXplor, we are passionate about connecting people with the beauty of nature.
                Our platform serves as a comprehensive guide to uncover breathtaking tourist spots filled with lush greenery, serene landscapes, and vibrant ecosystems.
                Whether you're an adventurer or a nature enthusiast, we help you locate, explore, and immerse yourself in the greenest destinations around.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join us in promoting sustainable tourism and protecting our natural treasures. Together, we can create unforgettable experiences while preserving the environment for generations to come.
              </p>
            </div>

            {/* Right Side - Card-Based UI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
              {/* Card 1 */}
              <div className="bg-gradient-to-r from-lime-400 to-lime-380 shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://cdn.britannica.com/95/156695-131-FF89C9FA/oak-tree.jpg"
                    alt="Dense forest with sunlight"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://cdn.britannica.com/95/156695-131-FF89C9FA/oak-tree.jpg";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Explore the Greenest Spots</h4>
                  <p className="text-gray-600 mt-2">
                    Discover hidden gems and explore nature's wonders, from peaceful forests to vibrant ecosystems, where adventure and serenity meet.
                  </p>
                  <button className="mt-4 bg-lime-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-r from-lime-400 to-lime-380 shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://t3.ftcdn.net/jpg/08/31/45/82/360_F_831458200_UP2NMP8tb8tMNDW3fxpBv7rMm5gWkic3.jpg"
                    alt="Serene mountain lake"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://t3.ftcdn.net/jpg/08/31/45/82/360_F_831458200_UP2NMP8tb8tMNDW3fxpBv7rMm5gWkic3.jpg";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Serene Escapes</h4>
                  <p className="text-gray-600 mt-2">
                    Escape to serene locations, relax amidst nature's tranquility, and discover calming landscapes, peaceful forests, and quiet retreats for rejuvenation.
                  </p>
                  <button className="mt-4 bg-lime-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gradient-to-r from-lime-400 to-lime-380 shadow-lg rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="https://57hours.com/wp-content/uploads/2019/06/Best-hiking-trails-in-US.jpg"
                    alt="Mountain hiking trail"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://57hours.com/wp-content/uploads/2019/06/Best-hiking-trails-in-US.jpg";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">Adventure Awaits</h4>
                  <p className="text-gray-600 mt-2">
                    Embark on thrilling adventures, explore mountains, forests, and trails, creating unforgettable memories.
                  </p>
                  <button className="mt-4 bg-lime-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-lime-200 py-16 min-h-screen">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-8">Contact Us</h2>
          <div className="flex flex-col items-center">
            {/* Social Media Links */}
            <div className="flex space-x-6 mb-8">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-facebook-square text-3xl"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <i className="fab fa-instagram text-3xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter-square text-3xl"></i>
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-center text-gray-700">
              <p className="mb-4">
                <span className="font-semibold">Phone:</span> +6392937461893
              </p>
              <p className="mb-4">
                <span className="font-semibold">Email:</span> grnxplor@gmail.com
              </p>
              <p className="mb-4">
                <span className="font-semibold">Visit us on:</span>
                <a href="https://grnxplrr.com" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800">
                  GrnXplrr
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Landing;
