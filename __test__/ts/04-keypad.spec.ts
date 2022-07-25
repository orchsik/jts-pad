import { handleLeft, solution } from "../../src/ts/04-keypad";

describe("왼손/오른손잡이가 주어진 숫자배열을 키패드에 누를 때 사용하는 손배열", () => {
  // it("1, 4, 7 = 왼손", () => {});
  // it('3, 6, 9 = 오른손', () => {})
  // it('2, 5, 8, 0 = 현재 패드에서 가까운순, 같은 거리(상하좌우)면 자기 손잡이 손', () => {})

  it("[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]", () => {
    const answer = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]);
    expect(answer).toEqual("LRLLLRLLRRL");
  });
});
