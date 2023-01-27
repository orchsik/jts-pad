class Product1 {
  public parts: string[] = [];
  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}

/**
 * builder
 * Product1 의 parts를 만든다.
 */
interface Builder {
  reset(): void;
  producePartA(): void;
  producePartB(): void;
  producePartC(): void;
}

class ConcreteBuilder1 implements Builder {
  private product: Product1;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.product = new Product1();
  }

  /**
   * 모던 생산 단계는 동일한 product에 작동해야한다.
   */
  producePartA(): void {
    this.product.parts.push('PartA1');
  }
  producePartB(): void {
    this.product.parts.push('PartB1');
  }
  producePartC(): void {
    this.product.parts.push('PartC1');
  }

  /**
   * 일반적으로 최종 결과를 클라이언트에 반환한 후 빌더 인스턴스는 다른 제품 생산을 시작할 준비가
   * 되어야 한다. 그렇기 때문에 `getProduct` 메서드 본문의 끝에서 재설정 메서드를 호출하는 것이
   * 일반적이다. 그러나 이 동작은 필수가 아니며 빌더가 이전 결과를 처리하기 전에 클라이언트 코드에서
   * 명시적인 재설정 호출을 기다리도록 할 수 있다.
   */
  getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

/**
 * director
 * 특정 주문이나 구성에 따라 제품을 생산할 때 유용하다.
 * Director 클래스는 선택 사항이다. 클라이언트가 빌더를 직접 제어할 수 있기 때문이다.
 */
class Director {
  private builder: Builder;

  /**
   * Director는 클라이언트 코드가 전달하는 빌더 인스턴스와 함께 작동한다.
   * 이렇게 하면 클라이언트 코드가 새로 조립된 제품의 최종 유형을 변경할 수 있다.
   */
  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}

/**
 * 클라이언트 코드는 빌더 객체를 생성하고 디렉터에게 전달한 다음 구성 프로세스를 시작한다.
 * 최종 결과는 빌더 개체에서 찾을 수 있다.
 */
function clientCode(director: Director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  console.log('Standard basic product:');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('Standard full featured product:');
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  console.log('Custom product:');
  builder.producePartA();
  builder.producePartC;
  builder.getProduct().listParts();
}

const diredctor = new Director();
clientCode(diredctor);

export {};
