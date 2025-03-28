import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#002A45] shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8" />

        {/* Desktop Navigation */}
        <div className="hidden bg-[#002A45] md:flex items-center space-x-6  px-4 py-2 ">
          {/* <Link to="/" className="text-purple-600 font-medium">Home</Link>
          <Link to="/product" className="text-gray-600 hover:text-black">Product</Link>
          <Link to="/company" className="text-gray-600 hover:text-black">Company</Link>
          <Link to="/help" className="text-gray-600 hover:text-black">Help</Link> */}
          <Link to="/login" className="text-white hover:text-white">Log In</Link>
          <Link to="/signup" className="bg-[#E2FF54] text-black px-4 py-2 rounded-full hover:bg-[#E2FF54]">
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu Popup */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes size={24} />
            </button>

            {/* Mobile Navigation */}
            <div className="flex flex-col space-y-4 text-center mt-4">
              {/* <Link to="/" className="text-purple-600 font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/product" className="text-gray-600 hover:text-black" onClick={() => setMenuOpen(false)}>Product</Link>
              <Link to="/company" className="text-gray-600 hover:text-black" onClick={() => setMenuOpen(false)}>Company</Link>
              <Link to="/help" className="text-gray-600 hover:text-black" onClick={() => setMenuOpen(false)}>Help</Link> */}
              <Link to="/login" className="text-gray-600 hover:text-black" onClick={() => setMenuOpen(false)}>Log In</Link>
              <Link to="/signup" className="bg-[#E2FF54] text-black px-4 py-2 rounded-full hover:bg-purple-700" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
