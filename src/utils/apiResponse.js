const apiResponse = (res, statusCode, status, message, data = null) => {
  res.status(statusCode).json({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = apiResponse;
