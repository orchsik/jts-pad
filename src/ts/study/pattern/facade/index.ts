class Facade {
  protected subsystem1: Subsystem1;
  protected subsystem2: Subsystem2;

  constructor(subsystem1: Subsystem1, subsystem2: Subsystem2) {
    this.subsystem1 = subsystem1;
    this.subsystem2 = subsystem2;
  }

  public operation(): string {
    let result = '\nFacade initializes subsystems';
    result += this.subsystem1.operation1();
    result += this.subsystem2.operation1();
    result += '\nFacade orders subsystems to perform the action';
    result += this.subsystem1.operationN();
    result += this.subsystem2.operationZ();
    return result;
  }
}

class Subsystem1 {
  public operation1(): string {
    return '\nSubsystem1: Ready!';
  }

  public operationN(): string {
    return '\nSubsystem1: Go!';
  }
}

class Subsystem2 {
  public operation1(): string {
    return '\nSubsystem2: Get ready!';
  }

  public operationZ(): string {
    return '\nSubsystem2: Fire!';
  }
}

function clientCode(facade: Facade) {
  console.log(facade.operation());
}

const subsystem1 = new Subsystem1();
const subsystem2 = new Subsystem2();
const facade = new Facade(subsystem1, subsystem2);
clientCode(facade);

export {};
