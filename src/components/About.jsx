import React from 'react';
import aboutImage from '../assets/about-image.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center shadow-lg p-6 rounded-lg bg-white" data-aos="fade-up">
        <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
          <img 
            src={aboutImage} 
            alt="About Us" 
            className="w-full rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 md:pl-10" data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-4 transition-transform transform hover:scale-105 hover:text-blue-700">About Us</h2>
          <p className="text-lg mb-4 transition-transform transform hover:scale-105 hover:text-blue-700">We are dedicated to providing the best electricity management services. With years of experience in the industry, we understand the need for efficient and reliable solutions to manage your electricity bills.</p>
          <p className="text-lg mb-4 transition-transform transform hover:scale-105 hover:text-blue-700">Our platform offers a comprehensive suite of tools to help you monitor your electricity usage, view detailed reports, and make secure online payments. We aim to simplify your life by providing a centralized solution for all your electricity management needs.</p>
          <p className="text-lg mb-4 transition-transform transform hover:scale-105 hover:text-blue-700">Join us and experience the convenience and efficiency of our platform. We are here to support you every step of the way.</p>
        </div>
      </div>
    </section>
  );
};

export default About;