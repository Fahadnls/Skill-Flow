import { Router } from 'express';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getHealth } from '../config/health.js';
import { ok } from '../utils/response.util.js';

export const publicRouter = Router();

const __dirname = dirname(fileURLToPath(import.meta.url));
const healthTemplate = readFileSync(join(__dirname, '../templates/health.html'), 'utf8');

const escapeHtml = (value) => {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
};

const formatUptime = (seconds) => {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`;
};

const renderHealth = () => {
  const health = getHealth();
  const view = {
    ...health,
    uptime: formatUptime(health.uptime),
  };

  return healthTemplate.replaceAll(/\{\{(\w+)\}\}/g, (_, key) => {
    return escapeHtml(view[key] ?? '');
  });
};

publicRouter.get('/', (req, res) => {
  return ok(res, {
    service: 'skillflow-api',
    status: 'running',
    routes: {
      health: ['/health', '/tapi/health', '/health.json'],
      public: ['/hello-world'],
      admin: ['/api/ap', '/api/ap/dashboard'],
      mobile: ['/ma', '/ma/home'],
    },
  }, 'Skillflow API test server is running');
});

publicRouter.get(['/health', '/tapi/health'], (req, res) => {
  return res.status(200).type('html').send(renderHealth());
});

publicRouter.get('/health.json', (req, res) => {
  return ok(res, getHealth(), 'Health check passed');
});

publicRouter.get('/hello-world', (req, res) => {
  return ok(res, { service: 'skillflow-api', route: req.originalUrl }, 'Hello world');
});
