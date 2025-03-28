import React from "react";

const VerificationCard = ({ title, description, buttonText, onClick }) => {
    return (
        <div
            className="p-4 bg-gray-100 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition"
            onClick={onClick}
        >
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
            <button className="text-blue-600 font-medium mt-2">{buttonText}</button>
        </div>
    );
};

export default VerificationCard;
