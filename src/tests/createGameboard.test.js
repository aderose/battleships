import createGameboard from '../factories/createGameboard';

let gameboard, board;

beforeAll(() => {
  gameboard = createGameboard(10);
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
    'Arguments x, y & length are required',
  );
  expect(() => gameboard.place(0)).toThrow(
    'Arguments x, y & length are required',
  );
  expect(() => gameboard.place(0, 0)).toThrow(
    'Arguments x, y & length are required',
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

test('Throw error if y coordinate is not an integer between 0-9', () => {
  expect(() => gameboard.place(0, null, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, true, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, [], 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, {}, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, '', 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, () => {}, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, -1, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, 0.8, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
  expect(() => gameboard.place(0, 20, 2)).toThrow(
    'y coordinate must be an integer between 0-9',
  );
});
