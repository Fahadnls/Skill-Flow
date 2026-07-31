import { ReactNode } from 'react';

export const AdminEmptyState = ({ title, description, action }: { title: string; description: string; action?: ReactNode }) => (
  <div className="flex min-h-[220px] flex-col items-center justify-center px-5 py-10 text-center">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf1ff] text-[#2f6fff] dark:bg-blue-400/10 dark:text-blue-200">
      <span className="text-xl font-black">SF</span>
    </div>
    <h3 className="mt-4 text-base font-extrabold text-[#141720] dark:text-white">{title}</h3>
    <p className="mt-2 max-w-sm text-sm leading-6 text-[#687386] dark:text-slate-400">{description}</p>
    {action ? <div className="mt-4">{action}</div> : null}
  </div>
);
