import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Bolt {
  treatment: string;
  barcode?: string;
}

interface Order {
  _id: string;
  customerName: string;
  bolts: Bolt[];
  createdAt: string;
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders');
        setOrders(response.data);
        setLoading(false);
      } catch (error: any) {
        console.error('Failed to fetch orders:', error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Submitted Orders</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="border p-4 rounded shadow">
              <p className="font-semibold">Customer: {order.customerName}</p>
              <p className="text-sm text-gray-500 mb-2">Date: {new Date(order.createdAt).toLocaleString()}</p>
              <ul className="list-disc pl-5">
                {order.bolts.map((bolt, index) => (
                  <li key={index}>
                    Treatment: {bolt.treatment}{" "}
                    {bolt.barcode && <span className="text-gray-500">(Barcode: {bolt.barcode})</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
