import { StatMetric } from './adminTypes';

export const AdminStatCard = ({ metric }: { metric: StatMetric }) => (
  <article className="admin-surface rounded-xl p-4">
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-[#687386] dark:text-slate-400">{metric.label}</p>
        <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#111827] dark:text-white">{metric.value}</p>
      </div>
      <span className={`shrink-0 rounded-full px-2 py-1 text-xs font-black ${metric.trendPositive ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300' : 'bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300'}`}>
        {metric.trend}
      </span>
    </div>
    <p className="mt-3 truncate text-sm text-[#7a8495] dark:text-slate-500">{metric.helper}</p>
  </article>
);
