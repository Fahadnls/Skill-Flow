import { useEffect, useState } from 'react';
import { BarChart, ProgressRing, TrendLine } from './AdminCharts';
import { AdminStatCard } from './AdminStatCard';
import { AdminTable } from './AdminTable';
import { attentionItems, completionTrend, dashboardStats, engagementData, learningProgress, recentActivity, supportTickets, teams } from './adminData';
import { ActionButton, Avatar, ProgressBar, SectionHeader, StatusBadge, toneClasses } from './AdminPrimitives';

export const AdminDashboard = ({ actionSignal }: { actionSignal: number }) => {
  const [exportedAt, setExportedAt] = useState('');

  useEffect(() => {
    if (actionSignal > 0) {
      setExportedAt('Dashboard report prepared locally');
    }
  }, [actionSignal]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {dashboardStats.map((metric) => (
          <AdminStatCard key={metric.label} metric={metric} />
        ))}
      </div>

      {exportedAt ? (
        <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 dark:border-blue-300/15 dark:bg-blue-400/10 dark:text-blue-200">{exportedAt}</div>
      ) : null}

      <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <section className="admin-surface overflow-hidden rounded-xl">
          <SectionHeader
            title="Learning Activity"
            description="Engagement and completion across Skillflow workspaces"
            actions={<ActionButton icon="export" variant="secondary">Export</ActionButton>}
          />
          <div className="grid gap-4 p-4 lg:grid-cols-2">
            <div>
              <div className="mb-3 text-sm font-extrabold text-[#2d3442] dark:text-white">Weekly engagement</div>
              <BarChart data={engagementData} />
            </div>
            <div>
              <div className="mb-3 text-sm font-extrabold text-[#2d3442] dark:text-white">Completion trend</div>
              <TrendLine data={completionTrend} />
            </div>
          </div>
        </section>

        <section className="admin-surface overflow-hidden rounded-xl">
          <SectionHeader title="Needs Attention" description="Operational items that may affect learner outcomes" />
          <div className="space-y-3 p-4">
            {attentionItems.map((item) => (
              <div key={item.id} className="rounded-lg border border-[#e8edf5] bg-[#fbfcff] p-3 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ring-4 ${toneClasses[item.severity]}`} />
                  <div className="min-w-0">
                    <div className="text-sm font-extrabold text-[#172033] dark:text-white">{item.title}</div>
                    <div className="mt-1 text-sm leading-5 text-[#687386] dark:text-slate-400">{item.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.4fr_0.8fr]">
        <section className="admin-surface overflow-hidden rounded-xl">
          <SectionHeader title="Learning Progress" description="Current progress for high-priority learners" />
          <AdminTable headers={['Learner', 'Team', 'Learning path', 'Progress', 'Status', 'Last activity']}>
            {learningProgress.map((row) => (
              <tr key={row.email} className="text-sm">
                <td className="max-w-[240px] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar name={row.learner} />
                    <div className="min-w-0">
                      <div className="truncate font-extrabold text-[#151923] dark:text-white">{row.learner}</div>
                      <div className="truncate text-xs text-[#7a8495] dark:text-slate-500">{row.email}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{row.team}</td>
                <td className="max-w-[220px] px-4 py-3 text-[#4d5869] dark:text-slate-300"><span className="block truncate">{row.path}</span></td>
                <td className="px-4 py-3"><ProgressBar value={row.progress} /></td>
                <td className="whitespace-nowrap px-4 py-3"><StatusBadge label={row.status} /></td>
                <td className="whitespace-nowrap px-4 py-3 text-[#687386] dark:text-slate-400">{row.lastActivity}</td>
              </tr>
            ))}
          </AdminTable>
        </section>

        <div className="space-y-4">
          <section className="admin-surface rounded-xl p-4">
            <div className="mb-4 text-sm font-extrabold text-[#2d3442] dark:text-white">Team performance</div>
            <div className="space-y-3">
              {teams.slice(0, 5).map((team) => (
                <div key={team.id}>
                  <div className="mb-1 flex items-center justify-between gap-3 text-sm">
                    <span className="truncate font-bold text-[#172033] dark:text-white">{team.name}</span>
                    <span className="shrink-0 text-[#687386] dark:text-slate-400">{team.completionRate}%</span>
                  </div>
                  <ProgressBar value={team.completionRate} />
                </div>
              ))}
            </div>
          </section>

          <section className="admin-surface rounded-xl p-4">
            <ProgressRing value={81} label="Engaged this week" />
            <div className="mt-4 space-y-2">
              {supportTickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between gap-3 rounded-lg bg-[#f8faff] px-3 py-2 dark:bg-white/[0.04]">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-[#172033] dark:text-white">{ticket.subject}</div>
                    <div className="truncate text-xs text-[#7a8495] dark:text-slate-500">{ticket.customer}</div>
                  </div>
                  <StatusBadge label={ticket.priority} tone={ticket.priority === 'High' ? 'red' : ticket.priority === 'Medium' ? 'amber' : 'slate'} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="admin-surface overflow-hidden rounded-xl">
        <SectionHeader title="Recent Activity" description="Latest changes across learners, content, billing, and integrations" />
        <div className="divide-y divide-[#edf1f6] dark:divide-white/10">
          {recentActivity.map((event) => (
            <div key={event.id} className="flex items-start gap-3 px-4 py-3">
              <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ring-4 ${toneClasses[event.type]}`} />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-extrabold text-[#172033] dark:text-white">{event.label}</div>
                <div className="mt-1 text-sm text-[#687386] dark:text-slate-400">{event.detail}</div>
              </div>
              <div className="shrink-0 text-xs font-semibold text-[#7a8495] dark:text-slate-500">{event.time}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
