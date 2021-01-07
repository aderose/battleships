const createGameboard = () => {
  const gameboard = Array.from({ length: 10 }, () =>
    Array.from({ length: 10 }, () => 0),
  );

  const getBoard = () => gameboard;
  const place = (x, y, length, isHorizontal = true) => {
    if ([x, y, length].includes(undefined))
      throw new Error(
        'Invalid number of arguments: x, y & length are required',
      );
  };
  return { getBoard, place };
};

export default createGameboard;
