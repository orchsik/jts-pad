// 복제 기능이 있는 예제 클래스.
// 유형이 다른 필드의 값이 어떻게 복제되는지 살펴보자.

class ComponentWithBackReference {
  public prototype;
  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

class Prototype {
  public primitive: any;
  public component: object;
  public circularReference: ComponentWithBackReference;

  public clone(): this {
    const clone = Object.create(this);

    clone.component = Object.create(this.component);

    // 백레퍼런스가 있는 중첩된 객체가 있는 객체를 복제하려면 특별한 처리가 필요하다.
    // 복제가 완료되면 중첩된 객체는 원본 객체가 아닌 복제된 객체를 가리켜야 한다.
    // 이 경우 스프레드 연산자를 사용하면 편리하다.
    clone.circularReference = {
      ...this.circularReference,
      prototype: { ...this },
    };
    return clone;
  }
}

function clientCode() {
  const p1 = new Prototype();
  p1.primitive = 245;
  p1.component = new Date();
  p1.circularReference = new ComponentWithBackReference(p1);

  const p2 = p1.clone();
  if (p1.primitive === p2.primitive) {
    console.log('✅ 원시 필드값은 clone되지 않는다.');
  } else {
    console.log('❌ 원시 필드값은 clone된다.');
  }

  if (p1.component === p2.component) {
    console.log('❌ 단순 컴포넌트는 clone되지 않는다.');
  } else {
    console.log('✅ 단순 컴포넌트는 clone된다.');
  }

  if (p2.circularReference === p2.circularReference) {
    console.log('✅ back reference가 있는 Component는 clone되지 않는다.');
  } else {
    console.log('❌ back reference가 있는 Component는 clone된다.');
  }

  if (p1.circularReference.prototype === p2.circularReference.prototype) {
    console.log('❌ back reference가 있는 Component는 원본 객체로 연결된다.');
  } else {
    console.log('✅ back reference가 있는 Component는 clone으로 연결된다.');
  }
}

clientCode();
// ✅ 원시 필드값이 clone되지 않는다.
// ✅ 단순 컴포넌트는 clone된다.
// ✅ back reference가 있는 Component는 clone되지 않는다.
// ✅ back reference가 있는 Component는 clone으로 연결된다.

export {};
