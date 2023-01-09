// 추상 팩토리 패턴을 사용하면 구체적인 클래스를 지정하지 않고도 관련 객체의 패밀리를 생성할 수 있다.
// 일부 속성과 메서드만 공유하는 개체를 만들어야 하는 상황에서 유용하다.

// 작동 방식은 클라이언트가 상호 작용하는 추상 팩토리를 제시하는 것 이다.
// 해당 추상 팩토리는 해당 논리가 지정된 해당 구체적인 팩토리를 호출한다. 그리고 그 구체적인 팩토리는 최종 객체를 반환하는 팩토리 이다.
// 기본적으로 팩토리 메서드 패턴 위에 추상화 계층을 추가하여 다양한 유형의 객체를 생성할 수 있지만 여전히 단일 팩토리 함수 또는 클래스와 상호 작용할 수 있다.

// [예] 자동차는 물론 오토바이와 트럭도 만드는 자동차 회사의 시스템을 모델링한다고 가정해 보자.
class Car {
  constructor() {
    this.name = 'Car';
    this.wheels = 4;
  }
  turnOn = () => console.log('a car is turns on');
}

class Truck {
  constructor() {
    this.name = 'Truck';
    this.wheels = 8;
  }
  turnOn = () => console.log('a truck is turns on');
}

class Motorcycle {
  constructor() {
    this.name = 'Mortorcycle';
    this.wheels = 2;
  }
  turnOn = () => console.log('a mortorcycle turns on');
}

const vehicleFactory = {
  createVehicle: (type) => {
    switch (type) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      case 'mortorcycle':
        return new Motorcycle();
      default:
        return null;
    }
  },
};

const car = vehicleFactory.createVehicle('car');
const truck = vehicleFactory.createVehicle('truck');
const mortorcycle = vehicleFactory.createVehicle('mortorcycle');
