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

test('createShip returns an object', () => {
  expect(typeof createShip(2)).toBe('object');
  expect(typeof createShip(3)).toBe('object');
  expect(typeof createShip(4)).toBe('object');
  expect(typeof createShip(5)).toBe('object');
});

test('Returned object contains 3 properties', () => {
  expect(Object.keys(createShip(2)).length).toBe(3);
  expect(Object.keys(createShip(3)).length).toBe(3);
  expect(Object.keys(createShip(4)).length).toBe(3);
  expect(Object.keys(createShip(5)).length).toBe(3);
});

test('Returned object should have length property equal to passed argument', () => {
  expect(createShip(2)).toHaveProperty('length', 2);
  expect(createShip(3)).toHaveProperty('length', 3);
  expect(createShip(4)).toHaveProperty('length', 4);
  expect(createShip(5)).toHaveProperty('length', 5);
});

test('Returned object should have a property containing the hit method', () => {
  expect(createShip(2)).toHaveProperty('hit');
  expect(createShip(3)).toHaveProperty('hit');
  expect(createShip(4)).toHaveProperty('hit');
  expect(createShip(5)).toHaveProperty('hit');

  expect(typeof createShip(2).hit).toBe('function');
  expect(typeof createShip(3).hit).toBe('function');
  expect(typeof createShip(4).hit).toBe('function');
  expect(typeof createShip(5).hit).toBe('function');
});
