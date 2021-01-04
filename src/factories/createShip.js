const createShip = (length) => {
  if (typeof length !== 'number') throw new Error('Length must be a number');
};

export default createShip;
