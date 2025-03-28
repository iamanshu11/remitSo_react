import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import bgImage from "../assets/profile-set.webp";
import logo from "../assets/logo.png";
import nationalities from "../data/nationalities.json";
import phoneCodes from "../data/phoneCodes.json";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedPhoneCode, setSelectedPhoneCode] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [arrowPosition, setArrowPosition] = useState("autoFill");

  const isFormComplete = firstName && lastName && email && dob && selectedCountry && selectedPhoneCode && phoneNumber;

  const handleAutoFill = () => {
    const indiaNationality = nationalities.find((c) => c.code === "US");
    const indiaPhoneCode = phoneCodes.find((c) => c.code === "US");

    if (indiaNationality) setSelectedCountry(indiaNationality.code);
    if (indiaPhoneCode) setSelectedPhoneCode(indiaPhoneCode.dial_code);

    setFirstName("test");
    setLastName("data");
    setEmail("test.data@example.com");
    setDob("1995-06-15");
    setPhoneNumber("(555) 867-5309");

    setArrowPosition("continue"); // Update arrow position after autofill
  };

  const countryOptions = nationalities.map((country) => ({
    value: country.code,
    label: (
      <div className="flex items-center gap-2">
        <img src={country.flag} alt={country.name} className="w-5 h-5 rounded-full" />
        {country.name}
      </div>
    ),
  }));

  const phoneCodeOptions = phoneCodes.map((country) => ({
    value: country.dial_code,
    label: (
      <div className="flex items-center gap-2">
        <img src={country.flag} alt={country.code} className="w-5 h-5 rounded-full" />
        <span className="text-gray-800 font-medium">{country.dial_code}</span>
      </div>
    ),
  }));

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Right Side - Form Section */}
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
          <h2 className="text-2xl font-bold mb-2 text-white">Profile Setup</h2>
          <p className="text-gray-500 text-sm mb-6 text-white">Complete your profile by filling in personal details</p>

          {/* Form */}
          <div className="space-y-5">
            {/* First Name & Last Name */}
            <div className="flex gap-4 text-white">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-white mb-1">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 border-[#E2FF54] focus:ring-[#E2FF54]"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-white mb-1">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 border-[#E2FF54] focus:ring-[#E2FF54]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full text-white p-3 border rounded-lg focus:outline-none focus:ring-2 border-[#E2FF54] focus:ring-[#E2FF54]"
              />
            </div>

            {/* Date of Birth */}
            <div className="relative">
              <label className="block text-sm font-medium text-white mb-1">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full text-white p-3 border rounded-lg focus:outline-none focus:ring-2 border-[#E2FF54] focus:ring-[#E2FF54]"
              />
              <FaCalendarAlt className="absolute right-3 top-10 text-white" />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">Phone Number</label>
              <div className="flex items-center border p-3 rounded-lg focus-within:ring-2 border-[#E2FF54] focus:ring-[#E2FF54]">
                <div className="w-1/3">
                  <Select
                    options={phoneCodeOptions}
                    value={phoneCodeOptions.find((c) => c.value === selectedPhoneCode)}
                    onChange={(option) => setSelectedPhoneCode(option.value)}
                    placeholder="Code"
                    className="w-full"
                  />
                </div>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter phone number"
                  className="w-2/3 outline-none ml-2 text-white"
                />
              </div>
            </div>

            {/* Nationality */}
            <div>
              <label className="block text-sm font-medium text-white mb-1">Nationality</label>
              <Select
                options={countryOptions}
                value={countryOptions.find((c) => c.value === selectedCountry)}
                onChange={(option) => setSelectedCountry(option.value)}
                placeholder="Select Your Nationality"
                className="w-full"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: "transparent",
                    color: "#000",
                    padding: "8px",
                    border: "1px solid #E2FF54",
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "#fff", // Ensure selected text is white
                  }),
                  menu: (provided) => ({
                    ...provided,
                    backgroundColor: "white",
                    color: "#000", // Dropdown options remain black for contrast
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    color: state.isSelected ? "#fff" : "#000", // Selected text white, others black
                    backgroundColor: state.isSelected ? "#E2FF54" : "white",
                  }),
                }}
              />

            </div>
          </div>


          {/* Auto Fill Text */}
          <div className="mb-4 mt-6 flex items-end justify-end relative">
            <span
              className="text-lg  text-[#E2FF54] font-bold cursor-pointer hover:underline relative"
              onClick={handleAutoFill}
            >
              Auto Fill
            </span>
            {arrowPosition === "autoFill" && (
              <motion.div
                className="absolute right-[85px] top-1/2 transform -translate-y-1/2 text-[#E2FF54] text-2xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >➡️</motion.div>
            )}
          </div>
          {/* Continue Button with Arrow */}
          <div className="relative mt-6">
            <button
              onClick={() => isFormComplete && navigate("/contact-details")}
              disabled={!isFormComplete}
              className={`w-full p-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md ${isFormComplete ? "bg-[#E2FF54] text-black" : "bg-gray-400 text-gray-800 cursor-not-allowed"
                }`}
            >
              Continue
            </button>
            {arrowPosition === "continue" && (
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

export default ProfileSetup;
