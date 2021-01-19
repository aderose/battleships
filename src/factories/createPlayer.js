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

  const makeMove = () => {};

  const randomMove = () => {};

  return {
    getName: () => player,
    getType: () => (isRobot ? 'Robot' : 'Human'),
    takeTurn: isRobot ? randomMove : makeMove,
  };
};

export default createPlayer;
