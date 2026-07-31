import { AdminIcon } from './AdminIcons';
import { ActionButton } from './AdminPrimitives';
import { AdminSection } from './adminTypes';
import { AdminTheme } from './useAdminTheme';

interface AdminTopbarProps {
  activeLabel: string;
  activeSection: AdminSection;
  theme: AdminTheme;
  onToggleTheme: () => void;
  onOpenSidebar: () => void;
  onPrimaryAction: () => void;
}

const primaryActionLabel: Record<AdminSection, string> = {
  dashboard: 'Export report',
  users: 'Add user',
  courses: 'Create course',
  teams: 'Invite team',
  analytics: 'Export report',
  content: 'Create post',
  pricing: 'Edit plan',
  settings: 'Save settings',
};

export const AdminTopbar = ({ activeLabel, activeSection, theme, onToggleTheme, onOpenSidebar, onPrimaryAction }: AdminTopbarProps) => {
  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-20 border-b backdrop-blur-xl ${isDark ? 'border-white/10 bg-[#0e1016]/95 shadow-[0_10px_28px_rgba(0,0,0,0.22)]' : 'border-[#e4e9f2] bg-white/95 shadow-[0_10px_28px_rgba(54,76,116,0.07)]'}`}>
      <div className="flex min-h-16 flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5 lg:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button type="button" onClick={onOpenSidebar} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border shadow-sm transition lg:hidden ${isDark ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-[#dfe6f0] bg-white text-[#1f2937] hover:bg-[#f4f7fb]'}`} aria-label="Open navigation">
            <AdminIcon name="menu" className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <div className={`truncate text-base font-black tracking-[-0.03em] sm:text-lg ${isDark ? 'text-white' : 'text-[#111827]'}`}>{activeLabel}</div>
            <div className={`truncate text-xs font-semibold ${isDark ? 'text-slate-400' : 'text-[#657086]'}`}>Skillflow admin workspace</div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 justify-end gap-2">
          <div className={`hidden min-w-[180px] max-w-xs flex-1 items-center gap-2 rounded-lg border px-3 py-2 text-sm transition sm:flex ${isDark ? 'border-white/10 bg-white/[0.06] text-slate-400' : 'border-[#dfe6f0] bg-[#f8faff] text-[#71809a]'}`}>
            <AdminIcon name="search" className="h-4 w-4 shrink-0" />
            <span className="truncate">Search learners, teams, courses</span>
          </div>
          <button type="button" onClick={onToggleTheme} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border shadow-sm transition ${isDark ? 'border-white/10 bg-white/[0.06] text-blue-200 hover:bg-white/10' : 'border-[#dfe6f0] bg-[#f8faff] text-[#2f6fff] hover:bg-[#eef4ff]'}`} aria-label="Toggle dark mode">
            <AdminIcon name={isDark ? 'sun' : 'moon'} className="h-5 w-5" />
          </button>
          <ActionButton icon={activeSection === 'dashboard' || activeSection === 'analytics' ? 'export' : 'plus'} onClick={onPrimaryAction}>
            {primaryActionLabel[activeSection]}
          </ActionButton>
        </div>
      </div>
    </header>
  );
};
