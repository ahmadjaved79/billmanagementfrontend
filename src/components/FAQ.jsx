import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I pay my electricity bills online?',
      answer: 'You can pay your electricity bills online through our platform by signing up, adding your bill details, and making a payment using our secure payment gateway.',
    },
    {
      question: 'Can I view my past bill history?',
      answer: 'Yes, our platform allows you to view your past bill history and get detailed insights into your electricity usage and payments.',
    },
    {
      question: 'Is my information secure?',
      answer: 'We take security seriously and use the latest encryption technologies to ensure your information is safe and secure.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-coffee-100" data-aos="fade-up">
      <div className="container mx-auto shadow-lg p-6 rounded-lg bg-white">
        <h2 className="text-4xl font-bold mb-10 text-center" style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div 
                className="flex justify-between items-center cursor-pointer transition-transform transform hover:scale-105" 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold" style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>{faq.question}</h3>
                <span className="transform transition-transform">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>
              <div className={`mt-4 text-lg transition-max-height duration-500 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`} style={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;