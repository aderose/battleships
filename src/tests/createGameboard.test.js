import createGameboard from '../factories/createGameboard';
import createShip from '../factories/createShip';

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
  expect(() => gameboard.place()).toThrow('Arguments x, y & ship are required');
  expect(() => gameboard.place(0)).toThrow(
    'Arguments x, y & ship are required',
  );
  expect(() => gameboard.place(0, 0)).toThrow(
    'Arguments x, y & ship are required',
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

test('Throw error if ship argument is not a ship object', () => {
  expect(() => gameboard.place(0, 0, null)).toThrow(
    'ship must be a ship object',
  );
  expect(() => gameboard.place(0, 0, true)).toThrow(
    'ship must be a ship object',
  );
  expect(() => gameboard.place(0, 0, [])).toThrow('ship must be a ship object');
  expect(() => gameboard.place(0, 0, '')).toThrow('ship must be a ship object');
  expect(() => gameboard.place(0, 0, 0)).toThrow('ship must be a ship object');
  expect(() => gameboard.place(0, 0, () => {})).toThrow(
    'ship must be a ship object',
  );
  expect(() =>
    gameboard.place(0, 0, { not: 'not', a: 'a', ship: 'ship' }),
  ).toThrow('ship must be a ship object');
  expect(() =>
    gameboard.place(0, 0, { length: 'not', hit: 'a', isSunk: 'ship' }),
  ).toThrow('ship must be a ship object');
});

test('Throw error if isHorizontal is passed and not a boolean', () => {
  const ship = createShip(2);

  expect(() => gameboard.place(0, 0, ship, null)).toThrow(
    'isHorizontal must be a boolean',
  );
  expect(() => gameboard.place(0, 0, ship, [])).toThrow(
    'isHorizontal must be a boolean',
  );
  expect(() => gameboard.place(0, 0, ship, {})).toThrow(
    'isHorizontal must be a boolean',
  );
  expect(() => gameboard.place(0, 0, ship, '')).toThrow(
    'isHorizontal must be a boolean',
  );
  expect(() => gameboard.place(0, 0, ship, 0)).toThrow(
    'isHorizontal must be a boolean',
  );
  expect(() => gameboard.place(0, 0, ship, () => {})).toThrow(
    'isHorizontal must be a boolean',
  );
});

test('Adding a ship horizontally of length 2 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(2);
  expect(gameboard.place(0, 0, ship, true)).toEqual([
    [ship, ship, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship vertically of length 2 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(2);
  expect(gameboard.place(0, 0, ship, false)).toEqual([
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship horizontally of length 3 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(3);
  expect(gameboard.place(0, 0, ship, true)).toEqual([
    [ship, ship, ship, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship vertically of length 3 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(3);
  expect(gameboard.place(0, 0, ship, false)).toEqual([
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship horizontally of length 4 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(4);
  expect(gameboard.place(0, 0, ship, true)).toEqual([
    [ship, ship, ship, ship, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship vertically of length 4 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(4);
  expect(gameboard.place(0, 0, ship, false)).toEqual([
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship horizontally of length 5 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(5);
  expect(gameboard.place(0, 0, ship, true)).toEqual([
    [ship, ship, ship, ship, ship, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});

test('Adding a ship vertically of length 5 at (0, 0)', () => {
  const gameboard = createGameboard(10);
  const ship = createShip(5);
  expect(gameboard.place(0, 0, ship, false)).toEqual([
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [ship, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
});
