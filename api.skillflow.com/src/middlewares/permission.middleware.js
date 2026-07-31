export const checkPermission = (moduleName, action) => {
  return (req, res, next) => {
    req.permission = `${moduleName}:${action}`;
    return next();
  };
};
