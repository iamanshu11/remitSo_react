import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import img1 from "../assets/img-1.png";
import img2 from "../assets/img-2.png";
import img3 from "../assets/img-3.png";

const UploadPassport = ({ documentType }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [frontFile, setFrontFile] = useState(null);
    const [backFile, setBackFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e, setFile) => {
        setFile(e.target.files[0]);
    };

    const handleVerifyClick = () => {
        navigate("/success");
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB]">
            <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            <div className="container mx-auto flex flex-grow relative">
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />

                <div className="flex-1 bg-white p-6 mt-4">
                    <h2 className="text-2xl font-bold mb-2">Upload {documentType}</h2>
                    <p className="text-gray-600 mb-6">
                        We may also need the back of the document. If there is information on both sides, please make sure you upload both.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-6">
                            <div className="border rounded-lg p-6 text-center bg-gray-100">
                                <p className="text-lg font-semibold mb-2">Document Front</p>
                                <label className="mt-2 inline-block bg-purple-600 text-white px-4 py-2 rounded cursor-pointer">
                                    Browse
                                    <input type="file" accept="image/*,application/pdf" className="hidden" onChange={(e) => handleFileChange(e, setFrontFile)} />
                                </label>
                                {frontFile && <p className="text-sm text-gray-700 mt-2">{frontFile.name}</p>}
                                <p className="text-xs text-gray-500 mt-1">Only image or PDF files, less than 8MB</p>
                            </div>

                            <div className="border rounded-lg p-6 text-center bg-gray-100">
                                <p className="text-lg font-semibold mb-2">Document Back</p>
                                <label className="mt-2 inline-block bg-purple-600 text-white px-4 py-2 rounded cursor-pointer">
                                    Browse
                                    <input type="file" accept="image/*,application/pdf" className="hidden" onChange={(e) => handleFileChange(e, setBackFile)} />
                                </label>
                                {backFile && <p className="text-sm text-gray-700 mt-2">{backFile.name}</p>}
                                <p className="text-xs text-gray-500 mt-1">Only image or PDF files, less than 8MB</p>
                            </div>
                        </div>

                        <div className="border rounded-lg p-6 bg-gray-100">
                            <h3 className="text-lg font-semibold mb-2">Guidelines</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>✅ Ensure you are in a well-lit environment.</li>
                                <li>✅ Upload a clear photograph of the ID.</li>
                                <li>✅ Provide both front and back if applicable.</li>
                                <li>✅ Ensure all corners of the document are visible.</li>
                            </ul>

                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <div className="text-center">
                                    <img src={img1} alt="Clear and readable document" className="mx-auto w-16 h-16" />
                                    <p className="text-xs text-gray-600 mt-1">Bright and clear, easy to read</p>
                                </div>
                                <div className="text-center">
                                    <img src={img2} alt="All corners visible" className="mx-auto w-16 h-16" />
                                    <p className="text-xs text-gray-600 mt-1">All corners of the document should be visible</p>
                                </div>
                                <div className="text-center">
                                    <img src={img3} alt="Document should be large" className="mx-auto w-16 h-16" />
                                    <p className="text-xs text-gray-600 mt-1">Document should occupy most of the picture</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <input type="text" placeholder="Country of Issue" className="border rounded p-2 w-full" />
                        <input type="text" placeholder="Place of Issue" className="border rounded p-2 w-full" />
                        <input type="text" placeholder="Document No." className="border rounded p-2 w-full" />
                        <input type="text" placeholder="Issuer" className="border rounded p-2 w-full" />
                        <input type="date" className="border rounded p-2 w-full" placeholder="Issue Date" />
                        <input type="date" className="border rounded p-2 w-full" placeholder="Expiry Date" />
                    </div>

                    <div className="flex justify-between mt-6">
                        <button className="border px-4 py-2 rounded" onClick={() => navigate("/account-verification")}>Back</button>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded" onClick={handleVerifyClick}>Verify</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadPassport;
