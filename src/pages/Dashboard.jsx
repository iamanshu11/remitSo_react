import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; 
import Header from "../components/Header";
import Calculator from "../components/Calculator";
import Recipients from "../components/Recipients";
import Transactions from "../components/Transactions";

const Dashboard = () => {
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
            <h1 className="text-4xl font-bold text-white">Welcome</h1>
            <p className="text-gray-300 mt-2">Your account overview</p>
          </div>

          {/* Calculator & Recipients Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Calculator />
            <Recipients />
          </div>

          {/* Transactions Section */}
          <div className="mt-4 w-full">
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
