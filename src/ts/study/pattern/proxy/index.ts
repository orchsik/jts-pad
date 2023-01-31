/**
 * Service 인터페이스는 RealService와 Proxy에 대한 공통 작업을 선언한다.
 * 클라이언트가 이 인터페이스를 사용하여 RealService와 작동하면 RealService 대신 Proxy를 전달할 수 있다.
 */
interface Service {
  request(): void;
}

/**
 * RealService에는 몇 가지 핵심 비즈니스 로직이 포함된다.
 * 보통 RealServices는 유용하지만 매우 느리거나 민감한 작업을 수행하게 되는데,
 * Proxy는 RealService의 코드를 변경하지 않고도 이런 문제를 해결할 수 있다.
 */
class RealService implements Service {
  public request(): void {
    console.log('RealService: Handling request.');
  }
}

class Proxy implements Service {
  private realService: RealService;

  /**
   * Proxy는 RealService 클래스의 개체에 대한 참조를 유지한다.
   * 지연 로드되거나 클라이언트에 의해 프록시로 전달될 수 있다.
   */
  constructor(realService: RealService) {
    this.realService = realService;
  }

  /**
   * Proxy 패턴의 가장 일반적인 응용은 loading, caching, 액세스 제어, 로깅 등 이다.
   * Proxy는 이러한 작업 중 하나를 수행한 다음 결과에 따라 실행을 연결된 RealService 개체의 동일한 메서드에
   * 전달할 수 있다.
   */
  request(): void {
    if (this.checkAccess) {
      this.realService.request();
      this.logAccess();
    }
  }

  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.');
    return true;
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }
}

/**
 * 실제 subject와 proxy를 모두 지원하기 위해 Service 인터페이스를 통해 작동하도록 되어 있다.
 * 그러나 실생활에서 클라이언트는 대부분 실제 주제와 직접 작업한다.
 * 이 경우 패턴을 보다 쉽게 구현하기 위해 실제 subject의 클래스에서 proxy를 상속할 수 있다.
 */
function clientCode(subject: Service) {
  subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realService = new RealService();
clientCode(realService);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realService);
clientCode(proxy);

export {};
