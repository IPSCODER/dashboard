import React, { useEffect, useRef, useState } from 'react'
import * as d3 from "d3"
import { useSelector } from 'react-redux';

const D3br = () => {

  const ordColor = useSelector(state => state.funReducer.ordColor)

 // Fake data
const [data] = useState([
  {
    year: 2000,
    popularity: 50
  },
  {
    year: 2001,
    popularity: 150
  },
  {
    year: 2002,
    popularity: 200
  },
  {
    year: 2003,
    popularity: 130
  },
  {
    year: 2004,
    popularity: 240
  },
  {
    year: 2005,
    popularity: 380
  },
  {
    year: 2006,
    popularity: 420
  }
]);
const svgRef = useRef();

 const top_offset = 50;
     let bottom_offset = 50;

useEffect(()=>{

  const widthValue = 600;
  const heightValue = 300;
  
  // Create SVG and padding for the chart
  const svg = d3.select(svgRef.current)
    .append("svg")
    .attr("viewBox", `0 0 ${widthValue} ${heightValue}`);
  
  const strokeWidth = 1.5;
  const margin = { top: 0, bottom: 20, left: 30, right: 20 };
  const chart = svg.append("g").attr("transform", `translate(${margin.left},0)`);
  const width = 600 - margin.left - margin.right - (strokeWidth * 2);
  const height = 300 - margin.top - margin.bottom;
  const grp = chart
    .append("g")
    .attr("transform", `translate(-${margin.left - strokeWidth},-${margin.top})`);
  
  // Create scales
  const yScale = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data, dataPoint => dataPoint.popularity)]);
  const xScale = d3
    .scaleLinear()
    .range([0, width])
    .domain(d3.extent(data, dataPoint => dataPoint.year));
  
  const area = d3
    .area()
    .x(dataPoint => xScale(dataPoint.year))
    .y0(height)
    .y1(dataPoint => yScale(dataPoint.popularity));
  
  // Add area
  grp.append("path")
    .attr("transform", `translate(${margin.left},0)`)
    .datum(data)
    .style("fill", ordColor)
    .attr("stroke", "#ffffff")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", strokeWidth)
    .attr("d", area);
  
  // Add the X Axis
  chart
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale).ticks(data.length));
  
  // Add the Y Axis
  chart
    .append("g")
    .attr("transform", `translate(0, 0)`)
    .call(d3.axisLeft(yScale));
  
    window.onload = () => {
        // set animation
        svg.transition()
            .ease(d3.easeLinear)
            .duration(1000)
            // .attr("y", d => heightValue - bottom_offset - yScale(d))
            .attr("height", d => yScale(d));
      };

},[data])

  return (
    <>
    <svg style={{width:'100%',height:'-webkit-fill-available'}} ref={svgRef} /> 
    </>
  )
}

export default D3br