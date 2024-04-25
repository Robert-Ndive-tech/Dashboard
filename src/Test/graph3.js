import React, { useState, useEffect } from "react";
import Plotly from "react-plotly.js"; // Assuming using plotly.js-basic for size reduction

const MyChart = ({ data }) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const downsampledData = downsampleData(data, 0.5); // Reduce data points by 50%
      const trace = {
        x: downsampledData.x,
        y: downsampledData.y,
        mode: "lines",
        marker: {
          size: 4, // Adjust marker size as desired
        },
      };

      const layout = {
        title: "My Curve",
        xaxis: { title: "X-Axis" },
        yaxis: { title: "Y-Axis" },
        margin: {
          // Reduce layout margins for tighter fit
          t: 20,
          r: 10,
          b: 20,
          l: 10,
        },
      };

      const config = {
        // Reduce default font size for smaller size
        responsive: true,
        font: {
          size: 10,
        },
      };

      Plotly.newPlot("myChart", [trace], layout, config);
      setChart(true); // Indicate chart is rendered
    }
  }, [data]);

  const downsampleData = (data, ratio) => {
    const sampleSize = Math.floor(data.length * ratio);
    const newData = {
      x: [],
      y: [],
    };
    for (let i = 0; i < sampleSize; i++) {
      const index = Math.floor((i * (data.length - 1)) / (sampleSize - 1));
      newData.x.push(data[index].x);
      newData.y.push(data[index].y);
    }
    return newData;
  };

  return (
    <div id="myChart" style={{ width: "400px", height: "300px" }}>
      {chart}
    </div>
  );
};

export default MyChart;
