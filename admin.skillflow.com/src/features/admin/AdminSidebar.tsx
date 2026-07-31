import { adminNavItems } from './adminData';
import { AdminIcon } from './AdminIcons';
import { AdminSection } from './adminTypes';

interface AdminSidebarProps {
  activeSection: AdminSection;
  onSelect: (section: AdminSection) => void;
  open: boolean;
  onClose: () => void;
}

const SidebarContent = ({ activeSection, onSelect }: Pick<AdminSidebarProps, 'activeSection' | 'onSelect'>) => (
  <div className="flex h-full flex-col">
    <div className="flex h-16 items-center gap-3 border-b border-[#e8edf5] px-5 dark:border-white/10">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2f6fff] text-sm font-black text-white shadow-[0_10px_22px_rgba(47,111,255,0.25)]">SF</div>
      <div className="min-w-0">
        <div className="truncate text-sm font-black tracking-[-0.03em] text-[#151923] dark:text-white">SKILLFLOW</div>
        <div className="truncate text-xs font-semibold text-[#7a8495] dark:text-slate-500">Admin Console stating</div>
      </div>
    </div>

    <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4" aria-label="Admin navigation">
      {adminNavItems.map((item) => {
        const active = item.id === activeSection;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${
              active
                ? 'bg-[#eaf1ff] text-[#215fd8] shadow-[inset_0_0_0_1px_rgba(47,111,255,0.12)] dark:bg-blue-400/10 dark:text-blue-200'
                : 'text-[#5f6878] hover:bg-[#f2f5fa] hover:text-[#151923] dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white'
            }`}
          >
            <AdminIcon name={item.id} className="h-5 w-5 shrink-0" />
            <span className="min-w-0">
              <span className="block truncate text-sm font-extrabold">{item.label}</span>
              <span className="block truncate text-xs font-medium opacity-75">{item.description}</span>
            </span>
          </button>
        );
      })}
    </nav>

    <div className="border-t border-[#e8edf5] p-4 dark:border-white/10">
      <div className="rounded-lg bg-[#f8faff] p-3 ring-1 ring-[#e8edf5] dark:bg-white/[0.04] dark:ring-white/10">
        <div className="text-xs font-black uppercase tracking-[0.06em] text-[#7a8495] dark:text-slate-500">Workspace</div>
        <div className="mt-1 truncate text-sm font-extrabold text-[#151923] dark:text-white">Skillflow Global</div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e8edf5] dark:bg-white/10">
          <div className="h-full w-[78%] rounded-full bg-[#2f6fff]" />
        </div>
      </div>
    </div>
  </div>
);

export const AdminSidebar = ({ activeSection, onSelect, open, onClose }: AdminSidebarProps) => (
  <>
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-[#e4e9f2] bg-white/95 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-[#0e1016]/95 lg:block">
      <SidebarContent activeSection={activeSection} onSelect={onSelect} />
    </aside>

    <div className={`fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm transition lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={onClose} />

    <aside className={`fixed inset-y-0 left-0 z-50 w-[min(20rem,86vw)] border-r border-[#e4e9f2] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.24)] transition duration-300 dark:border-white/10 dark:bg-[#0e1016] lg:hidden ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="absolute right-3 top-3">
        <button type="button" onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-lg text-[#687386] transition hover:bg-[#f2f5fa] dark:text-slate-300 dark:hover:bg-white/10" aria-label="Close navigation">
          <AdminIcon name="close" className="h-5 w-5" />
        </button>
      </div>
      <SidebarContent activeSection={activeSection} onSelect={onSelect} />
    </aside>
  </>
);
