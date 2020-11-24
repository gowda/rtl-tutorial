import sum from './02.sum';

describe('sum', () => {
  test('sums up two values', () => {
    expect(sum(2, 2)).toBe(4);
  });
});
