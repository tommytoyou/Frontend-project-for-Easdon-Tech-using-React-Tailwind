import React, { createContext, useContext, useState } from "react";

type UserRole = "guest" | "admin";

interface UserRoleContextType {
  role: UserRole;
  loginAsAdmin: () => void;
  logout: () => void;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export const UserRoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>("guest");

  const loginAsAdmin = () => setRole("admin");
  const logout = () => setRole("guest");

  return (
    <UserRoleContext.Provider value={{ role, loginAsAdmin, logout }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export const useUserRole = () => {
  const context = useContext(UserRoleContext);
  if (!context) throw new Error("useUserRole must be used within UserRoleProvider");
  return context;
};
