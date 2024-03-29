### 커맨드 패턴 
커맨드는 요청을 요청의 모든 정보가 포함된 독립실행형 객체로 변환하는 행동 디자인 패턴이다.  

### 이점
- 요청을 캡슐화해서 커멘드 객체가 명령을 해야하는 객체들에 대한 의존성을 느슨하게 만들 수 있다. 따라서 실행될 기능의 변경에도 호출자 클래스를 수정없이 그대로 사용할 수 있도록 한다.
- 개방 폐쇄의 원칙(OCP)이란 기존의 코드를 변경하지 않으면서, 기능을 추가할 수 있도록 설계가 되어야 한다는 원칙을 말한다.
- 이 변환은 다양한 요청들이 있는 메서드들을 인수화 할 수 있도록 하며, 요청의 실행을 지연 또는 대기열에 넣을 수 있도록 하고, 또 실행 취소할 수 있는 작업을 지원할 수 있도록 한다.


### 언제쓸까? 
하나의 객체를 통해 여러 객체들에 명령(Command)을 해야 할 때 사용

### 예시 



 