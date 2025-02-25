import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

// Navbar Component with Authentication Handling
const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-3" />
          <div className="text-white text-2xl font-bold">Electricity Management</div>
        </div>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="text-white hover:text-gray-300 transition duration-200">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-300 transition duration-200">About Us</a></li>
          <li><a href="#bill-management" className="text-white hover:text-gray-300 transition duration-200">Bill Management</a></li>
          <li><a href="#mission-vision" className="text-white hover:text-gray-300 transition duration-200">Mission & Vision</a></li>
          <li><a href="#faq" className="text-white hover:text-gray-300 transition duration-200">FAQ</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300 transition duration-200">Contact Us</a></li>
        </ul>
        <div>
          <Link to="/login" className="bg-white text-blue-600 py-2 px-4 rounded mr-4 hover:bg-gray-200 transition duration-300">Login</Link>
          <Link to="/register" className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition duration-300">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;