import { useEffect, useMemo, useState } from 'react';

export type AdminTheme = 'light' | 'dark';

const getInitialTheme = (): AdminTheme => {
  const stored = localStorage.getItem('skillflow-admin-theme');

  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useAdminTheme = () => {
  const [theme, setTheme] = useState<AdminTheme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('skillflow-admin-theme', theme);
  }, [theme]);

  return useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  );
};
