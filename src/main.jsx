import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.scss";
export const server = "http://localhost:8000/";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);