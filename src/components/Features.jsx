import React from 'react'

function Features() {
  return (
    <div>
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
      
    </div>
  )
}

export default Features
