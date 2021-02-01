import { useState } from 'react';
import createGameboard from '../factories/createGameboard';
import createPlayer from '../factories/createPlayer';
import createShip from '../factories/createShip';

const initialPositions = [
  { x: 0, y: 0, len: 5, isHor: true },
  { x: 1, y: 2, len: 4, isHor: false },
  { x: 9, y: 9, len: 3, isHor: true },
  { x: 5, y: 5, len: 3, isHor: true },
  { x: 0, y: 9, len: 2, isHor: false },
];

const useGameLoop = (size) => {
  const [gameboards, setGameboards] = useState({
    human: createGameboard(size),
    robot: createGameboard(size),
  });
  const [players, setPlayers] = useState({
    human: createPlayer(gameboards.human, 'Your Waters', false),
    robot: createPlayer(gameboards.robot, 'Enemy Waters', true),
  });

  const startGame = () => {
    initialPositions.forEach(({ x, y, len, isHor }) => {
      gameboards.human.place(x, y, createShip(len), isHor);
      gameboards.robot.place(x, y, createShip(len), isHor);
    });
  };

  const clickHandler = (event, i, j) => {
    const didHit = players.human.takeTurn(i, j);
    event.target.textContent = didHit ? 'X' : 'O';
  };

  return { players, startGame, clickHandler };
};

export default useGameLoop;
