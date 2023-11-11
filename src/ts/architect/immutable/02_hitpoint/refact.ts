class HitPoint {
  private readonly MIN = 0;
  amount: number;

  constructor(readonly aAmount: number) {
    if (aAmount < this.MIN) {
      throw new Error('amount must be greater than 0');
    }
  }

  damage(damageAmount: number) {
    const nextAmount = this.amount - damageAmount;
    this.amount = Math.max(nextAmount, this.MIN);
  }

  isZero() {
    return this.amount === this.MIN;
  }
}

type State = 'normal' | 'poisoned' | 'paralyzed' | 'sleeping' | 'dead';
class Member {
  readonly hitPoint: HitPoint;
  readonly states: State[];

  damage(damageAmount: number) {
    this.hitPoint.damage(damageAmount);
    if (this.hitPoint.isZero()) {
      this.states.push('dead');
    }
  }
}

export {};
