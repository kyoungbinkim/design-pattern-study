/*
    객체의 생성 비용이 높은 경우, 동일한 객체를 여러 번 생성해야 할 때 유용한 디자인 패턴입니다. 
    이 패턴은 기존 객체를 복제(clone)하여 새로운 객체를 생성하는 방식으로 동작합니다.

    패턴을 구현하려면, 우선 clone() 메소드를 선언하는 추상 베이스 클래스를 하나 만든다.

    구성요소
    1. 프로토타입(prototype) : 복제를 통해 생성할 객체를 결정하는 인터페이스 또는 추상클래스. clone() 메소드를 선언
    2. 구체적인 프로토타입(Concrete Prototype) : 복제 메서드를 구현하여 객체의 복제를 수행
    3. 클라이언트(Client) : 구체적인 프로토타입의 복제 기능을 사용하는 객체

    장점
    객체 생성 비용 절감: 객체의 생성 비용이 높을 경우, 기존 객체를 복제하여 새로운 객체를 생성하므로 객체 생성 비용을 절감할 수 있습니다.
    새로운 객체 생성의 유연성: 프로토타입 패턴을 사용하면 새로운 객체를 생성할 때 기존 객체를 복제하여 손쉽게 생성할 수 있습니다.
    객체 생성과정의 추상화: 객체 생성과정을 추상화하여 동일한 복제 인터페이스를 사용하여 객체를 생성할 수 있습니다.
*/

// code from chatGPT
// 프로토타입(Prototype) 객체
const animalPrototype = {
    setName: (name) => {
      this.name = name;
    },
    getName: () => {
      return this.name;
    },
    clone: () => {
      const cloned = Object.create(this);
      cloned.name = this.name;
      return cloned;
    },
  };
  
  // 동물 객체 생성
  const originalAnimal = Object.create(animalPrototype);
  originalAnimal.setName("Dolly");
  
  // 객체 복제
  const clonedAnimal = originalAnimal.clone();
  clonedAnimal.setName("Molly");
  
  console.log("Original animal:", originalAnimal.getName());
  console.log("Cloned animal:", clonedAnimal.getName());