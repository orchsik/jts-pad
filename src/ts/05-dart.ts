// https://school.programmers.co.kr/learn/courses/30/lessons/17682

const solution = (str: string) => {
  const calculatesList = [];
  scores(str).forEach((score, i) => {
    const point = score.match(/\d+/)[0];
    const [bonusValue, optionValue] = score.match(/[a-z]|\#|\*/gi);

    calculatesList.push(
      Math.pow(Number(point), bonus(bonusValue)) * option(optionValue)
    );

    if (optionValue === "*") {
      calculatesList[i - 1] = calculatesList[i - 1] * 2;
    }
  });

  const result = calculatesList.reduce((acc, val, idx) => acc + val, 0);

  // console.log(result);
  return result;
};

const bonus = (str) => {
  switch (str) {
    case "D":
      return 2;
    case "T":
      return 3;
    default:
      return 1;
  }
};
const option = (str) => {
  switch (str) {
    case "*":
      return 2;
    case "#":
      return -1;
    default:
      return 1;
  }
};

const scores = (str: string) => {
  const digitMatch = str.matchAll(/\d+/g);
  const digitIdxList = [];
  let tmp;
  while (!(tmp = digitMatch.next()).done) {
    digitIdxList.push(tmp.value.index);
  }
  const result = digitIdxList.map((_, i) => {
    return str.substring(digitIdxList[i], digitIdxList[i + 1]);
  });
  return result;
};

export { solution };
