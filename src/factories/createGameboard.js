const createGameboard = () => {
  const gameboard = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => 0),
  );

  const getBoard = () => gameboard;
  const place = (x, y, length, isHorizontal = true) => {
    if ([x, y, length].includes(undefined)) {
      throw new Error(
        'Invalid number of arguments: x, y & length are required',
      );
    }
    if (
      typeof x !== 'number' ||
      x !== parseInt(x) ||
      x < 0 ||
      x > gameboard.length - 1
    ) {
      throw new Error('x coordinate must be an integer between 0-9');
    }
  };
  return { getBoard, place };
};

export default createGameboard;
