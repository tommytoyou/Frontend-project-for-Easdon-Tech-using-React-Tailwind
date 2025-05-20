import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type FabricBolt = {
  material: string;
  treatment: string;
  barcode: string;
};

const CreateProject = () => {
  const [projectName, setProjectName] = useState("");
  const [fabricBolts, setFabricBolts] = useState<FabricBolt[]>([
    { material: "", treatment: "", barcode: uuidv4() },
  ]);

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
    const payload = {
      projectName,
      fabricBolts,
    };
    console.log("Project Created:", payload);
    alert(`Project "${projectName}" submitted successfully!`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white text-black rounded shadow mt-6">
      <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <h3 className="text-xl font-semibold mb-2">Fabric Bolts</h3>
          {fabricBolts.map((bolt, idx) => (
            <div key={idx} className="border p-3 rounded mb-3 bg-gray-50">
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
            + Add Fabric Bolt
          </button>
        </div>

        <button
          type="submit"
          className="block w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
