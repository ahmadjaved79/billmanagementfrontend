import React from 'react';
import { Link } from "react-router-dom";
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="hero" className="bg-blue-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center shadow-lg p-6 rounded-lg bg-white" data-aos="fade-up">
        <div className="md:w-1/2" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-transform transform hover:scale-105 hover:text-blue-700">Manage Your Electricity Bills Effortlessly</h1>
          <p className="text-lg mb-4 transition-transform transform hover:scale-105 hover:text-blue-700">Our platform provides a seamless way to handle all your electricity bills in one place. Save time and stay organized with our comprehensive management tools.</p>
          <p className="text-lg mb-4 transition-transform transform hover:scale-105 hover:text-blue-700">With our user-friendly interface, you can easily track your electricity usage, view past bills, and make payments online securely. Stay on top of your expenses and never miss a payment again.</p>
          <Link to="/login" className="bg-blue-600 text-white-900 py-2 px-4 rounded mr-4 hover:bg-blue-200 text-white-900 transition duration-600">Get Started</Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
          <img src={heroImage} alt="Electricity Management" className="w-full rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;