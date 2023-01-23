# JS+TS Pad with Jest

```bash
# for build
yarn build
# for test
yarn test
# for test watch
yarn test --watch
# for test watch about add files
yarn test --watch -- add
```

<br />
<br />

## 클래스 다이어그램
### ❋ 접근제어자 리스트
- "+" : public
- "-" : private
- "#" : protetcted

### ❋ 관게표현
<image src="./assets/class-diagram-reloation.png">

- 일반화: 상속.
- 실체화: interface에 있는 spec을 오버라이딩하여 실제로 구현하는 것.
- 의존: **메서드** 내에서 대상 클래스의 객체를 생성하거나 리턴받아 사용하는 것.
- 연관: 다른 객체의 참조를 가지는 **필드**를 사용하는 것
- 직접연관: 연관관계인데 방향성을 갖는 경우.
- 집합: 연관의 집합관계를 나타내는 것으로 Collection이나 Array를 이용하는 관계.
  하지만 이 관계는 일반적인 연관으로도 충분히 나타낼 수 있는 관계, 바로 1 : N 연관관계.
- 합성: 클래스 연관관계에서 강한 결합의 관계. 즉, 참조하는 클래스의 라이프 사이클이 종속적이라는 말
