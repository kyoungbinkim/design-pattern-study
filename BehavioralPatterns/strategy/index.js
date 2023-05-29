/*
    알고리즘을 캡슐화하여 동적으로 교환할 수 있는 전략을 정의합니다. 
    즉, 실행 중에 여러 알고리즘 중 하나를 선택하여 실행할 수 있도록 하는 패턴입니다. 
    다른 이름으로는  정책 패턴(policy pattern)이 있다.

    구성요소 
    1. 전략        : 교환 가능한 알고리즘을 나타내는 인터페이스, 추상 클래스 또는 인터페이스로 구현
    2. 구체적인 전략 : 인터페이스나, 추상 클래스를 구체적으로 구현하는 클래스
    3. 컨텍스트     : 전략을 사용하는 객체입니다. 컨텍스트는 클라이언트로 부터 전략을 받아들이고 실행할 알고리즘을 선택
*/

// 전략(Strategy) 인터페이스
class HashStrategy {
    hash(data) {
        throw new Error("hash method should be implemented");
    }
}

// 구체적인 전략(Concrete Strategy) 클래스
class SHA256HashStrategy extends HashStrategy {
    hash(data) {
        console.log("Hash data using SHA256 algorithm");
        // AES 알고리즘을 사용한 데이터 암호화 로직
        return "Hash with SHA256: " + data;
    }
}

class MiMC7HashStrategy extends HashStrategy {
    hash(data) {
        console.log("Hash data using MiMC7 algorithm");
        // DES 알고리즘을 사용한 데이터 암호화 로직
        return "Hash with MiMC7: " + data;
    }
}

// 컨텍스트(Context) 클래스
class HashContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    hashData(data) {
        const Hash = this.strategy.hash(data);
        console.log("Hash data:", Hash);
    }
}

// 클라이언트 코드
const hashContext = new HashContext(new SHA256HashStrategy());

hashContext.hashData("Hello, World!");

hashContext.setStrategy(new MiMC7HashStrategy());
hashContext.hashData("HAHAHA ~!");