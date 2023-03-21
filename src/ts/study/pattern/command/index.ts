interface Command {
  execute(): void;
}

class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  execute(): void {
    console.log(
      `SimpleCommand: See, I can do simple things like printing (${this.payload})`
    );
  }
}

class ComplexCommand implements Command {
  private receiver: Receiver;
  // receiver의 메서드를 실행하는데 필요한 Context 데이터
  private a: string;
  private b: string;

  // 생성자를 통해 컨텍스트 데이터와 하나 또는 여러 개의 receiver 개체를 받을 수 있다.
  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  execute(): void {
    console.log(
      'ComplexCommand: Complex stuff should be done by a receiver object.'
    );
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

// Receiver 클래스에는 비즈니스 로직이 포함되어 있다.
// 요청 수행과 관련된 모든 종류의 작업을 수행하는 방법을 알고 있다.
// 사실 모든 클래스가 수신자 역할을 할 수 있다.
class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }
  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

// Invoker는 1개 이상의 명령과 연결되고, 명령에 요청을 보낸다.
class Invoker {
  private onStart: Command;
  private onFinish: Command;

  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  // Invoker는 구체적인 명령이나 Receiver 클래스에 의존하지 않는다.
  // 명령을 실행하여 간접적으로 요청을 Receiver에게 전달한다.
  public doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log('Invoker: ...doing something really important...');

    console.log('Invoker: Does anybody want something done after I finish?');
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: any): object is Command {
    return object.execute !== undefined;
  }
}

class Application {
  public static main(): void {
    const invoker = new Invoker();
    invoker.setOnStart(new SimpleCommand('Say Hi!'));
    const receiver = new Receiver();
    invoker.setOnFinish(
      new ComplexCommand(receiver, 'Send email', 'Save report')
    );
    invoker.doSomethingImportant();
  }
}
Application.main();

export {};
