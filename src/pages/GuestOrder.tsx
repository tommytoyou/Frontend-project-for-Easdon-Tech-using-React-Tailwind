import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type FabricBolt = {
  material: string;
  treatment: string;
  barcode: string;
};

const GuestOrder = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [projectName, setProjectName] = useState("");
  const [fabricBolts, setFabricBolts] = useState<FabricBolt[]>([
    { material: "", treatment: "", barcode: uuidv4() },
  ]);

  const handleContactChange = (field: string, value: string) => {
    setContactInfo({ ...contactInfo, [field]: value });
  };

  const handleBoltChange = (
    index: number,
    field: keyof FabricBolt,
    value: string
  ) => {
    const updatedBolts = [...fabricBolts];
    updatedBolts[index][field] = value;
    setFabricBolts(updatedBolts);
  };

  const addBolt = () => {
    setFabricBolts([
      ...fabricBolts,
      { material: "", treatment: "", barcode: uuidv4() },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const guestOrderPayload = {
      contactInfo,
      projectName,
      fabricBolts,
    };
    console.log("Guest Order Submitted:", guestOrderPayload);
    alert("Order submitted! A representative will contact you shortly.");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white text-black rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Submit a New Order</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded mb-2"
            value={contactInfo.name}
            onChange={(e) => handleContactChange("name", e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-2 rounded mb-2"
            value={contactInfo.email}
            onChange={(e) => handleContactChange("email", e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            value={contactInfo.phone}
            onChange={(e) => handleContactChange("phone", e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Project Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Fabric Bolts</h3>
          {fabricBolts.map((bolt, idx) => (
            <div key={idx} className="border p-3 rounded mb-2 bg-gray-50">
              <input
                type="text"
                placeholder="Material"
                className="w-full border p-2 rounded mb-2"
                value={bolt.material}
                onChange={(e) =>
                  handleBoltChange(idx, "material", e.target.value)
                }
                required
              />
              <input
                type="text"
                placeholder="Treatment"
                className="w-full border p-2 rounded"
                value={bolt.treatment}
                onChange={(e) =>
                  handleBoltChange(idx, "treatment", e.target.value)
                }
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Barcode: {bolt.barcode}
              </p>
            </div>
          ))}
          <button
            type="button"
            onClick={addBolt}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
          >
            + Add Another Bolt
          </button>
        </div>

        <button
          type="submit"
          className="block w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default GuestOrder;
