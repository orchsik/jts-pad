const { solution } = require("../../src/js/01-singo");

describe("test add function", () => {
  it("should return 50 for multiply(10,5)", () => {
    var id_list = ["muzi", "frodo", "apeach", "neo"];
    var report = [
      "muzi frodo",
      "apeach frodo",
      "frodo neo",
      "muzi neo",
      "apeach muzi",
    ];
    k = 2;

    expect(solution(id_list, report, k)).toEqual([2, 1, 1, 0]);
  });

  it("sould return 6 for multiply(2,3)", () => {});
});
