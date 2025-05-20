import React, { useState } from "react";

type FabricBolt = {
  material: string;
  treatment: string;
  barcode: string;
};

// Mock database (you’ll replace this later)
const mockData: FabricBolt[] = [
  { material: "Cotton", treatment: "Fire Retardant", barcode: "FABR-0001" },
  { material: "Linen", treatment: "UV Coated", barcode: "FABR-0002" },
  { material: "Silk", treatment: "Anti-Stain", barcode: "FABR-0003" },
];

const SearchByBarcode = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState<FabricBolt | null>(null);

  const handleSearch = () => {
    const found = mockData.find((bolt) => bolt.barcode === searchTerm.trim());
    setResult(found || null);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white text-black mt-10 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Search Fabric Bolt by Barcode</h2>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter or scan barcode"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {result ? (
        <div className="border p-4 rounded bg-gray-50">
          <p><strong>Material:</strong> {result.material}</p>
          <p><strong>Treatment:</strong> {result.treatment}</p>
          <p><strong>Barcode:</strong> {result.barcode}</p>
        </div>
      ) : (
        searchTerm && (
          <p className="text-red-600 font-medium">No matching fabric found.</p>
        )
      )}
    </div>
  );
};

export default SearchByBarcode;
