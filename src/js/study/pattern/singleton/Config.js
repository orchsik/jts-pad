// 싱글톤은 클래스가 변경 불가능한 인스턴스를 하나만 갖도록 하는 디자인 패턴.
// 싱글톤 패턴은 복사하거나 수정할 수 없는 객체로 구성된다.
// 응용 프로그램에 대한 불변의 단일 지점을 원할 때 종종 유용하다.

class Config {
  constructor() {}
  start() {
    console.log('App has started');
  }
  update() {
    console.log('App has updated');
  }
}

const instance = new Config();
Object.freeze(instance);
