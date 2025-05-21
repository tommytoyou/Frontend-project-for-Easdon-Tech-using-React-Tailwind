import React from "react";
import { useNavigate } from "react-router-dom";

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center text-white">
      <h1 className="text-4xl font-bold mb-4">🚫 Access Denied</h1>
      <p className="text-lg text-gray-300 mb-6">
        You do not have permission to view this page.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Return to Home
      </button>
    </div>
  );
};

export default AccessDenied;
