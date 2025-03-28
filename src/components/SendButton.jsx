import React from "react";
import { useNavigate } from "react-router-dom";

const SendButton = ({ label = "Send", navigateTo = "/login" }) => {
  const navigate = useNavigate();

  return (
    <button
      className="w-full bg-purple-600 text-white py-3 mt-6 rounded-lg hover:bg-purple-700"
      onClick={() => navigate(navigateTo)}
    >
      {label}
    </button>
  );
};

export default SendButton;
