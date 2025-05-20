import React, { useState } from 'react';
import { useOrders } from '../context/OrdersContext';

const CustomerOrders = () => {
  const { orders } = useOrders();
  const [filter, setFilter] = useState<'All' | 'Pending' | 'Shipped' | 'Complete'>('All');

  const jakeOrders = orders.filter(order => order.customer === 'Jake');
  const filteredOrders =
    filter === 'All' ? jakeOrders : jakeOrders.filter(order => order.status === filter);

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Jake's Orders</h1>

      <div className="mb-6">
        <label htmlFor="statusFilter" className="block mb-2 text-lg font-medium">
          Filter by Status
        </label>
        <select
          id="statusFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="bg-gray-700 border border-gray-600 text-white text-sm rounded px-4 py-2"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Complete">Complete</option>
        </select>
      </div>

      <table className="w-full table-auto bg-gray-800 rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-700 text-left text-sm text-gray-300 uppercase">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id} className="border-b border-gray-700 text-sm">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.product}</td>
              <td className="px-4 py-2">{order.quantity}</td>
              <td className="px-4 py-2">{order.date}</td>
              <td className="px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOrders;
