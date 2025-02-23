import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
        Welcome to VirtueMed.ai
      </h1>
      <button 
        onClick={() => navigate("/dashboard")}
        className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default Homepage;
