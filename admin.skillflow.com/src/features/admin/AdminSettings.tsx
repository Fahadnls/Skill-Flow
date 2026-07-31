import { useEffect, useState } from 'react';
import { AdminTable } from './AdminTable';
import { integrations } from './adminData';
import { ActionButton, SectionHeader, StatusBadge } from './AdminPrimitives';

const settingGroups = [
  { title: 'Workspace profile', fields: ['Workspace name', 'Primary domain', 'Default timezone'] },
  { title: 'Branding', fields: ['Logo lockup', 'Accent color', 'Certificate template'] },
  { title: 'Notifications', fields: ['Invite reminders', 'Overdue alerts', 'Weekly manager summary'] },
  { title: 'Learning defaults', fields: ['Default due window', 'Completion threshold', 'Manager approvals'] },
  { title: 'Data export', fields: ['CSV exports', 'Scheduled reports', 'Retention period'] },
  { title: 'Security preferences', fields: ['Session timeout', 'SCORM file scanning', 'Admin approval'] },
];

export const AdminSettings = ({ actionSignal }: { actionSignal: number }) => {
  const [saved, setSaved] = useState('');

  useEffect(() => {
    if (actionSignal > 0) {
      setSaved('Settings saved locally');
    }
  }, [actionSignal]);

  return (
    <div className="space-y-4">
      <section className="admin-surface overflow-hidden rounded-xl">
        <SectionHeader
          title="Settings"
          description="Configure workspace defaults, branding, notifications, integrations, and security"
          actions={<ActionButton onClick={() => setSaved('Settings saved locally')}>Save settings</ActionButton>}
        />
        {saved ? <div className="mx-4 mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800 dark:border-emerald-300/15 dark:bg-emerald-400/10 dark:text-emerald-200">{saved}</div> : null}
        <div className="grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
          {settingGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-[#e8edf5] bg-[#fbfcff] p-4 dark:border-white/10 dark:bg-white/[0.03]">
              <h3 className="text-sm font-black uppercase tracking-[0.04em] text-[#687386] dark:text-slate-400">{group.title}</h3>
              <div className="mt-4 space-y-3">
                {group.fields.map((field, index) => (
                  <label key={field} className="flex items-center justify-between gap-3 rounded-lg bg-white px-3 py-2 dark:bg-[#0c0e14]">
                    <span className="min-w-0 truncate text-sm font-semibold text-[#2d3442] dark:text-slate-200">{field}</span>
                    <input type="checkbox" defaultChecked={index !== 2} className="h-4 w-4 shrink-0 accent-[#2f6fff]" />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="admin-surface overflow-hidden rounded-xl">
        <SectionHeader title="Integrations" description="Mock connection health for workspace tools and automations" />
        <AdminTable headers={['Integration', 'Status', 'Last sync', 'Owner', 'Actions']}>
          {integrations.map((integration) => (
            <tr key={integration.id} className="text-sm">
              <td className="whitespace-nowrap px-4 py-3 font-extrabold text-[#151923] dark:text-white">{integration.name}</td>
              <td className="whitespace-nowrap px-4 py-3"><StatusBadge label={integration.status} /></td>
              <td className="whitespace-nowrap px-4 py-3 text-[#687386] dark:text-slate-400">{integration.lastSync}</td>
              <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{integration.owner}</td>
              <td className="whitespace-nowrap px-4 py-3">
                <button type="button" className="rounded-md px-2 py-1 text-sm font-bold text-[#2f6fff] hover:bg-blue-50 dark:hover:bg-blue-400/10">Configure</button>
              </td>
            </tr>
          ))}
        </AdminTable>
      </section>
    </div>
  );
};
