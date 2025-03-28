import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/factor-auth.png"; // Update with the correct image path
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const EnterPin = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState(Array(12).fill(""));
  const inputRefs = useRef([]);
  const [arrowPosition, setArrowPosition] = useState("autoFill");

  // Check if all PIN fields are filled
  const isFormComplete = pin.every((digit) => digit !== "");

  // Handle input change
  const handleChange = (index, value) => {
    if (/\d/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Move to next input
      if (index < pin.length - 1 && value) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle backspace key
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newPin = [...pin];
      if (newPin[index]) {
        newPin[index] = "";
      } else if (index > 0) {
        newPin[index - 1] = "";
        inputRefs.current[index - 1].focus();
      }
      setPin(newPin);
    }
  };

  // Auto Fill Function
  const handleAutoFill = () => {
    setPin(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2"]); // Example PIN
    setArrowPosition("continue"); // Move arrow to the button
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 bg-[#001421] flex justify-center items-center p-8 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 right-6 px-4 py-2 bg-[#E2FF54] shadow-md rounded-full text-black hover:bg-[#E2FF54]"
        >
          ← Back
        </button>

        <div className="max-w-md w-full">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-6 mb-6" />

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-2 text-white">2-Factor Authentication</h2>
          <p className="text-gray-500 text-sm mb-6 text-white">
            Pin and Password are like a toothbrush, don’t let anyone else use it.
          </p>

          {/* PIN Inputs */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2 text-white">New PIN</label>
              <div className="flex gap-2 flex-wrap">
                {pin.slice(0, 6).map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-10 h-10 md:w-16 md:h-16 text-center text-white text-lg border border-[#E2FF54] rounded-md focus:ring-2 focus:ring-[#E2FF54] focus:border-[#E2FF54] outline-none"
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Enter Again</label>
              <div className="flex gap-2 flex-wrap">
                {pin.slice(6, 12).map((digit, index) => (
                  <input
                    key={index + 6}
                    ref={(el) => (inputRefs.current[index + 6] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index + 6, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index + 6, e)}
                    className="w-10 h-10 md:w-16 md:h-16 text-white text-center text-lg border border-[#E2FF54] rounded-md focus:ring-2 focus:ring-[#E2FF54] focus:border-[#E2FF54] outline-none"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Auto Fill Text */}
          <div className="mb-4 mt-6 flex items-end justify-end relative">
            <span
              className="text-lg text-[#E2FF54] font-bold cursor-pointer hover:underline relative"
              onClick={handleAutoFill}
            >
              Auto Fill
            </span>
            {arrowPosition === "autoFill" && (
              <motion.div
                className="absolute right-[85px] top-1/2 transform -translate-y-1/2 text-[#E2FF54] text-2xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                ➡️
              </motion.div>
            )}
          </div>

          {/* Submit Button */}
          <div className="relative mt-6">
            <button
              onClick={() => navigate("/dashboard")}
              disabled={!isFormComplete}
              className={`w-full p-3 mt-6 rounded-lg text-black transition duration-300 ease-in-out shadow-md ${
                isFormComplete
                  ? "bg-[#E2FF54] hover:bg-[#E2FF54]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Enable 2-Step Verification
            </button>

            {/* Arrow moves to the button after auto-fill */}
            {arrowPosition === "continue" && (
              <motion.div
                className="absolute right-[46%] top-[-40px] transform -translate-y-1/2 text-[#E2FF54] text-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                ⬇️
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterPin;
