import { ReactNode, useEffect } from 'react';
import { AdminIcon } from './AdminIcons';

export const AdminModal = ({ title, description, children, open, onClose }: { title: string; description: string; children: ReactNode; open: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#111827]/45 p-3 backdrop-blur-sm dark:bg-black/65 sm:items-center">
      <div className="max-h-[calc(100vh-1.5rem)] w-full max-w-xl overflow-hidden rounded-xl border border-[#e6ebf2] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.22)] dark:border-white/10 dark:bg-[#11131a]">
        <div className="flex items-start justify-between gap-4 border-b border-[#e8edf5] px-5 py-4 dark:border-white/10">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-extrabold text-[#141720] dark:text-white">{title}</h2>
            <p className="mt-1 text-sm text-[#687386] dark:text-slate-400">{description}</p>
          </div>
          <button type="button" onClick={onClose} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[#687386] transition hover:bg-[#f2f5fa] dark:text-slate-300 dark:hover:bg-white/10" aria-label="Close modal">
            <AdminIcon name="close" className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[calc(100vh-8rem)] overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
};
