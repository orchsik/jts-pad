abstract class AQueue<T> {
  protected data: T[] = [];
}

interface IQueue<T> {
  push: (item: T) => void;
  pop: () => T;
}

export { AQueue, IQueue };
