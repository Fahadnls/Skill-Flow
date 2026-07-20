import { AdminLayout } from './features/admin/AdminLayout';
import { useAdminTheme } from './features/admin/useAdminTheme';

export const App = () => {
  const theme = useAdminTheme();

  return <AdminLayout theme={theme} />;
};

