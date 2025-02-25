import React from 'react';
import billManagementImage from '../assets/bill-management-image.png';

const BillManagement = () => {
  return (
    <section id="bill-management" className="py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center shadow-lg p-6 rounded-lg bg-white" data-aos="fade-up">
        <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
          <img 
            src={billManagementImage} 
            alt="Bill Management" 
            className="w-3/4 rounded shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          />
        </div>
        <div className="md:w-1/2 md:pl-10" data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-4 transition-transform transform hover:scale-105 hover:text-green-700" style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>Electricity Bill Management</h2>
          <p className="text-lg mb-4 transition-transform transform hover:scale-105 hover:text-green-700" style={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>Our platform allows you to track, manage, and pay your electricity bills with ease. Get detailed insights into your electricity usage and payment history.</p>
          <p className="text-lg mb-4 transition-transform transform hover:scale-105 hover:text-green-700" style={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>Unique Features:</p>
          <ul className="list-disc list-inside text-left text-lg mb-4 transition-transform transform hover:scale-105 hover:text-green-700" style={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>
            <li>Real-time usage tracking</li>
            <li>Automated bill reminders</li>
            <li>Secure online payments</li>
            <li>Detailed usage analytics</li>
            <li>Downloadable billing history</li>
          </ul>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md" style={{ fontFamily: 'Roboto, sans-serif' }}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default BillManagement;