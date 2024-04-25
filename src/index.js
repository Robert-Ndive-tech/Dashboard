import React from "react";
import ReactDOM from "react-dom/client";

import Homediv from "./components/Homediv";
import MyCurveChart from "./Test/graph3";
import MyEntryStatisticsChart from "./Test/graph56";
import Dashboard from "./components/Dashboard/Dashboard.";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
