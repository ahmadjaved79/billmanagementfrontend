import React, { useState } from "react";

const Payment = () => {
  const [amount, setAmount] = useState(100); // Default amount in INR

  const handlePayment = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const { order } = await response.json();

      const options = {
        key: "your_razorpay_key_id",
        amount: order.amount,
        currency: "INR",
        name: "Electricity Bill Payment",
        description: "Secure Payment",
        order_id: order.id,
        handler: async (response) => {
          const verifyRes = await fetch("http://localhost:5000/api/payments/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(response),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            alert("Payment Successful!");
          } else {
            alert("Payment Verification Failed!");
          }
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Pay Your Bill</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mb-4"
      />
      <button
        onClick={handlePayment}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
