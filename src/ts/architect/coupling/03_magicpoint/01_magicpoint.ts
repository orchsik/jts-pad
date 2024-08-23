/**
 * @example
 * const recovered = recoverMagicPoint(10, 10, [10, 10, 10], 10); // 20
 */
const recoverMagicPoint = (
  currentAmount: number,
  originalMaxAmount: number,
  maxIncrements: number[],
  recoveryAmount: number
) => {
  let currentMaxMagicPoint = originalMaxAmount;
  for (const each of maxIncrements) {
    currentMaxMagicPoint += each;
  }
  return Math.min(currentAmount + recoveryAmount, currentMaxMagicPoint);
};

export {};
