import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserRoleProvider } from "./context/UserRoleContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserRoleProvider>
        <App />
      </UserRoleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
