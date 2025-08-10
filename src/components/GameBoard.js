import React from 'react';
import { Fragment } from 'react';

const N = 5;

// Returns 1 for a true input and 0 for a false input
function ken(condition) {
  return condition ? 1 : 0;
}

const BlackStone = (props) => (
  <circle cx={props.x} cy={props.y} r="35" fill="black" stroke="none" />
);

const WhiteStone = (props) => (
  <circle cx={props.x}
          cy={props.y}
          r="35"
          fill="white"
          stroke="black"
          strokeWidth="6"
  />
);

const RemoveStoneX = (props) => (
  <Fragment>
    <line x1={Number(props.x) - 30}
          y1={Number(props.y) - 30}
          x2={Number(props.x) + 30}
          y2={Number(props.y) + 30}
          stroke="black"
          strokeWidth="6"
    />
    <line x1={Number(props.x) - 30}
          y1={Number(props.y) + 30}
          x2={Number(props.x) + 30}
          y2={Number(props.y) - 30}
          stroke="black"
          strokeWidth="6"
    />
  </Fragment>
);

class GameBoard extends React.Component {
  render(props) {
    let horizontalLines = [];
    for (let x = 0; x <= 1200; x += 100) {
      horizontalLines.push(
        <line key={x}
              x1={x}
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
        <line key={y}
              x1="-10"
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
        <line key={x + ";" + y}
              x1={x}
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
        <line key={x + ";" + y}
              x1={x - 25}
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
        <line key={x + ";" + y}
              x1={x - 25}
              y1={y - 15}
              x2={x + 25}
              y2={y + 15}
              stroke="black"
              strokeWidth="6"
              strokeLinecap="round"
        />
      );
    }

    let cellCoords = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        cellCoords.push([150 + 50 * i + 100 * j, 150 + 100 * i]);
      }
    }

    let cells = [];
    for (let [x, y] of cellCoords) {
      let d = `M ${x - 50} ${y - 35} ` +
        `L ${x} ${y - 65} ` +
        `L ${x + 50} ${y - 35} ` +
        `L ${x + 50} ${y + 35} ` +
        `L ${x} ${y + 65} ` +
        `L ${x - 50} ${y + 35} ` +
        `z`;
      cells.push(
        <path key={x + ";" + y}
              d={d}
              fill="#ddd"
              stroke="none"
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
        <text key={letter}
              x={x}
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
        <text key={digit}
              x={x}
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
        <circle key={x + ";" + y}
                cx={x}
                cy={y}
                r="75"
                fill="#ddd"
                stroke="black"
                strokeWidth="6"
        />
      );
    }

    return (
      <svg width="12cm" height="7cm" viewBox="-10 -10 1210 720"
        xmlns="http://www.w3.org/2000/svg" version="1.1">
        {cells}
        {verticalWalls}
        {slashWalls}
        {backslashWalls}
        {colHeadings}
        {rowHeadings}
        {circles}
        <BlackStone x="850" y="150" />
        <WhiteStone x="950" y="350" />
        <RemoveStoneX x="1050" y="550" />
      </svg>
    );
  }
}

export default GameBoard;

