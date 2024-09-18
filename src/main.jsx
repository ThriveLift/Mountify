import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./styles/global.css";

// Create a root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component into the root.
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/Mountify"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
