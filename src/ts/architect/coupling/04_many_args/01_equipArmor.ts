const equipAmor = (memberId: number, newArmor: Equipment) => {
  if (party.memebers[memberId].equipments.canChange) {
    party.memebers[memberId].equipments.armor = newArmor;
  }
};

export {};

const party: any = {};

class Equipment {}
