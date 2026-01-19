export type Currency = "CHF" | "EUR" | "BTC";

export type TransactionStatus =
  | "PENDING"
  | "COMPLETED"
  | "FAILED"
  | "FLAGGED"
  | "CANCELLED";

export interface Transaction {
  id: string;
  amount: number;
  currency: Currency;
  status: TransactionStatus;
  counterparty: string;
  description: string;
  timestamp: string;
}
