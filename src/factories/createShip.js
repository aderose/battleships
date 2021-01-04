const createShip = (length) => {
  if (typeof length !== 'number') throw new Error('Length must be a number');
  if (![2, 3, 4, 5].includes(length))
    throw new Error('Length can only be 2, 3, 4 or 5');
  return {
    prop1: '',
    prop2: '',
    prop3: '',
  };
};

export default createShip;
