import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { CheckCircle } from "lucide-react";

const SuccessPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-[#001421]">
            {/* Pass toggle function to Header */}
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

            <div className="container mx-auto flex flex-grow relative">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />

                <div className="flex-1 flex flex-col items-center justify-center bg-[#002A45] mt-4 p-6 text-center">
                    <h2 className="text-4xl font-bold text-green-600">Success!</h2>
                    <p className="text-lg text-white font-semibold mt-2">
                        We've received your document for verification
                    </p>
                    <CheckCircle className="w-20 h-20 text-green-600 mt-6" />
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
