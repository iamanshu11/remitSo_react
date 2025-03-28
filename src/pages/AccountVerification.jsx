import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import VerificationCard from "../components/VerificationCard"; // Import the component

const AccountVerification = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = (type) => {
        if (type === "identity") {
            navigate(`/upload-identity`); // Navigate to Upload Identity first
        } else {
            navigate(`/upload/${type}`);
        }
    };
    

    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            <div className="container mx-auto flex flex-grow relative">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
                <div className="flex-1 bg-white p-6">
                    <h2 className="text-2xl font-bold mb-6">Account Verification</h2>

                    {/* ✅ Verification Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <VerificationCard
                            title="Proof of Identity"
                            status="Document not uploaded"
                            buttonText="Upload Proof of Identity"
                            onClick={() => handleCardClick("identity")}
                        />
                        <VerificationCard
                            title="Address Verification"
                            status="Document not uploaded"
                            buttonText="Upload Proof of Address"
                            onClick={() => handleCardClick("address")}
                        />
                        <VerificationCard
                            title="Source Of Funds"
                            status="Document not uploaded"
                            buttonText="Upload Source of Funds"
                            onClick={() => handleCardClick("funds")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountVerification;
