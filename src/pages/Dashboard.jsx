import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [bills, setBills] = useState([]);
  const [totalDue, setTotalDue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchUserData(token);
      fetchUserBills(token);
    }
  }, [navigate]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchUserBills = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/bills", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setBills(data.bills);
      const dueAmount = data.bills
        .filter((bill) => bill.status === "PENDING")
        .reduce((acc, bill) => acc + bill.amount, 0);
      setTotalDue(dueAmount);
    } catch (error) {
      console.error("Error fetching bills:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      {user && <p>Welcome, {user.name}!</p>}

      {/* Billing Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <h3 className="text-xl font-semibold mb-2">Billing Summary</h3>
        <p><strong>Total Due:</strong> ₹{totalDue}</p>
        <p><strong>Last Payment:</strong> ₹{bills.length > 0 ? bills[bills.length - 1].amount : "N/A"}</p>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-4">
        <h3 className="text-xl font-semibold mb-2">Recent Transactions</h3>
        {bills.length > 0 ? (
          <ul>
            {bills.slice(-5).map((bill) => (
              <li key={bill.id} className="border-b p-2">
                {bill.month}: ₹{bill.amount} - {bill.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions available.</p>
        )}
      </div>

      {/* Quick Pay Button */}
      {totalDue > 0 && (
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Pay Now
        </button>
      )}
    </div>
  );
};

export default Dashboard;
