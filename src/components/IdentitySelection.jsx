import React from "react";
import { useNavigate } from "react-router-dom";

const IdentitySelection = () => {
    const navigate = useNavigate();

    const identityOptions = [
        { label: "Passport", path: "/upload-passport" },
        { label: "Driver's license", path: "/upload-drivers-license" },
        { label: "National ID", path: "/upload-national-id" }
    ];

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Account Verification &gt; Upload Proof of Identity</h2>
            <p className="text-gray-600 mb-4">To comply with financial regulations, we are required to verify your identity.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {identityOptions.map((option, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-6 rounded-lg shadow cursor-pointer hover:bg-gray-200"
                        onClick={() => navigate(option.path)}
                    >
                        <h3 className="text-lg font-semibold mb-2">{option.label}</h3>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded">Select</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IdentitySelection;