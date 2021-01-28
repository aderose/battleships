import { renderHook } from '@testing-library/react-hooks';

import useGameLoop from '../../hooks/useGameLoop';

test('useGameLoop contains a function called setupGame', () => {
  const { result } = renderHook(() => useGameLoop());

  expect(result.current).toMatchObject({
    setupGame: expect.any(Function),
  });
});

test('setupGame returns the correct object', () => {
  const { result } = renderHook(() => useGameLoop());

  expect(result.current.setupGame()).toMatchObject({
    playerGameboard: expect.any(Object),
    robotGameboard: expect.any(Object),
    player: expect.any(Object),
    robot: expect.any(Object),
  });
});

test('useGameLoop contains a function called clickHandler', () => {
  const { result } = renderHook(() => useGameLoop());

  expect(result.current).toMatchObject({
    clickHandler: expect.any(Function),
  });
});
