import React, { useState, useEffect } from "react";

function GreenNaturePlaces() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Mock data with image paths from the public folder
    const mockData = [
      {
        id: 1,
        name: "Emerald Forest",
        description: "A dense forest with vibrant green trees and wildlife.",
        location: "Highland Park, Colorado",
        activities: ["Hiking", "Bird Watching", "Photography"],
        image: "https://cdn.britannica.com/87/138787-050-33727493/Belovezhskaya-Forest-Poland.jpg" // Corrected path to public images folder
      },
      {
        id: 2,
        name: "Crystal Lake",
        description: "A serene lake surrounded by towering pine trees.",
        location: "Lakeview, California",
        activities: ["Fishing", "Kayaking", "Picnic"],
        image: "https://www.crystallake.org/home/showpublishedimage/2272/636114200754200000", // Corrected path to public images folder
      },
      {
        id: 3,
        name: "Verdant Valley",
        description: "A lush valley with rolling hills and blooming flowers.",
        location: "Springfield, Oregon",
        activities: ["Camping", "Horseback Riding", "Nature Walks"],
        image: "https://images.fineartamerica.com/images-medium-large-5/verdant-valley-eric-glaser.jpg", // Corrected path to public images folder
      }
    ];

    setPlaces(mockData);
  }, []);

  return (
    <section id="green-places" className="py-16 bg-lime-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-12">
          Relevant Places
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place) => (
            <div
              key={place.id}
              className="flex flex-col items-center bg-gradient-to-r from-green-500 to-lime-400 shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-black mb-2">
                {place.name}
              </h4>
              <p className="text-black mb-4">{place.description}</p>
              <p className="text-sm text-black mb-2">
                <strong>Location:</strong> {place.location}
              </p>
              <p className="text-sm text-black">
                <strong>Activities:</strong> {place.activities.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GreenNaturePlaces;
