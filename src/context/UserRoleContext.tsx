import React, {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';
import { useNavigate } from 'react-router-dom';

interface UserRoleContextType {
  role: string | null;
  loginAsAdmin: () => void;
  logout: () => void;
}

const UserRoleContext = createContext<UserRoleContextType | undefined>(undefined);

export const useUserRole = () => {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error('useUserRole must be used within a UserRoleProvider');
  }
  return context;
};

const UserRoleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const loginAsAdmin = () => {
    setRole('admin');
  };

  const logout = () => {
    setRole(null);
    navigate('/');
  };

  return (
    <UserRoleContext.Provider value={{ role, loginAsAdmin, logout }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export default UserRoleProvider;
