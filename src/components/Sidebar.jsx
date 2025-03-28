import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaMoneyBill, FaUser, FaCog, FaSignOutAlt, FaTimes, FaCheckCircle } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation(); // Get current route

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`bg-[#002A45] md:bg-transparent text-white p-6 w-72 fixed top-0 left-0 h-full z-50 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-72"
        } md:translate-x-0 md:relative flex flex-col`}
    >
      {/* Close Button for Mobile */}
      <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white md:hidden">
        <FaTimes size={24} />
      </button>

      {/* Sidebar Menu */}
      <nav className="mt-10">
        <ul className="space-y-6 text-white md:text-black">
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center gap-3 text-lg font-semibold p-2 rounded-md 
               ${isActive("/dashboard")
                  ? "bg-[#E2FF54] text-black"
                  : "text-white md:hover:text-black md:hover:bg-[#E2FF54]"
                }`}
            >
              <FaHome /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/send-money"
              className={`flex items-center gap-3 p-2 rounded-md  ${isActive("/send-money") ? "bg-[#E2FF54] text-black"
                  : "text-white md:hover:text-black md:hover:bg-[#E2FF54]"
                }`}
            >
              <FaMoneyBill /> Send Money
            </Link>
          </li>
          <li>
            <Link
              to="/your-transfers"
              className={`flex items-center gap-3 p-2 rounded-md  ${isActive("/your-transfers") ? "bg-[#E2FF54] text-black"
                  : "text-white md:hover:text-black md:hover:bg-[#E2FF54]"
                }`}
            >
              <FaUser /> Your Transfers
            </Link>
          </li>
          <li>
            <Link
              to="/your-recipients"
              className={`flex items-center gap-3 p-2 rounded-md  ${isActive("/your-recipients") ? "bg-[#E2FF54] text-black"
                  : "text-white md:hover:text-black md:hover:bg-[#E2FF54]"
                }`}
            >
              <FaUser /> Your Recipients
            </Link>
          </li>
          {/* ✅ New "Account Verification" Link */}
          <li>
            <Link
              to="/account-verification"
              className={`flex items-center gap-3 p-2 rounded-md  ${isActive("/account-verification") ? "bg-[#E2FF54] text-black"
                  : "text-white md:hover:text-black md:hover:bg-[#E2FF54]"
                }`}
            >
              <FaCheckCircle /> Account Verification
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`flex items-center gap-3 p-2 rounded-md  ${isActive("/settings") ? "bg-[#E2FF54] text-black"
                  : "text-white md:hover:text-black md:hover:bg-[#E2FF54]"
                }`}
            >
              <FaCog /> Account Settings
            </Link>
          </li>
          <li>
            <button className="flex items-center gap-3 text-red-600 p-2 rounded-md md:hover:text-white md:hover:bg-red-500">
              <FaSignOutAlt /> Log Out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
