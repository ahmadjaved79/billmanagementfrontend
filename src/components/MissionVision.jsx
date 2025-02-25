import React from 'react';
import missionImage from '../assets/mission.png';
import visionImage from '../assets/vision.jpg';

const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10" data-aos="fade-up">Our Mission & Vision</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="group" data-aos="fade-right">
            <img 
              src={missionImage} 
              alt="Our Mission" 
              className="w-full rounded mb-4 shadow-lg transition-transform transform group-hover:scale-105 group-hover:rotate-2"
            />
            <h3 className="text-2xl font-semibold mb-2 transition-transform transform group-hover:translate-x-2">Our Mission</h3>
            <p className="text-lg mb-4 transition-transform transform group-hover:translate-x-2">Our mission is to provide an efficient and user-friendly platform for managing electricity bills.</p>
          </div>
          
          <div className="group" data-aos="fade-left">
            <img 
              src={visionImage} 
              alt="Our Vision" 
              className="w-full rounded mb-4 shadow-lg transition-transform transform group-hover:scale-105 group-hover:-rotate-2"
            />
            <h3 className="text-2xl font-semibold mb-2 transition-transform transform group-hover:translate-x-2">Our Vision</h3>
            <p className="text-lg mb-4 transition-transform transform group-hover:translate-x-2">Our vision is to be the leading provider of electricity management solutions, helping users save time and stay organized.</p>
          </div>
        </div>

        <button className="mt-10 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300" data-aos="zoom-in">Learn More</button>
      </div>
    </section>
  );
};

export default MissionVision;