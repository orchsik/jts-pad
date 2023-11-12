enum MagicType {
  fire = 'fire',
  lightning = 'lightning',
  hellFire = 'hellFire',
}

class Magic {
  readonly name: string;
  readonly costMagicPoint: number;
  readonly attackPower: number;
  readonly costTechnicalPoint: number;

  constructor(readonly magicType: MagicType, readonly member: Member) {
    switch (magicType) {
      case MagicType.fire:
        this.name = '파이어';
        this.costMagicPoint = 2;
        this.attackPower = 20 + member.level * 0.5;
        this.costTechnicalPoint = 0;
        break;
      case MagicType.lightning:
        this.name = '라이트닝';
        this.costMagicPoint = 5 + member.level * 0.2;
        this.attackPower = 50 + member.agility * 1.5;
        this.costTechnicalPoint = 5;
        break;
      case MagicType.hellFire:
        this.name = '헬파이어';
        this.costMagicPoint = 16;
        this.attackPower = 200 + member.magicAttack * 0.5 + member.vitality * 2;
        this.costTechnicalPoint = 20 + member.level * 0.4;
        break;
      default:
        throw new Error('illegal argument exception');
    }
  }
}

export {};

class Member {
  level: number;
  agility: number;
  magicAttack: number;
  vitality: number;
}
