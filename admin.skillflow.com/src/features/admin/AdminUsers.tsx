import { FormEvent, useEffect, useMemo, useState } from 'react';
import { AdminEmptyState } from './AdminEmptyState';
import { AdminModal } from './AdminModal';
import { AdminTable } from './AdminTable';
import { courses, initialUsers, teams } from './adminData';
import { ActionButton, Avatar, FilterSelect, ProgressBar, SearchField, SectionHeader, StatusBadge } from './AdminPrimitives';
import { UserRecord } from './adminTypes';

interface UserForm {
  name: string;
  email: string;
  team: string;
  role: string;
  path: string;
  sendInvitation: boolean;
}

const defaultForm: UserForm = {
  name: '',
  email: '',
  team: 'Product',
  role: 'Learner',
  path: 'New Manager Foundations',
  sendInvitation: true,
};

export const AdminUsers = ({ actionSignal }: { actionSignal: number }) => {
  const [users, setUsers] = useState<UserRecord[]>(initialUsers);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All statuses');
  const [team, setTeam] = useState('All teams');
  const [role, setRole] = useState('All roles');
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<UserForm>(defaultForm);

  useEffect(() => {
    if (actionSignal > 0) {
      setModalOpen(true);
    }
  }, [actionSignal]);

  const filteredUsers = useMemo(() => {
    const normalized = search.toLowerCase();

    return users.filter((user) => {
      const matchesSearch = [user.name, user.email, user.team, user.role].some((value) => value.toLowerCase().includes(normalized));
      const matchesStatus = status === 'All statuses' || user.status === status;
      const matchesTeam = team === 'All teams' || user.team === team;
      const matchesRole = role === 'All roles' || user.role === role;
      return matchesSearch && matchesStatus && matchesTeam && matchesRole;
    });
  }, [users, search, status, team, role]);

  const submitUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextUser: UserRecord = {
      id: Date.now(),
      name: form.name.trim(),
      email: form.email.trim(),
      team: form.team,
      role: form.role,
      enrolledCourses: form.path ? 1 : 0,
      completionRate: 0,
      status: form.sendInvitation ? 'Invited' : 'Active',
      lastActive: form.sendInvitation ? 'Invitation pending' : 'Just now',
    };

    setUsers((current) => [nextUser, ...current]);
    setForm(defaultForm);
    setModalOpen(false);
  };

  const teamOptions = ['All teams', ...teams.map((item) => item.name)];
  const statusOptions = ['All statuses', 'Active', 'At risk', 'Overdue', 'Invited'];
  const roleOptions = ['All roles', 'Learner', 'Manager', 'Admin', 'Owner'];

  return (
    <section className="admin-surface overflow-hidden rounded-xl">
      <SectionHeader
        title="Users"
        description="Search learners, assign learning paths, and review completion health"
        actions={
          <>
            <ActionButton icon="export" variant="secondary">Export</ActionButton>
            <ActionButton icon="plus" onClick={() => setModalOpen(true)}>Add user</ActionButton>
          </>
        }
      />

      <div className="flex flex-col gap-2 border-b border-[#e8edf5] p-4 dark:border-white/10 lg:flex-row">
        <SearchField value={search} onChange={setSearch} placeholder="Search users or emails" />
        <FilterSelect value={status} onChange={setStatus} options={statusOptions} label="Status" />
        <FilterSelect value={team} onChange={setTeam} options={teamOptions} label="Team" />
        <FilterSelect value={role} onChange={setRole} options={roleOptions} label="Role" />
      </div>

      {filteredUsers.length > 0 ? (
        <AdminTable headers={['User', 'Email', 'Team', 'Role', 'Courses', 'Completion', 'Status', 'Last active', 'Actions']}>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="text-sm">
              <td className="max-w-[220px] px-4 py-3">
                <div className="flex items-center gap-3">
                  <Avatar name={user.name} />
                  <span className="truncate font-extrabold text-[#151923] dark:text-white">{user.name}</span>
                </div>
              </td>
              <td className="max-w-[260px] px-4 py-3 text-[#687386] dark:text-slate-400"><span className="block truncate">{user.email}</span></td>
              <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{user.team}</td>
              <td className="whitespace-nowrap px-4 py-3"><StatusBadge label={user.role} /></td>
              <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{user.enrolledCourses}</td>
              <td className="px-4 py-3"><ProgressBar value={user.completionRate} /></td>
              <td className="whitespace-nowrap px-4 py-3"><StatusBadge label={user.status} /></td>
              <td className="whitespace-nowrap px-4 py-3 text-[#687386] dark:text-slate-400">{user.lastActive}</td>
              <td className="whitespace-nowrap px-4 py-3">
                <button type="button" className="rounded-md px-2 py-1 text-sm font-bold text-[#2f6fff] hover:bg-blue-50 dark:hover:bg-blue-400/10">Edit</button>
              </td>
            </tr>
          ))}
        </AdminTable>
      ) : (
        <AdminEmptyState title="No users match these filters" description="Adjust your search or clear a filter to return to the full learner list." />
      )}

      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title="Add user" description="Create a local learner record and optionally send an invitation">
        <form onSubmit={submitUser} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Full name</span>
              <input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm outline-none focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Email</span>
              <input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm outline-none focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Team</span>
              <select value={form.team} onChange={(event) => setForm({ ...form, team: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm dark:border-white/10 dark:bg-[#151821] dark:text-white">
                {teams.map((item) => <option key={item.id}>{item.name}</option>)}
              </select>
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Role</span>
              <select value={form.role} onChange={(event) => setForm({ ...form, role: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm dark:border-white/10 dark:bg-[#151821] dark:text-white">
                {roleOptions.filter((item) => item !== 'All roles').map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>
          <label className="space-y-1.5">
            <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Initial learning path</span>
            <select value={form.path} onChange={(event) => setForm({ ...form, path: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm dark:border-white/10 dark:bg-[#151821] dark:text-white">
              {courses.map((course) => <option key={course.id}>{course.title}</option>)}
            </select>
          </label>
          <label className="flex items-start gap-3 rounded-lg border border-[#e8edf5] bg-[#f8faff] p-3 dark:border-white/10 dark:bg-white/[0.04]">
            <input type="checkbox" checked={form.sendInvitation} onChange={(event) => setForm({ ...form, sendInvitation: event.target.checked })} className="mt-1 h-4 w-4 accent-[#2f6fff]" />
            <span className="min-w-0 text-sm text-[#4d5869] dark:text-slate-300">
              <span className="block font-bold text-[#172033] dark:text-white">Send invitation</span>
              <span className="block">The learner will be marked as invited until they accept.</span>
            </span>
          </label>
          <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
            <ActionButton variant="secondary" onClick={() => setModalOpen(false)}>Cancel</ActionButton>
            <ActionButton type="submit" icon="plus">Add user</ActionButton>
          </div>
        </form>
      </AdminModal>
    </section>
  );
};
