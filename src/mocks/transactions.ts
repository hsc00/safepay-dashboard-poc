import type { Transaction } from "../types";

export const COMPLETED_TRANSACTION: Transaction = {
  id: "tx_001",
  amount: 1500.5,
  currency: "CHF",
  status: "COMPLETED",
  counterparty: "Swiss Gas & Electric",
  description: "Utility Payment",
  timestamp: "2026-01-19T10:00:00Z",
};

export const PENDING_CRYPTO_TRANSACTION: Transaction = {
  id: "tx_002",
  amount: -0.05,
  currency: "BTC",
  status: "PENDING",
  counterparty: "External Wallet",
  description: "Crypto Transfer",
  timestamp: "2026-01-19T11:30:00Z",
};

export const FLAGGED_TRANSACTION: Transaction = {
  id: "tx_003",
  amount: 50000.0,
  currency: "EUR",
  status: "FLAGGED",
  counterparty: "Unknown Entity",
  description: "High Value Alert",
  timestamp: "2026-01-19T12:00:00Z",
};

export const CANCELLED_TRANSACTION: Transaction = {
  id: "tx_004",
  amount: -450.0,
  currency: "CHF",
  status: "CANCELLED",
  counterparty: "Utility Zurich AG",
  description: "Manual reversal by user",
  timestamp: "2026-01-19T10:15:00Z",
};

export const FAILED_TRANSACTION: Transaction = {
  id: "tx_005",
  amount: 120.0,
  currency: "CHF",
  status: "FAILED",
  counterparty: "Starbucks Zurich",
  description: "Insufficient Funds",
  timestamp: "2026-01-19T09:00:00Z",
};

export const MOCK_TRANSACTIONS: Transaction[] = [
  COMPLETED_TRANSACTION,
  PENDING_CRYPTO_TRANSACTION,
  FLAGGED_TRANSACTION,
  CANCELLED_TRANSACTION,
  FAILED_TRANSACTION,
];
