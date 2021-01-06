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
