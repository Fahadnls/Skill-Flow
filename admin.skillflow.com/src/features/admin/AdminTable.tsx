import { ReactNode } from 'react';

export const AdminTable = ({ headers, children }: { headers: string[]; children: ReactNode }) => (
  <div className="overflow-hidden">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-[#e8edf5] text-left dark:divide-white/10">
        <thead className="bg-[#f8faff] dark:bg-white/[0.03]">
          <tr>
            {headers.map((header) => (
              <th key={header} className="whitespace-nowrap px-4 py-3 text-xs font-black uppercase tracking-[0.04em] text-[#778196] dark:text-slate-400">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#edf1f6] bg-white dark:divide-white/10 dark:bg-transparent">{children}</tbody>
      </table>
    </div>
  </div>
);
