enum MagicType {
  fire = 'fire',
  lightning = 'lightning',
  hellFire = 'hellFire',
}

interface Magic {
  readonly name: string;
  readonly costMagicPoint: () => number;
  readonly attackPower: () => number;
  readonly costTechnicalPoint: () => number;
}

class Fire implements Magic {
  private readonly member: Member;
  constructor(member: Member) {
    this.member = member;
  }
  readonly name = '파이어';
  readonly costMagicPoint = () => 2;
  readonly attackPower = () => 20 + this.member.level * 0.5;
  readonly costTechnicalPoint = () => 0;
}

class Lightning implements Magic {
  private readonly member;
  constructor(member: Member) {
    this.member = member;
  }
  readonly name = '라이트닝';
  readonly costMagicPoint = () => 5 + this.member.level * 0.2;
  readonly attackPower = () => 50 + this.member.agility * 1.5;
  readonly costTechnicalPoint = () => 5;
}

class HellFire implements Magic {
  private readonly member;
  constructor(member: Member) {
    this.member = member;
  }
  readonly name = '헬파이어';
  readonly costMagicPoint = () => 16;
  readonly attackPower = () =>
    200 + this.member.magicAttack * 0.5 + this.member.vitality * 2;
  readonly costTechnicalPoint = () => 20 + this.member.level * 0.4;
}

export {};

class Member {
  level: number;
  agility: number;
  magicAttack: number;
  vitality: number;
}
