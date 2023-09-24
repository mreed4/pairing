import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./Components/Contexts/AppContext";

import "./assets/css/index.css";

import App from "./Components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    {/* <React.StrictMode> */}
    <App />
    {/* </React.StrictMode> */}
  </AppProvider>
);
