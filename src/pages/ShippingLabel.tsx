import { useLocation, Navigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Order } from '../context/OrdersContext';

export default function ShippingLabel() {
  const location = useLocation();
  const order = location.state?.order as Order;
  const hasPrinted = useRef(false); // ✅ prevents multiple prints

  useEffect(() => {
    if (order && !hasPrinted.current) {
      hasPrinted.current = true;
      setTimeout(() => window.print(), 300);
    }
  }, [order]);

  if (!order) return <Navigate to="/" />;

  return (
    <div className="p-10 bg-white text-black min-h-screen print:bg-white print:text-black">
      <h1 className="text-3xl font-bold mb-6">Shipping Label</h1>
      <div className="space-y-2">
        <p><strong>To:</strong> {order.customer}</p>
        <p><strong>Product:</strong> {order.product}</p>
        <p><strong>Quantity:</strong> {order.quantity}</p>
        <p><strong>Shipping Method:</strong> Standard Ground</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Tracking Number:</strong> TRK-{order.id.slice(-6)}</p>
      </div>
      <p className="mt-10 italic text-sm">This is a sample shipping label.</p>
    </div>
  );
}
