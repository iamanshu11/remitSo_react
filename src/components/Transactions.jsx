import React, { useState, useEffect } from "react";
import transactionsData from "../data/transactions.json"; // Import JSON data

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  // Status color function
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600";
      case "Pending":
        return "text-yellow-600";
      case "Canceled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-[#00374A] p-6 rounded-lg shadow-md w-full">
      <h3 className="text-lg font-semibold mb-4 text-white">Recent Transactions</h3>

      {/* Scrollable container */}
      <div className="overflow-x-auto w-full max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200">
        <table className="w-full md:w-full sm:w-[90%] mx-auto border-collapse">
          <thead>
            <tr className="border-b bg-[#00374A] text-white">
              <th className="p-3 text-xs sm:text-sm text-left">Date</th>
              <th className="hidden md:table-cell p-3 text-xs sm:text-sm text-left">Order ID</th>
              <th className="p-3 text-xs sm:text-sm text-left">Recipient</th>
              <th className="p-3 text-xs sm:text-sm text-left">Amount</th>
              <th className="p-3 text-xs sm:text-sm text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index} className="border-b text-white">
                <td className="p-3 text-xs sm:text-sm">{txn.date}</td>
                <td className="hidden md:table-cell p-3 text-xs sm:text-sm">{txn.orderId}</td>
                <td className="p-3 text-xs sm:text-sm">{txn.recipient}</td>
                <td className="p-3 text-xs sm:text-sm">{txn.amount}</td>
                <td className={`p-3 text-xs sm:text-sm font-semibold ${getStatusColor(txn.status)}`}>
                  {txn.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
