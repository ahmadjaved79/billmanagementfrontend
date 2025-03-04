import React from "react";

const TransactionHistory = () => {
  // ✅ Static transaction history for showcasing
  const transactions = [
    {
      id: 1,
      date: "2024-03-01",
      amount: 500,
      status: "Paid",
      method: "Credit Card",
      billMonth: "February 2024",
      serviceNumber: "6512304038285",
    },
    {
      id: 2,
      date: "2024-02-01",
      amount: 450,
      status: "Paid",
      method: "UPI",
      billMonth: "January 2024",
      serviceNumber: "6512304038285",
    },
    {
      id: 3,
      date: "2024-01-01",
      amount: 480,
      status: "Paid",
      method: "Net Banking",
      billMonth: "December 2023",
      serviceNumber: "6512304038285",
    },
    {
      id: 4,
      date: "2023-12-01",
      amount: 520,
      status: "Failed",
      method: "Debit Card",
      billMonth: "November 2023",
      serviceNumber: "6512304038285",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Transaction History</h2>

      {/* ✅ Responsive Table for Mobile & Laptop */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Bill Month</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Amount (₹)</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Payment Method</th>
              <th className="border border-gray-300 px-4 py-2">Service No.</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{transaction.billMonth}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.date}</td>
                <td className="border border-gray-300 px-4 py-2">₹{transaction.amount}</td>
                <td
                  className={`border border-gray-300 px-4 py-2 font-semibold ${
                    transaction.status === "Paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {transaction.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">{transaction.method}</td>
                <td className="border border-gray-300 px-4 py-2">{transaction.serviceNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mobile-Friendly List View */}
      <div className="md:hidden mt-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="bg-white p-4 shadow-md rounded-lg mb-4">
            <p><strong>📅 Bill Month:</strong> {transaction.billMonth}</p>
            <p><strong>📆 Date:</strong> {transaction.date}</p>
            <p><strong>💰 Amount:</strong> ₹{transaction.amount}</p>
            <p>
              <strong>✅ Status:</strong>{" "}
              <span className={transaction.status === "Paid" ? "text-green-600" : "text-red-600"}>
                {transaction.status}
              </span>
            </p>
            <p><strong>💳 Payment Method:</strong> {transaction.method}</p>
            <p><strong>🔢 Service No.:</strong> {transaction.serviceNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
