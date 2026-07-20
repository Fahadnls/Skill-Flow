import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroHeader } from '../components/HeroHeader';
import { SiteFooter } from '../components/SiteFooter';

gsap.registerPlugin(ScrollTrigger);

const blogCards = [
    {
        title: 'What Is Employee Onboarding?',
        description: 'Best practices to successfully onboard new employees',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
        wide: false,
    },
    {
        title: 'Data Security',
        description: 'Ensure your employee handbook is always up-to-date with Skillflow.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80',
        wide: false,
    },
    {
        title: 'Multi-Device Ready',
        description: 'Insights gathered from all integrated platforms',
        custom: 'sync',
        wide: false,
    },
    {
        title: 'Enhance Teamwork: Explore Our Slack Tool',
        description: 'Query company knowledge from a Slack slash command',
        custom: 'slack',
        wide: false,
    },
    {
        title: "SCORM's Future: Driven By Skillflow",
        description: 'Revolutionizing SCORM with AI technology for better learning.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
        wide: false,
    },
    {
        title: 'Data Protection In Focus',
        description: 'Skillflow emphasizes data privacy, fully compliant with GDPR regulations.',
        custom: 'shield',
        wide: false,
    },
    {
        title: 'Skillflow Is GDPR Compliant',
        description: 'Deploy Skillflow without adding undue regulatory burden.',
        image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1600&q=80',
        wide: false,
    },
    {
        title: 'Introducing Enhanced SCORM Support',
        description: 'Modernizing outdated standards with Skillflow Intelligence.',
        image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1600&q=80',
        wide: false,
    },
];

const CustomPreview = ({ kind }: { kind: 'sync' | 'slack' | 'shield' }) => {
    if (kind === 'sync') {
        return (
            <div className="relative mb-10 h-[230px] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(241,247,255,0.96),rgba(237,244,255,0.92))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                <div className="absolute left-[14%] top-[18%] flex w-[48%] items-center gap-3 rounded-[16px] bg-white dark:bg-[#1a1c22] px-4 py-3 shadow-[0_14px_28px_rgba(168,185,218,0.18)] dark:shadow-[0_14px_28px_rgba(0,0,0,0.6)]">
                    <span className="text-[1.45rem] font-bold text-[#f5a623]">G</span>
                    <div>
                        <div className="text-[0.95rem] font-semibold text-[#1b1d24] dark:text-white">Employee Handbook Has Synced</div>
                        <div className="text-[0.78rem] text-[#9aa0b2] dark:text-slate-400">Last Update 2 Days Ago</div>
                    </div>
                </div>
                <div className="absolute left-[28%] top-[42%] flex w-[46%] items-center gap-3 rounded-[16px] bg-white dark:bg-[#1a1c22] px-4 py-3 shadow-[0_14px_28px_rgba(168,185,218,0.18)] dark:shadow-[0_14px_28px_rgba(0,0,0,0.6)]">
                    <span className="text-[1.35rem] font-black text-[#4b8fff]">A</span>
                    <div>
                        <div className="text-[0.95rem] font-semibold text-[#1b1d24] dark:text-white">Employee Handbook Has Synced</div>
                        <div className="text-[0.78rem] text-[#9aa0b2] dark:text-slate-400">Last Update 12 Days Ago</div>
                    </div>
                </div>
            </div>
        );
    }
    if (kind === 'slack') {
        return (
            <div className="relative mb-10 flex h-[230px] items-center justify-center overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(243,247,255,0.98),rgba(236,244,255,0.94))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(112,155,255,0.16)_1.6px,transparent_1.6px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1.6px,transparent_1.6px)] bg-[length:14px_14px] opacity-40" />
                <div className="relative flex items-center">
                    <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#dcebff] dark:bg-[#1a1c22] text-[2.35rem] font-black text-[#2f7bff] dark:text-[#a0caff] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">✣</div>
                    <div className="-ml-4 flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#dcebff]/92 dark:bg-[#1a1c22]/90 text-[3rem] font-medium text-[#2f7bff] dark:text-[#a0caff] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">B</div>
                </div>
            </div>
        );
    }
    return (
        <div className="relative mb-10 flex h-[230px] items-center justify-center overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(243,247,255,0.98),rgba(236,244,255,0.94))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(112,155,255,0.16)_1.6px,transparent_1.6px)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1.6px,transparent_1.6px)] bg-[length:14px_14px] opacity-40" />
            <div className="relative flex h-[112px] w-[112px] items-center justify-center rounded-full bg-[#dcebff] dark:bg-[#1a1c22] text-[2.4rem] text-[#2f7bff] dark:text-[#a0caff] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">🛡</div>
        </div>
    );
};

export const BlogPage = () => {
    const cardsRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero badge/h1/sub
            gsap.fromTo('.blog-hero-badge', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.18 });
            gsap.fromTo('.blog-hero-h1',    { opacity: 0, y: 44, skewY: 1.5 }, { opacity: 1, y: 0, skewY: 0, duration: 0.72, ease: 'power3.out', delay: 0.3 });
            gsap.fromTo('.blog-hero-sub',   { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.58, ease: 'power3.out', delay: 0.44 });
        });

        const cardsCtx = gsap.context(() => {
            gsap.fromTo(
                '.blog-card',
                { opacity: 0, y: 54, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.65, ease: 'power3.out', stagger: 0.08,
                    scrollTrigger: { trigger: '.blog-cards-grid', start: 'top 84%', once: true },
                },
            );
        }, cardsRef.current!);

        return () => {
            ctx.revert();
            cardsCtx.revert();
        };
    }, []);

    return (
        <main className="min-h-screen overflow-hidden bg-[#f8f8fc] dark:bg-[#0a0a0c] text-[#12131a] dark:text-white transition-colors duration-500">
            <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f8fc_0%,#f5f5fb_100%)] dark:bg-[linear-gradient(180deg,#0a0a0c_0%,#0c0c10_100%)] px-4 pb-24 pt-7 sm:px-5 lg:px-4 transition-colors duration-500">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(193,228,255,0.26),transparent_22%),radial-gradient(circle_at_88%_8%,rgba(225,238,255,0.44),transparent_24%),linear-gradient(180deg,rgba(248,248,252,0.94),rgba(246,246,251,0.98))] dark:bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.03),transparent_22%),radial-gradient(circle_at_88%_8%,rgba(255,255,255,0.04),transparent_24%),linear-gradient(180deg,rgba(10,10,12,0.9),rgba(10,10,12,0.98))] transition-colors duration-500" />
                </div>
                <div className="relative mx-auto max-w-[1540px]">
                    <HeroHeader activePath="/blog" />
                    <div className="px-4 pb-4 pt-20 text-center sm:px-8 lg:px-16 lg:pt-24">
                        <div className="blog-hero-badge inline-flex items-center gap-2 rounded-full bg-[#fff2f5]/90 dark:bg-white/5 px-4 py-[7px] text-[0.98rem] font-bold tracking-[0.01em] text-[#6f88d9] dark:text-[#a0caff] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                            <span className="text-[0.82rem] text-[#ff9f86]">✦</span>
                            <span>Blog</span>
                        </div>
                        <h1 className="blog-hero-h1 mx-auto mt-8 max-w-[1060px] text-[3rem] font-extrabold leading-[0.98] tracking-[-0.085em] text-[#111218] dark:text-white sm:text-[4.4rem] lg:text-[5.2rem]">
                            Insights, Ideas, and Inspiration
                        </h1>
                        <p className="blog-hero-sub mx-auto mt-8 max-w-[980px] text-[1.2rem] leading-[1.7] text-[#999ead] dark:text-slate-400 sm:text-[1.36rem]">
                            Stay informed with tips, product updates, and stories to help you grow
                            and lead in today&apos;s fast-changing world.
                        </p>
                    </div>
                </div>
            </section>

            <section ref={cardsRef} className="bg-[#f8f8fc] dark:bg-[#0a0a0c] px-4 pb-28 sm:px-6 lg:px-4 transition-colors duration-500">
                <div className="blog-cards-grid mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-2">
                    {blogCards.map((card) => (
                        <article
                            key={card.title}
                            className="blog-card rounded-[34px] border border-white/90 dark:border-white/10 bg-[linear-gradient(180deg,rgba(251,252,255,0.95),rgba(246,249,255,0.92))] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6 shadow-[0_18px_42px_rgba(182,191,214,0.10)] dark:shadow-[0_18px_42px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_54px_rgba(182,191,214,0.16)] dark:hover:shadow-[0_28px_54px_rgba(0,0,0,0.8)]"
                        >
                            {card.image ? (
                                <div className="mb-10 overflow-hidden rounded-[26px]">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-[260px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                                    />
                                </div>
                            ) : (
                                <CustomPreview kind={card.custom as 'sync' | 'slack' | 'shield'} />
                            )}
                            <h2 className="text-[2rem] font-extrabold leading-[1.08] tracking-[-0.06em] text-[#111218] dark:text-white sm:text-[2.15rem]">
                                {card.title}
                            </h2>
                            <p className="mt-5 max-w-[90%] text-[1.12rem] leading-[1.65] text-[#9197a8] dark:text-slate-400 sm:text-[1.18rem]">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <SiteFooter />
        </main>
    );
};
