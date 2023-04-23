const sum = require("../src/sum")

it("Should returns correct sum", () => {
    const result = sum(2,5);
    expect(result).toBe(7);
})