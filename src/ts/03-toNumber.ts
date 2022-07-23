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

const numberMatch = (input) => {
  return input.match(/\d/);
};

const divideByMatch = (result) => {
  const { input, index } = result;
  const word = input.slice(0, index);
  const number = input[index];
  const others = input.slice(index + 1);
  return { word, number, others };
};

function separateByNumber(input: string) {
  let _input = input;
  const speratedResult = [];
  while (numberMatch(_input)) {
    const result = divideByMatch(numberMatch(_input));
    _input = result.others;
    speratedResult.push(result.word, result.number);
    if (!numberMatch(result.others) && result.others) {
      speratedResult.push(result.others);
    }
  }
  return speratedResult;
}

const charToNum = (input: string[]) => {
  const result = input.map((item) => {
    return PIVOT[item] || item;
  });
  return result;
};

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

const solution = (input: string) => {
  const result = [];
  charToNum(separateByNumber(input)).forEach((str) => {
    result.push(...separteNumberCalling(str));
  });
  return charToNum(result).join("");
};

export { solution, separateByNumber, charToNum, separteNumberCalling };
