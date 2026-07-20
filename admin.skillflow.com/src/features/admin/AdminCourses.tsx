import { FormEvent, useEffect, useMemo, useState } from 'react';
import { AdminEmptyState } from './AdminEmptyState';
import { AdminModal } from './AdminModal';
import { AdminTable } from './AdminTable';
import { courses as seedCourses } from './adminData';
import { ActionButton, FilterSelect, ProgressBar, SearchField, SectionHeader, StatusBadge } from './AdminPrimitives';
import { CourseRecord } from './adminTypes';

interface CourseForm {
  title: string;
  category: string;
  author: string;
  lessons: number;
  status: string;
}

const defaultCourse: CourseForm = {
  title: '',
  category: 'Leadership',
  author: 'Skillflow Admin',
  lessons: 8,
  status: 'Draft',
};

export const AdminCourses = ({ actionSignal }: { actionSignal: number }) => {
  const [records, setRecords] = useState<CourseRecord[]>(seedCourses);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All categories');
  const [status, setStatus] = useState('All statuses');
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<CourseForm>(defaultCourse);

  useEffect(() => {
    if (actionSignal > 0) {
      setModalOpen(true);
    }
  }, [actionSignal]);

  const categoryOptions = ['All categories', ...Array.from(new Set(records.map((course) => course.category)))];
  const statusOptions = ['All statuses', 'Draft', 'Published', 'Archived'];

  const filtered = useMemo(() => {
    const normalized = search.toLowerCase();
    return records.filter((course) => {
      const matchesSearch = [course.title, course.category, course.author].some((value) => value.toLowerCase().includes(normalized));
      const matchesCategory = category === 'All categories' || course.category === category;
      const matchesStatus = status === 'All statuses' || course.status === status;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [records, search, category, status]);

  const submitCourse = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextCourse: CourseRecord = {
      id: Date.now(),
      title: form.title.trim(),
      category: form.category,
      lessons: form.lessons,
      enrolledLearners: 0,
      completionRate: 0,
      author: form.author.trim(),
      updatedDate: 'Jul 20, 2026',
      status: form.status,
    };

    setRecords((current) => [nextCourse, ...current]);
    setForm(defaultCourse);
    setModalOpen(false);
  };

  return (
    <section className="admin-surface overflow-hidden rounded-xl">
      <SectionHeader
        title="Courses / Learning Paths"
        description="Manage Skillflow courses, certifications, and learning path status"
        actions={<ActionButton icon="plus" onClick={() => setModalOpen(true)}>Create course</ActionButton>}
      />

      <div className="flex flex-col gap-2 border-b border-[#e8edf5] p-4 dark:border-white/10 md:flex-row">
        <SearchField value={search} onChange={setSearch} placeholder="Search courses or authors" />
        <FilterSelect value={category} onChange={setCategory} options={categoryOptions} label="Category" />
        <FilterSelect value={status} onChange={setStatus} options={statusOptions} label="Status" />
      </div>

      {filtered.length > 0 ? (
        <AdminTable headers={['Course title', 'Category', 'Lessons', 'Learners', 'Completion', 'Author', 'Updated', 'Status', 'Actions']}>
          {filtered.map((course) => (
            <tr key={course.id} className="text-sm">
              <td className="max-w-[280px] px-4 py-3"><span className="block truncate font-extrabold text-[#151923] dark:text-white">{course.title}</span></td>
              <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{course.category}</td>
              <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{course.lessons}</td>
              <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{course.enrolledLearners.toLocaleString()}</td>
              <td className="px-4 py-3"><ProgressBar value={course.completionRate} /></td>
              <td className="whitespace-nowrap px-4 py-3 text-[#687386] dark:text-slate-400">{course.author}</td>
              <td className="whitespace-nowrap px-4 py-3 text-[#687386] dark:text-slate-400">{course.updatedDate}</td>
              <td className="whitespace-nowrap px-4 py-3"><StatusBadge label={course.status} /></td>
              <td className="whitespace-nowrap px-4 py-3">
                <button type="button" className="rounded-md px-2 py-1 text-sm font-bold text-[#2f6fff] hover:bg-blue-50 dark:hover:bg-blue-400/10">Review</button>
              </td>
            </tr>
          ))}
        </AdminTable>
      ) : (
        <AdminEmptyState title="No courses found" description="Try a broader search or create a new Skillflow learning path." />
      )}

      <AdminModal open={modalOpen} onClose={() => setModalOpen(false)} title="Create course" description="Add a local course draft to the admin workspace">
        <form onSubmit={submitCourse} className="space-y-4">
          <label className="space-y-1.5">
            <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Course title</span>
            <input required value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm outline-none focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Category</span>
              <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm dark:border-white/10 dark:bg-[#151821] dark:text-white">
                {['Leadership', 'Compliance', 'Customer Success', 'Sales', 'Product'].map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Status</span>
              <select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm dark:border-white/10 dark:bg-[#151821] dark:text-white">
                {statusOptions.filter((item) => item !== 'All statuses').map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Lessons</span>
              <input required min={1} type="number" value={form.lessons} onChange={(event) => setForm({ ...form, lessons: Number(event.target.value) })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm outline-none focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
            </label>
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Author</span>
              <input required value={form.author} onChange={(event) => setForm({ ...form, author: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm outline-none focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
            </label>
          </div>
          <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
            <ActionButton variant="secondary" onClick={() => setModalOpen(false)}>Cancel</ActionButton>
            <ActionButton type="submit" icon="plus">Create course</ActionButton>
          </div>
        </form>
      </AdminModal>
    </section>
  );
};
