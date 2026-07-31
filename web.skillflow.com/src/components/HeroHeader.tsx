import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';
import { Brand } from './Brand';
import { SiteLink } from './SiteLink';
import { useTheme } from '../lib/ThemeProvider';

const navItems = [
    { label: 'About', to: '/about' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Blog', to: '/blog' },
    { label: 'Customers', to: '/customers' },
];

interface HeroHeaderProps {
    activePath?: '/' | '/about' | '/pricing' | '/blog' | '/customers';
}

// ── Hamburger Icon ──────────────────────────────────────────────────────────
const HamburgerIcon = ({ open }: { open: boolean }) => (
    <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
        <span
            className={`block h-[2px] w-5 origin-center rounded-full bg-[#1a1d26] dark:bg-white transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''
                }`}
        />
        <span
            className={`block h-[2px] w-5 rounded-full bg-[#1a1d26] dark:bg-white transition-all duration-300 ${open ? 'scale-x-0 opacity-0' : ''
                }`}
        />
        <span
            className={`block h-[2px] w-5 origin-center rounded-full bg-[#1a1d26] dark:bg-white transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''
                }`}
        />
    </span>
);

// ── Theme Toggle Button ─────────────────────────────────────────────────────
const ThemeToggle = ({ compact = false }: { compact?: boolean }) => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`flex items-center justify-center rounded-full bg-[#f4f7ff] dark:bg-white/10 text-[#2f6fff] dark:text-[#a0caff] transition-all hover:bg-[#e8eeff] dark:hover:bg-white/20 hover:scale-105 active:scale-95 ${compact ? 'h-8 w-8' : 'h-10 w-10'}`}
            aria-label="Toggle Theme"
            title="Toggle Theme"
        >
            {isDark ? (
                <svg width={compact ? "15" : "18"} height={compact ? "15" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(160,202,255,0.6)]"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
            ) : (
                <svg width={compact ? "16" : "20"} height={compact ? "16" : "20"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff9f86]"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
            )}
        </button>
    );
};

// ── Mobile Menu Dropdown (portal) ───────────────────────────────────────────
const MobileMenu = ({
    open,
    activePath,
    onClose,
    anchorRect,
}: {
    open: boolean;
    activePath: string;
    onClose: () => void;
    anchorRect: DOMRect | null;
}) => {
    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const panel = panelRef.current;
        if (!panel) return;

        if (open) {
            gsap.fromTo(
                panel,
                { opacity: 0, y: -14, scale: 0.96 },
                { opacity: 1, y: 0, scale: 1, duration: 0.32, ease: 'power3.out' },
            );
            // Stagger items in
            gsap.fromTo(
                panel.querySelectorAll('.mob-item'),
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.26, ease: 'power2.out', stagger: 0.05, delay: 0.1 },
            );
        } else {
            gsap.to(panel, { opacity: 0, y: -8, scale: 0.97, duration: 0.2, ease: 'power2.in' });
        }
    }, [open]);

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const handler = (e: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [open, onClose]);

    if (!anchorRect) return null;

    const top = anchorRect.bottom + 10;
    const left = anchorRect.left;

    return createPortal(
        <div
            ref={panelRef}
            style={{
                position: 'fixed',
                top,
                left: Math.min(left, window.innerWidth - 260),
                minWidth: Math.min(anchorRect.width, window.innerWidth - 24),
                zIndex: 99999,
                opacity: 0,
                pointerEvents: open ? 'auto' : 'none',
            }}
            className="rounded-[20px] border border-white/80 dark:border-white/10 bg-white/90 dark:bg-[#111218]/95 p-3 shadow-[0_20px_48px_rgba(47,111,255,0.14),0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
        >
            {/* Theme Toggle Mobile */}
            <div className="mob-item mb-2 flex items-center justify-between px-2">
                <span className="text-[0.85rem] font-bold text-[#666d7f] dark:text-slate-400">Theme</span>
                <ThemeToggle />
            </div>

            {/* Nav links */}
            <nav className="mb-2 flex flex-col gap-1">
                {navItems.map((item) => (
                    <SiteLink
                        key={item.label}
                        to={item.to}
                        className={`mob-item flex items-center rounded-[12px] px-4 py-3 text-[0.98rem] font-semibold transition-colors duration-150 hover:bg-[#f4f7ff] dark:hover:bg-white/5 ${activePath === item.to
                                ? 'bg-[#eef4ff] dark:bg-white/10 text-[#2f6fff] dark:text-white'
                                : 'text-[#1a1d26] dark:text-slate-300'
                            }`}
                        onClick={onClose}
                    >
                        {item.label}
                    </SiteLink>
                ))}
            </nav>

            {/* Divider */}
            <div className="mob-item my-2 h-px bg-[#edf0f7] dark:bg-white/10" />

            {/* CTA buttons */}
            <div className="mob-item flex flex-col gap-2">
                <button
                    type="button"
                    className="w-full rounded-[12px] bg-[#eef4fb]/90 dark:bg-white/10 py-3 text-[0.95rem] font-bold text-[#1a1d26] dark:text-white transition-all hover:bg-[#dde8f8] dark:hover:bg-white/20"
                >
                    Log In
                </button>
                <button
                    type="button"
                    className="w-full rounded-[12px] bg-gradient-to-b from-[#4a8dff] to-[#2f6fff] py-3 text-[0.95rem] font-bold text-white shadow-[0_8px_20px_rgba(47,111,255,0.28)] transition-all hover:shadow-[0_12px_28px_rgba(47,111,255,0.36)]"
                >
                    Get Started
                </button>
            </div>
        </div>,
        document.body,
    );
};


// ── Compact (sticky) nav ────────────────────────────────────────────────────
const CompactNavContent = ({
    activePath,
    onHamburgerClick,
    menuOpen,
}: {
    activePath: string;
    onHamburgerClick: (rect: DOMRect) => void;
    menuOpen: boolean;
}) => {
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <Brand />

            {/* Desktop links (hidden on mobile) */}
            <nav
                className="hidden lg:flex items-center gap-9 font-medium text-[#666d7f] dark:text-slate-400 text-[0.9rem] transition-all duration-500"
                aria-label="Primary navigation"
            >
                {navItems.map((item) =>
                    item.to ? (
                        <SiteLink
                            key={item.label}
                            to={item.to}
                            className={`transition-colors duration-200 hover:text-[#17181f] dark:hover:text-white ${activePath === item.to
                                    ? 'font-bold text-[#17181f] dark:text-white underline decoration-[1.5px] underline-offset-[8px]'
                                    : ''
                                }`}
                        >
                            {item.label}
                        </SiteLink>
                    ) : (
                        <span key={item.label} className="cursor-default transition-colors hover:text-[#17181f] dark:hover:text-white">
                            {item.label}
                        </span>
                    ),
                )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2 ml-auto">
                <ThemeToggle compact />
                <button
                    type="button"
                    className="rounded-full bg-[#eef4fb]/90 dark:bg-white/10 px-4 py-1.5 text-[0.82rem] font-bold text-[#1a1d26] dark:text-white transition-all hover:bg-white dark:hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(161,180,214,0.18)]"
                >
                    Log In
                </button>
                <button
                    type="button"
                    className="rounded-full bg-gradient-to-b from-[#4a8dff] to-[#2f6fff] px-4 py-1.5 text-[0.82rem] font-bold text-white shadow-[0_8px_20px_rgba(47,111,255,0.2)] transition-all hover:-translate-y-0.5"
                >
                    Get Started
                </button>
            </div>

            {/* Mobile hamburger (only < lg) */}
            <div className="ml-auto flex items-center gap-2 lg:hidden">
                <ThemeToggle compact />
                <button
                    ref={btnRef}
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded={menuOpen}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4f7ff] dark:bg-white/10 transition-all duration-200 hover:bg-[#e8eeff] dark:hover:bg-white/20"
                    onClick={() => {
                        if (btnRef.current) {
                            onHamburgerClick(btnRef.current.getBoundingClientRect());
                        }
                    }}
                >
                    <HamburgerIcon open={menuOpen} />
                </button>
            </div>
        </>
    );
};


// ── In-flow header nav (visible when not scrolled) ──────────────────────────
const InFlowNavContent = ({ activePath }: { activePath: string }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    const handleHamburger = () => {
        if (btnRef.current) {
            setAnchorRect(btnRef.current.getBoundingClientRect());
        }
        setMenuOpen((v) => !v);
    };

    return (
        <>
            <Brand />

            <nav
                className="hidden lg:flex flex-wrap items-center gap-5 font-medium text-[#666d7f] dark:text-slate-400 lg:justify-center lg:gap-9 text-[0.97rem] transition-all duration-500"
                aria-label="Primary navigation"
            >
                {navItems.map((item) =>
                    item.to ? (
                        <SiteLink
                            key={item.label}
                            to={item.to}
                            className={`transition-colors duration-200 hover:text-[#17181f] dark:hover:text-white ${activePath === item.to
                                    ? 'font-bold text-[#17181f] dark:text-white underline decoration-[1.5px] underline-offset-[8px]'
                                    : ''
                                }`}
                        >
                            {item.label}
                        </SiteLink>
                    ) : (
                        <span key={item.label} className="cursor-default transition-colors hover:text-[#17181f] dark:hover:text-white">
                            {item.label}
                        </span>
                    ),
                )}
            </nav>

            <div className="flex w-auto items-center gap-3">
                {/* Desktop Theme + CTAs */}
                <div className="hidden lg:flex items-center gap-3">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="rounded-2xl bg-[#eef4fb]/90 dark:bg-white/10 px-6 py-3 text-[0.95rem] font-bold text-[#1a1d26] dark:text-white transition-all hover:bg-white dark:hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(161,180,214,0.18)] flex-none"
                    >
                        Log In
                    </button>
                    <button
                        type="button"
                        className="rounded-2xl bg-gradient-to-b from-[#4a8dff] to-[#2f6fff] px-6 py-3 text-[0.95rem] font-bold text-white shadow-[0_14px_28px_rgba(47,111,255,0.2)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(47,111,255,0.28)] flex-none"
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile hamburger */}
                <div className="flex items-center gap-2 lg:hidden">
                    <ThemeToggle />
                    <button
                        ref={btnRef}
                        type="button"
                        aria-label="Open navigation menu"
                        aria-expanded={menuOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f7ff] dark:bg-white/10 transition-all duration-200 hover:bg-[#e8eeff] dark:hover:bg-white/20"
                        onClick={handleHamburger}
                    >
                        <HamburgerIcon open={menuOpen} />
                    </button>
                </div>
            </div>

            <MobileMenu
                open={menuOpen}
                activePath={activePath}
                onClose={() => setMenuOpen(false)}
                anchorRect={anchorRect}
            />
        </>
    );
};


// ── Main exported component ──────────────────────────────────────────────────
export const HeroHeader = ({ activePath = '/' }: HeroHeaderProps) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            if (window.scrollY > 40) setMenuOpen(false); // close on scroll
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleHamburger = (rect: DOMRect) => {
        setAnchorRect(rect);
        setMenuOpen((v) => !v);
    };

    return (
        <>
            {/* ── In-flow header (always rendered, hides when scrolled) ── */}
            <header
                ref={headerRef}
                className={`
                    relative z-10 mx-auto mt-2
                    flex min-h-[72px] w-full max-w-[1480px] items-center gap-4
                    rounded-[22px] border border-white/80 dark:border-white/10 bg-white/55 dark:bg-[#111218]/45
                    px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] dark:shadow-none backdrop-blur-xl
                    transition-all duration-500 ease-in-out
                    sm:px-6
                    lg:grid lg:grid-cols-[1fr_auto_auto] lg:gap-8 lg:px-3 lg:py-0 lg:pl-3 lg:pr-4
                    ${scrolled ? 'pointer-events-none opacity-0' : 'opacity-100'}
                `}
            >
                <InFlowNavContent activePath={activePath} />
            </header>

            {/* ── Floating pill — rendered into body via portal ── */}
            {createPortal(
                <div
                    aria-hidden={!scrolled}
                    className={`
                        fixed left-1/2 z-[9999]
                        -translate-x-1/2
                        w-[min(860px,calc(100vw-1.5rem))]
                        transition-all duration-500 ease-in-out
                        ${scrolled
                            ? 'top-3 opacity-100 translate-y-0'
                            : '-top-24 opacity-0 -translate-y-4 pointer-events-none'
                        }
                    `}
                    style={{ willChange: 'top, opacity, transform' }}
                >
                    <header
                        className="
                            flex min-h-[52px] items-center gap-3
                            rounded-full border border-white/80 dark:border-white/10
                            bg-white/65 dark:bg-[#111218]/85 px-3 py-2 backdrop-blur-2xl
                            shadow-[0_8px_32px_rgba(47,111,255,0.14),0_2px_12px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.7)]
                            dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]
                            transition-all duration-500 ease-in-out
                            sm:px-4
                            lg:grid lg:grid-cols-[1fr_auto_auto] lg:gap-6 lg:px-5
                        "
                    >
                        <CompactNavContent
                            activePath={activePath}
                            onHamburgerClick={handleHamburger}
                            menuOpen={menuOpen}
                        />
                    </header>
                    <MobileMenu
                        open={menuOpen}
                        activePath={activePath}
                        onClose={() => setMenuOpen(false)}
                        anchorRect={anchorRect}
                    />
                </div>,
                document.body,
            )}
        </>
    );
};
