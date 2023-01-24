## subject != publisher ?
* 시간이 지나면 변경될 수 있는 중요한 상태를 가진 객체가 있다고 가정하자.
* 이 객체는 종종 **subject** 라고 불린다.
* 이 객체는 자신의 상태에 대한 변경에 대해 다른 객체들에 알림을 보내는 역할도 맡을 경우 해당 객체를 **publisher** 라고 부를 수도 있다.

## objerver = subscriber ?
* 옵서버 패턴은 **publisher** 클래스에 개별 객체들이 그 **publisher** 로부터 오는 이벤트들의 알림을 
**subscribe** 또는 **unSubscribe**할 수 있도록 구독 메커니즘을 추가한다.
* subject(publisher)의 알림을 받고나서 `update` 메소드를 실행할 수 있다.
