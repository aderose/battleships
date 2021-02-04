import React from 'react';

import { BoardContainer, Heading, Board, Cell } from '../style';

const Gameboard = ({
  player,
  clickHandler,
  isLabelled = false,
  isInteractive = false,
  areShipsHidden = false,
}) => {
  const labels = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  return (
    <BoardContainer>
      <Heading>{player.getName()}</Heading>
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
          {player.getBoard().map((row, j) => (
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
                  onClick={(e) => {
                    if (isInteractive) clickHandler(e, i, j);
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
