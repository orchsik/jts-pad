/**
 * 클라이언트 코드에서 사용하는 인터페이스를 정의한다.
 */
class Target {
  public request(): string {
    return "Target: The default target's behavior.";
  }
}

/**
 * Adaptee에는 유용한 동작이 포함되어 있지만 해당 인터페이스는 기존 클라이언트 코드와
 * 호환되지 않는다. Adaptee는 클라이언트 코드에서 사용하기 전에 약간의 변형이 필요하다.
 */
class Adaptee {
  public specificRequest(): string {
    return '.eetpadA eht fo roivaheb laicepS';
  }
}

/**
 * Adaptee 안터페이스를 Target 인터페이스 호환되게 만든다.
 */
class Adapter extends Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee;
  }

  public request(): string {
    const result = this.adaptee.specificRequest().split('').reverse().join('');
    return `Adapter: (TRANSLATED) ${result}`;
  }
}

function clientCode(target: Target) {
  console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

const adaptee = new Adaptee();
console.log(
  "Client: The Adaptee class has a weird interface. See, I don't understand it:"
);
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);

export {};
