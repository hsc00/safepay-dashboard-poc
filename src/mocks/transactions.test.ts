import { describe, it, expect } from "vitest";
import * as Mocks from "../mocks/transactions";

describe("Detailed Transaction State Validation", () => {
  it("should validate COMPLETED transactions as positive flow", () => {
    const { COMPLETED_TRANSACTION } = Mocks;
    expect(COMPLETED_TRANSACTION.status).toBe("COMPLETED");
    expect(COMPLETED_TRANSACTION.amount).toBeGreaterThan(0);
  });

  it("should validate PENDING crypto transactions", () => {
    const { PENDING_CRYPTO_TRANSACTION } = Mocks;
    expect(PENDING_CRYPTO_TRANSACTION.status).toBe("PENDING");
    expect(PENDING_CRYPTO_TRANSACTION.currency).toBe("BTC");
  });

  it("should validate FLAGGED transactions for compliance", () => {
    const { FLAGGED_TRANSACTION } = Mocks;
    expect(FLAGGED_TRANSACTION.status).toBe("FLAGGED");
    expect(FLAGGED_TRANSACTION.amount).toBe(50000.0);
  });

  it("should validate CANCELLED transactions integrity", () => {
    const { CANCELLED_TRANSACTION } = Mocks;
    expect(CANCELLED_TRANSACTION.status).toBe("CANCELLED");
    expect(CANCELLED_TRANSACTION.amount).toBeLessThan(0);
  });

  it("should validate FAILED transactions", () => {
    const { FAILED_TRANSACTION } = Mocks;
    expect(FAILED_TRANSACTION.status).toBe("FAILED");
    expect(FAILED_TRANSACTION.description).toContain("Funds");
  });

  it("should ensure the global mock array contains all status types", () => {
    const statusesInArray = Mocks.MOCK_TRANSACTIONS.map((t) => t.status);
    const requiredStatuses = [
      "COMPLETED",
      "PENDING",
      "FLAGGED",
      "CANCELLED",
      "FAILED",
    ];

    requiredStatuses.forEach((status) => {
      expect(statusesInArray).toContain(status);
    });
  });
});
