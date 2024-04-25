import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = ({ data }) => {
  const [chartData, setChartData] = useState(data); // Your data
  const svgRef = useRef(null); // Ref for the SVG element

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Define scales based on your data
    const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.x)])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y)])
      .range([height, 0]);

    // Draw the axes
    const xAxis = d3.axisBottom(xScale);
    g.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);

    const yAxis = d3.axisLeft(yScale);
    g.append("g").call(yAxis);

    // Draw the line using a path element
    const line = d3
      .line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    g.append("path")
      .datum(data) // Bind data to the path element
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }, [data]); // Update chart on data change

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
};

export default LineChart;
