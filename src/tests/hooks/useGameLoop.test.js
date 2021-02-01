import { renderHook } from '@testing-library/react-hooks';

import useGameLoop from '../../hooks/useGameLoop';

test('useGameLoop contains a function called startGame', () => {
  const { result } = renderHook(() => useGameLoop());

  expect(result.current).toMatchObject({
    startGame: expect.any(Function),
  });
});

test('useGameLoop contains a function called clickHandler', () => {
  const { result } = renderHook(() => useGameLoop());

  expect(result.current).toMatchObject({
    clickHandler: expect.any(Function),
  });
});
