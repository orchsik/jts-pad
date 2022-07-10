import { substract } from "../../src/ts/substract";

describe("test add function", () => {
  it("should return 5 for substract(5)", () => {
    expect(substract(10, 5)).toBe(5);
  });

  it("sould return -1 for substract(2,3)", () => {
    expect(substract(2, 3)).toBe(-1);
  });
});
