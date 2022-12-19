type First<T = any> = T | Record<string, unknown>;
type Second<T = any> = T | Record<string, unknown>;

function extend(first: First, second: Second) {
  const result = {};
  for (const prop in first) {
    if (first[prop]) {
      (result as First)['prop'] = first[prop];
    }
  }
  for (const prop in second) {
    if (second[prop]) {
      result[prop] = second[prop];
    }
  }
  return result as First & Second;
}

class Person {
  constructor(public name: string) {}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name: string): void {
    console.log(`Hello, I'm ${name}`);
  }
}

const jim = extend(new Person('Jim'), ConsoleLogger.prototype);
jim.log(jim.name);
