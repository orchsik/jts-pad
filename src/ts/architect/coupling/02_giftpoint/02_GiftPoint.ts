/**
 * @example
 * const standardMembershipPoint = GiftPoint.forStandardMembership();
 * const premiumMembershipPoint = GiftPoint.forPremiumMembership();
 */
class GiftPoint {
  private static readonly MIN_POINT = 0;
  private static readonly STANDARD_MEMBERSHIP_POINT = 3000;
  private static readonly PREMIUM_MEMBERSHIP_POINT = 10000;
  readonly value: number;

  private constructor(readonly point: number) {
    if (point < GiftPoint.MIN_POINT) {
      throw new Error(`${GiftPoint.MIN_POINT} 보다 큰 값을 입력해주세요.`);
    }
    this.value = point;
  }

  static forStandardMembership(): GiftPoint {
    return new GiftPoint(GiftPoint.STANDARD_MEMBERSHIP_POINT);
  }

  static forPremiumMembership(): GiftPoint {
    return new GiftPoint(GiftPoint.PREMIUM_MEMBERSHIP_POINT);
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
