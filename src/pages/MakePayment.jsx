import React from "react";
import { useNavigate } from "react-router-dom";
import paymentImage from "../assets/payment-success.webp"; // ✅ Add an image in your assets folder

const MakePayment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // ✅ Redirect user to BillDesk payment portal
    const paymentUrl = `https://payments.billdesk.com/MercOnline/CPDCLAPPGController`;
    window.location.href = paymentUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        
        {/* ✅ Payment Image */}
        <img src={paymentImage} alt="Make Payment" className="w-32 mx-auto mb-4" />

        {/* ✅ Payment Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Secure Electricity Bill Payment</h2>
        <p className="text-gray-600 mb-4">
          Pay your bills online with our **secure & fast** payment system.
        </p>

        {/* ✅ Payment Features */}
        <ul className="text-left text-gray-700 mb-4">
          <li className="flex items-center mb-2">✅ 100% Secure Payments</li>
          <li className="flex items-center mb-2">✅ Instant Bill Updates</li>
          <li className="flex items-center mb-2">✅ Multiple Payment Methods (UPI, Debit/Credit, Net Banking)</li>
        </ul>

        {/* ✅ Pay Now Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
        >
          💳 Pay Now
        </button>

        {/* ✅ Back to Dashboard */}
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full mt-2 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-all duration-200"
        >
          🔙 Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default MakePayment;
