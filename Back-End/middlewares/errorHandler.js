const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  console.error("❌ Error:", err);

  res.status(statusCode).json({
    status,
    message: err.message 
      ? err.message // Use the error message if available
      : req.__("errors.server_error"), // Use i18n for default error message
    //just show stack in development
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorHandler;
