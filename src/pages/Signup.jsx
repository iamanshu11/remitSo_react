import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../assets/sign.webp";
import logo from "../assets/logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [arrowPosition, setArrowPosition] = useState("autoFill");

  const handleAutoFill = () => {
    setEmail("user@example.com");
    setPassword("Test@1234");
    setConfirmPassword("Test@1234");
    setArrowPosition("continue");
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}></div>
      
      <div className="w-full md:w-1/2 bg-[#001421] flex justify-center items-center p-6 relative">
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 right-5 px-4 py-2 bg-[#E2FF54] text-black shadow-md rounded-full hover:bg-[#E2FF54]"
        >
          ← Back
        </button>

        <div className="max-w-md w-full relative">
          <img src={logo} alt="Logo" className="h-6 mb-4" />
          <h2 className="text-2xl text-white font-bold mb-1">Adventure starts here 🚀</h2>
          <p className="text-white text-sm mb-6">Make your money transfer easy and fun!</p>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full text-white p-3 border border-[#E2FF54] rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#E2FF54]"
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-white">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-white p-3 border border-[#E2FF54] rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#E2FF54]"
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-white">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full text-white p-3 border border-[#E2FF54] rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#E2FF54]"
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-white"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="mb-4 flex items-center justify-between relative">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-white">
                  I agree to <Link to="/privacy" className="text-[#E2FF54]">privacy policy & terms</Link>
                </span>
              </div>
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
                >➡️</motion.div>
              )}
            </div>

            <button 
              onClick={() => isFormValid && navigate("/email-verification")}
              disabled={!isFormValid}
              className={`w-full p-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md 
              ${isFormValid ? "bg-[#E2FF54] text-black hover:bg-[#E2FF54]" : "bg-gray-400 text-gray-800 cursor-not-allowed"}`}
            >
              Continue
            </button>

            {arrowPosition === "continue" && (
              <motion.div
                className="absolute left-[60%] top-[72%] transform -translate-x-1/2 text-[#E2FF54] text-2xl mt-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              >⬇️</motion.div>
            )}
          </form>

          <p className="text-sm text-white mt-4">
            Already have an account? <Link to="/login" className="text-[#E2FF54]">Sign in instead</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;