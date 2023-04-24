import { expect, it } from 'vitest';
import sum from '../src/sum';

it('Should returns correct sum', () => {
  const result = sum(2, 5);
  expect(result).toBe(7);
});
