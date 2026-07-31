import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const checklistItems = [
    'Optimize performance through insights',
    'Simplify team training processes',
    'Track learning in real-time',
    'Connect tools, stay synced',
    'Empower teams with knowledge',
];

const groupAvatars = [
    'https://i.pravatar.cc/64?img=11',
    'https://i.pravatar.cc/64?img=21',
    'https://i.pravatar.cc/64?img=31',
    'https://i.pravatar.cc/64?img=41',
];

export const AboutSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            // Left visual cards: each slides in from the left with stagger
            gsap.fromTo(
                '.about-card',
                { opacity: 0, x: -60, rotate: -2 },
                {
                    opacity: 1, x: 0, rotate: 0,
                    duration: 0.72, ease: 'power3.out',
                    stagger: 0.14,
                    scrollTrigger: { trigger: el, start: 'top 80%', once: true },
                },
            );

            // Right text block slides in from the right
            gsap.fromTo(
                '.about-text',
                { opacity: 0, x: 60 },
                {
                    opacity: 1, x: 0,
                    duration: 0.75, ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 80%', once: true },
                },
            );

            // Checklist items stagger in after text
            gsap.fromTo(
                '.about-check-item',
                { opacity: 0, x: 28 },
                {
                    opacity: 1, x: 0,
                    duration: 0.5, ease: 'power2.out',
                    stagger: 0.08,
                    delay: 0.25,
                    scrollTrigger: { trigger: '.about-text', start: 'top 82%', once: true },
                },
            );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative z-10 overflow-hidden bg-[#f9f8fd] dark:bg-[#0a0a0c] px-0 pb-28 pt-8 transition-colors duration-500">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,248,253,0.99),rgba(249,248,253,0.99))] dark:bg-[linear-gradient(180deg,rgba(10,10,12,0.99),rgba(10,10,12,0.99))]" />
                <div className="absolute left-[24%] top-[40%] h-[14rem] w-[14rem] rounded-full bg-[#e8f1ff]/18 dark:bg-[#1f3a70]/15 blur-[110px]" />
                <div className="absolute right-[20%] top-[28%] h-[12rem] w-[12rem] rounded-full bg-[#ffe8e0]/10 dark:bg-[#522515]/15 blur-[110px]" />
            </div>

            <div className="relative mx-auto max-w-[1480px]">
                <div className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-8">
                    <div className="relative mx-auto h-[470px] w-full max-w-[620px]">
                        <div className="absolute left-[145px] top-[92px] h-[214px] w-[314px] rounded-[28px] bg-[linear-gradient(180deg,rgba(236,243,255,0.82),rgba(233,241,255,0.62))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
                        <div className="absolute left-[175px] top-[146px] h-[164px] w-[314px] rounded-[26px] bg-[linear-gradient(180deg,rgba(238,244,255,0.72),rgba(233,240,255,0.5))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />

                        <article className="about-card absolute left-[8px] top-[160px] w-[292px] rounded-[24px] border border-white/90 dark:border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,251,255,0.94))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-5 shadow-[0_18px_38px_rgba(171,186,220,0.16)] dark:shadow-[0_18px_38px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_48px_rgba(171,186,220,0.22)] dark:hover:shadow-[0_26px_48px_rgba(0,0,0,0.8)]">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-[1.1rem] font-bold tracking-[-0.04em] text-[#14151b] dark:text-white">
                                    Flora Group
                                </h3>
                                <span className="text-[1.2rem] font-bold leading-none text-[#25262d] dark:text-slate-400">...</span>
                            </div>

                            <div className="mt-7 flex items-center justify-between gap-4">
                                <div className="flex items-center">
                                    {groupAvatars.map((avatar, index) => (
                                        <img
                                            key={avatar}
                                            src={avatar}
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                            className={`${
                                                index === 0 ? 'ml-0' : '-ml-[8px]'
                                            } h-9 w-9 rounded-full border-[2.5px] border-white dark:border-[#1a1d26] object-cover shadow-[0_8px_18px_rgba(130,144,180,0.14)] dark:shadow-none`}
                                        />
                                    ))}
                                    <span className="-ml-[8px] inline-flex h-9 w-9 items-center justify-center rounded-full border-[2.5px] border-white dark:border-[#1a1d26] bg-[#06070b] dark:bg-white text-[1.25rem] font-medium leading-none text-white dark:text-[#111218]">
                                        +
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="rounded-[12px] bg-[#e8eefc] dark:bg-white/10 px-6 py-[10px] text-[0.9rem] font-semibold text-[#15161b] dark:text-slate-200 underline underline-offset-2 transition-colors hover:bg-[#dfe8fb] dark:hover:bg-white/20"
                                >
                                    Join Group
                                </button>
                            </div>
                        </article>

                        <article className="about-card absolute left-[270px] top-[40px] w-[248px] rounded-[24px] border border-white/90 dark:border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,251,255,0.94))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-5 py-5 shadow-[0_18px_38px_rgba(171,186,220,0.16)] dark:shadow-[0_18px_38px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_48px_rgba(171,186,220,0.22)] dark:hover:shadow-[0_26px_48px_rgba(0,0,0,0.8)]">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-[1.02rem] font-bold tracking-[-0.04em] text-[#14151b] dark:text-white">
                                    Created Group
                                </h3>
                                <span className="text-[1.2rem] font-bold leading-none text-[#25262d] dark:text-slate-400">...</span>
                            </div>

                            <div className="mt-5 flex items-end justify-between">
                                <span className="text-[1.05rem] font-semibold tracking-[-0.02em] text-[#111218] dark:text-white">
                                    <span className="text-[2.1rem] font-bold">42.00+</span>
                                </span>
                                <span className="pb-1 text-[0.9rem] font-semibold text-[#9dd79e] dark:text-[#85cc91]">10%+</span>
                            </div>
                        </article>

                        <article className="about-card absolute left-[184px] top-[304px] w-[376px] rounded-[24px] border border-white/90 dark:border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(249,251,255,0.94))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-4 py-4 shadow-[0_18px_38px_rgba(171,186,220,0.16)] dark:shadow-[0_18px_38px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_26px_48px_rgba(171,186,220,0.22)] dark:hover:shadow-[0_26px_48px_rgba(0,0,0,0.8)]">
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-[0.98rem] font-bold tracking-[-0.04em] text-[#14151b] dark:text-white">
                                    Recent Activity Feed
                                </h3>
                                <span className="text-[1.1rem] font-bold leading-none text-[#25262d] dark:text-slate-400">...</span>
                            </div>

                            <div className="mt-4 grid grid-cols-[1.15fr_0.95fr_1.25fr_1.5fr] gap-x-3 gap-y-3 text-[0.54rem] text-[#9da2b0] dark:text-slate-500">
                                <span>Team Member</span>
                                <span>Activity</span>
                                <span>Training Module</span>
                                <span>Date Completed</span>

                                <span className="text-[#23252c] dark:text-slate-300">Sarah John</span>
                                <span className="text-[#23252c] dark:text-slate-300">Completed</span>
                                <span className="text-[#23252c] dark:text-slate-300">Onboarding 101</span>
                                <span className="text-[#23252c] dark:text-slate-300">Aug 5, 2025 · 10:34 AM</span>

                                <span className="text-[#23252c] dark:text-slate-300">Daniel Lee</span>
                                <span className="text-[#23252c] dark:text-slate-300">Started</span>
                                <span className="text-[#23252c] dark:text-slate-300">Compliance Basics</span>
                                <span className="text-[#23252c] dark:text-slate-300">Aug 5, 2025 · 9:24 AM</span>

                                <span className="text-[#23252c] dark:text-slate-300">Maria Rodri</span>
                                <span className="text-[#23252c] dark:text-slate-300">Viewed</span>
                                <span className="text-[#23252c] dark:text-slate-300">Product Training · Level 2</span>
                                <span className="text-[#23252c] dark:text-slate-300">Aug 4, 2025 · 4:12 PM</span>
                            </div>
                        </article>
                    </div>

                    <div className="about-text max-w-[620px] lg:pl-6">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2f5]/90 dark:bg-white/5 px-4 py-[7px] text-[0.88rem] font-bold tracking-[0.01em] text-[#6f88d9] dark:text-[#a0caff] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                            <span className="text-[0.8rem] text-[#ff9f86]">✦</span>
                            <span>About us</span>
                        </div>

                        <h2 className="mt-5 text-[2.9rem] font-extrabold leading-[0.98] tracking-[-0.08em] text-[#101117] dark:text-white sm:text-[4rem]">
                            Your Partner in Performance Growth
                        </h2>

                        <p className="mt-6 max-w-[560px] text-[1rem] leading-[1.65] text-[#8f94a3] dark:text-slate-400 sm:text-[1.08rem]">
                            Skillflow streamlines team training, making onboarding and knowledge
                            sharing faster, clearer, and more impactful.
                        </p>

                        <ul className="mt-7 space-y-[14px]">
                            {checklistItems.map((item) => (
                                <li key={item} className="about-check-item flex items-center gap-4 text-[1rem] text-[#7f8493] dark:text-slate-300 sm:text-[1.08rem]">
                                    <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-full border border-[#6fa8ff] dark:border-[#3d83ff]/40 text-[0.7rem] font-bold text-[#3d83ff] dark:text-[#7bb0ff]">
                                        ✓
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className="mt-8 rounded-[14px] bg-[#e8eefc] dark:bg-white/10 px-6 py-[11px] text-[0.96rem] font-semibold text-[#17181f] dark:text-white underline underline-offset-2 transition-colors hover:bg-[#dde7fb] dark:hover:bg-white/20"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
