import createPlayer from '../factories/createPlayer';

test('Player factory throws error if passed argument is not a string', () => {
  expect(() => createPlayer(null)).toThrow('Player name must be a string');
  expect(() => createPlayer(true)).toThrow('Player name must be a string');
  expect(() => createPlayer(0)).toThrow('Player name must be a string');
  expect(() => createPlayer([])).toThrow('Player name must be a string');
  expect(() => createPlayer({})).toThrow('Player name must be a string');
  expect(() => createPlayer(() => {})).toThrow('Player name must be a string');
});

test('Passing no parameters creates the default name "Player"', () => {
  expect(createPlayer().getName()).toBe('Player');
});

test('Throw error if isRobot is not a boolean', () => {
  expect(() => createPlayer('Player', null)).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer('Player', '')).toThrow('isRobot must be a boolean');
  expect(() => createPlayer('Player', 0)).toThrow('isRobot must be a boolean');
  expect(() => createPlayer('Player', [])).toThrow('isRobot must be a boolean');
  expect(() => createPlayer('Player', {})).toThrow('isRobot must be a boolean');
  expect(() => createPlayer('Player', () => {})).toThrow(
    'isRobot must be a boolean',
  );
});

test('Passing no parameters creates a human', () => {
  expect(createPlayer().getType()).toBe('Human');
});
