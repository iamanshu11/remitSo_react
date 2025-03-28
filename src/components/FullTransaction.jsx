import React, { useState, useEffect } from "react";
import transactionsData from "../data/fulltransaction.json"; // Import JSON data

const FullTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 15;

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Canceled":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  return (
    <div className="bg-[#00374A] p-6 rounded-lg shadow-md w-full">
      <div className="overflow-x-auto w-full overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200">
        <table className="w-full border-collapse">
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
            {currentTransactions.map((txn, index) => (
              <tr key={index} className="border-b text-white">
                <td className="p-3 text-xs sm:text-sm">{txn.date}</td>
                <td className="hidden md:table-cell p-3 text-xs sm:text-sm">{txn.orderId}</td>
                <td className="p-3 text-xs sm:text-sm">{txn.recipient}</td>
                <td className="p-3 text-xs sm:text-sm">{txn.amount}</td>
                <td className={`p-3 text-xs sm:text-sm font-semibold rounded-4 px-2 ${getStatusColor(txn.status)}`}>
                  {txn.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 text-sm rounded-md ${currentPage === i + 1 ? "bg-[#E2FF54] text-black" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FullTransaction;