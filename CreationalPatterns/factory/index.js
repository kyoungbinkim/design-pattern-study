/*global BigInt */
/*
    팩토리(Factory)는 객체 생성을 처리하는 디자인 패턴
    
    제품(Product): 생성되는 객체를 나타내는 인터페이스 또는 추상 클래스입니다. 제품은 팩토리에 의해 생성됩니다.
    제품 구체화(Concrete Product): 제품 인터페이스를 구현한 구체적인 클래스입니다. 팩토리에 의해 생성되는 실제 객체입니다.
    팩토리(Factory): 객체 생성을 담당하는 클래스입니다. 클라이언트는 팩토리를 통해 객체를 생성하고, 구체적인 클래스에 대한 정보를 알 필요가 없습니다.
    from chatGPT

    지금 컨트랙트 예제(슈노르서명 검증)를 팩토리로 구현하기 적합해 보이지 않는다.
    타원곡선을 예시로 들어보자.

*/


// 타원곡선 인터페이스 
class EllipticCurve {
    constructor(
        FIELD_PRIME,
        GENERATOR,
    ) {
        this.FIELD_PRIME = FIELD_PRIME;
        this.GENERATOR = GENERATOR;
    }
    
    G1Add(a,b){
        throw new Error("Not Implemented");
    }

    G1scalarMul(a,b){
        throw new Error("Not Implemented");
    }

    G2Add(a,b){
        throw new Error("Not Implemented");
    }

    /* ... 추가 ... */
}

// 구체화 클래스로 각각 타원곡선에 알맞게 구현
class BN256 extends EllipticCurve{
    constructor(){
        super(
            BigInt('21888242871839275222246405745257275088548364400416034343698204186575808495617'),
            new G1Affine(
                BigInt('1'),
                BigInt('2')
            )
        )
    }

    G1Add(a,b){
        /*  TODO ... */
    }

    G1scalarMul(a,b){
        /* TODO ... */
    }

    G2Add(a,b){
        /* TODO ... */
    }

    /* TODO ... */
}

class BLS12_381 extends EllipticCurve {
    constructor(){
        super(
            BigInt('52435875175126190479447740508185965837690552500527637822603658699938581184513'),
            new G1Affine(
                BigInt('1'),
                BigInt('2')
            )
        )
    }

    G1Add(a,b){
        /*  TODO ... */
    }

    G1scalarMul(a,b){
        /* TODO ... */
    }

    G2Add(a,b){
        /* TODO ... */
    }

    /* TODO ... */
}

// 팩토리 클래스 객체 생성을 처리하는 클래스
class EllipticCurveFactory {
    createEllipticCurve(type='BN256'){
        switch (type) {
            case 'BN256':
                return new BN256();
            case 'BLS12_381':
                return new BLS12_381();
        }
    }
}