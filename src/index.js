import React from "react";
import ReactDOMclient from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOMclient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
