class Lamp {
  public turnOn() {
    console.log('Lamp On');
  }
}

class LampButton {
  private lamp: Lamp;
  constructor(lamp: Lamp) {
    this.lamp = lamp;
  }
  public turnOn() {
    this.lamp.turnOn();
  }
}

class Alarm {
  public start() {
    console.log('Alarming...');
  }
}

class AlarmButton {
  private alarm: Alarm;
  constructor(alarm: Alarm) {
    this.alarm = alarm;
  }
  public turnOn() {
    this.alarm.start();
  }
}

class MultiButton {
  private lamp: Lamp;
  private alarm: Alarm;
  private mode: string;
  constructor(lamp: Lamp, alarm: Alarm) {
    this.lamp = lamp;
    this.alarm = alarm;
  }
  public setMode(mode: string) {
    this.mode = mode;
  }
  public turnOn() {
    if (this.mode === 'lamp') {
      this.lamp.turnOn();
    } else if (this.mode === 'alarm') {
      this.alarm.start();
    }
  }
}

class Client {
  public static main() {
    const lamp = new Lamp();
    const lampButton = new LampButton(lamp);
    lampButton.turnOn();

    const alarm = new Alarm();
    const alarmButton = new AlarmButton(alarm);
    alarmButton.turnOn();

    const multiButton = new MultiButton(lamp, alarm);
    multiButton.setMode('alarm');
    multiButton.turnOn();
    multiButton.setMode('lamp');
    multiButton.turnOn();
  }
}

Client.main();

export {};
