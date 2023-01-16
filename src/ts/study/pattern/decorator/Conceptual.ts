// 집합, 옷 껴입기
// 데코레이터는 객체들을 새로운 행동들을 포함한 특수 래퍼 객체들 내에 넣어서 위 행동들을 해당 객체들에 연결시키는 구조적 디자인 패턴입니다.

// Component 인터페이스에 데코레이터에 의해 변경될 수 있는 작업을 정의한다.
interface Component {
  operation(): string;
}

// ConcreteComponent는 기본 구현을 제공한다.
class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent';
  }
}

// Decorator 클래스는 동일한 인터페이스를 따른다.
// 이 클래스의 목적은 구체적인 데코레이터에 대한 래핑 인터페이스를 정의하는 것이다.
// 기본 구현에는 래핑된 구성 요소를 저장하기 위한 필드와 생성자가 포함될 수 있다.
class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  // 데코레이터는 작업을 래핑된 구성 요소에 위임한다.
  public operation(): string {
    return this.component.operation();
  }
}

// 콘크리트 데코레이터는 래핑된 객체를 호출하고 어떤 식으로든 변경한다.
class ConcreteDecoratorA extends Decorator {
  // 데코레이터는 래핑된 개체를 직접 호출하는 대신 부모 구현을 호출할 수 있다.
  // 이 접근 방식은 데코레이터 클래스의 확장을 단순화한다.
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

// 데코레이터는 래핑된 객체를 호출하기 전이나 후에 동작을 실행할 수 있다.
class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

// 클라이언트 코드는 Component 인터페이스를 사용하는 모든 개체와 함께 작동한다.
// 이렇게 하면 함께 작동하는 구성 요소의 구체적인 클래스와 독립적으로 유지할 수 있다.
function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

// 이렇게 하면 클라이언트 코드가 두 가지 간단한 구성 요소를 모두 지원할 수 있다.
const simple = new ConcreteComponent();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log('');

// 데코레이터가 다른 데코레이터도 래핑할 수 있다.
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("Client: Now I've got a decorated component:");
clientCode(decorator2);

export {};
