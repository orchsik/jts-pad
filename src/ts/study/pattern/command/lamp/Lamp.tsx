interface Command {
  execute(): void;
}

class Button {
  private command: Command;
  constructor(command: Command) {
    this.setCommand(command);
  }
  public setCommand(command: Command) {
    this.command = command;
  }
  public handlePress() {
    this.command.execute();
  }
}

class Lamp {
  public turnOn() {
    console.log('Lamp On');
  }
}
class LampOnCommand implements Command {
  private lamp: Lamp;
  constructor(lamp: Lamp) {
    this.lamp = lamp;
  }
  public execute() {
    this.lamp.turnOn();
  }
}

class Alarm {
  public start() {
    console.log('Alarming...');
  }
}
class AlarmStartCommand implements Command {
  private alarm: Alarm;
  constructor(alarm: Alarm) {
    this.alarm = alarm;
  }
  public execute() {
    this.alarm.start();
  }
}

class Client {
  public static main() {
    const lamp = new Lamp();
    const lampOnCommand = new LampOnCommand(lamp);
    const alarm = new Alarm();
    const alarmStartCommand = new AlarmStartCommand(alarm);

    const button = new Button(lampOnCommand);
    button.handlePress();
    button.setCommand(alarmStartCommand);
    button.handlePress();
  }
}

Client.main();

export {};
