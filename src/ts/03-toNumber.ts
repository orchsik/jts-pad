// https://school.programmers.co.kr/learn/courses/30/lessons/81301
// [TODO]

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
    const sliced = sliceByMatch(numberMatch(source));
    source = sliced.others;
    separated.push(sliced.word, sliced.number);
    if (!numberMatch(sliced.others)) {
      separated.push(sliced.others);
    }
  }

  if (separated.length === 0) separated.push(source);
  return separated;
}

const separteNumberCalling = (input: string) => {
  const result = [];
  let characters = [];
  input.split("").forEach((char, i) => {
    characters.push(char);
    const str = characters.join("");
    if (Number(PIVOT[str] || str)) {
      characters = [];
      result.push(str);
    }
  });
  return result;
};

export { solution, separateByNumber, charToNum, separteNumberCalling };
