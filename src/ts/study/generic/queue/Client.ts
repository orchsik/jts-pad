import { Queue } from './Queue';

class Client {
  public static main() {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    queue.push(4);

    console.log(queue.pop());
    console.log(queue.pop());
    console.log(queue.pop());
    console.log(queue.pop());
  }

  public static reverse<T>(items: T[]): T[] {
    return items.reverse();
  }
}

Client.main();

console.log(Client.reverse([1, 2, 3, 4, 5]));
