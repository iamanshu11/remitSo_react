import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { CheckCircle } from "lucide-react";

const ConfirmTrans = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const timelineSteps = [
        { status: "Payment Pending", description: "We are waiting for you to complete payment.", active: true },
        { status: "Payment Cleared", description: "We've received your payment.", active: false },
        { status: "Documents Uploaded", description: "All required documents have been received.", active: false },
        { status: "Documents Verified", description: "Your documents have been verified, processing will complete soon.", active: false },
        { status: "Payout in Progress", description: "Payout is in progress.", active: false },
        { status: "Paid out", description: "Order has been successfully paid out.", active: false }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#001421]">
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            <div className="container mx-auto flex flex-grow relative">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
                <div className="flex-1 flex bg-[#002A45] items-center justify-center p-6 mt-4">
                    <div className="bg-[#002A45] p-8  text-center max-w-md">
                        <h2 className="text-4xl font-bold text-green-600">Success!</h2>
                        <p className="mt-2 text-white font-semibold">We've received your transfer <span className="font-bold text-[#E2FF54]">#241231001</span></p>
                        {/* <div className="mt-6 space-y-4 text-left">
                            {timelineSteps.map((step, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className={`w-2.5 h-2.5 rounded-full mt-1 ${step.active ? "bg-yellow-500" : "bg-gray-100"}`}></div>
                                    <div>
                                        <p className={`font-semibold ${step.active ? "text-yellow-500" : "text-gray-100"}`}>{step.status}</p>
                                        <p className="text-gray-300 text-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}

                        <div className="flex justify-center items-center mt-6">
                            <CheckCircle className="w-20 h-20 text-green-600" />
                        </div>

                        <button
                            className="mt-6 bg-[#E2FF54] text-black px-6 py-2 rounded-lg hover:bg-[#E2FF54]"
                            onClick={() => navigate("/account-verification")}
                        >
                            Go to Account Verification
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmTrans;
