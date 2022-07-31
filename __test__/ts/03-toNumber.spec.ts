import { solution } from "../../src/ts/03-toNumber";

describe("various solution case", () => {
  it("one", () => {
    const answer = solution("one");
    expect(answer).toBe(1);
  });
  it("one1", () => {
    const answer = solution("one1");
    expect(answer).toBe(11);
  });
  it("one4seveneight", () => {
    const answer = solution("one4seveneight");
    expect(answer).toBe(1478);
  });
  it("one4seveneight9", () => {
    const answer = solution("one4seveneight9");
    expect(answer).toBe(14789);
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
  it("123onetwo", () => {
    const answer = solution("123onetwo");
    expect(answer).toBe(12312);
  });
});
