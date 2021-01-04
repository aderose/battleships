import createShip from '../factories/createShip';

test('Throw error if argument is not a number', () => {
  expect(() => createShip()).toThrow('Length must be a number');
  expect(() => createShip(undefined)).toThrow('Length must be a number');
  expect(() => createShip(null)).toThrow('Length must be a number');
  expect(() => createShip(true)).toThrow('Length must be a number');
  expect(() => createShip([])).toThrow('Length must be a number');
  expect(() => createShip({})).toThrow('Length must be a number');
  expect(() => createShip('')).toThrow('Length must be a number');
  expect(() => createShip(() => {})).toThrow('Length must be a number');
});
