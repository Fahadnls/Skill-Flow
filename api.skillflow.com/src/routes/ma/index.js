import { Router } from 'express';
import { ok } from '../../utils/response.util.js';

export const mobileRouter = Router();

mobileRouter.get('/', (req, res) => {
  return ok(res, {
    surface: 'mobile',
    basePath: '/ma',
    modules: ['auth', 'home', 'products', 'filters', 'brands', 'campaigns', 'cart', 'orders'],
  }, 'Mobile API is reachable');
});

mobileRouter.get('/home', (req, res) => {
  return ok(res, {
    banners: 3,
    featuredProducts: 12,
    activeCampaigns: 2,
  }, 'Mobile home test payload');
});
