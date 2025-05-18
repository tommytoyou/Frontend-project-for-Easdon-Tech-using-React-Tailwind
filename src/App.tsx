import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold">Easdon Tech</h1>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      <main className="p-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-semibold mb-4">Welcome to Easdon Tech</h2>
        <p className="text-lg text-gray-700">
          Your React + Tailwind project is fully operational.
        </p>
      </main>
    </div>
  );
}

export default App;
