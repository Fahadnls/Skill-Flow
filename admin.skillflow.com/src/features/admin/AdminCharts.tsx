import { AnalyticsPoint } from './adminTypes';

export const BarChart = ({ data }: { data: AnalyticsPoint[] }) => (
  <div className="flex h-52 items-end gap-2 rounded-lg bg-[#f8faff] p-4 dark:bg-white/[0.03]">
    {data.map((item) => (
      <div key={item.label} className="flex min-w-0 flex-1 flex-col items-center gap-2">
        <div className="flex h-36 w-full items-end rounded-md bg-white shadow-inner dark:bg-[#0c0e14]">
          <div className="w-full rounded-md bg-[#2f6fff]" style={{ height: `${item.value}%` }} />
        </div>
        <span className="truncate text-xs font-bold text-[#687386] dark:text-slate-400">{item.label}</span>
      </div>
    ))}
  </div>
);

export const TrendLine = ({ data }: { data: AnalyticsPoint[] }) => {
  const points = data.map((item, index) => {
    const x = 12 + index * (276 / Math.max(data.length - 1, 1));
    const y = 108 - item.value;
    return `${x},${y}`;
  });

  return (
    <div className="rounded-lg bg-[#f8faff] p-4 dark:bg-white/[0.03]">
      <svg viewBox="0 0 300 120" className="h-48 w-full" role="img" aria-label="Completion trend">
        <path d="M12 104H288" stroke="currentColor" className="text-[#dce4ef] dark:text-white/10" strokeWidth="2" />
        <polyline points={points.join(' ')} fill="none" stroke="#2f6fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((item, index) => {
          const x = 12 + index * (276 / Math.max(data.length - 1, 1));
          const y = 108 - item.value;
          return <circle key={item.label} cx={x} cy={y} r="4" fill="#2f6fff" />;
        })}
      </svg>
      <div className="grid grid-cols-6 gap-2 text-center text-xs font-bold text-[#687386] dark:text-slate-400">
        {data.map((item) => (
          <span key={item.label} className="truncate">{item.label}</span>
        ))}
      </div>
    </div>
  );
};

export const ProgressRing = ({ value, label }: { value: number; label: string }) => {
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex items-center gap-4">
      <svg className="h-28 w-28 shrink-0 -rotate-90" viewBox="0 0 100 100" role="img" aria-label={label}>
        <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="10" className="text-[#e8edf5] dark:text-white/10" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="#2f6fff" strokeWidth="10" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
      </svg>
      <div className="min-w-0">
        <div className="text-3xl font-black tracking-[-0.04em] text-[#111827] dark:text-white">{value}%</div>
        <div className="mt-1 text-sm font-semibold text-[#687386] dark:text-slate-400">{label}</div>
      </div>
    </div>
  );
};
