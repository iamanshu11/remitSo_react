import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TransferSummary from "../components/TransferSummary";
import recipientsData from "../data/recipientsname.json";

const RecipientDetails = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate(); // ✅ Initialize navigate function
    const [recipient, setRecipient] = useState(null);
    const [selectedPurpose, setSelectedPurpose] = useState("");

    useEffect(() => {
        const selectedRecipient = recipientsData.find((r) => r.id === parseInt(id));
        setRecipient(selectedRecipient);
    }, [id]);

    if (!recipient) {
        return <p className="text-center text-gray-500 mt-10">Recipient not found.</p>;
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#001421]">
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            <div className="container mx-auto flex flex-grow relative">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />

                {/* Main Content */}
                <div className="flex-1 p-6 bg-[#002A45] mt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* ✅ Transfer Summary Component */}
                        <TransferSummary recipient={recipient} />

                        {/* ✅ Transfer Purpose Section */}
                        <div className="p-6 bg-[#00374A] rounded-lg shadow-md border">
                            <h2 className="text-xl font-bold text-white mb-4">Transfer Purpose</h2>

                            {/* ✅ Transfer Purpose Dropdown */}
                            <select
                                className="w-full border border-gray-300 rounded p-2 mb-4 bg-transparent text-white appearance-none focus:outline-none focus:border-[#E2FF54]"
                                value={selectedPurpose}
                                onChange={(e) => setSelectedPurpose(e.target.value)}
                            >
                                <option className="text-black" value="">Please select</option>
                                <option className="text-black" value="Family Support">Family Support</option>
                                <option className="text-black" value="Education Fees">Education Fees</option>
                                <option className="text-black" value="Medical Expenses">Medical Expenses</option>
                                <option className="text-black" value="Business Payment">Business Payment</option>
                                <option className="text-black" value="Charity Donation">Charity Donation</option>
                                <option className="text-black" value="Investment">Investment</option>
                            </select>


                            <p className="text-gray-300 text-sm mb-4">
                                Please complete a bank transfer of
                                <span className="text-[#E2FF54] font-bold"> £102.00 </span>
                                to our Dummy Bank Account as detailed below:
                            </p>

                            {/* ✅ Side-by-Side Layout for Account Details */}
                            <div className="text-sm text-white space-y-2">
                                <div className="flex justify-between border-b pb-2">
                                    <p className="font-semibold">Account Name:</p>
                                    <p className="text-right">Dummy Account</p>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <p className="font-semibold">Account Number:</p>
                                    <p className="text-right">7979797979797</p>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <p className="font-semibold">Sort Code:</p>
                                    <p className="text-right">797-797-79</p>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <p className="font-semibold">Payment Reference:</p>
                                    <p className="text-right">123456</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="font-semibold">Amount:</p>
                                    <p className="text-right font-bold">£102.00</p>
                                </div>
                            </div>

                            {/* ✅ Confirm Transfer Button */}
                            <button
                                className="w-full mt-4 bg-[#E2FF54] text-black py-3 rounded-lg hover:bg-[#E2FF54]"
                                disabled={!selectedPurpose} // Disables button if no purpose is selected
                                onClick={() => navigate("/confirm-trans")} // ✅ Navigate to success page
                            >
                                Confirm Transfer
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipientDetails;
