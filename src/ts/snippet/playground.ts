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

function test2(input: string) {
  let _input = input;
  const speratedResult = [];
  while (numberMatch(_input)) {
    const result = divideByMatch(numberMatch(_input));
    _input = result.others;
    speratedResult.push(result.word, result.number);
    if (result.others && numberMatch(result.others)) {
      speratedResult.push(result.others);
    }
  }
  console.log({ speratedResult });
  return speratedResult;
}

let input = "one4seven5eight";
test2(input);

export { test2 };
