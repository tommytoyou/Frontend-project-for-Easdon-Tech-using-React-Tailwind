import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import NewOrder from './pages/NewOrder';
import CustomerOrders from './pages/CustomerOrders';
import About from './pages/About';
import Contact from './pages/Contact';
import Receipt from './pages/Receipt';
import ShippingLabel from './pages/ShippingLabel';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Links */}
      <nav className="bg-gray-800 p-4 shadow flex flex-wrap gap-4 justify-center">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/orders" className="hover:underline">Orders</Link>
        <Link to="/orders/new" className="hover:underline">New Order</Link>
        <Link to="/orders/history" className="hover:underline">Order History</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/shipping-label" className="hover:underline">Shipping</Link>
      </nav>

      {/* Route definitions */}
      <main className="p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/new" element={<NewOrder />} />
          <Route path="/orders/history" element={<CustomerOrders />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/shipping-label" element={<ShippingLabel />} />
        </Routes>
      </main>
    </div>
  );
}
