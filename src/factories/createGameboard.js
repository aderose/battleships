const createGameboard = (size) => {
  const gameboard = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => 0),
  );

  const getBoard = () => gameboard;
  const place = (x, y, ship, isHorizontal = true) => {
    if ([x, y, ship].includes(undefined))
      throw new Error('Arguments x, y & ship are required');
    if (typeof x !== 'number' || x !== parseInt(x) || x < 0 || x > size - 1)
      throw new Error('x coordinate must be an integer between 0-9');
    if (typeof y !== 'number' || y !== parseInt(x) || y < 0 || y > size - 1)
      throw new Error('y coordinate must be an integer between 0-9');
    if (
      ship === null ||
      typeof ship !== 'object' ||
      ship.length === undefined ||
      ship.hit === undefined ||
      ship.isSunk === undefined ||
      typeof ship.length !== 'number' ||
      typeof ship.hit !== 'function' ||
      typeof ship.isSunk !== 'function'
    ) {
      throw new Error('ship must be a ship object');
    }
    if (typeof isHorizontal !== 'boolean')
      throw new Error('isHorizontal must be a boolean');

    // if ship placed horizontally & it overflows the gameboard, shift it left
    // by the required number of places
    let xx = isHorizontal
      ? x + ship.length > size
        ? size - ship.length
        : x
      : x;

    // if ship placed vertically & it overflows the gameboard, shift it up by
    // the required number of places
    let yy = !isHorizontal
      ? y + ship.length > size
        ? size - ship.length
        : y
      : y;

    for (let i = 0; i < ship.length; i++) {
      gameboard[yy][xx] = ship;
      isHorizontal ? xx++ : yy++;
    }

    return gameboard;
  };
  return { getBoard, place };
};

export default createGameboard;
