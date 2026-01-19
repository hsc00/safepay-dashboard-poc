export type Currency = "CHF" | "EUR" | "BTC";

export interface Transaction {
  id: string;
  amount: number;
  currency: Currency;
  status: "PENDING" | "PENDING" | "PENDING";
  timestamp: string;
}
