/**
 * context
 * Context는 동작의 일부를 현재 State 개체에 위임한다.
 */
class Context {
  private state: State;

  constructor(state: State) {
    this.changeState(state);
  }

  public changeState(state: State): void {
    console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  public request1(): void {
    this.state.handle1();
  }

  public request2(): void {
    this.state.handle2();
  }
}

/**
 * state
 * 기본 State 클래스는 모든 Concrete State가 구현해야 하는 메서드를 선언하고,
 * State와 연결된 Context 개체에 대한 역참조도 제공한다. 이 역참조는 상태를 전환하는 데 사용할
 * 수 있다.
 */
abstract class State {
  protected context: Context;

  public setContext(context: Context): void {
    this.context = context;
  }

  public abstract handle1(): void;

  public abstract handle2(): void;
}

/**
 * Concrete State 개체는 Context의 상태와 관련된 행동들을 정의한다.
 */
class ConcreteStateA extends State {
  public handle1(): void {
    console.log('ConcreteStateA handles request1.');
    console.log('ConcreteStateA wants to change the state of the context.');
    this.context.changeState(new ConcreteStateB());
  }

  public handle2(): void {
    console.log('ConcreteStateA handles request2.');
  }
}

class ConcreteStateB extends State {
  public handle1(): void {
    console.log('ConcreteStateB handles request1.');
  }

  public handle2(): void {
    console.log('ConcreteStateB handles request2.');
    console.log('ConcreteStateB wants to change the state of the context.');
    this.context.changeState(new ConcreteStateA());
  }
}

/**
 * client
 */
const context = new Context(new ConcreteStateA());
console.log('');

context.request1();
console.log('');
context.request2();

export {};
