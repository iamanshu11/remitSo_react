import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { motion } from "framer-motion";
import bgImage from "../assets/country.webp";
import logo from "../assets/logo.png"; 
import countryList from "../data/countries.json"; 

const SelectCountry = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [arrowPosition, setArrowPosition] = useState("autoFill");

  // Map countries to react-select format
  const countryOptions = countryList.map((country) => ({
    value: country.code,
    label: (
      <div className="flex items-center gap-2">
        <img src={country.flag} alt={country.name} className="w-5 h-5 rounded-full" />
        {country.name}
      </div>
    ),
  }));

  // Auto-fill function (Select India)
  const handleAutoFill = () => {
    const usaOption = countryOptions.find((option) => option.value === "US");
    if (usaOption) {
      setSelectedCountry(usaOption);
      setArrowPosition("continue");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Right Side - Country Selection Form */}
      <div className="w-full md:w-1/2 bg-[#001421] flex justify-center items-center p-6 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 right-5 px-4 py-2 bg-[#E2FF54] shadow-md rounded-full text-black hover:bg-[#E2FF54]"
        >
          ← Back
        </button>
        
        <div className="max-w-md w-full relative">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-6 mb-4" />

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-1 text-white">Country of Residence</h2>
          <p className="text-gray-500 text-sm mb-6 text-white">Select your country of Residence</p>

          {/* Country Dropdown */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium text-white mb-2">Country</label>
            <Select
              options={countryOptions}
              value={selectedCountry}
              onChange={setSelectedCountry}
              placeholder="Select Your Country"
              className="mt-1"
            />

            {/* Auto Fill Text */}
            <span 
              className="mt-4 flex items-end justify-end text-lg text-[#E2FF54] cursor-pointer hover:underline relative"
              onClick={handleAutoFill}
            >
              Auto Fill
            </span>

            {arrowPosition === "autoFill" && (
              <motion.div
                className="absolute right-[85px] top-[89%] transform -translate-y-1/2 text-[#E2FF54] text-2xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >➡️</motion.div>
            )}
          </div>

          {/* Continue Button */}
          <button 
            onClick={() => selectedCountry && navigate("/profile-setup")}
            disabled={!selectedCountry}
            className={`w-full p-3 rounded-lg text-black shadow-md transition-all ${
              selectedCountry ? "bg-[#E2FF54] hover:bg-[#E2FF54]" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Continue
          </button>

          {arrowPosition === "continue" && (
            <motion.div
              className="absolute left-[50%] top-[64%] transform -translate-x-1/2 text-[#E2FF54] text-2xl mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >⬇️</motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCountry;