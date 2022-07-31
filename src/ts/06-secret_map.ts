// https://school.programmers.co.kr/learn/courses/30/lessons/17681

const solution = (n: number, arr1: number[], arr2: number[]): string[] => {
  return [""];
};

// 5 4 3 2 1
// 32 16 8 4 1
// 0 0 1 0 1
const toBinary = (n: number, input: number, acc = "") => {
  const quotient = Math.floor(input / 2 ** n);
  const remainder = input % 2 ** n;
  acc = `${acc}${quotient > 0 ? 1 : 0}`;
  console.log({ n, input, acc, quotient, remainder });

  if (remainder > 0) {
    toBinary(n - 1, input - 2 * quotient, acc);
  }

  // console.log({ quotient, remainder, acc });

  return acc;
};

export { solution, toBinary };
