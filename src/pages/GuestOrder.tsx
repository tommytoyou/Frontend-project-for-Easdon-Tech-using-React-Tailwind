import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

interface FabricBolt {
  treatment: string;
  barcode: string;
}

const GuestOrder: React.FC = () => {
  const [fabricBolts, setFabricBolts] = useState<FabricBolt[]>([
    { treatment: '', barcode: generateBarcode() },
  ]);

  function generateBarcode(): string {
    return `FAB-${new Date()
      .toISOString()
      .replace(/[-T:.Z]/g, '')
      .slice(0, 14)}-${uuidv4().slice(0, 6).toUpperCase()}`;
  }

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
      { treatment: '', barcode: generateBarcode() },
    ]);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        customerName: 'Guest',
        bolts: fabricBolts,
      };

      const response = await axios.post(
        'http://localhost:5000/api/orders',
        payload
      );

      alert('Order submitted successfully!');
      console.log(response.data);
    } catch (error: any) {
      console.error('Order submission failed:', error.message);
      alert('Failed to submit order.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Guest Order</h2>
      {fabricBolts.map((bolt, index) => (
        <div key={index} className="mb-2 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Treatment"
            value={bolt.treatment}
            onChange={(e) =>
              handleBoltChange(index, 'treatment', e.target.value)
            }
            className="border border-black rounded px-2 py-1 bg-green-300"
          />
          <span className="text-sm text-gray-500">{bolt.barcode}</span>
        </div>
      ))}

      <button
        className="bg-green-500 text-white px-4 py-2 rounded mt-2"
        onClick={addBolt}
      >
        Add Fabric Bolt
      </button>

      <button
        className="bg-blue-600 text-white px-6 py-2 mt-4 rounded block"
        onClick={handleSubmit}
      >
        Submit Order
      </button>
    </div>
  );
};

export default GuestOrder;
