/**
 * @example
 * const standardMembershipPoint = new GiftPoint(3000);
 * const premiumMembershipPoint = new GiftPoint(10000);
 */
class GiftPoint {
  private static readonly MIN_POINT = 0;
  readonly value: number;

  constructor(point: number) {
    if (point < GiftPoint.MIN_POINT) {
      throw new Error(`${GiftPoint.MIN_POINT} 보다 큰 값을 입력해주세요.`);
    }
    this.value = point;
  }

  add(other: GiftPoint): GiftPoint {
    return new GiftPoint(this.value + other.value);
  }

  isEnogh(point: GiftPoint): boolean {
    return this.value >= point.value;
  }

  consume(point: GiftPoint): GiftPoint {
    if (!this.isEnogh(point)) {
      throw new Error(`포인트가 부족합니다.`);
    }
    return new GiftPoint(this.value - point.value);
  }
}

export {};
