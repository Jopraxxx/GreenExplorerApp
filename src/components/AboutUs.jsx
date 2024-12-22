import React from 'react';

function AboutUs() {
  // Array of nature-themed images for the cards
  const cardImages = [
    {
      src: "https://cdn.britannica.com/95/156695-131-FF89C9FA/oak-tree.jpg",
      alt: "Dense forest with sunlight streaming through trees"
    },
    {
      src: "https://t3.ftcdn.net/jpg/08/31/45/82/360_F_831458200_UP2NMP8tb8tMNDW3fxpBv7rMm5gWkic3.jpg",
      alt: "Serene mountain lake surrounded by forest"
    },
    {
      src: "https://api.escuelajs.co/api/v1/categories",
      alt: "Mountain hiking trail through green landscape"
    }
  ];

  return (
    <div>
      <section id="about" className="bg-lime-300 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-8">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Text */}
            <div className="text-center md:text-left max-w-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Discover Nature's Hidden Gems
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At GreenXplor, we are passionate about connecting people with the beauty of nature.
                Our platform serves as a comprehensive guide to uncover breathtaking tourist spots
                filled with lush greenery, serene landscapes, and vibrant ecosystems.
                Whether you're an adventurer or a nature enthusiast, we help you locate, explore,
                and immerse yourself in the greenest destinations around.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Join us in promoting sustainable tourism and protecting our natural treasures.
                Together, we can create unforgettable experiences while preserving the environment for generations to come.
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
                  <h4 className="text-lg font-semibold text-gray-800">
                    Explore the Greenest Spots
                  </h4>
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
                  <h4 className="text-lg font-semibold text-gray-800">
                    Serene Escapes
                  </h4>
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
                  <h4 className="text-lg font-semibold text-gray-800">
                    Adventure Awaits
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Embark on thrilling adventures, explore mountains, forests, and trails,
                    creating unforgettable memories.
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
    </div>
  );
}

export default AboutUs;

