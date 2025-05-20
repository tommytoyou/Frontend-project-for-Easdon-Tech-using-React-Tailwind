import { useLocation, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Barcode from 'react-barcode';
import { Order } from '../context/OrdersContext';

export default function Receipt() {
  const location = useLocation();
  const order = location.state?.order as Order;
  const hasPrinted = useRef(false); // 👈 Prevents double print

  useEffect(() => {
    if (order && !hasPrinted.current) {
      hasPrinted.current = true;
      setTimeout(() => window.print(), 300);
    }
  }, [order]);

  if (!order) return <Navigate to="/" />;

  return (
    <div className="p-10 bg-white text-black min-h-screen print:bg-white print:text-black">
      <h1 className="text-3xl font-bold mb-4">Order Receipt</h1>
      <div className="space-y-2">
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
    </div>
  );
}
