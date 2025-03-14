import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-10 p-4 flex justify-between items-center">
      {/* First Column: Logo */}
      <div className="flex-shrink-0">
        <img src="path/to/logo.png" alt="Logo" className="h-8" />
      </div>
      {/* Second Column: Navigation Menu */}
      <div className="flex space-x-4">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">About Us</a>
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
        <a href="#" className="text-white">Before and After</a>
      </div>
      {/* Third Column: Search Icon, Appointment Button, Offers Button */}
      <div className="flex space-x-4">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Appointment</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Offers</button>
      </div>
    </nav>
  );
}

export default Navbar;