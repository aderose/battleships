const createPlayer = (player = 'Player') => {
  if (typeof player !== 'string') {
    throw new Error('Player name must be a string');
  }

  return {
    getName: () => player,
  };
};

export default createPlayer;
