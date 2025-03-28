import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../assets/verify.webp";
import logo from "../assets/logo.png";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [arrowPosition, setArrowPosition] = useState("autoFill");

  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (index === 5 && value !== "") {
      handleVerify();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      navigate("/select-country");
    }
  };

  const handleAutoFill = () => {
    const autoFilledOtp = ["1", "2", "3", "4", "5", "6"];
    setOtp(autoFilledOtp);
    setArrowPosition("continue");
    inputRefs.current[5]?.focus();
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="w-full md:w-1/2 bg-[#001421] flex justify-center items-center p-6 relative">
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 right-5 px-4 py-2 bg-[#E2FF54] text-black shadow-md rounded-full hover:bg-[#E2FF54]"
        >
          <FaArrowLeft className="mr-2 inline" /> Back
        </button>

        <div className="max-w-md w-full relative">
          <img src={logo} alt="Logo" className="h-6 mb-4" />
          <h2 className="text-2xl font-bold mb-1 text-white">Verify your Email!</h2>
          <p className="text-gray-500 text-sm mb-6 text-white">
            We have sent an email verification code to your email <br />
            <span className="font-semibold text-white">test******@remitso.com</span>
          </p>

          <div className="flex justify-between gap-2 mb-4 relative">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-xl text-center border border-[#E2FF54] text-white rounded-lg focus:ring-2 focus:ring-[#E2FF54]"
              />
            ))}
          </div>
            <span 
              className="flex items-end justify-end text-sm text-[#E2FF54] cursor-pointer hover:underline relative"
              onClick={handleAutoFill}
            >
              Auto Fill
            </span>

            {arrowPosition === "autoFill" && (
              <motion.div
                className="absolute right-[65px] top-[59%] text-[#E2FF54] text-2xl"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >➡️</motion.div>
            )}


          <button 
            onClick={handleVerify}
            className="w-full bg-[#E2FF54] text-black p-3 mt-6 rounded-lg hover:bg-[#E2FF54] transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md"
          >
            Continue
          </button>

          {arrowPosition === "continue" && (
            <motion.div
              className="absolute left-[50%] top-[55%] transform -translate-x-1/2 text-[#E2FF54] text-2xl mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >⬇️</motion.div>
          )}

          <p className="text-sm text-white mt-4">
            Didn't receive the code? <a href="#" className="text-[#E2FF54]">Resend code</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;

