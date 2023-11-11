class AttackPower {
  static readonly MIN = 0;
  value;

  constructor(value) {
    if (value < AttackPower.MIN) {
      throw new Error('value must be greater than 0');
    }
    this.value = value;
  }
}

class Weapon {
  readonly attackPower;

  constructor(attackPower) {
    this.attackPower = attackPower;
  }
}

export {};
