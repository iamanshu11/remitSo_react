import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TransferSummary = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-[#00374A] text-white rounded-xl p-6 w-full  mx-auto">
      <h2 className="text-lg font-semibold mb-4">Transfer Summary</h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between border-b border-white pb-2">
          <span>Amount sending</span>
          <span>£ 100.00</span>
        </div>
        <div className="flex justify-between border-b border-white pb-2">
          <span>Our exchange rate</span>
          <span>GBP = 20 GHS</span>
        </div>
        <div className="flex justify-between border-b border-white pb-2">
          <span>Recipient receives</span>
          <span>₵ 2,000.00</span>
        </div>
        <div className="flex justify-between border-b border-white pb-2">
          <span>Delivery method</span>
          <span>Account Transfer</span>
        </div>
        <div className="flex justify-between border-b border-white pb-2">
          <span>Fees</span>
          <span>£ 0.00</span>
        </div>
        <div className="flex justify-between border-b border-white pb-2">
          <span>Payment option</span>
          <span>Local Bank Transfer</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total to pay</span>
          <span>£ 100.00</span>
        </div>
      </div>
    </div>
  );
};

export default TransferSummary;
