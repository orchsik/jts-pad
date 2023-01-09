// 프로토타입 패턴을 사용하면 다른 개체를 청사진으로 사용하여 개체의 속성과 메서드를 상속하는 개체를 만들 수 있다.
// 최종 결과는 클래스를 사용하여 얻는 것과 매우 유사하지만 동일한 클래스에 의존하지 않고 개체 간에 속성과 메서드를 공유할 수 있기 때문에 약간 더 유연하다.

const enemy = {
  attack: () => console.log('Pim Pam Pum!'),
  flyAway: () => console.log('Flyyyyy like an eagle!'),
};

const bug1 = {
  name: 'Buggy McFly',
  phrase: "Your debugger doesn't work with me!",
};

// setPrototypeOf를 사용하여 개체의 프로토타입을 설정한다.
Object.setPrototypeOf(bug1, enemy);

/**
 * clent
 */

// getPrototypeOf를 사용하여 프로토타입을 읽고 이전 프로토타입이 작동했는지 확인한다.
console.log(Object.getPrototypeOf(bug1)); // { attack: [Function: attack], flyAway: [Function: flyAway] }

console.log(bug1.phrase); // Your debugger doesn't work with me!
console.log(bug1.attack()); // Pim Pam Pum!
console.log(bug1.flyAway()); // Flyyyyy like an eagle!
