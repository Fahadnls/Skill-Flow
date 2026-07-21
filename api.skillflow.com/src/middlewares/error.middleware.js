import { logger } from '../config/logger.js';
import { fail } from '../utils/response.util.js';

export const notFoundMiddleware = (req, res) => {
  return fail(res, `Route not found: ${req.method} ${req.originalUrl}`, 404);
};

export const errorMiddleware = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  logger.error(err.message || 'Unhandled error', {
    method: req.method,
    path: req.originalUrl,
    stack: err.stack,
  });

  return fail(res, err.message || 'Internal server error', err.statusCode || 500);
};
