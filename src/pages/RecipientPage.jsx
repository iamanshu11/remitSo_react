import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import recipientsData from "../data/recipientsname.json";

const RecipientPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [recipients, setRecipients] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setRecipients(recipientsData);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-[#001421]">
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            <div className="container mx-auto flex flex-grow relative">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
                <div className="flex-1 p-6 bg-[#002A45] mt-4">
                    <header className="p-4 mb-6">
                        <h1 className="text-xl font-bold text-purple-700">Add Recipient</h1>
                    </header>

                    {/* New Recipient Card */}
                    <div
                        className="max-w-sm border-2 border-dashed border-[#E2FF54] p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer"
                        onClick={() => navigate("#")}
                    >
                        <FaPlus className="text-[#E2FF54] text-2xl" />
                        <p className="font-bold mt-2 text-white">New Recipient</p>
                        <p className="text-gray-300 text-sm">Create a New Recipient</p>
                    </div>

                    {/* Recipient List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                        {recipients.length > 0 ? (
                            recipients.map((recipient) => (
                                <div
                                    key={recipient.id}
                                    className="bg-[#00374A] text-white p-4 rounded-lg flex items-center cursor-pointer hover:bg-[#00374A]"
                                    onClick={() => navigate(`/recipient-details/${recipient.id}`)} 
                                >
                                    <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full font-bold mr-3">
                                        {recipient.initials}
                                    </div>
                                    <div>
                                        <p className="font-bold">{recipient.name}</p>
                                        <p className="text-sm">{recipient.method}</p>
                                    </div>
                                    <img src={recipient.flag} alt="Flag" className="w-6 h-6 ml-auto" />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center col-span-3">No recipients found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipientPage;
