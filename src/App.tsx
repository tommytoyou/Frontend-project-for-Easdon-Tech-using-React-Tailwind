import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import GuestOrder from "./pages/GuestOrder";
import Orders from "./pages/Orders";
import Dashboard from "./pages/Dashboard";
import NewOrder from "./pages/NewOrder";
import Receipt from "./pages/Receipt";
import CreateProject from "./pages/CreateProject";
import ShippingLabelEntry from "./pages/ShippingLabelEntry";
import CustomerOrders from "./pages/CustomerOrders";
import SearchByBarcode from "./pages/SearchByBarcode";
import NewCustomerOrder from "./pages/NewCustomerOrder";
import BarcodePrint from "./pages/BarcodePrint";
import AccessDenied from "./pages/AccessDenied";

import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4 shadow flex-wrap gap-4 justify-center flex flex-wrap">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/shipping-label" className="hover:underline">Shipping Label</Link>
        <Link to="/guest-order" className="hover:underline">Guest Order</Link>
        <Link to="/barcode-print" className="hover:underline">Print Barcode</Link>
        <Link to="/search-barcode" className="hover:underline">Search Barcode</Link>
        <Link to="/new-customer-order" className="hover:underline">New Customer Order</Link>
        <Link to="/login">
          <button className="ml-4 px-2 py-1 border rounded hover:bg-white hover:text-black">
            {token ? "Logout" : "Login"}
          </button>
        </Link>
      </nav>

      <main className="p-10">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/access-denied" element={<AccessDenied />} />

          {/* Protected Admin Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/new"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <NewOrder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/receipt"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Receipt />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-project"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <CreateProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shipping-entry"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <ShippingLabelEntry />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customer-orders"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <CustomerOrders />
              </ProtectedRoute>
            }
          />

          {/* Guest & Shared Routes */}
          <Route path="/guest-order" element={<GuestOrder />} />
          <Route path="/barcode-print" element={<BarcodePrint />} />
          <Route path="/search-barcode" element={<SearchByBarcode />} />
          <Route path="/new-customer-order" element={<NewCustomerOrder />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
