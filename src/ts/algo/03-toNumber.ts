// https://school.programmers.co.kr/learn/courses/30/lessons/81301
// [O]

const solution = (input: string) => {
  let result = "";
  let word = "";
  for (let char of input.split("")) {
    if (char.match(/\d/)) {
      result += char;
    } else {
      word += char;
      if (DICT[word]) {
        result += DICT[word];
        word = "";
      }
    }
  }
  return Number(result);
};

const DICT = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

export { solution };
