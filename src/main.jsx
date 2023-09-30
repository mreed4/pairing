import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./Components/Contexts/AppContext";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/css/index.css";

import App from "./Components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);
