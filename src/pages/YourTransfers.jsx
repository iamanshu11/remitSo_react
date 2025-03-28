import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; 
import Header from "../components/Header";
import FullTransaction from "../components/FullTransaction";

const YourTransfers = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#001421]">
      {/* Header */}
      <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

      {/* Main Container */}
      <div className="container mx-auto flex flex-grow relative">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex flex-col flex-grow p-4 bg-[#002A45] mt-4 rounded-lg">
          {/* Welcome Section */}
          <div className="mb-6 p-6">
            <h1 className="text-4xl font-bold text-white">Recent Transactions</h1>
          </div>

          {/* Transactions Section */}
          <div className=" w-full">
            <FullTransaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourTransfers;
