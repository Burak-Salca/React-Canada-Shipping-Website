import React from 'react';

export default function Footer() {

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        
        {/* Şirketin logosu ve ismi */}
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <img 
            src="/galata-cargo-textless-logo.webp" 
            alt="Galata Cargo Logo" 
            className="h-16 sm:h-24 mb-4 sm:mb-0"
          />
          <h1 className="text-3xl font-bold ml-4">Galata Cargo & Logistic</h1>
        </div>

        {/* Working Hours */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Working Hours</h2>
          <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

        {/* Contact Us */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
  
            <p>
              📧 
              <a href="mailto:info@galatacargo.com" className="hover:underline">
                info@galatacargo.com
              </a>
            </p>
            
            <p>
              📞 
              <a href="tel:+11234567890" className=" hover:underline">
                +1 123-456-7890
              </a>
            </p>
        </div>

        {/* Google Maps: Toronto, Canada */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Service Area</h2>
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d370380.2793285434!2d-80.0051484477341!3d43.50596000574341!3m2!1i1024!2i768!4f12.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2str!4v1740184967174!5m2!1sen!2str"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </footer>
  );
}
