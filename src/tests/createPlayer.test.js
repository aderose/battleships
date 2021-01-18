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
