import { useEffect, useState } from 'react';
import { BarChart, ProgressRing, TrendLine } from './AdminCharts';
import { AdminTable } from './AdminTable';
import { completionTrend, courses, engagementData, teams } from './adminData';
import { ActionButton, FilterSelect, ProgressBar, SectionHeader, StatusBadge } from './AdminPrimitives';

const ranges = ['Last 7 days', 'Last 30 days', 'Quarter to date', 'Year to date'];

export const AdminAnalytics = ({ actionSignal }: { actionSignal: number }) => {
  const [range, setRange] = useState('Last 30 days');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (actionSignal > 0) {
      setNotice(`${range} report queued for local export`);
    }
  }, [actionSignal, range]);

  return (
    <div className="space-y-4">
      <section className="admin-surface overflow-hidden rounded-xl">
        <SectionHeader
          title="Analytics"
          description="Measure engagement, completion, course health, and team performance"
          actions={
            <>
              <FilterSelect value={range} onChange={setRange} options={ranges} label="Date range" />
              <ActionButton icon="export" onClick={() => setNotice(`${range} report queued for local export`)}>Export report</ActionButton>
            </>
          }
        />
        {notice ? <div className="mx-4 mt-4 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800 dark:border-blue-300/15 dark:bg-blue-400/10 dark:text-blue-200">{notice}</div> : null}
        <div className="grid gap-4 p-4 xl:grid-cols-[1fr_1fr_0.7fr]">
          <div>
            <div className="mb-3 text-sm font-extrabold text-[#2d3442] dark:text-white">Engagement by day</div>
            <BarChart data={engagementData} />
          </div>
          <div>
            <div className="mb-3 text-sm font-extrabold text-[#2d3442] dark:text-white">Completion trend</div>
            <TrendLine data={completionTrend} />
          </div>
          <div className="rounded-lg bg-[#f8faff] p-4 dark:bg-white/[0.03]">
            <ProgressRing value={74} label="Average completion" />
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-white p-3 dark:bg-[#0c0e14]">
                <div className="font-black text-[#111827] dark:text-white">12.8K</div>
                <div className="text-[#687386] dark:text-slate-400">Active sessions</div>
              </div>
              <div className="rounded-lg bg-white p-3 dark:bg-[#0c0e14]">
                <div className="font-black text-[#111827] dark:text-white">4.7m</div>
                <div className="text-[#687386] dark:text-slate-400">Learning minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 xl:grid-cols-2">
        <section className="admin-surface overflow-hidden rounded-xl">
          <SectionHeader title="Course Performance" description="Completion rates by course and publication status" />
          <AdminTable headers={['Course', 'Learners', 'Completion', 'Category', 'Status']}>
            {courses.map((course) => (
              <tr key={course.id} className="text-sm">
                <td className="max-w-[260px] px-4 py-3"><span className="block truncate font-extrabold text-[#151923] dark:text-white">{course.title}</span></td>
                <td className="whitespace-nowrap px-4 py-3 text-[#4d5869] dark:text-slate-300">{course.enrolledLearners.toLocaleString()}</td>
                <td className="px-4 py-3"><ProgressBar value={course.completionRate} /></td>
                <td className="whitespace-nowrap px-4 py-3 text-[#687386] dark:text-slate-400">{course.category}</td>
                <td className="whitespace-nowrap px-4 py-3"><StatusBadge label={course.status} /></td>
              </tr>
            ))}
          </AdminTable>
        </section>

        <section className="admin-surface overflow-hidden rounded-xl">
          <SectionHeader title="Team Comparison" description="Learning progress by team and assigned paths" />
          <div className="space-y-4 p-4">
            {teams.map((team) => (
              <div key={team.id} className="rounded-lg border border-[#e8edf5] bg-[#fbfcff] p-3 dark:border-white/10 dark:bg-white/[0.03]">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-extrabold text-[#151923] dark:text-white">{team.name}</div>
                    <div className="truncate text-xs text-[#7a8495] dark:text-slate-500">{team.members} members</div>
                  </div>
                  <StatusBadge label={team.plan} tone="blue" />
                </div>
                <ProgressBar value={team.completionRate} />
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="admin-surface rounded-xl p-4">
        <div className="grid gap-3 md:grid-cols-3">
          {['Mobile learning', 'Desktop completion', 'Manager review'].map((label, index) => (
            <div key={label} className="rounded-lg bg-[#f8faff] p-4 dark:bg-white/[0.03]">
              <div className="text-sm font-extrabold text-[#151923] dark:text-white">{label}</div>
              <div className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#111827] dark:text-white">{[61, 84, 47][index]}%</div>
              <div className="mt-2 text-sm text-[#687386] dark:text-slate-400">Learner activity breakdown for {range.toLowerCase()}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
