import { logger } from '../config/logger.js';
import { startScheduler } from './scheduler.js';

export const init = async () => {
  logger.info('Initializing Skillflow API test runtime');
  logger.info('MongoDB connection skipped for test server');
  startScheduler();
};
