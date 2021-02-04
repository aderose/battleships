import React, { useState, useEffect } from 'react';

import Gameboard from './Gameboard';

import createGameboard from '../factories/createGameboard';
import createPlayer from '../factories/createPlayer';
import createShip from '../factories/createShip';

import { Container, Notification, FlexibleFormat } from '../style';

const Game = () => {
  const initialPositions = [
    { x: 0, y: 0, len: 5, isHor: true },
    { x: 1, y: 2, len: 4, isHor: false },
    { x: 9, y: 9, len: 3, isHor: true },
    { x: 5, y: 5, len: 3, isHor: true },
    { x: 0, y: 9, len: 2, isHor: false },
  ];

  const [gameboards, setGameboards] = useState({
    human: createGameboard(10),
    robot: createGameboard(10),
  });

  const { human, robot } = {
    human: createPlayer(gameboards.human, 'Your Waters', false),
    robot: createPlayer(gameboards.robot, 'Enemy Waters', true),
  };

  const [isHumanTurn, setIsHumanTurn] = useState(true);

  useEffect(() => {
    initialPositions.forEach(({ x, y, len, isHor }) => {
      gameboards.human.place(x, y, createShip(len), isHor);
      gameboards.robot.place(x, y, createShip(len), isHor);
    });
    setGameboards({
      human: gameboards.human,
      robot: gameboards.robot,
    });
  }, []);

  const robotMove = () => {
    setTimeout(() => {
      const { x, y, isSuccess } = robot.takeTurn();
      console.log(x, y, isSuccess);
      setIsHumanTurn(true);
    }, 500);
  };

  const clickHandler = (event, i, j) => {
    console.log(isHumanTurn);
    if (!isHumanTurn) return;
    const { isSuccess } = human.takeTurn(i, j);
    event.target.textContent = isSuccess ? 'X' : 'O';
    setIsHumanTurn(false);
    robotMove();
  };

  return (
    <Container>
      <Notification>
        {isHumanTurn
          ? 'It is your turn, fire a shot at enemy waters!'
          : 'The enemy is taking their shot!'}
      </Notification>
      <FlexibleFormat>
        <Gameboard player={human} clickHandler={clickHandler} />
        <Gameboard
          player={robot}
          areShipsHidden={true}
          isInteractive={true}
          clickHandler={clickHandler}
        />
      </FlexibleFormat>
    </Container>
  );
};

export default Game;
