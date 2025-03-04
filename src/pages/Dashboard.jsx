import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [bills, setBills] = useState([]);
  const [totalDue, setTotalDue] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const googleToken = urlParams.get("token");
    const storedToken = localStorage.getItem("token");

    const token = googleToken || storedToken;

    if (token) {
      localStorage.setItem("token", token);
      fetchUserData(token);
      fetchUserBills(token);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Failed to fetch user data");

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

      if (!response.ok) throw new Error("Failed to fetch bills");

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
    <div className="flex h-screen bg-gray-100">
      {/* ✅ Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-64 md:block md:shadow-lg`}
      >
        {/* ✅ Close Button for Mobile */}
        <button
          className="absolute top-4 right-4 text-white text-2xl md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={() => navigate("/view-bills")}>
            💡 View Bills
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={() => navigate("/make-payment")}>
            💳 Make a Payment
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={() => navigate("/transaction-history")}>
            📜 Transaction History
          </li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer" onClick={() => navigate("/profile-settings")}>
            ⚙️ Profile Settings
          </li>
          <li className="hover:bg-red-600 p-2 rounded cursor-pointer" onClick={() => navigate("/login")}>
            🚪 Logout
          </li>
        </ul>
      </div>

      {/* ✅ Main Content */}
      <div className="flex-1 p-6">
        {/* ✅ Sidebar Toggle Button (Mobile - Top Right) */}
        <button
          className={`fixed top-5 left-5 bg-gray-800 text-white px-4 py-2 rounded-md text-2xl md:hidden ${
            isSidebarOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>

        <h2 className="text-3xl font-bold mb-4">Welcome, {user?.name || "User"}!</h2>

        {/* ✅ Billing Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          <h3 className="text-xl font-semibold mb-2">Billing Summary</h3>
          <p><strong>Total Due:</strong> ₹{totalDue}</p>
          <p><strong>Last Payment:</strong> ₹{bills.length > 0 ? bills[bills.length - 1].amount : "N/A"}</p>
        </div>

        {/* ✅ Upcoming Bill Notifications */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md mt-4">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">🔔 Upcoming Bill Reminder</h3>
          <p className="text-gray-700">
            Your next bill is due on <strong>5th May 2024</strong>. Ensure timely payments to avoid late fees.
          </p>
        </div>

        {/* ✅ Electricity Usage Insights */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md mt-4">
          <h3 className="text-xl font-semibold text-green-800 mb-2">📊 Electricity Usage Insights</h3>
          <p className="text-gray-700">
            In the last 3 months, your average electricity consumption has been <strong>320 units</strong>. Try reducing unnecessary usage to save on bills!
          </p>
        </div>

        {/* ✅ Energy Saving Tips */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md mt-4">
          <h3 className="text-xl font-semibold text-yellow-800 mb-2">💡 Energy Saving Tips</h3>
          <ul className="text-gray-700">
            <li>✅ Switch off appliances when not in use.</li>
            <li>✅ Use LED bulbs to save energy.</li>
            <li>✅ Unplug chargers when not needed.</li>
          </ul>
        </div>

        {/* ✅ Pay Now Button */}
        {totalDue > 0 && (
          <button
            onClick={() => navigate("/make-payment")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
          >
            💳 Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
