import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="text-xl font-bold text-white">
          <Link to='/'>Task Manager</Link>
        </div>
        <div className="md:flex md:space-x-2 hidden">
          <button className="px-3 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700">
            <Link to='/signup'>Sign Up</Link>
          </button>
          <button className="px-3 py-2 rounded-md text-white bg-green-500 hover:bg-green-700">
            <Link to='/login'>Sign In</Link>
          </button>
        </div>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-gray-800 transition duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <button className="text-white text-xl font-bold p-4 flex items-center justify-start hover:bg-gray-700 focus:outline-none" onClick={toggleMenu}>
          <svg
            className="h-8 w-8 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Task Manager
        </button>
        <button className="px-3 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 mt-4 ml-4" onClick={toggleMenu}>
        <Link to='/signup'>Sign Up</Link>
        </button>
        <button className="px-3 py-2 rounded-md text-white bg-green-500 hover:bg-green-700 mt-4 ml-4" onClick={toggleMenu}>
        <Link to='/login'>Sign In</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
