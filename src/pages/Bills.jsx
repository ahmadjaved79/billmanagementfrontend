import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Bills = () => {
  const [bills, setBills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchUserBills(token);
    }
  }, [navigate]);

  const fetchUserBills = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/bills", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setBills(data.bills);
    } catch (error) {
      console.error("Error fetching bills:", error);
    }
  };

  const handlePayBill = async (billId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bills/pay/${billId}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await response.json();
      if (data.success) {
        alert("Bill paid successfully!");
        fetchUserBills(localStorage.getItem("token"));
      } else {
        alert("Payment failed. Try again.");
      }
    } catch (error) {
      console.error("Error paying bill:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Your Bills</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mt-2">
        {bills.length > 0 ? (
          <ul>
            {bills.map((bill) => (
              <li key={bill.id} className="border-b p-2 flex justify-between items-center">
                <span>{bill.month}: ${bill.amount} - {bill.status}</span>
                {bill.status === "PENDING" && (
                  <button
                    onClick={() => handlePayBill(bill.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Pay Now
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No bills available.</p>
        )}
      </div>
    </div>
  );
};

export default Bills;
