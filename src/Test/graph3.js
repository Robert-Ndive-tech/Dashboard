import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const MyCurveChart = () => {
  // Sample data for a sine curve (replace with your own data generation logic)
  const data = [];
  for (let i = 0; i <= 100; i++) {
    const angle = (i * Math.PI) / 50; // Adjust the period as needed
    data.push({
      x: i,
      y: Math.sin(angle),
    });
  }

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="x" />
      <YAxis dataKey="y" label="Value" /> {/* Add label for Y-axis */}
      <Line type="monotone" dataKey="y" stroke="#ff7300" />{" "}
      {/* Adjust line color */}
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
    </LineChart>
  );
};

export default MyCurveChart;
