export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 5000),
  host: process.env.HOST || '127.0.0.1',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  fileRoot: process.env.FILE_ROOT || 'public/file',
};
