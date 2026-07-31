import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '../lib/ThemeProvider';

interface PageLoaderProps {
    transitionState: 'IDLE' | 'EXITING' | 'ENTERING';
}

export const PageLoader = ({ transitionState }: PageLoaderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const columnsRef = useRef<HTMLDivElement[]>([]);
    const logoRef = useRef<HTMLDivElement>(null);
    const isFirstRun = useRef(true);
    
    const { theme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const container = containerRef.current;
        const columns = columnsRef.current.filter(Boolean); // Clean any nulls
        const logo = logoRef.current;
        if (!container || columns.length !== 5 || !logo) return;

        if (transitionState === 'EXITING') {
            gsap.set(container, { display: 'flex' });
            gsap.set(columns, { transformOrigin: 'bottom' });
            // Swoop up from bottom
            gsap.fromTo(
                columns,
                { scaleY: 0 },
                { scaleY: 1, duration: 0.6, ease: 'power4.inOut', stagger: 0.08 }
            );

            gsap.fromTo(
                logo,
                { opacity: 0, scale: 0.5, y: 30 },
                { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(2)', delay: 0.3 }
            );
        } else if (transitionState === 'IDLE') {
            // First run condition means we started the app on 'IDLE'. The columns are already covering the screen implicitly by standard CSS or we snap them.
            if (isFirstRun.current) {
                gsap.set(container, { display: 'flex' });
                gsap.set(columns, { scaleY: 1 });
            }

            if (!isFirstRun.current) {
                gsap.to(logo, { opacity: 0, scale: 0.8, y: -20, duration: 0.3, ease: 'power3.in' });
            }

            // Lift upwards and expose the underlying shifting screen
            gsap.set(columns, { transformOrigin: 'top' });
            gsap.to(columns, {
                scaleY: 0,
                duration: 0.65,
                ease: 'power4.inOut',
                stagger: 0.08,
                delay: isFirstRun.current ? 0.35 : 0.15,
                onComplete: () => {
                    gsap.set(container, { display: 'none' });
                }
            });

            isFirstRun.current = false;
        }
    }, [transitionState]);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100000] flex w-full h-full overflow-hidden"
        >
            {/* 5 columns */}
            {[0, 1, 2, 3, 4].map((i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) columnsRef.current[i] = el;
                    }}
                    style={{ transform: 'scaleY(1)' }} // Intially block screen on mount until IDLE cleans it up
                    className={`h-full w-1/5 will-change-transform ${
                        isDark ? 'bg-[#060608] border-r border-[#1a1a20]/30 shadow-[0_0_20px_rgba(0,0,0,0.8)]' : 'bg-[#e9efff] border-r border-[#d8e4ff]/50 shadow-[0_0_20px_rgba(180,200,240,0.5)]'
                    } ${i === 4 ? 'border-r-0' : ''}`}
                />
            ))}

            {/* Centered App Logo / Badge */}
            <div ref={logoRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center">
                <div className={`relative flex h-[80px] w-[80px] items-center justify-center rounded-[24px] bg-gradient-to-br from-[#4a8dff] to-[#1f5ce0] ${
                    isDark ? 'shadow-[0_18px_50px_rgba(47,111,255,0.4)]' : 'shadow-[0_20px_50px_rgba(47,111,255,0.3)]'
                }`}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                        <circle cx="20" cy="20" r="18" fill="white" fillOpacity="0.18" />
                        <path d="M12 20C12 15.58 15.58 12 20 12C22.48 12 24.72 13.04 26.3 14.72L20 20V28C15.58 28 12 24.42 12 20Z" fill="white" />
                        <path d="M20 12C24.42 12 28 15.58 28 20C28 22.48 26.96 24.72 25.28 26.3L20 20H12C12 15.58 15.58 12 20 12Z" fill="white" fillOpacity="0.55" />
                    </svg>
                    <div className={`absolute inset-[-6px] rounded-[30px] border border-[rgba(74,141,255,0.4)] mix-blend-overlay`} />
                </div>
                
                <div className={`mt-5 text-[1.2rem] font-bold tracking-[0.2em] uppercase ${isDark ? 'text-white' : 'text-[#1a2b4b]'} mix-blend-overlay`}>
                    Skillflow
                </div>
            </div>
        </div>
    );
};
