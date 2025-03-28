import React from "react";
import { FaBell } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-[#002A45] shadow-md p-4 ">
        <div className="flex justify-between items-center md:container md:mx-auto">
        <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="md:hidden text-white text-2xl">
          ☰
        </button>
        <img src={logo} alt="Logo" className="h-8" />
      </div>
      <div className="flex items-center gap-4">
        <FaBell className="text-white text-xl cursor-pointer" />
        <div className="w-10 h-10 bg-[#E2FF54] text-black flex items-center justify-center rounded-full">
          AS
        </div>
      </div>

        </div>
    </header>
  );
};

export default Header;
