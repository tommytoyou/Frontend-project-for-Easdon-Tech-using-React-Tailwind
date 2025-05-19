import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './output.css';
import { BrowserRouter } from 'react-router-dom';
import { OrdersProvider } from './context/OrdersContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OrdersProvider>
        <App />
      </OrdersProvider>
    </BrowserRouter>
  </React.StrictMode>
);



