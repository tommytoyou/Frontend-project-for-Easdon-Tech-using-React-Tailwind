import { useOrders } from '../context/OrdersContext';
import { useNavigate } from 'react-router-dom';

export default function Orders() {
  const { orders, updateOrderStatus } = useOrders();
  const navigate = useNavigate();

  const handleStatusChange = (id: string, newStatus: 'Pending' | 'Shipped' | 'Complete') => {
    updateOrderStatus(id, newStatus);
  };

  const handlePrint = (order: any) => {
    navigate('/receipt', { state: { order } });
  };

  const handleShippingLabel = (order: any) => {
    navigate('/shipping-label', { state: { order } });
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Orders</h1>
      <table className="w-full table-auto bg-gray-800 rounded overflow-hidden">
        <thead>
          <tr className="bg-gray-700 text-left text-sm uppercase text-gray-300">
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-700 text-sm">
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">{order.date}</td>
              <td className="px-4 py-2">
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value as any)}
                  className="bg-gray-700 text-white rounded px-2 py-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Complete">Complete</option>
                </select>
              </td>
              <td className="px-4 py-2 space-x-2">
                <button
                  onClick={() => handlePrint(order)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                >
                  Print
                </button>
                <button
                  onClick={() => handleShippingLabel(order)}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                >
                  Print Label
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
