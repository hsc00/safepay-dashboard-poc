import { describe, it, expect } from "vitest";
import { formatCurrency } from "./formatters";

describe("Utility Formatters", () => {
  it("should format CHF correctly for the Swiss market", () => {
    const result = formatCurrency(1500.5, "CHF");
    expect(result).toContain("CHF");
    expect(result).toContain("1");
    expect(result).toContain("500.50");
  });

  it("should show exactly 8 decimal places for BTC", () => {
    const result = formatCurrency(0.0001234567, "BTC");
    expect(result).toContain("0.00012346");
  });

  it("should handle negative amounts correctly", () => {
    const result = formatCurrency(-450, "CHF");
    expect(result).toContain("-450.00");
  });
});
