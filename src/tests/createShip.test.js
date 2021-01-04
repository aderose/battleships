import createShip from '../factories/createShip';

test('Throw error if length is not a number', () => {
  expect(() => createShip()).toThrow('Length must be a number');
  expect(() => createShip(undefined)).toThrow('Length must be a number');
  expect(() => createShip(null)).toThrow('Length must be a number');
  expect(() => createShip(true)).toThrow('Length must be a number');
  expect(() => createShip([])).toThrow('Length must be a number');
  expect(() => createShip({})).toThrow('Length must be a number');
  expect(() => createShip('')).toThrow('Length must be a number');
  expect(() => createShip(() => {})).toThrow('Length must be a number');
});

test('Throw error if length is not in the array [5, 4, 3, 3, 2]', () => {
  expect(() => createShip(1)).toThrow('Length can only be 2, 3, 4 or 5');
  expect(() => createShip(-100)).toThrow('Length can only be 2, 3, 4 or 5');
  expect(() => createShip(0.980394)).toThrow('Length can only be 2, 3, 4 or 5');
  expect(() => createShip(5 / 2)).toThrow('Length can only be 2, 3, 4 or 5');
});
