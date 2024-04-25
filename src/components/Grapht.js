import React from "react";
import Plotly from "react-plotly.js";
import "../styles/Innerdiv.css";
const data = [
  {
    x: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    y: [400, 300, 200, 100, 200, 350],
    name: "Visitors",
    type: "scatter",
    mode: "lines+markers",
    marker: {
      color: "blue",
    },
  },
  {
    x: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    y: [100, 150, 120, 80, 130, 180],
    name: "Vehicles",
    type: "scatter",
    mode: "lines+markers",
    marker: {
      color: "red",
    },
  },
];

const layout = {
  title: "Entry Statistics",
  xaxis: {
    title: "Day",
    tickmode: "category",
    ticktext: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
  },
  yaxis: {
    title: "Count",
  },
  legend: {
    traceOrder: "reversed", // Display 'Vehicles' line on top
  },
};

const MyGraph = () => {
  return (
    <div className="don">
      <Plotly data={data} layout={layout} />
    </div>
  );
};

export default MyGraph;
