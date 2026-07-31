import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featureCards = [
    {
        title: 'Start Creating',
        description:
            'Avoid the clutter. Skillflow empowers you to create intelligent, efficient training that keeps your entire team in sync.',
        icon: '✣',
        stat: '3× faster',
        statLabel: 'content creation',
        previewLines: [
            { w: '80%', color: '#c8dcff' },
            { w: '60%', color: '#dde8ff' },
            { w: '72%', color: '#dde8ff' },
        ],
        accentColor: '#4a8dff',
    },
    {
        title: 'Smart Sync',
        description:
            'Import knowledge from tools and links. Skillflow syncs everything automatically with always-updated content agents.',
        icon: '↻',
        stat: '99.9%',
        statLabel: 'sync accuracy',
        featured: true,
        previewLines: [
            { w: '90%', color: '#b8d4ff' },
            { w: '65%', color: '#ccdeff' },
            { w: '78%', color: '#ccdeff' },
        ],
        accentColor: '#2f6fff',
    },
    {
        title: 'Instant Share',
        description:
            "Publishing is instant. Routing logic sends training exactly where it's needed, no manual sorting required.",
        icon: '↗',
        stat: '<1 sec',
        statLabel: 'to publish',
        previewLines: [
            { w: '70%', color: '#c8dcff' },
            { w: '85%', color: '#dde8ff' },
            { w: '55%', color: '#dde8ff' },
        ],
        accentColor: '#7b61ff',
    },
];

// Mini animated UI preview inside card
const CardPreview = ({ lines, accent }: { lines: { w: string; color: string }[]; accent: string }) => (
    <div className="relative mx-auto mb-7 mt-1 w-[88%] overflow-hidden rounded-[16px] border border-white/80 dark:border-white/10 bg-white/70 dark:bg-[#1a1d26]/80 p-4 shadow-[0_6px_20px_rgba(130,155,210,0.10)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.4)] backdrop-blur-sm">
        {/* Top bar with dots */}
        <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: accent, opacity: 0.55 }} />
            <span className="h-2 w-2 rounded-full bg-[#e0e6f4] dark:bg-slate-600" />
            <span className="h-2 w-2 rounded-full bg-[#e0e6f4] dark:bg-slate-600" />
            <div className="ml-auto h-[7px] w-[40%] rounded-full bg-[#eef2fb] dark:bg-slate-700" />
        </div>
        {/* Content lines */}
        <div className="space-y-2">
            {lines.map((line, i) => (
                <div
                    key={i}
                    className="h-[8px] rounded-full"
                    style={{ width: line.w, backgroundColor: line.color, opacity: 0.8 }}
                />
            ))}
        </div>
        {/* Action button stub */}
        <div className="mt-3 flex items-center justify-end">
            <div
                className="h-[22px] w-[60px] rounded-full"
                style={{ background: `linear-gradient(90deg, ${accent}55, ${accent}88)` }}
            />
        </div>
    </div>
);

export const CoreFeaturesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            // Heading block fades up
            gsap.fromTo(
                '.cfs-header',
                { opacity: 0, y: 44 },
                {
                    opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
                    scrollTrigger: { trigger: el, start: 'top 82%', once: true },
                },
            );

            // Stats row fades up
            gsap.fromTo(
                '.cfs-stat-strip',
                { opacity: 0, y: 24 },
                {
                    opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
                    scrollTrigger: { trigger: '.cfs-stat-strip', start: 'top 88%', once: true },
                },
            );

            // Cards stagger in from below with scale
            gsap.fromTo(
                '.cfs-card',
                { opacity: 0, y: 56, scale: 0.92 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.7, ease: 'power3.out',
                    stagger: 0.12,
                    scrollTrigger: { trigger: '.cfs-cards', start: 'top 85%', once: true },
                },
            );

            // Preview widgets inside cards animate in with a slight delay
            gsap.fromTo(
                '.cfs-preview',
                { opacity: 0, y: 18, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.6, ease: 'power3.out',
                    stagger: 0.14,
                    scrollTrigger: { trigger: '.cfs-cards', start: 'top 82%', once: true },
                    delay: 0.3,
                },
            );

            // Animate the stat counter numbers with continuous float
            gsap.fromTo(
                '.cfs-stat-num',
                { opacity: 0, y: 12, scale: 0.88 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.55, ease: 'back.out(1.7)',
                    stagger: 0.1,
                    scrollTrigger: { trigger: '.cfs-stat-strip', start: 'top 90%', once: true },
                },
            );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative z-10 overflow-hidden bg-[#f9f8fd] dark:bg-transparent px-4 pb-28 pt-20 sm:px-6 lg:px-8 transition-colors duration-500">
            {/* Background decor */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,248,253,0.96),rgba(249,248,253,0.98))] dark:bg-[linear-gradient(180deg,rgba(10,10,12,0),rgba(10,10,12,0.9))]" />
                <div className="absolute left-1/2 top-[8%] h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-[#eef5ff]/40 dark:bg-[#1a2b5e]/20 blur-[90px]" />
                <div className="absolute left-[10%] top-[50%] h-[18rem] w-[18rem] rounded-full bg-[#ffe3dc]/18 dark:bg-[#4a2b25]/20 blur-[100px]" />
                <div className="absolute right-[10%] top-[48%] h-[18rem] w-[18rem] rounded-full bg-[#dfecff]/24 dark:bg-[#1d2a45]/20 blur-[90px]" />
                {/* Dot grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(100,140,255,0.07)_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(circle,rgba(100,140,255,0.05)_1.5px,transparent_1.5px)] bg-[length:28px_28px] opacity-60" />
            </div>

            <div className="relative mx-auto max-w-[1120px]">
                {/* Header */}
                <div className="cfs-header text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2f5]/90 dark:bg-white/5 px-4 py-[7px] text-[0.88rem] font-bold tracking-[0.01em] text-[#6f88d9] dark:text-[#a0caff] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                        <span className="text-[0.8rem] text-[#ff9f86]">✦</span>
                        <span>Core Features</span>
                    </div>

                    <h2 className="mt-6 text-[2.6rem] font-extrabold leading-[1] tracking-[-0.07em] text-[#111218] dark:text-white sm:text-[3.4rem]">
                        Clarity Speed Results.
                    </h2>

                    <p className="mx-auto mt-5 max-w-[720px] text-[1rem] leading-[1.7] text-[#9194a4] dark:text-slate-400 sm:text-[1.08rem]">
                        Skillflow streamlines training — create, launch, and track content in minutes.
                    </p>
                </div>

                {/* Stat strip */}
                <div className="cfs-stat-strip mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                    {[
                        { num: '10K+', label: 'Teams Trained' },
                        { num: '98%', label: 'Satisfaction Rate' },
                        { num: '4.9★', label: 'Avg. Rating' },
                        { num: '2min', label: 'Avg. Create Time' },
                    ].map((s) => (
                        <div key={s.num} className="flex flex-col items-center gap-0.5">
                            <span className="cfs-stat-num text-[1.75rem] font-extrabold tracking-[-0.06em] text-[#111218] dark:text-white">
                                {s.num}
                            </span>
                            <span className="text-[0.82rem] font-medium text-[#9aa0b4] dark:text-slate-400">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Cards */}
                <div className="cfs-cards mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-4">
                    {featureCards.map((card) => (
                        <article
                            key={card.title}
                            className={`cfs-card group relative overflow-hidden rounded-[30px] border border-white/85 dark:border-white/10 text-center shadow-[0_18px_42px_rgba(160,176,214,0.10)] dark:shadow-none backdrop-blur-[18px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(160,176,214,0.18)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] ${card.featured
                                    ? 'px-7 pb-8 pt-8 ring-1 ring-white/75 dark:ring-white/10 before:absolute before:inset-[10px] before:rounded-[24px] before:border before:border-white/75 dark:before:border-white/5 before:content-[""] bg-[linear-gradient(180deg,rgba(246,246,255,0.94),rgba(236,244,255,0.92))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]'
                                    : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(252,253,255,0.9))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-7 pb-8 pt-8'
                                }`}
                        >
                            {/* Hover glow */}
                            <div
                                className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${card.featured
                                        ? 'bg-[radial-gradient(circle_at_24%_88%,rgba(255,206,198,0.26),transparent_30%),radial-gradient(circle_at_76%_16%,rgba(190,230,255,0.42),transparent_36%)] dark:bg-[radial-gradient(circle_at_24%_88%,rgba(255,206,198,0.1),transparent_30%),radial-gradient(circle_at_76%_16%,rgba(190,230,255,0.15),transparent_36%)]'
                                        : 'bg-[radial-gradient(circle_at_50%_10%,rgba(193,229,255,0.14),transparent_36%)] dark:bg-[radial-gradient(circle_at_50%_10%,rgba(193,229,255,0.1),transparent_36%)]'
                                    }`}
                            />

                            {card.featured ? (
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_92%,rgba(255,212,205,0.26),transparent_30%),radial-gradient(circle_at_78%_16%,rgba(196,233,255,0.46),transparent_38%),linear-gradient(180deg,rgba(245,245,255,0.76),rgba(232,241,255,0.62))] dark:bg-[radial-gradient(circle_at_22%_92%,rgba(255,212,205,0.05),transparent_30%),radial-gradient(circle_at_78%_16%,rgba(196,233,255,0.1),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
                            ) : (
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_8%,rgba(206,232,255,0.16),transparent_32%)] dark:bg-[radial-gradient(circle_at_52%_8%,rgba(206,232,255,0.06),transparent_32%)]" />
                            )}

                            <div className="relative z-10 mx-auto flex w-fit flex-col items-center">
                                {/* Icon circle */}
                                <div className="relative mb-5 mt-2 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[linear-gradient(180deg,#deebff_0%,#d2e3ff_100%)] dark:bg-[linear-gradient(180deg,#1e2942_0%,#111827_100%)] text-[1.45rem] font-bold text-[#3e7fff] dark:text-[#7bb0ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                                    <div className="absolute inset-[-10px] rounded-full bg-[radial-gradient(circle,rgba(103,149,255,0.18)_1.3px,transparent_1.3px)] bg-[length:8px_8px] opacity-45 dark:opacity-20" />
                                    <span className="relative z-10">{card.icon}</span>
                                </div>

                                {/* Mini UI preview widget */}
                                <div className="cfs-preview w-full">
                                    <CardPreview lines={card.previewLines} accent={card.accentColor} />
                                </div>

                                <h3 className="text-[1.05rem] font-extrabold tracking-[-0.04em] text-[#121319] dark:text-white sm:text-[1.12rem]">
                                    {card.title}
                                </h3>

                                {/* Stat pill */}
                                <div className="mt-3 flex items-center gap-2">
                                    <span
                                        className="rounded-full px-3 py-[4px] text-[0.78rem] font-bold"
                                        style={{
                                            background: `${card.accentColor}25`,
                                            color: card.accentColor,
                                        }}
                                    >
                                        {card.stat}
                                    </span>
                                    <span className="text-[0.78rem] text-[#a2a8ba] dark:text-slate-400">{card.statLabel}</span>
                                </div>

                                <p className="mt-5 max-w-[290px] text-[0.97rem] leading-[1.75] text-[#9699a7] dark:text-slate-400">
                                    {card.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <div className="mt-14 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-5">
                    <span className="text-[0.96rem] text-[#9197a8] dark:text-slate-400">
                        Join <span className="font-bold text-[#111218] dark:text-white">10,000+</span> teams already using Skillflow
                    </span>
                    <button
                        type="button"
                        className="rounded-full bg-gradient-to-b from-[#4a8dff] to-[#2f6fff] px-6 py-2.5 text-[0.9rem] font-bold text-white shadow-[0_8px_20px_rgba(47,111,255,0.22)] dark:shadow-[0_8px_20px_rgba(47,111,255,0.4)] transition-all hover:-translate-y-0.5"
                    >
                        Start Free →
                    </button>
                </div>
            </div>
        </section>
    );
};
