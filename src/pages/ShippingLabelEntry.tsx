import React, { useState } from "react";

type ShippingData = {
  weight: string;
  length: string;
  width: string;
  height: string;
  destination: string;
};

const ShippingLabelEntry = () => {
  const [form, setForm] = useState<ShippingData>({
    weight: "",
    length: "",
    width: "",
    height: "",
    destination: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ShippingData, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white text-black mt-10 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Shipping Label Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Weight (lbs)"
            className="w-full border p-2 rounded"
            value={form.weight}
            onChange={(e) => handleChange("weight", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Length (in)"
            className="w-full border p-2 rounded"
            value={form.length}
            onChange={(e) => handleChange("length", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Width (in)"
            className="w-full border p-2 rounded"
            value={form.width}
            onChange={(e) => handleChange("width", e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Height (in)"
            className="w-full border p-2 rounded"
            value={form.height}
            onChange={(e) => handleChange("height", e.target.value)}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Destination Address"
          className="w-full border p-2 rounded"
          value={form.destination}
          onChange={(e) => handleChange("destination", e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Generate Label
        </button>
      </form>

      {submitted && (
        <div className="mt-8 border p-4 bg-gray-100 rounded text-sm">
          <h3 className="text-lg font-semibold mb-2">Mock Shipping Label</h3>
          <p><strong>To:</strong> {form.destination}</p>
          <p>
            <strong>Dimensions:</strong> {form.length}" × {form.width}" × {form.height}"
          </p>
          <p><strong>Weight:</strong> {form.weight} lbs</p>
          <p className="mt-2 font-mono text-gray-700">TRACKING# SHIPMOCK-987654321</p>
        </div>
      )}
    </div>
  );
};

export default ShippingLabelEntry;
