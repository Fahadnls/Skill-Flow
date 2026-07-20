import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroHeader } from '../components/HeroHeader';
import { SiteFooter } from '../components/SiteFooter';

gsap.registerPlugin(ScrollTrigger);

const plans = [
    {
        name: 'Starter',
        subtitle: 'Ideal for early-stage small teams',
        price: '$5',
        note: '/ month',
        badge: '30 Days Free Trial',
        badgeTone: 'bg-[#111111] text-white dark:bg-white dark:text-black',
        accent: '-20%',
        features: ['Mobile friendly', 'Support for global users', 'User-friendly UI', 'Image support', 'Basic reports', 'Team onboarding presets'],
    },
    {
        name: 'Pro Version',
        subtitle: 'Best choice for growing teams',
        price: '$12',
        note: '/ month',
        badge: 'Most Popular',
        badgeTone: 'bg-[#dcefff] text-[#111111] dark:bg-[#2a456e] dark:text-white',
        featured: true,
        features: ['Mobile friendly', 'Multi-language support', 'Support for global users', 'User-friendly UI', 'Image support', 'Multi-source responses', 'Team-specific analytics'],
    },
    {
        name: 'Premium',
        subtitle: 'For large orgs with advanced needs',
        price: '$49',
        note: '/ month',
        features: ['Mobile friendly', 'Multi-language support', 'Support for global users', 'User-friendly UI', 'Image support', 'Multi-source responses', 'Basewell AI sync', 'Guided learning paths'],
    },
];

const pricingHighlights = [
    {
        title: 'Annual Savings',
        value: 'Save up to 20%',
        description: 'Switch to yearly billing and cut recurring cost without losing features.',
    },
    {
        title: 'Scale Flexibly',
        value: 'Seats adjust instantly',
        description: 'Upgrade or expand across teams without contract friction or hidden setup fees.',
    },
    {
        title: 'Support Included',
        value: 'Human help on every tier',
        description: 'Every plan includes onboarding guidance and responsive product support.',
    },
];

export const PricingPage = () => {
    const plansRef = useRef<HTMLElement>(null);
    const highlightsRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance
            gsap.fromTo('.pricing-hero-badge', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.18 });
            gsap.fromTo('.pricing-hero-h1',    { opacity: 0, y: 44, skewY: 1.5 }, { opacity: 1, y: 0, skewY: 0, duration: 0.72, ease: 'power3.out', delay: 0.3 });
            gsap.fromTo('.pricing-hero-sub',   { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.58, ease: 'power3.out', delay: 0.44 });
        });

        const plansCtx = gsap.context(() => {
            gsap.fromTo(
                '.pricing-card',
                { opacity: 0, y: 54, scale: 0.94 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.68, ease: 'power3.out', stagger: 0.12,
                    scrollTrigger: { trigger: '.pricing-cards-grid', start: 'top 85%', once: true },
                },
            );
        }, plansRef.current!);

        const highlightsCtx = gsap.context(() => {
            gsap.fromTo(
                '.pricing-highlight',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0,
                    duration: 0.62, ease: 'power3.out', stagger: 0.1,
                    scrollTrigger: { trigger: '.pricing-highlights-grid', start: 'top 86%', once: true },
                },
            );
        }, highlightsRef.current!);

        return () => {
            ctx.revert();
            plansCtx.revert();
            highlightsCtx.revert();
        };
    }, []);

    return (
        <main className="min-h-screen overflow-hidden bg-[#f7f8fc] dark:bg-[#0a0a0c] text-[#15161c] dark:text-white transition-colors duration-500">
            <section className="relative overflow-hidden px-4 pb-20 pt-7 sm:px-5 lg:px-4">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,#e2f2ff_0%,#f0f5fd_28%,#f7f7fc_72%,#f8f8fc_100%)] dark:bg-[linear-gradient(180deg,rgba(10,10,12,0.95),rgba(10,10,12,0.98))] transition-colors duration-500" />
                    <div className="absolute left-[-12%] top-[1%] h-[34rem] w-[34rem] rounded-full bg-[#c8e7ff]/84 dark:bg-[#1a3b5c]/30 blur-[100px] transition-colors duration-500" />
                    <div className="absolute right-[-6%] top-[-3%] h-[30rem] w-[30rem] rounded-full bg-[#c7ecff]/72 dark:bg-[#1a4b4b]/20 blur-[102px] transition-colors duration-500" />
                    <div className="absolute left-[14%] top-[54%] h-[28rem] w-[22rem] rounded-full bg-[#ffc6b8]/42 dark:bg-[#6e2b1c]/20 blur-[108px] transition-colors duration-500" />
                    <div className="absolute right-[18%] top-[48%] h-[26rem] w-[28rem] rounded-full bg-[#dcebff]/34 dark:bg-[#1a3b5c]/20 blur-[108px] transition-colors duration-500" />
                    <div className="absolute inset-x-0 top-[10%] h-[24rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.16)_52%,transparent_78%)] dark:bg-[radial-gradient(circle_at_center,rgba(10,10,12,0.8)_0%,rgba(10,10,12,0.2)_52%,transparent_78%)] transition-colors duration-500" />
                </div>

                <div className="relative mx-auto max-w-[1540px]">
                    <HeroHeader activePath="/pricing" />

                    <section className="px-3 pb-8 pt-20 text-center sm:px-4 lg:px-6 lg:pt-24">
                        <div className="pricing-hero-badge inline-flex items-center gap-2 rounded-full bg-[#fff3f5]/92 dark:bg-white/5 px-4 py-[7px] text-[0.92rem] font-bold tracking-[0.01em] text-[#6d88dc] dark:text-[#a0caff] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                            <span className="text-[0.8rem] text-[#ff9f86]">✦</span>
                            <span>pricing</span>
                        </div>

                        <h1 className="pricing-hero-h1 mx-auto mt-7 max-w-[980px] text-[3rem] font-extrabold leading-[0.98] tracking-[-0.085em] text-[#111218] dark:text-white sm:text-[4.2rem] lg:text-[5rem]">
                            One Platform For Team Learning And Growth
                        </h1>

                        <p className="pricing-hero-sub mx-auto mt-7 max-w-[820px] text-[1.08rem] leading-[1.65] text-[#9197a8] dark:text-slate-400 lg:text-[1.16rem]">
                            From zero to IPO, Skillflow helps the world&apos;s most ambitious teams do their best work
                        </p>
                    </section>

                    <section ref={plansRef} className="px-2 pb-8 sm:px-3 lg:px-4">
                        <div className="pricing-cards-grid grid gap-5 lg:grid-cols-3 lg:gap-6">
                            {plans.map((plan) => (
                                <article
                                    key={plan.name}
                                    className={`pricing-card relative overflow-hidden rounded-[30px] border px-8 pb-8 pt-10 text-left shadow-[0_16px_36px_rgba(170,182,213,0.10)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(170,182,213,0.18)] dark:hover:shadow-[0_24px_48px_rgba(0,0,0,0.8)] ${
                                        plan.featured
                                            ? 'border-[#d8ebff] dark:border-white/10 bg-[linear-gradient(180deg,rgba(238,249,255,0.98),rgba(230,244,255,0.96))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]'
                                            : 'border-white/85 dark:border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(252,253,255,0.94))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]'
                                    }`}
                                >
                                    {plan.badge ? (
                                        <div className={`absolute left-8 top-5 rounded-full px-4 py-[8px] text-[0.82rem] font-bold ${plan.badgeTone}`}>
                                            {plan.badge}
                                        </div>
                                    ) : null}

                                    <div className={plan.badge ? 'mt-9' : 'mt-2'}>
                                        <h2 className="text-[1.2rem] font-extrabold tracking-[-0.04em] text-[#111218] dark:text-white">{plan.name}</h2>
                                        <p className="mt-3 text-[1.02rem] leading-[1.55] text-[#8c92a3] dark:text-slate-400">{plan.subtitle}</p>
                                    </div>

                                    <div className="mt-8 flex items-end gap-3">
                                        <span className="text-[4rem] font-extrabold leading-none tracking-[-0.08em] text-[#111218] dark:text-white">{plan.price}</span>
                                        <span className="pb-3 text-[1rem] text-[#7f8596] dark:text-slate-400">{plan.note}</span>
                                        {plan.accent ? (
                                            <span className="mb-3 rounded-full bg-[#eaf1ff] dark:bg-white/10 px-3 py-1 text-[0.9rem] font-semibold text-[#4f88ff] dark:text-[#80aaff]">{plan.accent}</span>
                                        ) : null}
                                    </div>

                                    <div className="mt-8 h-px bg-[#e9edf4] dark:bg-white/10" />

                                    <ul className="mt-8 space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-[1rem] text-[#242730] dark:text-slate-300">
                                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#d7dbe5] dark:border-white/20 text-[0.7rem] text-[#8f95a6] dark:text-slate-400">○</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section ref={highlightsRef} className="px-2 pb-6 pt-10 sm:px-3 lg:px-4">
                        <div className="pricing-highlights-grid grid gap-6 lg:grid-cols-3">
                            {pricingHighlights.map((item) => (
                                <article
                                    key={item.title}
                                    className="pricing-highlight rounded-[28px] border border-white/85 dark:border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(249,251,255,0.9))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] px-8 py-8 shadow-[0_16px_34px_rgba(174,186,216,0.10)] dark:shadow-[0_16px_34px_rgba(0,0,0,0.5)] backdrop-blur-md"
                                >
                                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(180deg,#eef6ff_0%,#e3efff_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] text-[#3b80ff] dark:text-[#80aaff] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-none">✦</div>
                                    <h2 className="text-[1.12rem] font-extrabold tracking-[-0.04em] text-[#111218] dark:text-white">{item.title}</h2>
                                    <div className="mt-4 text-[1.6rem] font-extrabold tracking-[-0.05em] text-[#111218] dark:text-white">{item.value}</div>
                                    <p className="mt-4 text-[1rem] leading-[1.65] text-[#8f95a6] dark:text-slate-400">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
};
