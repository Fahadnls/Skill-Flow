export const getHealth = () => ({
  ok: true,
  service: 'skillflow-api',
  status: 'healthy',
  uptime: Math.round(process.uptime()),
  timestamp: new Date().toISOString(),
});
