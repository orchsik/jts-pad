interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

class Light {
  constructor(private switchable: Switchable) {}
  turnOn(): void {
    this.switchable.turnOn();
  }
  turnOff(): void {
    this.switchable.turnOff();
  }
}

class Button implements Switchable {
  turnOn(): void {
    console.log('Button turnOn');
  }
  turnOff(): void {
    console.log('Button turnOff');
  }
}

class SmartPhone implements Switchable {
  turnOn(): void {
    console.log('SmartPhone turnOn');
  }
  turnOff(): void {
    console.log('SmartPhone turnOff');
  }
}

const lamp = new Light(new Button());
const smartLamp = new Light(new SmartPhone());

export {};

lamp.turnOn();
smartLamp.turnOn();
