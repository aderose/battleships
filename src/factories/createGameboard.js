const createGameboard = (size) => {
  const gameboard = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0),
  );

  const getBoard = () => gameboard;
  const place = (x, y, length, isHorizontal = true) => {
    if ([x, y, length].includes(undefined))
      throw new Error('Arguments x, y & length are required');
    if (typeof x !== 'number' || x !== parseInt(x) || x < 0 || x > size - 1)
      throw new Error('x coordinate must be an integer between 0-9');
    if (typeof y !== 'number' || y !== parseInt(x) || y < 0 || y > size - 1)
      throw new Error('y coordinate must be an integer between 0-9');
  };
  return { getBoard, place };
};

export default createGameboard;
