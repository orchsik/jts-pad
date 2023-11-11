class HitPoint {
  amount: number;
}

type State = 'normal' | 'poisoned' | 'paralyzed' | 'sleeping' | 'dead';
class Member {
  readonly hitPoint: HitPoint;
  readonly states: State[];

  damage(damageAmount: number) {
    this.hitPoint.amount -= damageAmount;
  }
}

export {};
