import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import bgImage from "../assets/sign.webp";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();

  // State for password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Background Image (Hidden on Small Screens) */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 bg-[#001421] flex justify-center items-center p-6 relative">
        
        {/* Back Button (Top-Right) */}
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
          <h2 className="text-2xl font-bold mb-1 text-white">Love to see you again 👀</h2>
          <p className="text-gray-500 text-sm mb-6 text-white">Send your money transfer easy and fun!</p>

          {/* Form */}
          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full p-3 border border-[#E2FF54] text-white rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#E2FF54]"
              />
            </div>

            {/* Password Field with Eye Icon */}
            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-white">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 text-white border border-[#E2FF54] rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-[#E2FF54]"
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="mb-4 flex items-center justify-between">
              <div>
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-white">Remember me</span>
              </div>
              <Link to="#" className="text-[#E2FF54] text-sm">
                Forgot password?
              </Link>
            </div>
            

            {/* Submit Button */}
            <button
                className="w-full bg-[#E2FF54] text-black py-3 mt-6 rounded-lg hover:bg-[#E2FF54] transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                onClick={() => navigate("/dashboard")} // ✅ Correctly defined navigate here
            >
                Login
            </button>
          </form>

          {/* Sign Up Redirect */}
          <p className="text-sm text-white mt-4">
            Don’t have an account? <Link to="/signup" className="text-[#E2FF54]">Sign up instead</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
