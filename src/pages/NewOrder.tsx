import React, { useState } from 'react';
import Barcode from 'react-barcode';
import { useOrders } from '../context/OrdersContext';

export default function NewOrder() {
  const [customer, setCustomer] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addOrder } = useOrders();

  const generatedOrderId = `ORD${Date.now()}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newOrder = {
      id: generatedOrderId,
      customer,
      product,
      quantity,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending' as const,
    };

    addOrder(newOrder);

    alert(
      `Order submitted!\nOrder ID: ${newOrder.id}\nCustomer: ${customer}\nProduct: ${product}\nQuantity: ${quantity}`
    );

    // Optional: Reset form
    setCustomer('');
    setProduct('');
    setQuantity(1);

    // Optional: Trigger print
    window.print();
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">Create New Order</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1">Customer Name</label>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1">Product</label>
          <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          />
        </div>

        <div>
          <label className="block mb-1">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min={1}
            required
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Submit Order
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Order ID: {generatedOrderId}</h2>
        <Barcode value={generatedOrderId} />
      </div>
    </div>
  );
}
