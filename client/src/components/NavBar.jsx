//import React from "react"
//
//const Navbar = () => {
//  return (
//    <nav className="bg-black bg-opacity-50 p-4">
//      <div className="container mx-auto flex justify-between items-center">
//        <div className="text-2xl font-bold">HackEclipse</div>
//        <ul className="hidden md:flex space-x-4">
//          <li>
//            <a href="#home" className="hover:text-sky-300">
//              Home
//            </a>
//          </li>
//          <li>
//            <a href="#about" className="hover:text-sky-300">
//              About Hackathon
//            </a>
//          </li>
//          <li>
//            <a href="#sponsors" className="hover:text-sky-300">
//              Sponsors
//            </a>
//          </li>
//          <li>
//            <a href="#team" className="hover:text-sky-300">
//              Team
//            </a>
//          </li>
//          <li>
//            <a href="#contact" className="hover:text-sky-300">
//              Contact Us
//            </a>
//          </li>
//        </ul>
//        <div className="md:hidden">
//          <button className="text-white">
//            <svg
//              className="w-6 h-6"
//              fill="none"
//              stroke="currentColor"
//              viewBox="0 0 24 24"
//              xmlns="http://www.w3.org/2000/svg"
//            >
//              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//            </svg>
//          </button>
//        </div>
//      </div>
//    </nav>
//  )
//}
//
//export default Navbar

// components/Navbar.jsx
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-bold flex items-center">
          <span className="transform -translate-y-0.5">HackEclipse</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {['HOME', 'ABOUT', 'SPONSORS', 'FAQ', 'CONTACT'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-white text-sm font-medium hover:text-purple-300 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 right-0 left-0 z-50 bg-black bg-opacity-90 md:hidden">
          <div className="flex flex-col items-center py-4">
            {['HOME', 'ABOUT', 'SERVICES', 'WORK', 'CONTACT'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-white text-sm font-medium py-2 hover:text-purple-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Side Navigation Dots */}
      <div className="hidden lg:flex fixed right-6 top-1/2 transform -translate-y-1/2 flex-col space-y-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <a 
            key={i} 
            href={`#section-${i}`} 
            className="w-2 h-2 rounded-full bg-white hover:bg-purple-300 transition-colors"
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;