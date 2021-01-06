const createGameboard = () => {
  const gameboard = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => 0),
  );

  const getBoard = () => gameboard;

  return { getBoard };
};

export default createGameboard;
