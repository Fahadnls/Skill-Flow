import { useEffect, useMemo, useState } from 'react';
import { AdminEmptyState } from './AdminEmptyState';
import { AdminTable } from './AdminTable';
import { blogPosts } from './adminData';
import { ActionButton, FilterSelect, SearchField, SectionHeader, StatusBadge } from './AdminPrimitives';

export const AdminContent = ({ actionSignal }: { actionSignal: number }) => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All statuses');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (actionSignal > 0) {
      setNotice('New blog post draft created locally');
    }
  }, [actionSignal]);

  const filtered = useMemo(() => {
    const normalized = search.toLowerCase();
    return blogPosts.filter((post) => {
      const matchesSearch = [post.title, post.author, post.category].some((value) => value.toLowerCase().includes(normalized));
      const matchesStatus = status === 'All statuses' || post.status === status;
      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <section className="admin-surface overflow-hidden rounded-xl">
      <SectionHeader
        title="Content / Blog"
        description="Plan learning content, editorial updates, and workforce development articles"
        actions={<ActionButton icon="plus" onClick={() => setNotice('New blog post draft created locally')}>Create post</ActionButton>}
      />
      <div className="flex flex-col gap-2 border-b border-[#e8edf5] p-4 dark:border-white/10 md:flex-row">
        <SearchField value={search} onChange={setSearch} placeholder="Search blog posts" />
        <FilterSelect value={status} onChange={setStatus} options={['All statuses', 'Published', 'Scheduled', 'Draft']} label="Status" />
      </div>
      {notice ? <div className="mx-4 mt-4 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800 dark:border-blue-300/15 dark:bg-blue-400/10 dark:text-blue-200">{notice}</div> : null}
      {filtered.length > 0 ? (
        <AdminTable headers={['Title', 'Author', 'Category', 'Status', 'Publish date', 'Views', 'Last updated', 'Actions']}>
          {filtered.map((post) => (
            <tr key={post.id} className="text-sm">
              <td className="max-w-[320px] px-4 py-3"><span className="block truncate font-extrabold text-[#151923] dark:text-white">{post.title}</span></td>
              <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{post.author}</td>
              <td className="whitespace-nowrap px-4 py-3 text-[#687386] dark:text-slate-400">{post.category}</td>
              <td className="whitespace-nowrap px-4 py-3"><StatusBadge label={post.status} /></td>
              <td className="whitespace-nowrap px-4 py-3 text-[#687386] dark:text-slate-400">{post.publishDate}</td>
              <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{post.views.toLocaleString()}</td>
              <td className="whitespace-nowrap px-4 py-3 text-[#687386] dark:text-slate-400">{post.lastUpdated}</td>
              <td className="whitespace-nowrap px-4 py-3">
                <button type="button" className="rounded-md px-2 py-1 text-sm font-bold text-[#2f6fff] hover:bg-blue-50 dark:hover:bg-blue-400/10">Edit</button>
              </td>
            </tr>
          ))}
        </AdminTable>
      ) : (
        <AdminEmptyState title="No posts found" description="Change the status filter or search for another Skillflow content topic." />
      )}
    </section>
  );
};
