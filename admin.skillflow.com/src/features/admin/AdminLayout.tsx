import { useMemo, useState } from 'react';
import { AdminAnalytics } from './AdminAnalytics';
import { AdminContent } from './AdminContent';
import { AdminCourses } from './AdminCourses';
import { AdminDashboard } from './AdminDashboard';
import { adminNavItems } from './adminData';
import { AdminPricing } from './AdminPricing';
import { AdminSection } from './adminTypes';
import { AdminSettings } from './AdminSettings';
import { AdminSidebar } from './AdminSidebar';
import { AdminTeams } from './AdminTeams';
import { AdminTopbar } from './AdminTopbar';
import { AdminUsers } from './AdminUsers';
import { AdminTheme } from './useAdminTheme';

interface AdminLayoutProps {
  theme: {
    theme: AdminTheme;
    toggleTheme: () => void;
  };
}

export const AdminLayout = ({ theme }: AdminLayoutProps) => {
  const [activeSection, setActiveSection] = useState<AdminSection>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [topbarAction, setTopbarAction] = useState(0);
  const activeLabel = useMemo(() => adminNavItems.find((item) => item.id === activeSection)?.label ?? 'Dashboard', [activeSection]);

  const selectSection = (section: AdminSection) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  const content = {
    dashboard: <AdminDashboard actionSignal={topbarAction} />,
    users: <AdminUsers actionSignal={topbarAction} />,
    courses: <AdminCourses actionSignal={topbarAction} />,
    teams: <AdminTeams actionSignal={topbarAction} />,
    analytics: <AdminAnalytics actionSignal={topbarAction} />,
    content: <AdminContent actionSignal={topbarAction} />,
    pricing: <AdminPricing actionSignal={topbarAction} />,
    settings: <AdminSettings actionSignal={topbarAction} />,
  }[activeSection];

  return (
    <div className="min-h-screen bg-[#f6f8fc] text-[#111827] dark:bg-[#090a0d] dark:text-white">
      <AdminSidebar activeSection={activeSection} onSelect={selectSection} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="min-h-screen lg:pl-72">
        <AdminTopbar
          activeLabel={activeLabel}
          activeSection={activeSection}
          theme={theme.theme}
          onToggleTheme={theme.toggleTheme}
          onOpenSidebar={() => setSidebarOpen(true)}
          onPrimaryAction={() => setTopbarAction((value) => value + 1)}
        />
        <main className="mx-auto max-w-[1500px] px-3 py-4 sm:px-5 lg:px-6">
          {content}
        </main>
      </div>
    </div>
  );
};
