const { solution } = require("../../src/ts/01-singo");

describe("test add function", () => {
  it("should return 50 for multiply(10,5)", () => {
    const id_list = ["muzi", "frodo", "apeach", "neo"];
    const report = [
      "muzi frodo",
      "apeach frodo",
      "frodo neo",
      "muzi neo",
      "apeach muzi",
    ];
    const k = 2;
    expect(solution(id_list, report, k)).toEqual([2, 1, 1, 0]);
  });
});
