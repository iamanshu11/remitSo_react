import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/contact.webp"; // Background Image
import logo from "../assets/logo.png"; // Logo
import { motion } from "framer-motion";

const ContactDetails = () => {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({
    address: "",
    state: "",
    zip: "",
  });
  const [arrowPosition, setArrowPosition] = useState("autoFill");

  // Handle Input Change
  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  // Auto Fill Function
  const handleAutoFill = () => {
    setContactInfo({
      address: "123 Test Street",
      state: "California",
      zip: "90001",
    });

    setArrowPosition("continue"); // Update arrow position after autofill
  };

  // Check if all fields are filled
  const isFormComplete =
    contactInfo.address.trim() !== "" &&
    contactInfo.state.trim() !== "" &&
    contactInfo.zip.trim() !== "";

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 bg-[#001421] flex justify-center items-center p-6 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 right-5 px-4 py-2 bg-[#E2FF54] shadow-md rounded-full text-black hover:bg-[#E2FF54]"
        >
          ← Back
        </button>

        <div className="max-w-md w-full">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-6 mb-4" />

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-1 text-white">Add Your Contact Details</h2>
          <p className="text-gray-500 text-sm mb-6 text-white">
            Complete your profile by filling in contact details
          </p>

          {/* Address Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">Address</label>
            <input
              type="text"
              name="address"
              value={contactInfo.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="mt-1 text-white w-full p-3 border border-[#E2FF54] rounded-lg focus:outline-none focus:border-[#E2FF54]"
            />
          </div>

          {/* State Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">State</label>
            <input
              type="text"
              name="state"
              value={contactInfo.state}
              onChange={handleChange}
              placeholder="Enter your state"
              className="mt-1 text-white w-full p-3 border border-[#E2FF54] rounded-lg focus:outline-none focus:border-[#E2FF54]"
            />
          </div>

          {/* Zip Code Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-white">Postal / Zip Code</label>
            <input
              type="text"
              name="zip"
              value={contactInfo.zip}
              onChange={handleChange}
              placeholder="Enter your Zip code/postal"
              className="mt-1 text-white w-full p-3 border border-[#E2FF54] rounded-lg focus:outline-none focus:border-[#E2FF54]"
            />
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

          {/* Continue Button with Arrow */}
          <div className="relative mt-6">
            <button
              onClick={() => navigate("/TwoFactor-Auth")}
              disabled={!isFormComplete}
              className={`w-full text-black p-3 rounded-lg shadow-md transition-all ${
                isFormComplete
                  ? "bg-[#E2FF54] hover:bg-[#E2FF54]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Continue
            </button>
            {isFormComplete && (
              <motion.div
                className="absolute right-[46%] top-[-55%] transform -translate-y-1/2 text-[#E2FF54] text-2xl"
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

export default ContactDetails;
