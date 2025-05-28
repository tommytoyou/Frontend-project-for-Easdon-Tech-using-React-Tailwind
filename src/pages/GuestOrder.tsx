import React, { useState } from 'react';
import axios from 'axios';

const GuestOrder: React.FC = () => {
  const [customerName, setCustomerName] = useState('');
  const [treatment, setTreatment] = useState('');
  const [barcode, setBarcode] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const order = {
      customerName,
      bolts: [{ treatment, barcode }],
    };

    try {
      await axios.post('http://localhost:5000/api/orders', order);
      setSubmitted(true);
    } catch (error) {
      console.error('Order submission failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Guest Order</h2>
      {submitted ? (
        <p className="text-green-400">Order submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-2 bg-white text-black border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Treatment</label>
            <input
              type="text"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-full p-2 bg-white text-black border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Submit Order
          </button>
        </form>
      )}
    </div>
  );
};

export default GuestOrder;
