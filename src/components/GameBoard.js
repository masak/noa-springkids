import React from 'react';

const GameBoard = (props) => (
  <svg width="12cm" height="4cm" viewBox="0 0 1200 400"
    xmlns="http://www.w3.org/2000/svg" version="1.1">
    <circle cx="600"
            cy="200"
            r="100"
            fill="red"
            stroke="blue"
            stroke-width="10"
    />
  </svg>
);

export default GameBoard;

