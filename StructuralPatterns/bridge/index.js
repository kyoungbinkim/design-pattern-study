/*
    브리지는 큰 클래스 또는 밀접하게 관련된 클래스들의 집합을 두 개의 개별 계층구조​(추상화 및 구현)​로 나눈 후 각각 독립적으로 개발할 수 있도록 하는 구조 디자인 패턴입니다.
    -> 추상화와 구현을 분리하여, 두 가지의 독립적인 계층을 연결하는 역할을 합니다. 즉, 클라이언트와 서비스 프로바이더를 분리함으로써 서로에게 영향을 미치지 않으면서 독립적으로 확장하고 변화할 수 있는 구조를 제공합니다.

    추상화(Abstraction): 다리 디자인 패턴의 핵심 컴포넌트입니다. 이 컴포넌트는 클라이언트와 관련된 추상 인터페이스를 정의합니다. 
        클라이언트는 이 추상 인터페이스를 통해 구현 세부 정보를 알 필요 없이 추상화된 기능을 사용할 수 있습니다.

    구현(Implementation): 추상화와 분리된 구현 세부 정보를 담당합니다. 구현 컴포넌트는 추상화 인터페이스를 구현하며, 실제 기능의 구현 내용을 담고 있습니다.

    클라이언트(Client): 다리 패턴을 사용하는 주체입니다. 클라이언트는 추상화된 인터페이스를 사용하여 필요한 기능을 실행합니다. 
        클라이언트는 구현 세부 정보에 대해서는 알지 못하며, 오직 추상화 인터페이스만을 사용합니다.

    서비스 프로바이더(Service Provider): 실제 기능의 구현을 담당합니다. 서비스 프로바이더는 추상화 인터페이스를 구현하여 클라이언트에게 기능을 제공합니다. 
        여러 개의 서비스 프로바이더가 존재할 수 있으며, 다리 패턴은 이들을 유연하게 교체하고 확장할 수 있는 구조를 제공합니다.
*/

// 추상화(Abstraction) 클래스
class Shape {
    constructor(drawing) {
        this.drawing = drawing;
    }

    draw() {
        console.log('Drawing a shape:');
        this.drawing.drawShape();
    }
}

// 구현(Implementation) 클래스
class DrawingPen {
    drawShape() {
        console.log('Drawing the shape with pen');
    }
}

class DrawingPaint {
    drawShape() {
        console.log('Drawing the shape with paint');
    }
}

// 도형(Shape) 클래스
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle:');
        this.drawing.drawShape();
    }
}

class Square extends Shape {
    draw() {
        console.log('Drawing a square:');
        this.drawing.drawShape();
    }
}

// 클라이언트(Client) 코드
const drawingPen = new DrawingPen();
const drawingPaint = new DrawingPaint();

const shape1_pen = new Circle(drawingPen);
shape1_pen.draw();

const shape1_paint = new Circle(drawingPaint);
shape1_paint.draw();

const shape2_pen = new Square(drawingPen);
shape2_pen.draw();

const shape2_paint = new Square(drawingPaint);
shape2_paint.draw();