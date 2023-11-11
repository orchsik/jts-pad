const checkParent = (str: string) => {
  let result;
  const lefts = [];
  for (const char of str.split("")) {
    if (!char.match(/\(|\)/)) {
      continue;
    }
    if (char === "(") {
      lefts.push(char);
      continue;
    }
    if (lefts.length < 1) {
      result = "NO";
      break;
    }
    lefts.pop();
  }
  result = result ? result : lefts.length ? "NO" : "YES";
  return result;
};

const solution = (input: any) => {
  const fs = require("fs");
  // const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
  input = input.toString().trim().split("\n");
  const cnt = input.shift();

  const result = [];
  for (const data of input) {
    result.push(checkParent(data));
  }

  console.log(result.join("\n"));
  return result.join("\n");
};

// solution(1);

export { solution };
