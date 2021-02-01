import React from 'react';

import { Board, Row, Cell, Heading } from '../style';

const Gameboard = ({
  player,
  clickHandler,
  isLabelled = false,
  isInteractive = false,
  areShipsHidden = false,
}) => {
  const labels = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const board = player.getBoard();

  return (
    <Board>
      <Heading>{player.getName()}</Heading>
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
              isActive={cell && !areShipsHidden}
              isInteractive={isInteractive}
              onClick={(e) => clickHandler(e, i, j)}
              hasBorder
            />
          ))}
        </Row>
      ))}
    </Board>
  );
};

export default Gameboard;
