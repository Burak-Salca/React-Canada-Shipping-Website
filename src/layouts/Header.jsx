import React from 'react'
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="w-full bg-white shadow">
      <div className="container mx-auto px-12  flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-8">
          <img 
            src="/galata-cargo-textless-logo.webp" 
            alt="Galata Cargo Logo" 
            className="h-12 md:h-40"
          />
          <h1 className="text-2xl text-[#1f599c] font-bold">
            Galata Cargo & Logistic
          </h1>
        </div>
        <nav className="mt-4 md:mt-0 py-4 text-[#1f599c]">
  <ul className="flex space-x-6">
    <li>
      <Link 
        to="whoWeAre" 
        smooth={true} 
        duration={500} 
        className="text-black-700 hover:text-gray-500 cursor-pointer"
      >
        About Us
      </Link>
    </li>
    <li>
      <Link 
        to="services" 
        smooth={true} 
        duration={500} 
        className="text-black-700 hover:text-gray-500 cursor-pointer"
      >
        Services
      </Link>
    </li>
    <li>
      <Link 
        to="galery" 
        smooth={true} 
        duration={500} 
        className="text-black-700 hover:text-gray-500 cursor-pointer"
      >
        Galery
      </Link>
    </li>
    <li>
      <Link 
        to="contact" 
        smooth={true} 
        duration={500} 
        className="text-black-700 hover:text-gray-500 cursor-pointer"
      >
        Contact
      </Link>
    </li>
  </ul>
</nav>
      </div>
    </header>
  )
}
