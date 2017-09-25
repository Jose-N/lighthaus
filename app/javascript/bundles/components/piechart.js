import React from 'react';
import { scaleOrdinal } from 'd3-scale'
import { arc, pie } from 'd3-shape'

const PieChart = props => {

  const width = 960;
  const height = 500;
  const radius = Math.min(width, height) / 2;

  const color = scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  const path = arc()
    .outerRadius(radius - 10)
    .innerRadius(0)

  const label = arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);

  const pieChart = pie()
    .sort(null)
    .value(d => d.value);

  const data = props.data
  console.log(props.data)
  return (
    <div className='pie-chart'>
      <h1>Views Pie Chart</h1>
      <svg width={width} height={height}>
        <g transform={`translate(${width /2}, ${height / 2})`}>
          {pieChart(data).map((d, i) => (
            <g key={i} className="arc">
              <path d={path(d)} fill={color(d.data.label)}></path>
              <text
                dy=".10em"
                transform={`translate(${label.centroid(d)})`}
                textAlign="center"
                textBaseAlign="bottom"
              >
                {i + 1}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}; 

export default PieChart;
