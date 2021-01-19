const createPlayer = (gameboard, player = 'Player', isRobot = false) => {
  if (gameboard === undefined) throw new Error('A gameboard is required');

  if (Object.prototype.toString.call(gameboard).slice(8, -1) !== 'Object')
    throw new Error('The gameboard must be an object');

  // ensure gameboard object contains the listed properties
  const {
    getBoard,
    getMissedShots,
    place,
    receiveAttack,
    allShipsSunk,
  } = gameboard;

  // check properties are defined and are functions
  if (
    getBoard === undefined ||
    getMissedShots === undefined ||
    place === undefined ||
    receiveAttack === undefined ||
    allShipsSunk === undefined ||
    typeof getBoard !== 'function' ||
    typeof getMissedShots !== 'function' ||
    typeof place !== 'function' ||
    typeof receiveAttack !== 'function' ||
    typeof allShipsSunk !== 'function'
  ) {
    throw new Error('gameboard must be a Gameboard object');
  }

  if (typeof player !== 'string') {
    throw new Error('Player name must be a string');
  }
  if (typeof isRobot !== 'boolean') {
    throw new Error('isRobot must be a boolean');
  }

  const size = getBoard().length;

  const makeMove = (x, y) => {
    if (typeof x !== 'number' || parseInt(x) !== x || x < 0 || x > size - 1) {
      throw new Error('x coordinate must be an integer between 0-9');
    }
    if (typeof y !== 'number' || parseInt(y) !== y || y < 0 || y > size - 1) {
      throw new Error('y coordinate must be an integer between 0-9');
    }
  };

  const randomMove = () => {};

  return {
    getName: () => player,
    getType: () => (isRobot ? 'Robot' : 'Human'),
    takeTurn: isRobot ? randomMove : makeMove,
  };
};

export default createPlayer;
