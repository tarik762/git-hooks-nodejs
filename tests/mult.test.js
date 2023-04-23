const mult = require("../src/mult");

it("Should returns correct mult", ()=>{
    const result = mult (10,3);
    expect(result).toBe(30);
})