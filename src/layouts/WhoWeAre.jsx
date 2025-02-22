import React from 'react'

export default function WhoWeAre() {
  return (
    <div className="container mx-auto space-x-2 px-4 py-8 flex flex-col md:flex-row items-center">
     
     <div className="w-full md:w-1/2 order-1 md:order-2">
        <img 
          src="/w1.png" 
          alt="Cheap Fast Shipping Cargo Services" 
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </div>
    
      <div className="w-full md:w-1/2 order-2 md:order-1 mt-6 md:mt-0">
  <h1 className="text-5xl font-bold text-[#1f599c]">
    Who we are?
  </h1>
  <p className="mt-4 text-black">
    Galata Cargo & Logistic is a trusted international shipping and logistics company, ensuring safe, efficient, and timely deliveries worldwide. With a customer-focused approach and the ability to handle last-minute calls, we provide seamless logistics solutions tailored to your needs.
  </p>
  <div className="mt-6 flex flex-col md:flex-row gap-4">
  {/* WhatsApp Butonu */}
  <a 
    href="https://api.whatsapp.com/send?phone=14168890429" 
    target="_blank" 
    rel="noreferrer" 
    className="bg-[#1f599c] text-white px-6 py-3 rounded-lg flex items-center gap-2 justify-center"
  >
    {/* WhatsApp İkonu */}
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-6 w-6" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M17.472 14.382c-.297-.149-1.757-.867-2.028-.967-.27-.099-.468-.149-.667.14-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.667-1.611-.916-2.209-.242-.579-.487-.5-.667-.51l-.57-.01c-.198 0-.52.074-.792.372-.27.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.362.195 1.877.118.56-.085 1.757-.718 2.006-1.412.248-.695.248-1.29.173-1.412-.074-.124-.27-.198-.567-.347z"/>
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 2.113.63 4.08 1.72 5.742L2 22l4.396-1.736C7.92 21.37 9.92 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" clipRule="evenodd" />
    </svg>
    <span>Send Us a Message</span>
  </a>
  
  {/* Telefon Butonu */}
  <a 
  href="tel:+14168890429" 
  className="bg-[#1f599c] text-white px-6 py-3 rounded-lg flex items-center gap-2 justify-center"
>
  {/* Telefon İkonu */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="2" 
    stroke="currentColor" 
    className="h-6 w-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75a3 3 0 013-3h3.22c.405 0 .799.162 1.09.452l2.79 2.79a1.125 1.125 0 010 1.59l-1.5 1.5a9 9 0 004.52 4.52l1.5-1.5a1.125 1.125 0 011.59 0l2.79 2.79c.29.29.452.684.452 1.09v3.22a3 3 0 01-3 3h-3.75C7.593 21 3 16.407 3 11.25V6.75z" />
  </svg>
  <span>Call Us</span>
</a>
</div>

</div>
</div>
  )
}
