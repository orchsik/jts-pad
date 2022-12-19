import { AQueue, IQueue } from './types';

class Queue<T> extends AQueue<T> implements IQueue<T> {
  protected data: T[];

  public push = (item: T) => {
    this.data.push(item);
  };

  public pop = () => {
    const lastItem = this.data.pop();
    return lastItem;
  };
}

export { Queue };
