import {
  solution,
  separateByNumber,
  charToNum,
  separteNumberCalling,
} from "../../src/ts/03-toNumber";

describe("input string convert to Number", () => {
  it("#1 문자열을 숫자기준으로 끊어서 배열에 담아준다.", () => {
    const answer = separateByNumber("one4seveneight");
    expect(answer).toEqual(["one", "4", "seveneight"]);
  });

  it("#2 주어진 배열의 아이템을 숫자로 변환(one -> 1)", () => {
    const answer = charToNum(["one", "4", "seveneight"]);
    expect(answer).toEqual(["1", "4", "seveneight"]);
  });

  it("#3 문자열을 숫자영문명칭(ex. one, two)으로 분리하기", () => {
    const answer = separteNumberCalling("seveneight");
    expect(answer).toEqual(["seven", "eight"]);
  });

  it("convert finally", () => {
    const answer = solution("one4seveneight");
    expect(answer).toBe(1478);
  });
});

describe("various solution case", () => {
  it("one4seveneight", () => {
    const answer = solution("one4seveneight");
    expect(answer).toBe(1478);
  });
  it("23four5six7", () => {
    const answer = solution("23four5six7");
    expect(answer).toBe(234567);
  });
  it("2three45sixseven", () => {
    const answer = solution("2three45sixseven");
    expect(answer).toBe(234567);
  });
  it("123", () => {
    const answer = solution("123");
    expect(answer).toBe(123);
  });
});
