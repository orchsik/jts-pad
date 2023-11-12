/**
 * ExcellentCustomerRule 인터페이스
 * 규칙을 만족하는지 확인하는 메서드 ok를 정의한다.
 */
interface ExcellentCustomerRule {
  ok(history: PurchaseHistory): boolean;
}
class GoldCustomerPurchaseAmountRule implements ExcellentCustomerRule {
  ok(history: PurchaseHistory): boolean {
    return history.totalAmount > 1_000_000;
  }
}
class PurchaseFrequencyRule implements ExcellentCustomerRule {
  ok(history: PurchaseHistory): boolean {
    return 10 <= history.purchaseFrequencyPerMonth;
  }
}
class ReturnRateRule implements ExcellentCustomerRule {
  ok(history: PurchaseHistory): boolean {
    return history.returnRate <= 0.001;
  }
}

/**
 * ExcellentCustomerPolicy 클래스
 * rules - 규칙 집합
 * add - 규칙 집합에 규칙을 추가하는 메서드
 * complyWithAll을 - 규칙 집합을 모두 만족하는지 확인하는 메서드
 */
class ExcellentCustomerPolicy {
  private readonly rules: Set<ExcellentCustomerRule>;
  constructor() {
    this.rules = new Set<ExcellentCustomerRule>();
  }
  add(rule: ExcellentCustomerRule) {
    this.rules.add(rule);
  }
  complyWithAll(history: PurchaseHistory) {
    return [...this.rules].every((rule) => rule.ok(history));
  }
}

class SiliverCustomerPolicy {
  private readonly policy: ExcellentCustomerPolicy;
  constructor() {
    this.policy = new ExcellentCustomerPolicy();
    this.policy.add(new PurchaseFrequencyRule());
    this.policy.add(new ReturnRateRule());
  }
  complyWithAll(history: PurchaseHistory) {
    return this.policy.complyWithAll(history);
  }
}

class GoldCusmtoerPolicy {
  private readonly policy: ExcellentCustomerPolicy;
  constructor() {
    this.policy = new ExcellentCustomerPolicy();
    this.policy.add(new GoldCustomerPurchaseAmountRule());
    this.policy.add(new PurchaseFrequencyRule());
    this.policy.add(new ReturnRateRule());
  }
  complyWithAll(history: PurchaseHistory) {
    return this.policy.complyWithAll(history);
  }
}

export {};

class PurchaseHistory {
  totalAmount: number;
  purchaseFrequencyPerMonth: number;
  returnRate: number;
}
