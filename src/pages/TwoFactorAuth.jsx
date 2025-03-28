import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/factor-auth.png"; // Background Image
import logo from "../assets/logo.png"; // Logo
import { motion } from "framer-motion";

const TwoFactorAuth = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 bg-[#001421] flex justify-center items-center p-8 relative">
        
        {/* Back Button - Top Right Corner */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 right-6 px-4 py-2 bg-[#E2FF54] shadow-md rounded-full text-black hover:bg-[#E2FF54]"
        >
          ← Back
        </button>

        <div className="max-w-md w-full">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-6 mb-4" />

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-2 text-white">2-Factor Authentication</h2>
          <p className="text-gray-500 text-sm mb-6 text-white">
            Two-Factor Authentication (2FA) provides an extra layer of security. 
            Even if your password is compromised, your account stays protected.
          </p>

          {/* Buttons with Arrow */}
          <div className="flex flex-col items-center mt-10 relative">
            {/* Arrow Above Enable 2FA Button */}
            <motion.div
              className="absolute right-[20%] top-[-44px] text-[#E2FF54] text-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              ⬇️
            </motion.div>

            {/* Buttons */}
            <div className="flex gap-4 w-full">
              <button 
                onClick={() => navigate("/dashboard")} 
                className="w-full py-3 border border-[#E2FF54] text-white rounded-lg"
              >
                Skip for Now
              </button>
              <button 
                onClick={() => navigate("/EnterPin-Screen")} 
                className="w-full py-3 bg-[#E2FF54] text-black rounded-lg hover:bg-[#E2FF54]"
              >
                Enable 2FA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
