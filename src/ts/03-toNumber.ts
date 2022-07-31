// https://school.programmers.co.kr/learn/courses/30/lessons/81301
// [O]

const solution = (input: string) => {
  const result = [];
  charToNum(separateByNumber(input)).forEach((str) => {
    result.push(...separteNumberCalling(str));
  });
  return Number(charToNum(result).join(""));
};

const PIVOT = {
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

const charToNum = (input: string[]) => input.map((item) => PIVOT[item] || item);

function separateByNumber(input: string) {
  const numberMatch = (input) => input.match(/\d/);

  const sliceByMatch = ({ input, index }) => ({
    word: input.slice(0, index),
    number: input[index],
    others: input.slice(index + 1),
  });

  let source = input;
  const separated = [];
  while (numberMatch(source)) {
    const result = sliceByMatch(numberMatch(source));
    source = result.others;
    separated.push(result.word, result.number);
    if (!numberMatch(result.others) && result.others) {
      separated.push(result.others);
    }
  }
  return separated;
}

const separteNumberCalling = (input: string) => {
  const result = [];
  let tmp = [];
  input.split("").forEach((char, i) => {
    tmp.push(char);
    const str = tmp.join("");
    if (parseInt(PIVOT[str] || parseInt(str))) {
      tmp = [];
      result.push(str);
    }
  });
  return result;
};

export { solution, separateByNumber, charToNum, separteNumberCalling };
