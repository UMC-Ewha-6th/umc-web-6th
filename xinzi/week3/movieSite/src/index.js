import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Use createRoot to render your application
const rootInstance = ReactDOM.createRoot(root);
rootInstance.render(rootElement);
