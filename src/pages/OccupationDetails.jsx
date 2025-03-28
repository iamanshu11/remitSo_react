import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import bgImage from "../assets/sign.webp";
import logo from "../assets/logo.png";

const occupations = [
  { value: "developer", label: "Software Developer" },
  { value: "designer", label: "Graphic Designer" },
  { value: "teacher", label: "Teacher" },
  { value: "doctor", label: "Doctor" },
];

const salaryRanges = [
  { value: "20k-50k", label: "$20,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-150k", label: "$100,000 - $150,000" },
  { value: "150k+", label: "$150,000+" },
];

const OccupationDetails = () => {
  const navigate = useNavigate();
  const [selectedOccupation, setSelectedOccupation] = useState(null);
  const [selectedSalary, setSelectedSalary] = useState(null);

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6 relative">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 right-5 px-4 py-2 bg-white shadow-md rounded-full text-gray-600 hover:bg-gray-100"
        >
          ← Back
        </button>

        <div className="max-w-md w-full">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-10 mb-4" />

          {/* Heading */}
          <h2 className="text-2xl font-bold mb-1">Profile Setup!</h2>
          <p className="text-gray-500 text-sm mb-6">Complete your profile by filling in your occupation details</p>

          {/* Occupation Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Occupation</label>
            <Select
              options={occupations}
              onChange={setSelectedOccupation}
              placeholder="Choose an occupation"
              className="mt-1"
            />
          </div>

          {/* Salary Range Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Salary Range</label>
            <Select
              options={salaryRanges}
              onChange={setSelectedSalary}
              placeholder="Select your salary range"
              className="mt-1"
            />
          </div>

          {/* Continue Button */}
          <button
            onClick={() => selectedOccupation && selectedSalary && navigate("/contact-details")}
            disabled={!selectedOccupation || !selectedSalary}
            className={`w-full p-3 rounded-lg text-white shadow-md transition-all ${
              selectedOccupation && selectedSalary
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OccupationDetails;
