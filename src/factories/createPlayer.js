const createPlayer = (player = 'Player', isRobot = false) => {
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
