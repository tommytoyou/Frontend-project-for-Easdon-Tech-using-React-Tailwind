import { useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Barcode from 'react-barcode';
import { Order } from '../context/OrdersContext';

export default function Receipt() {
  const location = useLocation();
  const order = location.state?.order as Order;

  useEffect(() => {
    if (order) {
      setTimeout(() => window.print(), 200); // Delay so barcode renders before print
    }
  }, [order]);

  if (!order) return <Navigate to="/" />;

  return (
    <div className="p-10 text-black bg-white min-h-screen print:bg-white print:text-black">
      <h1 className="text-3xl font-bold mb-4">Order Receipt</h1>
      <p><strong>Order ID:</strong> {order.id}</p>
      <p><strong>Customer:</strong> {order.customer}</p>
      <p><strong>Product:</strong> {order.product}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Date:</strong> {order.date}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <div className="mt-6">
        <Barcode value={order.id} />
      </div>
    </div>
  );
}
