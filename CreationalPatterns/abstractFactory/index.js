/*
    서로 연관된 여러 개의 객체들을 생성하기 위한 인터페이스를 제공하는 디자인 패턴
    추상 팩토리 패턴(Abstract factory pattern)은 다양한 구성 요소 별로 '객체의 집합'을 생성해야 할 때 유용하다.
    클라이언트가 구체적인 클래스에 의존하지 않고, 관련된 객체들을 생성할 수 있도록 합니다.

    구성요소
    AbstractFactory (추상 팩토리): 객체들의 패밀리를 생성하기 위한 추상 인터페이스를 정의합니다. 
                                이 인터페이스는 관련된 객체들을 생성하기 위한 여러 개의 추상 메서드를 포함합니다.
    ConcreteFactory (구체적인 팩토리): AbstractFactory를 구현하여 실제로 객체를 생성하는 역할을 합니다. 
                                각각의 구체적인 팩토리는 추상 팩토리 인터페이스의 메서드를 구체적으로 구현하여 객체를 생성합니다.
    AbstractProduct (추상 제품): 팩토리에 의해 생성되는 여러 개의 객체들의 추상 인터페이스를 정의합니다. 
                                이 인터페이스는 팩토리에 의해 생성되는 객체들이 가져야 하는 공통 동작이나 속성을 선언합니다.
    ConcreteProduct (구체적인 제품): AbstractProduct를 구현하여 실제로 객체를 생성합니다. 
                                각각의 구체적인 제품은 추상 제품 인터페이스의 메서드를 구체적으로 구현합니다.

    
*/

// 추상 팩토리(Abstract Factory) 인터페이스
class LoggerFactory {
    createLogger() {
      throw new Error('createLogger method must be implemented');
    }
  }
  
  // 구체적인 팩토리(Concrete Factory) 클래스
  class ConsoleLoggerFactory extends LoggerFactory {
    createLogger() {
      return new ConsoleLogger();
    }
  }
  
  // 구체적인 팩토리(Concrete Factory) 클래스
  class FileLoggerFactory extends LoggerFactory {
    createLogger() {
      return new FileLogger();
    }
  }
  
  // 추상 제품(Abstract Product) 클래스
  class Logger {
    log(message) {
      throw new Error('log method must be implemented');
    }
  }
  
  // 구체적인 제품(Concrete Product) 클래스
  class ConsoleLogger extends Logger {
    log(message) {
      console.log(`[Console] ${message}`);
    }
  }
  
  // 구체적인 제품(Concrete Product) 클래스
  class FileLogger extends Logger {
    log(message) {
      console.log(`[File] ${message}`);
    }
  }
  
  // 클라이언트(Client) 코드
  function logMessage(factory, message) {
    const logger = factory.createLogger();
    logger.log(message);
  }
  
  // 사용 예시
  const consoleFactory = new ConsoleLoggerFactory();
  logMessage(consoleFactory, 'This is a console log message');
  
  const fileFactory = new FileLoggerFactory();
  logMessage(fileFactory, 'This is a file log message');