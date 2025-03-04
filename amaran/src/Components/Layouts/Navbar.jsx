import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-0.1 p-4 flex justify-between items-center">
      {/* First Column: Logo */}
      <div className="flex-shrink-0">
        <img src="path/to/logo.png" alt="Logo" className="h-8" />
      </div>
      {/* Hamburger Icon */}
      <div className="block lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      {/* Second Column: Navigation Menu */}
      <div className="hidden lg:flex lg:flex-row space-x-4 justify-items-start">
        <a href="/" className="text-white">Home</a>
        <a href="/aboutus" className="text-white">About Us</a>
        <div className="relative group">
          <button className="text-white">Our Services</button>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2">
            <a href="#" className="block px-4 py-2">Service 1</a>
            <a href="#" className="block px-4 py-2">Service 2</a>
          </div>
        </div>
        <div className="relative group">
          <button className="text-white">Conditions</button>
          <div className="absolute hidden group-hover:block bg-white text-black mt-2">
            <a href="#" className="block px-4 py-2">Condition 1</a>
            <a href="#" className="block px-4 py-2">Condition 2</a>
          </div>
        </div>
        <a href="beforeandafter" className="text-white">Before and After</a>
      </div>
      {/* Third Column: Search Icon, Appointment Button, Offers Button */}
      <div className="hidden lg:flex lg:flex-row space-x-4">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Appointment</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Offers</button>
      </div>
      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center p-4">
          <button onClick={() => setIsMenuOpen(false)} className="self-end text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col items-center space-y-4 mt-4">
            <button className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Appointment</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Offers</button>
          </div>
          <div className="flex flex-col items-center space-y-4 mt-4">
            <a href="#" className="text-black">Home</a>
            <a href="#" className="text-black">About Us</a>
            <div className="relative group">
              <button className="text-black">Our Services</button>
              <div className="absolute hidden group-hover:block bg-white text-black mt-2">
                <a href="#" className="block px-4 py-2">Service 1</a>
                <a href="#" className="block px-4 py-2">Service 2</a>
              </div>
            </div>
            <div className="relative group">
              <button className="text-black">Conditions</button>
              <div className="absolute hidden group-hover:block bg-white text-black mt-2">
                <a href="#" className="block px-4 py-2">Condition 1</a>
                <a href="#" className="block px-4 py-2">Condition 2</a>
              </div>
            </div>
            <a href="#" className="text-black">Before and After</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;