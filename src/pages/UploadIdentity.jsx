import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const UploadIdentity = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const documentTypes = [
        { name: "Passport" },
        { name: "Driver's license" },
        { name: "National ID" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#001421]">
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            <div className="container mx-auto flex flex-grow relative">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} activePage="account-verification" />
                
                <div className="flex-1 bg-[#002A45] p-6 mt-4">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Account Verification &gt; Upload Proof of Identity
                    </h2>
                    <p className="text-gray-300 mb-6">
                        To comply with financial regulations, we are required to verify your identity.
                    </p>

                    {/* Center the text & button inside each card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {documentTypes.map((doc, index) => (
                            <div
                                key={index}
                                className="bg-[#00374A] p-6 rounded-lg shadow cursor-pointer  transition flex flex-col items-center justify-center text-center h-32"
                                onClick={() => navigate(`/upload/${doc.name.toLowerCase().replace("'", "").replace(" ", "-")}`)}
                            >
                                <h3 className="text-lg text-white font-semibold mb-3">{doc.name}</h3>
                                <button className="bg-[#E2FF54] text-black  px-4 py-2 rounded">
                                    Select
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadIdentity;
