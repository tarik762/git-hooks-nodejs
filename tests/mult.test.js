import { expect, it } from 'vitest';
import mult from '../src/mult';

it('Should returns correct mult', () => {
  const result = mult(10, 3);
  expect(result).toBe(30);
});
