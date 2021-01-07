import createGameboard from '../factories/createGameboard';

let gameboard, board;

beforeAll(() => {
  gameboard = createGameboard();
  board = gameboard.getBoard();
});

test('Returns a 10x10 gameboard', () => {
  expect(board.length).toBe(10);
  board.forEach((row) => {
    expect(row.length).toBe(10);
  });
});

test("Throw error if coordinates and length aren't passed", () => {
  expect(() => gameboard.place()).toThrow(
    'Invalid number of arguments: x, y & length are required',
  );
  expect(() => gameboard.place(0)).toThrow(
    'Invalid number of arguments: x, y & length are required',
  );
  expect(() => gameboard.place(0, 0)).toThrow(
    'Invalid number of arguments: x, y & length are required',
  );
});

test('Throw error if x coordinate is not an integer between 0-9', () => {
  expect(() => gameboard.place(null, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(true, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place([], 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place({}, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place('', 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(() => {}, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(-1, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0.8, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(20, 0, 2)).toThrow(
    'x coordinate must be an integer between 0-9',
  );
});
