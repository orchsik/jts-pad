/**
 * strategy
 */
interface MoveStrategy {
  move(position: [number, number]): void;
}
class Walking implements MoveStrategy {
  move(position: [number, number]) {
    position[0] += 1;
    console.log(`I am Walking. New position = ${position}`);
  }
}
class Sprinting implements MoveStrategy {
  move(position: [number, number]) {
    position[0] += 2;
    console.log(`I am Running. New position = ${position}`);
  }
}
class Crawling implements MoveStrategy {
  move(position: [number, number]) {
    position[0] += 0.5;
    console.log(`I am Crawling. New position = ${position} `);
  }
}

/**
 * context
 */
class GameCharacter {
  private position: [number, number] = [0, 0];

  move(moveStrategy: IMoveConstructor) {
    new moveStrategy().move(this.position);
  }
}

interface IMoveConstructor {
  new (): MoveStrategy;
}

/**
 * client
 */
const gameCharacter = new GameCharacter();
gameCharacter.move(Walking);
gameCharacter.move(Sprinting);
gameCharacter.move(Crawling);

export {};
