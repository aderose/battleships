import React from 'react';

import Gameboard from './Gameboard';

import { Container, Notification, FlexFormat } from '../style';

import useGameLoop from '../hooks/useGameLoop';

const Game = () => {
  const {
    players: { human, robot },
    startGame,
    clickHandler,
  } = useGameLoop(10);

  startGame();

  return (
    <Container>
      <Notification>It is your turn, fire a shot at enemy waters!</Notification>
      <FlexFormat>
        <Gameboard player={human} clickHandler={clickHandler} />
        <Gameboard
          player={robot}
          areShipsHidden={true}
          isInteractive={true}
          clickHandler={clickHandler}
        />
      </FlexFormat>
    </Container>
  );
};

export default Game;
