import React from "react";
import { Navigate } from "react-router-dom";
import { useUserRole } from "./UserRoleContext"; // adjust path if needed

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { role } = useUserRole();

  if (role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
