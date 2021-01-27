import React from 'react';

import Gameboard from './Gameboard';

import { Container, Notification, FlexFormat } from '../style';

import createGameboard from '../factories/createGameboard';

const Game = ({ size }) => {
  return (
    <Container>
      <Notification>
        It is your turn, fire a shot at the enemy waters!
      </Notification>
      <FlexFormat>
        <Gameboard
          title="Your Water"
          gameboard={createGameboard(size)}
          isPlaceable={false}
        />
        <Gameboard
          title="Enemy Water"
          gameboard={createGameboard(size)}
          isPlaceable={false}
          isInteractive={true}
        />
      </FlexFormat>
    </Container>
  );
};

export default Game;
