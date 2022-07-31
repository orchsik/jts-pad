import { solution, toBinary } from "../../src/ts/06-secret_map";

describe("", () => {
  it("정수를 2진수로 변경, 최대자릿수 = 주어진 정수", () => {
    expect(toBinary(5, 9)).toBe("00101");
  });

  // it("5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]", () => {
  //   const answer = solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
  //   expect(answer).toEqual(["#####", "# # #", "### #", "# ##", "#####"]);
  // });
});
