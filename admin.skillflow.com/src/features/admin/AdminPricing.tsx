import { FormEvent, useEffect, useState } from 'react';
import { AdminModal } from './AdminModal';
import { pricingPlans as seedPlans } from './adminData';
import { ActionButton, SectionHeader, StatusBadge } from './AdminPrimitives';
import { PricingPlanRecord } from './adminTypes';

export const AdminPricing = ({ actionSignal }: { actionSignal: number }) => {
  const [plans, setPlans] = useState<PricingPlanRecord[]>(seedPlans);
  const [editingPlan, setEditingPlan] = useState<PricingPlanRecord | null>(null);

  useEffect(() => {
    if (actionSignal > 0) {
      setEditingPlan(plans[0]);
    }
  }, [actionSignal, plans]);

  const submitPlan = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!editingPlan) {
      return;
    }

    setPlans((current) => current.map((plan) => (plan.id === editingPlan.id ? editingPlan : plan)));
    setEditingPlan(null);
  };

  return (
    <section className="admin-surface overflow-hidden rounded-xl">
      <SectionHeader title="Pricing Plans" description="Manage local Skillflow package details without payment provider integration" />
      <div className="grid gap-4 p-4 lg:grid-cols-2 2xl:grid-cols-4">
        {plans.map((plan) => (
          <article key={plan.id} className="rounded-xl border border-[#e8edf5] bg-[#fbfcff] p-4 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-lg font-black tracking-[-0.03em] text-[#151923] dark:text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-[#687386] dark:text-slate-400">{plan.includedUsers} users included</p>
              </div>
              <StatusBadge label={plan.status} />
            </div>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-3xl font-black tracking-[-0.05em] text-[#111827] dark:text-white">${plan.monthlyPrice}</span>
              <span className="pb-1 text-sm font-semibold text-[#687386] dark:text-slate-400">per user monthly</span>
            </div>
            <div className="mt-1 text-sm text-[#687386] dark:text-slate-400">${plan.annualPrice} annual price</div>
            <div className="mt-4 text-sm font-bold text-[#2d3442] dark:text-slate-200">{plan.activeCustomers.toLocaleString()} active customers</div>
            <div className="mt-4 space-y-2">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-[#4d5869] dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2f6fff]" />
                  <span className="min-w-0 truncate">{feature}</span>
                </div>
              ))}
            </div>
            <button type="button" onClick={() => setEditingPlan(plan)} className="mt-5 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 py-2 text-sm font-black text-[#2f6fff] transition hover:bg-blue-50 dark:border-white/10 dark:bg-white/5 dark:hover:bg-blue-400/10">Edit plan</button>
          </article>
        ))}
      </div>

      <AdminModal open={Boolean(editingPlan)} onClose={() => setEditingPlan(null)} title="Edit pricing plan" description="Update local pricing fields for this admin session">
        {editingPlan ? (
          <form onSubmit={submitPlan} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Plan name</span>
                <input required value={editingPlan.name} onChange={(event) => setEditingPlan({ ...editingPlan, name: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm outline-none focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
              </label>
              <label className="space-y-1.5">
                <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Included users</span>
                <input required value={editingPlan.includedUsers} onChange={(event) => setEditingPlan({ ...editingPlan, includedUsers: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm outline-none focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
              </label>
              <label className="space-y-1.5">
                <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Monthly price</span>
                <input required min={0} type="number" value={editingPlan.monthlyPrice} onChange={(event) => setEditingPlan({ ...editingPlan, monthlyPrice: Number(event.target.value) })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm outline-none focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
              </label>
              <label className="space-y-1.5">
                <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Annual price</span>
                <input required min={0} type="number" value={editingPlan.annualPrice} onChange={(event) => setEditingPlan({ ...editingPlan, annualPrice: Number(event.target.value) })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm outline-none focus:border-[#2f6fff] focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white" />
              </label>
            </div>
            <label className="space-y-1.5">
              <span className="text-sm font-bold text-[#2d3442] dark:text-slate-200">Status</span>
              <select value={editingPlan.status} onChange={(event) => setEditingPlan({ ...editingPlan, status: event.target.value })} className="h-10 w-full rounded-lg border border-[#dfe6f0] bg-white px-3 text-sm dark:border-white/10 dark:bg-[#151821] dark:text-white">
                {['Active', 'Review', 'Archived'].map((status) => <option key={status}>{status}</option>)}
              </select>
            </label>
            <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
              <ActionButton variant="secondary" onClick={() => setEditingPlan(null)}>Cancel</ActionButton>
              <ActionButton type="submit">Save plan</ActionButton>
            </div>
          </form>
        ) : null}
      </AdminModal>
    </section>
  );
};
