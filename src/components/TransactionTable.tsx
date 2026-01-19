import { MOCK_TRANSACTIONS } from "../mocks/transactions";
import { STATUS_STYLES, DEFAULT_STATUS_STYLE } from "../constants/statusStyles";
import { formatCurrency, formatDate } from "../utils/formatters";

export const TransactionTable = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-2xl">
      <table className="w-full text-left text-sm text-slate-300">
        <thead className="bg-slate-950/80 backdrop-blur-md sticky top-0 z-10 uppercase text-[10px] font-bold tracking-widest">
          <tr>
            <th className="px-6 py-4 border-b border-slate-800">
              Counterparty
            </th>
            <th className="px-6 py-4 border-b border-slate-800">Status</th>
            <th className="px-6 py-4 border-b border-slate-800">Date</th>
            <th className="px-6 py-4 border-b border-slate-800 text-right">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {MOCK_TRANSACTIONS.map((transaction) => (
            <tr
              key={transaction.id}
              className="hover:bg-slate-800/40 transition-colors"
            >
              <td className="px-6 py-4">
                <div className="font-semibold text-slate-100">
                  {transaction.counterparty}
                </div>
                <div className="text-xs text-slate-500">
                  {transaction.description}
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase tracking-tight ${STATUS_STYLES[transaction.status] || DEFAULT_STATUS_STYLE}`}
                >
                  {transaction.status}
                </span>
              </td>
              <td className="px-6 py-4 text-xs text-slate-400 font-mono">
                {formatDate(transaction.timestamp)}
              </td>
              <td
                className={`px-6 py-4 text-right font-mono font-bold ${transaction.amount < 0 ? "text-rose-400" : "text-emerald-400"}`}
              >
                {formatCurrency(transaction.amount, transaction.currency)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
