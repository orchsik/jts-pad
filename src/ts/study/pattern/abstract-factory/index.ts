/**
 * product
 */
interface AbstractProductA {
  usefulFunctionA(): string;
}
class ConcreteProductA1 implements AbstractProductA {
  usefulFunctionA(): string {
    return 'The result of the product A1.';
  }
}
class ConcreteProductA2 implements AbstractProductA {
  usefulFunctionA(): string {
    return 'The result of the product A2.';
  }
}

interface AbstractProductB {
  usefulFunctionB(): string;
  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}
class ConcreteProductB1 implements AbstractProductB {
  usefulFunctionB(): string {
    return 'The result of the Product B1.';
  }
  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}
class ConcreteProductB2 implements AbstractProductB {
  usefulFunctionB(): string {
    return 'The result of the Product B2.';
  }
  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}

/**
 * abstract factory
 */
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }
  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }
  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

/**
 * client
 */
function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const prodcutB = factory.createProductB();
  console.log(prodcutB.usefulFunctionB());
  console.log(prodcutB.anotherUsefulFunctionB(productA));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());
console.log('');

console.log(
  'Client: Testing the same client code with the second factory type...'
);
clientCode(new ConcreteFactory2());

export {};
