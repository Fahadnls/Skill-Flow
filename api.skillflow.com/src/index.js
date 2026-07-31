import http from 'node:http';
import app from './app.js';
import { env } from './config/env.js';
import { logger } from './config/logger.js';
import { init } from './startup/init.js';
import { initSocket } from './startup/socket.js';

const start = async () => {
  await init();

  const server = http.createServer(app);
  initSocket(server);

  server.on('error', (error) => {
    logger.error('HTTP server failed', {
      message: error.message,
      code: error.code,
    });
    process.exit(1);
  });

  server.listen(env.port, env.host, () => {
    logger.info(`Skillflow API test server listening on http://${env.host}:${env.port}`);
  });

  const shutdown = (signal) => {
    logger.info(`Received ${signal}, closing server`);
    server.close(() => {
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
};

start().catch((error) => {
  logger.error('Failed to start Skillflow API test server', {
    message: error.message,
    stack: error.stack,
  });
  process.exit(1);
});
