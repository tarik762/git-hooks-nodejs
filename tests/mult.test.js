import mult from "../src/mult.js";
import { assert, expect, test, it } from 'vitest'

it("Should returns correct mult", ()=>{
    const result = mult (10,3);
    expect(result).toBe(30);
})