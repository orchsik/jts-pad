// 빌더 패턴은 "단계적으로" 개체를 만드는 데 사용됩니다. 일반적으로 객체에 특정 속성이나 메서드를 추가하는 함수나 메서드가 있다.
// 이 패턴의 속성과 메서드 생성을 다른 엔터티로 분리할 수 있다.
// 클래스 또는 팩토리 함수가 있는 경우 인스턴스화하는 개체에는 항상 해당 클래스/팩토리에서 선언된 모든 속성과 메서드가 있다.
// 그러나 빌더 패턴을 사용하면 개체를 만들고 필요한 "단계"만 적용할 수 있으므로 보다 유연한 접근 방식이다.

const addFlyingAblitiy = (obj) => {
  obj.fly = () => console.log(`Now ${obj.name} can fly!`);
};

const addSpeechAblility = (obj) => {
  obj.saySomething = () => console.log(`${obj.name} walks and talks the talk!`);
};

/**
 * client
 */

const bug1 = {
  name: 'Buggy McFly',
  phrase: "Your debugger doesn't work with me!",
};

const bug2 = {
  name: 'Martiniano Buggland',
  phrase: "Can't touch this! Na na na na...",
};

addFlyingAblitiy(bug1);
bug1.fly(); // Now Buggy McFly can fly!

addSpeechAblility(bug2);
bug2.saySomething(); // Martiniano Buggland walks and talks the talk!
