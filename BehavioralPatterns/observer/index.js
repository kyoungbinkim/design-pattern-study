/* 

    객체 간의 일대다 의존성을 정의하는 디자인 패턴입니다.
    
    주체(Subject): 상태 변화를 감시할 대상 객체입니다. 주체는 옵저버 객체들을 등록하고, 
    상태 변화가 발생할 때 옵저버들에게 알림을 보냅니다. 
    주체 객체는 주로 추상 클래스나 인터페이스로 정의됩니다.

    옵저버(Observer): 주체 객체의 상태 변화를 알림을 받는 객체입니다. 
    옵저버는 주체에 등록되어 상태 변화를 관찰하고 필요한 작업을 수행합니다. 
    옵저버는 주로 추상 클래스나 인터페이스로 정의됩니다.

    구체적인 주체와 옵저버: 실제로 주체와 옵저버의 구체적인 클래스를 구현합니다. 
    주체 객체는 옵저버들을 관리하고 상태 변화를 알림을 보내며, 
    옵저버 객체는 상태 변화를 처리하는 구체적인 동작을 구현합니다.

*/

// 주제(Subject) 클래스
class Subject {
    constructor() {
      this.observers = [];
    }
  
    registerObserver(observer) {
      this.observers.push(observer);
    }
  
    unregisterObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(message) {
      for (const observer of this.observers) {
        observer.update(this, message);
      }
    }
  }
  
  // 옵저버(Observer) 클래스
  class Observer {
    constructor(name) {
      this.name = name;
    }
  
    update(subject, message) {
      console.log(`${this.name} received message from ${subject.constructor.name}: ${message}`);
    }
  }
  
  // 클라이언트 코드
  const subject1 = new Subject();
  const subject2 = new Subject();
  
  // 옵저버 생성
  const observer1 = new Observer("Observer 1");
  const observer2 = new Observer("Observer 2");
  const observer3 = new Observer("Observer 3");
  
  // 주제에 옵저버 등록
  subject1.registerObserver(observer1);
  subject1.registerObserver(observer2);
  subject2.registerObserver(observer3);
  
  // 주제의 상태 변화 알림
  subject1.notifyObservers("Hello from Subject 1!");
  
  // 다른 주제의 상태 변화 알림
  subject2.notifyObservers("Hello from Subject 2!");
  