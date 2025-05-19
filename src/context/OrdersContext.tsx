import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Order = {
  id: string;
  customer: string;
  product: string;
  quantity: number;
  date: string;
  status: 'Pending' | 'Shipped' | 'Complete';
};

type OrdersContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    setOrders((prev) => [...prev, order]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
};
