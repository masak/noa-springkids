import React from 'react';

const N = 5;

// Returns 1 for a true input and 0 for a false input
function ken(condition) {
  return condition ? 1 : 0;
}

const GameBoard = (props) => {
  let horizontalLines = [];
  for (let x = 0; x <= 1200; x += 100) {
    horizontalLines.push(
      <line x1={x}
            y1="-10"
            x2={x}
            y2="710"
            stroke="#bbb"
            strokeWidth="4"
      />
    );
  }

  let verticalLines = [];
  for (let y = 0; y <= 700; y += 100) {
    verticalLines.push(
      <line x1="-10"
            y1={y}
            x2="1210"
            y2={y}
            stroke="#bbb"
            strokeWidth="4"
      />
    );
  }

  let verticalWallCoords = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= N; j++) {
      verticalWallCoords.push([100 + 50 * i + 100 * j, 150 + 100 * i]);
    }
  }

  let verticalWalls = [];
  for (let [x, y] of verticalWallCoords) {
    verticalWalls.push(
      <line x1={x}
            y1={y - 35}
            x2={x}
            y2={y + 35}
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
      />
    );
  }

  let slashWallCoords = [];
  for (let i = 0; i <= N; i++) {
    for (let j = 0; j < N; j++) {
      slashWallCoords.push([125 + 50 * i + 100 * j, 100 + 100 * i]);
    }
  }

  let slashWalls = [];
  for (let [x, y] of slashWallCoords) {
    slashWalls.push(
      <line x1={x - 25}
            y1={y + 15}
            x2={x + 25}
            y2={y - 15}
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
      />
    );
  }

  let backslashWallCoords = [];
  for (let i = 0; i <= N; i++) {
    for (let j = ken(i === 0); j <= N - ken(i === N); j++) {
      backslashWallCoords.push([75 + 50 * i + 100 * j, 100 + 100 * i]);
    }
  }

  let backslashWalls = [];
  for (let [x, y] of backslashWallCoords) {
    backslashWalls.push(
      <line x1={x - 25}
            y1={y - 15}
            x2={x + 25}
            y2={y + 15}
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
      />
    );
  }

  let colHeadingCoords = [];
  for (let i = 0; i < N; i++) {
    let letter = String.fromCharCode("a".charCodeAt(0) + i);
    let x = 110 + 100 * i;
    let y = 60;
    colHeadingCoords.push([letter, x, y]);
  }

  let colHeadings = [];
  for (let [letter, x, y] of colHeadingCoords) {
    colHeadings.push(
      <text x={x}
            y={y}
            textAnchor="middle"
            fontFamily="Verdana"
            fontSize="54"
      >{letter}</text>
    );
  }

  let rowHeadingCoords = [];
  for (let i = 0; i < N; i++) {
    let digit = String(i + 1);
    let x = 50 + 50 * i;
    let y = 150 + 100 * i;
    rowHeadingCoords.push([digit, x, y]);
  }

  let rowHeadings = [];
  for (let [digit, x, y] of rowHeadingCoords) {
    rowHeadings.push(
      <text x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Verdana"
            fontSize="54"
      >{digit}</text>
    );
  }

  let circleCoords = [];
  for (let i = 0; i < 3; i++) {
    circleCoords.push([850 + i * 100, 150 + i * 200]);
  }

  let circles = [];
  for (let [x, y] of circleCoords) {
    circles.push(
      <circle cx={x}
              cy={y}
              r="75"
              fill="white"
              stroke="black"
              strokeWidth="6"
      />
    );
  }

  return (
    <svg width="12cm" height="7cm" viewBox="-10 -10 1210 720"
      xmlns="http://www.w3.org/2000/svg" version="1.1">
      {verticalWalls}
      {slashWalls}
      {backslashWalls}
      {colHeadings}
      {rowHeadings}
      {circles}
      <circle cx="850" cy="150" r="35" fill="black" stroke="none" />
      <circle cx="950" cy="350" r="35" fill="white" stroke="black" strokeWidth="6" />
      <line x1="1020" y1="520" x2="1080" y2="580" stroke="black" strokeWidth="6" />
      <line x1="1020" y1="580" x2="1080" y2="520" stroke="black" strokeWidth="6" />
    </svg>
  );
};

export default GameBoard;

