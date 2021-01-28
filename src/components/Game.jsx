import React from 'react';

import Gameboard from './Gameboard';

import { Container, Notification, FlexFormat } from '../style';

import useGameLoop from '../hooks/useGameLoop';

const Game = () => {
  const { setupGame } = useGameLoop();

  const { playerGameboard, robotGameboard } = setupGame();

  return (
    <Container>
      <Notification>
        It is your turn, fire a shot at the enemy waters!
      </Notification>
      <FlexFormat>
        <Gameboard
          title={'You'}
          gameboard={playerGameboard}
          isLabelled={false}
          areCellsHidden={false}
        />
        <Gameboard
          title={'Enemy'}
          gameboard={robotGameboard}
          isLabelled={false}
          isInteractive={true}
        />
      </FlexFormat>
    </Container>
  );
};

export default Game;
