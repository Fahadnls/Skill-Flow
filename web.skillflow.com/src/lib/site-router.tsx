import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type SitePath = '/' | '/about' | '/pricing' | '/blog' | '/customers';

type RouterContextValue = {
    pathname: SitePath;
    navigate: (to: string) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

export const normalizePath = (pathname: string): SitePath => {
    if (pathname.startsWith('/about')) {
        return '/about';
    }

    if (pathname.startsWith('/pricing')) {
        return '/pricing';
    }

    if (pathname.startsWith('/blog')) {
        return '/blog';
    }

    if (pathname.startsWith('/customers')) {
        return '/customers';
    }

    return '/';
};

export const SiteRouterProvider = ({ children }: { children: ReactNode }) => {
    const [pathname, setPathname] = useState<SitePath>(() => normalizePath(window.location.pathname));

    useEffect(() => {
        const handlePopState = () => {
            setPathname(normalizePath(window.location.pathname));
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const navigate = (to: string) => {
        const nextPath = normalizePath(to);

        if (nextPath === pathname) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        window.history.pushState({}, '', nextPath);
        setPathname(nextPath);
        // Use instant scroll when changing pages to prevent smooth scroll fighting with the GSAP mask transition
        window.scrollTo(0, 0);
    };

    return (
        <RouterContext.Provider value={{ pathname, navigate }}>{children}</RouterContext.Provider>
    );
};

export const useSiteRouter = () => {
    const context = useContext(RouterContext);

    if (!context) {
        throw new Error('useSiteRouter must be used within SiteRouterProvider');
    }

    return context;
};
