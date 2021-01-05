const createShip = (length) => {
  if (typeof length !== 'number') throw new Error('Length must be a number');
  if (![2, 3, 4, 5].includes(length))
    throw new Error('Length can only be 2, 3, 4 or 5');
  return {
    length,
    hit: (position) => {
      if (typeof position !== 'number')
        throw new Error('Position must be a number');
      if (position < 0 || position !== parseInt(position))
        throw new Error('Position must be a positive integer');
      if (position >= length)
        throw new Error('Position must be less than length');
    },
    prop3: '',
  };
};

export default createShip;
