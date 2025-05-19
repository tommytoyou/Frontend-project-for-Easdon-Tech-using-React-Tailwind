import React from 'react';
import { useOrders } from '../context/OrdersContext';

export default function Orders() {
  const { orders, updateOrderStatus } = useOrders();

  const handleStatusChange = (id: string, newStatus: 'Pending' | 'Shipped' | 'Complete') => {
    updateOrderStatus(id, newStatus);
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Orders</h1>
      <table className="w-full table-auto bg-gray-800 rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-700 text-left text-sm uppercase text-gray-400">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b border-gray-700 text-sm">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">{order.date}</td>
              <td className="px-4 py-2">
                <select
                  value={order.status}
                  onChange={e =>
                    handleStatusChange(order.id, e.target.value as 'Pending' | 'Shipped' | 'Complete')
                  }
                  className="bg-gray-700 text-white rounded px-2 py-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Complete">Complete</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

