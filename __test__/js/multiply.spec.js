const { multiply } = require("../../src/js/multiply");

describe("test add function", () => {
  it("should return 50 for multiply(10,5)", () => {
    expect(multiply(10, 5)).toBe(50);
  });

  it("sould return 6 for multiply(2,3)", () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
