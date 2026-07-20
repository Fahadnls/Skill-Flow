import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { CustomersPage } from './pages/CustomersPage';
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { SiteRouterProvider, SitePath, useSiteRouter } from './lib/site-router';

// The routing switch
const getPageComponent = (path: SitePath) => {
    switch (path) {
        case '/about': return <AboutPage />;
        case '/pricing': return <PricingPage />;
        case '/blog': return <BlogPage />;
        case '/customers': return <CustomersPage />;
        case '/':
        default: return <HomePage />;
    }
};

const AppContent = () => {
    const { pathname } = useSiteRouter();

    // We hold TWO permanent slots, storing only the path strings to allow pure render derivations
    const [pathA, setPathA] = useState<SitePath | null>(pathname);
    const [pathB, setPathB] = useState<SitePath | null>(null);
    const [activeSlot, setActiveSlot] = useState<'A' | 'B'>('A');

    const slotARef = useRef<HTMLDivElement>(null);
    const slotBRef = useRef<HTMLDivElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If the path matches our currently active slot's path, do nothing
        const currentActivePath = activeSlot === 'A' ? pathA : pathB;
        if (pathname === currentActivePath) return;

        // Populate the inactive slot with the new path
        if (activeSlot === 'A') {
            setPathB(pathname);
        } else {
            setPathA(pathname);
        }
    }, [pathname]); // activeSlot does not need to be a dependency here if we only listen to pathname changes!

    // Animate when the inactive slot gets populated
    useEffect(() => {
        const animate = (outgoing: HTMLDivElement | null, incoming: HTMLDivElement | null, onComplete: () => void) => {
            const loader = loaderRef.current;
            if (!outgoing || !incoming || !loader) return;

            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.set(outgoing, { clearProps: 'all' });
                    gsap.set(incoming, { clearProps: 'all' });
                    gsap.set(loader, { display: 'none' });
                    onComplete();
                }
            });

            // 1. Setup initial state
            // Incoming is placed purely on top, but masked out completely.
            gsap.set(incoming, {
                zIndex: 10,
                opacity: 1,
                clipPath: 'circle(0% at 50% 50%)'
            });
            gsap.set(outgoing, { zIndex: 1 });

            // 2. Display translucent loader
            gsap.set(loader, { display: 'flex', opacity: 0 });
            tl.to(loader, { opacity: 1, duration: 0.25, ease: 'power2.out' });

            // Hold loading state for 400ms so user can enjoy the loading animation over the transparent bg
            tl.to({}, { duration: 0.4 });

            // 3. Fade out loader & BOOM the incoming page open
            tl.to(loader, { opacity: 0, duration: 0.2, ease: 'power2.in' });

            // The Boom effect expands the clipPath entirely across screen
            tl.to(incoming, {
                clipPath: 'circle(150% at 50% 50%)',
                duration: 0.9,
                ease: 'expo.inOut'
            }, "-=0.1");

            // Outgoing page gracefully recedes backwards into darkness
            tl.to(outgoing, {
                scale: 0.92,
                opacity: 0.5,
                duration: 0.9,
                ease: 'expo.inOut'
            }, "<");
        };

        // If slotB is newly populated and we are currently on A
        if (activeSlot === 'A' && pathB) {
            animate(slotARef.current, slotBRef.current, () => {
                setActiveSlot('B');
                setPathA(null);
            });
        }
        // If slotA is newly populated and we are currently on B
        else if (activeSlot === 'B' && pathA) {
            animate(slotBRef.current, slotARef.current, () => {
                setActiveSlot('A');
                setPathB(null);
            });
        }
    }, [pathA, pathB, activeSlot]);

    return (
        <div className="relative min-h-screen w-full bg-[#f4f7ff] dark:bg-[#0a0a0c] overflow-x-hidden">
            
            {/* GLOBAL CENTER LOADER MASK */}
            <div 
                ref={loaderRef}
                style={{ display: 'none' }}
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/10 dark:bg-black/50 backdrop-blur-[8px]"
            >
                <div className="relative flex items-center justify-center animate-pulse">
                    <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-gradient-to-br from-[#4a8dff] to-[#1f5ce0] shadow-[0_18px_50px_rgba(47,111,255,0.4)]">
                        <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                            <circle cx="20" cy="20" r="18" fill="white" fillOpacity="0.18" />
                            <path d="M12 20C12 15.58 15.58 12 20 12C22.48 12 24.72 13.04 26.3 14.72L20 20V28C15.58 28 12 24.42 12 20Z" fill="white" />
                            <path d="M20 12C24.42 12 28 15.58 28 20C28 22.48 26.96 24.72 25.28 26.3L20 20H12C12 15.58 15.58 12 20 12Z" fill="white" fillOpacity="0.55" />
                        </svg>
                        <div className="absolute inset-[-6px] rounded-[28px] border border-[rgba(74,141,255,0.4)] mix-blend-overlay" />
                    </div>
                </div>
            </div>

            {/* SLOT A */}
            <div
                ref={slotARef}
                className={`w-full min-h-screen bg-white dark:bg-[#0a0a0c] will-change-transform ${!pathA ? 'hidden' : ''} ${activeSlot === 'A' ? 'relative' : 'absolute top-0 left-0'}`}
                style={{ zIndex: activeSlot === 'A' ? 10 : 1 }}
            >
                {pathA && getPageComponent(pathA)}
            </div>

            {/* SLOT B */}
            <div
                ref={slotBRef}
                className={`w-full min-h-screen bg-white dark:bg-[#0a0a0c] will-change-transform ${!pathB ? 'hidden' : ''} ${activeSlot === 'B' ? 'relative' : 'absolute top-0 left-0'}`}
                style={{ zIndex: activeSlot === 'B' ? 10 : 1 }}
            >
                {pathB && getPageComponent(pathB)}
            </div>

        </div>
    );
};

const App = () => (
    <SiteRouterProvider>
        <AppContent />
    </SiteRouterProvider>
);

export default App;
