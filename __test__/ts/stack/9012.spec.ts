import { solution } from "../../../src/ts/stack/9012";

describe("", () => {
  it("(())())", () => {
    const answer = solution(
      "7\n(x)\n(())())\n(((()())()\n(()())((()))\n((()()(()))(((())))()\n()()()()(()()())()\n(()((())()(\n"
    );
    expect(answer).toBe("YES\nNO\nNO\nYES\nNO\nYES\nNO");
  });
  // it("(((()())()", () => {
  //   const answer = solution("(((()())()");
  //   expect(answer).toBe("NO");
  // });
  // it("(()())((()))", () => {
  //   const answer = solution("(()())((()))");
  //   expect(answer).toBe("YES");
  // });
  // it("((()()(()))(((())))()", () => {
  //   const answer = solution("(((()()(()))(((())))()");
  //   expect(answer).toBe("NO");
  // });
  // it("()()()()(()()())()", () => {
  //   const answer = solution("()()()()(()()())()");
  //   expect(answer).toBe("YES");
  // });
  // it("(()((())()(", () => {
  //   const answer = solution("(()((())()(");
  //   expect(answer).toBe("NO");
  // });

  // it("((", () => {
  //   const answer = solution("((");
  //   expect(answer).toBe("NO");
  // });
  // it("))", () => {
  //   const answer = solution("))");
  //   expect(answer).toBe("NO");
  // });
  // it("())(()", () => {
  //   const answer = solution("())(()");
  //   expect(answer).toBe("NO");
  // });
});
