import React from 'react';

export default function Galeries() {
  const images = [
    "/g1.jpg",
    "/g2.jpg",
    "/g3.jpg",
    "/g4.jpeg",
    "/g5.jpeg",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-5xl text-[#1f599c] font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={src} 
              alt={`Gallery ${index + 1}`} 
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
