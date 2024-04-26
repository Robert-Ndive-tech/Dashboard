import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "../styles/Innerdiv.css";

const data = [
  // Replace with your actual data
  { month: "Mon", visitors: 80, vehicles: 75 },
  { month: "Tue", visitors: 107, vehicles: 80 },
  { month: "Wed", visitors: 180, vehicles: 65 },
  { month: "Thur", visitors: 100, vehicles: 90 },
  { month: "Fri", visitors: 280, vehicles: 70 },
  { month: "Sat", visitors: 107, vehicles: 60 },
];

const MyEntryStatisticsChart = () => {
  const [chartData, setChartData] = useState(data); // State to hold chart data

  return (
    <LineChart width={600} height={300} data={chartData} className="chart">
      <XAxis dataKey="month" fill="#00000" />
      <YAxis tickLineStroke="#333" tick={{ stroke: "#333", fill: "#333" }} />
      <CartesianGrid stroke="#fff" strokeDasharray="0 0" />
      {/* Two Lines (one for visitors, one for vehicles) */}
      <Line
        type="monotone"
        dataKey="visitors"
        stroke="#8884d8"
        name="Visitors"
      />
      <Line
        type="monotone"
        dataKey="vehicles"
        stroke="#0000ff"
        name="Vehicles"
      />
      <Tooltip /> {/* Add tooltip for data point hover information */}
    </LineChart>
  );
};

export default MyEntryStatisticsChart;

/*   <Line
        type="monotone"
        dataKey="vehicles"
        stroke="#0000ff"
        name="Vehicles"
      />*/
