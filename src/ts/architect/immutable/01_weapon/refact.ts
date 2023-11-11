class AttackPower {
  static readonly MIN = 0;
  readonly value: number;

  constructor(readonly aValue: number) {
    if (aValue < AttackPower.MIN) {
      throw new Error('value must be greater than 0');
    }
    this.value = aValue;
  }

  reinforce(increment: AttackPower) {
    return new AttackPower(this.value + increment.value);
  }

  disable() {
    return new AttackPower(AttackPower.MIN);
  }
}

class Weapon {
  readonly attackPower: AttackPower;

  constructor(readonly aAttackPower: AttackPower) {
    this.attackPower = aAttackPower;
  }

  reinforce(increment: AttackPower) {
    const reinforced = this.attackPower.reinforce(increment);
    return new Weapon(reinforced);
  }
}

export {};
