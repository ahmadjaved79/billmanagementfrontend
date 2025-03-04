import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ State to toggle menu

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* ✅ Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-3" />
          <div className="text-white text-2xl font-bold">Electricity Management</div>
        </div>

        {/* ✅ Desktop Menu (Top Menu for Large Screens) */}
        <ul className="hidden md:flex space-x-4">
          <li><a href="#hero" className="text-white hover:text-gray-300 transition duration-200">Home</a></li>
          <li><a href="#about" className="text-white hover:text-gray-300 transition duration-200">About Us</a></li>
          <li><a href="#bill-management" className="text-white hover:text-gray-300 transition duration-200">Bill Management</a></li>
          <li><a href="#mission-vision" className="text-white hover:text-gray-300 transition duration-200">Mission & Vision</a></li>
          <li><a href="#faq" className="text-white hover:text-gray-300 transition duration-200">FAQ</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300 transition duration-200">Contact Us</a></li>
        </ul>

        {/* ✅ Auth Buttons (Visible on Large Screens) */}
        <div className="hidden md:flex">
          <Link to="/login" className="bg-white text-blue-600 py-2 px-4 rounded mr-4 hover:bg-gray-200 transition duration-300">
            Login
          </Link>
          <Link to="/register" className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
            Register
          </Link>
        </div>

        {/* ✅ Mobile Menu Toggle Button */}
        <button
          className={`md:hidden text-white text-2xl ${isMenuOpen ? "hidden" : "block"}`}
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Menu (Hidden by Default, Slides from Left) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden shadow-lg z-50`}
      >
        {/* ✅ Close Button for Mobile */}
        <button className="absolute top-4 right-4 text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
          ✖
        </button>

        {/* ✅ Mobile Menu Items */}
        <ul className="space-y-4 mt-8">
          <li><a href="#hero" className="block p-2 hover:bg-gray-700 rounded">Home</a></li>
          <li><a href="#about" className="block p-2 hover:bg-gray-700 rounded">About Us</a></li>
          <li><a href="#bill-management" className="block p-2 hover:bg-gray-700 rounded">Bill Management</a></li>
          <li><a href="#mission-vision" className="block p-2 hover:bg-gray-700 rounded">Mission & Vision</a></li>
          <li><a href="#faq" className="block p-2 hover:bg-gray-700 rounded">FAQ</a></li>
          <li><a href="#contact" className="block p-2 hover:bg-gray-700 rounded">Contact Us</a></li>
        </ul>

        {/* ✅ Mobile Auth Buttons */}
        <div className="mt-6">
          <Link to="/login" className="block bg-white text-blue-600 py-2 px-4 rounded text-center mb-3 hover:bg-gray-200 transition duration-300">
            Login
          </Link>
          <Link to="/register" className="block bg-white text-blue-600 py-2 px-4 rounded text-center hover:bg-gray-200 transition duration-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
