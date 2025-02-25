import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    ).then((response) => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      setIsLoading(false);
      setError('Failed to send the message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-coffee-100" data-aos="fade-up">
      <div className="container mx-auto text-center shadow-lg p-6 rounded-lg bg-white">
        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>Contact Us</h2>
        <p className="text-lg mb-4" style={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>Have any questions or need support? Get in touch with us, and our team will be happy to assist you.</p>
        {isSubmitted ? (
          <p className="text-lg mb-4 text-green-600">Thank you for your message! We will get back to you soon.</p>
        ) : (
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded transition-transform transform hover:scale-105"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded transition-transform transform hover:scale-105"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded transition-transform transform hover:scale-105"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
            {error && <p className="text-red-600 mt-4">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;