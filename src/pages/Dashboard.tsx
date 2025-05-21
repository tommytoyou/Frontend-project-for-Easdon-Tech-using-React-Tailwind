import React from "react";

const orders = [
  { id: "A001", customer: "Jam Reyes", status: "Pending" },
  { id: "A002", customer: "Tom Erickson", status: "Shipped" },
  { id: "A003", customer: "Tech Corp", status: "Complete" },
  { id: "A004", customer: "Felix Villa", status: "Pending" },
  { id: "A005", customer: "ASEAN Co", status: "Complete" },
];

const Dashboard = () => {
  function getStatusCount(status: string) {
    return orders.filter(order => order.status === status).length;
  }

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <SummaryCard title="Total Orders" value={orders.length} color="bg-blue-600" />
        <SummaryCard title="Pending" value={getStatusCount("Pending")} color="bg-yellow-600" />
        <SummaryCard title="Shipped" value={getStatusCount("Shipped")} color="bg-green-600" />
        <SummaryCard title="Complete" value={getStatusCount("Complete")} color="bg-purple-600" />
      </div>

      <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
      <table className="w-full table-auto bg-gray-800 rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-700 text-left text-sm uppercase text-gray-400">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.slice(-5).reverse().map((order) => (
            <tr key={order.id} className="border-t border-gray-700 text-sm">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-100">{title}</div>
    </div>
  );
}

export default Dashboard;
