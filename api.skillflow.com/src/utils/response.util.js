export const ok = (res, data, message = 'OK', statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const fail = (res, message = 'Something went wrong', statusCode = 500, details = undefined) => {
  return res.status(statusCode).json({
    success: false,
    message,
    ...(details ? { details } : {}),
  });
};
