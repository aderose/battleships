import React from 'react';

import { BoardContainer, Heading, Board, Cell } from '../style';

const Gameboard = ({
  title,
  board,
  clickHandler,
  isLabelled = false,
  isInteractive = false,
  areShipsHidden = false,
}) => {
  const labels = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  return (
    <BoardContainer>
      <Heading>{title}</Heading>
      <Board>
        <tbody>
          {isLabelled && (
            <tr>
              {labels.map((label, i) => (
                <Cell key={i} isLabel>
                  {label}
                </Cell>
              ))}
            </tr>
          )}
          {board.map((row, j) => (
            <tr key={j}>
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
                  onClick={() => {
                    if (isInteractive) clickHandler(i, j);
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </Board>
    </BoardContainer>
  );
};

export default Gameboard;
