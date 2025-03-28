import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SendMoneyCalculator from "../components/SendMoneyCalculator";
import TransferSummary from "../components/TransferSummary";


const SendMoney = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [deliveryMethod, setDeliveryMethod] = useState("Account Transfer");
    const [paymentMethod, setPaymentMethod] = useState("Credit card / Debit card");
    const navigate = useNavigate(); // ✅ Initialize navigation

    return (
        <div className="flex flex-col min-h-screen bg-[#001421]">
            {/* Header */}
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

            {/* Main Container */}
            <div className="container mx-auto flex flex-grow relative">
                {/* Sidebar */}
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />

                {/* Main Content */}
                <div className="flex flex-col flex-grow p-4 bg-[#002A45] mt-4 rounded-lg">
                    {/* Welcome Section */}
                    <div className="mb-6 p-6">
                        <h1 className="text-4xl font-bold text-white mb-4">Send Money</h1>
                        <p className="text-gray-300">Secure and fast money transfers</p>
                    </div>

                    {/* Calculator & Payment Methods Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <SendMoneyCalculator />
                        </div>

                        <div className="space-y-6">
                            {/* Delivery Method */}
                            <div>
                                <label className="block text-white font-medium mb-2">
                                    Delivery Method for Your Funds
                                </label>
                                <select
                                    value={deliveryMethod}
                                    onChange={(e) => setDeliveryMethod(e.target.value)}
                                    className="w-full p-3 border rounded-md bg-gray-50"
                                >
                                    <option>Account Transfer</option>
                                    <option>Mobile Wallet</option>
                                    <option>Cash Pickup</option>
                                </select>
                            </div>

                            {/* Payment Method */}
                            <div>
                                <label className="block text-white font-medium mb-2">
                                    Select Your Payment Method
                                </label>
                                <select
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="w-full p-3 border rounded-md bg-gray-50"
                                >
                                    <option>Credit card / Debit card</option>
                                    <option>Bank Transfer</option>
                                    <option>PayPal</option>
                                </select>
                            </div>

                            {/* Next Button */}
                            <button 
                                className="w-full bg-[#E2FF54] text-black py-3 rounded-md text-lg font-semibold hover:bg-[#E2FF54] transition"
                                onClick={() => navigate("/your-recipients")} // ✅ Navigate on Click
                            >
                                Next
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 w-full">
                    <TransferSummary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoney;
