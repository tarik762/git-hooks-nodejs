import sum from "../src/sum.js";
import { assert, expect, test, it } from 'vitest'

it("Should returns correct sum", () => {
    const result = sum(2,5);
    expect(result).toBe(7);
})