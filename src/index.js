// external
import * as d3 from 'd3';

// internal
import pathpoints from 'data/pathpoints';
import textpoints from 'data/textpoints';
import bubbles from 'data/bubbles';
import params from 'data/params';

// globals
let xScale;
let yScale;
let lines;
let paths;
let svg;

function init() {
  // scales
  const xValues = pathpoints.reduce((pre, cur) => pre.concat([cur.start.x, cur.end.x]), []);
  const xDomain = d3.set(xValues).values().map(d => parseInt(d, 10)).sort((a, b) => a - b);

  // making the step smaller ensures there will be enough space for text on right
  const xStep = params.viz.width / xDomain.length;
  const xMax = params.viz.width;

  xScale = d3.scaleOrdinal()
    .domain(xDomain)
    .range(d3.range(0, xMax, xStep));

  const yValues = pathpoints.reduce((pre, cur) => pre.concat([cur.start.y, cur.end.y]), []);
  const yDomain = d3.extent(yValues);

  yScale = d3.scaleLinear()
    .domain(yDomain)
    .range([0, params.viz.height]);

  // data
  lines = pathpoints.filter(d => d.type === 'line');
  paths = pathpoints.filter(d => d.type === 'path');
}

function addSVG() {
  const width = params.viz.width + params.viz.margin.left + params.viz.margin.right;
  const height = params.viz.height + params.viz.margin.top + params.viz.margin.bottom;

  // create SVG element and save it to globals
  svg = d3.select('#wrapper')
    .append('svg')
      .attr('id', 'journey-svg')
      .attr('width', width)
      .attr('height', height)
    .append('g')
      .attr('transform', `translate(${params.viz.margin.left},${params.viz.margin.top})`);

  // add the style to the SVG wrapper - center the wrapper and SVG
  d3.select('#wrapper')
    .attr('style', `margin: 0 auto; width: ${width}px`);
}

function drawLines() {
  svg.selectAll('mainPaths')
    .data(lines)
    .enter()
    .append('rect')
    .attr('class', 'mainPaths')
    .attr('x', d => xScale(d.start.x))
    .attr('y', d => yScale(d.start.y))
    .attr('width', d => d.shiftX ? params.lines.width * 2 : params.lines.width)
    .attr('height', d => yScale(d.end.y - d.start.y))
    .attr('fill', d => d.color)
    .attr('transform', d => d.shiftX ? `translate(${d.shiftX}, 0)` : null);
}

function drawPaths() {
  // a shift to align the path and line because their ends do not match
  const shift = params.lines.width / 2;

  svg.selectAll('.journey')
    .data(paths)
    .enter()
    .append('path')
    .attr('class', 'journey')
    .attr('d', d => {
      // start of the path
      const x1 = xScale(d.start.x) + params.lines.width / 2;
      const y1 = yScale(d.start.y);

      // end of the path
      const x2 = xScale(d.end.x) + params.lines.width / 2;
      const y2 = yScale(d.end.y);

      // shifts of x and y coord for control points
      // const xShift = 0; // not used for this type of curve
      const yShift = (y2 - y1) / 2;

      // control point one - x and y coord
      const p1x = x1;
      const p1y = y1 + yShift;

      // control point one - x and y coord
      const p2x = x2;
      const p2y = y2 - yShift;

      // draw bexier cubic curve with teo control points
      return `M ${x1} ${y1} C ${p1x} ${p1y}, ${p2x} ${p2y}, ${x2} ${y2}`;
    })
    .attr('fill', d => 'none')
    .attr('stroke', d => d.color)
    .attr('stroke-width', d => d.shiftX ? params.lines.width * 2 : params.lines.width)
    .attr('transform', d => d.shiftX ? `translate(${d.shiftX + shift}, 0)` : null);
}

function drawText() {
  // default text shift so that it doesn't collide with the paths
  const textShift = params.lines.width * 4;

  svg.selectAll('.ramble')
    .data(textpoints)
    .enter()
    .append('text')
    .attr('class', 'ramble')
    .attr('x', d => xScale(d.x) + textShift * (d.align ? -1.5 : 1))
    .attr('y', d => yScale(d.y))
    .attr('fill', d => d.color)
    .attr('font-size', d => d.size || params.text.size)
    .attr('font-family', d => d.font || null)
    .attr('text-anchor', d => d.align || null)
    .attr('transform', d => d.rotate ? `rotate(${d.rotate} ${xScale(d.x)} ${yScale(d.y)})` : null)
    .text(d => d.text);
}

function drawBubbles() {
  const bubble = `
    m 32.339338,-904.55632
    c -355.323298,0
      -643.374998,210.31657
      -643.374998,469.78125
      0,259.46468
      288.0517,469.812505
      643.374998,469.812505
      123.404292,0
      238.667342,-25.3559002
      336.593752,-69.3438
      69.80799,78.7043
      181.84985,84.1354
      378.90625,5.3126
      -149.2328,-8.9191
      -166.3627,-41.22
      -200.6562,-124.031305
      80.6876,-78.49713
      128.5,-176.04496
      128.5,-281.75
      0,-259.46468
      -288.0205,-469.78125
      -643.343802,-469.78125 z`;

  svg.selectAll('.bubble')
    .data(bubbles)
    .enter()
    .append('path')
    .attr('class', 'bubble')
    .attr('d', d => bubble)
    .attr('stroke', d => d.color)
    .attr('stroke-width', d => params.lines.width)
    .attr('transform', d => {
      const x = xScale(d.x) + d.shiftX;
      const y = yScale(d.y);

      const scaleX = d.scaleX || d.scale;
      const scaleY = d.scaleY || d.scale;

      return `translate(${x}, ${y}) scale(${scaleX}, ${scaleY})`;
    });
}

function draw() {
  addSVG();
  drawLines();
  drawPaths();
  drawBubbles();
  drawText();
}

init();
draw();
