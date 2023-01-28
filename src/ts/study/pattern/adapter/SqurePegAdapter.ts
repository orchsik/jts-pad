class RoundPeg {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }
}

class RoundHole {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }

  public fits(peg: RoundPeg): void {
    if (this.getRadius() >= peg.getRadius()) {
      console.log('fits !!!');
    } else {
      console.log('nope !!!');
    }
  }
}

class SqurePeg {
  private width: number;

  constructor(width: number) {
    this.width = width;
  }

  public getWidth(): number {
    return this.width;
  }
}

class SqurePegAdapter extends RoundPeg {
  private peg: SqurePeg;

  constructor(peg: SqurePeg) {
    super((peg.getWidth() * Math.sqrt(2)) / 2);
    this.peg = peg;
  }
}

function clientCode(roundPeg: RoundPeg) {
  const roundHole = new RoundHole(5);
  roundHole.fits(roundPeg);
}

const roundPeg = new RoundPeg(5);
clientCode(roundPeg);

const squrePeg = new SqurePeg(5);
const squrePegAdapter = new SqurePegAdapter(squrePeg);
clientCode(squrePegAdapter);

export {};
