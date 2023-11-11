const solution = (inputaa: any[]) => {
  const fs = require("fs");
  // const readFileSyncAddress = '/dev/stdin';
  const readFileSyncAddress = "input.txt";
  const input = fs
    .readFileSync(readFileSyncAddress)
    .toString()
    .trim()
    .split("\n");

  const cnt = Number(input.splice(0, 1));
  const stack = [];
  for (let i = 0; i < cnt; i++) {
    const _num = Number(input[i]);
    if (_num === 0) {
      stack.pop();
    } else {
      stack.push(_num);
    }
  }

  const result = stack.reduce((acc, value) => {
    return acc + value;
  }, 0);

  console.log(result);
  return result;
};

solution([]);
export { solution };
