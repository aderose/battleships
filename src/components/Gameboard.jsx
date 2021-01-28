import React from 'react';

import { Board, Row, Cell, Heading } from '../style';

import useGameLoop from '../hooks/useGameLoop';

const Gameboard = ({
  title,
  gameboard,
  isLabelled = true,
  isInteractive = false,
  areCellsHidden = true,
}) => {
  const labels = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const board = gameboard.getBoard();

  const { clickHandler } = useGameLoop();

  return (
    <Board>
      <Heading>{title}</Heading>
      {isLabelled && (
        <Row>
          {labels.map((label, i) => (
            <Cell key={i} isLabel>
              {label}
            </Cell>
          ))}
        </Row>
      )}
      {board.map((row, j) => (
        <Row key={j}>
          {isLabelled && (
            <Cell key={j} isLabel>
              {j}
            </Cell>
          )}
          {row.map((cell, i) => (
            <Cell
              key={i}
              isActive={cell && !areCellsHidden}
              isInteractive={isInteractive}
              onClick={(event) => clickHandler(event, gameboard, i, j)}
              hasBorder
            />
          ))}
        </Row>
      ))}
    </Board>
  );
};

export default Gameboard;
