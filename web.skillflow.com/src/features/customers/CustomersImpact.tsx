const impacts = [
    'Saved 30+ hours monthly per employee',
    'Faster onboarding and upskilling',
    'Improved team confidence and efficiency',
    'Maintained premium customer service',
];

export const CustomersImpact = () => {
    return (
        <section className="relative px-5 py-16 lg:py-24">
            <div className="mx-auto max-w-[1240px] grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                <div className="flex flex-col items-start pt-4 lg:pt-0">
                    <div className="mb-8 flex items-center gap-2 rounded-full bg-[#efedfc] dark:bg-white/5 px-4 py-1.5 text-[0.95rem] font-semibold text-[#5a50e5] dark:text-[#a0caff]">
                        <span className="text-[1.1rem]">📢</span>
                        <span>Results</span>
                    </div>
                    <h2 className="mb-10 text-[2.7rem] font-extrabold leading-[1.08] tracking-tight text-[#12131a] dark:text-white md:text-[3.2rem] lg:text-[3.8rem]">
                        Measurable Impact<br />and Success
                    </h2>
                    <ul className="flex flex-col gap-5">
                        {impacts.map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-[1.12rem] text-[#8b8f9f] dark:text-slate-400">
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
                <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-white dark:bg-[#111218] dark:border dark:border-white/5 p-2">
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" 
                        alt="Measurable impact" 
                        className="h-[350px] w-full object-cover lg:h-[450px] rounded-[2rem]"
                    />
                </div>
            </div>
        </section>
    );
};
