import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const avatars = [
    'https://i.pravatar.cc/80?img=12',
    'https://i.pravatar.cc/80?img=32',
    'https://i.pravatar.cc/80?img=48',
];

export const HeroCopy = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(
                '.hero-badge',
                { opacity: 0, y: -18 },
                { opacity: 1, y: 0, duration: 0.55 },
            )
                .fromTo(
                    '.hero-heading',
                    { opacity: 0, x: -52, skewX: -1 },
                    { opacity: 1, x: 0, skewX: 0, duration: 0.72 },
                    '-=0.3',
                )
                .fromTo(
                    '.hero-para',
                    { opacity: 0, y: 28 },
                    { opacity: 1, y: 0, duration: 0.6 },
                    '-=0.45',
                )
                .fromTo(
                    '.hero-cta',
                    { opacity: 0, y: 32, scale: 0.96 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.6 },
                    '-=0.38',
                );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative z-10 px-1 pt-4 sm:px-2 lg:pl-0 lg:pt-[94px]">
            <div className="hero-badge inline-flex items-center gap-2 rounded-full bg-[#fff3f5]/90 dark:bg-white/5 px-3 py-[7px] text-[0.91rem] font-bold tracking-[0.01em] text-[#6b82c9] dark:text-[#a0caff] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                <span className="text-[0.78rem] text-[#ff9f86]">✦</span>
                <span>Teams That Perform</span>
            </div>

            <h1 className="hero-heading mt-7 max-w-[605px] text-[2.85rem] font-extrabold leading-[0.98] tracking-[-0.085em] text-[#17181f] dark:text-white sm:text-[3.7rem] lg:text-[4.34rem]">
                AI Training Built for Real Workflows
            </h1>

            <p className="hero-para mt-7 max-w-[640px] text-[1rem] leading-[1.7] text-[#8b8f9f] dark:text-slate-400 sm:text-[1.08rem]">
                Empower your team with AI-driven training, faster onboarding, and smarter
                knowledge sharing at scale.
            </p>

            <div className="hero-cta mt-8 flex flex-col items-start gap-5 md:flex-row md:items-center">
                <button
                    type="button"
                    className="rounded-2xl bg-[#171417] dark:bg-white px-[30px] py-[18px] text-base font-bold text-white dark:text-[#111218] shadow-[0_24px_44px_rgba(27,25,31,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_52px_rgba(27,25,31,0.18)] dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
                >
                    Get Started For Free
                </button>

                <div className="flex items-center gap-4">
                    <div className="flex items-center" aria-hidden="true">
                        {avatars.map((avatar, index) => (
                            <img
                                key={avatar}
                                src={avatar}
                                alt=""
                                loading="eager"
                                decoding="async"
                                className={`${
                                    index === 0 ? 'ml-0' : '-ml-[9px]'
                                } inline-flex h-[34px] w-[34px] rounded-full border-2 border-white dark:border-[#0a0a0c] object-cover shadow-[0_10px_20px_rgba(120,130,150,0.1)] transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:scale-[1.12] hover:shadow-[0_18px_28px_rgba(92,108,150,0.22)]`}
                            />
                        ))}
                        <span className="-ml-[9px] inline-flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-white dark:border-[#0a0a0c] bg-[#232127] dark:bg-[#2f6fff] text-[0.82rem] font-bold text-white shadow-[0_10px_20px_rgba(120,130,150,0.1)] transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:scale-[1.08] hover:bg-[#17181f] hover:shadow-[0_18px_28px_rgba(55,56,69,0.28)]">
                            +
                        </span>
                    </div>

                    <div className="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-1">
                        <div className="text-base tracking-[0.16em] text-[#ffac4a]">★★★★★</div>
                        <div className="text-base font-bold text-[#3a3a43] dark:text-slate-200">4.8</div>
                        <div className="col-start-2 text-[0.82rem] font-semibold text-[#777b8c] dark:text-slate-400">
                            From 1k+ reviews
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
