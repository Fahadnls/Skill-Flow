interface AdminIconProps {
  name: string;
  className?: string;
}

export const AdminIcon = ({ name, className = 'h-5 w-5' }: AdminIconProps) => {
  const paths: Record<string, JSX.Element> = {
    dashboard: <path d="M4 13h6V4H4v9Zm10 7h6V4h-6v16ZM4 20h6v-5H4v5Z" />,
    users: <path d="M16 11a4 4 0 1 0-3.46-6M3 20a7 7 0 0 1 14 0M16 13a5 5 0 0 1 5 5v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
    courses: <path d="M5 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V5a1 1 0 0 1 1-1Zm2 13h12M8 8h7M8 11h5" />,
    teams: <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20a5 5 0 0 1 10 0M11 20a5 5 0 0 1 10 0" />,
    analytics: <path d="M4 19V5M4 19h17M8 15l3-4 4 3 5-8M8 19v-4M13 19v-5M18 19v-8" />,
    content: <path d="M5 4h14v16H5V4Zm3 4h8M8 12h8M8 16h5" />,
    pricing: <path d="M20 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6M9 9h6M9 13h4M17 15v6M14 18h6" />,
    settings: <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0-12v2M12 18.5v2M4.57 4.57 6 6M18 18l1.43 1.43M3.5 12h2M18.5 12h2M4.57 19.43 6 18M18 6l1.43-1.43" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    search: <path d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    export: <path d="M12 3v12M8 7l4-4 4 4M5 14v5h14v-5" />,
    moon: <path d="M21 13.2A8 8 0 1 1 10.8 3 6.5 6.5 0 0 0 21 13.2Z" />,
    sun: <path d="M12 4V2M12 22v-2M4.93 4.93 3.5 3.5M20.5 20.5l-1.43-1.43M4 12H2M22 12h-2M4.93 19.07 3.5 20.5M20.5 3.5l-1.43 1.43M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] ?? paths.dashboard}
    </svg>
  );
};
