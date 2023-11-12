const isGoldCustomer = (history: PurchaseHistory) => {
  return (
    history.totalAmount > 1_000_000 &&
    10 <= history.purchaseFrequencyPerMonth &&
    history.returnRate <= 0.001
  );
};

const isSilverCustomer = (history: PurchaseHistory) => {
  return (
    10 <= history.purchaseFrequencyPerMonth && //
    history.returnRate <= 0.001
  );
};

export {};

class PurchaseHistory {
  totalAmount: number;
  purchaseFrequencyPerMonth: number;
  returnRate: number;
}
