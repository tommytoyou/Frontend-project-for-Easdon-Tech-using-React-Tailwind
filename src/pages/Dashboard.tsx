import React from 'react';
import { useOrders } from '../context/OrdersContext';

const Dashboard = () => {
  const { orders } = useOrders();

  const totalOrders = orders.length;
  const pending = orders.filter(o => o.status === 'Pending').length;
  const shipped = orders.filter(o => o.status === 'Shipped').length;
  const complete = orders.filter(o => o.status === 'Complete').length;

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <SummaryCard title="Total Orders" value={totalOrders} color="bg-blue-600" />
        <SummaryCard title="Pending" value={pending} color="bg-yellow-500" />
        <SummaryCard title="Shipped" value={shipped} color="bg-green-500" />
        <SummaryCard title="Complete" value={complete} color="bg-purple-500" />
      </div>

      <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm table-auto bg-gray-800 rounded shadow overflow-hidden">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(-5).reverse().map(order => (
              <tr key={order.id} className="border-t border-gray-700">
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function SummaryCard({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className={`p-4 rounded shadow ${color}`}>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

export default Dashboard;
