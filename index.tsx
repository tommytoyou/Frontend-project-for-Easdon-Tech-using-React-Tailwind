import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserRoleProvider } from "./context/UserRoleContext";
import "./styles/index.css"; // Global CSS

// Ensure container is typed for TypeScript
const container = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserRoleProvider>
        <App />
      </UserRoleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
