/**
 * @example
 * const magicPoint = new MagicPoint(10, 10, [1, 2, 3]);
 * magicPoint.recover(5);
 */
class MagicPoint {
  private currentAmount: number;
  private originalMaxAmount: number;
  private maxIncrements: number[];

  constructor(
    currentAmount: number,
    originalMaxAmount: number,
    maxIncrements: number[]
  ) {
    this.currentAmount = currentAmount;
    this.originalMaxAmount = originalMaxAmount;
    this.maxIncrements = maxIncrements;
  }

  max() {
    let amount = this.originalMaxAmount;
    for (const each of this.maxIncrements) {
      amount += each;
    }
    return amount;
  }

  recover(recoveryAmount: number) {
    this.currentAmount = Math.min(
      this.currentAmount + recoveryAmount,
      this.max()
    );
  }
}

export {};
