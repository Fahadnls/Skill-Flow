export const authMiddleware = (req, res, next) => {
  req.user = {
    id: 'test-admin',
    role: 'super_admin',
    permissions: ['dashboard:read'],
  };

  return next();
};
