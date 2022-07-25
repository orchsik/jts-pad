const PIVOT = {
  lefts: [1, 4, 7],
  rights: [3, 6, 9],
  both: [2, 5, 8, 0],
};

const handleLeft = (numbers: number[]) => {
  const tmp = [...numbers];
  return tmp
    .map((num) => {
      if (PIVOT.lefts.includes(num)) {
        return "L";
      }
      return num;
    })
    .join("");
};

const solution = (numbers: number[]) => {
  const result = numbers;
  const tmp = {};
  numbers.forEach((num, i) => {
    const distance = numbers[i + 1] - numbers[i];
    // console.log(num);
    tmp.add({ [num]: num });
    // [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5] -> LRLLLRLLRRL
    // 123
    // 456
    // 789
    // *0#
    // 2 : {
    //   1: [1, 3, 5],
    //   2: [4, 6, 8],
    //   3: [0, 7, 9],
    // }
    // 5 : {
    //   1: [2, 4, 6, 8],
    //   2: [1, 3, 7, 9, 0],
    // }
    //  8 : {
    //   1: [0, 5, 7, 9],
    //   2: [2, 4, 6],
    //   3: [1, 3],
    // }
    //  0 : {
    //   1: [8],
    //   2: [5, 7, 9],
    //   3: [2, 4, 6],
    //   4: [1, 3],
    // }
  });
  console.log(tmp);
  console.log(tmp[1]);

  return result;
  // return "LRLLLRLLRRL";
};

export { solution, handleLeft };
