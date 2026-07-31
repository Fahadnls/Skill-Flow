import { useEffect } from 'react';
import gsap from 'gsap';

export const CustomersHero = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.fromTo('.ch-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 }, 0.18);
            tl.fromTo('.ch-h1',    { opacity: 0, y: 44, skewY: 1.2 }, { opacity: 1, y: 0, skewY: 0, duration: 0.7 }, 0.3);
            tl.fromTo('.ch-sub',   { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.55 }, 0.45);
            tl.fromTo('.ch-img',   { opacity: 0, y: 36, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.72 }, 0.55);
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative px-5 pt-20 pb-16 text-center lg:pt-28">
            <div className="mx-auto flex flex-col items-center">
                <div className="ch-badge mb-6 flex items-center gap-2 rounded-full bg-[#ffede6] dark:bg-white/5 px-4 py-1.5 text-[0.95rem] font-semibold text-[#f95738] dark:text-[#ff9f86]">
                    <span>📢</span>
                    <span>Customers</span>
                </div>
                <h1 className="ch-h1 max-w-[800px] text-[3.2rem] font-extrabold leading-[1.05] tracking-tight text-[#12131a] dark:text-white sm:text-[4rem] lg:text-[4.5rem]">
                    Trusted by Teams Everywhere
                </h1>
                <p className="ch-sub mt-8 max-w-[700px] text-[1.1rem] text-[#6b7280] dark:text-slate-400 leading-relaxed">
                    Skillflow empowers teams worldwide to streamline training, boost
                    engagement, and achieve results faster.
                </p>

                <div className="ch-img relative mt-16 w-full max-w-[1240px] overflow-hidden rounded-[2.5rem] bg-gray-200 dark:bg-[#111] shadow-2xl dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                    <img
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000"
                        alt="Customers meeting"
                        className="h-[400px] w-full object-cover lg:h-[650px] brightness-95"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="flex h-24 w-24 items-center justify-center rounded-full border-[1.5px] border-white/60 bg-white/20 pl-2 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/30 hover:border-white/80">
                            <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
