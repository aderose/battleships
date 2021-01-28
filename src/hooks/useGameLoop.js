import createGameboard from '../factories/createGameboard';
import createPlayer from '../factories/createPlayer';
import createShip from '../factories/createShip';

const useGameLoop = () => {
  const setupGame = () => {
    const playerGameboard = createGameboard(10);
    const robotGameboard = createGameboard(10);

    playerGameboard.place(0, 0, createShip(5), true);
    playerGameboard.place(1, 2, createShip(4), false);
    playerGameboard.place(9, 9, createShip(3), true);
    playerGameboard.place(5, 5, createShip(3), true);
    playerGameboard.place(0, 9, createShip(2), false);

    robotGameboard.place(0, 0, createShip(5), true);
    robotGameboard.place(1, 2, createShip(4), false);
    robotGameboard.place(9, 9, createShip(3), true);
    robotGameboard.place(5, 5, createShip(3), true);
    robotGameboard.place(0, 9, createShip(2), false);

    const player = createPlayer(playerGameboard, 'Player', false);
    const robot = createPlayer(robotGameboard, 'Robot', true);

    return { playerGameboard, robotGameboard, player, robot };
  };

  const clickHandler = (event, gameboard, i, j) => {
    const didHit = gameboard.receiveAttack(i, j);
    event.target.textContent = didHit ? 'X' : 'O';
  };

  return { setupGame, clickHandler };
};

export default useGameLoop;
