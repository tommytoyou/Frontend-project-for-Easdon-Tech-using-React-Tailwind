import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useUserRole } from './context/UserRoleContext';
import UserRoleProvider from './context/UserRoleContext';
import ProtectedRoute from './components/ProtectedRoute';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import NewOrder from './pages/NewOrder';
import Orders from './pages/Orders';
import CustomerOrders from './pages/CustomerOrders';
import Receipt from './pages/Receipt';
import CreateProject from './pages/CreateProject';
import ShippingLabel from './pages/ShippingLabel';
import GuestOrder from './pages/GuestOrder';
import BarcodePrint from './pages/BarcodePrint';
import SearchByBarcode from './pages/SearchByBarcode';
import ShippingLabelEntry from './pages/ShippingLabelEntry';
import NewCustomerOrder from './pages/NewCustomerOrder';
import AccessDenied from './pages/AccessDenied';
import Login from './pages/Login';

export default function App() {
  const { role, loginAsAdmin, logout } = useUserRole();

  return (
    <UserRoleProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 p-4 shadow-md flex-wrap gap-4 justify-center text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/shipping-label" className="hover:underline">Shipping Label</Link>
          <Link to="/guest-order" className="hover:underline">Guest Order</Link>
          <Link to="/barcode-print" className="hover:underline">Print Barcode</Link>
          <Link to="/search-barcode" className="hover:underline">Search Barcode</Link>
          <Link to="/new-customer-order" className="hover:underline">New Customer Order</Link>

          <button
            onClick={role === 'admin' ? logout : loginAsAdmin}
            className="ml-4 px-2 py-1 border rounded hover:bg-white hover:text-black"
          >
            {role === 'admin' ? 'Logout' : 'Login as Admin'}
          </button>
        </nav>

        <main className="p-10">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* 🔐 Protected Admin Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="/orders/new" element={<ProtectedRoute><NewOrder /></ProtectedRoute>} />
            <Route path="/orders/history" element={<ProtectedRoute><CustomerOrders /></ProtectedRoute>} />
            <Route path="/receipt" element={<ProtectedRoute><Receipt /></ProtectedRoute>} />
            <Route path="/create-project" element={<ProtectedRoute><CreateProject /></ProtectedRoute>} />
            <Route path="/shipping-entry" element={<ProtectedRoute><ShippingLabelEntry /></ProtectedRoute>} />

            {/* 🟢 Public Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping-label" element={<ShippingLabel />} />
            <Route path="/guest-order" element={<GuestOrder />} />
            <Route path="/barcode-print" element={<BarcodePrint />} />
            <Route path="/search-barcode" element={<SearchByBarcode />} />
            <Route path="/new-customer-order" element={<NewCustomerOrder />} />
            <Route path="/access-denied" element={<AccessDenied />} />
          </Routes>
        </main>
      </div>
    </UserRoleProvider>
  );
}
