import { solution } from "../../src/ts/02-newid";

describe("newid will be checked", () => {
  it("...!@BaT#*..y.abcdefghijklm -> bat.y.abcdefghi", () => {
    expect(solution("...!@BaT#*..y.abcdefghijklm")).toBe("bat.y.abcdefghi");
  });
});
