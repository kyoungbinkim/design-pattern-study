/*
    빌더 패턴이란 복합 객체의 생성 과정과 표현 방법을 분리하여 동일한 생성 절차에서 서로 다른 표현 결과를 만들 수 있게 하는 패턴이다. 
    2단어 요약 : 생성자 오버로딩

    구성요소
    1. 제품(Product) : 빌더를 통해 생성되는 복잡한 객체. 여러 속성을 가지고 있으며, 이를 설정하는 매서드를 제공.
    2. 빌더(Builder) : 객체를 생성하기 위한 단계별 매서드를 정의. 추상 클래스나 인터페이스로 구현.
                      각 속성을 설정하고, 최종 제품(product)을 반환하는 build() 매서드를 제공.
    3. 구체적인 빌더(Concrete Builder): 빌더 인터페이스를 구체적으로 구현한 클래스. 
    4. 디렉터(Director): 빌더를 사용하여 제품을 생성하는 역할을 합니다.

    https://ko.wikipedia.org/wiki/%EB%B9%8C%EB%8D%94_%ED%8C%A8%ED%84%B4 코드를 nodejs 코드로 변경
*/


// 제품(Product)
class Pizza {
    constructor() {
        this.dough = ""
        this.sauce = ""
        this.topping = ""
    }
    
    setDough(dough) {
        this.dough = dough;
    }

    setSauce(sauce) {
        this.sauce = sauce;
    }

    setTopping(topping) {     
        this.topping = topping;
    }

    toString() {
        return JSON.stringify(this, null, 2)
    }
}

// Abstract Builder
class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }

    getPizza() {
        return this.pizza.toString();
    }

    createNewPizzaProduct() {
        this.pizza = new Pizza();
    }

    buildDough() {
        throw new Error("Not Implemented");
    }

    buidSauce() {
        throw new Error("Not Implemented");
    }

    buildToping() {
        throw new Error("Not Implemented");
    }
}

// concrete builder
class HawaiianPizzaBuilder extends PizzaBuilder {
    constructor() {
        super();
    }

    buildDough() {
        this.pizza.setDough("cross");
    }

    buidSauce() {
        this.pizza.setSauce("mild");
    }

    buildToping() {
        this.pizza.setTopping("ham+pineapple");
    }
}

//concrete builder
class SpicyPizzaBuilder extends PizzaBuilder {
    constructor() {
        super();
    }

    buildDough() {
        this.pizza.setDough("pan baked");
    }

    buidSauce() {
        this.pizza.setSauce("hot");
    }

    buildToping() {
        this.pizza.setTopping("pepperoni+salami");
    }
}

// director
class PizzaCooker {
    constructor(){
        this.pizzaBuilder = null;
    }
    
    setPizzaBuilder(pizzaBuilder) {
        this.pizzaBuilder = pizzaBuilder;
    }

    getPizza() {
        if(this.pizzaBuilder === null) {throw new Error("PizzaBuilder is not set")}
        return this.pizzaBuilder.getPizza();
    }

    constructPizza() {
        this.pizzaBuilder.createNewPizzaProduct();
        this.pizzaBuilder.buildDough();
        this.pizzaBuilder.buidSauce();
        this.pizzaBuilder.buildToping();
    }
}

const cooker = new PizzaCooker();

cooker.setPizzaBuilder(new HawaiianPizzaBuilder());
cooker.constructPizza();
console.log("HawaiianPizza : ", cooker.getPizza());

cooker.setPizzaBuilder(new SpicyPizzaBuilder());
cooker.constructPizza();
console.log("SpicyPizza : ", cooker.getPizza());