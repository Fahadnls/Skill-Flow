import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';

interface RevealOptions {
    direction?: RevealDirection;
    distance?: number;
    duration?: number;
    delay?: number;
    stagger?: number;
    ease?: string;
    scrub?: boolean;
    start?: string;
}

/**
 * Animate children of the container on scroll with GSAP + ScrollTrigger.
 * Returns a ref to attach to the container element.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
    selector: string,
    options: RevealOptions = {},
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const targets = el.querySelectorAll<HTMLElement>(selector);
        if (!targets.length) return;

        const {
            direction = 'up',
            distance = 48,
            duration = 0.75,
            delay = 0,
            stagger = 0.1,
            ease = 'power3.out',
            start = 'top 88%',
        } = options;

        const fromVars: gsap.TweenVars = { opacity: 0, ease };
        if (direction === 'up') fromVars.y = distance;
        else if (direction === 'down') fromVars.y = -distance;
        else if (direction === 'left') fromVars.x = distance;
        else if (direction === 'right') fromVars.x = -distance;
        else if (direction === 'scale') {
            fromVars.scale = 0.88;
            fromVars.y = distance * 0.5;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                targets,
                fromVars,
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration,
                    delay,
                    stagger,
                    ease,
                    scrollTrigger: {
                        trigger: el,
                        start,
                        once: true,
                    },
                },
            );
        }, el);

        return () => ctx.revert();
    }, [selector]);

    return ref;
}

/**
 * Simple single-element reveal.
 */
export function useElementReveal<T extends HTMLElement = HTMLDivElement>(
    options: RevealOptions = {},
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const {
            direction = 'up',
            distance = 48,
            duration = 0.75,
            delay = 0,
            ease = 'power3.out',
            start = 'top 88%',
        } = options;

        const fromVars: gsap.TweenVars = { opacity: 0, ease };
        if (direction === 'up') fromVars.y = distance;
        else if (direction === 'down') fromVars.y = -distance;
        else if (direction === 'left') fromVars.x = distance;
        else if (direction === 'right') fromVars.x = -distance;
        else if (direction === 'scale') {
            fromVars.scale = 0.9;
            fromVars.y = distance * 0.5;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(el, fromVars, {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration,
                delay,
                ease,
                scrollTrigger: {
                    trigger: el,
                    start,
                    once: true,
                },
            });
        }, el);

        return () => ctx.revert();
    }, []);

    return ref;
}
