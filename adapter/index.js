/*
    기존의 인터페이스와 필요한 인터페이스 간의 호환성을 제공하기 위해 사용되는 디자인 패턴입니다. 
    이 패턴은 서로 다른 인터페이스를 가진 클래스나 모듈을 함께 동작할 수 있도록 중간에 어댑터를 추가하여 인터페이스를 변환합니다.

    다음과 같은 상황에서 사용
    1. 기존의 인터페이스와 새로운 인터페이스의 호환성이 없는 경우
    2. 기존의 코드를 수정하지 않고 새로운 클래스 또는 모듈을 통합해야 하는 경우.
    3. 다양한 인터페이스를 가진 여러 클래스를 통합해야 하는 경우.

    Target(타겟): 사용하려는 인터페이스를 정의합니다. 클라이언트는 이 인터페이스를 통해 어댑터를 사용합니다.
    Adaptee(어댑티): 호환되지 않는 인터페이스를 가진 기존의 클래스나 모듈입니다. 이를 어댑터를 통해 사용할 수 있도록 변환해야 합니다.
    Adapter(어댑터): 어댑티와 타겟 사이에서 호환성을 제공하는 클래스입니다. 어댑터는 타겟 인터페이스를 구현하고, 어댑티의 인터페이스를 변환하여 요청을 처리합니다.

    from chatGPT
*/


// 마땅한 예시가 떠오르지 않아서 일단 예제코드 복붙합니다.

// Target Interface
class Target {
    constructor() {}

    operation() {
        throw new Error("Not Implemented");
    }
}

// Adaptee Interface (외부 라이브러리 등등..)
class Adaptee{
    constructor() {}

    specificOperation() {
        throw new Error("Not Implemented");
    }
}

class Adapter extends Target {
    constructor() {
        super();
        this.Adaptee = new Adaptee();
    }

    // 타켓 인터페이스로 어댑티 인터페이스를 실행
    operation() {
        this.Adaptee.specificOperation();
    }
}