import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type FabricBolt = {
  material: string;
  treatment: string;
  barcode: string;
};

type CustomerInfo = {
  name: string;
  email: string;
  phone: string;
};

const NewCustomerOrder = () => {
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const [projectName, setProjectName] = useState("");
  const [fabricBolts, setFabricBolts] = useState<FabricBolt[]>([
    { material: "", treatment: "", barcode: uuidv4() },
  ]);

  const handleCustomerChange = (field: keyof CustomerInfo, value: string) => {
    setCustomer({ ...customer, [field]: value });
  };

  const handleBoltChange = (
    index: number,
    field: keyof FabricBolt,
    value: string
  ) => {
    const updated = [...fabricBolts];
    updated[index][field] = value;
    setFabricBolts(updated);
  };

  const addBolt = () => {
    setFabricBolts([
      ...fabricBolts,
      { material: "", treatment: "", barcode: uuidv4() },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderPayload = {
      customer,
      projectName,
      fabricBolts,
    };
    console.log("New Customer Order Submitted:", orderPayload);
    alert("Thank you! Your order has been submitted for review.");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white text-black mt-10 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">New Customer Order</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Contact Info</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded mb-2"
            value={customer.name}
            onChange={(e) => handleCustomerChange("name", e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-2"
            value={customer.email}
            onChange={(e) => handleCustomerChange("email", e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            value={customer.phone}
            onChange={(e) => handleCustomerChange("phone", e.target.value)}
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
          <h3 className="font-semibold mb-2">Fabric Bolts</h3>
          {fabricBolts.map((bolt, idx) => (
            <div key={idx} className="bg-gray-100 border p-4 rounded mb-4">
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
              <p className="text-sm text-gray-500 mt-1">
                Barcode: {bolt.barcode}
              </p>
            </div>
          ))}
          <button
            type="button"
            onClick={addBolt}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            + Add Fabric Bolt
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

export default NewCustomerOrder;
