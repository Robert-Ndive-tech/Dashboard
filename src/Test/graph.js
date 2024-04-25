import React from "react";
import Plot from "react-plotly.js";

class SimpleGraph extends React.Component {
  render() {
    const data = [
      {
        x: [1, 2, 3, 4, 5],
        y: [2, 4, 6, 8, 10],
        type: "scatter",
        mode: "lines",
        marker: { color: "blue" },
      },
    ];

    const layout = {
      title: "Simple Line Graph",
      xaxis: {
        title: "X-axis",
      },
      yaxis: {
        title: "Y-axis",
      },
    };

    return (
      <div>
        <h2>Simple Line Graph using Plotly.js</h2>
        <Plot
          data={data}
          layout={layout}
          style={{ width: "100%", height: "400px" }}
        />
      </div>
    );
  }
}

export default SimpleGraph;
