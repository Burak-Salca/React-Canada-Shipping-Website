import React from 'react';

function ServiceMap({ title, services, imageSrc }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-48 object-cover rounded-t-2xl mb-4" 
      />
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc pl-6 space-y-2">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceMap;
