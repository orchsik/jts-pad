 * 추상 팩토리는 코드가 관련된 제품군의 다양한 카테고리와 작동해야 하지만 해당 제품들의 구상 클래스들에 의존하고 싶지 않을 때 사용할 수 있다.
 클래스들은 나중에 추가 될 수 있기 때문에, 향후 확장성​(extensibility)​을 허용하는 방향이 좋기 때문이다.

 * 추상 팩토리는 제품 카테고리의 각 클래스에서 객체들을 생성할 수 있는 인터페이스를 제공한다.
 인터페이스를 통해 객체들을 생성하면, 앱에서 이미 생성된 제품들과 일치하는 제품을 생성할 수 있다.
    * 클래스의 팩토리 메서드의 책임이 뚜렷하지 않을 때 추상 팩토리 구현을 고려할 수 있다.
    * 잘 설계된 프로그램에서 각 클래스는 하나의 책임만 가진다. 클래스가 여러 제품 유형을 책임질 경우, 클래스의 팩토리 메서드들을 독립실행형 팩토리 클래스나 추상 팩토리 구현으로 추출할 수 있다.