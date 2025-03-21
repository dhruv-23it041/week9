import React from "react";
import ReactDOM from "react-dom/client";  // ✅ FIXED: Use ReactDOM.createRoot
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
