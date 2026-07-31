import { useEffect, useMemo, useState } from 'react';
import { AdminEmptyState } from './AdminEmptyState';
import { AdminTable } from './AdminTable';
import { teams } from './adminData';
import { ActionButton, ProgressBar, SearchField, SectionHeader, StatusBadge } from './AdminPrimitives';

export const AdminTeams = ({ actionSignal }: { actionSignal: number }) => {
  const [search, setSearch] = useState('');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (actionSignal > 0) {
      setNotice('Team invitation draft opened locally');
    }
  }, [actionSignal]);

  const filtered = useMemo(() => {
    const normalized = search.toLowerCase();
    return teams.filter((team) => [team.name, team.owner, team.plan, ...team.paths].some((value) => value.toLowerCase().includes(normalized)));
  }, [search]);

  return (
    <section className="admin-surface overflow-hidden rounded-xl">
      <SectionHeader
        title="Teams"
        description="Track assigned learning paths, owners, plans, and performance"
        actions={<ActionButton icon="plus" onClick={() => setNotice('Team invitation draft opened locally')}>Invite team</ActionButton>}
      />
      <div className="border-b border-[#e8edf5] p-4 dark:border-white/10">
        <SearchField value={search} onChange={setSearch} placeholder="Search teams, owners, or paths" />
        {notice ? <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800 dark:border-blue-300/15 dark:bg-blue-400/10 dark:text-blue-200">{notice}</div> : null}
      </div>
      {filtered.length > 0 ? (
        <AdminTable headers={['Team', 'Members', 'Assigned paths', 'Completion', 'Owner', 'Plan', 'Status', 'Actions']}>
          {filtered.map((team) => (
            <tr key={team.id} className="text-sm">
              <td className="whitespace-nowrap px-4 py-3 font-extrabold text-[#151923] dark:text-white">{team.name}</td>
              <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{team.members}</td>
              <td className="max-w-[320px] px-4 py-3 text-[#4d5869] dark:text-slate-300"><span className="block truncate">{team.paths.join(', ')}</span></td>
              <td className="px-4 py-3"><ProgressBar value={team.completionRate} /></td>
              <td className="whitespace-nowrap px-4 py-3 text-[#687386] dark:text-slate-400">{team.owner}</td>
              <td className="whitespace-nowrap px-4 py-3"><StatusBadge label={team.plan} tone="blue" /></td>
              <td className="whitespace-nowrap px-4 py-3"><StatusBadge label={team.status} /></td>
              <td className="whitespace-nowrap px-4 py-3">
                <button type="button" className="rounded-md px-2 py-1 text-sm font-bold text-[#2f6fff] hover:bg-blue-50 dark:hover:bg-blue-400/10">Manage</button>
              </td>
            </tr>
          ))}
        </AdminTable>
      ) : (
        <AdminEmptyState title="No teams match this search" description="Clear the search field to show all Skillflow teams." />
      )}
    </section>
  );
};
