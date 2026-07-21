import { Router } from 'express';
import { authMiddleware } from '../../middlewares/auth.middleware.js';
import { checkPermission } from '../../middlewares/permission.middleware.js';
import { ok } from '../../utils/response.util.js';

export const adminRouter = Router();

adminRouter.get('/', authMiddleware, checkPermission('dashboard', 'read'), (req, res) => {
  return ok(res, {
    surface: 'admin',
    basePath: '/api/ap',
    user: req.user,
    permission: req.permission,
    modules: ['auth', 'admins', 'roles', 'dashboard', 'products', 'variants', 'categories', 'brands', 'orders'],
  }, 'Admin API is reachable');
});

adminRouter.get('/dashboard', authMiddleware, checkPermission('dashboard', 'read'), (req, res) => {
  return ok(res, {
    revenue: 128600,
    ordersToday: 42,
    activeCustomers: 18420,
    lowStockProducts: 7,
  }, 'Dashboard test payload');
});
