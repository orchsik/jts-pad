/**
 * @example
 * const equipments = new Equipments();
 * equipments.equipArmor(new Equipment());
 */
class Equipments {
  private canChange: boolean;
  private head: Equipment;
  private armor: Equipment;
  private arm: Equipment;

  equipArmor(newArmor: Equipment) {
    if (this.canChange) {
      this.armor = newArmor;
    }
  }

  deactiveAll() {
    this.head = Equipment.EMPTY;
    this.armor = Equipment.EMPTY;
    this.arm = Equipment.EMPTY;
  }
}

export {};

class Equipment {
  static EMPTY = null;
}
