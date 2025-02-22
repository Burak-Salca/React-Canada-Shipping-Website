import React from 'react';
import ServiceMap from '../components/ServiceMap';

export default function Services() {
  // Her bir servis kategorisini tanımlayalım
  const diligentAndCareServices = [
    'B2B Logistics',
    'Local Moving',
    'Residential Moving',
    'Long Distance Moving',
    'Commercial Moving',
  ];

  const professionalAssembleCrewServices = [
    'Junk Removing',
    'Garbage Removing',
  ];

  const packingMaterialsServices = [
    'Packing',
    'Dissembling',
    'Assembling',
    'Furniture',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold text-[#1f599c] text-center mb-8">Services</h1>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <ServiceMap 
          title="Moving" 
          services={diligentAndCareServices} 
          imageSrc="/s1.jpg" 
        />
        
        <ServiceMap 
          title="Removing" 
          services={professionalAssembleCrewServices} 
          imageSrc="/s2.avif" 
        />
        
        <ServiceMap 
          title="Material Handling" 
          services={packingMaterialsServices} 
          imageSrc="/s3.webp" 
        />
        
      </div>
    </div>
  );
}
