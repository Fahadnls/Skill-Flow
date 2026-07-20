import { AnchorHTMLAttributes, ReactNode } from 'react';

import { normalizePath, useSiteRouter } from '../lib/site-router';

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
    children: ReactNode;
};

export const SiteLink = ({ to, children, onClick, ...props }: SiteLinkProps) => {
    const { navigate } = useSiteRouter();

    return (
        <a
            {...props}
            href={normalizePath(to)}
            onClick={(event) => {
                onClick?.(event);

                if (
                    event.defaultPrevented ||
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey ||
                    props.target === '_blank'
                ) {
                    return;
                }

                event.preventDefault();
                navigate(to);
            }}
        >
            {children}
        </a>
    );
};
