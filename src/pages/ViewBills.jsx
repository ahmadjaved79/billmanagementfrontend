import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewBills = () => {
  const [bills, setBills] = useState([]);


  useEffect(() => {
    fetchBills();
  }, []);

   const navigate = useNavigate();
  const fetchBills = async () => {
    try {
      // ✅ Simulating Static Bill Data for Project Showcasing
      const staticBills = [
        { id: 1, month: "March 2024", amount: 500, status: "PAID" },
        { id: 2, month: "February 2024", amount: 450, status: "PAID" },
        { id: 3, month: "January 2024", amount: 480, status: "PENDING" },
        { id: 4, month: "December 2023", amount: 520, status: "PENDING" },
      ];

      setBills(staticBills);
    } catch (error) {
      console.error("Error fetching bills:", error);
    }
  };

  const handleDownloadInvoice = (bill) => {
    const invoiceContent = `
      Electricity Bill Invoice
      ------------------------
      Month: ${bill.month}
      Amount: ₹${bill.amount}
      Status: ${bill.status}
      Date: ${new Date().toLocaleDateString()}
      ------------------------
      Thank you for using our service!
    `;

    const blob = new Blob([invoiceContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Invoice_${bill.month}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">💡 Your Electricity Bills</h2>

      {bills.length === 0 ? (
        <p className="text-center text-gray-600">No bills available.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bills.map((bill) => (
            <div key={bill.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-700">🗓️ {bill.month}</h3>
              <p className="text-gray-600">
                <strong>Amount:</strong> ₹{bill.amount}
              </p>
              <p
                className={`text-sm font-semibold mt-2 ${
                  bill.status === "PAID" ? "text-green-600" : "text-red-600"
                }`}
              >
                {bill.status === "PAID" ? "🟢 PAID" : "🔴 PENDING"}
              </p>

              {/* ✅ Download Invoice Button */}
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                onClick={() => handleDownloadInvoice(bill)}
              >
                📄 Download Invoice
              </button>

              {/* ✅ Pay Now Button (Only for Pending Bills) */}
              {bill.status === "PENDING" && (
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  onClick={() => navigate("/make-payment")}
                >
                  💳 Pay Now
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewBills;
