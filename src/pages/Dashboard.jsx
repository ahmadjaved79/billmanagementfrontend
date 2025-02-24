import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [bills, setBills] = useState([]);
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
    } catch (error) {
      console.error("Error fetching bills:", error);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      {user && <p>Welcome, {user.name}!</p>}
      <h3 className="text-2xl font-semibold mt-4">Your Bills</h3>
      <div className="bg-white p-4 rounded-lg shadow-md mt-2">
        {bills.length > 0 ? (
          <ul>
            {bills.map((bill) => (
              <li key={bill.id} className="border-b p-2">
                {bill.month}: ${bill.amount} - {bill.status}
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

export default Dashboard;
