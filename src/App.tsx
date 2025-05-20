import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Page imports
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import NewOrder from "./pages/NewOrder";
import CustomerOrders from "./pages/CustomerOrders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Receipt from "./pages/Receipt";
import ShippingLabel from "./pages/ShippingLabel";
import GuestOrder from "./pages/GuestOrder";
import CreateProject from "./pages/CreateProject";
import BarcodePrint from "./pages/BarcodePrint";
import SearchByBarcode from "./pages/SearchByBarcode";
import ShippingLabelEntry from "./pages/ShippingLabelEntry";
import NewCustomerOrder from "./pages/NewCustomerOrder"; // ✅ NEW

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4 shadow flex-wrap gap-4 justify-center flex">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/orders/new" className="hover:underline">New Order</Link>
        <Link to="/orders" className="hover:underline">Order List</Link>
        <Link to="/orders/history" className="hover:underline">Customer Order History</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/receipt" className="hover:underline">Receipt</Link>
        <Link to="/shipping-label" className="hover:underline">Shipping Label</Link>
        <Link to="/guest-order" className="hover:underline">Guest Order</Link>
        <Link to="/create-project" className="hover:underline">Create Project</Link>
        <Link to="/barcode-print" className="hover:underline">Print Barcode</Link>
        <Link to="/search-barcode" className="hover:underline">Search Barcode</Link>
        <Link to="/shipping-entry" className="hover:underline">Shipping Entry</Link>
        <Link to="/new-customer-order" className="hover:underline">New Customer Order</Link> {/* ✅ NEW LINK */}
      </nav>

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
          <Route path="/guest-order" element={<GuestOrder />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/barcode-print" element={<BarcodePrint />} />
          <Route path="/search-barcode" element={<SearchByBarcode />} />
          <Route path="/shipping-entry" element={<ShippingLabelEntry />} />
          <Route path="/new-customer-order" element={<NewCustomerOrder />} /> {/* ✅ NEW ROUTE */}
        </Routes>
      </main>
    </div>
  );
}
