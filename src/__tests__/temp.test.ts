import { take } from '../RhaxCore';
import { Rhax } from '..';

describe('temp', () => {
  test('temp', () => {
    expect(
      (take({ a: 3, b: 4, c: 5 }) as Rhax<{ a: 3, b: 4, c: 5 }>)
        .reduce((acc, val) => acc + val, 0)
        .map(x => 2 * x - 5)
        .default(-7)
        ()
    ).toBe(19);
  });
});