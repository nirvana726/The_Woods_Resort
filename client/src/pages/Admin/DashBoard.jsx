import React from "react";
import Details from "./Details";
import Navbar from "./Navbar";

const DashBoard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-green-50 flex">
      {/* Sidebar */}
      <Navbar />
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start py-16 px-8">
        <div className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-2xl p-10 border border-gray-200">
          <Details />
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
