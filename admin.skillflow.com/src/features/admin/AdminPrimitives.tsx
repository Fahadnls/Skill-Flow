import { ReactNode } from 'react';
import { StatusTone } from './adminTypes';
import { AdminIcon } from './AdminIcons';

export const toneClasses: Record<StatusTone, string> = {
  green: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-300/15',
  blue: 'bg-blue-50 text-blue-700 ring-blue-600/15 dark:bg-blue-400/10 dark:text-blue-300 dark:ring-blue-300/15',
  amber: 'bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-300 dark:ring-amber-300/15',
  red: 'bg-rose-50 text-rose-700 ring-rose-600/15 dark:bg-rose-400/10 dark:text-rose-300 dark:ring-rose-300/15',
  slate: 'bg-slate-100 text-slate-700 ring-slate-600/10 dark:bg-white/10 dark:text-slate-300 dark:ring-white/10',
  purple: 'bg-violet-50 text-violet-700 ring-violet-600/15 dark:bg-violet-400/10 dark:text-violet-300 dark:ring-violet-300/15',
};

export const statusTone = (status: string): StatusTone => {
  const value = status.toLowerCase();

  if (value.includes('active') || value.includes('published') || value.includes('connected') || value.includes('track')) {
    return 'green';
  }

  if (value.includes('draft') || value.includes('scheduled') || value.includes('review') || value.includes('paused')) {
    return 'amber';
  }

  if (value.includes('risk') || value.includes('overdue') || value.includes('failed')) {
    return 'red';
  }

  if (value.includes('admin') || value.includes('owner')) {
    return 'purple';
  }

  return 'slate';
};

export const StatusBadge = ({ label, tone = statusTone(label) }: { label: string; tone?: StatusTone }) => (
  <span className={`inline-flex max-w-full items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${toneClasses[tone]}`}>
    <span className="truncate">{label}</span>
  </span>
);

export const Avatar = ({ name }: { name: string }) => {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e9f1ff] text-xs font-black text-[#2f6fff] ring-1 ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-200 dark:ring-blue-300/10">
      {initials}
    </span>
  );
};

export const ProgressBar = ({ value }: { value: number }) => (
  <div className="min-w-[92px]">
    <div className="h-2 overflow-hidden rounded-full bg-[#e8edf5] dark:bg-white/10">
      <div className="h-full rounded-full bg-[#2f6fff]" style={{ width: `${Math.max(0, Math.min(value, 100))}%` }} />
    </div>
    <div className="mt-1 text-xs font-semibold text-[#626b7d] dark:text-slate-400">{value}%</div>
  </div>
);

export const SectionHeader = ({ title, description, actions }: { title: string; description: string; actions?: ReactNode }) => (
  <div className="flex flex-col gap-3 border-b border-[#e8edf5] px-4 py-4 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between sm:px-5">
    <div className="min-w-0">
      <h2 className="truncate text-lg font-extrabold tracking-[-0.02em] text-[#141720] dark:text-white">{title}</h2>
      <p className="mt-1 text-sm text-[#687386] dark:text-slate-400">{description}</p>
    </div>
    {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
  </div>
);

export const ActionButton = ({ children, icon, onClick, variant = 'primary', type = 'button' }: { children: ReactNode; icon?: string; onClick?: () => void; variant?: 'primary' | 'secondary'; type?: 'button' | 'submit' }) => (
  <button
    type={type}
    onClick={onClick}
    className={`inline-flex min-h-10 max-w-full items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-sm font-bold transition active:scale-[0.98] ${
      variant === 'primary'
        ? 'bg-[#2f6fff] text-white shadow-[0_10px_22px_rgba(47,111,255,0.22)] hover:bg-[#235ee6]'
        : 'border border-[#dfe6f0] bg-white text-[#18202f] hover:bg-[#f4f7fb] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10'
    }`}
  >
    {icon ? <AdminIcon name={icon} className="h-4 w-4 shrink-0" /> : null}
    <span className="truncate">{children}</span>
  </button>
);

export const SearchField = ({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) => (
  <label className="relative block min-w-0 flex-1">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7b8496] dark:text-slate-500">
      <AdminIcon name="search" className="h-4 w-4" />
    </span>
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white pl-9 pr-3 text-sm text-[#151923] outline-none transition placeholder:text-[#98a1b1] focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
    />
  </label>
);

export const FilterSelect = ({ value, onChange, options, label }: { value: string; onChange: (value: string) => void; options: string[]; label: string }) => (
  <label className="min-w-[142px] flex-1 sm:flex-none">
    <span className="sr-only">{label}</span>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm font-semibold text-[#2d3442] outline-none transition focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-[#151821] dark:text-white"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </label>
);
