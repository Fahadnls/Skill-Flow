import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroHeader } from '../components/HeroHeader';
import { SiteFooter } from '../components/SiteFooter';

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: '98%',      title: 'Customer Satisfaction',  description: 'The founding story of Hubit is a tale of passion' },
    { value: '4.9/5',    title: 'Average Support Rating', description: 'Our team is built on fast, helpful human support.' },
    { value: '10+ Years',title: 'Industry Experience',    description: 'Hubit is backed by a decade of learning expertise.' },
    { value: '100K+',    title: 'Users Empowered',        description: 'Built to scale with growing teams across the world.' },
];

export const AboutPage = () => {
    const heroRef  = useRef<HTMLDivElement>(null);
    const missionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero badge + heading + subtext stagger up
            gsap.fromTo(
                '.about-hero-badge',
                { opacity: 0, y: 28 },
                { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', delay: 0.18 },
            );
            gsap.fromTo(
                '.about-hero-h1',
                { opacity: 0, y: 44, skewY: 1.5 },
                { opacity: 1, y: 0, skewY: 0, duration: 0.75, ease: 'power3.out', delay: 0.3 },
            );
            gsap.fromTo(
                '.about-hero-sub',
                { opacity: 0, y: 28 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.45 },
            );

            // Stats stagger in on scroll
            gsap.fromTo(
                '.about-stat',
                { opacity: 0, y: 44, scale: 0.95 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.62, ease: 'power3.out', stagger: 0.1,
                    scrollTrigger: { trigger: '.about-stats-grid', start: 'top 85%', once: true },
                },
            );
        });

        const missionCtx = gsap.context(() => {
            // Image slides from left
            gsap.fromTo(
                '.about-mission-img',
                { opacity: 0, x: -60 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-mission-img', start: 'top 85%', once: true },
                },
            );
            // Text slides from right
            gsap.fromTo(
                '.about-mission-text',
                { opacity: 0, x: 60 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: '.about-mission-text', start: 'top 85%', once: true },
                },
            );
        }, missionRef.current!);

        return () => {
            ctx.revert();
            missionCtx.revert();
        };
    }, []);

    return (
        <main className="min-h-screen overflow-hidden bg-[#f8f8fc] dark:bg-[#0a0a0c] text-[#12131a] dark:text-white transition-colors duration-500">
            <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f8fc_0%,#f5f5fb_100%)] dark:bg-[linear-gradient(180deg,#0a0a0c_0%,#0c0c10_100%)] px-4 pb-24 pt-7 sm:px-5 lg:px-4 transition-colors duration-500">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(193,228,255,0.32),transparent_22%),radial-gradient(circle_at_88%_8%,rgba(225,238,255,0.48),transparent_24%),linear-gradient(180deg,rgba(248,248,252,0.94),rgba(246,246,251,0.98))] dark:bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.03),transparent_22%),radial-gradient(circle_at_88%_8%,rgba(255,255,255,0.04),transparent_24%),linear-gradient(180deg,rgba(10,10,12,0.9),rgba(10,10,12,0.98))] transition-colors duration-500" />
                </div>

                <div className="relative mx-auto max-w-[1540px]">
                    <HeroHeader activePath="/about" />

                    <div ref={heroRef} className="px-4 pb-4 pt-20 text-center sm:px-8 lg:px-16 lg:pt-24">
                        <div className="about-hero-badge inline-flex items-center gap-2 rounded-full bg-[#fff2f5]/90 dark:bg-white/5 px-4 py-[7px] text-[0.98rem] font-bold tracking-[0.01em] text-[#6f88d9] dark:text-[#a0caff] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                            <span className="text-[0.82rem] text-[#ff9f86]">✦</span>
                            <span>About Skillflow</span>
                        </div>

                        <h1 className="about-hero-h1 mx-auto mt-8 max-w-[1060px] text-[3rem] font-extrabold leading-[0.98] tracking-[-0.085em] text-[#111218] dark:text-white sm:text-[4.4rem] lg:text-[5.35rem]">
                            Empowering Teams to Learn and Grow Together
                        </h1>

                        <p className="about-hero-sub mx-auto mt-8 max-w-[860px] text-[1.2rem] leading-[1.7] text-[#999ead] dark:text-slate-400 sm:text-[1.36rem]">
                            From zero to IPO, Skillflow helps the world&apos;s most ambitious teams
                            do their best work
                        </p>

                        <div className="about-stats-grid mt-20 grid gap-12 text-left sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
                            {stats.map((item) => (
                                <article key={item.title} className="about-stat max-w-[270px]">
                                    <div className="text-[2.25rem] font-extrabold tracking-[-0.06em] text-[#111218] dark:text-white sm:text-[2.75rem]">
                                        {item.value}
                                    </div>
                                    <h2 className="mt-4 text-[1.14rem] font-bold tracking-[-0.04em] text-[#1a1b22] dark:text-white">
                                        {item.title}
                                    </h2>
                                    <p className="mt-3 text-[1rem] leading-[1.65] text-[#7c808f] dark:text-slate-400">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section ref={missionRef} className="bg-white dark:bg-[#0a0a0c] border-t border-transparent dark:border-white/10 px-4 py-24 sm:px-6 lg:px-4 lg:py-28 transition-colors duration-500">
                <div className="mx-auto grid max-w-[1540px] items-center gap-14 lg:grid-cols-[0.96fr_1.04fr] lg:gap-20">
                    <div className="about-mission-img mx-auto w-full max-w-[760px] overflow-hidden rounded-[38px] shadow-[0_24px_48px_rgba(182,191,214,0.12)] dark:shadow-[0_24px_48px_rgba(0,0,0,0.6)] border border-transparent dark:border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
                            alt="Team collaboration"
                            className="h-full w-full object-cover"
                            loading="eager"
                            decoding="async"
                        />
                    </div>

                    <div className="about-mission-text max-w-[760px]">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2f5]/90 dark:bg-white/5 px-4 py-[7px] text-[0.98rem] font-bold tracking-[0.01em] text-[#8c6ca4] dark:text-[#dfbfff] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.78)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                            <span className="text-[0.82rem] text-[#7c95f7] dark:text-[#a0baff]">✦</span>
                            <span>our story</span>
                        </div>

                        <h2 className="mt-7 text-[3rem] font-extrabold leading-[0.98] tracking-[-0.085em] text-[#111218] dark:text-white sm:text-[4.35rem]">
                            Where Purpose Meets Possibility
                        </h2>

                        <p className="mt-7 text-[1.18rem] leading-[1.82] text-[#8d92a2] dark:text-slate-400 sm:text-[1.26rem]">
                            What began as a simple idea to make learning easier and more impactful
                            has grown into a platform that supports thousands of teams worldwide.
                            Hubit was built by educators, designers, and engineers who believe that
                            knowledge should be accessible, engaging, and integrated into everyday
                            workflows. Every feature, every update, and every success story reflects
                            our mission: to empower people through smarter learning experiences.
                        </p>

                        <button
                            type="button"
                            className="mt-8 rounded-[16px] bg-[#e8eefc] dark:bg-white/10 px-7 py-[13px] text-[1rem] font-semibold text-[#17181f] dark:text-white underline underline-offset-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#dce7fb] dark:hover:bg-white/20"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
};
