import createShip from '../factories/createShip';

test('Throw error if argument is not a number', () => {
  expect(() => createShip()).toThrow('Argument must be a number');
  expect(() => createShip(undefined)).toThrow('Argument must be a number');
  expect(() => createShip(null)).toThrow('Argument must be a number');
  expect(() => createShip(true)).toThrow('Argument must be a number');
  expect(() => createShip([])).toThrow('Argument must be a number');
  expect(() => createShip({})).toThrow('Argument must be a number');
  expect(() => createShip('')).toThrow('Argument must be a number');
  expect(() => createShip(() => {})).toThrow('Argument must be a number');
});
