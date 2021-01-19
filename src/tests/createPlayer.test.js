import createPlayer from '../factories/createPlayer';
import createGameboard from '../factories/createGameboard';

const gameboard = createGameboard(10);

test('Passing no parameters throws an error"', () => {
  expect(() => createPlayer()).toThrow('A gameboard is required');
  expect(() => createPlayer(undefined)).toThrow('A gameboard is required');
});

test('Throw error if passed gameboard is not an object', () => {
  expect(() => createPlayer(null)).toThrow('The gameboard must be an object');
  expect(() => createPlayer(true)).toThrow('The gameboard must be an object');
  expect(() => createPlayer(0)).toThrow('The gameboard must be an object');
  expect(() => createPlayer([])).toThrow('The gameboard must be an object');
  expect(() => createPlayer(() => {})).toThrow(
    'The gameboard must be an object',
  );
});

test('Throw error if gameboard is not a Gamboard object', () => {
  expect(() => createPlayer({})).toThrow(
    'gameboard must be a Gameboard object',
  );
  expect(() => createPlayer({ prop1: '', prop2: '' })).toThrow(
    'gameboard must be a Gameboard object',
  );
  expect(() => createPlayer({ prop1: () => {}, prop2: () => {} })).toThrow(
    'gameboard must be a Gameboard object',
  );
  expect(() =>
    createPlayer({
      getBoard: '',
      getMissedShots: '',
      place: '',
      receiveAttack: '',
      allShipsSunk: '',
    }),
  ).toThrow('gameboard must be a Gameboard object');
});

test('Player factory throws error if passed player name is not a string', () => {
  expect(() => createPlayer(gameboard, null)).toThrow(
    'Player name must be a string',
  );
  expect(() => createPlayer(gameboard, true)).toThrow(
    'Player name must be a string',
  );
  expect(() => createPlayer(gameboard, 0)).toThrow(
    'Player name must be a string',
  );
  expect(() => createPlayer(gameboard, [])).toThrow(
    'Player name must be a string',
  );
  expect(() => createPlayer(gameboard, {})).toThrow(
    'Player name must be a string',
  );
  expect(() => createPlayer(gameboard, () => {})).toThrow(
    'Player name must be a string',
  );
});

test('Throw error if isRobot is not a boolean', () => {
  expect(() => createPlayer(gameboard, 'Player', null)).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer(gameboard, 'Player', '')).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer(gameboard, 'Player', 0)).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer(gameboard, 'Player', [])).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer(gameboard, 'Player', {})).toThrow(
    'isRobot must be a boolean',
  );
  expect(() => createPlayer(gameboard, 'Player', () => {})).toThrow(
    'isRobot must be a boolean',
  );
});

test('Throw error if takeTurn x coordinate is not an integer between 0-9', () => {
  expect(() => createPlayer(gameboard).takeTurn()).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => createPlayer(gameboard).takeTurn(undefined)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => createPlayer(gameboard).takeTurn(null)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => createPlayer(gameboard).takeTurn(true)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => createPlayer(gameboard).takeTurn('')).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => createPlayer(gameboard).takeTurn([])).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => createPlayer(gameboard).takeTurn({})).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => createPlayer(gameboard).takeTurn(() => {})).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => createPlayer(gameboard).takeTurn(-10)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => createPlayer(gameboard).takeTurn(0.5)).toThrow(
    'x coordinate must be an integer between 0-9',
  );

  expect(() => createPlayer(gameboard).takeTurn(100)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
});
