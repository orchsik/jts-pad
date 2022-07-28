import { solution } from "../../src/ts/05-dart";

// 점수|보너스|[옵션]
// 점수 = 0~10
// 보너스 = S, D, T
// 옵션 = *, #
// * = 이전과 현재 점수 더블
// # = 현재 점수 마이너스

describe("", () => {
  it("1S2D*3T", () => {
    const answer = solution("1S2D*3T");
    expect(answer).toBe(37); // 1^1 * 2 + 2^2 * 2 + 3^3
  });

  it("1D2S#10S", () => {
    const answer = solution("1D2S#10S");
    expect(answer).toBe(9); // 1^2 + 2^1 * (-1) + 10^1
  });

  it("1D2S0T", () => {
    const answer = solution("1D2S0T");
    expect(answer).toBe(3); // 1^2 + 2^1 * (-1) + 10^1
  });

  it("1S*2T*3S", () => {
    const answer = solution("1S*2T*3S");
    expect(answer).toBe(23); // 1^2 + 2^1 * (-1) + 10^1
  });

  it("1D#2S*3S", () => {
    const answer = solution("1D#2S*3S");
    expect(answer).toBe(5); // 1^2 + 2^1 * (-1) + 10^1
  });

  it("1T2D3D#", () => {
    const answer = solution("1T2D3D#");
    expect(answer).toBe(-4); // 1^2 + 2^1 * (-1) + 10^1
  });

  it("1D2S3T*", () => {
    const answer = solution("1D2S3T*");
    expect(answer).toBe(59); // 1^2 + 2^1 * (-1) + 10^1
  });
});
