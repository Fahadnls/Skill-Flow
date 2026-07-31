export const CustomersChallenges = () => {
    return (
        <section className="relative px-5 py-16 lg:py-24">
            <div className="mx-auto max-w-[1240px] grid gap-8 md:grid-cols-2">
                <div className="flex flex-col rounded-[2.5rem] bg-white dark:bg-[#111218] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:border dark:border-white/5 lg:p-14 transition-transform hover:-translate-y-1 duration-300">
                    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[radial-gradient(circle_at_center,#f0f7ff_0%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] border border-blue-50/50 dark:border-white/5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-none">
                            <span className="text-xl font-bold font-serif leading-none mt-[-2px]">i</span>
                        </div>
                    </div>
                    <h2 className="mb-4 text-[1.8rem] font-bold tracking-tight text-[#12131a] dark:text-white lg:text-[2rem]">
                        About Roam
                    </h2>
                    <p className="text-[1.1rem] leading-[1.7] text-[#6b7280] dark:text-slate-400">
                        Roam offers flexible workspace solutions across multiple
                        states, serving mobile professionals with high-tech spaces
                        and community events to foster connections.
                    </p>
                </div>

                <div className="flex flex-col rounded-[2.5rem] bg-white dark:bg-[#111218] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:border dark:border-white/5 lg:p-14 transition-transform hover:-translate-y-1 duration-300">
                    <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[radial-gradient(circle_at_center,#f0f7ff_0%,#ffffff_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] border border-blue-50/50 dark:border-white/5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-[#0d1627] text-blue-600 dark:text-[#4f88ff] shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                    <h2 className="mb-4 text-[1.8rem] font-bold tracking-tight text-[#12131a] dark:text-white lg:text-[2rem]">
                        Challenges
                    </h2>
                    <p className="text-[1.1rem] leading-[1.7] text-[#6b7280] dark:text-slate-400">
                        Rapidly changing event schedules, room availability, and
                        evolving customer needs caused teams to chase
                        information rather than serve customers.
                    </p>
                </div>
            </div>
        </section>
    );
};
