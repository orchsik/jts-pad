// 다른 객체들이 싱글턴 클래스와 함께 new 연산자를 사용하지 못하도록 디폴트 생성자를 비공개로 설정해야 한다.
// 생성자 역할을 하는 정적 생성 메서드를 만든다.
// 내부적으로 이 메서드는 객체를 만들기 위하여 비공개 생성자를 호출한 후 객체를 정적 필드에 저장한다.
// 이 메서드에 대한 그 다음 호출들은 캐시된 객체를 반환한다.

class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

clientCode();

export {};
