const checklist = [
    'Real-time Tripleseat Integration',
    'Mobile-First Access on Any Device',
    'Seamless Slack Integration',
    'Native Content Authoring Tools',
];

export const CustomersTransformation = () => {
    return (
        <section className="relative px-5 py-16 lg:py-24">
            <div className="mx-auto max-w-[1240px] grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                <div className="order-2 lg:order-1 relative w-full overflow-hidden rounded-[2.5rem] shadow-xl dark:shadow-2xl dark:shadow-black">
                    <img 
                        src="https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80&w=1200" 
                        alt="Transformation mapping" 
                        className="h-[400px] w-full object-cover lg:h-[480px]"
                    />
                </div>
                <div className="order-1 flex flex-col items-start pt-4 lg:order-2 lg:pt-0 pl-0 lg:pl-6">
                    <div className="mb-6 flex items-center gap-2 rounded-full bg-[#fff0ed] dark:bg-white/5 px-4 py-1.5 text-[0.95rem] font-semibold text-[#ef6b49] dark:text-[#ff9f86]">
                        <span>🚀</span>
                        <span>Solutions</span>
                    </div>
                    <h2 className="mb-10 text-[2.7rem] font-extrabold leading-[1.05] tracking-tight text-[#12131a] dark:text-white md:text-[3rem] lg:text-[3.5rem]">
                        How Skillflow<br />Transformed Roam's<br />Operations
                    </h2>
                    <ul className="flex flex-col gap-5">
                        {checklist.map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-[1.12rem] text-[#6b7280] dark:text-slate-400">
                                <div className="flex pl-[1px] pt-[1px] h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full text-blue-600 dark:text-[#6fa8ff] border-[1.5px] border-blue-400 dark:border-[#4f88ff]/40 bg-white dark:bg-[#0a0a0c] shadow-sm">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
