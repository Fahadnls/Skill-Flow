import { Router } from 'express';
import { getHealth } from '../config/health.js';
import { ok } from '../utils/response.util.js';

export const publicRouter = Router();

publicRouter.get('/', (req, res) => {
  return ok(res, {
    service: 'skillflow-api',
    status: 'running',
    routes: {
      health: ['/health', '/health.json'],
      public: ['/hello-world'],
      admin: ['/api/ap', '/api/ap/dashboard'],
      mobile: ['/ma', '/ma/home'],
    },
  }, 'Skillflow API test server is running');
});

publicRouter.get('/health', (req, res) => {
  return res.status(200).send('OK');
});

publicRouter.get('/health.json', (req, res) => {
  return ok(res, getHealth(), 'Health check passed');
});

publicRouter.get('/hello-world', (req, res) => {
  return ok(res, { service: 'skillflow-api', route: req.originalUrl }, 'Hello world');
});
