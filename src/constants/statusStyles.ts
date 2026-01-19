import type { TransactionStatus } from "../types";

export const STATUS_STYLES: Record<TransactionStatus, string> = {
  COMPLETED: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  PENDING: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  FAILED: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  FLAGGED: "text-red-400 bg-red-500/20 border-red-500/40 animate-pulse",
  CANCELLED: "text-slate-400 bg-slate-800 border-slate-700",
};

export const DEFAULT_STATUS_STYLE =
  "text-slate-400 bg-slate-800 border-slate-700";
